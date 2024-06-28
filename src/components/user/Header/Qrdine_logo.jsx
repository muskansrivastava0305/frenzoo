import React, { useEffect, useState } from "react";

function Qrdine_logo() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const updateMessage = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 9 && currentHour < 12) {
        setMessage("Good Morning !");
      } else if (currentHour >= 12 && currentHour < 15) {
        setMessage("Good Afternoon !");
      } else {
        setMessage("Good Evening !");
      }
    };

    updateMessage();

    // Optionally, you can set an interval to update the message every minute
    const intervalId = setInterval(updateMessage, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className=" flex justify-center w-full px-3">
        <div className=" w-82">
          <img
            className=" w-full h-full"
            src="https://frenzoo.qrdine-in.com/assets/images/background/restaurant-bg.png"
            alt=""
          />
        </div>
      </div>
      <div className=" w-full flex justify-center">
        <div className=" bg-white  rounded-2xl  w-[18rem] sm:w-[23rem] md:w-[30rem] lg:w-[34rem] shadow-custom absolute top-[16%]">
          <div className=" py-2 mb-3 text-sm mx-4 border-dashed border-gray-200 border-b">
            <div className=" font-semibold ">Frenzoo</div>
            <div className=" text-gray-400 text-sm">Noida 63</div>
          </div>
          <div className=" text-3xl sm:text-4xl   font-bold  text-orange-400  text-center pb-5 pt-2">
            {message}
          </div>
        </div>
      </div>
    </>
  );
}

export default Qrdine_logo;
