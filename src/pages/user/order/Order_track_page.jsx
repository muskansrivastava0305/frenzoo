import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { emptyCart } from "../../../Redux/Freatures/User/cartSlice";
import toast from "react-hot-toast";

const Order_track_page = React.memo(()=> {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const navigate = useNavigate();

  async function getOrderStatus(initialLoad = false) {
    try {
      const response = await axios.get(
        `https://frenzoo.qrdine-in.com/api/v1/order_status?id=${cart?.order_id}`
      );
      const data = response.data;

     if (initialLoad) {
      toast.success(`Order ${data?.order_status}`);
    }
      
      if (data?.order_status === "completed") {
        toast.success("Invoice gnerated successfully")
        navigate(`/generate/invoice/${data?.order_id}/${data?.branch_id}`);
        // dispatch(emptyCart());  // change in useeffect hoosk in invoice.jsx page . 
      }else if (data?.order_status === 'Cancelled'){
       setTimeout(() => {
        dispatch(emptyCart());  // change in useeffect hoosk in invoice.jsx page . 
       }, 5000);

      }
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("rerender")
    let statusInterval = setInterval(() => {
      getOrderStatus();
    }, 5000);

    getOrderStatus(true);

    return () => clearInterval(statusInterval); // Clear interval on component unmount
  }, [data?.order_status]); // Add data.order_status as dependency

  async function handlePayment() {
    const response = await axios.get(
      `https://frenzoo.qrdine-in.com/api/v1/phonePe/${cart?.order_id}`
    );
    window.location.href = response.data;
  }

  return (
    <>
      <div className=" text-black text-center font-semibold text-2xl pt-2">
        Order Tracking
      </div>
      <div className=" mt-8 flex justify-center">
        <div className=" px-6 pb-8 w-full md:w-1/2">
          <div className=" text-center text-lg pb-7 pt-6">
            Order ID: {cart?.order_id}
          </div>
          {/* Pending */}
          <div className="flex justify-between ">
            <div>
              <div
                className={` ${
                  data?.order_status === "pending" && "text-white"
                } flex justify-center items-center gap-3`}
              >
                <i
                  className={` ${
                    data?.order_status === "pending"
                      ? "bg-orange-500  border-orange-500"
                      : "bg-gray-400  border-gray-400 "
                  } text-lg border text-white rounded-full text-whiteborder fa-regular fa-circle-check`}
                ></i>
                <div
                  className={`${
                    data?.order_status === "pending"
                      ? " text-orange-500 "
                      : "text-gray-600"
                  } text-[15px]`}
                >
                  Pending
                </div>
              </div>
              <div
                className={` ${
                  data?.order_status === "pending"
                    ? "border-l-orange-500"
                    : "bg-l-gray-400  border-l-gray-400 "
                } my-1 ml-2 border-l-2  border-dashed h-10`}
              ></div>
            </div>
            {data?.order_status === "pending" && (
              <div
                className={`${
                  data?.order_status === "pending"
                    ? " text-orange-500 "
                    : "text-gray-600"
                } text-sm`}
              >
                {moment(data?.updated_at).format("LT")}
              </div>
            )}{" "}
          </div>
          {/* confirmed */}
          <div className="flex justify-between ">
            <div>
              <div
                className={` ${
                  data?.order_status === "confirmed" && "text-white"
                } flex justify-center items-center gap-3`}
              >
                <i
                  className={` ${
                    data?.order_status === "confirmed"
                      ? "bg-orange-500  border-orange-500"
                      : "bg-gray-400  border-gray-400 "
                  } text-lg border text-white rounded-full text-whiteborder fa-regular fa-circle-check`}
                ></i>
                <div
                  className={`${
                    data?.order_status === "confirmed"
                      ? " text-orange-500 "
                      : "text-gray-600"
                  } text-[15px]`}
                >
                  confirmed
                </div>
              </div>
              <div
                className={` ${
                  data?.order_status === "confirmed"
                    ? "border-l-orange-500"
                    : "bg-l-gray-400  border-l-gray-400 "
                } my-1 ml-2 border-l-2  border-dashed h-10`}
              ></div>
            </div>
            {data?.order_status === "confirmed" && (
              <div
                className={`${
                  data?.order_status === "confirmed"
                    ? " text-orange-500 "
                    : "text-gray-600"
                } text-sm`}
              >
                {moment(data?.updated_at).format("LT")}
              </div>
            )}
          </div>
          {/* cooking */}
          <div className="flex justify-between ">
            <div>
              <div
                className={` ${
                  data?.order_status === "cooking" && "text-white"
                } flex justify-center items-center gap-3`}
              >
                <i
                  className={` ${
                    data?.order_status === "cooking"
                      ? "bg-orange-500  border-orange-500"
                      : "bg-gray-400  border-gray-400 "
                  } text-lg border text-white rounded-full text-whiteborder fa-regular fa-circle-check`}
                ></i>
                <div
                  className={`${
                    data?.order_status === "cooking"
                      ? " text-orange-500 "
                      : "text-gray-600"
                  } text-[15px]`}
                >
                  cooking
                </div>
              </div>
              <div
                className={` ${
                  data?.order_status === "cooking"
                    ? "border-l-orange-500"
                    : "bg-l-gray-400  border-l-gray-400 "
                } my-1 ml-2 border-l-2  border-dashed h-10`}
              ></div>
            </div>
            {data?.order_status === "cooking" && (
              <div
                className={`${
                  data?.order_status === "cooking"
                    ? " text-orange-500 "
                    : "text-gray-600"
                } text-sm`}
              >
                {moment(data?.updated_at).format("LT")}
              </div>
            )}
          </div>
          {/* ready to serve */}
          <div className="flex justify-between ">
            <div>
              <div
                className={` ${
                  data?.order_status === "Ready To serve" && "text-white"
                } flex justify-center items-center gap-3`}
              >
                <i
                  className={` ${
                    data?.order_status === "Ready To serve"
                      ? "bg-orange-500  border-orange-500"
                      : "bg-gray-400  border-gray-400 "
                  } text-lg border text-white rounded-full text-whiteborder fa-regular fa-circle-check`}
                ></i>
                <div
                  className={`${
                    data?.order_status === "Ready To serve"
                      ? " text-orange-500 "
                      : "text-gray-600"
                  } text-[15px]`}
                >
                  Ready To serve
                </div>
              </div>
              <div
                className={` ${
                  data?.order_status === "Ready To serve"
                    ? "border-l-orange-500"
                    : "bg-l-gray-400  border-l-gray-400 "
                } my-1 ml-2 border-l-2  border-dashed h-10`}
              ></div>
            </div>
            {data?.order_status === "Ready To serve" && (
              <div
                className={`${
                  data?.order_status === "Ready To serve"
                    ? " text-orange-500 "
                    : "text-gray-600"
                } text-sm`}
              >
                {moment(data?.updated_at).format("LT")}
              </div>
            )}
          </div>
          {/* served */}
          <div className="flex justify-between ">
            <div>
              <div
                className={` ${
                  data?.order_status === "served" && "text-white"
                } flex justify-center items-center gap-3`}
              >
                <i
                  className={` ${
                    data?.order_status === "served"
                      ? "bg-orange-500  border-orange-500"
                      : "bg-gray-400  border-gray-400 "
                  } text-lg border text-white rounded-full text-whiteborder fa-regular fa-circle-check`}
                ></i>
                <div
                  className={`${
                    data?.order_status === "served"
                      ? " text-orange-500 "
                      : "text-gray-600"
                  } text-[15px]`}
                >
                  served
                </div>
              </div>
              { data?.order_status === "Cancelled" && ( <div
                className={` ${
                  data?.order_status === "Ready To serve"
                    ? "border-l-orange-500"
                    : "bg-l-gray-400  border-l-gray-400 "
                } my-1 ml-2 border-l-2  border-dashed h-10`}
              ></div>)}
            </div>
            
            {data?.order_status === "served" && (
              <div
                className={`${
                  data?.order_status === "Ready To serve"
                    ? " text-orange-500 "
                    : "text-gray-600"
                } text-sm`}
              >
                {moment(data?.updated_at).format("LT")}
              </div>
            )}
          </div>
          {/* Cancelled */}
          {
            data?.order_status === "Cancelled" && (
              <div className="flex justify-between ">
                <div>
                  <div
                    className={` ${
                      data?.order_status === "Cancelled" && "text-white"
                    } flex justify-center items-center gap-3`}
                  >
                    <i
                      className={` ${
                        data?.order_status === "Cancelled"
                          ? "bg-orange-500  border-orange-500"
                          : "bg-gray-400  border-gray-400 "
                      } text-lg border text-white rounded-full text-whiteborder fa-regular fa-circle-check`}
                    ></i>
                    <div
                      className={`${
                        data?.order_status === "Cancelled"
                          ? " text-orange-500 "
                          : "text-gray-600"
                      } text-[15px]`}
                    >
                      Cancelled
                    </div>
                  </div>
                </div>
                
                {data?.order_status === "Cancelled" && (
                  <div
                    className={`${
                      data?.order_status === "Cancelled"
                        ? " text-orange-500 "
                        : "text-gray-600"
                    } text-sm`}
                  >
                    {moment(data?.updated_at).format("LT")}
                  </div>
                )}
              </div>
            )
          }
          <div className=" border border-dashed my-8"></div>
          {data?.payment_status !== "paid" && (
            <div className=" gap-5 flex">
              <button
                onClick={handlePayment}
                className=" bg-green-700 cursor-pointer text-sm sm:text-md w-1/2 sm:w-44 flex justify-center items-center rounded-md text-white px-4 py-2"
              >
                <div>Pay Online</div>
              </button>
              <div className=" bg-yellow-400 w-1/2 sm:w-96 flex justify-center items-center rounded-md text-white px-4 py-2">
                <Link>
                  Cash{" "}
                  <i className=" rounded-full fa-regular fa-circle-check"></i>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
})

export default Order_track_page;
