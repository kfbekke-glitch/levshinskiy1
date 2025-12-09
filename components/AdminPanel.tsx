import React, { useMemo, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, Search, Filter, Check, ChevronDown, DollarSign, Home, Edit2 } from 'lucide-react';
import { Apartment, ApartmentStatus } from '../types';

interface AdminPanelProps {
  apartments: Apartment[];
  updateApartmentStatus: (id: string, status: ApartmentStatus) => void;
  // New prop for updating price
  updateApartmentPrice?: (id: string, newPrice: number) => void;
  saveChanges: () => void;
  isDirty: boolean;
  onLogout: () => void;
  // Prop to handle full update locally if needed
  setApartments?: React.Dispatch<React.SetStateAction<Apartment[]>>;
}

/**
 * AdminPanel 2.1 — С редактированием цен
 */

export const AdminPanel: React.FC<AdminPanelProps> = ({
  apartments,
  updateApartmentStatus,
  saveChanges,
  isDirty,
  onLogout,
  setApartments
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<ApartmentStatus | 'all'>('all');

  // State for editing price
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const editInputRef = useRef<HTMLInputElement>(null);

  // Метрики
  const metrics = useMemo(() => {
    const total = apartments.length;
    const sold = apartments.filter(a => a.status === 'sold').length;
    const booked = apartments.filter(a => a.status === 'booked').length;
    const available = apartments.filter(a => a.status === 'available').length;
    const revenue = apartments
      .filter(a => a.status === 'sold')
      .reduce((sum, a) => sum + a.totalPrice, 0);

    return { total, sold, booked, available, revenue };
  }, [apartments]);

  // Фильтрация
  const filteredApartments = useMemo(() => {
    return apartments.filter(apt => {
      const matchesSearch = apt.number.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = filterStatus === 'all' || apt.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [apartments, searchTerm, filterStatus]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const startEditing = (id: string, currentPrice: number) => {
    setEditingId(id);
    setEditValue(currentPrice.toString());
    setTimeout(() => editInputRef.current?.focus(), 50);
  };

  const savePrice = (id: string) => {
    const newPrice = parseInt(editValue.replace(/\s/g, ''), 10);
    if (!isNaN(newPrice) && setApartments) {
      setApartments(prev => prev.map(a => {
        if (a.id === id) {
          // Recalculate price per sqm
          const newPricePerSqm = Math.round(newPrice / a.totalArea);
          return { ...a, totalPrice: newPrice, pricePerSqm: newPricePerSqm };
        }
        return a;
      }));
    }
    setEditingId(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter') {
      savePrice(id);
    } else if (e.key === 'Escape') {
      setEditingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#1A1F2C] pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
              Управление Продажами
              <span className="px-3 py-1 bg-[#1A1F2C] text-white text-xs rounded-full font-mono">ADMIN</span>
            </h1>
            <p className="text-gray-500 text-sm">
              Левшинский 19 • Dashboard
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={onLogout}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-white hover:shadow-sm transition-all text-red-500 hover:text-red-600"
            >
              Выйти
            </button>
            {isDirty && (
              <button
                onClick={saveChanges}
                className="px-6 py-2 bg-[#25D366] text-white rounded-lg text-sm font-bold shadow-lg hover:bg-[#25D366]/90 transition-all flex items-center gap-2 animate-pulse"
              >
                <Save size={16} />
                Сохранить Изменения
              </button>
            )}
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Продажи (Объем)</p>
            <p className="text-2xl font-bold text-[#1A1F2C]">
              {(metrics.revenue / 1000000).toFixed(0)} <span className="text-sm text-gray-400 font-normal">млн ₽</span>
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Доступно</p>
            <p className="text-2xl font-bold text-green-600">
              {metrics.available} <span className="text-sm text-gray-400 font-normal">лотов</span>
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Бронь</p>
            <p className="text-2xl font-bold text-yellow-600">
              {metrics.booked} <span className="text-sm text-gray-400 font-normal">в очереди</span>
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Продано</p>
            <p className="text-2xl font-bold text-gray-400">
              {metrics.sold} <span className="text-sm text-gray-400 font-normal">сделок</span>
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-t-xl border-b border-gray-100 flex justify-between items-center">
          <div className="flex gap-4">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск по №..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 w-48"
              />
            </div>
            <div className="flex bg-gray-50 p-1 rounded-lg border border-gray-200">
              {(['all', 'available', 'booked', 'sold'] as const).map(status => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${filterStatus === status
                      ? 'bg-white text-[#1A1F2C] shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  {status === 'all' && 'Все'}
                  {status === 'available' && 'В продаже'}
                  {status === 'booked' && 'Бронь'}
                  {status === 'sold' && 'Продано'}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded text-xs font-medium">
            💡 Нажмите на цену, чтобы изменить
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-b-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left table-auto">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-medium">Лот №</th>
                <th className="px-6 py-4 font-medium">Этаж</th>
                <th className="px-6 py-4 font-medium">Комнат</th>
                <th className="px-6 py-4 font-medium">Площадь</th>
                <th className="px-6 py-4 font-medium">Цена (RUB)</th>
                <th className="px-6 py-4 font-medium">Статус</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredApartments.map(apt => (
                <tr key={apt.id} className="hover:bg-blue-50/30 transition-colors group">
                  <td className="px-6 py-4 font-medium text-[#1A1F2C]">
                    #{apt.number}
                    {apt.tags.includes('Пентхаус') && (
                      <span className="ml-2 px-1.5 py-0.5 bg-purple-100 text-purple-600 rounded text-[10px]">PH</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-gray-500">{apt.floor}</td>
                  <td className="px-6 py-4 text-gray-500">{apt.rooms}</td>
                  <td className="px-6 py-4 text-gray-500">{apt.totalArea} м²</td>

                  {/* Editable Price Cell */}
                  <td className="px-6 py-4 font-medium tabular-nums cursor-pointer relative" onClick={() => editingId !== apt.id && startEditing(apt.id, apt.totalPrice)}>
                    {editingId === apt.id ? (
                      <div className="flex items-center">
                        <input
                          ref={editInputRef}
                          type="number"
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          onBlur={() => savePrice(apt.id)}
                          onKeyDown={(e) => handleKeyDown(e, apt.id)}
                          className="w-32 px-2 py-1 bg-white border border-blue-500 rounded text-sm focus:outline-none shadow-lg z-10"
                        />
                      </div>
                    ) : (
                      <div className="group/price flex items-center gap-2">
                        <span>{formatPrice(apt.totalPrice)} ₽</span>
                        <Edit2 size={12} className="text-gray-300 opacity-0 group-hover/price:opacity-100 transition-opacity" />
                      </div>
                    )}
                  </td>

                  <td className="px-6 py-4">
                    <div className="relative inline-block">
                      <select
                        value={apt.status}
                        onChange={(e) => updateApartmentStatus(apt.id, e.target.value as ApartmentStatus)}
                        className={`w-32 px-3 py-1.5 rounded-full text-xs font-bold border-0 cursor-pointer focus:ring-2 focus:ring-offset-1 transition-all appearance-none pl-8 relative outline-none ${apt.status === 'available' ? 'bg-green-100 text-green-700 hover:bg-green-200' :
                            apt.status === 'booked' ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' :
                              'bg-gray-100 text-gray-500 hover:bg-gray-200'
                          }`}
                      >
                        <option value="available">В продаже</option>
                        <option value="booked">Бронь</option>
                        <option value="sold">Продано</option>
                      </select>
                      <div className={`w-2 h-2 rounded-full absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none ${apt.status === 'available' ? 'bg-green-500' :
                          apt.status === 'booked' ? 'bg-yellow-500' : 'bg-gray-400'
                        }`} />
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-50" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredApartments.length === 0 && (
            <div className="p-12 text-center text-gray-400">
              Ничего не найдено
            </div>
          )}
        </div>

      </div>
    </div>
  );
};