import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, X, KeyRound, Eye, EyeOff } from 'lucide-react';

interface AdminLoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLogin: () => void;
}

// SHA-256 hash of 'Levshinsky2025'
const PASSWORD_HASH = "cafc466a819f25a219872ebe4f47a2b7402b78a97a83c4d4f867dcab76078ced";

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ isOpen, onClose, onLogin }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen) {
            setPassword('');
            setError(false);
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    const hashPassword = async (pwd: string) => {
        const encoder = new TextEncoder();
        const data = encoder.encode(pwd);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate slight network delay for realism (and preventing brute force speed)
        await new Promise(r => setTimeout(r, 500));

        const hash = await hashPassword(password);

        if (hash === PASSWORD_HASH) {
            onLogin();
        } else {
            setError(true);
            setPassword('');
            inputRef.current?.focus();
        }
        setIsLoading(false);
    };

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
                        className="relative bg-[#1A1816] border border-white/10 p-8 md:p-12 w-full max-w-sm overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-oldBronze/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2" />

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <form onSubmit={handleSubmit} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-oldBronze">
                                <Lock size={20} />
                            </div>

                            <h3 className="font-cormorant text-2xl text-white mb-2">
                                Служебный вход
                            </h3>
                            <p className="font-inter text-xs text-white/40 mb-8">
                                Система защищенного доступа
                            </p>

                            <div className="relative w-full mb-6">
                                <input
                                    ref={inputRef}
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setError(false);
                                    }}
                                    className={`w-full bg-white/5 border ${error ? 'border-red-500/50' : 'border-white/10'
                                        } rounded-sm px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-oldBronze/50 transition-colors placeholder:text-white/20`}
                                    placeholder="Пароль доступа"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>

                            <button
                                type="submit"
                                disabled={!password || isLoading}
                                className={`w-full py-3 rounded-sm font-inter text-xs uppercase tracking-widest transition-all ${!password || isLoading
                                        ? 'bg-white/5 text-white/20 cursor-not-allowed'
                                        : 'bg-oldBronze text-white hover:bg-deepMoss'
                                    }`}
                            >
                                {isLoading ? 'Проверка...' : 'Войти'}
                            </button>

                            {error && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-400 text-xs font-inter mt-4"
                                >
                                    Неверный пароль
                                </motion.p>
                            )}

                            <div className="mt-8 flex items-center gap-2 text-white/20 text-[10px] uppercase tracking-widest">
                                <KeyRound size={12} />
                                <span>Encrypted Connection</span>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
