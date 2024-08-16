import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navitems = [
    {
      label: "Dashboard",
      slug: "/admin/dashboard",
      icon: <i class="fa-solid fa-house"></i>,
    },
    {
      label: "Analytics",
      slug: "/admin/analytics",
      icon: <i class="fa-solid fa-chart-simple"></i>,
    },
  ];
  function handleNavbar() {
    setIsOpen(!isOpen);
  }

  function closeNavbar() {
    setIsOpen(false);
  }
  return (
    <div
      onMouseEnter={handleNavbar}
      onMouseLeave={closeNavbar}
      className={`${
        isOpen ? "md:w-96" : "md:w-20"
      } transition-all duration-300 bg-white md:visible invisible w-0 h-screen md:px-3 py-4 border-r border-r-gray-300 shadow-sm shadow-gray-800`}>      
      <div className=" w-full">
        <div className=" flex justify-center">
          {!isOpen && <i className=" fa-solid fa-magnifying-glass"></i>}
          {isOpen && (
            <input
              className=" p-2  w-full border border-orange-500  rounded-md"
              type="text"
              placeholder="Search menu"
            />
          )}
        </div>
        <div className=" my-5">
          <ul className=" flex flex-col gap-2">
            <li>
              <div className=" flex gap-3 py-3 px-4 items-center hover:bg-[#ff67671a] rounded-md">
                <div className=" w-5 h-5">
                  <img
                    className=" h-full w-full"
                    src="https://img.icons8.com/ios-filled/50/pos-terminal--v1.png"
                    alt=""
                  />
                </div>
                {isOpen && (
                  <div
                  className={` ${isOpen ? 'w-fit' : ' w-0 invisible'}pl-8 transition-all duration-300 ease-ease text-black `}
                >
                  POS
                </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
