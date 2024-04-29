import React from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { Card } from '../interfaces/card';


const CardComponent: React.FC<{ cardData: Card }> = ({cardData}) => {
  const router = useRouter()
  const showNews = (card:Card)=>{
    router.push('/story')
  }
  return (
      // <div className=" bg-white shadow-md rounded-lg p-6 m-4 group relative hover:shadow-cardhover card">
      //   {/* <Image src={cardData.image} alt={cardData.title} width={200} height={400} className="w-full h-32 object-cover mb-4" /> */}
      //   
      //   <p className="text-green-700">{cardData.source}</p>
      // </div>
      <div className="p-2 text-clip rounded-xl 
      group relative shadow-card hover:shadow-cardhover card">
        <div className=" bg-white rounded-xl h-full w-full p-3">
          <h2 className="text-black text-xl font-bold mb-2">{cardData.title}</h2>
          <p className="text-gray-600">{cardData.description}</p>
        </div>
      <div className="group-hover:flex flex-col justify-between h-[100%] w-[100%]
       hidden absolute left-0 top-0 bg-[#2a483e] p-3 rounded-md cursor-pointer">
        <p className="text-white text-md overflow-y-auto prompt">{cardData.author}</p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            {cardData.source}
          </div>
          <button type='button' onClick={()=> showNews(cardData)} className="outline-none bg-transparent border-none">
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;