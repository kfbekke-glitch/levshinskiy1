import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CreditCard, FileText, Calculator, Phone, ChevronRight, Building2 } from 'lucide-react';
import { PurchaseModal, PurchaseModalType } from './PurchaseModal';

/**
 * PurchaseSection — Секция "Покупка и Ипотека"
 */

// Банки-партнёры (заглушка — в реальности нужны логотипы)
const partnerBanks = [
    { name: 'Сбербанк', rate: 'от 5.9%' },
    { name: 'ВТБ', rate: 'от 6.1%' },
    { name: 'Альфа-Банк', rate: 'от 6.5%' },
    { name: 'Газпромбанк', rate: 'от 5.7%' }
];

// Способы оплаты
const paymentMethods = [
    {
        id: 'full',
        icon: CreditCard,
        title: '100% оплата',
        description: 'Полная оплата стоимости квартиры. Возможна фиксация цены на этапе бронирования.',
        benefit: 'Скидка до 3%'
    },
    {
        id: 'mortgage',
        icon: Calculator,
        title: 'Ипотека',
        description: 'Аккредитация в ведущих банках. Помощь в подготовке документов и одобрении.',
        benefit: 'Ставка от 5.7%'
    },
    {
        id: 'installment',
        icon: FileText,
        title: 'Рассрочка',
        description: 'Беспроцентная рассрочка до 12 месяцев. Индивидуальный график платежей.',
        benefit: '0% переплаты'
    }
];

export const PurchaseSection: React.FC = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-15%' });

    // Простой калькулятор ипотеки (демо)
    const [loanAmount, setLoanAmount] = useState(150000000); // 150 млн рублей по умолчанию
    const [loanTerm, setLoanTerm] = useState(20); // 20 лет
    const annualRate = 0.06; // 6% годовых

    // State для модального окна
    const [activeModal, setActiveModal] = useState<PurchaseModalType>(null);

    // Расчёт ежемесячного платежа (аннуитет)
    const monthlyRate = annualRate / 12;
    const totalMonths = loanTerm * 12;
    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))
        / (Math.pow(1 + monthlyRate, totalMonths) - 1);

    return (
        <section
            id="purchase"
            className="relative bg-charcoalOak py-24 md:py-32 overflow-hidden"
        >
            {/* Текстурный оверлей */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
            />

            <div ref={containerRef} className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* Заголовок секции */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-16 md:mb-24"
                >
                    <span className="font-inter text-xs text-oldBronze uppercase tracking-[0.3em] block mb-6">
                        Условия Приобретения
                    </span>
                    <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-limestone leading-tight">
                        Путь к <span className="italic text-creamyLatte">резиденции</span>
                    </h2>
                </motion.div>

                {/* Способы оплаты — горизонтальные карточки */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 md:mb-28">
                    {paymentMethods.map((method, index) => (
                        <motion.div
                            key={method.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="group relative bg-graphite/30 border border-oldBronze/20 p-8 hover:border-oldBronze/50 transition-all duration-500"
                        >
                            {/* Бейдж с преимуществом */}
                            <span className="absolute top-0 right-0 px-4 py-2 bg-oldBronze text-charcoalOak font-inter text-[10px] uppercase tracking-wider font-medium">
                                {method.benefit}
                            </span>

                            {/* Иконка */}
                            <div className="w-14 h-14 rounded-full border border-oldBronze/40 flex items-center justify-center mb-6">
                                <method.icon size={24} className="text-oldBronze" strokeWidth={1.5} />
                            </div>

                            {/* Контент */}
                            <h3 className="font-cormorant text-2xl text-limestone mb-4">
                                {method.title}
                            </h3>
                            <p className="font-inter text-sm text-limestone/60 leading-relaxed mb-6">
                                {method.description}
                            </p>

                            {/* Ссылка "Подробнее" */}
                            <button
                                onClick={() => setActiveModal(method.id as PurchaseModalType)}
                                className="flex items-center gap-2 text-oldBronze font-inter text-xs uppercase tracking-wider group-hover:gap-3 transition-all"
                            >
                                Подробнее
                                <ChevronRight size={14} />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Калькулятор и банки */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Левая колонка — Калькулятор */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-limestone/5 border border-oldBronze/20 p-8 md:p-10"
                    >
                        <h3 className="font-cormorant text-2xl text-limestone mb-8">
                            Калькулятор <span className="italic text-oldBronze">ипотеки</span>
                        </h3>

                        {/* Сумма кредита */}
                        <div className="mb-8">
                            <label className="font-inter text-xs text-limestone/60 uppercase tracking-wider block mb-3">
                                Сумма кредита
                            </label>
                            <input
                                type="range"
                                min={50000000}
                                max={500000000}
                                step={5000000}
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(Number(e.target.value))}
                                className="w-full h-1 bg-oldBronze/30 rounded-lg appearance-none cursor-pointer accent-oldBronze"
                            />
                            <div className="flex justify-between mt-2">
                                <span className="font-inter text-xs text-limestone/40">50 млн</span>
                                <span className="font-cormorant text-2xl text-limestone">
                                    {(loanAmount / 1000000).toFixed(0)} млн ₽
                                </span>
                                <span className="font-inter text-xs text-limestone/40">500 млн</span>
                            </div>
                        </div>

                        {/* Срок кредита */}
                        <div className="mb-8">
                            <label className="font-inter text-xs text-limestone/60 uppercase tracking-wider block mb-3">
                                Срок кредита
                            </label>
                            <input
                                type="range"
                                min={5}
                                max={30}
                                step={1}
                                value={loanTerm}
                                onChange={(e) => setLoanTerm(Number(e.target.value))}
                                className="w-full h-1 bg-oldBronze/30 rounded-lg appearance-none cursor-pointer accent-oldBronze"
                            />
                            <div className="flex justify-between mt-2">
                                <span className="font-inter text-xs text-limestone/40">5 лет</span>
                                <span className="font-cormorant text-2xl text-limestone">
                                    {loanTerm} лет
                                </span>
                                <span className="font-inter text-xs text-limestone/40">30 лет</span>
                            </div>
                        </div>

                        {/* Результат */}
                        <div className="border-t border-oldBronze/20 pt-8">
                            <p className="font-inter text-xs text-limestone/60 uppercase tracking-wider mb-2">
                                Ежемесячный платёж
                            </p>
                            <p className="font-cormorant text-4xl md:text-5xl text-oldBronze">
                                {new Intl.NumberFormat('ru-RU', {
                                    maximumFractionDigits: 0
                                }).format(monthlyPayment)} <span className="text-2xl">₽</span>
                            </p>
                            <p className="font-inter text-xs text-limestone/40 mt-2">
                                * Расчёт приблизительный, ставка 6% годовых
                            </p>
                        </div>
                    </motion.div>

                    {/* Правая колонка — Банки-партнёры и CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex flex-col"
                    >
                        {/* Банки-партнёры */}
                        <div className="mb-12">
                            <h3 className="font-cormorant text-2xl text-limestone mb-8">
                                Банки-партнёры
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {partnerBanks.map((bank) => (
                                    <div
                                        key={bank.name}
                                        className="flex items-center justify-between p-4 bg-graphite/30 border border-oldBronze/10 hover:border-oldBronze/30 transition-colors"
                                    >
                                        <span className="font-inter text-sm text-limestone">{bank.name}</span>
                                        <span className="font-inter text-xs text-oldBronze">{bank.rate}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA блок */}
                        <div className="bg-oldBronze/10 border border-oldBronze/30 p-8 mt-auto">
                            <Building2 size={32} className="text-oldBronze mb-6" strokeWidth={1} />
                            <h3 className="font-cormorant text-2xl text-limestone mb-4">
                                Нужна консультация?
                            </h3>
                            <p className="font-inter text-sm text-limestone/70 mb-6">
                                Наш менеджер подберёт оптимальную ипотечную программу
                                и поможет с оформлением документов.
                            </p>
                            <a
                                href="https://wa.me/79805470406?text=Здравствуйте!%20Хочу%20получить%20консультацию%20по%20ипотеке"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-8 py-4 bg-oldBronze text-charcoalOak font-inter text-xs uppercase tracking-wider font-medium hover:bg-creamyLatte transition-colors"
                            >
                                <Phone size={16} />
                                Заказать звонок
                            </a>
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Модальное окно */}
            <PurchaseModal
                isOpen={!!activeModal}
                type={activeModal}
                onClose={() => setActiveModal(null)}
            />
        </section>
    );
};
