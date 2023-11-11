"use client";
import React, { useState } from "react";
import {PencilSquareIcon,TrashIcon}from "@heroicons/react/24/solid"
import Image from "next/image";
interface headProps {
  head: string[];
  fields: string[];
}

function Tabel({ head, fields }: headProps) {
  const [data, setData] = useState([
    {
      _id: "654f6faf0f7e47691dd83d9f",
      image:
        "https://res.cloudinary.com/dahc9q7hs/image/upload/v1699689490/portfolio/zteliapyiofwntbznion.webp",
      live: "fdg",
      github: "dfg",
      title: "cvx",
      tech: ["fdg"],
      desc: "fgd",
      __v: 0,
    },
  ]);
  // useEffect(()=>{
  //   fetch("/api/projects").then(res=>res.json()).then(data=>{
  //     setData(data)
  //   })
  // },[])

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {head.map((item, index) => (
                <th scope="col" className="px-6 py-3" key={index}>
                  {item}{" "}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((item: any, index: number) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                {fields.map((elm, index) => (
                  <td key={index} className="px-6 py-4">
                    {item[elm]}
                  </td>
                  
                ))}
               <td className="px-6 py-4"><Image className="w-6 h-6" src={(item.image)?item.image:item.icon} alt="image" width={100} height={100}/></td> 
                <td className="px-6 py-4"><PencilSquareIcon className="w-6 h-6 text-blue-500"/></td>
                <td className="px-6 py-4"><TrashIcon className="w-6 h-6 text-red-500"/></td>
              </tr>
            ))}

            
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Tabel;
