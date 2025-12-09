import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Maximize2, ArrowRight } from 'lucide-react';

/**
 * GlobalGallerySection — Глобальная галерея проекта
 * 
 * Вдохновлено сайтом ЖК Софийский.
 * Позволяет пользователю изучить проект визуально через категории.
 * 
 * Категории:
 * - Все
 * - Архитектура
 * - Лобби
 * - Интерьеры
 * - Детали
 */

// Данные галереи
const galleryImages = [
    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?q=75&output=webp&il&w=1200',
        category: 'Архитектура',
        title: 'Фасад здания'
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=75&output=webp&il&w=1200',
        category: 'Лобби',
        title: 'Парадный холл'
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=75&output=webp&il&w=1200',
        category: 'Интерьеры',
        title: 'Гостиная пентхауса'
    },
    {
        id: 4,
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=75&output=webp&il&w=1200',
        category: 'Архитектура',
        title: 'Вечерняя подсветка'
    },
    {
        id: 5,
        url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=75&output=webp&il&w=1200',
        category: 'Интерьеры',
        title: 'Мастер-спальня'
    },
    {
        id: 6,
        url: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?q=75&output=webp&il&w=1200',
        category: 'Детали',
        title: 'Фурнитура'
    },
    {
        id: 7,
        url: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=75&output=webp&il&w=1200',
        category: 'Детали',
        title: 'Мраморная отделка'
    },
    {
        id: 8,
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=75&output=webp&il&w=1200',
        category: 'Архитектура',
        title: 'Вид из окна'
    }
];

const categories = ['Все', 'Архитектура', 'Лобби', 'Интерьеры', 'Детали'];

export const GlobalGallerySection: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('Все');
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-10%' });

    const filteredImages = activeCategory === 'Все'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    return (
        <section
            id="gallery"
            className="bg-charcoalOak py-24 md:py-32 overflow-hidden"
        >
            <div ref={containerRef} className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* Заголовок и фильтры */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <span className="font-inter text-xs text-oldBronze uppercase tracking-[0.3em] block mb-6">
                            Визуализация
                        </span>
                        <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-limestone font-light">
                            Галерея <span className="italic text-oldBronze">проекта</span>
                        </h2>
                    </div>

                    {/* Табы */}
                    <div className="flex flex-wrap gap-2 md:gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full font-inter text-xs uppercase tracking-wider transition-all duration-300 border ${activeCategory === cat
                                    ? 'bg-oldBronze border-oldBronze text-white'
                                    : 'bg-transparent border-white/20 text-white/60 hover:border-white/50 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Сетка изображений */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredImages.map((image, index) => (
                            <motion.div
                                layout
                                key={image.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className={`group relative overflow-hidden bg-white/5 ${
                                    // Делаем некоторые фото большими для интересной сетки
                                    (index === 0 || index === 3) ? 'md:col-span-2' : ''
                                    }`}
                            >
                                <img
                                    src={image.url}
                                    alt={image.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                    loading="lazy"
                                />

                                {/* Оверлей при наведении */}
                                <div className="absolute inset-0 bg-charcoalOak/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <span className="font-inter text-[10px] text-oldBronze uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {image.category}
                                    </span>
                                    <div className="flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                        <h3 className="font-cormorant text-2xl text-limestone italic">
                                            {image.title}
                                        </h3>
                                        <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-charcoalOak transition-colors">
                                            <Maximize2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Ссылка на Instagram/Больше фото */}
                <div className="mt-16 text-center">
                    <button className="inline-flex items-center gap-3 text-limestone/60 hover:text-oldBronze transition-colors font-inter text-xs uppercase tracking-widest group">
                        Смотреть все фотографии
                        <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </div>
        </section>
    );
};
