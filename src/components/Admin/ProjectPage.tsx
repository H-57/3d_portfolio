"use client"

import { getUrl } from '@/app/utils/serverActions/imageUpload';
import React from 'react'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

function ProjectPage() {
  
    const { register, handleSubmit } = useForm();


    const onSubmit = async(data:any) => {
// console.log(data);

let image= new FormData()
await image.append("image",data.image?.[0])
const imageUrl=await getUrl(image)


      
  
       let formData=await {...data,image:imageUrl}
   
       console.log(formData,"formdata");
        
const result=await(await fetch("/api/projects",{
    method:"post",
    body:JSON.stringify(formData)
})).json()

console.log(result.success)
if(result.success=="true"){
  toast(result.message)
}


    }


  return (
    <div>


<form onSubmit={handleSubmit(onSubmit)}>
  <div className="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Title</label>
      <input type="text" id="title" {...register("title")}className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter title here" required />
    </div>
    <div>
      <label htmlFor="tech_stack" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tech Stack</label>
      <input type="text" id="tech_stack"{...register("tech")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="next,react," required />
    </div>
    <div>
      <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">description</label>
      <input type="text" id="description" {...register("desc")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="desc" required />
    </div>  
   
   
   
  </div>
  <div className="flex items-center justify-center w-full">
  <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
    <div className="flex flex-col items-center justify-center pt-5 pb-6">
      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
      </svg>
      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
    </div>
    <input {...register("image")} id="dropzone-file" type="file"  className="hidden" />
  </label>
</div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>






    </div>
  )
}

export default ProjectPage