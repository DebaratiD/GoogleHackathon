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

@router.get("/home")
async def getAllSources():
    if(os.getenv("newsToken"))==None:
        return {"error":"Could not load token"}
    response = requests.get(url=f'https://newsapi.org/v2/top-headlines/sources?apiKey={os.getenv("newsToken")}')
    data = response.json()
    return data['sources']

# Example query would be like: localhost:8000/news_query/?q=india
@router.get("/news_query/")
async def getQueryNews(q="", source=""):
    if(os.getenv("newsToken"))==None:
        return {"error":"Could not load token"}
    
    params=[]
    if len(source)!=0:
        params.append(f'sources={source}')
    if len(q)!=0:
        params.append(f'q={q}')
    params.append(f'apiKey={os.getenv("newsToken")}')

    params = '&'.join(params)

    response = requests.get(url=f'https://newsapi.org/v2/everything?{params}')
    data = response.json()
    data = [create_newsModel(i) for i in data['articles']]
    return data