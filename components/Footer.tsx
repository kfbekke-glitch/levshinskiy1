import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowUpRight, Clock } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenAgreement: () => void;
}

// Ссылки меню
const menuLinks = [
  { label: 'О проекте', href: '#introduction' },
  { label: 'Архитектура', href: '#architecture' },
  { label: 'О застройщике', href: '#developer' },
  { label: 'Квартиры', href: '#apartments' },
  { label: 'Расположение', href: '#location' },
  { label: 'Покупка', href: '#purchase' },
];

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenAgreement }) => {

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-charcoalOak py-20 md:py-24 px-6 md:px-12 lg:px-24 text-limestone">
      <div className="container mx-auto">

        {/* Верхняя часть: 4 колонки */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Колонка 1: Логотип и описание */}
          <div className="lg:col-span-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-cormorant text-3xl md:text-4xl mb-6"
            >
              Лёвшинский, 19
            </motion.h2>
            <p className="font-inter text-sm text-limestone/60 leading-relaxed mb-6">
              Клубный дом в сердце Хамовников. <br />
              Искусство жить в тишине.
            </p>

            {/* Режим работы */}
            <div className="flex items-center gap-3 text-limestone/50">
              <Clock size={14} />
              <span className="font-inter text-xs">Офис продаж: 10:00 — 20:00</span>
            </div>
          </div>

          {/* Колонка 2: Контакты */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-[0.2em] text-oldBronze mb-6">
              Контакты
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+79805470406"
                  className="flex items-center gap-3 font-inter text-sm hover:text-oldBronze transition-colors group"
                >
                  <Phone size={14} className="text-oldBronze" />
                  <span>+7 (980) 547-04-06</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:levshinsky19@yandex.ru"
                  className="flex items-center gap-3 font-inter text-sm hover:text-oldBronze transition-colors"
                >
                  <Mail size={14} className="text-oldBronze" />
                  <span>levshinsky19@yandex.ru</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 font-inter text-sm text-limestone/80">
                  <MapPin size={14} className="text-oldBronze mt-0.5 shrink-0" />
                  <span>
                    119034, Москва,<br />
                    Большой Лёвшинский пер., 19
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Колонка 3: Меню */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-[0.2em] text-oldBronze mb-6">
              Навигация
            </h4>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="font-inter text-sm hover:text-oldBronze transition-colors flex items-center gap-2 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Колонка 4: Документы */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-[0.2em] text-oldBronze mb-6">
              Документы
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="font-inter text-sm text-limestone/70 hover:text-oldBronze transition-colors flex items-center gap-2 group text-left"
                >
                  <span>Политика конфиденциальности</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAgreement}
                  className="font-inter text-sm text-limestone/70 hover:text-oldBronze transition-colors flex items-center gap-2 group text-left"
                >
                  <span>Пользовательское соглашение</span>
                </button>
              </li>
            </ul>

            {/* Кнопка "Скачать буклет" */}
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 border border-oldBronze/50 hover:bg-oldBronze/10 transition-colors font-inter text-xs uppercase tracking-wider text-oldBronze"
            >
              Скачать буклет
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        {/* Разделитель */}
        <div className="w-full h-px bg-white/10 mb-8" />

        {/* Нижняя часть: копирайт и ссылки */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-inter text-limestone/40">
          <p>© 2025 Levshinsky 19. Учебный проект. Все права защищены.</p>
          <div className="flex items-center gap-6">
            <button onClick={onOpenPrivacy} className="hover:text-oldBronze transition-colors">
              Политика конфиденциальности
            </button>
            <button onClick={onOpenAgreement} className="hover:text-oldBronze transition-colors">
              Пользовательское соглашение
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};