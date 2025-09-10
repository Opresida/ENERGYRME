
import React, { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-900/50 backdrop-blur-sm z-50">
      <div
        className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      <div
        className="absolute top-0 h-full w-20 bg-gradient-to-r from-emerald-400/60 to-transparent blur-sm"
        style={{ left: `${Math.max(0, scrollProgress - 10)}%` }}
      />
    </div>
  );
}
