import React, { useState, useRef, useEffect } from "react";
import { Bottom_cart_comp } from "../../../components/user";
import { useNavigate } from "react-router-dom";

const MyComponent = () => {
  const [isInputDisable, setIsInputDisable] = useState(false);
  const [isCheckboxDisable, setIsCheckboxDisable] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [name, setName] = useState("");
  const [isAnonymousChecked, setIsAnonymousChecked] = useState(false);
  const checkboxRef = useRef();
  const navigate = useNavigate();

  const handleInputEvent = () => {
    setIsCheckboxDisable(true);
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
      setName(value);
    if (value || mobileNumber) {
      setIsCheckboxDisable(true);
    } else {
      setIsCheckboxDisable(false);
    }
    setNameError(false)

  };

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setMobileNumber(value);
      if (value || name) {
        setIsCheckboxDisable(true);
      } else {
        setIsCheckboxDisable(false);
      }
    }
    setPhoneError(false)

  };

  const handleAnonymous = () => {
    setIsAnonymousChecked(!isAnonymousChecked);
    setIsInputDisable(!isAnonymousChecked);
  };

  const handleOrder = () => {
   if(checkboxRef.current.checked){
    navigate('/place_order_successfully')
   }else{
    if (mobileNumber.length !== 10) {
      setPhoneError(true);
    } else if (name.length === 0 ) {
      setNameError(true);
    } else {
      navigate("/place_order_successfully");
    }
   }
  };

  return (
    <div className="flex justify-center bg-white py-10">
      <div className="flex justify-center w-96 px-3 flex-col items-center">
        <div className="font-semibold text-xl">Select Your Detail</div>
        <div className="border-gray border mt-8 w-full py-4 px-7 rounded-xl">
          <div className="text-center text-lg text-gray-600">Diners</div>
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg text-gray-500">
              Name
            </label>
            <input
              type="text"
              onClick={handleInputEvent}
              disabled={isInputDisable}
              value={name}
              onChange={handleNameChange}
              className="px-5 py-3 w-full placeholder:text-sm sm:placeholder:text-lg border-gray-300 border rounded-md mt-2"
              placeholder="Enter your name"
              id="name"
            />
            {nameError && (
              <p className=" text-sm text-red-500">Please enter your name</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="mobileNumber"
              className="block text-lg text-gray-500"
            >
              Mobile Number
            </label>
            <input
              type="text"
              disabled={isInputDisable}
              onClick={handleInputEvent}
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              className="px-5 py-3 placeholder:text-sm sm:placeholder:text-lg w-full border-gray-300 border rounded-md mt-2"
              placeholder="Enter your mobile number"
              id="mobileNumber"
            />
            {phoneError && (
              <p className=" text-sm text-red-500">
                Please enter your 10 digits number
              </p>
            )}
          </div>
        </div>
        <button
          disabled={isCheckboxDisable}
          onClick={handleAnonymous}
          className="cursor-pointer flex justify-between w-full px-1 py-5"
        >
          <div className="text-xl text-gray-500">Anonymous</div>
          <div>
            <input
              disabled={isCheckboxDisable}
              ref={checkboxRef}
              type="checkbox"
              checked={isAnonymousChecked}
              onChange={handleAnonymous}
            />
          </div>
        </button>
      </div>

      <Bottom_cart_comp
        // price="100.00"
        // item="1"
        action="Proceed"
        onClick={handleOrder}
      />
    </div>
  );
};

export default MyComponent;
