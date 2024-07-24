import React, { useEffect, useState } from "react";
import { Qrdine_logo } from "../../../components/user";
import DisplayCard from "../utils/DisplayCard";

function Home_page({ children , restaurantInfo}) {
  const [item, setItem] = useState(restaurantInfo.status);
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

    setItem(restaurantInfo.status);

    updateMessage();

    // Optionally, you can set an interval to update the message every minute
    const intervalId = setInterval(updateMessage, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [restaurantInfo.status]);



  return (
    <div>
      <Qrdine_logo restaurantInfo={restaurantInfo} />
      <div>
        <div className=" text-3xl md:text-4xl pb-3  pt-3 sm:pt-4 text-orange-400 font-semibold text-center">
          {message}
        </div>
      </div>
      {!item && (
        <DisplayCard>
            Please scan the QR code first to access the main menu. thank you.
        </DisplayCard>
      )}

      <div className=" w-full justify-center flex px-4">
        {item && (
          <div className=" mt-[2%] mb-[5rem] w-[34rem] lg:w-[40rem]">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home_page;
