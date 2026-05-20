'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import AnimatedText from '../components/AnimatedText';

// Apple Vision Pro 3D Model
function AppleVisionModel() {
  const group = useRef();
  const { scene, animations } = useGLTF('/apple_vision_pro (2).glb');
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    if (group.current) {
      group.current.scale.set(12, 12, 12);
      group.current.rotation.set(0, 0, 0);
      group.current.position.set(0, 0, 0);
    }

    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]];
      firstAction.reset().fadeIn(0.5).play();
    }
  }, [actions]);

  useFrame((_, delta) => {
    mixer?.update(delta);

    // 🌟 Add slow Y-axis rotation
    if (group.current) {
      group.current.rotation.y += delta * 0.5; // Adjust speed here
    }
  });

  return <primitive ref={group} object={scene} />;
}

// About Section
export default function About() {
  return (
    <div className="w-screen h-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-8 max-w-7xl mx-auto text-white">
      
      {/* LEFT - 3D Model */}
      <div className="flex-1 w-full h-[50vh] sm:h-[60vh] md:h-[65vh] mb-10 md:mb-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} style={{ background: 'transparent' }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 5, 2]} intensity={1.2} />
          <AppleVisionModel />
        </Canvas>
      </div>

      {/* RIGHT - Text Content */}
      <div className="flex-1 text-center md:text-right space-y-6 md:space-y-10 mt-10 md:mt-40 md:mr-12 px-2">
        <AnimatedText>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-fuchsia-500">
            About Vision Pro
          </h2>
        </AnimatedText>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
          Apple Vision Pro is not just a headset—it's a leap into the future of immersive computing.
          Combining Augmented Reality (AR) and Virtual Reality (VR), it delivers a mixed reality experience like no other.
        </p>

        <p className="text-sm sm:text-base text-gray-400">
          With crystal-clear displays, spatial audio, advanced sensors, and intuitive hand & eye tracking,
          Vision Pro creates a new way to interact with digital content, making you feel truly present in virtual spaces.
        </p>

        <p className="text-sm sm:text-base text-gray-400">
          Whether you're gaming, working, or simply exploring, Vision Pro adapts to your world—
          seamlessly integrating digital elements into real life.
        </p>

        <p className="text-fuchsia-400 font-medium text-sm sm:text-base">
          Welcome to the next dimension of technology.
        </p>
      </div>
    </div>
  );
}
