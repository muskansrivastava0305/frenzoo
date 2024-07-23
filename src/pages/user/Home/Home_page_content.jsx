import React, { useEffect, useState } from "react";
import Home_page from "./Home_page";
import ProductAccordion from "../utils/ProductAccordion";
import { Bottom_cart_comp, Search_bar } from "../../../components/user";
import { useSelector } from "react-redux";
import {
  selectTotalItemCount,
  selectTotalPrice,
} from "../../../Redux/Freatures/User/cartSlice";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function Home_page_content() {
  const cart = useSelector((state) => state.cart.products);
  const [category, setCategory] = useState({});
  const [searchParams] = useSearchParams();
  const [search , setSearch] = useState("")
  const table = searchParams.get("table");
  const branchId = searchParams.get("branch_id");

  async function getTableData() {
    await axios
      .get(
        `https://frenzoo.qrdine-in.com/degitalmenuapi?table=${table}&branch_id=${branchId}&search=${search}`
      )
      .then((res) => {
        setCategory(res.data);
      });
  }

  useEffect(() => {
    getTableData();
  }, [search]);

  return (
    <Home_page restaurantInfo={category}>
      {category.status !== 'Booked' ? (
        <>
          <Search_bar onChange={(e)=> setSearch(e.target.value)}/>
          <div className=" w-full mt-10 flex justify-start gap-3 sm:gap-7 pb-5">
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
          <div className="w-full relative">
            <div className="flex justify-start flex-col border-t border-t-gray-200">
              <div className="pt-6">
                <div className="text-xl text-black font-bold">Recommended</div>
              </div>
              <div className="pb-8">
                {category && category.categories?.length > 0
                  ? category.categories.map((item) => (
                      <ProductAccordion
                        key={item.categoryname}
                        category={item.categoryname}
                        products={item.products}
                      />
                    ))
                  : null}
              </div>
              {cart.length > 0 && (
                <Bottom_cart_comp
                  // price={price}
                  // item={totalCount}
                  action="View Cart"
                  to="/cart_items"
                />
              )}
            </div>
          </div>
        </>
      ) : (
        <div className=" flex w-full justify-center">
          <div className=" py-8 px-11 bg-white shadow-custom text-xl w-[37rem] text-center mt-20 rounded-3xl">
          The Table is not empty this Time Beacuse Order is Already Exists in this table.          </div>
        </div>
      )}
    </Home_page>
  );
}

export default Home_page_content;
