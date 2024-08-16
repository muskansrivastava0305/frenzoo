import React from 'react'
import { RecentOrder } from '..'

function RecenetOrderComp() {
    const RecentOrderData = [

        {
          orderId: "Order# 100026",
          dateTime: "15-08-24, 06:17 PM",
          status: "Completed"
    
        },
      ]
  return (
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
  )
}

export default RecenetOrderComp