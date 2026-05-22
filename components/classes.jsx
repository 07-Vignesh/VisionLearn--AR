'use client';

import { Canvas } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import AnimatedText from '../components/AnimatedText';
import Link from 'next/link';

function ExploreModel() {
  const group = useRef();
  const { scene, animations } = useGLTF('/oculus_quest_2.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (group.current) {
      group.current.scale.set(2.8, 2.8, 2.8);
      group.current.rotation.set(0, 0, 0);
      group.current.position.set(0, -1, 0);
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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .classes-root {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: transparent;
          color: white;
          font-family: 'DM Sans', sans-serif;
        }

        .classes-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px);
          background-size: 55px 55px;
          pointer-events: none;
          z-index: 0;
          mask-image: linear-gradient(to right, black 0%, black 45%, transparent 75%);
        }

        .classes-container {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: auto;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          padding: 100px 70px;
        }

        .classes-left {
          flex: 1;
          max-width: 620px;
        }

        .classes-right {
          flex: 1;
          height: 80vh;
        }

        .classes-badge {
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
          animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
          0%,100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: .4;
            transform: scale(.7);
          }
        }

        .classes-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3rem, 5vw, 5rem);
          font-weight: 800;
          line-height: 1.05;
          margin-bottom: 24px;
        }

        .title-accent {
          display: block;
          background: linear-gradient(135deg, #f0abfc 0%, #c026d3 45%, #9333ea 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .classes-text {
          color: rgba(255,255,255,.58);
          line-height: 1.9;
          font-size: 1rem;
          margin-bottom: 22px;
          max-width: 560px;
        }

        .classes-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 30px;
          margin-bottom: 40px;
        }

        .classes-pill {
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
          color: rgba(255,255,255,.6);
          font-size: 13px;
          backdrop-filter: blur(10px);
          transition: .3s ease;
        }

        .classes-pill:hover {
          border-color: rgba(192,38,211,.45);
          color: #f0abfc;
          background: rgba(192,38,211,.08);
        }

        .classes-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 15px 32px;
          border-radius: 14px;
          background: linear-gradient(135deg, #c026d3, #9333ea);
          color: white;
          text-decoration: none;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          transition: .3s ease;
          box-shadow: 0 4px 28px rgba(192,38,211,.38);
        }

        .classes-cta:hover {
          transform: translateY(-3px);
          opacity: .9;
          box-shadow: 0 8px 40px rgba(192,38,211,.55);
        }

        @media (max-width: 900px) {
          .classes-container {
            flex-direction: column;
            text-align: center;
            padding: 90px 24px;
          }

          .classes-left {
            max-width: 100%;
          }

          .classes-right {
            width: 100%;
            height: 55vh;
          }

          .classes-pills {
            justify-content: center;
          }

          .classes-grid {
            mask-image: none;
            opacity: .5;
          }
        }
      `}</style>

      <div className="classes-root">

        <div className="classes-grid" />

        <section className="classes-container">

          {/* LEFT CONTENT */}
          <div className="classes-left">

            <div className="classes-badge">
              <span className="badge-dot" />
              XR Learning Experience
            </div>

            <AnimatedText>
              <h1 className="classes-title">
                Explore the
                <span className="title-accent">
                  Future of XR
                </span>
              </h1>
            </AnimatedText>

            <p className="classes-text">
              Our immersive XR classes are crafted for innovators,
              designers, and developers who want to push the boundaries
              of interactive digital experiences.
            </p>

            <p className="classes-text">
              Learn how to build virtual and augmented reality applications
              using modern technologies like Three.js, WebXR,
              React Three Fiber, Unity, and Unreal Engine.
            </p>

            <p className="classes-text">
              From beginner-friendly 3D environments to advanced AR/VR systems,
              our courses help you master the future of immersive development.
            </p>

            {/* FEATURE PILLS */}
            <div className="classes-pills">
              <div className="classes-pill">⚡ AR & VR Development</div>
              <div className="classes-pill">🌐 WebXR Experiences</div>
              <div className="classes-pill">🎮 Real-Time 3D</div>
              <div className="classes-pill">🚀 Interactive Learning</div>
            </div>

            {/* CTA */}
            <Link href="/classroom" className="classes-cta">
              Get Started
              <svg
                width="15"
                height="15"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* RIGHT MODEL */}
          <div className="classes-right">
            <Canvas
              camera={{ position: [0, 0, 5], fov: 45 }}
              style={{ background: 'transparent' }}
            >
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 5, 5]} intensity={1.5} />
              <ExploreModel />
            </Canvas>
          </div>
        </section>
      </div>
    </>
  );
}