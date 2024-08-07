import React, { useState } from "react";

function Choice_comp({setIsOpen , isOpen ,  OnIncrementProduct , isTrue , setIsTrue , productId , OnDecrementProduct , action }) {

  const handleNoClick = (choice) => {
    setIsTrue(choice);
    if(action === 'Increment'){
      OnIncrementProduct(productId,choice);
    }else if('Decrement'){
      OnDecrementProduct(productId,choice)
    }
    setIsOpen(false); // Close the modal after selection
  };

  const handleYesClick = (choice) => {
    setIsTrue(choice);
    if(action==='Increment'){
      OnIncrementProduct(productId,choice);
    }else if('Decrement'){
      OnDecrementProduct(productId,choice)
    }
    setIsOpen(false); // Close the modal after selection
  };

  return (
    <div className=" flex bg-[#000000a6] w-full h-full justify-center fixed top-0 right-0 z-[999]">
          <div className=" gap-4 flex flex-col h-fit px-4 py-5 absolute top-1/4 rounded-md mx-2 items-center bg-white">
            <div className=" font-semibold text-base">{action === "Increment" ? "Do you want to repeate the whole product ?" : "Do you want to Delete the whole product ?"}</div>
            <div className=" flex gap-4 ">
              <button onClick={()=> handleNoClick(false)} className=" hover:bg-[#fb923cde] bg-[#fb923c] rounded-md py-2 w-16 text-white">
                No
              </button>
              <button onClick={()=> handleYesClick(true)} className=" hover:bg-[#fb923cde] bg-[#fb923c] rounded-md py-2 w-20 px-4 text-white">
                Yes
              </button>
            </div>
          </div>
    </div>

  )
}


export default Choice_comp;
