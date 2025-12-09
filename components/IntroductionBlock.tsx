import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const IntroductionBlock: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-20%' });

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="introduction" className="relative bg-[#F5F2EB] py-16 md:py-24 overflow-hidden">

      <div
        ref={containerRef}
        className="container mx-auto px-6 md:px-12 lg:px-24"
      >
        {/* Strict 2-Column Grid with Top Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start">

          {/* Left Column - Image (Responsive Aspect Ratio) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <div className="relative aspect-[16/9] md:aspect-[3/4] overflow-hidden w-full">
              <img
                src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1000&auto=format&fit=crop"
                alt="Architectural Detail"
                className="w-full h-full object-cover grayscale-[50%] sepia-[20%]"
                loading="lazy"
              />
              {/* Texture Overlay */}
              <div className="absolute inset-0 bg-[#F5F2EB]/10 mix-blend-color" />
            </div>

            {/* Caption aligned to image bottom */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-4 font-inter text-[10px] uppercase tracking-[0.2em] text-charcoalOak/60 text-right"
            >
              Est. 1910 — Restoration 2025
            </motion.p>
          </motion.div>

          {/* Right Column - Typography (Strictly Top Aligned) */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.2 }}
            className="flex flex-col h-full"
          >
            {/* Headline */}
            <motion.h2
              variants={textVariants}
              className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-charcoalOak leading-[1.05] tracking-tight mb-12 lg:mb-16"
            >
              Место, где история <br />
              <span className="italic opacity-80">обретает форму</span>
            </motion.h2>

            <div className="flex gap-8 lg:gap-12">
              {/* Vertical Divider */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="hidden md:block w-px bg-charcoalOak/20 origin-top shrink-0 h-auto min-h-[200px]"
              />

              {/* Body Text */}
              <div className="space-y-8 max-w-md">
                <motion.div variants={textVariants}>
                  <p className="font-inter text-lg text-charcoalOak/80 leading-[1.8] font-light text-justify">
                    <span className="float-left font-cormorant text-7xl leading-[0.7] mr-4 mt-1 text-oldBronze">Б</span>
                    ольшой Лёвшинский переулок — это не просто адрес. Это культурный код
                    московской интеллигенции, где особняки XIX века соседствуют с галереями
                    современного искусства.
                  </p>
                </motion.div>

                <motion.div variants={textVariants}>
                  <p className="font-inter text-lg text-charcoalOak/80 leading-[1.8] font-light">
                    Здесь тишина центра стоит дороже любого статуса, а принадлежность к месту
                    не требует доказательств. Мы бережно сохранили исторический фасад,
                    наполнив пространство технологиями будущего.
                  </p>
                </motion.div>

                <div className="pt-8 mt-auto border-t border-charcoalOak/10">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-charcoalOak/10">
                      <img
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200"
                        alt="Architect"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-cormorant text-xl text-charcoalOak italic leading-none">
                        Александр В.
                      </p>
                      <p className="font-inter text-[10px] text-oldBronze uppercase tracking-widest mt-1">
                        Ведущий Архитектор
                      </p>
                    </div>
                  </div>
                  <blockquote className="font-inter text-sm text-charcoalOak/60 italic border-l-2 border-oldBronze pl-4">
                    "Мы не просто реставрировали стены. Мы вернули зданию его душу, сохранив каждый исторический штрих для будущих поколений."
                  </blockquote>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};