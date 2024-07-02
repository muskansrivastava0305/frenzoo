import React, { useEffect, useState } from "react";

function Qrdine_logo() {
 
  return (
    <>
      <div>
      <div className=" relative h-[30vh] sm:h-[40vh] bg-no-repeat bg-cover bg-center px-3 sm:px-5 py-3 sm:py-4 flex-col bg-homeImage ">
        <div className=" w-full justify-center items-center flex">
          <div className=" w-[12rem] sm:w-[13rem] flex justify-center items-center">
            <img
              className=" h-full w-full"
              src="https://pindballuchi.com/wp-content/uploads/2024/02/Logo-1-removebg-preview.png"
              alt="logo"
            />
          </div>
        </div>
        <div className=" sm:pt-[9rem] flex justify-center items-center">
          <div className=" absolute bottom-0 bg-[#ffffff1a] rounded-md w-[20rem] sm:w-[25rem] pt-2 px-3">
            <div className=" pb-4">
              <div className=" font-semibold text-[13px] sm:text-md text-white">Pind Balluchi</div>
              <div className=" text-sm text-gray-400">CP</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Qrdine_logo;
