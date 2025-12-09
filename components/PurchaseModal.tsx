import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Building2, Wallet, CalendarClock, Percent } from 'lucide-react';

export type PurchaseModalType = 'full' | 'mortgage' | 'installment' | null;

interface PurchaseModalProps {
    isOpen: boolean;
    type: PurchaseModalType;
    onClose: () => void;
}

export const PurchaseModal: React.FC<PurchaseModalProps> = ({ isOpen, type, onClose }) => {
    // Блокировка прокрутки
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!type) return null;

    const content = {
        full: {
            title: '100% Оплата',
            subtitle: 'Максимальная инвестиционная привлекательность',
            icon: Wallet,
            features: [
                'Скидка до 3% от стоимости лота',
                'Фиксация цены в момент бронирования',
                'Быстрый выход на сделку (от 3-х дней)',
                'Персональный менеджер на всех этапах'
            ],
            description: 'При единовременной оплате полной стоимости недвижимости вы получаете самые выгодные условия приобретения. Это идеальный вариант для тех, кто ценит время и хочет зафиксировать лучшую цену.',
            steps: [
                'Выбор апартамента и подписание договора бронирования (2% от стоимости)',
                'Подготовка Договора Долевого Участия (ДДУ) или Договора Купли-Продажи',
                'Открытие аккредитива в банке-партнере (безопасные расчеты)',
                'Электронная регистрация сделки в Росреестре',
                'Перечисление средств застройщику только после регистрации'
            ]
        },
        mortgage: {
            title: 'Ипотечные программы',
            subtitle: 'Гибкие условия от ведущих банков',
            icon: Building2,
            features: [
                'Ставки по субсидированным программам от 5.7%',
                'Первоначальный взнос от 20%',
                'Срок кредитования до 30 лет',
                'Возможность использования Материнского капитала'
            ],
            description: 'Мы аккредитованы в крупнейших банках страны, что гарантирует упрощенную процедуру одобрения и специальные условия для наших клиентов. Наши ипотечные брокеры помогут собрать пакет документов.',
            steps: [
                'Подача единой анкеты сразу в несколько банков-партнеров',
                'Получение одобрения (обычно 1-2 рабочих дня)',
                'Выбор страховой программы и оценка недвижимости',
                'Подписание кредитного договора и ДДУ',
                'Регистрация сделки и выдача ключей'
            ]
        },
        installment: {
            title: 'Беспроцентная рассрочка',
            subtitle: 'Комфортный график без переплат',
            icon: CalendarClock,
            features: [
                '0% переплаты на весь срок',
                'Первоначальный взнос от 30%',
                'Гибкий график платежей (поквартально или помесячно)',
                'Индивидуальные условия фиксации цены'
            ],
            description: 'Идеальное решение для тех, кто не хочет выводить крупные суммы из оборота единовременно. Рассрочка предоставляется застройщиком без участия банка и лишних документов.',
            steps: [
                'Внесение первоначального взноса (30-50%)',
                'Фиксация стоимости лота в договоре',
                'Составление удобного графика платежей (на 6 или 12 месяцев)',
                'Возможность перехода на ипотеку на любом этапе',
                'Полная оплата до ввода дома в эксплуатацию'
            ]
        }
    };

    const data = content[type];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-charcoalOak/90 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-[#1A1A1A] border border-oldBronze/30 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                    >
                        {/* Header */}
                        <div className="relative p-8 md:p-10 border-b border-white/10 bg-gradient-to-r from-oldBronze/10 to-transparent">
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 text-limestone/50 hover:text-oldBronze transition-colors"
                            >
                                <X size={24} strokeWidth={1} />
                            </button>

                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-full bg-oldBronze/10 border border-oldBronze/30 flex items-center justify-center shrink-0">
                                    <data.icon size={32} className="text-oldBronze" strokeWidth={1} />
                                </div>
                                <div>
                                    <h3 className="font-cormorant text-3xl md:text-4xl text-limestone mb-2">
                                        {data.title}
                                    </h3>
                                    <p className="font-inter text-sm text-oldBronze uppercase tracking-wider">
                                        {data.subtitle}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Scrollable Body */}
                        <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar">

                            {/* Description */}
                            <p className="font-inter text-limestone/80 leading-relaxed mb-8">
                                {data.description}
                            </p>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                {data.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-4 bg-white/5 border border-white/5 rounded-sm">
                                        <Percent size={16} className="text-oldBronze mt-1 shrink-0" />
                                        <span className="font-inter text-sm text-limestone/90">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Steps */}
                            <div>
                                <h4 className="font-cormorant text-2xl text-limestone mb-6 flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-oldBronze"></span>
                                    Процесс сделки
                                </h4>
                                <div className="space-y-4">
                                    {data.steps.map((step, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <div className="flex flex-col items-center">
                                                <div className="w-6 h-6 rounded-full bg-oldBronze/20 text-oldBronze flex items-center justify-center font-inter text-xs font-bold shrink-0">
                                                    {idx + 1}
                                                </div>
                                                {idx !== data.steps.length - 1 && (
                                                    <div className="w-[1px] h-full bg-oldBronze/20 my-1" />
                                                )}
                                            </div>
                                            <p className="font-inter text-sm text-limestone/70 pb-4">
                                                {step}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Footer */}
                        <div className="p-6 md:p-8 border-t border-white/10 bg-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                            <span className="font-inter text-xs text-limestone/40 max-w-xs">
                                Предложение не является публичной офертой. Условия могут меняться.
                            </span>
                            <button
                                onClick={onClose}
                                className="w-full md:w-auto px-8 py-3 bg-oldBronze text-charcoalOak font-inter text-xs uppercase tracking-wider font-medium hover:bg-creamyLatte transition-colors"
                            >
                                Получить консультацию
                            </button>
                        </div>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
