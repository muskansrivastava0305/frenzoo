import React, { useEffect, useState } from "react";
import { Link, Outlet, Route, Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home_page_content from "./pages/user/Home/Home_page_content";
import CartPage from "./pages/user/Cart/CartPage";
import Preference_page from "./pages/user/Preference/Preference_page";
import Order_placed_page from "./pages/user/order/Order_placed_page";
import Order_track_page from "./pages/user/order/Order_track_page";
import { isMobileOrTablet } from './utils/deviceCheck';
import axios from "axios";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home_page_content />} />
        <Route path="/cart_items" element={<CartPage/>}/>
        <Route path="/preference" element={<Preference_page/>}/>
        <Route path="/place_order_successfully" element={<Order_placed_page/>} />
        <Route path="/order_track" element={<Order_track_page/>}/>
      </Route>
    </Routes>
  );
}

export default App;

  
