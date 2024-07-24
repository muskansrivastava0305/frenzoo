import React from 'react'

function DisplayCard({children}) {
  return (
    <div className=" flex w-full justify-center">
          <div className=" py-8 px-11 bg-white shadow-custom text-xl w-[20rem] sm:w-[37rem] text-center mt-20 rounded-3xl">
          {children}
          </div>
        </div>
  )
}

export default DisplayCard