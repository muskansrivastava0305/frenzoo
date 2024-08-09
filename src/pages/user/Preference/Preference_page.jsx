import React, { useState, useRef, useEffect } from "react";
import { Bottom_cart_comp } from "../../../components/user";
import { redirect, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addCustomerDetail,
  addOrderId,
  emptyCart,
} from "../../../Redux/Freatures/User/cartSlice";
import axios from "axios";

const MyComponent = () => {
  const [isInputDisable, setIsInputDisable] = useState(false);
  const [isCheckboxDisable, setIsCheckboxDisable] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [name, setName] = useState("");
  const [isAnonymousChecked, setIsAnonymousChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const checkboxRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const handleInputEvent = () => {
    setIsCheckboxDisable(true);
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z]*$/.test(value)) {
      setName(value);
      if (value || mobileNumber) {
        setIsCheckboxDisable(true);
      } else {
        setIsCheckboxDisable(false);
      }
      setNameError(false);
      setIsValid(true);
    } else {
      setNameError(true);
      setIsValid(false);
    }
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
      setPhoneError(false);
      setIsValid(true);
    } else {
      setPhoneError(true);
      setIsValid(false);
    }
  };

  const handleAnonymous = () => {
    setIsAnonymousChecked(!isAnonymousChecked);
    setIsInputDisable(!isAnonymousChecked);
  };

  const handleOrder = async () => {
    setLoading(true);
    if (checkboxRef.current.checked) {
      dispatch(addCustomerDetail({ name, phone: mobileNumber }));
      setIsValid(true);
    } else {
      if (name.length === 0) {
        setNameError(true);
      }
      if (mobileNumber.length !== 10) {
        setPhoneError(true);
      } else {
        dispatch(addCustomerDetail({ name, phone: mobileNumber }));
        setIsValid(true);
      }
    }

    try {
      if (isValid) {
        const response = await axios.post(
          "https://frenzoo.qrdine-in.com/api/v1/place_checkout_order",
          cart
        );
        setLoading(false);
        const data = response.data;
        if (cart.paymentMethod === "phonepe") {
          dispatch(emptyCart());
          dispatch(addOrderId(data));
          window.location.href = data.url;
          
        } else if(cart.paymentMethod === 'cash') {
          dispatch(emptyCart());
          dispatch(addOrderId(data));
          navigate("/place_order_successfully");
        }
      }
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
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
              onInput={handleInputEvent}
              disabled={isInputDisable}
              value={name}
              onChange={handleNameChange}
              className="px-5 py-3 w-full placeholder:text-sm sm:placeholder:text-lg border-gray-300 border rounded-md mt-2"
              placeholder="Enter your name"
              id="name"
            />
            {nameError && (
              <p className="text-sm text-red-500">Please enter your name</p>
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
              onInput={handleInputEvent}
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              className="px-5 py-3 placeholder:text-sm sm:placeholder:text-lg w-full border-gray-300 border rounded-md mt-2"
              placeholder="Enter your mobile number"
              id="mobileNumber"
            />
            {phoneError && (
              <p className="text-sm text-red-500">
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

      {/* {isValid && ( */}
      <Bottom_cart_comp
        loading={loading}
        action="Proceed"
        onClick={handleOrder}
      />
      {/* )} */}
    </div>
  );
};

export default MyComponent;
