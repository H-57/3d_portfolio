"use client";
import { useAuth, useUser, SignOutButton } from "@clerk/nextjs";
import { File } from "buffer";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Admin() {
  const router = useRouter();
  const [file, setFile] = useState<any>();
  const { isLoaded, userId } = useAuth();
  const { user } = useUser();



  if (!user) {
    return <h1>no sign in</h1>;
  }
  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    return null;
  }

  return (
    <section >
      <div className=" pt-36">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0])}
        name="image"
      />

      <button onClick={async(e) => {
        e.preventDefault();
      console.log(file);
      let fileData=new FormData()
      fileData.append("image",file)
const result=await fetch("/api/experience",{
  method:"POST",
  body:fileData
})

console.log(await result.json());
      }}>submit</button>
      </div>
      
    </section>
  );
}
