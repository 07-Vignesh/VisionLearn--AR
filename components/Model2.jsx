'use client';

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

export default function Model({ color = '#ffffff' }) {
  const modelRef = useRef();
  const { scene } = useGLTF('/models/quest3_test_model.glb'); // path to model

  // Set target Y position
  const targetY = -0.2;

  // Initialize model Y high
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.y = 2;
    }
  }, []);

  // Color update
  useEffect(() => {
    if (!scene) return;
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color = new THREE.Color(color);
      }
    });
  }, [color, scene]);

  useFrame((state) => {
    if (modelRef.current) {
      // Smooth drop to target Y using lerp
      modelRef.current.position.y = THREE.MathUtils.lerp(
        modelRef.current.position.y,
        targetY + Math.sin(state.clock.getElapsedTime() * 1.5) * 0.2,
        0.020 // animation speed
      );

      // Rotation
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={0.0030}
      position={[-1, 0.006,-1]} // initial Y will be overridden in useEffect
    />
  );
}
