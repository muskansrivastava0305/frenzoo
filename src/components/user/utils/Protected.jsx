import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function Protected({ children }) {
  const location = useLocation();
  const { products , order_id, table, branch_id } = useSelector((state) => state.cart);

  const tableAndBranch = `/?table=${table}&branch_id=${branch_id}`;
  const restrictedPaths = ["/cart_items", "/preference", "/order_track"];

  if (order_id) {
    return <Navigate to={`/order_track${tableAndBranch}`}>{children}</Navigate>;
  }
  if (products?.length <= 0 && restrictedPaths.includes(location.pathname)) {
    return <Navigate to={tableAndBranch} />;
  }
  return <>{children}</>;

  
}

function OrderProtected({children}){
  const { products , order_id, table, branch_id } = useSelector((state) => state.cart);
  const tableAndBranch = `/?table=${table}&branch_id=${branch_id}`;

  if(!order_id){
    if(!order_id && !branch_id){
      return <Navigate to="/">{children}</Navigate>;
    }else{
      return <Navigate to={tableAndBranch}>{children}</Navigate>;
    }
  }else{
   return <>{children}</>
  }
}


const MobileOnlyRoute = ({ isMobileOrTabletDevice, children }) => {
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

  return children;
}

export {
  Protected,
  OrderProtected,
  MobileOnlyRoute

};
