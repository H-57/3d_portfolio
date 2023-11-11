"use client";
import { useNavContext } from "@/context/sidebar/SidebarContext";
import Link from "next/link";
import React from "react";
import { useState,  } from "react";

const list: String[] = ["Home", "Experience", "Projects"];
function Sidebar() {
  const {nav,setNav}:any=useNavContext()
 
  return (
    <>
      <div className=" col-span-1 border bg-[#100d25]">
        <h2 className="text-xl text-white font-bold w-fit mx-auto ">
          Dashboard
        </h2>
        <ul className="mx-auto w-[90%] mt-5  rounded-lg h-[80%]">
          {list.map((elm, index) => (
            
      
            <li
            key={index}
            onClick={() => setNav(elm)}
              className={` rounded-xl text-center hover:text-violet-600 mt-5 w-[80%] mx-auto hover:bg-purple-300 ${
                nav === elm ? "bg-purple-500" : ""
              }`}
            >
              {elm}
            </li>
                  
           
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
