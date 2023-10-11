"use client";

import React from "react";
import SectionWrapper from "./hoc/SectionWrapper";
import Earth from "./canvas/Earth";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse ">
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="  md:h-[80vh]  md:w-[60%] sm:h-[40vh] m-auto"
        >
          <Earth />
        </motion.div>

        <motion.div
          initial={{ x: -400, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{type:"spring", duration: 1, delay: 0.5 }}
          className="bg-[#100d25]  px-8 rounded-xl md:w-[40%] sm:w-full m-10"
        >
          <p className="pt-5 capitalize">get in touch</p>
          <h3 className="text-6xl font-extrabold ">Contact</h3>
          <form className="w-[100%] mt-10" action="">
            <label className="" htmlFor="name">
              Your Name
            </label>
            <input
              className="outline-none bg-[#151030] block w-full h-10 rounded-md mt-5 mb-5"
              name="name"
              type="text"
            />
            <label htmlFor="email">Your Email</label>
            <input
              className="outline-none bg-[#151030] block w-full h-10 rounded-md mt-3 mb-5"
              name="email"
              type="email"
            />
            <label htmlFor="des">Your Mesage</label>
            <textarea
              className="outline-none bg-[#151030] block w-full  rounded-md mt-5 "
              rows={7}
              name="des"
            />
            <button className="bg-[#151030] text-xl font-semibold p-4 my-5 min-w-[100px] rounded-lg hover:bg-[#17113c]">
              Send
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
