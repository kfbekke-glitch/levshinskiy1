import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Apartment, Filters } from '../types';
import { ApartmentCard } from './ApartmentCard';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface ApartmentGridProps {
  apartments: Apartment[];
  filters: Filters;
  onApartmentClick: (id: string) => void;
}

export const ApartmentGrid: React.FC<ApartmentGridProps> = ({
  apartments,
  filters,
  onApartmentClick
}) => {
  // Show only 2 apartments initially as per user request (full width look)
  const [showAll, setShowAll] = useState(false);

  const filteredApartments = apartments.filter(apt => {
    // Rooms filter
    if (filters.rooms !== 'Все') {
      const roomsMap: Record<string, number> = {
        '1 комната': 1,
        '2 комнаты': 2,
        '3 комнаты': 3,
        '4+ комнаты': 4
      };

      const targetRooms = roomsMap[filters.rooms];
      if (targetRooms === 4) {
        if (apt.rooms < 4) return false;
      } else if (targetRooms && apt.rooms !== targetRooms) {
        return false;
      }
    }

    // Status filter
    if (filters.status !== 'all' && apt.status !== filters.status) return false;

    // Price filter
    if (filters.priceRange) {
      if (apt.totalPrice < filters.priceRange[0] || apt.totalPrice > filters.priceRange[1]) return false;
    }

    return true;
  });

  // If not showing all, take 2. If showing all, take 6 (to prevent endless Scroll) or all? 
  // User said "And below just 'See all'". Usually implies expanding or going to a page.
  // I will make it toggle between 2 and ALL for simplicity, or 2 and 8.
  // Let's toggle between 2 and ALL.
  const visibleApartments = showAll ? filteredApartments : filteredApartments.slice(0, 2);
  const hasMultiple = filteredApartments.length > 2;

  const handleToggleShow = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="bg-limestone py-12 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto"> {/* Full width container */}
        <h2 className="sr-only">Список квартир</h2>

        {filteredApartments.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-cormorant text-2xl text-charcoalOak/60">
              Нет квартир, соответствующих выбранным параметрам.
            </p>
          </div>
        ) : (
          <>
            {/* Grid is now 1 column for that "Full Width" look the user requested */}
            <motion.div
              layout
              className="grid grid-cols-1 gap-y-16"
            >
              <AnimatePresence>
                {visibleApartments.map((apartment, index) => (
                  <ApartmentCard
                    key={apartment.id}
                    apartment={apartment}
                    onClick={() => onApartmentClick(apartment.id)}
                    index={index}
                  />
                ))}
              </AnimatePresence>
            </motion.div>

            {hasMultiple && (
              <div className="mt-20 text-center">
                <button
                  onClick={handleToggleShow}
                  className="group inline-flex flex-col items-center gap-3 transition-all"
                >
                  <span className="font-inter text-xs uppercase tracking-[0.2em] text-charcoalOak hover:text-oldBronze transition-colors border-b border-charcoalOak/30 pb-1 group-hover:border-oldBronze">
                    {showAll ? 'Свернуть список' : 'Посмотреть все резиденции'}
                  </span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};