// pages/index.tsx

import React from 'react';
import CardComponent from './cards-component';
import { title } from 'process';
interface Props {
  cards: string[];
}
const CardDashboard: React.FC<Props> = ({cards}) => {
  // const cards = [
  //   {
  //     title: 'Card 1',
  //     description: 'Description for Card 1',
  //     imageUrl: '/card1.jpg',
  //   },
  //   {
  //     title: 'Card 2',
  //     description: 'Description for Card 2',
  //     imageUrl: '/card2.jpg',
  //   },
  // ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">News Cards</h1>
      <div className="flex flex-wrap">
        
        {cards.map((card, index) => (
          
          <CardComponent key={index} cardData={card} />
        ))}
      </div>
    </div>
  );
};

export default CardDashboard;
