import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addTotalAmount, selectTotalItemCount, selectTotalPrice } from '../../../Redux/Freatures/User/cartSlice'
import Loading from '../../Loading'

function Bottom_cart_comp({ action , to="" , onClick , loading}) {
  const dispatch = useDispatch()
  const { table, branch_id } = useSelector((state) => state.cart);
  const totalAmount =  useSelector(selectTotalPrice)
  const totalCount = useSelector(selectTotalItemCount)

  useEffect(()=>{

    dispatch(addTotalAmount(Number(totalAmount)))
  },[totalAmount,totalCount])

  let tableAndBranch = `table=${table}&branch_id=${branch_id}`;


  return (
    <button onClick={onClick} className=" fixed w-full bottom-0 left-[50%] translate-x-[-50%] max-w-[700px] z-10 shadow-custom h-auto p-5 flex items-center justify-between  bg-custom-gradient rounded-t-[20px]">
    <div className=' flex flex-col items-start'>
      <div className=" font-semibold text-orange-400">₹ {Number(totalAmount)}</div>
      <div className=" text-sm  text-white"> {totalCount} item added</div>
    </div>
    <Link to={`${to}?${tableAndBranch}`} className=" bg-orange-400 p-2 flex justify-center items-center text-white rounded-md text-sm">{ loading ? <Loading className=" border-white"/> : action}</Link>
  </button>
  )
}

export default Bottom_cart_comp