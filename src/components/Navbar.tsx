"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
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
    { name: "tech", url: "/#tech" },
    { name: "About", url: "#about" },
    { name: "ContactUs", url: "/#contact" },
  ];
  const [toggel, setToggel] = useState<boolean>(false);

  return (
    <>
      <nav
        className={`fixed z-20 flex justify-between   text-white w-screen transition-all ease-in-out duration-1000 transform ${nav} ${
          scrollY > 20 ? "bg-[#050816]" : "bg-transparent"
        }`}
      >
        <div className="px-5 xl:px-12 py-6  w-full block float-right ">
          <Link className="text-3xl font-bold font-heading" href="#">
            {/* <img class="h-9" src="logo.png" alt="logo"> */}
            Logo Here.
          </Link>
          {/* Nav Links */}
          <ul
            className={`hidden float-right md:flex px-4 mx-auto font-semibold font-heading space-x-12 `}
          >
            {links.map((link) => (
              <li key={link.name}>
                <Link className="hover:text-gray-200 capitalize" href={link.url}>
                  {link.name}
                </Link>
              </li>
            ))}
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
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
