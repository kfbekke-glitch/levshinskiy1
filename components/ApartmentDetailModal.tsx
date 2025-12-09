import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, Download, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Apartment } from '../types';

interface ApartmentDetailModalProps {
  apartment: Apartment | null;
  onClose: () => void;
}

export const ApartmentDetailModal: React.FC<ApartmentDetailModalProps> = ({ apartment, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFinishing, setActiveFinishing] = useState<'white-box' | 'turnkey'>('turnkey');

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (apartment) {
      document.body.style.overflow = 'hidden';
      // Reset state on open
      setCurrentImageIndex(0);
      setActiveFinishing('turnkey');
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [apartment]);

  if (!apartment) return null;

  // Combine viewImage and gallery for the slider
  const galleryImages = [
    apartment.viewImage,
    apartment.floorPlanImage,
    ...(apartment.gallery || [])
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <AnimatePresence>
      {apartment && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center p-0 md:p-6 bg-charcoalOak/90 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-limestone w-full max-w-[95vw] md:max-w-7xl h-full md:h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-charcoalOak transition-colors z-50"
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            {/* Left Column: Gallery (60% width on desktop) */}
            <div className="w-full md:w-[60%] h-[40vh] md:h-full relative bg-charcoalOak">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={`${galleryImages[currentImageIndex]}&q=90&fm=webp`}
                  alt={`Apartment view ${currentImageIndex + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Image Controls */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent flex justify-between items-end">
                <div className="flex gap-2">
                  {galleryImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-1 rounded-full transition-all duration-300 ${currentImageIndex === idx ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                        }`}
                    />
                  ))}
                </div>
                <div className="flex gap-3">
                  <button onClick={prevImage} className="p-2 border border-white/30 rounded-full text-white hover:bg-white/10 transition-colors">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={nextImage} className="p-2 border border-white/30 rounded-full text-white hover:bg-white/10 transition-colors">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Info (40% width on desktop) */}
            <div className="w-full md:w-[40%] h-[60vh] md:h-full overflow-y-auto custom-scrollbar bg-limestone text-charcoalOak">
              <div className="p-6 md:p-10 space-y-8">

                {/* Header info */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-inter text-xs uppercase tracking-[0.2em] text-oldBronze">
                      {apartment.rooms}-комнатная резиденция
                    </span>
                    <span className={`px-3 py-1 text-[10px] uppercase tracking-wider border ${apartment.status === 'available'
                        ? 'border-deepMoss text-deepMoss bg-deepMoss/10'
                        : 'border-oldBronze text-oldBronze bg-oldBronze/10'
                      }`}>
                      {apartment.status === 'available' ? 'Свободна' : apartment.status === 'booked' ? 'Бронь' : 'Продана'}
                    </span>
                  </div>
                  <h2 className="font-cormorant text-5xl md:text-6xl font-light text-charcoalOak mb-4">
                    № {apartment.number}
                  </h2>
                  <p className="font-inter text-base text-charcoalOak/70 leading-relaxed">
                    {apartment.description}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-y border-oldBronze/20 py-8">
                  <div>
                    <span className="block font-inter text-xs text-oldBronze uppercase tracking-wider mb-1">Общая площадь</span>
                    <span className="font-cormorant text-3xl">{apartment.totalArea} м²</span>
                  </div>
                  <div>
                    <span className="block font-inter text-xs text-oldBronze uppercase tracking-wider mb-1">Жилая площадь</span>
                    <span className="font-cormorant text-3xl">{apartment.livingArea} м²</span>
                  </div>
                  <div>
                    <span className="block font-inter text-xs text-oldBronze uppercase tracking-wider mb-1">Этаж</span>
                    <span className="font-cormorant text-3xl">{apartment.floor}</span>
                  </div>
                  <div>
                    <span className="block font-inter text-xs text-oldBronze uppercase tracking-wider mb-1">Потолки</span>
                    <span className="font-cormorant text-3xl">{apartment.ceilingHeight} м</span>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-cormorant text-2xl mb-4">Особенности</h3>
                  <ul className="space-y-3">
                    {apartment.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm font-inter text-charcoalOak/80">
                        <Check size={16} className="text-oldBronze mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Finishing Options Toggle */}
                <div className="bg-white/50 p-6 border border-oldBronze/10">
                  <h3 className="font-cormorant text-2xl mb-4">Варианты отделки</h3>
                  <div className="flex gap-4 p-1 bg-charcoalOak/5 rounded-full mb-4">
                    <button
                      onClick={() => setActiveFinishing('turnkey')}
                      className={`flex-1 py-2 text-xs uppercase tracking-wider rounded-full transition-all ${activeFinishing === 'turnkey'
                          ? 'bg-oldBronze text-white shadow-md'
                          : 'text-charcoalOak/60 hover:text-charcoalOak'
                        }`}
                    >
                      Turnkey
                    </button>
                    <button
                      onClick={() => setActiveFinishing('white-box')}
                      className={`flex-1 py-2 text-xs uppercase tracking-wider rounded-full transition-all ${activeFinishing === 'white-box'
                          ? 'bg-oldBronze text-white shadow-md'
                          : 'text-charcoalOak/60 hover:text-charcoalOak'
                        }`}
                    >
                      White Box
                    </button>
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFinishing}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="font-inter text-xs text-charcoalOak/70 leading-relaxed"
                    >
                      {activeFinishing === 'turnkey' ? (
                        <p>Полная чистовая отделка по авторскому дизайн-проекту. Используются натуральный мрамор, паркетная доска из дуба, сантехника премиум-класса Villeroy & Boch.</p>
                      ) : (
                        <p>Предчистовая отделка: возведены перегородки, выполнена стяжка, разведена электрика. Идеальный вариант для реализации собственного дизайн-проекта.</p>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Actions */}
                <div className="pt-4 space-y-4">
                  <div className="flex items-baseline justify-between">
                    <span className="font-inter text-xs text-charcoalOak/50 uppercase tracking-widest">Стоимость</span>
                    <span className="font-cormorant text-4xl text-charcoalOak">
                      {new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 }).format(apartment.totalPrice)} ₽
                    </span>
                  </div>

                  <button className="w-full py-4 bg-charcoalOak text-limestone hover:bg-deepMoss transition-colors font-inter text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 group">
                    Забронировать
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button className="w-full py-4 border border-charcoalOak/20 hover:border-charcoalOak text-charcoalOak transition-colors font-inter text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3">
                    <Download size={16} />
                    Скачать презентацию PDF
                  </button>
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};