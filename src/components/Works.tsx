"use client"
import Experience from './Experience'
import SectionWrapper from './hoc/SectionWrapper'
const Works = () => {
  return (
    <>
    <section >
      <div>

    <p className=" uppercase text-xl">What I have done so far</p>
      <h2 className=" font-extrabold text-6xl">Work Experience/Personal Projects.</h2>
      </div>
<Experience  />
    </section>
    
    
    </>
  )
}

export default SectionWrapper(Works,"work")