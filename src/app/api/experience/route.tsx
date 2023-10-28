import { NextResponse } from "next/server";
import { dbConnection } from "../../utils/db/connection";
import { ExperienceCard } from "../../utils/models/experienceCard";
import {currentUser}from "@clerk/nextjs"
interface bodyProps {
  projectName: String;
  company: String;
  date: String;
  points: [String];
}

export async function GET(request: Request) {
  
  dbConnection();
  const result = await ExperienceCard.find({});
  return NextResponse.json(result);
}

export async function Post(request: Request) {
  const user=await currentUser();
 
  if(!user){
   
    return NextResponse.json({ status: 401,message:"unauth" });
  }

  const { projectName, company, date, points }: bodyProps = await request.json();
  if(!projectName||!company||!date||!points){
    return NextResponse.json({
      message: "please fill all fields",
      status: "error",
    });
  }
  else{
    dbConnection();
    const result = await ExperienceCard.create({ projectName, company, date, points });
    return NextResponse.json({message:"added success",status:"success"})
  }
 
}

export async function PUT(request: Request) {
  const user=await currentUser();
 
  if(!user){
   
    return NextResponse.json({ status: 401,message:"unauth" });
  }
  dbConnection()
  const result=await ExperienceCard.findByIdAndUpdate()
  return NextResponse.json(result)
}

export async function DELETE(request: Request) {
  const user=await currentUser();
 
  if(!user){
   
    return NextResponse.json({ status: 401,message:"unauth" });
  }
  dbConnection()
  const result=await ExperienceCard.findByIdAndDelete()
  return NextResponse.json(result)
}