import React from 'react'
import Computers from './canvas/Computers'

const Hero = () => {
  return (
   <>
   <section className='relative h-screen w-full bg-[url("../assets/herobg.png")] bg-no-repeat bg-center bg-cover mx-auto'>
<div className='relative top-[8rem] flex flex-row lg:left-[10rem] gap-3 lg:w-[50vw]'>
  <div className=' inset-0 '>

<div className=' w-5 h-5 rounded-full bg-[#915eff] m-auto' />
<div className='w-1 h-[60vh] rounded-md bg-gradient-to-b from-[#915eff] m-auto mt-[-4px]' />
  </div>
  <div className='font-bold lg:text-4xl text-2xl '><p className='text-6xl lg:text-8xl  '>Hi,I&apos;m <span className=' text-violet-600 '>Tarun</span></p>
  <p>I am a MERN stack developer and multiple tech stack practical experience.</p></div>
</div>
<div className='absolute w-full lg:h-screen h-[60vh] bottom-0'>

<Computers/>
</div>
   </section>
   </>
  )
}

export default Hero