"use client"
import React from 'react'
import{services}from "./constant"
import Image, { StaticImageData } from 'next/image'
import{Tilt}from 'react-tilt'
import { mobile } from '@/assets'
import { jsx } from '@emotion/react'


interface card{
  title:String,
  icon:StaticImageData
}
const ServiceCards=({title,icon}:card)=>{
  return(
    <Tilt className="  rounded-[24px] md:w-[250px]  w-full p-[2px] bg-gradient-to-r from-blue-600 to-pink-700 ">
      <div className='rounded-[24px]  bg-[#151030] min-h-[280px]  py-5 px-12 flex flex-col justify-center items-center'>
      <Image className='w-16 h-16 ' src={icon} alt="mobile" width={500} height={500}/>
      <h3>{title}</h3>
      </div>
     
    </Tilt>
    
  
  )
 
}


const About = () => {
  return (
    <div id="about" className=' m-5'>
<p className=' uppercase'>Introduction</p>
<h2 className=' font-extrabold text-5xl'>Overview.</h2>
<p className='w-[47vw] mt-7'>I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>
<div>
<div className=" flex w-full flex-wrap gap-5">

{
 services.map((elm,index):any=>{
  return <ServiceCards key={index} title={elm.title} icon={elm.icon} />
 })
}

</div>
</div>
    </div>
  )
}

export default About