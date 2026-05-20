'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import AnimatedText from '../components/AnimatedText';
import Link from 'next/link';
// 3D Model
function ExploreModel() {
  const group = useRef();
  const { scene, animations } = useGLTF('/mam.glb');
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    if (group.current) {
      group.current.scale.set(1.5, 1.5, 1.5);
      group.current.position.set(2, -2, 1);
    }
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]];
      firstAction.reset().fadeIn(0.5).play();
    }
  }, [actions]);

  useFrame((_, delta) => {
    mixer?.update(delta);
  });

  return <primitive ref={group} object={scene} />;
}

// Main Component
export default function Training() {
  return (
    <div className="text-white max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <section className="h-auto min-h-screen flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT – 3D Model */}
        <div className="flex-1 w-full h-[50vh] sm:h-[60vh] md:h-[80vh] mt-10 md:mt-0">
          <Canvas camera={{ position: [10, 1, 5], fov: 50 }}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[-18, -100, 4]} intensity={2.5} />
            <ExploreModel />
          </Canvas>
        </div>

        {/* RIGHT – Text */}
        <AnimatedText>
          <div className="flex-1 w-full text-center md:text-right space-y-6 mt-12 md:mt-40  md:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-fuchsia-400">
              Master XR Technology
            </h1>

            

            <p className="text-base sm:text-lg text-gray-300 max-w-md  md:mx-0  lg:w-full lg:mx-90">
              Our hands-on training program will guide you through the core fundamentals of Extended Reality (XR).
              Learn to design, prototype, and build immersive experiences that redefine how people interact with technology.
            </p>

            <p className="text-sm sm:text-base text-gray-400 max-w-md mr-10 md:mx-50  lg:w-full lg:mx-90">
              From head tracking and gesture recognition to spatial interaction, you’ll gain practical experience using real hardware like Meta Quest and Vision Pro.
            </p>

            <ul className="text-sm sm:text-base text-gray-400 space-y-1 list-disc list-inside md:text-right text-left px-4 md:px-0 ">
              <li>Intro to WebXR and AR/VR development</li>
              <li>Using Three.js and React Three Fiber</li>
              <li>Motion, lighting, and interaction design</li>
              <li>Deploying XR apps to web and devices</li>
            </ul>

            <p className="text-fuchsia-300 font-semibold text-sm sm:text-base">
              Whether you're a designer, developer, or tech enthusiast — these skills will put you ahead of the curve.
            </p>

            <div className="flex justify-center md:justify-end">
              <Link href="/breakroom">
              <button className="mt-2 sm:mt-4 px-5 py-2 text-sm bg-fuchsia-600 text-white rounded hover:bg-fuchsia-700 transition">
                Go Training
              </button>
              </Link>
            </div>
          </div>
        </AnimatedText>
      </section>
    </div>
  );
}
