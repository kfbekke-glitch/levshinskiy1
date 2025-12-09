import React from 'react';
import { motion } from 'framer-motion';
import { Star, Wind, Car, Lock, Wifi, Sparkles, Trees, Coffee } from 'lucide-react';

/**
 * AmenitiesSection — Секция "Привилегии жизни" (Улучшенная версия)
 * 
 * Изменения:
 * 1. Добавлено больше услуг и деталей (вдохновлено Дом Франка)
 * 2. Новая сетка: 2 больших изображения + 6 карточек услуг
 * 3. Добавлены иконки для каждой услуги
 * 4. Улучшены hover-эффекты
 */

// Расширенный список услуг и привилегий
const amenities = [
  {
    icon: Wind,
    title: 'Приточная вентиляция',
    description: 'Система очистки воздуха Tion в каждой квартире. Датчики CO2 и влажности.'
  },
  {
    icon: Lock,
    title: 'Охрана 24/7',
    description: 'Профессиональная служба безопасности, видеонаблюдение и контроль доступа.'
  },
  {
    icon: Car,
    title: 'Valet-паркинг',
    description: 'Подземный паркинг с лифтом. Valet-сервис для гостей резидентов.'
  },
  {
    icon: Wifi,
    title: 'Умный дом',
    description: 'Готовая инфраструктура для систем автоматизации и управления климатом.'
  },
  {
    icon: Sparkles,
    title: 'Консьерж-сервис',
    description: 'Персональный ассистент для решения бытовых вопросов и бронирований.'
  },
  {
    icon: Trees,
    title: 'Приватный сад',
    description: 'Ландшафтный дизайн во внутреннем дворе. Зона отдыха только для резидентов.'
  }
];

export const AmenitiesSection: React.FC = () => {
  return (
    <section
      id="amenities"
      className="bg-[#F5F2EB] py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-charcoalOak/5"
    >
      <div className="container mx-auto">

        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        >
          <div>
            <span className="font-inter text-xs text-oldBronze uppercase tracking-[0.3em] block mb-4">
              Сервис и Атмосфера
            </span>
            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-charcoalOak">
              Привилегии <span className="italic text-oldBronze">жизни</span>
            </h2>
          </div>
          <p className="font-inter text-sm text-charcoalOak/60 max-w-sm leading-relaxed">
            Всё, что нужно для комфортной жизни, продумано до мелочей и реализовано
            на уровне лучших клубных домов мира.
          </p>
        </motion.div>

        {/* Основная сетка: 2 изображения + текстовый блок */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">

          {/* Изображение 1: Клубная гостиная */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative h-[400px] md:h-[500px] overflow-hidden bg-charcoalOak"
          >
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop"
              alt="Клубная гостиная"
              className="w-full h-full object-cover opacity-90 transition-transform duration-[1.5s] ease-[0.22,1,0.36,1] group-hover:scale-105 grayscale-[20%]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoalOak/90 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-3 mb-3">
                <Coffee size={18} className="text-oldBronze" strokeWidth={1.5} />
                <span className="font-inter text-[10px] text-oldBronze uppercase tracking-widest">
                  Общественные пространства
                </span>
              </div>
              <h3 className="font-cormorant text-3xl text-limestone italic mb-2">
                Клубная гостиная
              </h3>
              <div className="h-px w-12 bg-limestone/50 mb-3" />
              <p className="font-inter text-xs text-limestone/80 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Каминный зал для частных встреч и мероприятий. Библиотека с коллекцией
                редких изданий. Бар с авторскими напитками.
              </p>
            </div>
          </motion.div>

          {/* Центральный блок: сервис */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="h-[400px] md:h-[500px] bg-charcoalOak border border-oldBronze/30 p-8 md:p-10 flex flex-col justify-center items-center text-center group relative overflow-hidden"
          >
            {/* Текстурный оверлей */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
              style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
            />

            <div className="w-16 h-16 rounded-full border border-oldBronze flex items-center justify-center text-oldBronze mb-8 group-hover:scale-110 transition-transform duration-500 z-10">
              <Star size={28} strokeWidth={1} />
            </div>

            <h3 className="font-cormorant text-3xl md:text-4xl text-limestone mb-6 z-10">
              Сервис <br /> <span className="italic text-oldBronze">24/7</span>
            </h3>

            <div className="w-10 h-px bg-oldBronze mb-6 z-10" />

            <p className="font-inter text-sm text-limestone/70 leading-relaxed font-light max-w-xs z-10 mb-8">
              Персональный ассистент решит любую задачу: от бронирования
              ресторана до организации частного мероприятия.
            </p>

            {/* Список услуг */}
            <ul className="font-inter text-xs text-limestone/50 space-y-2 z-10">
              <li>• Доставка и курьерские услуги</li>
              <li>• Химчистка и клининг</li>
              <li>• Бронирование и билеты</li>
            </ul>
          </motion.div>

          {/* Изображение 2: Приватный сад */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative h-[400px] md:h-[500px] overflow-hidden bg-charcoalOak"
          >
            <img
              src="https://images.unsplash.com/photo-1559767949-0faa5c7e9992?q=80&w=800"
              alt="Приватный сад"
              className="w-full h-full object-cover opacity-90 transition-transform duration-[1.5s] ease-[0.22,1,0.36,1] group-hover:scale-105 grayscale-[20%]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoalOak/90 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-3 mb-3">
                <Trees size={18} className="text-oldBronze" strokeWidth={1.5} />
                <span className="font-inter text-[10px] text-oldBronze uppercase tracking-widest">
                  Природа в городе
                </span>
              </div>
              <h3 className="font-cormorant text-3xl text-limestone italic mb-2">
                Приватный сад
              </h3>
              <div className="h-px w-12 bg-limestone/50 mb-3" />
              <p className="font-inter text-xs text-limestone/80 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Ландшафтный дизайн от бюро с мировым именем. Живые изгороди,
                многолетние деревья и зона для медитации.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Сетка услуг: 6 карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex items-start gap-5 p-6 bg-white/50 border border-charcoalOak/5 hover:border-oldBronze/30 hover:bg-white transition-all duration-300"
            >
              {/* Иконка */}
              <div className="w-12 h-12 shrink-0 rounded-full border border-charcoalOak/10 flex items-center justify-center group-hover:border-oldBronze group-hover:bg-oldBronze/5 transition-all duration-300">
                <amenity.icon
                  size={20}
                  className="text-charcoalOak/50 group-hover:text-oldBronze transition-colors"
                  strokeWidth={1.5}
                />
              </div>

              {/* Контент */}
              <div>
                <h4 className="font-cormorant text-xl text-charcoalOak mb-2">
                  {amenity.title}
                </h4>
                <p className="font-inter text-xs text-charcoalOak/60 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};