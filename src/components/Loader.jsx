import React from 'react'
import { CircleLoader, HashLoader, ScaleLoader } from 'react-spinners';


  
function Loader() {
  return (
    <>
     <div className=' h-screen w-full flex justify-center items-center'>
     <ScaleLoader
        color="#000000"
        size={100} 
        aria-label="Loading Spinner"
        data-testid="loader"
      />
     </div>
    </>
  )
}

export default Loader