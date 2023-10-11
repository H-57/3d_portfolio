"use client"

import {Suspense} from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'

import { Canvas } from '@react-three/fiber'
import Loader from "../Loader"

const Earth = () => {
  
const computer=useGLTF('/planet/scene.gltf')

  return (<>

<mesh scale={3}

>
  <hemisphereLight intensity={0.5} groundColor={"black"}
   />
<pointLight intensity={10}
position={[0,4,2]}

/>

<primitive object={computer.scene} />
</mesh>


  </>)
}
const EarthCanvas=()=>{
 

  return(
<Canvas 
gl={{preserveDrawingBuffer:true}}
shadows
frameloop='demand'

// camera={{position:[20,3,5],fov:25}}
 >
  <ambientLight intensity={1} /> 
  
  <OrbitControls autoRotate enableZoom={false}
  maxPolarAngle={Math.PI/2}
  minPolarAngle={Math.PI/2}
  />
<Suspense fallback={<Loader/>}>
<Earth />
</Suspense>
  </Canvas>

  )
}


export default  EarthCanvas
