import React from "react";
import { Link, Outlet, Route, Router, Routes } from "react-router-dom";
import Home_page from "./pages/user/Home_page";
import Layout from "./Layout";
import Home_page_content from "./pages/user/Home_page_content";
import CartPage from "./pages/user/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home_page_content />} />
        <Route path="/cart_items" element={<CartPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
