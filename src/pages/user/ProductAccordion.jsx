import React, { useEffect, useRef, useState } from "react";

const ProductAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const fullText =
    "ifbishfiewhfioh ifbishfiewhfioh ifbishfiewhfioh ifbishfiewhfioh ifbishfiewhfioh ifbishfiewhfioh";
  const truncatedText = "ifbishfiewhfioh... ";

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.height = "0px";
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200">
      <div
        className="flex justify-between items-center py-6 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className=" text-sm text-gray-600">Namkeen</h2>
        <span>
          {isOpen ? (
            <i class="fa-solid fa-angle-up"></i>
          ) : (
            <i class="fa-solid fa-angle-down"></i>
          )}
        </span>
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-height duration-300 ease-in-out"
        style={{ height: "0px" }}
      >
        <div className=" flex justify-between">
          <div className=" w-full mr-6">
            <div className=" border-b border-dashed border-b-gray-300">
              <div className="pb-1">
                <img
                  src="https://frenzoo.qrdine-in.com/assets/images/icons/veg.svg"
                  alt="category"
                />
              </div>
              <div className=" font-semibold">Pizza</div>
              <div className=" text-[#ff8e2f] font-semibold pb-7">₹ 99.00</div>
            </div>
            <div className=" flex flex-wrap text-[12px] mt-1 text-gray-500">
              <div>{isExpanded ? fullText : truncatedText}</div>
              <button
                onClick={handleToggle}
                className=" text-[#ff8e2f] mb-2 text-sm"
              >
                {" "}
                {isExpanded ? "Show less" : "Read more"}
              </button>
            </div>
          </div>
          <div className=" w-36 h-36 rounded-md">
            <img
              className=" overflow-auto w-full rounded-md"
              src="https://frenzoo.qrdine-in.com/storage/app/public/product/2024-03-28-6605646faacf5.png"
              alt=""
            />
            <div className=" flex justify-center">
              <button className=" border-[#ff8e2f] flex gap-1 justify-center items-center text-[#ff8e2f] rounded-md border px-6 py-2 mt-2 mb-8">
              <i class="fa-solid fa-plus"></i> 
                <div>
                Add
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAccordion;
