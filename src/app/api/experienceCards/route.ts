import { NextResponse } from "next/server";
import { dbConnection } from "../db/connection";


export async function GET(request: Request) {
  
    dbConnection()
  
    return NextResponse.json({})
}