
import{motion}from "framer-motion"
import { ReactElement, ReactNode } from "react"



const SectionWrapper=(Component:any,id?:string)=> {
return(
    function HOC(){

    
        return (
          <>
          <motion.div initial={{opacity:0 }} whileInView={{opacity:1}}   className=" px-10 max-w-7xl mx-auto realtive z-0 overflow-hidden">
           {id&& <span className="" id={id}>&nbsp;</span>}
             <Component />
          </motion.div>
          </>
        )
      }

)

}


export default SectionWrapper