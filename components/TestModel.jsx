// components/TestModel.jsx
'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

function ManModel() {
  const { scene } = useGLTF('/models/manheadset.glb');
  return <primitive object={scene} scale={0.015} position={[0, -1, -4]} />;
}

export default function TestModelViewer() {
  return (
    <Canvas style={{ height: '100vh' }}>
      <ambientLight />
      <Suspense fallback={null}>
        <ManModel />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
