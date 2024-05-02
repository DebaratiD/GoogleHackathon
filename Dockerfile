FROM python:3.11.8
WORKDIR /app
COPY requirements.txt .
RUN python -m pip install --upgrade pip
RUN pip install --no-cache-dir --upgrade -r requirements.txt
COPY ./app /app
EXPOSE 8000
CMD ["uvicorn","app.main:app","--host","0.0.0.0","--port","8000", "--reload"]