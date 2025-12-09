import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building, MapPin, Award, Briefcase } from 'lucide-react';

/**
 * DeveloperSection — Секция "О Застройщике ТСИ"
 * 
 * Аналог раздела "Команда" на сайте ЖК ОМ.
 * Повышает доверие покупателей, показывая опыт и другие проекты.
 * 
 * Структура:
 * - Логотип/название компании
 * - Краткое описание
 * - Реализованные проекты (карточки)
 * - Контактная информация
 */

// Реализованные проекты ТСИ для демонстрации опыта
const completedProjects = [
    {
        name: 'Дом Франка',
        location: 'Большой Кисельный пер.',
        type: 'Элитный',
        year: '2024',
        image: 'https://frankshouse.ru/project/web/images/main-promo@2x.webp'
    },
    {
        name: 'ЖК Софийский',
        location: 'Софийская набережная',
        type: 'Премиум',
        year: '2023',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsXOaYWHY7F3W4AClsIMrqN5jdu4hT8pYnxA&s'
    },
    {
        name: 'ЖК Сенатор',
        location: 'Проспект Мира',
        type: 'Бизнес',
        year: '2022',
        image: 'https://images.cdn-cian.ru/images/43/410/911/senator-moskva-jk-1190143415-7.jpg'
    },
    {
        name: 'ЖК ОМ',
        location: 'Мичуринский проспект',
        type: 'Бизнес',
        year: '2024',
        image: 'https://zk-om.ru/project/web/images/index/architecture/1-(2).jpg'
    }
];

// Ключевые цифры компании
const companyStats = [
    { value: '15+', label: 'лет на рынке' },
    { value: '12', label: 'реализованных проектов' },
    { value: '500 000', label: 'м² построено' },
    { value: '100%', label: 'сдача в срок' }
];

export const DeveloperSection: React.FC = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-15%' });

    return (
        <section
            id="developer"
            className="relative bg-[#F5F2EB] py-24 md:py-32 overflow-hidden"
        >
            <div ref={containerRef} className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* Заголовок секции */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-16 md:mb-24 text-center"
                >
                    <span className="font-inter text-xs text-oldBronze uppercase tracking-[0.3em] block mb-6">
                        Надёжность и Опыт
                    </span>
                    <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-charcoalOak leading-tight mb-8">
                        Группа компаний <span className="italic text-deepMoss">ТСИ</span>
                    </h2>
                    <p className="font-inter text-lg text-charcoalOak/70 max-w-2xl mx-auto leading-relaxed">
                        Трансстройинвест — строительно-инвестиционный холдинг, реализующий проекты
                        премиального и бизнес-класса в Москве с 2008 года.
                    </p>
                </motion.div>

                {/* Статистика компании */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 md:mb-28"
                >
                    {companyStats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            className="text-center py-8 border-t border-charcoalOak/10"
                        >
                            <span className="font-cormorant text-4xl md:text-5xl text-charcoalOak block mb-2">
                                {stat.value}
                            </span>
                            <span className="font-inter text-xs uppercase tracking-[0.15em] text-charcoalOak/50">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Двухколоночный блок: описание + иконки */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 md:mb-28">

                    {/* Левая колонка — описание */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <h3 className="font-cormorant text-3xl text-charcoalOak mb-8">
                            Полный цикл <span className="italic">девелопмента</span>
                        </h3>
                        <p className="font-inter text-base text-charcoalOak/70 leading-relaxed mb-6">
                            ГК «ТСИ» реализует проекты от проектирования до сдачи под ключ.
                            Собственные строительные мощности, контроль качества на каждом этапе
                            и репутация застройщика, который сдаёт дома в срок.
                        </p>
                        <p className="font-inter text-base text-charcoalOak/70 leading-relaxed">
                            Помимо жилых комплексов, компания участвовала в реконструкции
                            аэропорта Внуково и строительстве скоростной трассы Москва — Санкт-Петербург.
                        </p>
                    </motion.div>

                    {/* Правая колонка — преимущества */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {[
                            { icon: Building, text: 'Собственное строительство' },
                            { icon: MapPin, text: 'Только центр Москвы' },
                            { icon: Award, text: 'Награды в девелопменте' },
                            { icon: Briefcase, text: 'Инвестиционный опыт' }
                        ].map((item, index) => (
                            <div
                                key={item.text}
                                className="flex items-start gap-4 p-6 bg-white/50 border border-charcoalOak/5 hover:border-oldBronze/30 transition-colors duration-300"
                            >
                                <item.icon size={24} className="text-oldBronze shrink-0 mt-1" strokeWidth={1.5} />
                                <span className="font-inter text-sm text-charcoalOak/80">{item.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Реализованные проекты */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <h3 className="font-cormorant text-3xl text-charcoalOak mb-12 text-center">
                        Реализованные <span className="italic text-oldBronze">проекты</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {completedProjects.map((project, index) => (
                            <motion.div
                                key={project.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                                className="group relative overflow-hidden"
                            >
                                {/* Изображение проекта */}
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoalOak/90 via-charcoalOak/20 to-transparent" />

                                    {/* Бейдж типа */}
                                    <span className="absolute top-4 left-4 px-3 py-1 bg-oldBronze/90 text-white font-inter text-[10px] uppercase tracking-wider">
                                        {project.type}
                                    </span>
                                </div>

                                {/* Информация о проекте */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h4 className="font-cormorant text-xl text-limestone mb-1">
                                        {project.name}
                                    </h4>
                                    <div className="flex justify-between items-center">
                                        <span className="font-inter text-xs text-limestone/60">
                                            {project.location}
                                        </span>
                                        <span className="font-inter text-xs text-oldBronze">
                                            {project.year}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
