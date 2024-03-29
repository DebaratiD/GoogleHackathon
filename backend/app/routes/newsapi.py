from fastapi import APIRouter
from app.models import NewsModel
from dotenv import load_dotenv
import requests
import os

load_dotenv()

router = APIRouter(
    prefix="/news",
    tags=["news"],
    responses={404: {"description": "Not found"}}
)


@router.get("/latest_news/us")
async def getLatestUSNews():
    response = requests.get(url=f'{os.getenv("newsURL")}/everything?q=US&apiKey={os.getenv("newsToken")}')
    data = response.json()
    data = [create_newsModel(i) for i in data['articles']]
    return data

def create_newsModel(i)->NewsModel:
    return NewsModel(
        title=i['title'],
        source=i['source']['name'],
        author=i['author'],
        description=i['description'],
        url=str(i['url']),
        content=i['content']
    )