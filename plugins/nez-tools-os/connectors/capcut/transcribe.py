"""NEZ OS: transcripts on the agent's computer with faster-whisper (MIT). Nothing is uploaded.

Started by the capcut_transcribe tool. Writes "<name>.srt" and "<name> transcript.txt" next to the input
(or in the connector's transcripts folder if that folder can't be written to) and keeps a status file
up to date so capcut_transcript_status can report progress.
"""
import argparse
import json
import os
import sys
import time
import traceback

MODEL = "small"  # good accuracy on a normal laptop, English and Spanish included


def write_status(path, **fields):
    tmp = path + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(fields, f, ensure_ascii=False)
    os.replace(tmp, path)


def stamp(seconds, srt=True):
    ms = int(round(seconds * 1000))
    h, ms = divmod(ms, 3_600_000)
    m, ms = divmod(ms, 60_000)
    s, ms = divmod(ms, 1000)
    return f"{h:02}:{m:02}:{s:02},{ms:03}" if srt else f"{h:02}:{m:02}:{s:02}"


def output_folder(input_path, fallback):
    folder = os.path.dirname(input_path)
    try:
        probe = os.path.join(folder, ".nez-write-test")
        with open(probe, "w") as f:
            f.write("")
        os.remove(probe)
        return folder
    except OSError:
        os.makedirs(fallback, exist_ok=True)
        return fallback


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--input", required=True)
    ap.add_argument("--language", default="auto")
    ap.add_argument("--status", required=True)
    ap.add_argument("--models", required=True)
    args = ap.parse_args()

    started = time.time()
    write_status(args.status, state="loading", file=args.input, percent=0)
    try:
        from faster_whisper import WhisperModel

        model = WhisperModel(MODEL, device="cpu", compute_type="int8", download_root=args.models)
        language = None if args.language in ("", "auto") else args.language
        segments, info = model.transcribe(args.input, language=language, vad_filter=True)
        duration = max(info.duration or 0, 0.001)

        base = os.path.splitext(os.path.basename(args.input))[0]
        folder = output_folder(args.input, os.path.join(os.path.dirname(args.status), "..", "transcripts"))
        srt_path = os.path.join(folder, f"{base}.srt")
        txt_path = os.path.join(folder, f"{base} transcript.txt")

        srt_lines, txt_lines, last = [], [], 0.0
        for i, seg in enumerate(segments, start=1):
            text = seg.text.strip()
            srt_lines += [str(i), f"{stamp(seg.start)} --> {stamp(seg.end)}", text, ""]
            txt_lines.append(f"[{stamp(seg.start, srt=False)}] {text}")
            if seg.end - last > 5:
                last = seg.end
                write_status(args.status, state="running", file=args.input, language=info.language,
                             percent=min(99, int(seg.end / duration * 100)))

        with open(srt_path, "w", encoding="utf-8") as f:
            f.write("\n".join(srt_lines))
        with open(txt_path, "w", encoding="utf-8") as f:
            f.write("\n".join(txt_lines) + "\n")

        write_status(args.status, state="done", file=args.input, language=info.language, percent=100,
                     captions_file=os.path.abspath(srt_path), transcript_file=os.path.abspath(txt_path),
                     minutes_of_audio=round(duration / 60, 1), took_minutes=round((time.time() - started) / 60, 1))
    except Exception as exc:  # report the reason in plain words, keep the details in the log
        traceback.print_exc()
        write_status(args.status, state="failed", file=args.input,
                     reason=f"The transcript stopped: {exc}. Try again; if it keeps failing, run /nez-connector to repair.")
        sys.exit(1)


if __name__ == "__main__":
    main()
