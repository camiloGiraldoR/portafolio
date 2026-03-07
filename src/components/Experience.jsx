import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
    const { language } = useLanguage();
    const data = portfolioData[language];

    return (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex items-center mb-12">
                <Briefcase className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{data.sections.experience}</h2>
            </div>

            <div className="space-y-16">
                {data.experience.map((exp, idx) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="relative pl-8 md:pl-0"
                    >
                        {/* Línea vertical movida a la derecha del bloque de rol/fecha */}
                        <div className="hidden md:block absolute right-[97%] top-2 bottom-0 w-px bg-gray-200 dark:bg-zinc-800" />

                        <div className="md:grid md:grid-cols-4 md:gap-8">
                            <div className="mb-4 md:mb-0 md:text-right relative">
                                <div className="hidden md:block absolute right-[-21px] top-2 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-white dark:ring-zinc-950" />
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                                <span className="text-blue-600 dark:text-blue-400 font-medium block">{exp.role}</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400 block mt-1">{exp.period}</span>
                            </div>

                            <div className="md:col-span-3 space-y-8">
                                {exp.projects.map((project, pIdx) => (
                                    <div key={pIdx} className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-zinc-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-200 dark:hover:border-blue-900/50">
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.client}</h4>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                                        <ul className="space-y-2">
                                            {project.responsibilities.map((resp, rIdx) => (
                                                <li key={rIdx} className="flex text-sm text-gray-600 dark:text-gray-400 pb-1">
                                                    <span className="mr-3 mt-1.5 w-1 h-1 flex-shrink-0 bg-blue-500 rounded-full"></span>
                                                    <span>{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
