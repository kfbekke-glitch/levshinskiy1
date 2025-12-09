import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, X, Menu, Phone } from 'lucide-react';

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

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4 md:py-6 flex justify-between items-center transition-colors duration-300 ${isScrolled
          ? 'bg-charcoalOak/95 backdrop-blur-md shadow-lg border-b border-white/5'
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
            LEVSHINSKY 19
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
            className="fixed inset-0 z-40 bg-charcoalOak/98 backdrop-blur-lg flex flex-col justify-center items-center lg:hidden"
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