import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Maximize, Compass, Sun, Wind } from 'lucide-react';
import { Apartment } from '../types';

interface ApartmentCardProps {
  apartment: Apartment;
  onClick: (id: string) => void;
  index?: number; // kept for potential staggered animation usage
}

export const ApartmentCard: React.FC<ApartmentCardProps> = ({ apartment, onClick }) => {
  const statusLabels = {
    available: 'Доступна для бронирования',
    booked: 'Забронирована',
    sold: 'Продана',
  };

  const statusColors = {
    available: 'bg-deepMoss text-white',
    booked: 'bg-oldBronze text-white',
    sold: 'bg-charcoalOak text-white',
  };

  // Mock orientation data based on apartment number (even/odd) for variety
  const orientation = Number(apartment.number) % 2 === 0 ? 'Юго-Запад' : 'Северо-Восток';
  const features = [
    { label: 'Потолки', value: '3.4 м', icon: Maximize },
    { label: 'Окна', value: orientation, icon: Compass },
    { label: 'Инсоляция', value: 'Высокая', icon: Sun },
    { label: 'Воздух', value: 'Tion 4S', icon: Wind },
  ];

  return (
    <motion.div
      onClick={() => onClick(apartment.id)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      className="group w-full bg-white cursor-pointer overflow-hidden border border-charcoalOak/5 hover:border-oldBronze/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] transition-all duration-500"
    >
      <div className="flex flex-col lg:flex-row h-full">

        {/* Left: Image Area (Wiki-wide) - 60% width on Desktop */}
        <div className="relative w-full lg:w-[60%] h-[300px] lg:h-[500px] overflow-hidden bg-charcoalOak/5">
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            src={`${apartment.floorPlanImage}&q=80&fm=webp`}
            alt={`Лот ${apartment.number}`}
            className="w-full h-full object-cover grayscale-[10%]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://wsrv.nl/?url=https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200';
            }}
          />

          {/* Status Badge */}
          <div className="absolute top-6 left-6 z-10">
            <span className={`px-4 py-2 font-inter text-[10px] uppercase tracking-[0.2em] shadow-lg ${statusColors[apartment.status] || 'bg-white text-charcoalOak'}`}>
              {statusLabels[apartment.status]}
            </span>
          </div>

          {/* Image Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Right: Content Area - 40% width */}
        <div className="w-full lg:w-[40%] p-8 lg:p-12 flex flex-col justify-between bg-white relative">

          {/* Decorative vertical line */}
          <div className="absolute left-0 top-12 bottom-12 w-px bg-charcoalOak/10 hidden lg:block" />

          {/* Header Section */}
          <div>
            <div className="flex justify-between items-start mb-6">
              <span className="font-inter text-xs text-oldBronze uppercase tracking-[0.2em]">
                Резиденция №{apartment.number}
              </span>
              <div className="flex gap-2">
                {apartment.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="px-2 py-1 border border-charcoalOak/10 rounded-sm font-inter text-[9px] text-charcoalOak/60 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="font-cormorant text-4xl lg:text-5xl text-charcoalOak leading-[0.9] mb-8">
              {apartment.rooms}-комнатная <br />
              <span className="italic text-charcoalOak/60">квартира</span>
            </h3>

            {/* Premium Specs Grid */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
              <div className="border-l border-oldBronze/30 pl-4">
                <p className="font-inter text-[10px] text-charcoalOak/40 uppercase tracking-widest mb-1">Этаж</p>
                <p className="font-cormorant text-2xl text-charcoalOak">{apartment.floor}</p>
              </div>
              <div className="border-l border-oldBronze/30 pl-4">
                <p className="font-inter text-[10px] text-charcoalOak/40 uppercase tracking-widest mb-1">Площадь</p>
                <p className="font-cormorant text-2xl text-charcoalOak">{apartment.totalArea} м²</p>
              </div>
            </div>

            {/* Additional Features List */}
            <div className="space-y-3 pb-8 border-b border-charcoalOak/10">
              {features.map((f, i) => (
                <div key={i} className="flex items-center justify-between text-charcoalOak/70">
                  <div className="flex items-center gap-2">
                    <f.icon size={14} className="text-oldBronze" />
                    <span className="font-inter text-xs font-light">{f.label}</span>
                  </div>
                  <span className="font-inter text-xs font-medium">{f.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Section: Price & Action */}
          <div className="pt-8">
            <div className="mb-6">
              <p className="font-inter text-[10px] text-charcoalOak/40 uppercase tracking-widest mb-1">Стоимость лота</p>
              <p className="font-cormorant text-4xl lg:text-5xl text-charcoalOak font-medium">
                {new Intl.NumberFormat('ru-RU').format(apartment.totalPrice)} ₽
              </p>
            </div>

            <button className="w-full py-4 bg-charcoalOak text-white font-inter text-xs uppercase tracking-[0.2em] hover:bg-oldBronze transition-colors flex items-center justify-center gap-3 group/btn">
              Смотреть планировку
              <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </motion.div>
  );
};