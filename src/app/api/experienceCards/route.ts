import { NextResponse } from "next/server";
import { dbConnection } from "../db/connection";
import { ExperienceCard } from "../models/experienceCard";

interface bodyProps{
    projectName:String,
    company:String,
    date:String,
    points:[String]
}


export async function GET(request: Request) {
  dbConnection();
const result=await ExperienceCard.find({})
  return NextResponse.json(result);
}

export async function Post(request: Request) {
 dbConnection();
 if(!request.body){
    return NextResponse
 }
 const data:bodyProps=request.body;
 console.log(data);
  const result=await ExperienceCard.create(data)
  
}
