import { motion } from 'framer-motion';
import { GraduationCap, Award, Cloud, Coffee, Terminal, Users, Code2, Database } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

const getCourseIcon = (courseName) => {
    const name = courseName.toLowerCase();
    if (name.includes('aws')) return <Cloud className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />;
    if (name.includes('java')) return <Coffee className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />;
    if (name.includes('go ')) return <Terminal className="w-6 h-6 text-cyan-500 mr-3 flex-shrink-0" />;
    if (name.includes('scrum')) return <Users className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" />;
    if (name.includes('full stack')) return <Code2 className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0" />;
    if (name.includes('oracle')) return <Database className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />;
    if (name.includes('product')) return <Users className="w-6 h-6 text-indigo-500 mr-3 flex-shrink-0" />;
    return <Award className="w-6 h-6 text-gray-400 mr-3 flex-shrink-0" />;
};

const Education = () => {
    const { language } = useLanguage();
    const data = portfolioData[language];

    return (
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                    <Award className="w-6 h-6 text-blue-600 mr-3" />
                    {data.sections.courses}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {data.courses.map((course, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            whileHover={{ x: 4, transition: { duration: 0.2 } }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="flex items-center p-4 bg-white dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-zinc-800 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900/50"
                        >
                            {getCourseIcon(course)}
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                {course}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="flex items-center mb-8">
                <GraduationCap className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{data.sections.education}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {data.education.map((edu, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                        className="flex p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-900/50"
                    >
                        <div className="flex-shrink-0 mr-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-zinc-800 text-blue-600 dark:text-blue-400">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                            <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{edu.year}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
