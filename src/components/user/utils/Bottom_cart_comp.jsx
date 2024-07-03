import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectTotalItemCount, selectTotalPrice } from '../../../Redux/Freatures/User/cartSlice'

function Bottom_cart_comp({ action , to , onClick}) {
  const totalAmount =  useSelector(selectTotalPrice)
  const totalCount = useSelector(selectTotalItemCount)


  return (
    <button onClick={onClick} className=" fixed w-full bottom-0 left-[50%] translate-x-[-50%] max-w-[700px] z-10 shadow-custom h-auto p-5 flex items-center justify-between  bg-custom-gradient rounded-t-[20px]">
    <div className=' flex flex-col items-start'>
      <div className=" font-semibold text-orange-400">₹ {Number(totalAmount)}</div>
      <div className=" text-sm  text-white"> {totalCount} item added</div>
    </div>
    <Link to={to} className=" bg-orange-400 p-2 flex justify-center items-center text-white rounded-md text-sm">{action}</Link>
  </button>
  )
}

export default Bottom_cart_comp