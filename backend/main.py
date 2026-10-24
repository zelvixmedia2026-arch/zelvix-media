
import os
from fastapi import Header, HTTPException
from fastapi.responses import StreamingResponse
from vercel.blob import AsyncBlobClient


@app.get("/api/client-video")
async def client_video(x_client_pin: str = Header(default="")):
    expected_pin = os.getenv("TRAVEL_VIBE_PIN")

    if not expected_pin or x_client_pin != expected_pin:
        raise HTTPException(status_code=401, detail="Unauthorized")

    client = AsyncBlobClient()
    result = await client.get(
        "travel 2 updted.mp4",
        access="private",
    )

    if result is None or result.status_code != 200 or result.stream is None:
        raise HTTPException(status_code=404, detail="Video not found")

    return StreamingResponse(
        result.stream,
        media_type=result.blob.content_type or "video/mp4",
        headers={
            "Content-Disposition": 'inline; filename="travel-video.mp4"',
            "Cache-Control": "private, no-store",
            "Accept-Ranges": "none",
        },
    )
