import React, { useRef } from "react";
import Home_page from "./Home_page";
import Custom_Food from "./utils/Custom_Food";
import ProductAccordion from "./ProductAccordion";
import { Link } from "react-router-dom";
import Bottom_cart_comp from "./utils/Bottom_cart_comp";

function Home_page_content() {
  return (
    <Home_page>
      <div className=" w-full flex justify-start gap-3 sm:gap-7  pb-5">
        <button className=" flex justify-center items-center border rounded-md text-[13px] sm:text-sm gap-2 px-1 sm:px-2 border-[#f5f5f5]">
          <img
            src="https://frenzoo.qrdine-in.com/public/assets/images/icons/veg.svg"
            alt="veg"
          />
          Veg
        </button>
        <button className=" flex justify-center items-center border rounded-md text-sm gap-2 p-2 border-[#f5f5f5]">
          <img
            src="https://frenzoo.qrdine-in.com/public/assets/images/svg/nonveg.svg"
            alt="veg"
          />
          Veg
        </button>
        <button className=" flex justify-center items-center border rounded-md text-sm gap-2 p-2 border-[#f5f5f5]">
          <img
            src="https://frenzoo.qrdine-in.com/public/assets/images/icons/veg.svg"
            alt="veg"
          />
          Best Seller
        </button>
      </div>
      <div className=" w-full relative">
        <div className=" flex justify-start flex-col border-t border-t-gray-200">
          <div className=" pt-6">
            <div className=" text-xl text-black font-bold">Recommended</div>
          </div>
          <div className=" pb-8">
            <div>
              <ProductAccordion />
            </div>
          </div>

         <Bottom_cart_comp price="100.00" item="chicken" action="View Cart" to="/cart_items"/>

        </div>
      </div>

      {/*  cart  */}
      {/* <Custom_Food/> */}
    </Home_page>
  );
}

export default Home_page_content;
