import { NextResponse } from "next/server";
import { dbConnection } from "../../../utils/db/connection";
import { ExperienceCard  } from "../../../utils/models/experienceCard";

export async function GET(request: Request,context: { params :{slug:string}}) {
    let slug=context.params.slug
    await dbConnection();
  
    const ExperienceCardData = await ExperienceCard.find({title:slug});
    return NextResponse.json(ExperienceCardData[0]);
  }