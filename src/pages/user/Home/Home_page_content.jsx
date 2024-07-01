import React, { useRef } from "react";
import Home_page from "./Home_page";
import ProductAccordion from "../utils/ProductAccordion";
import { Bottom_cart_comp } from "../../../components/user";
import { useSelector } from "react-redux";
import {
  selectTotalItemCount,
  selectTotalPrice,
} from "../../../Redux/Freatures/User/cartSlice";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is the description for Product 1",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is the description for Product 2",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is the description for Product 3",
  },
];

function Home_page_content() {
  const price = useSelector(selectTotalPrice);
  const totolCount = useSelector(selectTotalItemCount);

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
              {products.map((product) => (
                <ProductAccordion
                  key={product.id}
                  title={product.name}
                  content={product.description}
                />
              ))}
            </div>
          </div>
          <Bottom_cart_comp
            price={price}
            item={totolCount}
            action="View Cart"
            to="/cart_items"
          />
        </div>
      </div>

      {/*  cart  */}
      {/* <Custom_Food/> */}
    </Home_page>
  );
}

export default Home_page_content;
