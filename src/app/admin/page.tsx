
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
    <form action="/api/experience" method='POST' encType='multipart/form-data' className='pt-20'>
      <input type="file" name="image" id="" />
      <input type="text" name="name"/>
      <button type="submit">submit</button>
    </form>
    </>
  )
}

export default page