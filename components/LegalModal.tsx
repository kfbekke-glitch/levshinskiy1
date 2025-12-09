import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Scale, AlertTriangle, FileText } from 'lucide-react';

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: 'privacy' | 'agreement';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
    const isPrivacy = type === 'privacy';
    const title = isPrivacy ? 'Политика Конфиденциальности' : 'Пользовательское Соглашение';

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-charcoalOak/95 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative bg-[#F9F9F9] w-full max-w-3xl max-h-[85vh] overflow-hidden shadow-2xl rounded-sm flex flex-col border border-charcoalOak/10"
                    >
                        {/* Header */}
                        <div className="px-8 py-6 bg-white border-b border-charcoalOak/5 flex justify-between items-center shrink-0">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-oldBronze/10 flex items-center justify-center text-oldBronze">
                                    {isPrivacy ? <ShieldCheck size={20} /> : <FileText size={20} />}
                                </div>
                                <div>
                                    <h3 className="font-cormorant text-2xl text-charcoalOak font-medium">{title}</h3>
                                    <p className="font-inter text-[10px] text-charcoalOak/40 uppercase tracking-widest mt-1">
                                        Официальный документ • Редакция 1.0
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-charcoalOak/5 text-charcoalOak/50 hover:text-charcoalOak transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="p-8 overflow-y-auto font-serif text-sm text-charcoalOak/80 leading-relaxed space-y-8 custom-scrollbar">

                            {isPrivacy ? (
                                // PRIVACY POLICY (EXTENDED)
                                <>
                                    <div className="p-4 bg-oldBronze/5 border border-oldBronze/20 rounded-sm mb-6 flex gap-3 text-oldBronze text-xs leading-relaxed">
                                        <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                                        <div>
                                            <strong>Важное уведомление:</strong> Настоящий сайт является учебным проектом (портфолио).
                                            Любые персональные данные, введенные на этом сайте, не передаются третьим лицам и не используются в коммерческих целях.
                                        </div>
                                    </div>

                                    <section>
                                        <h4 className="font-bold text-charcoalOak mb-3 uppercase text-xs tracking-wider">1. Общие положения</h4>
                                        <p className="mb-2">1.1. Настоящая Политика использования данных (далее — Политика) действует в отношении всей информации, которую Автор и Разработчик проекта — <strong>Сальников Дмитрий Алексеевич</strong> (далее — Оператор), может получить о Пользователе во время использования сайта.</p>
                                        <p className="mb-2">1.2. Использование данного Веб-сайта означает безоговорочное согласие Пользователя с настоящей Политикой.</p>
                                        <p>1.3. В случае несогласия с этими условиями, Пользователь обязан немедленно прекратить использование сервисов сайта.</p>
                                    </section>

                                    <section>
                                        <h4 className="font-bold text-charcoalOak mb-3 uppercase text-xs tracking-wider">2. Состав собираемых данных</h4>
                                        <p className="mb-2">2.1. Веб-ресурс, разработанный Сальниковым Д.А., собирает минимум данных, необходимых для демонстрации функционала:</p>
                                        <ul className="list-disc pl-5 space-y-1 ml-2 text-charcoalOak/70">
                                            <li>Имя, фамилия (в формах заявки);</li>
                                            <li>Контактный телефон;</li>
                                            <li>Технические данные (cookies) для работы интерфейса.</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h4 className="font-bold text-charcoalOak mb-3 uppercase text-xs tracking-wider">3. Цели сбора информации</h4>
                                        <p>3.1. Связь с Пользователем, включая направление уведомлений, запросов и информации, касающихся использования Сайта.</p>
                                        <p>3.2. Улучшение качества Сайта, удобства его использования, разработка новых интерфейсных решений в рамках образовательного процесса автора.</p>
                                    </section>

                                    <section>
                                        <h4 className="font-bold text-charcoalOak mb-3 uppercase text-xs tracking-wider">4. Меры по защите информации</h4>
                                        <p>4.1. Разработчик принимает необходимые и достаточные организационные и технические меры для защиты данных Пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения.</p>
                                        <p>4.2. Данные не хранятся на внешних серверах баз данных (Database), а используются исключительно в рамках текущей сессии браузера (LocalStorage/SessionStorage) для симуляции работы приложения.</p>
                                    </section>

                                    <section>
                                        <h4 className="font-bold text-charcoalOak mb-3 uppercase text-xs tracking-wider">5. Изменение политики</h4>
                                        <p>5.1. Разработчик имеет право вносить изменения в настоящую Политику конфиденциальности. При внесении изменений в актуальной редакции указывается дата последнего обновления.</p>
                                    </section>
                                </>
                            ) : (
                                // TERMS OF USE (EXTENDED / LAWYER STYLE)
                                <>
                                    <div className="p-4 bg-red-50 border border-red-100 rounded-sm mb-6 flex gap-3 text-red-900 text-xs leading-relaxed">
                                        <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                                        <div>
                                            <strong>DISCLAIMER (ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ):</strong> Данный веб-ресурс разработан исключительно в образовательных целях (портфолио).
                                            Сайт НЕ является официальным представительством какого-либо застройщика и НЕ является публичной офертой.
                                        </div>
                                    </div>

                                    <section>
                                        <h4 className="font-bold text-charcoalOak mb-3 uppercase text-xs tracking-wider">1. Термины и Определения</h4>
                                        <p className="mb-2">1.1. <strong>Сайт</strong> — совокупность программных и аппаратных средств для ЭВМ, обеспечивающих публикацию для всеобщего обозрения информации и данных, объединенных общим целевым назначением, посредством технических средств, применяемых для связи между ЭВМ в сети Интернет.</p>
                                        <p className="mb-2">1.2. <strong>Автор (Разработчик)</strong> — Сальников Дмитрий Алексеевич, создавший данный Сайт в целях демонстрации профессиональных навыков веб-разработки (React, TypeScript).</p>
                                        <p>1.3. <strong>Пользователь</strong> — любой посетитель веб-ресурса.</p>
                                    </section>

                                    <section>
                                        <h4 className="font-bold text-charcoalOak mb-3 uppercase text-xs tracking-wider">2. Предмет Соглашения</h4>
                                        <p className="mb-2">2.1. Использование материалов и сервисов Сайта регулируется нормами действующего законодательства Российской Федерации.</p>
                                        <p className="mb-2">2.2. Пользователь получает доступ к материалам Сайта исключительно в ознакомительных целях.</p>
                                        <p>2.3. Вся представленная на Сайте информация, касающаяся технических характеристик, наличия, стоимости недвижимости и условий приобретения, носит информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437(2) Гражданского кодекса РФ.</p>
                                    </section>

                                    <section>
                                        <h4 className="font-bold text-charcoalOak mb-3 uppercase text-xs tracking-wider">3. Интеллектуальная Собственность (IP)</h4>
                                        <p className="mb-2">3.1. Дизайн сайта, программный код (исходный текст), графические элементы интерфейса, структура базы данных и иные элементы являются объектами исключительных прав Автора.</p>
                                        <p className="mb-2">3.2. Любое использование материалов Сайта (копирование, воспроизведение, переработка, распространение) без письменного разрешения Автора запрещено и влечет ответственность, предусмотренную законодательством РФ о защите интеллектуальных прав.</p>
                                        <p>3.3. Торговые марки, логотипы и названия (Levshinsky 19, ТСИ и др.), упомянутые на сайте, могут принадлежать их законным правообладателям и используются здесь в демонстрационных целях (Fair Use) для создания контекста учебного проекта.</p>
                                    </section>

                                    <section>
                                        <h4 className="font-bold text-charcoalOak mb-3 uppercase text-xs tracking-wider">4. Ограничение ответственности</h4>
                                        <p className="mb-2">4.1. Автор не несет ответственности за любые прямые или косвенные убытки, понесенные Пользователями в связи с использованием или невозможностью использования Сайта.</p>
                                        <p className="mb-2">4.2. Автор не гарантирует абсолютную точность, полноту или достоверность информации, размещенной на Сайте, так как данные (цены, планировки) являются симуляцией.</p>
                                        <p>4.3. Пользователь использует Сайт на свой страх и риск. Сайт предоставляется по принципу «как есть» (as is).</p>
                                    </section>

                                    <section>
                                        <h4 className="font-bold text-charcoalOak mb-3 uppercase text-xs tracking-wider">5. Заключительные положения</h4>
                                        <p className="mb-2">5.1. Все возможные споры, вытекающие из настоящего Соглашения или связанные с ним, подлежат разрешению в соответствии с действующим законодательством Российской Федерации.</p>
                                        <p className="mb-2">5.2. Бездействие со стороны Автора в случае нарушения кем-либо из Пользователей положений Соглашения не лишает Автора права предпринять позднейшие соответствующие действия в защиту своих интересов и защиту авторских прав.</p>
                                        <p>5.3. Контактная информация для связи с Разработчиком: <strong>+7 (980) 547-04-06</strong>.</p>
                                    </section>
                                </>
                            )}

                        </div>

                        {/* Footer Actions */}
                        <div className="p-6 bg-white border-t border-charcoalOak/5 flex justify-end">
                            <button
                                onClick={onClose}
                                className="px-10 py-3 bg-charcoalOak text-white font-inter text-xs uppercase tracking-widest hover:bg-oldBronze transition-colors rounded-sm shadow-lg hover:shadow-xl transform active:scale-95 duration-200"
                            >
                                Я принимаю условия
                            </button>
                        </div>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
