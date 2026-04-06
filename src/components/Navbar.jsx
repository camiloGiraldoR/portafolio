import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Menu, X, Mail, Globe, Sun, Moon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const { language, toggleLanguage } = useLanguage();

    const logoRef = useRef(null);
    const navLinksRef = useRef(null);
    const actionsRef = useRef(null);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const isDark = savedTheme === null || savedTheme === 'dark';
        setDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newDark = !darkMode;
        setDarkMode(newDark);
        if (newDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const data = portfolioData[language];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // GSAP entrance animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Logo scramble/glitch entrance
            gsap.fromTo(
                logoRef.current,
                { opacity: 0, x: -30, filter: 'blur(8px)' },
                { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' }
            );

            // Nav links stagger
            if (navLinksRef.current) {
                gsap.fromTo(
                    navLinksRef.current.children,
                    { opacity: 0, y: -15 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        stagger: 0.08,
                        delay: 0.3,
                        ease: 'power2.out',
                    }
                );
            }

            // Actions
            if (actionsRef.current) {
                gsap.fromTo(
                    actionsRef.current.children,
                    { opacity: 0, y: -10 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.4,
                        stagger: 0.1,
                        delay: 0.6,
                        ease: 'power2.out',
                    }
                );
            }
        });

        return () => ctx.revert();
    }, []);

    // Mobile menu animation
    useEffect(() => {
        if (!mobileMenuRef.current) return;

        if (isOpen) {
            gsap.fromTo(
                mobileMenuRef.current,
                { height: 0, opacity: 0 },
                { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' }
            );
            // Stagger menu items
            gsap.fromTo(
                mobileMenuRef.current.querySelectorAll('a'),
                { x: -20, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.3, stagger: 0.06, delay: 0.15, ease: 'power2.out' }
            );
        }
    }, [isOpen]);

    const navLinks = [
        { name: data.nav.about, href: '#about' },
        { name: data.nav.experience, href: '#experience' },
        { name: data.nav.skills, href: '#skills' },
        { name: data.nav.education, href: '#education' },
        { name: data.nav.resume, href: '#resume' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div ref={logoRef} className="flex-shrink-0">
                        <a href="#" className="font-bold text-2xl tracking-tighter text-blue-600 dark:text-blue-500">
                            CG<span className="text-gray-900 dark:text-gray-100">.</span>
                        </a>
                    </div>

                    <div className="hidden md:flex items-center">
                        <div
                            ref={navLinksRef}
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
                        </div>

                        <div
                            ref={actionsRef}
                            className="ml-6 flex items-center space-x-4 border-l border-gray-200 dark:border-zinc-800 pl-6"
                        >
                            <a href={`mailto:${data.personalInfo.email}`} className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                                <Mail size={20} />
                            </a>
                            <button
                                onClick={toggleTheme}
                                className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                                aria-label="Toggle theme"
                            >
                                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center space-x-1.5 px-3 py-1.5 bg-gray-100/50 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-300 rounded-full transition-colors text-sm font-medium"
                                aria-label="Toggle language"
                            >
                                <Globe size={16} />
                                <span>{language === 'es' ? 'EN' : 'ES'}</span>
                            </button>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-gray-600 dark:text-gray-400"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
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
                <div
                    ref={mobileMenuRef}
                    className="md:hidden bg-white dark:bg-zinc-900 shadow-xl overflow-hidden"
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
                </div>
            )}
        </nav>
    );
};

export default Navbar;
