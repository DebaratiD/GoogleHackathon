'use client'
import Image from 'next/image'
import profilePic from './backgroun.jpeg'
import React, { useState } from 'react';
import CardDashboard from "../components/cards-dashboard"
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [answer, setAnswer] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleClick = async (e) => {
    e.preventDefault()
    let url= 'http://localhost:8000/news/news_query/?q='+inputValue;
    const response = await fetch(url);
    const data = await response.json();
    const filteredData = data.filter(obj => obj.title !== "[Removed]")
    setAnswer(filteredData);
    console.log(answer)
    const router = useRouter();

    router.push('/cards');

    
  }
    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
     
      <div className="absolute inset-0 z-0">
        
        <Image src={profilePic} alt="Background" className="object-cover w-full h-full" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black opacity-60"></div>
      </div>
      
      <div className="relative justify-center z-10 text-center text-white w-1/2 margin-top-30">
        <h1 className="text-4xl font-bold mb-6">STORY TELLER</h1>
        <div className="flex justify-center">
          <input type="search" className="text-black font-bold py-2 px-4 rounded mr-4 w-1/2" onChange={handleInputChange} />
          <button className="bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-1/6" onClick={handleClick}>
            Search
          </button>
        </div>
        <p className="text-lg mt-4 mb-4">With Gemini Pro</p>
        
          {/* {answer==null ? <div>dat is not available </div>: <div>dia is available</div> } */}
        
      </div>
     
    </div>
    )
  }