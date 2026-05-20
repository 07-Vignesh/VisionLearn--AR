'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Float } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import AnimatedText from '../components/AnimatedText';

export default function Home() {
  return (
    <div className="text-white">
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 gap-10 max-w-7xl mx-auto">

        {/* LEFT – Text */}
        <div className="flex-1 z-10 text-left mt-16 sm:mt-20 max-md:text-center max-md:px-2">
          <AnimatedText>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-pink-500 mb-6 leading-tight">
              Explore the Future
            </h1>

            <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-md mx-auto md:mx-0">
              Dive into cutting-edge XR technology, where reality bends and possibilities expand.
              Join us in building the next generation of immersive digital experiences — where creativity meets innovation.
            </p>

            <div className="text-sm sm:text-base text-gray-400 mb-6 space-y-3 max-w-md mx-auto md:mx-0">
              <p>⚡ Learn Augmented Reality and Virtual Reality from experts</p>
              <p>⚙️ Hands-on with real-time 3D modeling & interaction design</p>
              <p>🌐 Powered by WebXR, Three.js, and React Three Fiber</p>
              <p>🎯 Designed for developers, creators, and dreamers</p>
            </div>

            <div className="flex justify-center md:justify-start">
              <button className="px-6 py-2 bg-pink-600 hover:bg-pink-700 transition rounded text-white text-sm">
                Get Started
              </button>
            </div>
          </AnimatedText>
        </div>

        {/* RIGHT – Optional Placeholder / Model */}
        <div className="flex-1 hidden md:block" />

      </section>
    </div>
  );
}
