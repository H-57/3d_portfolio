

import { Suspense } from "react";
import Loader from "../Loader";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Decal,
  useTexture,
  Preload,
  Float,
} from "@react-three/drei";
import { StaticImageData } from "next/image";

interface props {
  icon: StaticImageData;
}

const Ball = ({ icon }:props) => {
  
  const [decal] = useTexture([icon.src]);
  return <>
  <Float  >
<ambientLight intensity={0.1}/>
<directionalLight position={[0,0,0]} />
    <mesh
    dispose={null}
    
    castShadow receiveShadow scale={3}>
<icosahedronGeometry args={[1,1]}  />
<meshStandardMaterial flatShading polygonOffset polygonOffsetFactor={500}  />
<Decal map={decal}   position={[0,0,1]} rotation={[2*Math.PI,0,6.25]} />
    </mesh>
  </Float>
  
  </>;
};


const BallCanvas = ({ icon }: props) => {
  return (
    <Canvas   gl={{ preserveDrawingBuffer: true }} frameloop="demand">
      <ambientLight intensity={1} />

      <OrbitControls  enableZoom={false} />
      <Suspense fallback={<Loader />}>
        <Ball icon={icon} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
