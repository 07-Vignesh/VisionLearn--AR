'use client';

import { Canvas } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import AnimatedText from '../components/AnimatedText';
import Link from 'next/link';

function ExploreModel() {
  const group = useRef();
  const { scene, animations } = useGLTF('/oculus_quest_2.glb');
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    if (group.current) {
      group.current.scale.set(2.8, 2.8, 2.8);
      group.current.rotation.set(0, 0, 0); // fixed rotation
      group.current.position.set(0, -1, 0); // fixed position
    }

    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]];
      firstAction.reset().fadeIn(0.5).play();
    }
  }, [actions]);

  return <primitive ref={group} object={scene} />;
}

export default function Classes() {
  return (
    <div className="px-4 w-full sm:px-6 md:px-8">
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto text-white gap-12 md:gap-20 mt-20 md:mt-40">

        {/* LEFT: Text */}
        <div className="flex-1 text-center md:text-left space-y-8 md:space-y-20">
          <AnimatedText>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-fuchsia-500 mb-4">
              Explore the Future
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-md mx-auto md:mx-0">
              Our immersive XR classes are crafted for innovators, designers, and developers who want to push boundaries.
            </p>

            <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto md:mx-0">
              Learn how to build, interact with, and shape virtual and augmented environments using cutting-edge tools like Three.js, Unity, and Unreal Engine.
            </p>

            <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto md:mx-0">
              From basic 3D modeling to full AR/VR development, our courses are structured to fit both beginners and experienced professionals.
            </p>

            <p className="text-fuchsia-400 font-medium text-sm sm:text-base">
              Ready to design your own reality? Join us and start building the future today.
            </p>



          


<Link  href='/classroom'>
            <button className="mt-4 px-4 py-2 text-sm bg-fuchsia-600 text-white rounded hover:bg-fuchsia-700 transition">

              Get Started
            </button>
            </Link>
         
            
          </AnimatedText>
        </div>

        {/* RIGHT: 3D Model */}
        <div className="flex-1 w-full h-[50vh] sm:h-[60vh] md:h-[80vh] mb-20 md:mb-32">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }} style={{ background: 'transparent' }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} />
            <ExploreModel />
          </Canvas>
        </div>
      </section>
    </div>
  );
}
