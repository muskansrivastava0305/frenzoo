import React from 'react'
import { Link } from 'react-router-dom'

function Bottom_cart_comp({price ,  item , action , to }) {
  return (
    <div className=" fixed w-full bottom-0 left-[50%] translate-x-[-50%] max-w-[700px] z-10 shadow-custom h-auto p-5 flex items-center justify-between  bg-custom-gradient rounded-t-[20px]">
    <div>
      <div className=" font-semibold text-orange-400">₹ {Number(price)}</div>
      <div className=" text-sm  text-white"> {item} item added</div>
    </div>
    <Link to={to} className=" bg-orange-400 p-2 text-white rounded-md text-sm">{action}</Link>
  </div>
  )
}

export default Bottom_cart_comp