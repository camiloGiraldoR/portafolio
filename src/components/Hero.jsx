import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import profilePhoto from '../assets/photo-profile.jpeg';

const Hero = () => {
    const { language } = useLanguage();
    const data = portfolioData[language];
    const { name, title, summary, location, email, phone } = data.personalInfo;
    const { availability, greeting, rolesTitle, btnExperience, btnContact } = data.hero;

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -50]);

    return (
        <section id="about" className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-2/3"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-semibold mb-6">
                        {availability}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
                        {greeting} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{name}</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-8">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-3xl whitespace-pre-line">
                        {summary}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <span className="inline-flex items-center text-gray-600 dark:text-gray-400">
                            <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                            {location}
                        </span>
                        <span className="inline-flex items-center text-gray-600 dark:text-gray-400">
                            <Mail className="w-5 h-5 mr-2 text-blue-500" />
                            {email}
                        </span>
                        <span className="inline-flex items-center text-gray-600 dark:text-gray-400">
                            <Phone className="w-5 h-5 mr-2 text-blue-500" />
                            {phone}
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#experience" className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                            {btnExperience}
                            <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
                        </a>
                        <a href={`mailto:${email}`} className="inline-flex justify-center items-center px-8 py-3.5 border-2 border-gray-200 dark:border-zinc-800 text-base font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors">
                            {btnContact}
                        </a>
                    </div>
                </motion.div>

                {/* Foto de Perfil */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 10 } }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-1/3 relative flex justify-center md:justify-end"
                >
                    <motion.div
                        style={{ y: y1 }}
                        className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl max-w-sm"
                    />
                    <motion.div
                        style={{ y: y2 }}
                        className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl transition-all duration-300 hover:shadow-blue-500/20 hover:border-blue-200 dark:hover:border-blue-900/50"
                    >
                        <img
                            src={profilePhoto}
                            alt={`Foto de ${name}`}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
