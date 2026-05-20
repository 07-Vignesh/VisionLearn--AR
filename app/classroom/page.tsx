'use client';

import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

function AnimeClassRoom() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/anime_class_room.glb');

  useEffect(() => {
    if (group.current) {
      group.current.scale.set(1.5, 1.5, 1.5);
      group.current.position.set(0, -1, 0);
    }
  }, []);

  return <primitive ref={group} object={scene} />;
}

export default function ClassroomPage() {
  return (
    <div className="w-screen h-screen bg-black text-white">
      <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 5, 2]} intensity={1.2} />
        <OrbitControls enableZoom={true} />
        <AnimeClassRoom />
      </Canvas>
    </div>
  );
}
