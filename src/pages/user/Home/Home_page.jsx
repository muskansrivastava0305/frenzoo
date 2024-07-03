import React, { useEffect, useState } from "react";
import { Qrdine_logo, Search_bar } from "../../../components/user";

function Home_page({ children }) {
  const [item, setItem] = useState(true);
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
    <div>
      <Qrdine_logo />
      <div>
        <div className=" text-3xl md:text-4xl pb-3  pt-3 sm:pt-4 text-orange-400 font-semibold text-center">
          {message}
        </div>
        {item && (
          <Search_bar/>
        )}
      </div>

      {!item && (
        <div className=" flex w-full justify-center">
          <div className=" py-8 px-11 bg-white shadow-custom text-xl w-[37rem] text-center mt-20 rounded-3xl">
            Please sacn the QR code first to access the main menu. thank you.
          </div>
        </div>
      )}

      <div className=" w-full justify-center flex px-4">
        {item && (
          <div className=" mt-[5%] mb-[5rem] w-[34rem] lg:w-[40rem]">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home_page;
