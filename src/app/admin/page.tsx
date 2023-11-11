
import Admin from '@/components/Admin';
import {currentUser} from '@clerk/nextjs';
import Sidebar from '@/components/Admin/Sidebar'
import Main from '@/components/Admin/Main';
import {SidebarProvider}  from '@/context/sidebar/SidebarContext';


async function page() {
 
  const user = await currentUser();

  if (!user) {
return null;
  }
  return (
  
    

    
    <>
<div className="pt-36"></div>
<SidebarProvider>
 <section className='grid grid-cols-5 border h-[100vh] box-border'>
<Sidebar  />
<Main/>
 </section>
    </SidebarProvider>
  
    </>
  )
}

export default page