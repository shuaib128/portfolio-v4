import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";
import { OrbitControls, useGLTFLoader } from "drei";
import { Section } from "./Section";

function Model() {
    const gltf = useGLTFLoader("/Models/scene.gltf", true);
    return <primitive object={gltf.scene} dispose={null} />;
}

const Lights = () => {
  return(
    <>
      {/* Ambient Light illuminates lights for all objects */}
      <ambientLight intensity={0.3} />
      {/* Diretion light */}
      <directionalLight position={[100, 10, 5]} intensity={1} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* Spotlight Large overhead light */}
      <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
    </>
  )
}

const HTMLContent = () => {
    const mesh = useRef(null)
    useFrame(() => (mesh.current.rotation.y += 0.004))

    return(
      <Section factor={1.5} offset={1}>
        <group position={[0, 250, 0]}>
          <mesh
            position={[0, -23, 0]} 
            scale={[670, 670, 670]} 
            ref={mesh}
          >
            <Model/>
            <OrbitControls />
          </mesh>
        </group>
      </Section>
    )
  }


const CanvasView = () => {
    return (
        <div className="canvsView">
            <Canvas colorManagement camera={{position: [0, 0, 130], fov: 70}}>
                <Lights />
                <Suspense fallback={null}>
                    <HTMLContent />
                </Suspense>
            </Canvas>
            <p className="its_me">
                Hello, I am a full-stack developer based in BD!
            </p>
            <p className="i_build">I build things for <span>the web.</span></p>
        </div>
    )
}

export default CanvasView