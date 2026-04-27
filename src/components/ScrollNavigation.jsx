import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ScrollNavigation = () => {
    const sections = ['about', 'skills', 'experience', 'education', 'resume'];
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach((sectionId, index) => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setCurrentSectionIndex(index);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (direction) => {
        let newIndex;
        if (direction === 'up') {
            newIndex = Math.max(0, currentSectionIndex - 1);
        } else {
            newIndex = Math.min(sections.length - 1, currentSectionIndex + 1);
        }

        const element = document.getElementById(sections[newIndex]);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-2">
            <button
                onClick={() => scrollToSection('up')}
                disabled={currentSectionIndex === 0}
                className={`p-3 rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border border-gray-200 dark:border-zinc-700 shadow-lg transition-all duration-200 hover:scale-110 ${
                    currentSectionIndex === 0
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600'
                }`}
                aria-label="Scroll to previous section"
            >
                <ChevronUp className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>

            <button
                onClick={() => scrollToSection('down')}
                disabled={currentSectionIndex === sections.length - 1}
                className={`p-3 rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border border-gray-200 dark:border-zinc-700 shadow-lg transition-all duration-200 hover:scale-110 ${
                    currentSectionIndex === sections.length - 1
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600'
                }`}
                aria-label="Scroll to next section"
            >
                <ChevronDown className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
        </div>
    );
};

export default ScrollNavigation;