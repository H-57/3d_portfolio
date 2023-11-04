"use client"

import Computers from './canvas/Computers'
import {motion}from "framer-motion"
const Hero = () => {
  return (
   <>
   <section className='relative h-screen w-full bg-[url("../assets/herobg.png")] bg-no-repeat bg-center bg-cover mx-auto'>
<div className='relative top-[8rem] flex flex-row lg:left-[10rem] gap-3 lg:w-[50vw]'>
  <div className=' inset-0 '>

<div className=' w-5 h-5 rounded-full bg-[#915eff] m-auto' />
<div className='w-1 h-[60vh] rounded-md bg-gradient-to-b from-[#915eff] m-auto mt-[-4px]' />
  </div>
  <motion.div initial={{opacity:0,x:-100}}
    transition={{type:"spring",duration:0.7,delay:0.7}}
    whileInView={{opacity:1,x:0}} className='font-bold lg:text-4xl text-2xl '><p className='text-6xl lg:text-8xl  '>Hi,I&apos;m <span className=' text-violet-600 '>Tarun</span></p>
  <p>I am a MERN stack developer and skilled full stck developer.</p></motion.div>
</div>
<div className='absolute w-full lg:h-screen h-[60vh] bottom-0'>

<Computers/>
</div>
<div className='absolute bottom-16 w-full flex justify-center '>

<a href='/#about' >
  <div className='border-4  w-[35px] h-[64px] rounded-full flex justify-center p-2 '>
  <motion.div animate={{y:[0,24,0]}} transition={{
    duration:1.5,
    repeat:Infinity,
    
  }} className='w-2 h-2 bg-white rounded-md'>

  </motion.div>
  </div>
</a>
</div>
   </section>
   </>
  )
}

export default Hero