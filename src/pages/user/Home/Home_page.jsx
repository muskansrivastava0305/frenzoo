import React, { useState } from "react";
import { Qrdine_logo } from "../../../components/user";

function Home_page({children}) {
  const [item , setItem] =  useState(false)
  return (
    <div>
  <Qrdine_logo/>
    {item && (<div className=" flex w-full justify-center">
      <div className=" py-8 px-11 bg-white shadow-custom text-xl w-[37rem] text-center mt-20 rounded-3xl">
        Please sacn the QR code first to access the main menu. thank you. 
      </div>
    </div>)}

   <div className=" w-full justify-center flex px-4">
  {!item && (
     <div className=" mt-32 mb-[5rem] w-[34rem] lg:w-[40rem]">
     {children}
    </div>
  )}
   </div>
  </div>
  )
}

export default Home_page;
