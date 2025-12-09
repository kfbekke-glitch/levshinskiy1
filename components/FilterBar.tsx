import React from 'react';
import { motion } from 'framer-motion';
import { Filters } from '../types';

interface FilterBarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export const FilterBar: React.FC<FilterBarProps> = ({ filters, setFilters }) => {
  const roomOptions = ['Все', '1', '2', '3', '4'];
  const statusOptions = [
    { label: 'Все', value: 'all' },
    { label: 'Доступны', value: 'available' },
    { label: 'Забронированы', value: 'booked' },
    { label: 'Проданы', value: 'sold' },
  ];

  return (
    <div className="pt-20 pb-12 px-8 bg-limestone">
      <div className="max-w-7xl mx-auto border-b border-oldBronze/20 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          
          {/* Rooms Filter */}
          <div className="w-full md:w-auto">
            <p className="font-inter text-xs uppercase tracking-[0.2em] text-oldBronze mb-6">
              Количество комнат
            </p>
            <div className="flex flex-wrap gap-8 md:gap-12">
              {roomOptions.map((room) => {
                const isActive = filters.rooms === room;
                return (
                  <button
                    key={room}
                    onClick={() => setFilters({ ...filters, rooms: room })}
                    className="group relative pb-2 focus:outline-none"
                  >
                    <span 
                      className={`font-cormorant text-xl transition-colors duration-300 ${
                        isActive ? 'text-charcoalOak' : 'text-charcoalOak/40 group-hover:text-charcoalOak/70'
                      }`}
                    >
                      {room === 'Все' ? 'Все лоты' : `${room} комн.`}
                    </span>
                    
                    {isActive && (
                      <motion.div 
                        layoutId="roomUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[1px] bg-charcoalOak"
                        transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Status Filter */}
          <div className="w-full md:w-auto">
            <p className="font-inter text-xs uppercase tracking-[0.2em] text-oldBronze mb-6">
              Статус
            </p>
            <div className="flex flex-wrap gap-8 md:gap-12">
              {statusOptions.map(({ label, value }) => {
                const isActive = filters.status === value;
                return (
                  <button
                    key={value}
                    onClick={() => setFilters({ ...filters, status: value })}
                    className="group relative pb-2 focus:outline-none"
                  >
                    <span 
                      className={`font-cormorant text-xl transition-colors duration-300 ${
                        isActive ? 'text-charcoalOak' : 'text-charcoalOak/40 group-hover:text-charcoalOak/70'
                      }`}
                    >
                      {label}
                    </span>
                    
                    {isActive && (
                      <motion.div 
                        layoutId="statusUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[1px] bg-charcoalOak"
                        transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};