'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import AnimatedText from '../components/AnimatedText';

function AppleVisionModel() {
  const group = useRef();
  const { scene, animations } = useGLTF('/apple_vision_pro (2).glb');
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    if (group.current) {
      group.current.scale.set(12, 12, 12);
      group.current.position.set(0, 0, 0);
    }

    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]];
      firstAction.reset().fadeIn(0.5).play();
    }
  }, [actions]);

  useFrame((_, delta) => {
    mixer?.update(delta);

    if (group.current) {
      group.current.rotation.y += delta * 0.4;
    }
  });

  return <primitive ref={group} object={scene} />;
}

export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .about-root {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          color: white;
          background: transparent;
        }

        .about-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px);
          background-size: 55px 55px;
          pointer-events: none;
          z-index: 0;
        }

        .about-container {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 100vh;
          padding: 100px 70px;
          gap: 40px;
        }

        .about-left {
          flex: 1;
          height: 75vh;
        }

        .about-right {
          flex: 1;
          max-width: 600px;
        }

        .about-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(192,38,211,.12);
          border: 1px solid rgba(192,38,211,.35);
          color: #f0abfc;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 28px;
          backdrop-filter: blur(10px);
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #e879f9;
        }

        .about-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3rem, 5vw, 5rem);
          font-weight: 800;
          line-height: 1.05;
          margin-bottom: 24px;
        }

        .title-accent {
          background: linear-gradient(135deg, #f0abfc 0%, #c026d3 45%, #9333ea 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-text {
          color: rgba(255,255,255,.58);
          line-height: 1.9;
          font-size: 1rem;
          margin-bottom: 22px;
        }

        .about-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 35px;
        }

        .about-card {
          padding: 18px;
          border-radius: 18px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.08);
          backdrop-filter: blur(12px);
          transition: .3s ease;
        }

        .about-card:hover {
          transform: translateY(-5px);
          border-color: rgba(192,38,211,.45);
          background: rgba(192,38,211,.08);
        }

        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 8px;
          color: #f0abfc;
        }

        .card-text {
          font-size: .9rem;
          color: rgba(255,255,255,.5);
          line-height: 1.7;
        }

        @media (max-width: 900px) {
          .about-container {
            flex-direction: column;
            text-align: center;
            padding: 80px 24px;
          }

          .about-left {
            width: 100%;
            height: 50vh;
          }

          .about-right {
            max-width: 100%;
          }

          .about-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="about-root">
        <div className="about-grid" />

        <div className="about-container">

          {/* LEFT SIDE 3D MODEL */}
          <div className="about-left">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.7} />
              <directionalLight position={[2, 5, 2]} intensity={1.4} />
              <AppleVisionModel />
            </Canvas>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="about-right">

            <div className="about-badge">
              <span className="badge-dot" />
              About XR Vision
            </div>

            <AnimatedText>
              <h2 className="about-title">
                The Future of
                <br />
                <span className="title-accent">
                  Immersive Reality
                </span>
              </h2>
            </AnimatedText>

            <p className="about-text">
              XR Vision is built to redefine the way people experience digital
              environments through Augmented Reality, Virtual Reality,
              and real-time 3D interaction.
            </p>

            <p className="about-text">
              Using powerful technologies like Three.js, WebXR, and React Three Fiber,
              we create futuristic immersive experiences that blend creativity,
              innovation, and interactive storytelling.
            </p>

            <p className="about-text">
              From virtual classrooms to AR training systems, our mission is to make
              next-generation technology accessible for developers, creators,
              and learners worldwide.
            </p>

            {/* CARDS */}
            <div className="about-cards">

              <div className="about-card">
                <div className="card-title">⚡ Real-Time XR</div>
                <div className="card-text">
                  Interactive immersive experiences powered by modern 3D rendering.
                </div>
              </div>

              <div className="about-card">
                <div className="card-title">🌐 WebXR Ready</div>
                <div className="card-text">
                  Seamless browser-based AR & VR experiences without limitations.
                </div>
              </div>

              <div className="about-card">
                <div className="card-title">🎯 Creative Learning</div>
                <div className="card-text">
                  Build engaging educational and training environments in XR.
                </div>
              </div>

              <div className="about-card">
                <div className="card-title">🚀 Future Technology</div>
                <div className="card-text">
                  Explore the next evolution of digital interaction and innovation.
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}