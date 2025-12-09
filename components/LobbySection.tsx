import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Users, Sparkles } from 'lucide-react';

/**
 * LobbySection — Секция "Лобби и Входные Группы"
 * 
 * Вдохновлено сайтом "Дом Франка", где лобби — отдельная секция
 * с акцентом на роскошь, материалы и атмосферу.
 * 
 * Структура:
 * - Заголовок
 * - Большое изображение лобби с описанием
 * - Три ключевых преимущества
 */

// Преимущества лобби
const lobbyFeatures = [
    {
        icon: Shield,
        title: 'Безопасность 24/7',
        description: 'Профессиональная охрана, видеонаблюдение и контроль доступа обеспечивают абсолютный покой резидентов.'
    },
    {
        icon: Users,
        title: 'Консьерж-сервис',
        description: 'Персональный ассистент решит любые бытовые вопросы — от доставки продуктов до бронирования ресторанов.'
    },
    {
        icon: Sparkles,
        title: 'Клубная атмосфера',
        description: 'Лобби — не просто проходная зона, а место для случайных встреч с соседями в окружении произведений искусства.'
    }
];

export const LobbySection: React.FC = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-15%' });

    return (
        <section
            id="lobby"
            className="relative bg-limestone py-24 md:py-32 overflow-hidden"
        >
            <div ref={containerRef} className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* Заголовок секции — выровнен справа для разнообразия */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-16 md:mb-24 text-left"
                >
                    <span className="font-inter text-xs text-oldBronze uppercase tracking-[0.3em] block mb-6">
                        Входная Группа
                    </span>
                    <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-charcoalOak leading-tight">
                        Первое <span className="italic text-deepMoss">впечатление</span>
                    </h2>
                </motion.div>

                {/* Основной контент: изображение на всю ширину */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mb-16 md:mb-24"
                >
                    <div className="relative aspect-[4/3] md:aspect-[21/9] overflow-hidden">
                        {/* 
              ВАЖНО: Placeholder изображение. 
              Заменить на реальный рендер/фото лобби!
            */}
                        <img
                            src="https://wsrv.nl/?url=https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=75&w=1200&output=webp&il&fit=crop"
                            alt="Лобби клубного дома Левшинский 19"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        {/* Затемнение для текста */}
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-charcoalOak/90 via-charcoalOak/40 to-transparent" />

                        {/* Текст поверх изображения */}
                        <div className="absolute inset-0 flex items-center md:items-center justify-start">
                            <div className="px-8 md:px-16 lg:px-24 max-w-2xl">
                                <motion.h3
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-limestone mb-6 leading-tight"
                                >
                                    Пространство, <br />
                                    <span className="italic text-creamyLatte">созданное для встреч</span>
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{ duration: 1, delay: 0.8 }}
                                    className="font-inter text-sm md:text-base text-limestone/80 leading-relaxed max-w-md"
                                >
                                    Мраморные полы, латунные детали и мягкий свет создают атмосферу
                                    камерного клуба, где каждый резидент — желанный гость.
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Описательный блок */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">

                    {/* Левый столбец — текст */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="flex flex-col justify-center"
                    >
                        <p className="font-inter text-lg text-charcoalOak/80 leading-relaxed mb-8">
                            Входная группа «Левшинского, 19» — это продолжение архитектурной
                            концепции здания. Высокие потолки с лепниной, натуральный камень
                            и тёплое дерево создают ощущение дома с первого шага.
                        </p>
                        <p className="font-inter text-base text-charcoalOak/60 leading-relaxed">
                            Каждая деталь продумана: от акустического комфорта до ароматизации
                            пространства. Резиденция в центре Москвы, где вас узнают в лицо.
                        </p>
                    </motion.div>

                    {/* Правый столбец — декоративный элемент */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="relative aspect-square hidden lg:block"
                    >
                        <div className="absolute inset-0 border border-charcoalOak/10" />
                        <div className="absolute inset-8 border border-oldBronze/20" />
                        <div className="absolute inset-16 bg-sandstone/30" />

                        {/* Центральный текст */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <span className="font-cormorant text-7xl text-charcoalOak/20">19</span>
                                <p className="font-inter text-xs uppercase tracking-[0.3em] text-charcoalOak/40 mt-4">
                                    Резиденций
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Карточки преимуществ */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {lobbyFeatures.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.8,
                                delay: 0.6 + index * 0.15,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="group text-center py-10 border-t border-charcoalOak/10 hover:border-oldBronze/50 transition-colors duration-500"
                        >
                            {/* Иконка */}
                            <div className="w-16 h-16 mx-auto rounded-full border border-charcoalOak/20 flex items-center justify-center mb-6 group-hover:border-oldBronze group-hover:bg-oldBronze/5 transition-all duration-500">
                                <feature.icon size={28} className="text-charcoalOak/60 group-hover:text-oldBronze transition-colors" strokeWidth={1} />
                            </div>

                            {/* Заголовок */}
                            <h3 className="font-cormorant text-2xl text-charcoalOak mb-4">
                                {feature.title}
                            </h3>

                            {/* Описание */}
                            <p className="font-inter text-sm text-charcoalOak/60 leading-relaxed max-w-xs mx-auto">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
