import React from 'react'
import { Sidebarmenu, RecentOrder, BusinessAnalyticsCard } from "../../components";

function Dashboard() {
  const business_analytics = [
    {
      image: "sales.png",
      title: "sales",
      value: `₹${0}`
    },
    {
      image: "pending.png",
      title: "Pending",
      value: 0
    }, {
      image: "confirmed.png",
      title: "Confirmed",
      value: 0
    }, {
      image: "cooking.png",
      title: "Cooking",
      value: 0
    },
  ]

  const RecentOrderData = [

    {
      orderId: "Order# 100026",
      dateTime: "15-08-24, 06:17 PM",
      status: "Completed"

    },
  ]


  return (
    <div className=" w-full flex">
      <Sidebarmenu />
      <div className=" w-full  p-5">
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


          {/* //Recent Order */}

          <div className=' float-right mt-8 w-full sm:w-80 '>
            <div className=' flex justify-between mr-8'>
              <h1 className=' font-semibold'>Recent Order</h1>
              <p className=' font-semibold text-blue-800 '>View All</p>
            </div>

            <div className=' mt-8 overflow-y-scroll h-96 overflow-x-hidden'>
              {RecentOrderData?.map((item, index) => (
                <RecentOrder key={index} orderId={item.orderId} dateTime={item.dateTime} status={item.status} />
              ))
              }
            </div>

          </div>
          <div>
            <DashboardTable/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
