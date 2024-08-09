import React from 'react'

function Search_bar({onChange}) {
  return (
    <div className=" relative flex justify-center items-center ">
          <div className=' relative'>
            <input onInput={onChange} className=" rounded-md w-fit px-2 py-1 border " type="text" placeholder="Search"/>
          <button className=" top-0 p-2 absolute right-0 text-gray-500 text-sm"><i className="fa-solid fa-magnifying-glass "></i></button>
          </div>
      </div>
  )
}

export default Search_bar