import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function Protected({ children }) {
  const location = useLocation();
  const { products , order_id, table, branch_id } = useSelector((state) => state.cart);

  console.log(products)
  const tableAndBranch = `/?table=${table}&branch_id=${branch_id}`;
  const restrictedPaths = ["/cart_items", "/preference", "/place_order_successfully", "/order_track"];

  if (order_id !== null) {
    return <Navigate to="/order_track">{children}</Navigate>;
  }
   if (products?.length <= 0 && restrictedPaths.includes(location.pathname)) {
    return <Navigate to={tableAndBranch} />;
  }

    return <>{children}</>;

  
}

export default Protected;
