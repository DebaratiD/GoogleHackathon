# GoogleHackathon
### Application for Google AI Hackathon

This is the server of the application that uses Docker, FastAPI and Gemini AI to provide API service.

To run the application:
1. `pip install -r requirements.txt`
2. `uvicorn app.main:app --reload --port 8000`

Or using Docker, run the command: 
`docker-compose up` 
to run the container locally

Once completed, the website can be accessed at http://locahost:8000.

The endpoints available are:
1. `/news/news_query` which takes a query as input and returns upto 100 news articles
2. `/qapi/getstory` which takes input a query object and returns the summarized content from Gemini
