import React from 'react';
import { motion } from 'framer-motion';

/**
 * Preloader
 * 
 * Вступительная анимация ("шторка" или фейд).
 * Показывает логотип и плавно открывает контент сайта.
 */

interface PreloaderProps {
    onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, transition: { duration: 0.8, delay: 2.5, ease: "easeInOut" } }}
            onAnimationComplete={onComplete}
            className="fixed inset-0 z-[100] bg-[#141210] flex items-center justify-center pointer-events-none"
        >
            <div className="relative overflow-hidden">
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0, transition: { duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.2 } }}
                    className="flex flex-col items-center"
                >
                    <span className="font-cormorant text-4xl md:text-6xl text-limestone tracking-widest uppercase mb-2">
                        Levshinsky <span className="relative -top-3 md:-top-4">19</span>
                    </span>
                    <span className="font-inter text-xs md:text-sm text-oldBronze uppercase tracking-[0.4em]">
                        Club House
                    </span>
                </motion.div>

                {/* Шторка, закрывающая текст и уезжающая вверх (опционально, или просто fade out контейнера) */}
            </div>
        </motion.div>
    );
};
