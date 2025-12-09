import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Send, Download, ArrowRight, Smartphone } from 'lucide-react';

/**
 * PresentationSection — Блок "Lead Magnet"
 * 
 * Вдохновлено сайтом ЖК Софийский.
 * Цель: Получить контакт пользователя или отдать ему презентацию.
 * Размещается после Hero или Introduction.
 * 
 * Структура:
 * - Текст: "Получите презентацию с планировками"
 * - Кнопки: Telegram, WhatsApp, Скачать PDF
 * - Визуализация: Мокап буклета или iPad с презентацией
 */

export const PresentationSection: React.FC = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-10%' });
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Презентация отправлена на ' + email);
        setEmail('');
    };

    return (
        <section className="relative bg-[#1A1816] py-24 overflow-hidden text-limestone border-y border-white/5">
            {/* Фоновый шум */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
            />

            {/* Декоративные круги */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-oldBronze/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-deepMoss/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

            <div ref={containerRef} className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Левая часть: Мокап буклета */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full lg:w-1/2 relative"
                    >
                        {/* Абстрактный "Буклет" */}
                        <div className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/3] bg-gradient-to-br from-[#2B2621] to-[#1A1816] border border-white/10 p-8 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700">
                            <div className="h-full border border-oldBronze/20 flex flex-col justify-between p-6 md:p-10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-oldBronze/10 rounded-full blur-2xl" />

                                <div>
                                    <span className="font-cormorant text-2xl text-white/90 block mb-2">LEVSHINSKY 19</span>
                                    <span className="font-inter text-[10px] uppercase tracking-[0.3em] text-white/40">Presentation</span>
                                </div>

                                <div className="space-y-4">
                                    <div className="w-full h-px bg-white/10" />
                                    <div className="flex justify-between items-end">
                                        <span className="font-cormorant text-4xl text-oldBronze italic">2025</span>
                                        <span className="font-inter text-xs text-white/40">Limited collection</span>
                                    </div>
                                </div>
                            </div>

                            {/* Бейдж PDF */}
                            <div className="absolute -right-4 top-10 bg-white text-charcoalOak px-4 py-2 font-inter text-xs font-bold shadow-xl rotate-12">
                                PDF
                            </div>
                        </div>

                        {/* Тень под буклетом */}
                        <div className="absolute -bottom-10 left-10 right-10 h-10 bg-black/40 blur-xl skew-y-3" />
                    </motion.div>

                    {/* Правая часть: Контент */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        <span className="font-inter text-xs text-oldBronze uppercase tracking-[0.2em] block mb-6">
                            Скачайте каталог
                        </span>
                        <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-limestone mb-6 leading-tight">
                            Полный каталог <br />
                            <span className="italic text-oldBronze">планировок</span> и цен
                        </h2>
                        <p className="font-inter text-base text-limestone/60 mb-10 leading-relaxed max-w-md">
                            В презентации собраны детальные планировки всех типов квартир,
                            видовые характеристики и подробное описание инженерных систем.
                        </p>

                        <div className="space-y-6">
                            {/* Кнопки мессенджеров */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 flex items-center justify-center gap-3 py-4 bg-[#2AABEE] hover:bg-[#2AABEE]/90 text-white transition-all rounded-sm group relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <Send size={18} className="relative z-10" />
                                    <span className="font-inter text-xs uppercase tracking-wider font-medium relative z-10">Telegram</span>
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-3 py-4 bg-[#25D366] hover:bg-[#25D366]/90 text-white transition-all rounded-sm group relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <Smartphone size={18} className="relative z-10" />
                                    <span className="font-inter text-xs uppercase tracking-wider font-medium relative z-10">WhatsApp</span>
                                </button>
                            </div>

                            {/* Разделитель */}
                            <div className="flex items-center gap-4 text-white/20">
                                <div className="h-px flex-1 bg-white/10" />
                                <span className="font-inter text-[10px] uppercase">или</span>
                                <div className="h-px flex-1 bg-white/10" />
                            </div>

                            {/* Кнопка PDF */}
                            <button className="w-full flex items-center justify-center gap-3 py-4 border border-white/20 hover:border-oldBronze/50 hover:bg-white/5 text-limestone transition-all rounded-sm group">
                                <FileText size={18} className="text-limestone/60 group-hover:text-oldBronze transition-colors" />
                                <span className="font-inter text-xs uppercase tracking-wider">Скачать PDF напрямую (12 MB)</span>
                                <Download size={16} className="ml-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-oldBronze" />
                            </button>
                        </div>

                        <p className="mt-6 font-inter text-[10px] text-white/30 text-center lg:text-left">
                            Нажимая на кнопку, вы даете согласие на обработку персональных данных
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
