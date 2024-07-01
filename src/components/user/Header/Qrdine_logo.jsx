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
      <div>
      <div className=" h-[30vh] sm:h-[40vh] bg-no-repeat bg-cover bg-center px-3 sm:px-5 py-3 sm:py-4 flex-col bg-homeImage ">
        <div className=" w-full justify-center items-center flex">
          <div className=" w-[12rem] sm:w-[13rem] flex justify-center items-center">
            <img
              className=" h-full w-full"
              src="https://pindballuchi.com/wp-content/uploads/2024/02/Logo-1-removebg-preview.png"
              alt="logo"
            />
          </div>
        </div>
        <div className=" pt-[5rem] sm:pt-[9rem] flex justify-center items-center">
          <div className=" bg-[#ffffff1a] rounded-md w-[25rem] pt-2 px-3">
            <div className=" pb-4">
              <div className=" font-semibold text-[13px] sm:text-md text-white">Pind Balluchi</div>
              <div className=" text-sm text-gray-400">Noida</div>
            </div>
            <div className=" text-3xl md:text-4xl pb-3  pt-3 sm:pt-6 text-orange-400 font-semibold text-center">
              <div>{message}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Qrdine_logo;
