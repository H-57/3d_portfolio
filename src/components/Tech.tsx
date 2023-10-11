"use client"
import React from 'react'
import Ball from './canvas/Ball'
import SectionWrapper from './hoc/SectionWrapper'
import {tech}from "./constant"
import {motion} from 'framer-motion';

const Tech = () => {



  return (<>
  <h2 className=' capitalize md:text-5xl sm:text-3xl font-extrabold m-10 text-center' >Tech Skills</h2>
<div className='flex flex-row flex-wrap justify-center gap-14 md:w-[80vw]'>


  {tech.map((elm,index)=>
  <motion.div key={index}
  initial={{opacity:0,y:-100,x:-100}}
  transition={{duration:0.5,delay:0.4*index}}
  whileInView={{opacity:1,y:0,x:0}}
  viewport={{ once: true }}
  
  className='w-28 h-28'>


    <Ball  icon={elm.icon}/>
  </motion.div>
  )}
  </div>
  </>
    
  )
}

export default SectionWrapper(Tech,"tech")