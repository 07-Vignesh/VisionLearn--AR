'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'training', label: 'Training' },
  { id: 'classes', label: 'Classes' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function RightNav() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = 'home';

      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
            currentSection = id;
          }
        }
      });

      setActive(currentSection);
    };

    handleScroll(); // set initial
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Image 
        src="/logo.png" 
        alt="VisionLearn AR Logo" 
        width={200} 
        height={200} 
        className="fixed top-2 sm:-top-4 md:-top-12 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 md:left-12 z-50 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56" 
      />
      <div className="fixed top-22 sm:top-20 md:top-4 right-2 sm:right-4 md:right-4 z-50 flex gap-2 flex-wrap bg-transparent-800 px-4 py-2 rounded-xl shadow-lg backdrop-blur-md   ">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`text-xs sm:text-sm px-2 py-1 rounded-md transition-all duration-300
              ${active === id
                ? 'bg-fuchsia-600 text-white font-semibold'
                : 'bg-gray-700 text-white hover:bg-gray-600 opacity-80'}
            `}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
