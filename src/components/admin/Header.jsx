import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" fixed flex justify-between items-center bg-[#ffe98a] w-full px-6 sm:px-8 md:px-10  lg:px-14 py-2">
      <div>
        QRDIne-In
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className=" focus-within:invisible flex gap-4  ">
            <div className=" flex flex-col justify-end items-end">
              <div className=" font-semibold text-base">Frenzoo cafe</div>
              <div className=" text-gray-500 font-semibold text-sm">Admin</div>
            </div>
            <div className=" rounded-full w-12 h-12 p-4 flex justify-center items-center bg-black">
              img
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="  py-4 bg-white min-w-72 rounded-xl mt-2 mx-4">
           <Link>
           <DropdownMenuLabel className="px-5 cursor-pointer  flex flex-row-reverse items-center justify-end gap-4 ">
              <div className=" flex flex-col">
                <div className=" font-semibold text-base">Frenzoo cafe</div>
                <div className=" text-gray-500">admin@admin.com</div>
              </div>
              <div className=" rounded-full w-12 h-12 p-4 flex justify-center items-center bg-black">
                img
              </div>
            </DropdownMenuLabel>
            </Link>
            <DropdownMenuSeparator />
            <Link>
            <DropdownMenuItem className=" w-full cursor-pointer">
                <div className="px-5 text-gray-700   text-base py-3 w-full rounded-xl hover:bg-gray-200">
                Settings
                </div>
            </DropdownMenuItem>
            </Link>
            <Link>
            <DropdownMenuItem className=" w-full cursor-pointer">
                <div className="px-5  text-gray-700  text-base  w-full py-3  rounded-xl hover:bg-gray-200">
                Sign out
                </div>
            </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Header;
