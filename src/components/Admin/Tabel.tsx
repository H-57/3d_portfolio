"use client";
import React, { useState } from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid"
import Image from "next/image";
import { toast } from "react-toastify";
import Link from "next/link";
interface headProps {
  head: string[];
  fields: string[];
  fetchData: string;
}

function Tabel({ head, fields, fetchData }: headProps) {
  const [data, setData] = useState<Array<any>>();

  React.useEffect(() => {
    fetch(`/api/${fetchData}`).then(res => res.json()).then(data => {
      setData(data)
    })
  }, [fetchData])

  async function deleteEntry(id: string) {
    let desicion = confirm("are you sure to delete this entry?");
    if (desicion) {
      const response = await fetch(`/api/${fetchData}`, {
        method: "delete",
        body: JSON.stringify({ id }),
      })
      response.json().then(data => {
        if (data?.success == "false") {
          toast.error(data.message)
        } else {

          toast.success(data.message)

        }
      })
    }
  }

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 mx-3">
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
                {(item.image || item.icon) && <td className="px-6 py-4"><Image className="w-6 h-6" src={(item.image) ? item.image : item.icon} alt="image" width={100} height={100} /></td>}
                {head.includes("edit") && <td className="px-6 py-4"><Link href={`/admin/${item.title}`}><PencilSquareIcon className="w-6 h-6 cursor-pointer text-blue-500" /></Link></td>}
                <td onClick={() => deleteEntry(item._id)} className="px-6 py-4"><TrashIcon className="w-6 h-6 text-red-500 cursor-pointer" /></td>
              </tr>
            ))}


          </tbody>
        </table>
      </div>
    </>
  );
}

export default Tabel;
