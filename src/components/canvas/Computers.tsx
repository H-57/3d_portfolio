"use client"

import {Suspense} from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'

import { Canvas } from '@react-three/fiber'
import Loader from "../Loader"

const Computers = () => {
const computer=useGLTF('/desktop_pc/scene.gltf')

  return (<>

<mesh scale={0.8}
position={[0,-4,-1.5]}
>
  <hemisphereLight intensity={0.5} groundColor={"black"}
   />
<pointLight intensity={10}
position={[0,2,-15]}

/>

<primitive object={computer.scene} />
</mesh>


  </>)
}
const ComputerCanvas=()=>{
  return(
<Canvas 
gl={{preserveDrawingBuffer:true}}
shadows
frameloop='demand'
camera={{position:[20,3,5],fov:25}}
 >
  <ambientLight intensity={1} /> 
  
  <OrbitControls enableZoom={false}
  maxPolarAngle={Math.PI/2}
  minPolarAngle={Math.PI/2}
  />
<Suspense fallback={<Loader/>}>
<Computers/>
</Suspense>
  </Canvas>

  )
}


export default  ComputerCanvas
