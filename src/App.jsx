import React, { Suspense, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { isMobileOrTablet } from "./utils/deviceCheck";
import {
  Protected,
  OrderProtected,
  MobileOnlyRoute,
} from "./components/user/utils/Protected";
import Layout from "./Layout";
import Loader from "./components/Loader";
import { messaging } from "./firebase";
import { getToken, onMessage } from "firebase/messaging";
import Dashboard from "./pages/admin/Dashboard";

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

  async function requestPermission() {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      // generate token
      const token = await getToken(messaging, {
        vapidKey:
          "BJd4y7lEdcli-201XZcyVcp0Gppq58uK4IjF1HuSK5d-A7nEV6VVKazQMKXSOjcspr1CamzcTjtsVMc_jtzUrLs",
      });
      localStorage.setItem("token", token);
    } else if (permission === "denied") {
      console.log("you denieed");
    }
  }

  useEffect(() => {
    // Request permission to send notifications
    requestPermission();

    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
    });
  }, []);
  
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/admin"
          element={
            <Suspense fallback={<Loader />}>
              <Layout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Dashboard/>
            }
          />
          
        </Route>

          {/* mobile and web routes */}

          <Route
            path="/generate/invoice/:order_id/:branch_id"
            element={
              <Suspense fallback={<Loader />}>
                <Invoice />
              </Suspense>
            }
          />

          {/* Mobile protected routes */}
          <Route
            // index
            path="/"
            element={
              <MobileOnlyRoute isMobileOrTabletDevice={isMobileOrTabletDevice}>
                <Suspense fallback={<Loader />}>
                  <Protected>
                    <Home_page_content />
                  </Protected>
                </Suspense>
              </MobileOnlyRoute>
            }
          />
          <Route
            path="/cart_items"
            element={
              <MobileOnlyRoute isMobileOrTabletDevice={isMobileOrTabletDevice}>
                <Suspense fallback={<Loader />}>
                  <Protected>
                    <CartPage />
                  </Protected>
                </Suspense>
              </MobileOnlyRoute>
            }
          />
          <Route
            path="/preference"
            element={
              <MobileOnlyRoute isMobileOrTabletDevice={isMobileOrTabletDevice}>
                <Suspense fallback={<Loader />}>
                  <Protected>
                    <Preference_page />
                  </Protected>
                </Suspense>
              </MobileOnlyRoute>
            }
          />
          <Route
            path="/place_order_successfully"
            element={
              <MobileOnlyRoute isMobileOrTabletDevice={isMobileOrTabletDevice}>
                <Suspense fallback={<Loader />}>
                  <OrderProtected>
                    <Order_placed_page />
                  </OrderProtected>
                </Suspense>
              </MobileOnlyRoute>
            }
          />
          <Route
            path="/order_track"
            element={
              <MobileOnlyRoute isMobileOrTabletDevice={isMobileOrTabletDevice}>
                <Suspense fallback={<Loader />}>
                  <OrderProtected>
                    <Order_track_page />
                  </OrderProtected>
                </Suspense>
              </MobileOnlyRoute>
            }
          />
      </Routes>
    </Suspense>
  );
}

export default App;
