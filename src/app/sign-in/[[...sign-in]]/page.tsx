import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <div className="m-auto w-fit relative top-[100px]">
    <SignIn />
  </div>

}