"use client";
import { Tilt } from "react-tilt";

import { useEffect, useState } from "react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface props {
  image: StaticImageData;
  title: string;
  desc: string;
  tech: string[];
  url: string;
}
const items = [
  { id: 'All', text: 'All' },
  { id: 'Personal', text: 'Personal' },
  { id: 'Assignments', text: 'Assignments' },
];
const ProjectCards = ({ image, title, desc, tech, url }: props) => {
  return (
    <>
    <motion.div initial={{opacity:0,x:-50,y:-100 }} transition={{duration:0.5 }} whileInView={{opacity:1,x:0,y:0}} >
      <Link href={`/projects/${url?.replaceAll(" ", "-")}`}>
        <Tilt className="shadow-[gray_0px_0px_100px_-50px] rounded-3xl md:w-[300px]  w-[full]  p-[2px] bg-gradient-to-r from-blue-600 to-pink-700">
          <div className=" p-1 bg-[#151030] rounded-3xl ">
            <Image
              width={500}
              height={500}
              src={image}
              alt={title}
              className="rounded-md w-[90%] h-[60%] m-auto mt-3"
            />
            <h2 className=" mt-5 m-3 font-semibold text-2xl">{title}</h2>
            <h3 className="m-3 text-sm font-semibold text-clip h-auto">{desc.slice(0, 210)}...</h3>
            <span className="m-3 text-[1.2rem] text-blue-500 capitalize">
              #{tech[0]}
            </span>
            <span className="m-1 text-[1.2rem] text-green-500 capitalize">
              #{tech[1]}
            </span>
            <span className="m-1 text-[1.2rem] text-pink-500 capitalize">#{tech[2]}</span>
          </div>
        </Tilt>
      </Link>
      </motion.div>
    </>
  );
};


function Projects() {
  const [fetchData,setFetchData]=useState<any[]>()
  const [Data, setData] = useState<any[]>()
  const [activeItem, setActiveItem] = useState<string>("All");
  useEffect(() => {
    fetch(`/api/projects`).then((res) => res.json()).then((data) => {setFetchData(data); setData(data)})
    

  }, [])


  useEffect(() => {
   setData(filterData()) 
  },[activeItem])

  let filterData = () => {
    if(activeItem=="All"){
      return fetchData
    }
   const result= fetchData?.filter((elm, index) => {
      if (elm.category == activeItem ) {
        // console.log(elm);
        return elm
      }
    })
    return result
  }
  



  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);

  };

  return (
    <section className='relative h-screen w-full bg-[url("../assets/herobg.png")] bg-no-repeat bg-center bg-cover mx-auto'>
      <div className="pt-20">
        <h1 className=" capitalize text-center text-4xl font-extrabold">
          MY projects
        </h1>
        <div className="mt-5 mb-10 ">
          <ul className="flex gap-5 w-fit m-auto ">
            {items.map((item) => <li key={item.id}
              onClick={() => handleItemClick(item.id)} className={`text-xl font-semibold hover:text-violet-600 cursor-pointer ${activeItem === item.id ? 'text-violet-600' : ""}`}>{item.text}</li>)}

          </ul>
        </div>

        {/* project cards */}
        <section className="flex gap-5 m-8 flex-wrap justify-between">


          {Data?.map((elm, index) => (
            <ProjectCards
              key={index}
              image={elm.image}
              desc={elm.desc}
              title={elm.title}
              tech={elm.tech}
              url={elm.title}
            />
          ))}
        </section>
      </div>
    </section>
  );
}

export default Projects;
