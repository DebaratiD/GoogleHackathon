// pages/index.tsx
'use client'
import React, { useEffect, useState } from 'react';
import CardComponent from '../components/CardComponent';
import { Card } from '../../app/interfaces/card';
import { useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import {data} from '../sampledata'
import BookDiv from '../components/bookDiv';
import { Book, query } from '../interfaces/book';
import {getNews, getStory} from '../newsAPI';


const CardViewer:React.FC<{cards:Card[], handleShowStory:Function}> = ({cards,handleShowStory})=>{
  return cards.map((card, index) =>           
    <CardComponent key={index} cardData={card} showNews={handleShowStory}/>)
}

  let b:Book = {author:'',title:'', lines:[]} 
function CardDashboard() {
  const [cards, setCards] = useState(data)
  const [showStory, setShowStory] = useState(false)
  const [bookToShow, setBookToShow] = useState<Book>(b)

 
  const params = useSearchParams()
  useEffect(()=>{ 
  const query = String(params.get('query'))
    getNews(query).then((val)=>{
    setCards(val);
  })
  },[setCards, getNews])
  // 
  const handleShowStory=(val:Card)=>{
    let input:query = {...val, ques:val.content}
    getStory(input).then(
      (val:Book)=>{
        setBookToShow(val);
      }
    );
    setShowStory(true);
  }

  return (

      <div>
        
        <Navbar/>
        {showStory==false &&
        <div className="bggradient grid min-h-screen lg:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-2">

          
        <CardViewer cards={cards} handleShowStory={handleShowStory}/>
          </div>}
        
        {showStory==true && 
        <div className='bggradient min-h-screen flex p-5 justify-center'>
          <BookDiv bookContent={bookToShow} showStory={(val:boolean)=>setShowStory(val)}/>
        </div>
        }
        
        
    </div>
  );
};

export default CardDashboard;
