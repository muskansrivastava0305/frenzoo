import React, { useRef } from 'react'

function Custom_Food({setCustomFoodComp , item}) {

    const bigRef = useRef(null);
    const smallRef = useRef(null);
  
    const handleDivClick = (size) => {
      if (size === "big") {
        bigRef.current.checked = true;
      } else if (size === "small") {
        smallRef.current.checked = true;
      }
    };

    console.log(item)
    function handleComp(){
      setCustomFoodComp(false)
    }

  return (
    <div className=" flex justify-center items-center w-full h-full fixed right-0 top-0">
        <div className=" bg-white w-[45rem]  mx-3 h-5/6 shadow-custom border rounded-3xl">
          <div>
            <button onClick={handleComp} className=" inline-block px-7 pt-3 text-gray-700 text-2xl"><i className="fa-solid fa-xmark"></i></button>
            <div className=" w-full flex justify-center text-lg font-semibold text-gray-600">
              Custom Food
            </div>
          </div>
          <div className=" px-8 py-8">
            <div className=" flex gap-2 ">
              <div className=" w-28 h-28">
                <img
                  src={item.img}
                  alt="product"
                />
              </div>
              <div>
                <div className=" font-semibold ">{item.name}</div>
                <div className=" text-gray-400 text-sm">
                  {item.description}
                </div>
              </div>
            </div>
            <div className=" font-semibold mt-8 text-gray-700">Choose Size</div>
            <div className=" py-3">
              <div
                onClick={() => handleDivClick("big")}
                className=" border-dashed border-b cursor-pointer border-b-gray-300 mb-4 pb-3 justify-between flex"
              >
                <div className="">Big</div>
                <div className=" flex gap-5">
                  <label htmlFor="">$49</label>
                  <input
                    type="radio"
                    name="size"
                    value="1"
                    ref={bigRef}
                    id="big"
                  />
                </div>
              </div>
              <div
                onClick={() => handleDivClick("small")}
                className=" border-dashed border-b cursor-pointer border-b-gray-300 pb-3 justify-between flex"
              >
                <div className="">Small</div>
                <div className=" flex gap-5">
                  <label htmlFor="">$20</label>
                  <input
                    type="radio"
                    name="size"
                    value="2"
                    ref={smallRef}
                    id="small"
                  />
                </div>
              </div>
            </div>
            <div className=" flex justify-between mb-7">
              <div className=" font-semibold text-gray-700">Grand Total</div>
              <div className=" pr-7 font-semibold text-orange-500">$ 49</div>
            </div>
            <div className=" bg-orange-400 text-white text-center p-2 rounded-lg mt-8">
                Apply
            </div>
          </div>
        </div>
      </div>
  )
}

export default Custom_Food