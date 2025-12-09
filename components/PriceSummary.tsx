import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

/**
 * PriceSummary — Сводка минимальных цен
 * 
 * Вдохновлено сайтом ЖК Софийский.
 * Помогает пользователю быстро сориентироваться в бюджете.
 * 
 * Данные статичны, но в реальном проекте должны считаться динамически
 * на основе массива apartments.
 */

const summaryData = [
    { label: '1-комнатные', area: 'от 56 м²', price: 'от 148 млн ₽' },
    { label: '2-комнатные', area: 'от 87 м²', price: 'от 248 млн ₽' },
    { label: '3-комнатные', area: 'от 118 м²', price: 'от 362 млн ₽' },
    { label: 'Пентхаусы', area: 'от 198 м²', price: 'от 684 млн ₽' },
];

export const PriceSummary: React.FC = () => {
    return (
        <section className="bg-[#F5F2EB] pt-24 pb-12 px-6 md:px-12 lg:px-24">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {summaryData.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group bg-white border border-charcoalOak/5 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="font-inter text-[10px] text-oldBronze uppercase tracking-widest bg-oldBronze/10 px-2 py-1 rounded-sm">
                                    {item.label}
                                </span>
                                <ArrowUpRight size={16} className="text-charcoalOak/20 group-hover:text-oldBronze transition-colors" />
                            </div>

                            <div className="space-y-1">
                                <p className="font-inter text-xs text-charcoalOak/60">
                                    Площадь {item.area}
                                </p>
                                <p className="font-cormorant text-2xl text-charcoalOak font-medium group-hover:text-deepMoss transition-colors">
                                    {item.price}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
