import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <div className="!text-red-600 m-auto w-fit relative top-[100px]">
    <SignIn />
  </div>

}