import { NextResponse } from "next/server";
import { dbConnection } from "../../utils/db/connection";
import { ProjectModel as Project } from "../../utils/models/projectCards";
import { currentUser } from "@clerk/nextjs";
import multer from "multer";
import { fileUpload } from "@/app/utils/cloudnary/cloudnary";

let uploader = multer({
  storage: multer.diskStorage({}),
});

interface dataProps {
  desc: String;
  tech: String;
  title: String;
  image: File;
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
  const formData = await request.formData();
  const title = formData.get('title');
  const desc = formData.get('desc');
  const tech = formData.get('tech');
  const image = formData.get('image');

  if (!title || !desc) {
    return NextResponse.json({
      message: "please fill all fields",
      status: "error",
    });
  } else {
    dbConnection();
  
  fileUpload(image)
    const projectData = await Project.create({ title, tech, desc });
    return NextResponse.json(
      {
        message: "project created success",
        projectData,
      },
      { status: 201 }
    );
  }
}

export async function PUT(request: Request) {
  const user = await currentUser();

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
  dbConnection();
  const projectData = await Project.findByIdAndDelete();
  return NextResponse.json({});
}
