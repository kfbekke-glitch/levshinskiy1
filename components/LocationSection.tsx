import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Car, Train, Utensils, Landmark as LandmarkIcon, ShoppingBag, Trees, Check } from 'lucide-react';
import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';

/**
 * LocationSection — Секция "Расположение" с интерактивной Яндекс.Картой
 */

// Координаты центра (Левшинский 19)
const HOME_COORDS = [55.741469, 37.591671];

// Категории достопримечательностей и мест с координатами
const locationCategories = [
  {
    icon: LandmarkIcon,
    title: 'Культура',
    places: [
      { name: 'Музей Льва Толстого', time: '5 мин пешком', coords: [55.7424, 37.5925] },
      { name: 'ГМИИ им. Пушкина', time: '12 мин', coords: [55.7473, 37.6052] },
      { name: 'Храм Христа Спасителя', time: '8 мин', coords: [55.7446, 37.6055] },
    ]
  },
  {
    icon: Trees,
    title: 'Парки',
    places: [
      { name: 'Сквер Девичьего поля', time: '2 мин пешком', coords: [55.7369, 37.5760] },
      { name: 'Парк Горького', time: '15 мин', coords: [55.7297, 37.6010] },
      { name: 'Нескучный сад', time: '18 мин', coords: [55.7220, 37.5800] },
    ]
  },
  {
    icon: Utensils,
    title: 'Рестораны',
    places: [
      { name: 'Twins Garden ★★', time: '10 мин', highlight: true, coords: [55.7667, 37.6067] },
      { name: 'SAVVA ★', time: '12 мин', highlight: true, coords: [55.7590, 37.6250] },
      { name: 'Кафе Пушкинъ', time: '15 мин', coords: [55.7634, 37.6042] },
    ]
  },
  {
    icon: ShoppingBag,
    title: 'Шопинг',
    places: [
      { name: 'Усачёвский рынок', time: '12 мин', coords: [55.7270, 37.5670] },
      { name: 'ТЦ "Времена года"', time: '8 мин', coords: [55.7335, 37.5140] },
      { name: 'Смоленский пассаж', time: '10 мин', coords: [55.7480, 37.5830] },
    ]
  }
];

// Транспортная доступность
const transportInfo = [
  { icon: Train, label: 'м. Парк Культуры', time: '10 мин' },
  { icon: Train, label: 'м. Смоленская', time: '12 мин' },
  { icon: Car, label: 'Садовое кольцо', time: '3 мин' },
  { icon: Car, label: 'ТТК', time: '7 мин' },
];

export const LocationSection: React.FC = () => {
  // State to track selected places (names of places)
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
  // Map center state
  const [mapCenter, setMapCenter] = useState(HOME_COORDS);
  const [zoom, setZoom] = useState(14);

  const togglePlace = (placeName: string, coords: number[]) => {
    setSelectedPlaces(prev => {
      const isSelected = prev.includes(placeName);
      if (isSelected) {
        return prev.filter(p => p !== placeName);
      } else {
        // If selecting, also center the map on it
        setMapCenter(coords);
        setZoom(15);
        return [...prev, placeName];
      }
    });
  };

  const handlePlaceClick = (placeName: string, coords: number[]) => {
    // Just center map without toggling checkbox necessarily, or maybe toggle ON if off?
    // User said: "При нажатии... перемещаться точка. А еще лучше... галочкой"
    // Let's do: click on text -> center map. Click on checkbox -> toggle pin visibility.
    // Actually simpler: visual item has a checkbox. 
    setMapCenter(coords);
    setZoom(16);
    if (!selectedPlaces.includes(placeName)) {
      setSelectedPlaces(prev => [...prev, placeName]);
    }
  };

  return (
    <section
      id="location"
      className="bg-charcoalOak py-24 md:py-32 px-6 md:px-12 lg:px-24 text-limestone overflow-hidden"
    >
      <div className="container mx-auto">

        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="font-inter text-xs text-oldBronze uppercase tracking-[0.3em] block mb-6">
            Хамовники • Центр Москвы
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            В эпицентре <br />
            <span className="italic text-oldBronze">культуры</span>
          </h2>
          <p className="font-inter text-base text-limestone/60 max-w-xl leading-relaxed">
            Большой Лёвшинский переулок — один из самых престижных адресов столицы.
            Район старинных особняков, тихих улочек и интеллигентной атмосферы.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Левая колонка: Карта и транспорт */}
          <div className="order-2 lg:order-1">
            {/* Визуализация карты (Yandex Maps) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-[400px] lg:h-[500px] overflow-hidden mb-8 rounded-sm border border-oldBronze/20 bg-charcoalOak/50"
            >
              <YMaps query={{ lang: 'ru_RU', load: 'package.full' }}>
                <div style={{ width: '100%', height: '100%' }}>
                  <Map
                    state={{ center: mapCenter, zoom: zoom }}
                    width="100%"
                    height="100%"
                    style={{ width: '100%', height: '100%', filter: 'grayscale(1)' }} // Light B&W Map
                    defaultState={{ center: HOME_COORDS, zoom: 14 }}
                    options={{
                      suppressMapOpenBlock: true,
                      yandexMapDisablePoiInteractivity: true,
                    }}
                  >
                    <ZoomControl options={{ float: 'right' }} />

                    {/* Home Pin */}
                    <Placemark
                      geometry={HOME_COORDS}
                      options={{
                        iconColor: '#8B7E6A', // oldBronze
                        preset: 'islands#circleDotIcon',
                        zIndex: 1000,
                      }}
                    />

                    {/* Dynamic Pins */}
                    {locationCategories.flatMap(cat => cat.places).map(place => {
                      if (!selectedPlaces.includes(place.name)) return null;
                      return (
                        <Placemark
                          key={place.name}
                          geometry={place.coords}
                          options={{
                            iconColor: '#2e2e2e',
                            preset: 'islands#dotIcon',
                            zIndex: 100
                          }}
                        />
                      );
                    })}
                  </Map>
                </div>
              </YMaps>

              {/* Home Label Overlay (Static) */}
              <div className="absolute bottom-6 left-6 z-10 pointer-events-none">
                <div className="px-4 py-2 bg-charcoalOak/90 backdrop-blur-sm border-l-2 border-oldBronze">
                  <span className="font-cormorant text-lg tracking-widest text-white">
                    LEVSHINSKY 19
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Транспортная доступность */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="font-inter text-xs uppercase tracking-[0.2em] text-oldBronze mb-6">
                Транспортная доступность
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {transportInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-4 border border-white/10 hover:border-oldBronze/30 transition-colors"
                  >
                    <item.icon size={18} className="text-oldBronze shrink-0" strokeWidth={1.5} />
                    <div>
                      <span className="font-inter text-sm text-limestone block">{item.label}</span>
                      <span className="font-inter text-xs text-limestone/50">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Правая колонка: Категории мест с выбором */}
          <div className="space-y-10 order-1 lg:order-2">
            {locationCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              >
                {/* Заголовок категории */}
                <div className="flex items-center gap-3 mb-4">
                  <category.icon size={20} className="text-oldBronze" strokeWidth={1.5} />
                  <h3 className="font-cormorant text-2xl text-limestone">
                    {category.title}
                  </h3>
                </div>

                {/* Список мест */}
                <ul className="space-y-0 text-sm">
                  {category.places.map((place, placeIndex) => {
                    const isSelected = selectedPlaces.includes(place.name);
                    return (
                      <motion.li
                        key={place.name}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: catIndex * 0.1 + placeIndex * 0.05 }}
                        className={`group flex items-center justify-between py-4 border-b ${isSelected ? 'border-oldBronze/60' : 'border-white/10'} hover:border-oldBronze/40 transition-colors cursor-pointer`}
                        onClick={() => handlePlaceClick(place.name, place.coords)}
                      >
                        <div className="flex items-center gap-4">
                          {/* Custom Checkbox */}
                          <div
                            className={`w-5 h-5 rounded-sm border flex items-center justify-center transition-all duration-300 ${isSelected ? 'bg-oldBronze border-oldBronze text-white' : 'border-white/20 hover:border-oldBronze/50 bg-transparent'}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              togglePlace(place.name, place.coords);
                            }}
                          >
                            {isSelected && <Check size={12} strokeWidth={3} />}
                          </div>

                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className={`font-cormorant text-xl ${place.highlight
                                ? 'text-oldBronze'
                                : 'text-limestone/90 group-hover:text-white'
                                } transition-colors`}>
                                {place.name}
                              </span>
                              {place.highlight && (
                                <span className="px-2 py-0.5 bg-oldBronze/20 text-oldBronze font-inter text-[9px] uppercase tracking-wider">
                                  Michelin
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                          <Clock size={12} className="text-oldBronze" />
                          <span className="font-inter text-xs text-oldBronze/80">
                            {place.time}
                          </span>
                        </div>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}

            {/* Legend/Hint */}
            <p className="text-xs font-inter text-limestone/40 italic mt-6">
              * Отметьте объекты галочкой, чтобы увидеть их расположение на карте
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};