import React from 'react';

interface CardProps {
  image: string;
  amount: string;
  currency: string;
  summary: string;
}

const Card: React.FC<CardProps> = ({ image}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl w-full transition-shadow duration-300 transform hover:scale-105">
      <img src={image} alt="Card" className="h-full object-cover rounded-t-lg" />
      {/* <div className="mt-4">
        <h2 className="text-xl font-bold">{amount} {currency}</h2>
        <p className="text-gray-600">{summary}</p>
      </div> */}
    </div>
  );
};

export default Card;