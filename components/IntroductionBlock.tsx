import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, BookOpen, Crown, Palette } from 'lucide-react';

/**
 * IntroductionBlock — Расширенная секция "Место, где история обретает форму"
 * 
 * Включает:
 * - Основной текст о месте
 * - Историю Большого Левшинского переулка
 * - Таймлайн реставрации
 * - Цитату архитектора
 */

// Исторические факты о месте
const historyFacts = [
  {
    year: '1812',
    title: 'Послепожарная Москва',
    description: 'Большой Левшинский переулок получает свое имя. Здесь возводятся первые каменные особняки московской аристократии.'
  },
  {
    year: '1890-е',
    title: 'Золотой век',
    description: 'Переулок становится центром литературной жизни. Здесь бывают Чехов, Толстой, именитые художники и меценаты.'
  },
  {
    year: '1910',
    title: 'Рождение дома',
    description: 'Возводится здание в стиле неоклассицизма. Заказчик — купеческая семья, мечтавшая о "тихом уголке в центре".'
  },
  {
    year: '2023–2025',
    title: 'Реставрация',
    description: 'Бережная реконструкция с сохранением исторического фасада и модернизацией инженерных систем до уровня XXI века.'
  }
];

export const IntroductionBlock: React.FC = () => {
  const containerRef = useRef(null);
  const historyRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-20%' });
  const isHistoryInView = useInView(historyRef, { once: true, margin: '-10%' });

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="introduction" className="relative bg-[#F5F2EB] overflow-hidden">

      {/* ======= ЧАСТЬ 1: Основной блок (оригинальный) ======= */}
      <div
        ref={containerRef}
        className="container mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24"
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

      {/* ======= ЧАСТЬ 2: История Места (НОВОЕ) ======= */}
      <div
        ref={historyRef}
        className="relative bg-charcoalOak py-20 md:py-28"
      >
        {/* Декоративная текстура */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
        />

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">

          {/* Заголовок секции */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHistoryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 md:mb-20"
          >
            <span className="font-inter text-xs text-oldBronze uppercase tracking-[0.3em] block mb-6">
              Наследие
            </span>
            <h3 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-limestone font-light">
              История <span className="italic text-oldBronze">места</span>
            </h3>
            <p className="font-inter text-limestone/60 text-lg mt-6 max-w-2xl leading-relaxed">
              Большой Левшинский переулок — одна из старейших улиц Хамовников.
              Здесь каждый дом хранит память о великих событиях и выдающихся людях.
            </p>
          </motion.div>

          {/* Timeline / Исторические факты */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {historyFacts.map((fact, index) => (
              <motion.div
                key={fact.year}
                initial={{ opacity: 0, y: 40 }}
                animate={isHistoryInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group relative"
              >
                {/* Год */}
                <div className="mb-6">
                  <span className="font-cormorant text-5xl md:text-6xl text-oldBronze/30 font-light group-hover:text-oldBronze transition-colors duration-500">
                    {fact.year}
                  </span>
                </div>

                {/* Линия-разделитель */}
                <div className="h-px bg-limestone/20 mb-6 relative overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isHistoryInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: index * 0.15 + 0.5 }}
                    className="absolute inset-0 bg-oldBronze origin-left"
                  />
                </div>

                {/* Контент */}
                <h4 className="font-cormorant text-2xl text-limestone mb-3 group-hover:text-oldBronze transition-colors duration-300">
                  {fact.title}
                </h4>
                <p className="font-inter text-sm text-limestone/60 leading-relaxed">
                  {fact.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Декоративные иконки / Характеристики места */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHistoryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 pt-16 border-t border-limestone/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { icon: Clock, label: '110+ лет', desc: 'история здания' },
                { icon: BookOpen, label: 'Литературный', desc: 'квартал Москвы' },
                { icon: Crown, label: 'Элитный', desc: 'район с XIX века' },
                { icon: Palette, label: '15+ галерей', desc: 'в шаговой доступности' }
              ].map((item, idx) => (
                <div key={idx} className="text-center md:text-left">
                  <item.icon className="w-8 h-8 text-oldBronze mx-auto md:mx-0 mb-4" strokeWidth={1} />
                  <p className="font-cormorant text-2xl text-limestone mb-1">{item.label}</p>
                  <p className="font-inter text-xs text-limestone/50 uppercase tracking-wider">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};