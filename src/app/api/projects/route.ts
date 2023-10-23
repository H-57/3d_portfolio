import { NextResponse } from "next/server";
import { dbConnection } from "../db/connection";
import { ProjectModel as Project } from "../models/projectCard";
interface data{
    desc:String;
    image:String;
    title:String;
}
export async function GET(request: Request) {
   
    dbConnection()
    const productData=await Project.find({})
    return NextResponse.json(productData)
}

export async function POST(request: Request) {
   const data=request.body;
    dbConnection()
    const productData=await Project.create()
    return NextResponse.json(productData)
}
export async function PUT(request: Request) {
   
    dbConnection()
    const productData=await Project.find({})
    return NextResponse.json(productData)
}

export async function DELETE(request: Request) {
   
    dbConnection()
    const productData=await Project.find({})
    return NextResponse.json(productData)
}