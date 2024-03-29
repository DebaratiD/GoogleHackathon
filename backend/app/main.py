from fastapi import FastAPI, HTTPException
from .routes import newsapi, gemini

# from pathlib import Path

# env_path = Path('.')/'.env'
#load_dotenv(dotenv_path=env_path)


app = FastAPI()
app.include_router(newsapi.router)
app.include_router(gemini.router)


@app.get("/")
async def root():
    return {"message":"Hello world from fast API."}
