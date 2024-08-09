import React, { useEffect, useState } from "react";
import Home_page from "./Home_page";
import ProductAccordion from "../utils/ProductAccordion";
import { Bottom_cart_comp, Search_bar } from "../../../components/user";
import { useDispatch, useSelector } from "react-redux";
import {
  addTableAndBranch,
  selectTotalItemCount,
  selectTotalPrice,
} from "../../../Redux/Freatures/User/cartSlice";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import DisplayCard from "../utils/DisplayCard";
import Loader from "../../../components/Loader";
import Loading from "../../../components/Loading";

function Home_page_content() {
  const cart = useSelector((state) => state.cart.products);
  const [category, setCategory] = useState({});
  const [loading , setLoading ] =useState(false)
  const [initialLoading, setInitialLoading] = useState(true);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [product_type, setProductType] = useState("");
  const [bestSeller , setBestSeller] = useState(true)
  const table = searchParams.get("table");
  const branchId = searchParams.get("branch_id");
  const [expandedProducts, setExpandedProducts] = useState({});

  async function getTableData(isInitialLoad = false) {
    if (isInitialLoad) setInitialLoading(true);
    setLoading(true)
    await axios
      .get(
        `https://frenzoo.qrdine-in.com/degitalmenuapi?table=${table}&branch_id=${branchId}&search=${search}&product_type=${product_type}&set_menu=${Number(bestSeller)}`
      )
      .then((res) => {
        setCategory(res.data);
      })
      .finally(() =>
     { setLoading(false)
      if (isInitialLoad) setInitialLoading(false);}
    );
  }

  useEffect(() => {
    getTableData(true);
  }, [table, branchId]);

  useEffect(() => {
    dispatch(addTableAndBranch({ table, branchId }));
  }, [dispatch, table, branchId]);

  useEffect(() => {
    getTableData();
  }, [search, product_type , bestSeller ]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setExpandedProducts({});
  };

  return initialLoading ? <Loader/> : (
    <Home_page restaurantInfo={category}>
      {category.status !== "Booked" ? (
        <>
          <Search_bar onChange={(e) => handleSearchChange(e)} />
          <div className=" w-full mt-10 flex justify-between items-center gap-3 sm:gap-7 pb-5">
            <div className=" flex gap-3">
              {product_type === "veg" ? (
                <button
                  onClick={() => setProductType("veg")}
                  className=" flex justify-center items-center border rounded-md text-[13px] sm:text-sm gap-2 px-1 sm:px-2 bg-[#ffe395]  border-[#ffe395]"
                >
                  <img
                  loading="lazy"
                    src="https://frenzoo.qrdine-in.com/public/assets/images/icons/veg.svg"
                    alt="veg"
                  />
                  Veg
                </button>
              ) : (
                <button
                  onClick={() => setProductType("veg")}
                  className="  flex justify-center items-center border rounded-md text-[13px] sm:text-sm gap-2 px-1 sm:px-2 border-[#f5f5f5]"
                >
                  <img
                  loading="lazy"
                    src="https://frenzoo.qrdine-in.com/public/assets/images/icons/veg.svg"
                    alt="veg"
                  />
                  Veg
                </button>
              )}
              {product_type === "non_veg" ? (
                <button
                  onClick={() => setProductType("non_veg")}
                  className=" flex justify-center items-center border rounded-md text-sm gap-2 p-2 bg-[#ffe395]  border-[#ffe395]"
                >
                  <img
                  loading="lazy"
                    src="https://frenzoo.qrdine-in.com/public/assets/images/svg/nonveg.svg"
                    alt="veg"
                  />
                  Non Veg
                </button>
              ) : (
                <button
                  onClick={() => setProductType("non_veg")}
                  className=" flex justify-center items-center border rounded-md text-sm gap-2 p-2 border-[#f5f5f5]"
                >
                  <img
                  loading="lazy"
                    src="https://frenzoo.qrdine-in.com/public/assets/images/svg/nonveg.svg"
                    alt="veg"
                  />
                  Non Veg
                </button>
              )} 

              <button onClick={()=> setBestSeller(!bestSeller)} 
              className={`${bestSeller ? " border-[#f5f5f5]" : "bg-[#ffe395]  border-[#ffe395]"} flex justify-center items-center border rounded-md text-sm gap-2 p-2 `}>
              <img
              loading="lazy"
                src="https://frenzoo.qrdine-in.com/public/assets/images/icons/veg.svg"
                alt="veg"
              />
              Best Seller
            </button>

            </div>
            <div>
            {
              product_type && (
                <button
                  onClick={() => {
                    setProductType("")
                    setBestSeller(true)
                  }}
                  className=" flex justify-center py-2 items-center border rounded-md text-[13px] sm:text-sm gap-2 px-1 sm:px-2 bg-white "
                >
                  Clear filter<i class="fa-solid fa-xmark"></i>
              </button>
              )
            }
            </div>
          </div>
          <div className="w-full relative">
            <div className="flex justify-start flex-col border-t border-t-gray-200">
              <div className="pt-6">
                <div className="text-xl text-black font-bold">Recommended</div>
              </div>
              {
                loading ? <Loading className={"mt-10 border-black"}/> : (
                  <div className="pb-8">
                {category && category.categories?.length > 0
                  ? category.categories.map((item) => (
                      <ProductAccordion
                        product_type={product_type}
                        bestSeller={bestSeller}
                        key={item.categoryname}
                        category={item.categoryname}
                        products={item.products}
                        expandedProducts={expandedProducts}
                        setExpandedProducts={setExpandedProducts}
                      />
                    ))
                  : <div className=" mt-10 flex justify-center items-center">
                    <div>
                    No data found 
                    </div>
                    </div>}
              </div>
                )
              }
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
        <DisplayCard>
          The Table is not empty this Time Beacuse Order is Already Exists in
          this table.
        </DisplayCard>
      )}
    </Home_page>
  );
}

export default Home_page_content;
