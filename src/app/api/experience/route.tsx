import { NextResponse } from "next/server";
import { dbConnection } from "../../utils/db/connection";
import { ExperienceCard } from "../../utils/models/experienceCard";
import { currentUser } from "@clerk/nextjs";
import { fileUpload } from "@/app/utils/cloudnary/cloudnary";


interface bodyProps {
  projectName: String;
  company: String;
  date: String;
  points: [String];
}
interface result{
  status:string;
  message:string;
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
  const body=await request.formData();
  const file:any=await body.get('image');
 
  if(file){

  const imageUrl=await  fileUpload(file);
  const result=await ExperienceCard.create({test:"test",imageUrl});
  return NextResponse.json({ message: "created",result },{ status: 201});
  }
  } catch (error) {
    return NextResponse.json({error: error},{ status: 400});
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
