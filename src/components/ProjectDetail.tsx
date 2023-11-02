import { carrent, githublogo, linkedin } from "@/assets";

import Image from "next/image";

function ProjectDetail() {
  return (
    <>
      <div id="main" className="mx-10 mt-5 mb-5 rounded-xl bg-[#2e0679] p-10">
        <div className="bg-[#a266fc] rounded-md">
          <h1 className=" capitalize ml-5 p-2 text-4xl font-bold text-white">
            title
          </h1>
        </div>

        <div className="flex flex-row-reverse   h-auto">
          <div id="image" className=" w-[60%] h-[500px]">
            <Image
              height={500}
              width={500}
              src={carrent}
              alt="image"
              className="h-full w-full rounded-md"
            />
          </div>
          <div id="details" className=" w-[40%] h-[500px]"></div>
        </div>
        <div id="footer" className=" grid grid-cols-9 bg-[#401599] h-[200px]  ">
          <div className=" col-span-2  flex justify-center items-center  ">
            <a
              href="https://www.linkedin.com/in/tarun-kumar-645649213/"
              className="w-[40%] h-[40%] cursor-pointer"
              target="_blank"
            >
              <Image height={400} width={400} src={linkedin} alt="linkedin" />
            </a>
            <a
              href="https://github.com/H-57"
              className="w-[40%] h-[40%] cursor-pointer"
              target="_blank"
            >
              <Image
                height={400}
                width={400}
                src={githublogo}
                alt="githublogo"
              />
            </a>
          </div>
          <div className=" col-span-4 flex flex-col gap-y-2 items-center justify-center border-4 border-transparent border-x-[#2e0679]">
            <button className="flex justify-center items-center p-2 bg-white text-violet-700 font-bold capitalize rounded-xl hover:bg-violet-700 hover:text-white w-[80%]">
              <span>github</span>
              <img src="/github.svg" alt="logo" className="w-fit ml-1" />
            </button>

            <button className="flex justify-center items-center p-2 bg-white text-violet-700 font-bold capitalize rounded-xl hover:bg-violet-700 hover:text-white w-[80%]">
              <span>liveurl</span>
              <img src="/url.gif" alt="logo" className="w-fit h-8 ml-1" />
            </button>
          </div>
          <div className=" col-span-3  ">
            <h4 className="font-semibold ml-5 text-xl">Techstack</h4>
            <div className=" bg-[#a266fc] mx-5 w-[90%] h-[80%] rounded-xl ">
              <ul className="text-xl font-semibold flex flex-wrap text-white   capitalize  pt-5  ">
                <li className="w-[40%] ml-3 ">rect</li>
                <li className="w-[40%] ml-3 ">rect</li>
                <li className="w-[40%] ml-3 ">rect</li>
                <li className="w-[40%] ml-3 ">rect</li>
                <li className="w-[40%] ml-3 ">rect</li>
                <li className="w-[40%] ml-3 ">rect</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetail;
