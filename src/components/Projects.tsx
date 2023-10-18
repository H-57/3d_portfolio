"use client";
import { Tilt } from "react-tilt";
import { projects } from "./constant";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface props {
  image: StaticImageData;
  title: string;
  desc: string;
  tech: string[];
  url:string;
}

const ProjectCards = ({ image, title, desc, tech ,url}: props) => {
  return (
    <><Link href={url}>

   
      <Tilt className="shadow-[gray_0px_0px_100px_-50px] rounded-3xl md:w-[300px]  w-[220px]  p-[2px] bg-gradient-to-r from-blue-600 to-pink-700">
        <div className=" p-1 bg-[#151030] rounded-3xl ">
          <Image
            width={500}
            height={500}
            src={image}
            alt={title}
            className="rounded-md w-[90%] h-[60%] m-auto mt-3"
          />
          <h2 className=" mt-5 m-3 font-semibold text-2xl">{title}</h2>
          <h3 className="m-3 text-sm font-semibold">{desc}</h3>
          <span className="m-3 text-[1.2rem] text-blue-500  " >#{tech[0]}</span>
          <span className="m-1 text-[1.2rem] text-green-500 " >#{tech[1]}</span>
          <span className="m-1 text-[1.2rem] text-pink-500" >#{tech[2]}</span>
          
        </div>
      </Tilt>
      </Link>
    </>
  );
};

function Projects() {
  return (
    <section className='relative h-screen w-full bg-[url("../assets/herobg.png")] bg-no-repeat bg-center bg-cover mx-auto'>
      <div className="pt-20">
        {projects.map((elm, index) => (
          <ProjectCards
            key={index}
            image={elm.image}
            desc={elm.desc}
            title={elm.title}
            tech={elm.tech}
            url={elm.url}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
