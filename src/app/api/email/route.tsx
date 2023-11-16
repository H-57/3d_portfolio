import { NextResponse } from "next/server";
import { dbConnection } from "../../utils/db/connection";
import { currentUser } from "@clerk/nextjs";
import { email as Email } from "@/app/utils/models/email";

interface bodyProps {
  name: string;
  email: string;
  message: string;
}

export async function GET(request: Request) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ message: "unauth" }, { status: 401 });
  }
  dbConnection();
  const result = await Email.find({});
  return NextResponse.json(result);
}

export async function POST(request: Request) {
  try {
    const { name, message, email }: bodyProps = await request.json();
  
console.log(name,email,message);
    const isValidEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!isValidEmail.test(email)) {
      return NextResponse.json({
        success: "false",
        message: "Invalid email format",
      });
    }
    dbConnection();
    const result = await Email.create({ email, name, message });

    return NextResponse.json(
      { message: "Message sent, we will contact you soon", success: "true" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ success: "false", message: error });
  }
}

export async function DELETE(request: Request) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ message: "unauth" }, { status: 401 });
  }
  const{id}=await request.json()

  dbConnection();

  const result = await Email.findByIdAndDelete(id);
  return NextResponse.json({message:"deleted"}, { status: 200 });
}
