"use server"

export const getUrl=async(file:FormData)=>{
  
    const result=await fetch(process.env.IMAGE_API!,{
      method:"POST",
      body:file
    })
  
    let response=await result.json()
    return response.url
       }
    