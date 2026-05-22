'use client';

import { useEffect, useState } from 'react';
import ARCanvas from '../components/ARCanva.jsx';
import Contact from '../components/contact';
import Classes from '../components/classes';
import RightNav from '../components/RightNav';
import Training from '../components/training';
import About from '../components/about';
import Homee from '../components/home.jsx';

export default function Home() {
  const [color, setColor] = useState('#ffffff');

  const sectionColorMap: Record<string, string> = {
    home:     '#ffffff',
    training: '#00ffea',
    classes:  '#1e90ff',
    about:    '#ffb347',
    contact:  '#add8e6',
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['home', 'training', 'classes', 'about', 'contact'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight * 0.5 &&
            rect.bottom >= window.innerHeight * 0.5
          ) {
            setColor(sectionColorMap[id] ?? '#ffffff');
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative w-screen overflow-x-hidden">
      {/* Nav */}
      <RightNav />

      {/* AR Canvas — fixed background */}
      <div className="fixed inset-0 top-[10%] z-0 pointer-events-none">
        <ARCanvas color={color} />
      </div>

      {/* Scrollable content */}
      <div className="relative z-10 text-white">

        {/* ── Home ── */}
        <section id="home" className="w-screen">
          <Homee />
        </section>

        {/* ── Training ── */}
        <section id="training" className="w-screen min-h-screen">
          <Training />
        </section>

        {/* ── Classes ── */}
        <section id="classes" className="w-screen min-h-screen">
          <Classes />
        </section>

        {/* ── About ── */}
        <section id="about" className="w-screen min-h-screen">
          <About />
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="w-screen min-h-screen">
          <Contact />
        </section>

      </div>
    </main>
  );
}