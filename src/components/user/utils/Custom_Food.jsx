import React, { useRef, useState, useEffect } from 'react';

function Custom_Food({ setCustomFoodComp, product, onAddProduct }) {
  const bigRef = useRef(null);
  const smallRef = useRef(null);

  // Set default size and price here
  const defaultSize = "big"; // change to "small" if you want the small size to be default
  const defaultPrice = defaultSize === "big" ? 549 : 20;

  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [price, setPrice] = useState(defaultPrice);

  useEffect(() => {
    if (defaultSize === "big") {
      bigRef.current.checked = true;
    } else if (defaultSize === "small") {
      smallRef.current.checked = true;
    }
  }, [defaultSize]);

  const handleDivClick = (size, price) => {
    if (size === "big") {
      bigRef.current.checked = true;
      setSelectedSize("big");
      setPrice(549);
    } else if (size === "small") {
      smallRef.current.checked = true;
      setSelectedSize("small");
      setPrice(20);
    }
  };

  const handleApply = () => {
    const options = { size: selectedSize, price };
    onAddProduct(product, options);
  };

  const handleClose = () => {
    setCustomFoodComp(false);
  };

  return (
    <div className="flex justify-center items-center w-full h-full fixed right-0 top-0">
      <div className="bg-white w-[45rem] mx-3 h-fit shadow-custom border rounded-3xl">
        <div>
          <button onClick={handleClose} className="inline-block px-7 pt-3 text-gray-700 text-2xl">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="w-full flex justify-center text-lg font-semibold text-gray-600">
            Custom Food
          </div>
        </div>
        <div className="px-8 py-8">
          <div className="flex gap-2">
            <div className="w-28 h-28">
              <img src={product.img} alt="product" />
            </div>
            <div>
              <div className="font-semibold">{product.name}</div>
              <div className="text-gray-400 text-sm">{product.description}</div>
            </div>
          </div>
          <div className="font-semibold mt-8 text-gray-700">Choose Size</div>
          <div className="py-3">
            <div
              onClick={() => handleDivClick("big", 549)}
              className="border-dashed border-b cursor-pointer border-b-gray-300 mb-4 pb-3 justify-between flex"
            >
              <div>Big</div>
              <div className="flex gap-5">
                <label htmlFor="">₹549</label>
                <input type="radio" name="size" value="1" ref={bigRef} id="big" />
              </div>
            </div>
            <div
              onClick={() => handleDivClick("small", 20)}
              className="border-dashed border-b cursor-pointer border-b-gray-300 pb-3 justify-between flex"
            >
              <div>Small</div>
              <div className="flex gap-5">
                <label htmlFor="">₹20</label>
                <input type="radio" name="size" value="2" ref={smallRef} id="small" />
              </div>
            </div>
          </div>
          <div className="flex justify-between mb-7">
            <div className="font-semibold text-gray-700">Grand Total</div>
            <div className="pr-7 font-semibold text-orange-500">₹ {price}</div>
          </div>
          <div className="bg-orange-400 text-white text-center p-2 rounded-lg mt-8 cursor-pointer" onClick={handleApply}>
            Apply
          </div>
        </div>
      </div>
    </div>
  );
}

export default Custom_Food;
