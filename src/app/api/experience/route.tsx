import { NextResponse } from "next/server";
import { dbConnection } from "../../utils/db/connection";
import { ExperienceCard } from "../../utils/models/experienceCard";
import { currentUser } from "@clerk/nextjs";



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

export async function POST(request:Request) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ message: "unauth" },{ status: 401});
  }
  try {
    dbConnection();
  const body=await request.json();
 

  const result=await ExperienceCard.create({})

  return NextResponse.json({ message: "created" ,success:"true"},{ status: 201});
  
  } catch (error) {
    return NextResponse.error()
  }
  

}

export async function PUT(request: Request) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ message: "unauth" },{ status: 401});
  }
  dbConnection();
  
  const result = await ExperienceCard.findByIdAndUpdate();
  return NextResponse.json(result);
}

export async function DELETE(request: Request) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({  message: "unauth" },{status:401});
  }
  dbConnection();
 
  const result = await ExperienceCard.findByIdAndDelete();
  return NextResponse.json(result,{status:200});
}
