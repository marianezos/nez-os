<#
  NEZ OS connector installer (Windows). Run by the /nez-connector skill, never by hand.
  Prints one JSON result. "result": "failed" always comes with a "reason" written for the agent.

  -Action check                      Read only: what's installed, what's out of date, what's missing.
  -Action install -Connector capcut  Install, update or repair the CapCut connector. Add -InstallMissing only
                                     after the agent said yes to installing Python, Node.js or FFmpeg.
                                     -MoveFrom "D:\Exports" adds folders finished videos may be moved out of.
#>
param(
  [ValidateSet('check', 'install')] [string]$Action = 'check',
  [ValidateSet('capcut')] [string]$Connector = 'capcut',
  [switch]$InstallMissing,
  [string[]]$MoveFrom = @()
)

$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'
[Console]::OutputEncoding = [Text.Encoding]::UTF8

$PluginRoot = Split-Path -Parent $PSScriptRoot
$NezHome = Join-Path $env:USERPROFILE '.nez-connector'
$CapDir = Join-Path $NezHome 'capcut'
$SpecPath = Join-Path $PluginRoot 'connectors\capcut\connector.json'
$Spec = Get-Content -Raw -LiteralPath $SpecPath | ConvertFrom-Json
$CapCutExe = Join-Path $env:LOCALAPPDATA 'CapCut\Apps\CapCut.exe'
$CapCutProjects = Join-Path $env:LOCALAPPDATA 'CapCut\User Data\Projects\com.lveditor.draft'

function Done($obj) { $obj | ConvertTo-Json -Depth 8; exit 0 }
function Stop-With($step, $reason) {
  [ordered]@{ result = 'failed'; connector = $Connector; step = $step; reason = $reason } | ConvertTo-Json -Depth 4
  exit 1
}
function Refresh-Path {
  $env:Path = [Environment]::GetEnvironmentVariable('Path', 'Machine') + ';' + [Environment]::GetEnvironmentVariable('Path', 'User')
}
function Run($exe, [string[]]$argList, $step, $reason) {
  $out = & $exe @argList 2>&1
  if ($LASTEXITCODE -ne 0) {
    Add-Content -LiteralPath (Join-Path $NezHome 'install.log') -Value ("[{0}] {1} failed:`n{2}" -f (Get-Date -Format s), $step, ($out | Out-String))
    Stop-With $step $reason
  }
  return $out
}

# ---------- what's on this computer ----------
function Find-Python {
  foreach ($v in '3.12', '3.13', '3.11', '3.10') {
    try {
      $p = & py "-$v" -c "import sys;print(sys.executable)" 2>$null
      if ($LASTEXITCODE -eq 0 -and $p -and (Test-Path -LiteralPath $p.Trim())) { return $p.Trim() }
    } catch { }
  }
  try {
    $p = & python -c "import sys;assert (3,10)<=sys.version_info[:2]<(3,14);print(sys.executable)" 2>$null
    if ($LASTEXITCODE -eq 0 -and $p -and $p.Trim() -notmatch 'WindowsApps') { return $p.Trim() }
  } catch { }
  return $null
}
function Node-Ok {
  try { $v = (& node -v 2>$null); return ($LASTEXITCODE -eq 0 -and [version]($v.Trim().TrimStart('v')) -ge [version]'18.0') } catch { return $false }
}
function Ffmpeg-Ok {
  try { & ffprobe -version *> $null; $a = $LASTEXITCODE; & ffmpeg -version *> $null; return ($a -eq 0 -and $LASTEXITCODE -eq 0) } catch { return $false }
}
function Winget-Ok { return [bool](Get-Command winget -ErrorAction SilentlyContinue) }

function Installed-Info {
  $f = Join-Path $CapDir 'installed.json'
  if (Test-Path -LiteralPath $f) { return (Get-Content -Raw -LiteralPath $f | ConvertFrom-Json) }
  return $null
}
function CapCut-State {
  $info = Installed-Info
  if (-not $info) { return @{ state = 'not installed' } }
  $ok = (Test-Path (Join-Path $CapDir 'mcp-server\dist\index.js')) -and (Test-Path (Join-Path $CapDir 'bridge\venv\Scripts\python.exe')) -and (Test-Path (Join-Path $CapDir 'bridge\capcut_server.py'))
  if (-not $ok) { return @{ state = 'broken'; version = $info.version } }
  if ([version]$info.version -lt [version]$Spec.version) {
    $new = @($Spec.changelog | Where-Object { [version]$_.version -gt [version]$info.version } | ForEach-Object { $_.note })
    return @{ state = 'update available'; version = $info.version; latest = $Spec.version; whats_new = $new }
  }
  return @{ state = 'up to date'; version = $info.version }
}

if ($Action -eq 'check') {
  Refresh-Path
  Done ([ordered]@{
    result = 'ok'
    connectors = [ordered]@{ capcut = (CapCut-State) }
    computer = [ordered]@{
      python = [bool](Find-Python); node = (Node-Ok); ffmpeg = (Ffmpeg-Ok); winget = (Winget-Ok)
      capcut_installed = (Test-Path -LiteralPath $CapCutExe) -or (Test-Path -LiteralPath $CapCutProjects)
      capcut_opened = (Test-Path -LiteralPath $CapCutProjects)
    }
  })
}

# ---------- install / update / repair: CapCut ----------
New-Item -ItemType Directory -Force -Path $CapDir | Out-Null
Refresh-Path

if (-not (Test-Path -LiteralPath $CapCutProjects)) {
  if (Test-Path -LiteralPath $CapCutExe) { Stop-With 'capcut' 'CapCut has not been opened yet. Open CapCut once, close it, then try again.' }
  Stop-With 'capcut' 'CapCut is not installed. Install CapCut for Windows from capcut.com, open it once, close it, then try again.'
}

$missing = @()
$python = Find-Python
if (-not $python) { $missing += 'Python' }
if (-not (Node-Ok)) { $missing += 'Node.js' }
if (-not (Ffmpeg-Ok)) { $missing += 'FFmpeg' }
if ($missing.Count -gt 0) {
  if (-not $InstallMissing) {
    [ordered]@{ result = 'needs programs'; missing = $missing; reason = ('These free programs are needed first: ' + ($missing -join ', ') + '. Ask the agent before installing them.') } | ConvertTo-Json
    exit 2
  }
  if (-not (Winget-Ok)) { Stop-With 'programs' ('Windows can''t install programs automatically on this computer. Install these yourself, then try again: ' + ($missing -join ', ') + '.') }
  $ids = @{ 'Python' = @('Python.Python.3.12', '--scope', 'user'); 'Node.js' = @('OpenJS.NodeJS.LTS'); 'FFmpeg' = @('Gyan.FFmpeg') }
  foreach ($m in $missing) {
    $a = @('install', '--id') + $ids[$m] + @('-e', '--silent', '--accept-package-agreements', '--accept-source-agreements')
    & winget @a *> $null
    Refresh-Path
  }
  $python = Find-Python
  if (-not $python) { Stop-With 'programs' 'Python did not finish installing. Restart the computer, then try again.' }
  if (-not (Node-Ok)) { Stop-With 'programs' 'Node.js did not finish installing. Restart the computer, then try again.' }
  if (-not (Ffmpeg-Ok)) { Stop-With 'programs' 'FFmpeg did not finish installing. Restart the computer, then try again.' }
}

# Stop a running bridge from an earlier install, so its files can be replaced.
Get-CimInstance Win32_Process -ErrorAction SilentlyContinue |
  Where-Object { $_.ExecutablePath -and $_.ExecutablePath.StartsWith($CapDir, [StringComparison]::OrdinalIgnoreCase) } |
  ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }

# 1. The bridge: VectCutAPI, downloaded from its creator's GitHub at the pinned commit.
$bridge = Join-Path $CapDir 'bridge'
$commit = $Spec.upstream.bridge.commit
$tmp = Join-Path $env:TEMP ('nez-capcut-' + [guid]::NewGuid().ToString('N'))
New-Item -ItemType Directory -Force -Path $tmp | Out-Null
try {
  Invoke-WebRequest -UseBasicParsing -Uri "https://codeload.github.com/sun-guannan/VectCutAPI/zip/$commit" -OutFile (Join-Path $tmp 'bridge.zip')
  Expand-Archive -LiteralPath (Join-Path $tmp 'bridge.zip') -DestinationPath $tmp -Force
} catch { Stop-With 'download' 'Could not download the CapCut bridge from GitHub. Check the internet connection, then try again.' }
$src = Get-ChildItem -LiteralPath $tmp -Directory | Where-Object { $_.Name -like 'VectCutAPI-*' } | Select-Object -First 1
if (-not $src) { Stop-With 'download' 'The CapCut bridge download was incomplete. Try again.' }
$keepVenv = Join-Path $tmp 'venv'
if (Test-Path (Join-Path $bridge 'venv')) { Move-Item -LiteralPath (Join-Path $bridge 'venv') -Destination $keepVenv }
if (Test-Path $bridge) { Remove-Item -LiteralPath $bridge -Recurse -Force }
Move-Item -LiteralPath $src.FullName -Destination $bridge
if (Test-Path $keepVenv) { Move-Item -LiteralPath $keepVenv -Destination (Join-Path $bridge 'venv') }
$port = [int]$Spec.port
[ordered]@{ draft_profile = 'capcut_legacy'; port = $port; is_upload_draft = $false; draft_domain = "http://127.0.0.1:$port" } |
  ConvertTo-Json | Set-Content -LiteralPath (Join-Path $bridge 'config.json') -Encoding UTF8

# 2. Python packages, in the bridge's own private folder (venv).
$venvPy = Join-Path $bridge 'venv\Scripts\python.exe'
if (-not (Test-Path $venvPy)) { Run $python @('-m', 'venv', (Join-Path $bridge 'venv')) 'python' 'Could not set up Python for the bridge. Try again; if it keeps failing, reinstall Python.' | Out-Null }
Run $venvPy @('-m', 'pip', 'install', '--upgrade', '--quiet', 'pip') 'pip' 'Could not update Python''s installer. Check the internet connection, then try again.' | Out-Null
Run $venvPy @('-m', 'pip', 'install', '--quiet', '-r', (Join-Path $bridge 'requirements.txt'), '-r', (Join-Path $PluginRoot 'connectors\capcut\requirements-nez.txt')) 'pip' 'Could not install the bridge''s Python packages. Check the internet connection, then try again.' | Out-Null

# 3. Claude's CapCut tools (the MCP server), built on this computer.
$server = Join-Path $CapDir 'mcp-server'
if (Test-Path $server) { Remove-Item -LiteralPath $server -Recurse -Force }
New-Item -ItemType Directory -Force -Path $server | Out-Null
Get-ChildItem -LiteralPath (Join-Path $PluginRoot 'connectors\capcut\mcp-server') -Force |
  Where-Object { $_.Name -notin @('node_modules', 'dist') } |
  ForEach-Object { Copy-Item -LiteralPath $_.FullName -Destination $server -Recurse -Force }
Push-Location $server
try {
  Run 'npm.cmd' @('ci', '--no-audit', '--no-fund', '--loglevel=error') 'npm' 'Could not install the CapCut tools for Claude. Check the internet connection, then try again.' | Out-Null
  Run 'npm.cmd' @('run', 'build') 'build' 'Could not build the CapCut tools for Claude. Try again.' | Out-Null
} finally { Pop-Location }

# 4. Transcripts: the script and the speech model (downloaded once, about 500 MB).
Copy-Item -LiteralPath (Join-Path $PluginRoot 'connectors\capcut\transcribe.py') -Destination $CapDir -Force
$models = Join-Path $CapDir 'models'
New-Item -ItemType Directory -Force -Path $models | Out-Null
Run $venvPy @('-c', "from faster_whisper import download_model; download_model('small', cache_dir=r'$models')") 'model' 'Could not download the speech model for transcripts. Check the internet connection, then try again.' | Out-Null

# 5. Settings: the folders a finished video may be moved out of.
$roots = @()
foreach ($f in @('Videos', 'Downloads', 'Desktop')) {
  $roots += (Join-Path $env:USERPROFILE $f)
  if ($env:OneDrive) { $roots += (Join-Path $env:OneDrive $f) }
}
$roots = @($roots + $MoveFrom | Where-Object { $_ -and (Test-Path -LiteralPath $_) } | Select-Object -Unique)
$settingsPath = Join-Path $CapDir 'settings.json'
if (Test-Path $settingsPath) {
  try { $old = Get-Content -Raw -LiteralPath $settingsPath | ConvertFrom-Json; if ($old.moveFrom) { $roots = @($roots + $old.moveFrom | Where-Object { Test-Path -LiteralPath $_ } | Select-Object -Unique) } } catch { }
}
[ordered]@{ port = $port; moveFrom = $roots } | ConvertTo-Json | Set-Content -LiteralPath $settingsPath -Encoding UTF8

# 6. Test: start the bridge, make one draft in the staging folder (not saved to CapCut), then clean up.
$log = Join-Path $CapDir 'bridge.log'
Start-Process -FilePath $venvPy -ArgumentList 'capcut_server.py' -WorkingDirectory $bridge -WindowStyle Hidden -RedirectStandardOutput $log -RedirectStandardError (Join-Path $CapDir 'bridge-errors.log') | Out-Null
$up = $false
for ($i = 0; $i -lt 40 -and -not $up; $i++) {
  Start-Sleep -Milliseconds 500
  try { Invoke-WebRequest -UseBasicParsing -Uri "http://127.0.0.1:$port/" -TimeoutSec 2 | Out-Null; $up = $true } catch { if ($_.Exception.Response) { $up = $true } }
}
if (-not $up) { Stop-With 'test' 'The bridge did not start. Run the install again; if it keeps failing, restart the computer first.' }
$staging = Join-Path $CapDir 'staging'
New-Item -ItemType Directory -Force -Path $staging | Out-Null
try {
  $d = Invoke-RestMethod -Method Post -Uri "http://127.0.0.1:$port/create_draft" -ContentType 'application/json' -Body (@{ width = 1080; height = 1920 } | ConvertTo-Json)
  $id = $d.output.draft_id
  Invoke-RestMethod -Method Post -Uri "http://127.0.0.1:$port/add_text" -ContentType 'application/json' -Body (@{ draft_id = $id; text = 'NEZ OS test'; start = 0; end = 2 } | ConvertTo-Json) | Out-Null
  $s = Invoke-RestMethod -Method Post -Uri "http://127.0.0.1:$port/save_draft" -ContentType 'application/json' -Body (@{ draft_id = $id; draft_folder = $staging; auto_deploy = $false } | ConvertTo-Json)
  $made = $s.output.draft_url
  if (-not $made -or -not (Test-Path -LiteralPath $made)) { throw 'no draft' }
  Remove-Item -LiteralPath $made -Recurse -Force
} catch { Stop-With 'test' 'The bridge started but could not make a test project. Run the install again; if it keeps failing, check bridge.log in the .nez-connector\capcut folder.' }

$before = Installed-Info
[ordered]@{
  version = $Spec.version
  bridge_commit = $commit
  installed = (Get-Date -Format 'yyyy-MM-dd HH:mm')
} | ConvertTo-Json | Set-Content -LiteralPath (Join-Path $CapDir 'installed.json') -Encoding UTF8
Remove-Item -LiteralPath $tmp -Recurse -Force -ErrorAction SilentlyContinue

Done ([ordered]@{
  result = 'ok'
  connector = 'capcut'
  action = $(if ($before) { 'updated' } else { 'installed' })
  version = $Spec.version
  move_from_folders = $roots
  next = 'Fully quit Claude (right-click the Claude icon by the clock and choose Quit), open it again, and start a new chat.'
})
