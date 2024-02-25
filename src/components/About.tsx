"use client";
import React from "react";
import { services } from "./constant";
import Image, { StaticImageData } from "next/image";
import { Tilt } from "react-tilt";
import {motion} from 'framer-motion';
import SectionWrapper from"./hoc/SectionWrapper"

interface card {
  title: String;
  icon: StaticImageData;
  index:number
}

const ServiceCards = ({ title, icon,index }: card) => {
  return (
    <Tilt  >
      <motion.div   
    initial={{opacity:0,x:-100}}
    transition={{duration:0.4,delay:0.5*index}}
    whileInView={{opacity:1,x:0}}
  
 
  className="shadow-[gray_0px_0px_100px_-50px] rounded-[24px] md:w-[250px]  w-full p-[2px] bg-gradient-to-r from-blue-600 to-pink-700" 
  >


    
      <div className="rounded-[24px]  bg-[#151030] sm:min-w-full min-h-[280px]  py-5 px-12 flex flex-col justify-center items-center">
        <Image
          className="w-16 h-16 "
          src={icon}
          alt="mobile"
          width={500}
          height={500}
        />
        <h3 className=" font-bold text-2xl mt-7 text-center">{title}</h3>
      </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <motion.div 
    initial={{opacity:0,y:400}}
    transition={{type:"spring",duration:1,delay:0.5}}
    whileInView={{opacity:1,y:0}} className=" m-5">
      <p className=" uppercase text-xl">Introduction</p>
      <h2 className=" font-extrabold text-6xl">Overview.</h2>
      <p className=" md:w-[47vw]  mt-7 text-xl">
        I&apos;m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I&apos;m a quick learner and collaborate closely with clients
        to create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let&apos;s work together to bring your ideas to
        life!
      </p>
      <div>
        <div className=" mt-20 flex w-full flex-wrap gap-10">
          {services.map((elm, index): any => {
            return (
              <ServiceCards key={index} index={index}title={elm.title} icon={elm.icon} />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(About,"about")
