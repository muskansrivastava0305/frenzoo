import React from "react";
import { RecentOrder } from "..";

function RecenetOrderComp() {
  const RecentOrderData = [
    {
      orderId: "Order# 100026",
      dateTime: "15-08-24, 06:17 PM",
      status: "Completed",
    },
  ];
  return (
    <div className=" p-5 inline-block shadow-md shadow-gray-200 border-gray-200 border rounded-xl  w-full sm:w-[30rem] ">
      <div className=" flex justify-between mr-8">
        <h1 className=" font-semibold">Recent Order</h1>
        <p className=" font-semibold text-blue-800 ">View All</p>
      </div>

      <div className=" mt-8 overflow-y-scroll h-96 overflow-x-hidden">
        {RecentOrderData?.map((item, index) => (
          <RecentOrder
            key={index}
            orderId={item.orderId}
            dateTime={item.dateTime}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
}

export default RecenetOrderComp;
