import React from "react";
import { Link } from "react-router-dom";

function Order_track_page() {
  return (
    <>
      <div className=" text-black text-center font-semibold text-2xl pt-2">
        Order Tracking
      </div>
      <div className=" mt-8 flex justify-center">
        <div className=" px-6 pb-8 w-full md:w-1/2">
          <div className=" text-center text-lg pb-7 pt-6">Order ID: 100023</div>
          <div className="flex justify-between ">
            <div>
              <div className=" flex justify-center items-center gap-3">
                <i className=" text-lg bg-gray-400 rounded-full text-white border-gray-400 border fa-regular fa-circle-check"></i>
                <div className=" text-[15px] text-gray-600">Placed</div>
              </div>
              <div className=" my-1 ml-2 border-l-2  border-dashed border-l-gray-400 h-10"></div>
            </div>
            <div className=" text-gray-600 text-sm">02:30 PM</div>
          </div>
          <div className="flex justify-between ">
            <div>
              <div className=" flex justify-center items-center gap-3">
                <i className=" text-lg bg-gray-400 rounded-full text-white border-gray-400 border fa-regular fa-circle-check"></i>
                <div className=" text-[15px] text-gray-600">Confirmed</div>
              </div>
              <div className=" my-1 ml-2 border-l-2  border-dashed border-l-gray-400 h-10"></div>
            </div>
            <div className=" text-gray-600 text-sm">02:30 PM</div>
          </div>
          <div className="flex justify-between ">
            <div>
              <div className=" flex justify-center items-center gap-3">
                <i className=" text-lg bg-gray-400 rounded-full text-white border-gray-400 border fa-regular fa-circle-check"></i>
                <div className=" text-[15px] text-gray-600">Waiting</div>
              </div>
              <div className=" my-1 ml-2 border-l-2  border-dashed border-l-gray-400 h-10"></div>
            </div>
            <div className=" text-gray-600 text-sm">02:30 PM</div>
          </div>
          <div className="flex justify-between ">
            <div>
              <div className=" flex justify-center items-center gap-3">
                <i className=" text-lg bg-gray-400 rounded-full text-white border-gray-400 border fa-regular fa-circle-check"></i>
                <div className=" text-[15px] text-gray-600">Cooking</div>
              </div>
              <div className=" my-1 ml-2 border-l-2  border-dashed border-l-gray-400 h-10"></div>
            </div>
            <div className=" text-gray-600 text-sm">02:30 PM</div>
          </div>
          <div className="flex justify-between ">
            <div>
              <div className=" flex justify-center items-center gap-3">
                <i className=" text-lg bg-gray-400 rounded-full text-white border-gray-400 border fa-regular fa-circle-check"></i>
                <div className=" text-[15px] text-gray-600">Ready to Serve</div>
              </div>
              <div className=" my-1 ml-2 border-l-2  border-dashed border-l-gray-400 h-10"></div>
            </div>
            <div className=" text-gray-600 text-sm">02:30 PM</div>
          </div>
          <div className="flex justify-between ">
            <div>
              <div className=" flex justify-center items-center gap-3">
                <i className=" text-lg bg-gray-400 rounded-full text-white border-gray-400 border fa-regular fa-circle-check"></i>
                <div className=" text-[15px] text-gray-600">Served</div>
              </div>
              <div className=" my-1 ml-2 border-l-2  border-dashed border-l-gray-400 h-10"></div>
            </div>
            <div className=" text-gray-600 text-sm">02:30 PM</div>
          </div>
          <div className="flex justify-between ">
            <div>
              <div className=" flex justify-center items-center gap-3">
                <i className=" text-lg bg-gray-400 rounded-full text-white border-gray-400 border fa-regular fa-circle-check"></i>
                <div className=" text-[15px] text-gray-600">Completed</div>
              </div>
            </div>
            <div className=" text-gray-600 text-sm">02:30 PM</div>
          </div>
          <div className=" border border-dashed my-8">

          </div>
          <div className=" gap-5 flex">
            <div className=" bg-green-700 text-sm sm:text-md w-1/2 sm:w-44 flex justify-center items-center rounded-md text-white px-4 py-2">
              <Link>Pay Online</Link>
            </div>
            <div className=" bg-yellow-400 w-1/2 sm:w-96 flex justify-center items-center rounded-md text-white px-4 py-2">
              <Link>
                Cash <i className=" rounded-full fa-regular fa-circle-check"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order_track_page;
