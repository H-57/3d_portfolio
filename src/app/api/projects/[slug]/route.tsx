import { NextResponse } from "next/server";
import { dbConnection } from "../../../utils/db/connection";
import { ProjectModel as Project } from "../../../utils/models/projectCards";

export async function GET(request: Request,context: { params :{slug:string}}) {
    let slug=context.params.slug
    await dbConnection();
  
    const projectData = await Project.find({title:slug});
    return NextResponse.json(projectData[0]);
  }