FROM python:3.11.8
WORKDIR /app
COPY requirements.txt .
RUN python -m pip install --upgrade pip
RUN pip install --no-cache-dir --upgrade -r requirements.txt
COPY ./app /app
EXPOSE 8000
CMD ["uvicorn","main:app","--port","8000", "--reload"]