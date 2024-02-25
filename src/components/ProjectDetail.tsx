"use client"

import { githublogo, linkedin } from "@/assets";

import Image from "next/image";
import { useEffect, useState } from "react";

interface dataProps{
  title:string
  image:string
  desc:string
  github:string
  live:string
  tech:string[]
  points:string[]


}


function ProjectDetail({name}:{name:string}) {
  const [Data, setData] = useState<dataProps>()
  useEffect(() => {
   fetch(`/api/projects/${name.replaceAll("-"," ")}`).then((res)=>res.json()).then((data)=>setData(data))
  
    
  }, [])
  
  return (
    <>
      <div id="main" className="md:mx-10   mt-5 mb-5 rounded-xl bg-[#2e0679] md:p-10">
        <div className=" bg-[#a266fc] rounded-md">
          <h1 className=" capitalize md:ml-5 p-2 sm:text-center text-4xl font-bold text-white">
          {Data?.title}
          </h1>
        </div>

        <div className="flex md:flex-row-reverse h-auto md:m-3 justify-center m-2 gap-2 flex-col ">
          <div id="image" className=" md:w-[60%] md:h-[500px] w-full h-auto">
            <Image
              height={500}
              width={500}
              src={Data?.image!}
              alt="image"
              className="h-full w-full rounded-md"
            />
          </div>
          <div id="details" className=" md:w-[40%] md:h-[500px] bg-white rounded-md md:mr-5">
<section>
  <h2 className="text-3xl font-bold text-violet-700">Key Features</h2>
  <h3 className="font-semibold text-violet-900 mt-3">{Data?.desc}</h3>
  <ul className="text-blue-600 flex flex-col gap-5 mt-5 list-disc px-5">
 {Data?.points?.map((elm,index)=> <li key={index} >{elm}</li>)}
  </ul>
</section>

          </div>
        </div>

        <div id="footer" className=" md:grid md:grid-cols-9  bg-[#401599] md:h-[200px] flex flex-col-reverse gap-5 p-3">
          <div className="col-span-2  flex  items-center justify-around ">
            <a
              href="https://www.linkedin.com/in/tarun-kumar-645649213/"
              className="md:w-[40%] md:h-[40%] w-[30%] h-[30%] cursor-pointer"
              target="_blank"
            >
              <Image className="hover:scale-125 transition-all" height={400} width={400} src={linkedin} alt="linkedin" />
            </a>
            <a
              href="https://github.com/H-57"
              className="md:w-[40%] md:h-[40%]  w-[30%] h-[30%] cursor-pointer"
              target="_blank"
            >
              <Image
              className="hover:scale-125 transition-all"
                height={400}
                width={400}
                src={githublogo}
                alt="githublogo"
              />
            </a>
          </div>
          <div className="  col-span-4 flex flex-col gap-y-2 items-center justify-center border-4 border-transparent border-x-[#2e0679]">
            <a href={Data?.github} target="_blank"  className="flex justify-center items-center p-2 bg-white text-violet-700 font-bold capitalize rounded-xl hover:bg-violet-700 hover:text-white w-[80%]">
          
              <span>github</span>
              <img src="/github.svg" alt="logo" className="w-fit ml-1" />
            </a>
           

            <a href={Data?.live} target="_blank" className="flex justify-center items-center p-2 bg-white text-violet-700 font-bold capitalize rounded-xl hover:bg-violet-700 hover:text-white w-[80%]">
              <span>liveurl</span>
              <img src="/url.gif" alt="logo" className="w-fit h-8 ml-1" />
            </a>
          </div>
          <div className="  col-span-3  ">
            <h4 className="font-semibold ml-5 text-xl">Techstack Used</h4>
            <div className=" bg-[#a266fc] mx-5 w-[90%] h-[80%] rounded-xl ">
              <ul className="text-xl font-semibold flex flex-wrap text-white   capitalize  pt-5  ">
                {Data?.tech.map((elm,index)=> <li key={index} className="w-[40%] ml-3 ">{elm}</li>)}
               
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetail;
