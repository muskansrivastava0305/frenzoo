import React, { useContext } from "react";
import {
  Sidebarmenu,
} from "../../components";

function Dashboard({ children }) {


  return (
    <div className=" w-full h-screen flex">
      <Sidebarmenu />
      <div className={`  w-full  p-5`}>
        {children}
        </div>
    </div>
  );
}

export default Dashboard;
