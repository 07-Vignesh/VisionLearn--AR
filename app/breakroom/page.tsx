'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

function BreakroomModel() {
  const group = useRef(null); // ✅ FIXED
  const { scene } = useGLTF('/sq_breakroom_-_custom_home.glb');

  return <primitive ref={group} object={scene} />;
}

// Full Page
export default function BreakroomPage() {
  return (
    <main className="h-screen w-screen bg-black text-white">
      <Canvas
        camera={{ position: [2, 2, 5], fov: 50 }}
        shadows
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Suspense fallback={null}>
          <BreakroomModel />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </main>
  );
}
