import ProjectDetail from '@/components/ProjectDetail'
import React from 'react'
interface props{
    params: { name: string } 
}


function page({params}:props) {
  return (<>
  
  <section className='relative h-screen w-full bg-[url("../assets/herobg.png")] bg-no-repeat bg-center bg-cover mx-auto'>
      <div className="pt-20"></div>
 
   <ProjectDetail/>
      </section>
  </>
  )
}

export default page