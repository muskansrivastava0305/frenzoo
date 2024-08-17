import { myContext } from "@/Context/Context";
import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebarmenu() {
  const sidebarRef = useRef(null);
  const { isOpen, setIsOpen} = useContext(myContext)
  
 
  function handleNavbar() {
    setIsOpen(!isOpen);
  }

  function closeNavbar() {
    setIsOpen(false);
  }

    // for mobile devices ----
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          sidebarRef.current &&
          !sidebarRef.current.contains(event.target)
        ) {
          setIsOpen(false);
        }
      }
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [sidebarRef]);

    
  return (
  <>
     {/* web sidebar  */}
    <div
      onMouseEnter={handleNavbar}
      onMouseLeave={closeNavbar}
      className={`${
        isOpen ? "md:w-96" : "md:w-20"
      } transition-all duration-300 bg-white w-0 md:visible invisible h-auto md:px-3 py-4 border-r border-r-gray-300 shadow-sm shadow-gray-800`}>      
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
      {/* mobile sidebar */}
    <div
      ref={sidebarRef}
      className={`${
        isOpen ? "w-64 visible" : "w-0 invisible"
      } transition-all duration-300 md:hidden md:invisible overflow-hidden bg-white fixed h-screen px-3 py-4 border-r border-r-gray-300 shadow-sm shadow-gray-800`}>      
      <div className=" w-full">
        <div className=" flex justify-center">
            <input
              className=" p-2  w-full border border-orange-500  rounded-md"
              type="text"
              placeholder="Search menu"
            />
            
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
                  <div
                  className= ' transition-all duration-300 ease-ease text-black'
                >
                  POS
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default Sidebarmenu
