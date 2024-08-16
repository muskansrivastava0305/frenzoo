// Card.js
import React from 'react';

const BusinessAnalyticsCard = ({ image, title, value }) => {
  return (
    <div className='shadow-md border w-full border-gray-200 rounded-2xl p-3'>
      <img src={image} alt='' className='w-8 float-right' />
      <p className='mt-8 p-2 font-semibold'>{title}</p>
      <h1 className='font-bold text-2xl p-2'> {value}</h1>
    </div>
  );
};

export default BusinessAnalyticsCard;