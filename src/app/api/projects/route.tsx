import { NextResponse } from "next/server";
import { dbConnection } from "../../utils/db/connection";
import { ProjectModel as Project } from "../../utils/models/projectCards";
import { currentUser } from '@clerk/nextjs';


interface dataProps {
  desc: String;
  image: String;
  title: String;
}
export async function GET(request: Request) {

  await dbConnection();
console.log("done");
  const projectData = await Project.find({});
  return NextResponse.json(projectData);
}

export async function POST(request: Request) {
  const user=await currentUser();
 
  if(!user){
    return NextResponse.json({ status: 401,message:"unauth" });
  }

  const { title, image, desc }: dataProps = await request.json();
  console.log(title, desc);
  if (!title || !desc) {
    return NextResponse.json({
      message: "please fill all fields",
      status: "error",
    });
  } else {
    dbConnection();
    const projectData = await Project.create({ title, image, desc });
    return NextResponse.json({
      message: "product created success",
      projectData,
    });
  }
}


export async function PUT(request: Request) {
  const user=await currentUser();
 
  if(!user){
   
    return NextResponse.json({ status: 401,message:"unauth" });
  }
  dbConnection()
  const projectData=await Project.findByIdAndUpdate()
  return NextResponse.json(projectData)
}

export async function DELETE(request: Request) {
  const user=await currentUser();
 
  if(!user){
   
    return NextResponse.json({ status: 401,message:"unauth" });
  }
  dbConnection()
  const projectData=await Project.findByIdAndDelete()
  return NextResponse.json({})
}