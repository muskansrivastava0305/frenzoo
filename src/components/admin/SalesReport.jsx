import React from 'react';

const SalesReport = ({ earned, product, customer }) => {
    return (
        <div className="rounded-xl shadow-gray-200 border p-3 hover:bg-gray-300 min-w-64">
            <div className=' w-8'>
              <img src="/public/sale2.png" alt="" className="" />
            </div>
            <div>
              <h1>Total Earned</h1>
              <p className=' font-semibold'>₹ 2323</p>
            </div>
          </div>


    );
};

export default  SalesReport;