import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from './Reveal';
import { SpotlightCard } from './SpotlightCard';

const Experience = () => {
    const { language } = useLanguage();
    const data = portfolioData[language];

    return (
        <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <Reveal>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {data.sections.experience}
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
                </div>
            </Reveal>

            <div className="space-y-12">
                {data.experience.map((exp, index) => (
                    <Reveal key={exp.id} delay={index * 0.1}>
                        <div className="relative pl-8 border-l-2 border-gray-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-2 border-blue-600" />

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {exp.role}
                                    </h3>
                                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                                        <Briefcase className="w-4 h-4 mr-2" />
                                        {exp.company}
                                    </div>
                                </div>
                                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm bg-gray-100 dark:bg-zinc-800/50 px-3 py-1 rounded-full w-fit">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {exp.period}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                {exp.projects.map((project, pIndex) => (
                                    <SpotlightCard key={pIndex} className="group bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-100 dark:border-zinc-800 transition-all duration-300">
                                        <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                                            {project.industry}
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                            {project.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {project.responsibilities.map((resp, rIndex) => (
                                                <li key={rIndex} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                                                    <span className="text-blue-500 mr-2">•</span>
                                                    {resp}
                                                </li>
                                            ))}
                                        </ul>
                                    </SpotlightCard>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Experience;
