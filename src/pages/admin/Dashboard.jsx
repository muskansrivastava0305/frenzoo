import React, { useContext } from "react";
import {
  Sidebarmenu,
  BusinessAnalyticsCard,
  DashboardTable,
  RecenetOrderComp,
} from "../../components";
import { myContext } from "@/Context/Context";

function Dashboard() {
  const {isOpen ,setIsOpen} = useContext(myContext)
  const business_analytics = [
    {
      image: "sales.png",
      title: "sales",
      value: `₹${0}`,
    },
    {
      image: "pending.png",
      title: "Pending",
      value: 0,
    },
    {
      image: "confirmed.png",
      title: "Confirmed",
      value: 0,
    },
    {
      image: "cooking.png",
      title: "Cooking",
      value: 0,
    },
  ];

  return (
    <div className=" w-full flex">
      <Sidebarmenu />
      <div className={`  w-full  p-5`}>
        <div className=" pr-6 pb-6 text-2xl text-[#ED4C79] font-semibold">
          <h1>Welcome QRDine-In</h1>
        </div>
        <div className=" shadow-md border border-gray-200 ">
          <div className=" flex p-5 gap-3 items-center">
            <img
              src=" business_analytics.png "
              alt=""
              className=" w-6 object-center object-cover h-6"
            />
            <h1 className=" font-semibold text-lg">
              Business Analytics (Day to Day)
            </h1>
          </div>

          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-3 m-3">
            {business_analytics?.map((item, index) => (
              <BusinessAnalyticsCard
                key={index}
                image={item.image}
                title={item.title}
                value={item.value}
              />
            ))}

            <div></div>
          </div>
        </div>
        {/* //Recent Order */}

        <RecenetOrderComp />
        <DashboardTable />
      </div>
    </div>
  );
}

export default Dashboard;
