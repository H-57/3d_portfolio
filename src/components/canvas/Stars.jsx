"use client"
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = () => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(10000), { radius: 1.2 });
  useFrame((state,delta)=>{
    ref.current.rotation.x-=delta/10;
    ref.current.rotation.y-=delta/15;
    

  })
  return (
    <group>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled >
      <PointMaterial transparent color="f272c8" size={0.003}
      sizeAttenuation={true} depthWrite={false}    />
      </Points>
    </group>
  );
};

function StarsCanvas() {
  return (
    <div className="w-full h-[100%] absolute z-[-11] inset-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}

export default StarsCanvas;
