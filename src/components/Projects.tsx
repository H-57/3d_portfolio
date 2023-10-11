"use client"
import SectionWrapper from './hoc/SectionWrapper'
import { Tilt } from 'react-tilt'
const ProjectCards=()=>{


    return(
        <>
        <Tilt className="shadow-[gray_0px_0px_100px_-50px] rounded-3xl md:w-[250px]  w-[200px] h-[200px] p-[2px] bg-gradient-to-r from-blue-600 to-pink-700">
<div className='h-full w-full p-1 bg-[#151030] rounded-3xl'></div>
        </Tilt>
        
        </>
    )
}



function Projects() {
  return (
    <section className='relative h-screen w-full bg-[url("../assets/herobg.png")] bg-no-repeat bg-center bg-cover mx-auto'>

<ProjectCards/>

        </section>
  )
}

export default  Projects