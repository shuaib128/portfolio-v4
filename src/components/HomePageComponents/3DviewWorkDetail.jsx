import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, useGLTFLoader } from "drei";
import { Section } from "./Section";
import { motion } from "framer-motion"

function Model() {
  const gltf = useGLTFLoader("/Models/scene.gltf", true);
  return <primitive object={gltf.scene} dispose={null} />;
}

const Lights = () => {
  return (
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

  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, 250, 0]}>
        <mesh
          position={[0, -23, 0]}
          scale={[670, 670, 670]}
          ref={mesh}
        >
          <Model />
          <OrbitControls />
        </mesh>
      </group>
    </Section>
  )
}


const CanvasViewWork = () => {
  return (
    <div className="canvsView">
      <motion.div style={{ width: "100%", height: "100%" }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .7, duration: .5, type: "just", stiffness: 120 }}
      >
        <Canvas colorManagement camera={{ position: [0, 0, 130], fov: 70 }}>
          <Lights />
          <Suspense fallback={null}>
            <HTMLContent />
          </Suspense>
        </Canvas>
      </motion.div>
    </div>
  )
}

export default CanvasViewWork