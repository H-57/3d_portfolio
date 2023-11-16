"use client";
import { Tilt } from "react-tilt";

import { useEffect, useState } from "react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface props {
  image: StaticImageData;
  title: string;
  desc: string;
  tech: string[];
  url: string;
}

const ProjectCards = ({ image, title, desc, tech, url }: props) => {
  return (
    <>
      <Link href={`/projects/${url?.replaceAll(" ", "-")}`}>
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
            <h3 className="m-3 text-sm font-semibold">{desc.slice(0, 230)}...</h3>
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
    </>
  );
};


function Projects() {
  const [Data, setData] = useState<any[]>()
  useEffect(() => {
    fetch(`/api/projects`).then((res) => res.json()).then((data) => setData(data))


  }, [])
  let filterData = Data?.filter((elm, index) => {
    if (elm.category == "p") {
      return elm
    }
  })
  console.log(filterData,"filterData")
  const [activeItem, setActiveItem] = useState<string>("all");

  const items = [
    { id: 'all', text: 'All' },
    { id: 'personal', text: 'Personal' },
    { id: 'assignments', text: 'Assignments' },
  ];

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
        <section className="flex gap-5">


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
