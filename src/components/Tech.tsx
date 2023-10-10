"use client"
import React from 'react'
import Ball from './canvas/Ball'
import SectionWrapper from './hoc/SectionWrapper'
import {tech}from "./constant"
import {motion} from 'framer-motion';

const Tech = () => {



  return (<>
<div className='flex flex-row flex-wrap justify-center gap-10'>


  {tech.map((elm,index)=>
  <motion.div key={index}
  initial={{opacity:0,y:-100,x:-100}}
  transition={{duration:0.5,delay:0.5*index}}
  whileInView={{opacity:1,y:0,x:0}}
  
  className='w-28 h-28'>


    <Ball  icon={elm.icon}/>
  </motion.div>
  )}
  </div>
  </>
    
  )
}

export default SectionWrapper(Tech,"tech")