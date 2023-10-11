"use client"

import {Suspense, useEffect,useState} from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'

import { Canvas } from '@react-three/fiber'
import Loader from "../Loader"

const Computers = ({IsMobile}:any) => {
  
const computer=useGLTF('/desktop_pc/scene.gltf')

  return (<>

<mesh scale={IsMobile?0.4:0.8}
position={IsMobile?[0,-1,0]:[0,-3,-1.5]}
dispose={null}
>
  <hemisphereLight intensity={0.5} groundColor={"black"}
   />
<pointLight intensity={10}
position={[0,4,2]}

/>

<primitive object={computer.scene}  />
</mesh>


  </>)
}
const ComputerCanvas=()=>{
  const [IsMobile, setIsMobile] = useState<boolean>(false)
  useEffect(()=>{
// for track screen view
const mediaQuery=window.matchMedia('(max-width:500px')
setIsMobile(mediaQuery.matches);
// console.log(mediaQuery.matches);

const handelMediaQuery=(e:any)=>{
setIsMobile(e.matches);
}
mediaQuery.addEventListener("change",handelMediaQuery);//add listner on screen
return ()=>mediaQuery.removeEventListener("change",handelMediaQuery);//remove listner on screen

}
  ,[])

  return(
<Canvas 
gl={{preserveDrawingBuffer:true}}
shadows
frameloop='demand'
camera={{position:IsMobile?[10,4,5]:[20,3,5],fov:25}}
 >
  <ambientLight intensity={1} /> 
  
  <OrbitControls autoRotate enableZoom={false}
  maxPolarAngle={Math.PI/2}
  minPolarAngle={Math.PI/2}
  />
<Suspense fallback={<Loader/>}>
<Computers IsMobile={IsMobile}/>
</Suspense>
  </Canvas>

  )
}


export default  ComputerCanvas
