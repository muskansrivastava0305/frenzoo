import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home_page_content from "./pages/user/Home/Home_page_content";
import CartPage from "./pages/user/Cart/CartPage";
import Preference_page from "./pages/user/Preference/Preference_page";
import Order_placed_page from "./pages/user/order/Order_placed_page";
import Order_track_page from "./pages/user/order/Order_track_page";
import { isMobileOrTablet } from "./utils/deviceCheck";
import Protected from "./components/user/utils/Protected";

function App() {
  const [isMobileOrTabletDevice, setIsMobileOrTabletDevice] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobileOrTabletDevice(isMobileOrTablet());
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, [isMobileOrTablet]);

  if (!isMobileOrTabletDevice) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-red-500">
          Website not supported on this device
        </h1>
        <p className="text-gray-700">
          Please access this website on a mobile or tablet device.
        </p>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home_page_content />} />
          <Route path="/cart_items" element={<Protected><CartPage /></Protected>} />
          <Route path="/preference" element={<Protected><Preference_page /></Protected>} />
          <Route path="/place_order_successfully" element={<Protected><Order_placed_page /></Protected>}/>
          <Route path="/order_track" element={<Protected><Order_track_page /></Protected>} />
      </Route>
    </Routes>
  );
}

export default App;
