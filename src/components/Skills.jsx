import { motion } from 'framer-motion';
import {
    Code2,
    Database,
    Globe,
    Layout,
    Server,
    Settings,
    Terminal,
    Users
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from './Reveal';
import { SpotlightCard } from './SpotlightCard';

const Skills = () => {
    const { language } = useLanguage();
    const data = portfolioData[language];

    const getIconForCategory = (category) => {
        const lowerCat = category.toLowerCase();
        if (lowerCat.includes('leadership') || lowerCat.includes('liderazgo')) return <Users className="w-6 h-6" />;
        if (lowerCat.includes('backend')) return <Server className="w-6 h-6" />;
        if (lowerCat.includes('frontend')) return <Layout className="w-6 h-6" />;
        if (lowerCat.includes('database')) return <Database className="w-6 h-6" />;
        if (lowerCat.includes('cloud')) return <Globe className="w-6 h-6" />;
        return <Terminal className="w-6 h-6" />;
    };

    return (
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <Reveal>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {data.sections.skills}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {data.sections.skillsDesc}
                    </p>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-6" />
                </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.skills.map((skillGroup, index) => (
                    <Reveal key={index} delay={index * 0.1}>
                        <SpotlightCard className="group bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 hover:border-blue-500 transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                                    {getIconForCategory(skillGroup.category)}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                    {skillGroup.category}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill, sIndex) => (
                                    <span
                                        key={sIndex}
                                        className="px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </SpotlightCard>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Skills;
