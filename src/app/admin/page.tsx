
import Admin from '@/components/Admin';
import {currentUser} from '@clerk/nextjs';


async function page() {

  const user = await currentUser();

  if (!user) {
return null;
  }
  return (
    <>

 <Admin />
    
    </>
  )
}

export default page