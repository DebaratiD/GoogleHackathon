# Google AI Hackathon

Hi! As part of a submission to Google AI Hackathon conducted this year on Devpost, I created this repository which has two branches: Frontend and backend.
My submission was an application that could read a News Article from an API, call Gemini AI to convert it into a short summarised form that could be shown to users. Simple, right? 

### Front end branch
The frontend branch is all the Nextjs code I wrote to show the web interface and the screens. I took help from react carousel to show a decent carousel view of the story points. 

### Backend branch
For this project, I used a FastAPI backend because of ... well, its super fast. It was really easy to build APIs that could fetch data from the Gemini AI API as well as NewsAPI very quickly.


## A view of the application:

The app opens up with a front screen that asks you for a keyword to search with. Once entered, the website uses the keyword to extract all articles related to it. Upon clicking any of the related cards a new screen opens up,
that displays the news article in a pretty, pleasant carousel of shortened, easy to understand sentences. 

I couldn't host the site unfortunately, but it will be a future goal to fix that.
![Screenshot 2024-05-01 232709](https://github.com/user-attachments/assets/7140006c-a103-442b-a017-45ac9adc097f)

![Screenshot 2024-05-01 233506](https://github.com/user-attachments/assets/444f3b8d-8a51-48b1-8018-276b7a0c9c2d)

![Screenshot 2024-05-01 233518](https://github.com/user-attachments/assets/276cdebe-0b30-4667-a282-760cd2377e9a)
