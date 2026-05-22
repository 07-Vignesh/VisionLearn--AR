'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import AnimatedText from '../components/AnimatedText';
import Link from 'next/link';

// 3D MODEL
function ExploreModel() {
  const group = useRef();

  const { scene, animations } = useGLTF('/mam.glb');
  const { actions, mixer } = useAnimations(animations, group);

useEffect(() => {

  if (group.current) {

    const isMobile = window.innerWidth < 768;

    if (isMobile) {

      group.current.scale.set(1.05, 1.05, 1.05);
      group.current.position.set(0, -1.2, 0);
      group.current.rotation.set(0, 0, 0);

    } else {

      group.current.scale.set(1.5, 1.5, 1.5);
      group.current.position.set(2, -2, 1);

    }
  }

  if (actions && Object.keys(actions).length > 0) {

    const firstAction = actions[Object.keys(actions)[0]];

    firstAction
      .reset()
      .fadeIn(0.5)
      .play();
  }

}, [actions]);

  useFrame((_, delta) => {
    mixer?.update(delta);
  });

  return <primitive ref={group} object={scene} />;
}

export default function Training() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .training-root {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: transparent;
          color: white;
          font-family: 'DM Sans', sans-serif;
        }

        .training-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px);
          background-size: 55px 55px;
          pointer-events: none;
          z-index: 0;
          mask-image: linear-gradient(to left, black 0%, black 45%, transparent 75%);
        }

        .training-container {
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
          overflow-x: hidden;
        }

     .training-left {
  flex: 1;
  width: 100%;
  height: 80vh;
  min-height: 400px;
}
        .training-right {
          flex: 1;
          max-width: 620px;
          text-align: right;
        }

        .training-badge {
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

        .training-title {
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

        .training-text {
          color: rgba(255,255,255,.58);
          line-height: 1.9;
          font-size: 1rem;
          margin-bottom: 22px;
        }

        .training-features {
          display: grid;
          gap: 14px;
          margin-top: 35px;
          margin-bottom: 40px;
        }

        .feature-card {
          padding: 16px 18px;
          border-radius: 18px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.08);
          backdrop-filter: blur(12px);
          transition: .3s ease;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          border-color: rgba(192,38,211,.45);
          background: rgba(192,38,211,.08);
        }

        .feature-title {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          color: #f0abfc;
          margin-bottom: 6px;
          font-weight: 700;
        }

        .feature-text {
          color: rgba(255,255,255,.5);
          font-size: .92rem;
          line-height: 1.7;
        }

        .training-cta {
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

        .training-cta:hover {
          transform: translateY(-3px);
          opacity: .92;
          box-shadow: 0 8px 40px rgba(192,38,211,.55);
        }

  @media (max-width: 900px) {

  .training-root {
    overflow-x: hidden;
  }

  .training-container {

    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 110px 18px 70px;

    gap: 20px;

    text-align: center;
  }

  .training-left {

    width: 100%;
    height: 42vh;
    min-height: 300px;
  }

  .training-right {

    width: 100%;
    max-width: 100%;

    text-align: center;
  }

  .training-title {

    font-size: clamp(2.3rem, 11vw, 3.8rem);

    line-height: 1.1;

    margin-bottom: 18px;
  }

  .training-text {

    font-size: .95rem;

    line-height: 1.8;

    margin-bottom: 16px;
  }

  .training-features {

    gap: 12px;

    margin-top: 28px;
    margin-bottom: 30px;
  }

  .feature-card {

    padding: 14px 16px;

    text-align: left;
  }

  .feature-title {

    font-size: .95rem;
  }

  .feature-text {

    font-size: .86rem;
  }

  .training-cta {

    width: 100%;

    justify-content: center;

    padding: 14px 20px;
  }

  .training-grid {

    mask-image: none;

    opacity: .35;
  }
}

@media (max-width: 480px) {

  .training-container {

    padding-top: 95px;
  }

  .training-left {

    height: 36vh;
    min-height: 260px;
  }

  .training-title {

    font-size: 2.1rem;
  }

  .training-badge {

    font-size: 9px;

    padding: 7px 14px;
  }
}
      `}</style>

      <div className="training-root">

        <div className="training-grid" />

        <section className="training-container">

          {/* LEFT MODEL */}
<div className="training-left w-full">            
  <Canvas camera={{ position: [10, 1, 5], fov: 50 }} dpr={[1, 1.5]}>
              <ambientLight intensity={0.4} />
              <directionalLight
                position={[-18, -100, 4]}
                intensity={2.5}
              />
              <ExploreModel />
            </Canvas>
          </div>

          {/* RIGHT CONTENT */}
          <AnimatedText>
            <div className="training-right">

              <div className="training-badge">
                <span className="badge-dot" />
                XR Professional Training
              </div>

              <h1 className="training-title">
                Master
                <span className="title-accent">
                  XR Technology
                </span>
              </h1>

              <p className="training-text">
                Our immersive training program helps you master the
                fundamentals of Extended Reality through real-world
                interactive learning experiences.
              </p>

              <p className="training-text">
                Learn how to design, prototype, and deploy advanced AR & VR
                applications using modern frameworks, spatial interaction,
                and real XR hardware.
              </p>

              {/* FEATURES */}
              <div className="training-features">

                <div className="feature-card">
                  <div className="feature-title">
                    ⚡ WebXR Development
                  </div>
                  <div className="feature-text">
                    Build immersive browser-based XR applications using modern tools.
                  </div>
                </div>

                <div className="feature-card">
                  <div className="feature-title">
                    🎮 Three.js & R3F
                  </div>
                  <div className="feature-text">
                    Create real-time interactive 3D scenes and environments.
                  </div>
                </div>

                <div className="feature-card">
                  <div className="feature-title">
                    🥽 Meta Quest & Vision Pro
                  </div>
                  <div className="feature-text">
                    Work directly with next-generation XR hardware and interaction systems.
                  </div>
                </div>

                <div className="feature-card">
                  <div className="feature-title">
                    🚀 XR Deployment
                  </div>
                  <div className="feature-text">
                    Learn to optimize and deploy XR experiences across platforms.
                  </div>
                </div>

              </div>

              <p className="training-text">
                Whether you're a designer, developer, or tech enthusiast —
                these skills will prepare you for the future of immersive computing.
              </p>

              {/* BUTTON */}
              <Link href="/breakroom" className="training-cta">
                Go Training

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
          </AnimatedText>
        </section>
      </div>
    </>
  );
}