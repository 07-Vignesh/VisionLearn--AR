'use client';

import Link from "next/link";
import AnimatedText from '../components/AnimatedText';

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        /* ── Fully transparent — AR canvas shows through ── */
        .hp-root {
          font-family: 'DM Sans', sans-serif;
          color: #fff;
          position: relative;
          background: transparent;
        }

        /* ── Faint grid (left half only, doesn't obscure model) ── */
        .hp-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px);
          background-size: 55px 55px;
          /* fade out before the model area */
          mask-image: linear-gradient(to right, black 0%, black 40%, transparent 70%);
        }

        /* ── Hero: content pinned left, Quest fills right naturally ── */
        .hp-hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          /* Left padding only — right side left open for the 3D model */
          padding: 120px 0 80px 64px;
          max-width: 600px;
          z-index: 1;
        }

        /* ── Badge ── */
        .hp-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 18px;
          background: rgba(192,38,211,.13);
          border: 1px solid rgba(192,38,211,.35);
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          color: #e879f9;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 28px;
          backdrop-filter: blur(8px);
          animation: fade-up .5s ease both;
        }
        .badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #e879f9;
          animation: pulse-dot 1.8s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes pulse-dot {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:.35; transform:scale(.65); }
        }

        /* ── Headline ── */
        .hp-h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3rem, 5.5vw, 5.2rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -.028em;
          margin: 0 0 22px;
          animation: fade-up .6s .1s ease both;
        }
        .line-plain  { display: block; color: #fff; }
        .line-accent {
          display: block;
          background: linear-gradient(135deg, #f0abfc 0%, #c026d3 45%, #9333ea 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Subtitle ── */
        .hp-sub {
          font-size: clamp(.92rem, 1.5vw, 1.08rem);
          color: rgba(255,255,255,.52);
          max-width: 480px;
          margin: 0 0 40px;
          line-height: 1.8;
          animation: fade-up .6s .2s ease both;
        }

        /* ── Feature pills ── */
        .hp-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-bottom: 44px;
          animation: fade-up .6s .3s ease both;
        }
        .hp-pill {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 15px;
          background: rgba(0,0,0,.4);
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 999px;
          font-size: 12.5px;
          color: rgba(255,255,255,.58);
          font-weight: 500;
          backdrop-filter: blur(10px);
          transition: all .22s;
          cursor: default;
        }
        .hp-pill:hover {
          border-color: rgba(192,38,211,.45);
          color: #e879f9;
          background: rgba(192,38,211,.09);
        }

        /* ── CTAs ── */
        .hp-ctas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 64px;
          animation: fade-up .6s .4s ease both;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          background: linear-gradient(135deg, #c026d3, #9333ea);
          border: none;
          border-radius: 13px;
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-size: 14.5px;
          font-weight: 700;
          letter-spacing: .3px;
          cursor: pointer;
          text-decoration: none;
          transition: opacity .2s, transform .18s, box-shadow .2s;
          box-shadow: 0 4px 28px rgba(192,38,211,.38);
        }
        .btn-primary:hover {
          opacity: .87;
          transform: translateY(-2px);
          box-shadow: 0 8px 38px rgba(192,38,211,.52);
        }
        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 26px;
          background: rgba(0,0,0,.35);
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 13px;
          color: rgba(255,255,255,.65);
          font-family: 'DM Sans', sans-serif;
          font-size: 14.5px;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          backdrop-filter: blur(10px);
          transition: all .22s;
        }
        .btn-ghost:hover {
          border-color: rgba(192,38,211,.5);
          color: #e879f9;
          background: rgba(192,38,211,.08);
        }

        /* ── Stats ── */
        .hp-stats {
          display: flex;
          gap: 0;
          border-top: 1px solid rgba(255,255,255,.07);
          padding-top: 32px;
          animation: fade-up .7s .5s ease both;
        }
        .hp-stat {
          padding-right: 28px;
          position: relative;
        }
        .hp-stat + .hp-stat {
          padding-left: 28px;
          border-left: 1px solid rgba(255,255,255,.07);
        }
        .stat-num {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.5rem, 2.5vw, 1.85rem);
          font-weight: 800;
          background: linear-gradient(135deg, #f0abfc, #c026d3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
          margin-bottom: 3px;
        }
        .stat-label {
          font-size: 10.5px;
          color: rgba(255,255,255,.3);
          letter-spacing: .7px;
          text-transform: uppercase;
          font-weight: 500;
        }

        /* ── Scroll hint ── */
        .scroll-hint {
          position: absolute;
          bottom: 32px;
          left: 64px;
          display: flex;
          align-items: center;
          gap: 10px;
          opacity: .28;
          animation: fade-up 1s .9s ease both;
        }
        .scroll-line {
          width: 40px; height: 1px;
          background: linear-gradient(to right, rgba(255,255,255,.8), transparent);
          animation: line-grow 2s ease-in-out infinite;
        }
        .scroll-txt {
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,.5);
        }
        @keyframes line-grow {
          0%   { transform: scaleX(0); transform-origin: left; opacity:0; }
          50%  { transform: scaleX(1); transform-origin: left; opacity:1; }
          100% { transform: scaleX(1); transform-origin: right; opacity:0; }
        }

        /* ── Shared ── */
        @keyframes fade-up {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* ── Mobile ── */
       @media (max-width: 768px) {

  .hp-root {
    overflow-x: hidden;
  }

  .hp-hero {
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 120px 20px 70px;
    max-width: 100%;
    width: 100%;
    min-height: 100vh;
  }

  .hp-h1 {
    font-size: clamp(2.5rem, 12vw, 4rem);
    line-height: 1.08;
    margin-bottom: 18px;
  }

  .hp-sub {
    max-width: 100%;
    font-size: .95rem;
    line-height: 1.8;
    margin-bottom: 32px;
    padding: 0 4px;
  }

  .hp-pills {
    justify-content: center;
    gap: 10px;
    margin-bottom: 36px;
  }

  .hp-pill {
    font-size: 11px;
    padding: 8px 12px;
  }

  .hp-ctas {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    margin-bottom: 48px;
  }

  .btn-primary,
  .btn-ghost {
    width: 100%;
    max-width: 280px;
    justify-content: center;
    padding: 14px 20px;
  }

  .hp-stats {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 22px;
    padding-top: 28px;
  }

  .hp-stat {
    padding: 0;
    border: none !important;
    width: 40%;
    text-align: center;
  }

  .hp-stat + .hp-stat {
    padding-left: 0;
    border-left: none;
  }

  .stat-num {
    font-size: 1.6rem;
  }

  .stat-label {
    font-size: 10px;
  }

  .scroll-hint {
    display: none;
  }

  .hp-grid {
    mask-image: none;
    opacity: .4;
  }
}

       @media (max-width: 480px) {

  .hp-hero {
    padding: 110px 16px 60px;
  }

  .hp-h1 {
    font-size: 2.3rem;
  }

  .hp-pill {
    width: auto;
    white-space: nowrap;
  }

  .hp-stats {
    gap: 18px;
  }

  .hp-stat {
    width: 45%;
  }
}
      `}</style>

      <div className="hp-root">
        <section className="hp-hero">
          <div className="hp-grid" />

          {/* Badge */}
          <div className="hp-badge">
            <span className="badge-dot" />
            XR Vision — Next-Gen Immersive Tech
          </div>

          {/* Headline */}
          <h1 className="hp-h1">
            <span className="line-plain">Explore the</span>
            <span className="line-accent">Future of Reality</span>
          </h1>

          {/* Subtitle */}
          <p className="hp-sub">
            Dive into cutting-edge XR technology where reality bends and possibilities expand.
            Build the next generation of immersive digital experiences — where creativity meets innovation.
          </p>

          {/* Feature pills */}
          <div className="hp-pills">
            <div className="hp-pill"><span>⚡</span> AR &amp; VR Training</div>
            <div className="hp-pill"><span>⚙️</span> Real-Time 3D</div>
            <div className="hp-pill"><span>🌐</span> WebXR · Three.js · R3F</div>
            <div className="hp-pill"><span>🎯</span> For Devs &amp; Creators</div>
          </div>

          {/* CTAs */}
          <div className="hp-ctas">
            <Link href="/classroom" className="btn-primary">
              Get Started
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
            <Link href="#contact" className="btn-ghost">
              Contact Us
            </Link>
          </div>

          {/* Stats */}
          <div className="hp-stats">
            <div className="hp-stat">
              <div className="stat-num">50+</div>
              <div className="stat-label">XR Courses</div>
            </div>
            <div className="hp-stat">
              <div className="stat-num">10k+</div>
              <div className="stat-label">Learners</div>
            </div>
            <div className="hp-stat">
              <div className="stat-num">3</div>
              <div className="stat-label">Frameworks</div>
            </div>
            <div className="hp-stat">
              <div className="stat-num">∞</div>
              <div className="stat-label">Possibilities</div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="scroll-hint">
            <span className="scroll-line" />
            <span className="scroll-txt">Scroll</span>
          </div>
        </section>
      </div>
    </>
  );
}