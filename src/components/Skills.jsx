import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Wrench, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

const getIconForCategory = (category) => {
    switch (category) {
        case 'Backend & Core': return <Server className="w-5 h-5 text-blue-500" />;
        case 'Frontend': return <Layout className="w-5 h-5 text-purple-500" />;
        case 'Databases': return <Database className="w-5 h-5 text-emerald-500" />;
        case 'Cloud & DevOps': return <Code2 className="w-5 h-5 text-orange-500" />;
        case 'Tools & Testing': return <Wrench className="w-5 h-5 text-rose-500" />;
        case 'Liderazgo & Soft Skills':
        case 'Leadership & Soft Skills': return <Users className="w-5 h-5 text-indigo-500" />;
        default: return <Code2 className="w-5 h-5 text-blue-500" />;
    }
};

const Skills = () => {
    const { language } = useLanguage();
    const data = portfolioData[language];

    return (
        <section id="skills" className="py-20 bg-gray-50/50 dark:bg-zinc-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{data.sections.skills}</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {data.sections.skillsDesc}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.skills.map((skillGroup, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-zinc-800 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-900/50"
                        >
                            <div className="flex items-center mb-6">
                                <div className="p-2 bg-gray-50 dark:bg-zinc-800 rounded-lg mr-4">
                                    {getIconForCategory(skillGroup.category)}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{skillGroup.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-md"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
