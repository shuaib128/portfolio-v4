import React, { Suspense, useRef, useEffect, useState } from "react";
import { a, useTransition } from "@react-spring/web";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useProgress, useAnimations, Center, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import { Section } from "./Section";
import * as THREE from "three";
import AnimatedTxt from "../AnimatedTxt/AnimatedTxt";

function Model(props) {
  // Load the GLB with animations
  const { scene, animations } = useGLTF("/Models/scene.glb");
  const { actions } = useAnimations(animations, scene);
  const [segment, setSegment] = useState("middle");

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]];
      firstAction.reset().play(); // play first animation
    }

    // Fix texture encoding so colors aren’t washed out/dark
    scene.traverse((child) => {
      if (child.isMesh && child.material && child.material.map) {
        child.material.map.encoding = THREE.sRGBEncoding;
        child.material.needsUpdate = true;
      }
    });
  }, [actions, scene]);

  return <primitive object={scene} scale={[0.5, 0.5, 0.5]} {...props} />;
}

const Loader = () => {
  const { active, progress } = useProgress();
  const transition = useTransition(active, {
    from: { opacity: 1, progress: 0 },
    leave: { opacity: 0 },
    update: { progress },
  });

  const formattedProgress = progress.toFixed(2);

  return transition(
    ({ progress, opacity }, active) =>
      active && (
        <a.div className="loading" style={{ opacity }}>
          <div className="loading-bar-container">
            <a.div
              className="loading-bar"
              style={{ width: `${progress}%` }}
            ></a.div>
            <a.div className="loading-text">{formattedProgress}%</a.div>
          </div>
        </a.div>
      )
  );
};

const Lights = () => (
  <>
    {/* Brighter ambient + hemisphere light for natural fill */}
    <ambientLight intensity={1} />
    <hemisphereLight skyColor={"#ffffff"} groundColor={"#444444"} intensity={0.8} />

    {/* Directional lights closer to model */}
    <directionalLight position={[5, 5, 5]} intensity={2} />
    <spotLight intensity={1.5} position={[10, 10, 10]} castShadow />
  </>
);

const HTMLContent = () => {
  const controls = useRef();
  const mesh = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);

  // Save home camera position + target
  const homeTarget = new THREE.Vector3(0, 0, 0);
  const homePosition = new THREE.Vector3(0, 0, 130); // same as your initial camera position

  useFrame(() => {
    if (!isInteracting && controls.current) {
      controls.current.target.lerp(homeTarget, 0.05);
      controls.current.object.position.lerp(homePosition, 0.05);
      controls.current.update();
    }
  });

  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, 250, 0]}>
        <mesh position={[0, -5, 0]} scale={[670, 670, 670]} ref={mesh}>
          <Center>
            <Model />
          </Center>
          <OrbitControls
            ref={controls}
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            onStart={() => setIsInteracting(true)}
            onEnd={() => setIsInteracting(false)}
          />
        </mesh>
      </group>
    </Section>
  );
};

const CanvasView = () => (
  <div className="canvsView">
    <motion.div
      style={{ width: "100%", height: "100%", position: "relative" }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5, type: "just", stiffness: 120 }}
    >
      <Loader />
      <Canvas
        camera={{ position: [0, 0, 130], fov: 70 }}
        gl={{ outputEncoding: THREE.sRGBEncoding }}
      >
        <Lights />
        <Suspense fallback={null}>
          <HTMLContent />
          {/* Add global realistic lighting */}
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.7, duration: 0.5, type: "just", stiffness: 120 }}
    >
      <AnimatedTxt text="👋 Hi, I’m Sam’s AI. Want to know about Shuaib?" speed={80} />
    </motion.div>

    <motion.p
      className="its_me"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.7, duration: 0.5, type: "just", stiffness: 120 }}
    >
      Hello, I am a full-stack developer based in WA!
    </motion.p>

    <motion.p
      className="i_build"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.9, duration: 0.5, type: "just", stiffness: 120 }}
    >
      I build things for <span>the web.</span>
    </motion.p>
  </div>
);

export default CanvasView;
