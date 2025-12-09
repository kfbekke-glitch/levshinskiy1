import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Landmark, Clock, Sparkles, Building2 } from 'lucide-react';

/**
 * ArchitectureSection — Секция "Архитектура"
 * 
 * Эта секция рассказывает об архитектурной концепции здания.
 * Вдохновлено структурой сайта "Дом Франка" — у них архитектура
 * вынесена в отдельный полноценный блок с акцентом на историю.
 * 
 * Структура:
 * - Заголовок секции
 * - Два столбца: большое изображение фасада + текст об истории
 * - Три карточки с ключевыми особенностями архитектуры
 */

// Данные об архитектурных особенностях здания
const architecturalFeatures = [
    {
        icon: Clock,
        title: 'История с 1910 года',
        description: 'Здание было построено в начале XX века и бережно реставрировано с сохранением исторических элементов: лепных карнизов, витражей и паркета.'
    },
    {
        icon: Landmark,
        title: 'Московский модерн',
        description: 'Архитектурный стиль сочетает плавные линии модерна с классическими пропорциями. Эркеры и арочные окна создают неповторимый облик.'
    },
    {
        icon: Sparkles,
        title: 'Современные технологии',
        description: 'За историческим фасадом скрываются инженерные системы XXI века: приточная вентиляция Tion, умный дом и повышенная шумоизоляция.'
    }
];

export const ArchitectureSection: React.FC = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-15%' });

    // Варианты анимации для текстовых блоков
    const textVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
        }
    };

    // Варианты анимации для карточек с задержкой
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    return (
        <section
            id="architecture"
            className="relative bg-charcoalOak py-24 md:py-32 overflow-hidden"
        >
            {/* Текстурный оверлей для глубины */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
            />

            <div ref={containerRef} className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* Заголовок секции */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-16 md:mb-24"
                >
                    <span className="font-inter text-xs text-oldBronze uppercase tracking-[0.3em] block mb-6">
                        Архитектура и История
                    </span>
                    <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-limestone leading-tight">
                        Симбиоз <span className="italic text-oldBronze">эпох</span>
                    </h2>
                </motion.div>

                {/* Основной контент: изображение + текст */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 md:mb-28">

                    {/* Левая колонка — Изображение фасада */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                    >
                        <div className="relative aspect-[3/4] overflow-hidden">
                            {/* 
                ВАЖНО: Здесь используется placeholder с Unsplash.
                Для production нужно заменить на реальное фото фасада!
              */}
                            <img
                                src="https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=800&auto=format&fit=crop"
                                alt="Исторический фасад Левшинский 19"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            {/* Градиент для улучшения читаемости подписи */}
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoalOak/60 via-transparent to-transparent" />

                            {/* Декоративная рамка */}
                            <div className="absolute inset-4 border border-oldBronze/30 pointer-events-none" />
                        </div>

                        {/* Подпись под изображением */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="absolute bottom-8 left-8 right-8 font-cormorant text-xl text-limestone italic"
                        >
                            "Фасад, хранящий память столетия"
                        </motion.p>
                    </motion.div>

                    {/* Правая колонка — Текстовый блок */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
                        className="flex flex-col justify-center"
                    >
                        <motion.div variants={textVariants} className="mb-10">
                            <p className="font-inter text-lg md:text-xl text-limestone/80 leading-relaxed font-light">
                                <span className="float-left font-cormorant text-6xl md:text-7xl leading-[0.7] mr-4 mt-2 text-oldBronze">Л</span>
                                евшинский, 19 — это редкий пример бережной реставрации, где каждая деталь исторического
                                здания была сохранена и переосмыслена для современной жизни.
                            </p>
                        </motion.div>

                        <motion.div variants={textVariants} className="mb-10">
                            <p className="font-inter text-base text-limestone/70 leading-relaxed">
                                Оригинальная лепнина потолков, дубовые паркетные полы с рисунком «французская ёлка»,
                                витражные окна прихожих — всё это было восстановлено мастерами-реставраторами
                                с использованием аутентичных технологий начала XX века.
                            </p>
                        </motion.div>

                        <motion.div variants={textVariants} className="mb-10">
                            <p className="font-inter text-base text-limestone/70 leading-relaxed">
                                При этом инженерная начинка дома полностью соответствует требованиям 2025 года:
                                система «умный дом», индивидуальное отопление, приточная вентиляция с очисткой
                                воздуха и бесшумные лифты.
                            </p>
                        </motion.div>

                        {/* Декоративный разделитель */}
                        <motion.div
                            variants={textVariants}
                            className="flex items-center gap-4 mt-6"
                        >
                            <div className="h-px flex-1 bg-oldBronze/30" />
                            <Building2 size={20} className="text-oldBronze" strokeWidth={1} />
                            <div className="h-px flex-1 bg-oldBronze/30" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Карточки с архитектурными особенностями */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {architecturalFeatures.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            custom={index}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={cardVariants}
                            className="group relative bg-graphite/50 border border-oldBronze/20 p-8 md:p-10 hover:border-oldBronze/50 transition-colors duration-500"
                        >
                            {/* Иконка */}
                            <div className="w-14 h-14 rounded-full border border-oldBronze/40 flex items-center justify-center mb-6 group-hover:bg-oldBronze/10 transition-colors duration-500">
                                <feature.icon size={24} className="text-oldBronze" strokeWidth={1} />
                            </div>

                            {/* Заголовок карточки */}
                            <h3 className="font-cormorant text-2xl text-limestone mb-4">
                                {feature.title}
                            </h3>

                            {/* Описание */}
                            <p className="font-inter text-sm text-limestone/60 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Декоративный угловой элемент */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-oldBronze/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
