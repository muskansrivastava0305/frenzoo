import React, { useRef, useState } from "react";
import { Bottom_cart_comp } from "../../../components/user";

function Preference_page() {
  const [isCheckboxDisable, setIsCheckboxDisable] = useState(false);
  const [isInputDisable, setIsInputDisable] = useState(false);
  const ref = useRef(null);

  function handleInputEvent() {
    if (isCheckboxDisable === true) {
      setIsCheckboxDisable(false);
    } else if (isCheckboxDisable === false) {
      setIsCheckboxDisable(true);
    }
  }

  function handleAnonymous() {
    if (ref.current.checked) {
      ref.current.checked = false;
      setIsInputDisable(false);
    } else {
      ref.current.checked = true;
      setIsInputDisable(true);
    }
  }

  return (
    <>
      <div className="flex justify-center bg-white py-10">
        <div className="flex justify-center w-96 px-3 flex-col items-center">
          <div className="font-semibold text-xl">Select Your Detail</div>
          <div className="border-gray border mt-8 w-full py-4 px-7 rounded-xl">
            <div className="text-center text-lg text-gray-600">Diners</div>
            <div className="mb-6">
              <label htmlFor="" className="block text-lg text-gray-500">
                Name
              </label>
              <input
                type="text"
                onClick={handleInputEvent}
                disabled={isInputDisable}
                className="px-5 py-3 w-full placeholder:text-sm sm:placeholder:text-lg border-gray-300 border rounded-md mt-2"
                placeholder="Enter your name"
              />
            </div>
            <div className=" mb-6">
              <label htmlFor="" className="block text-lg text-gray-500">
                Mobile Number
              </label>
              <input
                type="text"
                disabled={isInputDisable}
                onClick={handleInputEvent}
                className="px-5 py-3 placeholder:text-sm sm:placeholder:text-lg w-full border-gray-300 border rounded-md mt-2"
                placeholder="Enter your mobile number"
              />
            </div>
          </div>
          <button
            disabled={isCheckboxDisable}
            onClick={handleAnonymous}
            className="cursor-pointer flex justify-between w-full px-1 py-5"
          >
            <div className="text-xl text-gray-500">Anonymous</div>
            <div>
              <input disabled={isCheckboxDisable} ref={ref} type="checkbox" />
            </div>
          </button>
        </div>
      </div>
      <Bottom_cart_comp
        price="100.00"
        item="1"
        action="Proceed"
        to="/preference"
      />
    </>
  );
}

export default Preference_page;
