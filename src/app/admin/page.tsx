"use client";
import { useAuth,useUser,SignOutButton  } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
 
export default  function Page() {
const router =useRouter()

  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const {   user } = useUser();
  if(!user){
    return <h1>no sign in</h1>
  }
  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    return null;
  }
 
  return (
    <div className=" text-white">
      Hello, {user?.username} 
      <button>

      <SignOutButton />
      </button>
    </div>
  );
}
