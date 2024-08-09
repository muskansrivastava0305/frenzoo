import React, { Suspense, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { isMobileOrTablet } from "./utils/deviceCheck";
import { Protected, OrderProtected } from "./components/user/utils/Protected";
import Layout from "./Layout";
import Loader from "./components/Loader";
// import Home_page_content from "./pages/user/Home/Home_page_content";
// import CartPage from "./pages/user/Cart/CartPage";
// import Preference_page from "./pages/user/Preference/Preference_page";
// import Order_placed_page from "./pages/user/order/Order_placed_page";
// import Order_track_page from "./pages/user/order/Order_track_page";
// import Invoice from "./pages/user/Invoice/Invoice";
const Home_page_content = React.lazy(() =>
  import("./pages/user/Home/Home_page_content")
);
const CartPage = React.lazy(() => import("./pages/user/Cart/CartPage"));
const Preference_page = React.lazy(() =>
  import("./pages/user/Preference/Preference_page")
);
const Order_placed_page = React.lazy(() =>
  import("./pages/user/order/Order_placed_page")
);
const Order_track_page = React.lazy(() =>
  import("./pages/user/order/Order_track_page")
);
const Invoice = React.lazy(() => import("./pages/user/Invoice/Invoice"));

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
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Layout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <Protected>
                  <Home_page_content />
                </Protected>
              </Suspense>
            }
          />
          <Route
            path="/cart_items"
            element={
              <Suspense fallback={<Loader />}>
                <Protected>
                  <CartPage />
                </Protected>
              </Suspense>
            }
          />
          <Route
            path="/preference"
            element={
              <Suspense fallback={<Loader />}>
                <Protected>
                  <Preference_page />
                </Protected>
              </Suspense>
            }
          />
          <Route
            path="/place_order_successfully"
            element={
              <Suspense fallback={<Loader />}>
                <OrderProtected>
                  <Order_placed_page />
                </OrderProtected>
              </Suspense>
            }
          />
          <Route
            path="/order_track"
            element={
              <Suspense fallback={<Loader />}>
                <OrderProtected>
                  <Order_track_page />
                </OrderProtected>
              </Suspense>
            }
          />
          <Route
            path="/generate/invoice/:order_id/:branch_id"
            element={
              <Suspense fallback={<Loader />}>
                <Invoice />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
