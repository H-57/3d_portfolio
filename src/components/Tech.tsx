"use client"

// import Ball from './canvas/Ball'
import Image from 'next/image';
import SectionWrapper from './hoc/SectionWrapper'
import {tech}from "./constant"
import {motion} from 'framer-motion';
const Tech = () => {


  

  return (<>
  <h2  className=' capitalize md:text-5xl sm:text-3xl font-extrabold m-10 text-center' >Tech Skills</h2>
 
<div className='flex flex-row flex-wrap justify-center md:gap-14 gap-5 w-[80vw]'>


  {tech.map((elm,index)=>
  <motion.div key={index}
  initial={{opacity:0,y:-100,x:-100}}
  transition={{duration:0.5,delay:0.2*index}}
  whileInView={{opacity:1,y:0,x:0}}
  // viewport={{once:true}}
  
  className='md:w-28 md:h-28 w-20 h-20s'>
<div className='bg-gray-500 rounded-full'>

<Image className=' object-cover p-2 w-100 h-100 ' src={elm.icon} alt={elm.tech} width={500} height={500} />
</div>
    {/* <Ball  icon={elm.icon}/> */}
  </motion.div>
  )}
  </div>
  </>
    
  )
}

export default SectionWrapper(Tech,"tech")