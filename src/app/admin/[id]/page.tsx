
import {currentUser} from '@clerk/nextjs';
import Sidebar from '@/components/Admin/Sidebar'

import {SidebarProvider}  from '@/context/sidebar/SidebarContext';
import EditPage from '@/components/Admin/EditPage';


async function page({params}:{params:{id:string}}) {
 
  const user = await currentUser();

  if (!user) {
return null;
  }
  return (
  
    

    
    <>
<div className="pt-36"></div>

 

<EditPage id={params.id}/>

  
    </>
  )
}

export default page