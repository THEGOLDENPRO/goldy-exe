import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI(
    docs_url = None, 
    redoc_url = None
)

@app.get("/dev")
async def dev_check():
    return True

app.mount(
    "/", StaticFiles(directory = "src")
)

if __name__ == "__main__":
    uvicorn.run(
        "run_dev_server:app", 
        port = 8003, 
        reload = True, 
        reload_includes = [
            "*.js", "*.html", "*.css"
        ]
    )