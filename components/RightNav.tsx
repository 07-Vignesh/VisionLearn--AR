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
  const [menuOpen, setMenuOpen] = useState(false);

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
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
<div className="flex items-center justify-between px-3 md:px-10 h-24">          
          {/* Logo */}
         {/* Logo */}
<div className="flex items-center">

  <Image
    onClick={() => scrollTo('home')}

    src="/logo2.png"
    alt="VisionLearn AR Logo"
    width={260}
    height={260}
    priority
    className="
      w-auto
      h-20
      sm:h-24
      md:h-28
      lg:h-32
      object-contain
    "
  />

</div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center  gap-2">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-sm px-4 py-2 rounded-md font-medium transition-all duration-300
                  ${active === id
                    ? 'bg-fuchsia-600 text-white shadow-lg shadow-fuchsia-600/30'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}
                `}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center mr-6 items-center w-10 h-10 gap-1.5 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1 px-4 pb-4 pt-1 bg-black/80 backdrop-blur-md">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-sm px-4 py-3 rounded-md font-medium text-left transition-all duration-300
                  ${active === id
                    ? 'bg-fuchsia-600 text-white shadow-lg shadow-fuchsia-600/20'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}
                `}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer so page content doesn't hide under navbar */}
      <div className="h-20" />
    </>
  );
}