import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request:NextRequest) {
  if (request.url.match("hai")) {
    console.log("run");
    return NextResponse.rewrite(new URL('/', request.url))
  }
 

}