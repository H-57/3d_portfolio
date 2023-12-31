"use client"

import { getUrl } from '@/app/utils/serverActions/imageUpload';
import React, { useEffect,useState } from 'react'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import Tabel from './Tabel';

const head=["title","link","image","edit","delete"]

function ProjectPage({id}:{id?:String}) {
  const { register, handleSubmit,setValue } = useForm();
  const [existData, setExistData] = useState<any>()
useEffect(()=>{
  if(id){
    fetch(`/api/projects/${id}`).then(res=>res.json()).then(data=>{
      setExistData(data)
      
  
    })
  }
},[])


if(existData){
  setValue("title",existData?.title);
  setValue("tech",existData?.tech.join(";"));
  setValue("github",existData?.github);
  setValue("live",existData?.live);
  setValue("desc",existData?.desc);
  setValue("points",existData?.points.join(";"));
  setValue("category",existData?.category);
 

}




  let reqMethod="post";
    


    const onSubmit = async(data:any) => {
// console.log(data);


let image= new FormData()
await image.append("image",data.image?.[0])
const imageUrl=await getUrl(image)


      
  
       let formData=await {...data,image:imageUrl}
       if(id){
        reqMethod="put";
        if(!imageUrl){
          formData=await {...formData,image:existData?.image}
        }
        
      }
       console.log(formData,"formdata");
        
const result=await(await fetch("/api/projects",{
    method:reqMethod,
    body:JSON.stringify(formData)
})).json()

console.log(result.success)
if(result.success=="true"){
  toast.success(result.message)
}else{
  toast.error(result.message)
}


    }


  return (
    <div className='h-[100vh] overflow-y-scroll'>
<h1 className='md:text-5xl font-semibold text-center mb-10'>Projects Page</h1>

<form onSubmit={handleSubmit(onSubmit)}>
  <div className="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Title</label>
      <input type="text" id="title" {...register("title")}className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter title here" required />
    </div>
    <div>
      <label htmlFor="tech_stack" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tech Stack</label>
      <input type="text" id="tech_stack"{...register("tech")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="next;react;  seprate by ;" required />
    </div>
    <div>
      <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Github url</label>
      <input type="text" id="title" {...register("github")}className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="github url" required />
    </div>
    <div>
      <label htmlFor="tech_stack" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Live Url</label>
      <input type="text" id="tech_stack"{...register("live")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Live Url" required />
    </div>
    <div>
      <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">description</label>
      <textarea rows={6}  id="description" {...register("desc",{maxLength:320})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="desc" required />
    </div>  
    <div>
      <label htmlFor="Points" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Points</label>
      <textarea rows={6}  id="Points" {...register("points")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="points seprate by ;" required />
    </div>  
   
   

<select id="Category"{...register("category")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-fit">
  <option defaultValue="Personal">Personal</option>
  <option value="Assignments">Assignments</option>
  
</select>

   
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




<Tabel  head={head} fields={["title","live"]} fetchData="projects"/>

    </div>
  )
  
}

export default ProjectPage