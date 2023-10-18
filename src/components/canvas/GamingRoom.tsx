"use client";

import { Suspense, useEffect, useState } from "react";
import { OrbitControls, useGLTF, PerspectiveCamera } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import Loader from "../Loader";
import { Euler } from "three";

const GamingRoom = () => {

  const computer = useGLTF("/neon/scene.gltf");
  return (
    <>
    <mesh
        scale={ 1} position={ [0, -5, 0]}  >
{/* <hemisphereLight intensity={1} color={"white"} position={[5,-5,2]} groundColor={"black"}/> */}
        <ambientLight intensity={1}  />
        <pointLight intensity={5}  position={[1,5,0]}  color={"blue"}/>
        <pointLight intensity={10}  position={[0,0,0]}  color={"white"}/>
        <primitive object={computer.scene} />
      </mesh>

    
    </>
  );
};





const GamingRoomCanvas = () => {
 
  const [Camera, setCamera] = useState<Number[]>([0,5,25])

  return (
    <Canvas gl={{ preserveDrawingBuffer: true }} shadows frameloop="demand" 
    camera={{position:Camera,fov:25}}>
     
        <ambientLight intensity={1} />
      

      <OrbitControls
        enableZoom={false}
        rotation={[0, 0, Math.PI]}
        // maxPolarAngle={Math.PI / 3}
        // minPolarAngle={Math.PI / 2}
      />
      <Suspense fallback={<Loader />}>
      
        <GamingRoom />
        <mesh  onClick={(e) =>{setCamera([5,5,22]);
        console.log("click");
        } }>


        <sphereGeometry  ></sphereGeometry>
</mesh>
      </Suspense>
      
    </Canvas>
  );
};

export default GamingRoomCanvas;
