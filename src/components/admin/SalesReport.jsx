import React from 'react';

const SalesReport = ({ image, earned, value }) => {
    return (
        <div className="rounded-xl shadow-gray-200 border p-3 hover:bg-gray-300 min-w-64">
            <div className=' w-8'>
              <img src={image} alt="" className="" />
            </div>
            <div>
              <h1>{ earned}</h1>
              <p className=' font-semibold'>{value}</p>
            </div>
          </div>


    );
};

export default  SalesReport;