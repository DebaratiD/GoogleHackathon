import os
from fastapi import APIRouter
from app.models import NewsModel
from dotenv import load_dotenv, find_dotenv
import requests

isAvlb = load_dotenv(find_dotenv())
if isAvlb==False:
    print("Could not load tokens")

router = APIRouter(
    prefix="/news",
    tags=["news"],
    responses={404: {"description": "Not found"}}
)


@router.get("/latest_news/us")
async def getLatestUSNews():
    if(os.getenv("newsToken"))==None:
        return {"error":"Could not load token"}
    response = requests.get(url=f'https://newsapi.org/v2/everything?q=US&apiKey={os.getenv("newsToken")}')
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