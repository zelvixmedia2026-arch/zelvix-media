import os
from pathlib import Path

from fastapi import FastAPI, Header, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, PlainTextResponse

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # replace with your frontend URL once deployed
    allow_methods=["GET"],
    allow_headers=["*"],
)

BASE_DIR = Path(__file__).resolve().parent
VIDEO_PATH = BASE_DIR / "videos" / "travel-video.mp4"

# Replace with your own AdSense publisher ID (AdSense > Sites > ads.txt)
ADSENSE_PUB_ID = "pub-4556537509690682"


@app.get("/")
async def root():
    return {"status": "ok"}


@app.get("/ads.txt", response_class=PlainTextResponse)
async def ads_txt():
    return f"google.com, {ADSENSE_PUB_ID}, DIRECT, f08c47fec0942fa0\n"


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