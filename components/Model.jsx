'use client';

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function Model({ color = '#ffffff' }) {
  const modelRef = useRef();
  const { scene } = useGLTF('models/scene.gltf'); // Your 3D model path

  const mouse = useRef({ x: 0, y: 0 });

  // Setup event listener for mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Initialize model Y position
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.y = 2; // start high
    }
  }, []);

  // Set material color and reduce brightness
 useEffect(() => {
  if (!scene) return;

  // Apply color only after scene is fully loaded
  scene.traverse((child) => {
    if (child.isMesh && child.material) {
      child.material.color.set(color);
      child.material.emissive = new THREE.Color('#111');
      child.material.emissiveIntensity = 0.2;
    }
  });
}, [scene, color]);


  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();

    if (modelRef.current) {
      // Floating animation on Y
      modelRef.current.position.y = THREE.MathUtils.lerp(
        modelRef.current.position.y,
        -0.2 + Math.sin(elapsed * 1.5) * 0.2,
        0.02
      );

      // Mouse-follow effect (gentle tilt)
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        mouse.current.x * 0.5,
        0.05
      );
      modelRef.current.rotation.x = THREE.MathUtils.lerp(
        modelRef.current.rotation.x,
        mouse.current.y * 0.3,
        0.05
      );
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={0.003}
      position={[0, 0.006, -1]}
    />
  );
}
