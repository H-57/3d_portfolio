import { NextResponse } from "next/server";
import { dbConnection } from "../../utils/db/connection";
import { ExperienceCard } from "../../utils/models/experienceCard";
import { currentUser } from "@clerk/nextjs";



interface bodyProps {
  title: String;
  company: String;
  date: String;
  desc: String;
  icon: String;
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
  const {title,company,icon,date,desc}:bodyProps=await request.json();
 
let points=desc.split(";");
  const result=await ExperienceCard.create({title,company,icon,date,points})

  return NextResponse.json({ message: "created" ,success:"true"},{ status: 201});
  
  } catch (error) {
    return NextResponse.json({success:"false",message:error})
  }
  

}

export async function PUT(request: Request) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ message: "unauth" },{ status: 401});
  }

  dbConnection();
  
 const {title,company,icon,date,desc}:bodyProps= await request.json();
  if (!title || !desc || !company || !icon || !date) {
    return NextResponse.json({
      message: "please fill all fields",
      success: "false",
    });
  } else {
   
    let descArray = desc.split(";");
   
  try {
    dbConnection();
    const projectData = await ExperienceCard.findOneAndUpdate({title:title},{title,company,icon,date,points:descArray});
    return NextResponse.json({message:"edit success", success:"true"}, { status: 200 });
  } catch (error) {
    return NextResponse.json({message:"failed", success:"false" ,error}, { status: 400 });
  }
}
}

export async function DELETE(request: Request) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({  message: "unauth",success:"false" },{status:401});
  }
  const{id}=await request.json()
  dbConnection();
 
  const result = await ExperienceCard.findByIdAndDelete(id);
  return NextResponse.json({message:"deleted",success:"true"},{status:200});
}
