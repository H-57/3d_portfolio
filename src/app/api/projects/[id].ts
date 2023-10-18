import { NextResponse } from "next/server";
import { dbConnection } from "../db/connection";
import { ProjectModel as Project } from "../models/projectCard";

export async function GET(request: Request) {
    
    dbConnection()
    const productData=await Project.find({})
    return NextResponse.json(productData)
}