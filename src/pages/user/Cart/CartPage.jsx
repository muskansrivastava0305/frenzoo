import React, { useEffect, useRef, useState } from "react";
import { Bottom_cart_comp } from "../../../components/user";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  addCookingInstruction,
  addonDecrement,
  addonIncrement,
  addPaymentMethod,
  decrementProduct,
  incrementProduct,
  selectTotalItemCount,
  selectTotalPrice,
} from "../../../Redux/Freatures/User/cartSlice";
import Choice_comp from "../../../components/user/utils/Choice_comp";

function CartPage() {
  const cookingIns = useSelector((state) => state.cart.cookingInstruction);
  const paymentMethod = useSelector((state) => state.cart.paymentMethod);
  const { table, branch_id } = useSelector((state) => state.cart);
  const [expandedStates, setExpandedStates] = useState({});
  const [selectedPayment, setSelectedPayment] = useState(paymentMethod || "");
  const [cookingInstruction, setCookingInstruction] = useState(
    cookingIns || ""
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);
  const products = useSelector((state) => state.cart.products);
  const totalAmount = useSelector(selectTotalPrice);
  const dispatch = useDispatch();
  const PhonePeRef = useRef(null);
  const cashRef = useRef(null);
  const navigate = useNavigate();

  const handlePayClick = (method) => {
    setSelectedPayment(method);
    dispatch(addPaymentMethod(method));
  };

  const OnIncrementProduct = (productId, choice) => {
    if (choice) {
      dispatch(incrementProduct({ id: productId, choice }));
    } else {
      dispatch(incrementProduct({ id: productId, choice }));
    }
    setIsTrue(false);
  };

  const handleIncrement = (productId, itemId, type) => {
    if (type == "product") {
      if (itemId > 0) {
        setCurrentProductId(productId);
        setIsOpen(true);
      } else {
        dispatch(incrementProduct({ id: productId }));
      }
    } else {
      dispatch(addonIncrement({ productId, itemId }));
    }
  };

  const handleDecrement = (productId, itemId, type) => {
    if (type == "product") {
      dispatch(decrementProduct({ id: productId }));
    } else {
      dispatch(addonDecrement({ productId, itemId }));
    }
  };

  useEffect(() => {
    if (!products.length) {
      navigate(`/?table=${table}&branch_id=${branch_id}`);
    }
  }, [products.length, navigate]);

  const handleToggle = (id) => {
    setExpandedStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };

  function handleCookingInstruction(e) {
    const instruction = e.target.value;
    setCookingInstruction(instruction);
    dispatch(addCookingInstruction(instruction));
  }

  const getTruncatedDescription = (description) => {
    const maxLength = 10; // Adjust the max length as needed
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength) + "...";
  };

  useEffect(() => {
    if (paymentMethod === "phonepe") {
      PhonePeRef.current.checked = true;
    } else if (paymentMethod === "cash") {
      cashRef.current.checked = true;
    }
  }, [selectedPayment]);

  return (
    <div className="flex justify-center px-2 sm:px-4 w-full">
      <div className="w-full sm:w-[34rem] mb-[5rem] px-0 sm:px-4 py-4">
        <div className="text-lg text-black font-semibold text-center">
          Frenzoo Cafe & Restaurant
        </div>
        <div className="font-semibold mt-8">Food Items</div>
        <div className=" shadow-custom px-2 sm:px-4">
          {products &&
            products.map((product, index) => (
              <div key={index}>
                <div className="flex justify-between gap-2 mt-4 items-start py-4">
                  {/* product info */}
                  <div className="flex w-[40%] items-start gap-1 sm:gap-2">
                    <img
                      className="pt-1"
                      src="https://frenzoo.qrdine-in.com/assets/images/icons/veg.svg"
                      alt=""
                    />
                    <div>
                      <div className="text-gray-800 text-sm sm:text-lg font-semibold">
                        {product.name}
                      </div>
                      <div className=" flex flex-wrap gap-1">
                        <div
                          className={`text-sm text-gray-500 ${
                            expandedStates[product.id] ? "block" : "hidden"
                          }`}
                        >
                          {product.description}
                        </div>
                        {!expandedStates[product.id] && (
                          <div className="text-sm text-gray-500">
                            {getTruncatedDescription(product.description)}
                          </div>
                        )}
                        <button
                          onClick={() => handleToggle(product.id)}
                          className="text-[#ff8e2f] text-sm"
                        >
                          {expandedStates[product.id]
                            ? "Show less"
                            : "Read more"}
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* increment decrement */}
                  <div className="flex w-[50%] justify-between items-center gap-4 sm:gap-8">
                    <div>
                      <div className="flex w-[5.1rem] border gap-3 sm:gap-3 rounded-md border-orange-400 justify-between items-center text-orange-400 px-2 py-1">
                        <button
                          onClick={() =>
                            handleDecrement(
                              product.id,
                              product.addonExtras.length,
                              "product"
                            )
                          }
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <div>{product.quantity}</div>
                        <button
                          onClick={() =>
                            handleIncrement(
                              product.id,
                              product.addonExtras.length,
                              "product"
                            )
                          }
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="text-orange-400 text-sm sm:text-[1rem] font-semibold">
                        ₹{" "}
                        {product?.addonExtras.reduce(
                          (total, item) => total + item.price * item.quantity,
                          0
                        ) +
                          product.price * product.quantity}
                        .00
                      </div>
                    </div>
                  </div>
                </div>
                {isOpen && currentProductId === product.id && (
                  <Choice_comp
                    setIsOpen={setIsOpen}
                    OnIncrementProduct={OnIncrementProduct}
                    isTrue={isTrue}
                    setIsTrue={setIsTrue}
                    productId={currentProductId}
                  />
                )}
                {/* addons and extras  */}
                {product?.addonExtras.length > 0 && (
                  <div className=" pl-2 pb-4">
                    <div className=" text-sm text-gray-800">Addons/Extras</div>
                    {product?.addonExtras?.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="flex justify-between gap-2 mt-4 items-start"
                        >
                          <div className="flex w-[40%] items-start gap-1 sm:gap-2">
                            <img
                              className="pt-1"
                              src="https://frenzoo.qrdine-in.com/assets/images/icons/veg.svg"
                              alt=""
                            />
                            <div>
                              <div className="text-gray-600 text-sm">
                                {item.name}
                              </div>
                            </div>
                          </div>
                          {/* addon and extras increment and decrement */}
                          <div className="flex w-[50%] justify-between items-center gap-4 sm:gap-8">
                            <div>
                              <div className="flex w-16 border rounded-md border-orange-400 justify-between items-center text-orange-400 px-1.5">
                                <button
                                  onClick={() =>
                                    handleDecrement(
                                      product.id,
                                      item.id,
                                      "addon"
                                    )
                                  }
                                >
                                  <i className="fa-solid text-sm fa-minus"></i>
                                </button>
                                <div className=" text-[13px]">
                                  {item.quantity}
                                </div>
                                <button
                                  onClick={() =>
                                    handleIncrement(
                                      product.id,
                                      item.id,
                                      "addon"
                                    )
                                  }
                                >
                                  <i className="fa-solid text-sm fa-plus"></i>
                                </button>
                              </div>
                            </div>
                            <div>
                              <div className="text-orange-400 text-sm font-semibold">
                                ₹ {item.price * item.quantity}.00
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
        </div>
        <Link
          to={`/?table=${table}&branch_id=${branch_id}`}
          className="my-6 rounded-md bg-[#f5f5f5] border-dashed border flex justify-between items-center border-[#8d8f91] px-4 py-5 text-gray-600 text-sm"
        >
          <div>Add More</div>
          <div>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </Link>
        {/* cooking instruction ---- */}
        <div className="my-6 rounded-md bg-[#f5f5f5] border-dashed border border-[#8d8f91] px-4 py-5 text-gray-600 text-sm">
          <div>Add Cooking Instruction</div>
          <div>
            <input
              type="text"
              value={cookingInstruction}
              onInput={handleCookingInstruction}
              placeholder="Enter your cooking instruction here"
              className="border-none py-2 px-3 w-[16rem] sm:w-[18rem] placeholder:text-gray-700 placeholder:text-[13px] sm:placeholder:text-sm rounded-md mt-3"
            />
          </div>
        </div>
        {/* bill info ----- */}
        <div className="font-semibold">Bill Details</div>
        <div className="relative rounded-md mt-4 px-4 py-2 text-sm bg-[#f5f5f5]">
          <div className="py-2 flex justify-between">
            <div>
              <div>Sub Total</div>
              <div>Discount</div>
            </div>
            <div className="flex flex-col items-end justify-end font-semibold">
              <div>₹ {totalAmount}.00</div>
              <div>₹ 0</div>
            </div>
          </div>
          <div className="border-dashed border-b border-b-gray-300 pb-3 flex justify-between pt-2 items-center">
            <div>Tax</div>
            <div className="font-semibold">₹ 0</div>
          </div>
          <div className="flex justify-between items-center mt-2 mb-2">
            <div>Grand Total</div>
            <div className="text-orange-400 font-semibold">
              ₹ {totalAmount}.00
            </div>
          </div>
          <div className="w-[95%] absolute bottom-0 left-1/2 -translate-x-1/2">
            <img
              className="w-full"
              src="https://frenzoo.qrdine-in.com/assets/images/svg/dots-design.svg"
              alt=""
            />
          </div>
        </div>
        {/* payment info ---- */}
        <div
          onClick={() => handlePayClick("phonepe")}
          className="cursor-pointer mt-6 flex justify-between items-center shadow-custom px-3 py-4"
        >
          <div className="flex gap-2 justify-center items-center">
            <div className="flex justify-center items-center w-8 h-8">
              <img
                src="https://frenzoo.qrdine-in.com/assets/images/icons/phonepay.png"
                alt=""
              />
            </div>
            <div>Phone Pe</div>
          </div>
          <div>
            <input
              type="radio"
              value="1"
              name="pay"
              ref={PhonePeRef}
              className="checked:text-orange-400 checked:bg-orange-400 bg-orange-400"
            />
          </div>
        </div>
        <div
          onClick={() => handlePayClick("cash")}
          className="cursor-pointer mt-6 flex justify-between items-center shadow-custom px-3 py-4"
        >
          <div className="flex gap-2 justify-center items-center">
            <div className="flex justify-center items-center w-10 h-10">
              <img
                src="https://frenzoo.qrdine-in.com/assets/images/icons/svg/cash.svg"
                alt=""
              />
            </div>
            <div>Cash</div>
          </div>
          <div>
            <input type="radio" value="1" name="pay" ref={cashRef} />
          </div>
        </div>
      </div>

      <Bottom_cart_comp
        // price={totalAmount}
        // item={totalItems}
        // onClick={handleCookingInstruction}
        action="Proceed to Checkout"
        to="/preference"
      />
    </div>
  );
}

export default CartPage;
