"use client";

import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import SectionWrapper from "./hoc/SectionWrapper";
import Earth from "./canvas/Earth";
import StarsCanvas from "./canvas/Stars";
import { motion,useInView } from "framer-motion";
const Contact = () => {
  const { register, handleSubmit ,reset} = useForm();

  const ref = useRef(null)
  const isInView = useInView(ref)
  // form submit function
  async function formSubmit(data:any){

    const result=await(await fetch("/api/email",{
      method:"post",
      body:JSON.stringify(data)
  })).json()
  
  console.log(result.success)
  if(result.success=="true"){
    toast.success(result.message)
    reset()
  }
  else{
    toast.error(result.message)
  }
  }

  return (
    <>
      <div ref={ref} className="flex flex-col md:flex-row-reverse relative">
        <motion.div
         
          className=" h-[40vh] md:h-[80vh]  md:w-[60%]   m-auto"
        >
         {isInView&& <Earth />}
        </motion.div>

        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{type:"spring", duration: 1, delay: 0.5 }}
          className="w-full bg-[#100d25]  px-8 rounded-xl md:w-[40%]  md:m-10"
        >
          <p className="pt-5 capitalize">get in touch</p>
          <h3 className=" text-3xl md:text-6xl font-extrabold ">Contact</h3>
          <form className="w-[100%] mt-10" onSubmit={handleSubmit(formSubmit)}>
            <label className="" htmlFor="name">
              Your Name
            </label>
            <input
              className="outline-none bg-[#151030] block w-full h-10 rounded-md mt-5 mb-5"
              {...register("name")}
              type="text"
              required
            />
            <label htmlFor="email">Your Email</label>
            <input
              className="outline-none bg-[#151030] block w-full h-10 rounded-md mt-3 mb-5"
            {...register("email")}
              type="email"
            />
            <label htmlFor="des">Your Mesage</label>
            <textarea
              className="outline-none bg-[#151030] block w-full  rounded-md mt-5 "
              rows={7}
              required
              {...register("message")}
            />
            <button type="submit" className="bg-[#151030] text-xl font-semibold p-4 my-5 min-w-[100px] rounded-lg hover:bg-[#17113c]">
              Send
            </button>
          </form>
        </motion.div>
        <StarsCanvas />
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
