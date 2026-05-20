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
  const [activeSection, setActiveSection] = useState('home');

  const sectionColorMap = {
    home: '#ffffff',
    training: '#00ffea',
    classes: '#1e90ff',
    about: '#ffb347',
    contact: '#add8e6',
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['home', 'training', 'classes', 'about', 'contact'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
            setActiveSection(id);
            setColor(sectionColorMap[id as keyof typeof sectionColorMap] || '#ffffff');
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ActiveAR = ARCanvas;

  return (
    <main className="relative w-screen overflow-x-hidden">
      <RightNav />

      {/* AR Canvas Background */}
      <div className="fixed top-[10%] inset-0 z-0">
        <ActiveAR color={color} />
      </div>

      {/* Page Content */}
      <div className="relative z-10 text-white w-screen">
        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen w-screen flex items-center justify-center px-4 sm:px-6 md:px-8 max-md:py-16 mt-32"
        >
          <div className="flex flex-col md:flex-row gap-12 max-w-7xl w-full">
            <div className="flex-1">
              <Homee />
            </div>
          </div>
        </section>

        {/* Training Section */}
        <section
          id="training"
          className="min-h-screen w-screen flex items-center justify-center px-4 sm:px-6 md:px-8 max-md:py-16 mt-20"
        >
          <div className="flex flex-col md:flex-row gap-12 max-w-7xl w-full">
            <div className="flex-1">
              <Training />
            </div>
          </div>
        </section>

        {/* Classes Section */}
        <section
          id="classes"
          className="min-h-screen w-screen flex items-center justify-center px-4 sm:px-6 md:px-8 max-md:py-16 mt-20"
        >
          <div className="flex flex-col md:flex-row gap-12 max-w-7xl w-full">
            <div className="flex-1">
              <Classes />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen w-screen flex items-center justify-center px-4 sm:px-6 md:px-8 max-md:py-16 mt-20"
        >
          <div className="flex flex-col md:flex-row gap-12 max-w-7xl w-full">
            <div className="flex-1">
              <About />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen w-screen flex items-center justify-center px-4 sm:px-6 md:px-8 max-md:py-16 mt-20"
        >
          <div className="flex flex-col md:flex-row gap-12 max-w-7xl w-full">
            <div className="flex-1">
              <Contact />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
