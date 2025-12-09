import React, { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * SmoothScrollWrapper
 * 
 * Обертка для реализации плавного инерционного скролла через библиотеку Lenis.
 * Создает эффект "премиального" тяжелого скролла.
 */

export const SmoothScrollWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Интеграция с requestAnimationFrame
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full h-full">
      {children}
    </div>
  );
};