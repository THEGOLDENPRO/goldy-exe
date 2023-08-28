from __future__ import annotations

from datetime import datetime
from decouple import config

from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import FileResponse, HTMLResponse
from aiohttp import ClientSession

__all__ = ("app",)
__version__ = "1.0.0"

app = FastAPI(
    docs_url = None, 
    redoc_url = None
)

API_URL = config("API_URL", "https://api.devgoldy.xyz/goldy-exe/v1")
CDN_URL = config("CDN_URL", "https://api.devgoldy.xyz/goldy-exe/cdn")

if config("DEV"):
    API_URL = "http://127.0.0.1:8000"
    CDN_URL = "http://127.0.0.1:8001"

    @app.get("/dev")
    async def dev_check(): return True


http_client = ClientSession()
templates = Jinja2Templates(directory = "templates")

@app.get("/")
async def index():
    return FileResponse("./src/index.html")

@app.get("/post/{id}", response_class = HTMLResponse)
async def read_item(request: Request, id: int):
    post = {}

    async with http_client.request("GET", API_URL + f"/post/{id}") as r:
        post = await r.json()

    return templates.TemplateResponse(
        "post.html", {
            "request": request,
            "id": id, 
            "name": post["name"],
            "description": "test",
            "date_added": datetime.fromisoformat(post["date_added"]).strftime("%b %d %Y"),
            "content": post["content"],
            "rgb_colour": "9, 11, 17", # TODO: get rgb colour from thumbnail image.
            "thumbnail_url": CDN_URL + post["thumbnail"]
        }
    )

app.mount("/", StaticFiles(directory = "src"))