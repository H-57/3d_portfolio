import { NextResponse } from "next/server";
import { dbConnection } from "../../utils/db/connection";
import { ProjectModel as Project } from "../../utils/models/projectCards";
import { currentUser } from "@clerk/nextjs";





interface dataProps {
  desc: String;
  tech: String;
  title: String;
  image: String;
  type:String;
  github:String;
  live:String;
  category:String
}
export async function GET(request: Request) {
  await dbConnection();
  console.log("done");
  const projectData = await Project.find({});
  return NextResponse.json(projectData);
}

export async function POST(request: Request) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ message: "unauth" }, { status: 401 });
  }

 const {title,tech,desc,image,type,github,live,category}:dataProps=await request.json();
  if (!title || !desc||!tech||!image) {
    return NextResponse.json({
      message: "please fill all fields",
      success:"false",
    });
  } else {
    dbConnection();
  let techArray=tech.split(";");

    const projectData = await Project.create({ title, tech:techArray, desc,image ,type,github,live,category});
    return NextResponse.json(
      {
        message: "project created success",
        success:"true",
        projectData,
      },
      { status: 201 }
    );
  }
}

export async function PUT(request: Request) {
  const user = await currentUser();
const body= await request.json();
console.log(body)
  if (!user) {
    return NextResponse.json({ message: "unauth" }, { status: 401 });
  }
  dbConnection();
  const projectData = await Project.findByIdAndUpdate();
  return NextResponse.json(projectData, { status: 200 });
}

export async function DELETE(request: Request) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ message: "unauth" }, { status: 202 });
  }
  const{id}=await request.json()
  dbConnection();
  const projectData = await Project.findByIdAndDelete(id);
  return NextResponse.json({message:"deleted"}, { status: 200 });
}
