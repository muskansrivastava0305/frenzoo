import React, { useRef } from "react";
import Bottom_cart_comp from "./utils/Bottom_cart_comp";

function CartPage() {

    const PhonePeRef =  useRef(null)
    const cashRef = useRef(null)

    const handlePayClick = (size) => {
        if (size === "phonepe") {
            PhonePeRef.current.checked = true;
        } else if (size === "cash") {
            cashRef.current.checked = true;
        }
      };

  return (
    <div className=" flex justify-center px-4 w-full">
      <div className=" w-[34rem] mb-[10%] px-4 py-4">
        <div className=" text-lg text-black font-semibold text-center">
          Frenzoo Cafe & Restaurant
        </div>
        <div className=" font-semibold mt-8">Food Items</div>
        <div className=" flex justify-between mt-4 items-center shadow-custom p-4">
          <div  className=" flex items-start gap-2">
            <img className=" pt-1"
              src="https://frenzoo.qrdine-in.com/assets/images/icons/veg.svg"
              alt=""
            />
            <div>
              <div className=" text-gray-800 font-semibold">Khatta Mitha</div>
              <div className=" text-sm text-gray-500">
                Mixing of sure & sweet
              </div>
            </div>
          </div>
          <div className=" flex items-center gap-8">
            <div>
              <div className=" flex border gap-5 rounded-md border-orange-400 justify-between items-center text-orange-400 px-2 py-1">
                <div>-</div>
                <div>1</div>
                <div>+</div>
              </div>
            </div>
            <div className=" text-orange-400 font-semibold">$ 39.00</div>
          </div>
        </div>
        <div className=" my-6 rounded-md bg-[#f5f5f5] border-dashed border flex justify-between items-center border-[#8d8f91] px-4 py-5 text-gray-600 text-sm">
          <div>Add More</div>
          <div>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
        <div className=" my-6 rounded-md bg-[#f5f5f5] border-dashed border border-[#8d8f91] px-4 py-5 text-gray-600 text-sm">
          <div>Add Cooking Instruction</div>
          <div>
            <input
              type="text"
              placeholder="Enter your cooking instruction here"
              className=" border-none py-2 px-3 w-[18rem] placeholder:text-gray-700 placeholder:text-sm rounded-md mt-3"
            />
          </div>
        </div>
        <div className=" font-semibold">Bill Details</div>
        <div className=" relative rounded-md mt-4 px-4 py-2 text-sm bg-[#f5f5f5] ">
          <div className=" py-2 flex justify-between">
            <div>
              <div>Sub Total</div>
              <div>Discrount</div>
            </div>
            <div className=" font-semibold">
              <div>$ 39.99</div>
              <div>$ 39.00</div>
            </div>
          </div>
          <div className=" border-dashed border-b border-b-gray-300 pb-3 flex justify-between pt-2 items-center">
            <div>Tax</div>
            <div className=" font-semibold">$ 49.00</div>
          </div>
          <div className=" flex justify-between items-center mt-2 mb-2">
            <div>Grand Total</div>
            <div className=" text-orange-400 font-semibold">$ 49.00</div>
          </div>
          <div className=" w-[95%] absolute bottom-0 left-1/2 -translate-x-1/2">
            <img
              className=" w-full"
              src="https://frenzoo.qrdine-in.com/assets/images/svg/dots-design.svg"
              alt=""
            />
          </div>
        </div>
        <div onClick={()=> handlePayClick('phonepe')} className=" cursor-pointer mt-6 flex justify-between items-center shadow-custom px-3 py-4">
          <div className=" flex gap-2 justify-center items-center">
            <div className=" flex justify-center  items-center w-8 h-8"><img src="https://frenzoo.qrdine-in.com/assets/images/icons/phonepay.png" alt="" /></div>
            <div>Phone Pe</div>
          </div>
          <div>
            <input type="radio" value="1" name="pay" ref={PhonePeRef} className=" checked:text-orange-400 checked:bg-orange-400 bg-orange-400" />
          </div>
        </div>
        <div onClick={()=> handlePayClick('cash')} className=" cursor-pointer mt-6 flex justify-between items-center shadow-custom px-3 py-4">
          <div className=" flex gap-2 justify-center items-center">
            <div className=" flex justify-center items-center w-10 h-10"><img src="https://frenzoo.qrdine-in.com/assets/images/icons/svg/cash.svg" alt="" /></div>
            <div>Cash</div>
          </div>
          <div>
            <input type="radio" value="1" name="pay" ref={cashRef} />
          </div>
        </div>
      </div>
      <Bottom_cart_comp price="100.00" item="1" action="Proceed to Checkout" to="/payment"/>
    </div>
  );
}

export default CartPage;
