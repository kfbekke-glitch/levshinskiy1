import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Maximize2, ArrowRight, X } from 'lucide-react';

/**
 * GlobalGallerySection — Расширенная галерея проекта с категоризацией
 * 
 * Категории:
 * - Все
 * - Фасады
 * - Лобби
 * - Интерьеры
 * - Территория
 * - Виды из окон
 * - Детали
 */

// Расширенные данные галереи
const galleryImages = [
    // === ФАСАДЫ ===
    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?q=75&w=1200',
        category: 'Фасады',
        title: 'Главный фасад'
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=75&w=1200',
        category: 'Фасады',
        title: 'Вечерняя подсветка'
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=75&w=1200',
        category: 'Фасады',
        title: 'Архитектурные детали'
    },
    {
        id: 4,
        url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=75&w=1200',
        category: 'Фасады',
        title: 'Классические формы'
    },

    // === ЛОББИ ===
    {
        id: 5,
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=75&w=1200',
        category: 'Лобби',
        title: 'Парадный холл'
    },
    {
        id: 6,
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=75&w=1200',
        category: 'Лобби',
        title: 'Зона ресепшен'
    },
    {
        id: 7,
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=75&w=1200',
        category: 'Лобби',
        title: 'Мраморные полы'
    },
    {
        id: 8,
        url: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=75&w=1200',
        category: 'Лобби',
        title: 'Дизайнерское освещение'
    },

    // === ИНТЕРЬЕРЫ ===
    {
        id: 9,
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=75&w=1200',
        category: 'Интерьеры',
        title: 'Гостиная пентхауса'
    },
    {
        id: 10,
        url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=75&w=1200',
        category: 'Интерьеры',
        title: 'Мастер-спальня'
    },
    {
        id: 11,
        url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=75&w=1200',
        category: 'Интерьеры',
        title: 'Ванная комната'
    },
    {
        id: 12,
        url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=75&w=1200',
        category: 'Интерьеры',
        title: 'Кухня с островом'
    },
    {
        id: 13,
        url: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=75&w=1200',
        category: 'Интерьеры',
        title: 'Столовая зона'
    },
    {
        id: 14,
        url: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=75&w=1200',
        category: 'Интерьеры',
        title: 'Рабочий кабинет'
    },

    // === ТЕРРИТОРИЯ ===
    {
        id: 15,
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=75&w=1200',
        category: 'Территория',
        title: 'Приватный двор'
    },
    {
        id: 16,
        url: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=75&w=1200',
        category: 'Территория',
        title: 'Ландшафтный дизайн'
    },
    {
        id: 17,
        url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=75&w=1200',
        category: 'Территория',
        title: 'Подземный паркинг'
    },
    {
        id: 18,
        url: 'https://images.unsplash.com/photo-1551361415-69c87624334f?q=75&w=1200',
        category: 'Территория',
        title: 'Парадный въезд'
    },

    // === ВИДЫ ИЗ ОКОН ===
    {
        id: 19,
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=75&w=1200',
        category: 'Виды из окон',
        title: 'Панорама на переулок'
    },
    {
        id: 20,
        url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=75&w=1200',
        category: 'Виды из окон',
        title: 'Вид на ХХС'
    },
    {
        id: 21,
        url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=75&w=1200',
        category: 'Виды из окон',
        title: 'Московские крыши'
    },
    {
        id: 22,
        url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=75&w=1200',
        category: 'Виды из окон',
        title: 'Закат над городом'
    },

    // === ДЕТАЛИ ===
    {
        id: 23,
        url: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?q=75&w=1200',
        category: 'Детали',
        title: 'Премиум фурнитура'
    },
    {
        id: 24,
        url: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=75&w=1200',
        category: 'Детали',
        title: 'Мраморная отделка'
    },
    {
        id: 25,
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=75&w=1200',
        category: 'Детали',
        title: 'Дубовый паркет'
    },
    {
        id: 26,
        url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=75&w=1200',
        category: 'Детали',
        title: 'Лепнина и молдинги'
    }
];

const categories = ['Все', 'Фасады', 'Лобби', 'Интерьеры', 'Территория', 'Виды из окон', 'Детали'];

export const GlobalGallerySection: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('Все');
    const [lightboxImage, setLightboxImage] = useState<typeof galleryImages[0] | null>(null);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-10%' });

    const filteredImages = activeCategory === 'Все'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    // Определяем какие изображения делать большими (первое в каждой категории или специальные)
    const getLargeIndices = () => {
        if (activeCategory === 'Все') {
            return [0, 4, 8, 14, 18, 22]; // Первые фото каждой категории
        }
        return [0]; // Первое фото при фильтрации
    };

    const largeIndices = getLargeIndices();

    return (
        <>
            <section
                id="gallery"
                className="bg-charcoalOak py-24 md:py-32 overflow-hidden"
            >
                <div ref={containerRef} className="container mx-auto px-6 md:px-12 lg:px-24">

                    {/* Заголовок и статистика */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
                        <div>
                            <span className="font-inter text-xs text-oldBronze uppercase tracking-[0.3em] block mb-6">
                                Визуализация
                            </span>
                            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-limestone font-light">
                                Галерея <span className="italic text-oldBronze">проекта</span>
                            </h2>
                            <p className="font-inter text-limestone/50 text-sm mt-4 max-w-md">
                                {galleryImages.length} изображений в {categories.length - 1} категориях.
                                Исследуйте каждую деталь проекта.
                            </p>
                        </div>

                        {/* Счётчик активной категории */}
                        <div className="text-right hidden lg:block">
                            <span className="font-cormorant text-5xl text-oldBronze">
                                {filteredImages.length}
                            </span>
                            <p className="font-inter text-xs text-limestone/40 uppercase tracking-wider mt-1">
                                {activeCategory === 'Все' ? 'всего фото' : 'фото в категории'}
                            </p>
                        </div>
                    </div>

                    {/* Табы категорий */}
                    <div className="flex flex-wrap gap-2 md:gap-3 mb-12">
                        {categories.map((cat) => {
                            const count = cat === 'Все'
                                ? galleryImages.length
                                : galleryImages.filter(img => img.category === cat).length;

                            return (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-5 py-2.5 rounded-full font-inter text-xs uppercase tracking-wider transition-all duration-300 border flex items-center gap-2 ${activeCategory === cat
                                            ? 'bg-oldBronze border-oldBronze text-white'
                                            : 'bg-transparent border-white/20 text-white/60 hover:border-white/50 hover:text-white'
                                        }`}
                                >
                                    {cat}
                                    <span className={`text-[10px] ${activeCategory === cat ? 'text-white/70' : 'text-white/40'}`}>
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Сетка изображений */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[280px] md:auto-rows-[320px]"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredImages.map((image, index) => (
                                <motion.div
                                    layout
                                    key={image.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.03 }}
                                    onClick={() => setLightboxImage(image)}
                                    className={`group relative overflow-hidden bg-white/5 cursor-pointer ${largeIndices.includes(index) ? 'md:col-span-2 md:row-span-1' : ''
                                        }`}
                                >
                                    <img
                                        src={image.url}
                                        alt={image.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                        loading="lazy"
                                    />

                                    {/* Оверлей при наведении */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoalOak/80 via-charcoalOak/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                                        <span className="font-inter text-[10px] text-oldBronze uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                            {image.category}
                                        </span>
                                        <div className="flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                            <h3 className="font-cormorant text-xl md:text-2xl text-limestone italic">
                                                {image.title}
                                            </h3>
                                            <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-charcoalOak transition-colors shrink-0 ml-4">
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

            {/* Lightbox / Просмотрщик изображений */}
            <AnimatePresence>
                {lightboxImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightboxImage(null)}
                        className="fixed inset-0 z-[9999] bg-charcoalOak/95 flex items-center justify-center p-4 md:p-8"
                    >
                        {/* Кнопка закрытия */}
                        <button
                            onClick={() => setLightboxImage(null)}
                            className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-charcoalOak transition-colors z-10"
                        >
                            <X size={20} />
                        </button>

                        {/* Изображение */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-6xl max-h-[85vh] w-full"
                        >
                            <img
                                src={lightboxImage.url.replace('w=1200', 'w=1920')}
                                alt={lightboxImage.title}
                                className="w-full h-full object-contain"
                            />

                            {/* Подпись */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoalOak/80 to-transparent">
                                <span className="font-inter text-[10px] text-oldBronze uppercase tracking-widest block mb-2">
                                    {lightboxImage.category}
                                </span>
                                <h3 className="font-cormorant text-2xl md:text-3xl text-limestone italic">
                                    {lightboxImage.title}
                                </h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
