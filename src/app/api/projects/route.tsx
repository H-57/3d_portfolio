import { NextResponse } from "next/server";
import { dbConnection } from "../../utils/db/connection";
import { ProjectModel as Project } from "../../utils/models/projectCards";
import { currentUser } from "@clerk/nextjs";





interface dataProps {
  desc: String;
  tech: String;
  title: String;
  image: String;
  type: String;
  github: String;
  live: String;
  category: String
  points: String
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

  const { title, tech, desc, image, type, github, live, category, points }: dataProps = await request.json();
  if (!title || !desc || !tech || !image) {
    return NextResponse.json({
      message: "please fill all fields",
      success: "false",
    });
  } else {
    dbConnection();
    let techArray = tech.split(";");
    let Points = points.split(";")

    const projectData = await Project.create({ title, tech: techArray, desc, image, type, github, live, category, points: Points });
    return NextResponse.json(
      {
        message: "project created success",
        success: "true",
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
  const { title, tech, desc, image, type, github, live, category, points }: dataProps = await request.json();
  if (!title || !desc || !tech || !image) {
    return NextResponse.json({
      message: "please fill all fields",
      success: "false",
    });
  } else {
   
    let techArray = tech.split(";");
    let Points = points.split(";")
  try {
    dbConnection();
    const projectData = await Project.findOneAndUpdate({title:title},{ title, tech:techArray, desc, image, type, github, live, category, points:Points });
    return NextResponse.json({message:"edit success", success:"true"}, { status: 200 });
  } catch (error) {
    return NextResponse.json({message:"failed", success:"false" ,error}, { status: 400 });
  }

}
}
export async function DELETE(request: Request) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ message: "unauth" }, { status: 202 });
  }
  const { id } = await request.json()
  dbConnection();
  const projectData = await Project.findByIdAndDelete(id);
  return NextResponse.json({ message: "deleted" }, { status: 200 });
}
