import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function Order_placed_page() {
  const navigate = useNavigate()

  useEffect(()=>{
    setTimeout(() => {
      navigate('/order_track')
    }, 3000);
  },[])
  return (
    <div className=" h-screen md:h-full w-full px-3 sm:px-5 flex-col flex justify-center items-center">
       <div className=" w-5/6 sm:w-1/2 md:w-1/3">
       <img loading="lazy" className=" h-full w-full"
          src="https://frenzoo.qrdine-in.com/assets/images/gif/success-payment-light.gif"
          alt=""
        />
       </div>
       <div className=" text-center font-semibold text-lg">
        Order Placed Successfully
       </div>
       <div className=" my-5 flex justify-center items-center w-full text-sm text-gray-600">
        <div className="  w-96 text-center">
        Your order has been placed successfully ! just wait for your month-watering dishes . 
        </div>
       </div>
       <div className=" flex justify-center w-full sm:w-1/2 items-center mt-3">
        <Link to="/order_track" className=" text-center bg-orange-400 w-full text-white p-3 rounded-lg">Track Order Now</Link>
       </div>
      </div>
  );
}

export default Order_placed_page;
