import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-charcoalOak">
      {/* Parallax Background */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute inset-0"
      >
        <img
          src="https://wsrv.nl/?url=https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=75&w=1600&output=webp&il&fit=crop"
          alt="Luxury Abstract Texture"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoalOak/90 via-charcoalOak/20 to-transparent" />
      </motion.div>

      {/* Text Content - Fixed Container Constraints */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 h-full flex flex-col justify-end pb-24 md:pb-32 pointer-events-none">
        <div className="pointer-events-auto max-w-4xl">

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-inter text-xs text-creamyLatte uppercase tracking-[0.4em] mb-8 md:mb-10 pl-1"
          >
            Private Residence • Moscow
          </motion.p>

          {/* Masked H1 */}
          <div className="overflow-hidden mb-10 md:mb-12">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{
                type: 'tween',
                ease: [0.22, 1, 0.36, 1],
                duration: 1.2,
                delay: 0.3,
              }}
              className="font-cormorant text-5xl sm:text-6xl md:text-8xl font-light text-white tracking-[0.1em] md:tracking-[0.2em] leading-none uppercase"
            >
              Levshinsky 19
            </motion.h1>
          </div>

          {/* CTA Button - Glass Pill */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 md:px-12 py-4 md:py-5 rounded-full bg-white/10 backdrop-blur-md text-white font-inter text-[10px] md:text-xs tracking-[0.2em] uppercase transition-colors border border-white/10"
          >
            Познакомиться с проектом
          </motion.button>
        </div>
      </div>

      {/* Subtle Scroll Indicator - Bottom Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 right-6 md:right-12 hidden md:block"
      >
        <span className="text-white/40 font-inter text-[10px] tracking-[0.3em] uppercase writing-vertical-rl rotate-180">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
};