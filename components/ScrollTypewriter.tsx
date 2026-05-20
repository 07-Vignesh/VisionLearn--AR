'use client';
import { useEffect, useRef, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function ScrollTypewriter({ words }: { words: string[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger once when it comes into view
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  return (
    <div ref={ref} className="text-4xl font-bold text-white">
      {hasStarted && (
        <Typewriter
          words={words}
          loop={false} // Type only once
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={1000}
          cursor
          cursorStyle="|"
        />
      )}
    </div>
  );
}
