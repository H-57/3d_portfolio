"use client";
import { useAuth,useUser,SignOutButton  } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


export default  function Admin() {
const router =useRouter()

  const { isLoaded, userId} = useAuth();
  const {   user } = useUser();
  if(!user){
    return (<h1>no sign in</h1>);
  }
  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    return null;
  }
 
  return (
   <section>

    
   </section>
  );
}
