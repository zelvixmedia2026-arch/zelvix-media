import os
from pathlib import Path

from fastapi import FastAPI, Header, HTTPException
from fastapi.responses import FileResponse

app = FastAPI()

BASE_DIR = Path(__file__).resolve().parent
VIDEO_PATH = BASE_DIR / "videos" / "travel-video.mp4"


@app.get("/api/client-video")
async def client_video(x_client_pin: str = Header(default="")):
    expected_pin = os.getenv("TRAVEL_VIBE_PIN")

    if not expected_pin or x_client_pin != expected_pin:
        raise HTTPException(status_code=401, detail="Unauthorized")

    if not VIDEO_PATH.is_file():
        raise HTTPException(status_code=404, detail="Video not found")

    return FileResponse(
        VIDEO_PATH,
        media_type="video/mp4",
        headers={
            "Content-Disposition": 'inline; filename="travel-video.mp4"',
            "Cache-Control": "private, no-store",
        },
    )