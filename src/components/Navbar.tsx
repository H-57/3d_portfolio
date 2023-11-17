"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import { link } from "fs";

const Navbar = () => {
  const { user } = useUser();
  const [activeItem, setActiveItem] = useState<string>("");
  const [nav, setNav] = useState<String>("");
  const [scrollY, setscrollY] = useState<number>(10);
  const handleScroll = () => {
    if (window.scrollY > 10) {
      if (window.scrollY > scrollY) {
        setNav("hidden");
        // console.log("hide");
      } else {
        setNav("flex");
        // console.log("show");
      }
    } else {
      setNav("");
    }

    setscrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const links = [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "About", url: "/#about" },
    { name: "tech", url: "/#tech" },
    { name: "ContactUs", url: "/#contact" },
  ];
  const [toggel, setToggel] = useState<boolean>(false);

  return (
    <>
      <nav
        className={` filter  fixed z-20 flex justify-between   text-white w-screen transition-all ease-in-out duration-1000 transform ${nav} ${
          scrollY > 20 ? "bg-[#050816]" : "bg-transparent"
        }`}
      >
        <div className="px-5 xl:px-12 py-6  w-full block float-right ">
          <Link className="text-3xl font-bold font-heading " href="/">
            <Image
              className="w-[4rem] h-auto absolute"
              height={400}
              width={40}
              src="/logo.png"
              alt="logo"
            />
          </Link>
          {/* Nav Links */}
          <ul
            className={`hidden float-right md:flex px-4 mx-auto font-semibold font-heading space-x-12 `}
          >
            {links.map((link) => (
              <li key={link.name}>
                <Link
                onClick={()=>{setActiveItem(link.name)}}
                  className={`hover:text-violet-800 capitalize ${activeItem===link.name?"text-violet-800":""}`}
                  href={link.url}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <a href="https://res.cloudinary.com/dahc9q7hs/image/upload/fl_attachment/v1/resume/fullstack"  className=" bg-white text-violet-700 font-bold capitalize rounded-xl h-8 hover:bg-violet-700 hover:text-white w-[80%]">Resume</a>
            {user && <UserButton />}
            {user && <Link href={"/admin"}>admin</Link>}
            
          </ul>
          <div className=" block  float-right md:hidden">
            <Bars3BottomLeftIcon
              onClick={() => setToggel(!toggel)}
              className={`w-8 h-8 ${toggel ? "hidden" : "block"}`}
            />
            <XMarkIcon
              onClick={() => setToggel(!toggel)}
              className={`w-8 h-8 ${!toggel ? "hidden" : "block"}`}
            />
          </div>
          <ul
            className={` absolute right-0 bg-gradient-to-l from-black  to-gray-800 rounded-3xl cursor-pointer w-[40vw] m-auto ${
              toggel ? "" : "hidden"
            }   `}
          >
            {links.map((link) => (
              <li
                className=" w-fit m-auto text-stone-50"
                onClick={() => setToggel(!toggel)}
                key={link.name}
              >
                <Link
                  className="hover:text-gray-200 hover:bg-slate-600 font-serif font-bold text-lg"
                  href={link.url}
                >
                  {link.name}
                </Link>
              </li>
           
           ))}
           <a href="https://res.cloudinary.com/dahc9q7hs/image/upload/fl_attachment/v1/resume/fullstack"  className=" bg-white text-violet-700 font-bold capitalize rounded-xl h-8 hover:bg-violet-700 hover:text-white w-[80%]">Resume</a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
