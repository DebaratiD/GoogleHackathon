import os
from fastapi import APIRouter
from app.models import Question
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

googleKEY = "AIzaSyAFD_COHQDlvTsK5UBPKVDTFuS58Go_e3Q"

router = APIRouter(
       prefix="/qapi",
        tags=["qapi"],
        responses={404: {"description": "Not found"}}
)


@router.post("/")
def AskGemini(req:Question):
    genai.configure(api_key=googleKEY)
    model = genai.GenerativeModel('gemini-pro')
    if len(req.ques)=="":
        return {"message":"Please enter a question"}
    response = model.generate_content(req.ques)
    try:
         response.text
         return response.text
    except Exception as e:
         print(f'{type(e).__name__}: {e}')