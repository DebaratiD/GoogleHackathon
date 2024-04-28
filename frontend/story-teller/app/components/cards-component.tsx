import React from 'react';

interface Card {
  author: string;
  content: string;
  description: string;
  source: string
  title: string;
  url: string;
}

const CardComponent: React.FC<{ cardData: Card }> = ({ cardData }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4">
      <img src={cardData.url} alt={cardData.title} className="w-full h-32 object-cover mb-4" />
      <h2 className="text-xl font-bold mb-2">{cardData.title}</h2>
      <p className="text-gray-600">{cardData.description}</p>
      <p className="text-gray-600">{cardData.source}</p>
    </div>
  );
};

export default CardComponent;