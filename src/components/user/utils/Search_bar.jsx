import React from 'react'

function Search_bar() {
  return (
    <div className=" flex justify-center items-center -ml-[50px]">
          <input className=" rounded-md w-fit px-2 py-1 border " type="text" placeholder="Search"/>
          <button className="-m-7 text-gray-500 text-sm"><i className="fa-solid fa-magnifying-glass "></i></button>
      </div>
  )
}

export default Search_bar