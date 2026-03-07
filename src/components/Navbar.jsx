import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Mail, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { language, toggleLanguage } = useLanguage();

    const data = portfolioData[language];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: data.nav.about, href: '#about' },
        { name: data.nav.experience, href: '#experience' },
        { name: data.nav.skills, href: '#skills' },
        { name: data.nav.education, href: '#education' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-shrink-0"
                    >
                        <a href="#" className="font-bold text-2xl tracking-tighter text-blue-600 dark:text-blue-500">
                            CG<span className="text-gray-900 dark:text-gray-100">.</span>
                        </a>
                    </motion.div>

                    <div className="hidden md:flex items-center">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="ml-10 flex items-baseline space-x-8"
                        >
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="ml-6 flex items-center space-x-4 border-l border-gray-200 dark:border-zinc-800 pl-6"
                        >
                            <a href={`mailto:${data.personalInfo.email}`} className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                                <Mail size={20} />
                            </a>
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center space-x-1.5 px-3 py-1.5 bg-gray-100/50 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-300 rounded-full transition-colors text-sm font-medium"
                                aria-label="Toggle language"
                            >
                                <Globe size={16} />
                                <span>{language === 'es' ? 'EN' : 'ES'}</span>
                            </button>
                        </motion.div>
                    </div>

                    <div className="-mr-2 flex md:hidden items-center space-x-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-300 rounded-full transition-colors text-sm font-medium"
                        >
                            <Globe size={14} />
                            <span>{language === 'es' ? 'EN' : 'ES'}</span>
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-800 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-white dark:bg-zinc-900 shadow-xl"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
