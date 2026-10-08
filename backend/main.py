from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
from pathlib import Path


app = FastAPI(title="Zelvix AI Hub API")


# ==========================================
# CORS
# ==========================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ==========================================
# REELS DATABASE
# ==========================================

BASE_DIR = Path(__file__).resolve().parent
REELS_FILE = BASE_DIR / "reels.json"


def load_reels():

    if not REELS_FILE.exists():
        return []

    try:
        with open(REELS_FILE, "r", encoding="utf-8") as file:
            return json.load(file)

    except (json.JSONDecodeError, OSError):

        return []


# ==========================================
# NORMALIZE URL
# ==========================================

def normalize_url(url: str):

    return url.strip().rstrip("/")


# ==========================================
# HOME
# ==========================================

@app.get("/")
def home():

    return {
        "status": "online",
        "service": "Zelvix AI Hub API"
    }


# ==========================================
# ANALYZE REEL
# ==========================================

@app.post("/api/analyze")
def analyze_reel(data: dict):

    reel_url = data.get("url", "").strip()

    # --------------------------------------
    # Check URL
    # --------------------------------------

    if not reel_url:

        return {
            "success": False,
            "error": "Please paste an Instagram Reel link."
        }


    # --------------------------------------
    # Normalize user URL
    # --------------------------------------

    user_url = normalize_url(reel_url)


    # --------------------------------------
    # Load reels
    # --------------------------------------

    reels = load_reels()


    # --------------------------------------
    # Find matching Reel
    # --------------------------------------

    for reel in reels:

        stored_url = normalize_url(
            reel.get("reel_url", "")
        )

        if stored_url == user_url:

            return {
                "success": True,
                "data": reel
            }


    # --------------------------------------
    # Reel not found
    # --------------------------------------

    return {
        "success": False,
        "error": "This Reel hasn't been added to Zelvix AI Hub yet."
    }