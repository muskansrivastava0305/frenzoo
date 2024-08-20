import React from 'react';
import Dashboard from './Dashboard';

function SalesReportPage() {
  return (
    <Dashboard>
      <div className="flex flex-col gap-8 p-5">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <img src="/public/sales.png" alt="" className="w-7 object-center object-cover h-6"/>
            <h1 className="font-semibold text-xl">Sale Report</h1>
          </div>
          <div className="bg-cyan-600 rounded-full p-3 mr-10 invisible md:visible">
            <button className=' text-white'>
              <i className="fa-solid fa-house"></i>
            </button>
          </div>
        </div>

        <div className=" flex flex-wrap justify-evenly gap-4 w-full ">
          <div className="rounded-xl shadow-gray-200 border p-3 hover:bg-gray-300 min-w-64">
            <div className=' w-8'>
              <img src="/public/sale2.png" alt="" className="" />
            </div>
            <div>
              <h1>Total Earned</h1>
              <p className=' font-semibold'>₹ 2323</p>
            </div>
          </div>

          <div className="rounded-xl shadow-gray-200 border  p-3 hover:bg-gray-300 min-w-64">
            <div className='  w-8'>
              <img src="/public/sale2.png" alt="" className="" />
            </div>
            <div>
              <h1>Product and Sales</h1>
              <p className=' font-semibold'>₹ 2323</p>
            </div>
          </div>

          <div className="rounded-xl shadow-gray-200 border p-3 hover:bg-gray-300 min-w-64">
            <div className='  w-8' >
              <img src="/public/sale2.png" alt="" className="" />
            </div>
            <div>
              <h1>Unique customers this month</h1>
              <p className=' font-semibold'>₹ 2323</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex float-right ">
            <button className="border border-black px-3 py-1 text-sm hover:bg-neutral-950 hover:text-white button rounded-s-sm"> Week </button>
            <button className="border border-black px-3 py-1 text-sm hover:bg-neutral-950 hover:text-white button rounded-e-sm"> Month </button>
          </div>
        </div>

        <div className=' overflow-x-auto justify-center'>
          <table className="w-full table">
            <thead className="shadow-gray-200 border">
              <tr className='  '>
                <th className=" text-left px-4 py-2">Order Id</th>
                <th className=" text-left">Date</th>
                <th className=" text-left">Qyt</th>
                <th className=" text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className='  hover:bg-slate-200 '>
                <td className=" px-4 py-2">100126</td>
                <td>20 Aug 2024</td>
                <td>1</td>
                <td>129.000</td>
              </tr>
              <tr className='  hover:bg-slate-200 '>
                <td className=" px-4 py-2">100126</td>
                <td>20 Aug 2024</td>
                <td>1</td>
                <td>129.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Dashboard>
  );
}

export default SalesReportPage;