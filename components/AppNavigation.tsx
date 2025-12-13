import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu, Phone } from 'lucide-react';

/**
 * NavigationBar — Улучшенная навигация
 */

interface NavigationBarProps {
  isManagerMode: boolean;
  toggleManagerMode: () => void;
  onContactClick: () => void;
}

// Пункты меню с якорями на секции
const menuItems = [
  { label: 'О проекте', href: '#introduction' },
  { label: 'Архитектура', href: '#architecture' },
  { label: 'О застройщике', href: '#developer' },
  { label: 'Привилегии', href: '#amenities' },
  { label: 'Расположение', href: '#location' },
  { label: 'Квартиры', href: '#apartments' },
  { label: 'Покупка', href: '#purchase' },
];

export const NavigationBar: React.FC<NavigationBarProps> = ({ isManagerMode, toggleManagerMode, onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Отслеживаем скролл для изменения стиля навбара
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Плавный скролл к секции
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4 md:py-6 flex justify-between items-center transition-colors duration-300 ${isScrolled
          ? 'bg-[#1A1816]/95 backdrop-blur-md shadow-lg border-b border-white/5'
          : 'bg-transparent'
          }`}
      >
        {/* Логотип */}
        <div className="pointer-events-auto">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="font-cormorant text-xl md:text-2xl tracking-wide font-medium text-white hover:text-oldBronze transition-colors"
          >
            LEVSHINSKY <span className="relative -top-1.5">19</span>
          </a>
        </div>

        {/* Десктопное меню — скрыто на мобильных */}
        <div className="hidden lg:flex items-center gap-8 pointer-events-auto">
          {menuItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="font-inter text-[11px] uppercase tracking-[0.15em] text-white/80 hover:text-oldBronze transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Правая часть: телефон и кнопка режима */}
        <div className="flex items-center gap-4 pointer-events-auto">
          {/* Телефон — только десктоп */}
          <a
            href="tel:+79805470406"
            className="hidden md:flex items-center gap-2 text-white/80 hover:text-oldBronze transition-colors"
          >
            <Phone size={14} />
            <span className="font-inter text-xs">+7 (980) 547-04-06</span>
          </a>

          {/* Кнопка режима управления УДАЛЕНА */}

          {/* Бургер-меню — мобильная версия */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Открыть меню"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Мобильное меню — fullscreen overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#1A1816] flex flex-col justify-center items-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-6">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="font-cormorant text-3xl text-limestone hover:text-oldBronze transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}

              {/* Разделитель */}
              <div className="w-16 h-px bg-oldBronze/30 my-4" />

              {/* Телефон */}
              <a
                href="tel:+79805470406"
                className="flex items-center gap-3 text-oldBronze"
              >
                <Phone size={18} />
                <span className="font-inter text-sm">+7 (980) 547-04-06</span>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/nazzgulenok"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#2AABEE] hover:text-[#2AABEE]/80 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <span className="font-inter text-sm">@nazzgulenok</span>
              </a>

              {/* Кнопка "Связаться" */}
              <button
                onClick={() => {
                  onContactClick();
                  setIsMobileMenuOpen(false);
                }}
                className="mt-4 bg-oldBronze text-white px-6 py-2 rounded-sm font-inter text-xs uppercase tracking-widest hover:bg-deepMoss transition-colors"
              >
                Связаться
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};