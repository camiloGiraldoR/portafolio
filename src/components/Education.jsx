import {
    GraduationCap,
    Award,
    Calendar,
    Cloud,
    Coffee,
    Terminal,
    Users,
    Code2,
    Database
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import GsapReveal from './GsapReveal';
import { SpotlightCard } from './SpotlightCard';

const getCourseIcon = (courseName) => {
    const name = courseName.toLowerCase();
    if (name.includes('aws') || name.includes('cloud')) return <Cloud className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />;
    if (name.includes('java')) return <Coffee className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />;
    if (name.includes('go')) return <Terminal className="w-6 h-6 text-cyan-500 mr-3 flex-shrink-0" />;
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
        <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Courses & Certifications */}
                <div>
                    <GsapReveal direction="left">
                        <div className="flex items-center mb-10">
                            <Award className="w-8 h-8 text-blue-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                {data.sections.courses}
                            </h2>
                        </div>
                    </GsapReveal>

                    <div className="space-y-4">
                        {data.courses.map((course, index) => (
                            <GsapReveal key={index} direction="left" delay={index * 0.05} distance={40}>
                                <SpotlightCard className="group flex items-center p-4 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-gray-100 dark:border-zinc-800 transition-all duration-300">
                                    {getCourseIcon(course)}
                                    <span className="text-gray-700 dark:text-gray-300 font-medium">{course}</span>
                                </SpotlightCard>
                            </GsapReveal>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div>
                    <GsapReveal direction="right">
                        <div className="flex items-center mb-10">
                            <GraduationCap className="w-8 h-8 text-blue-600 mr-4" />
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                {data.sections.education}
                            </h2>
                        </div>
                    </GsapReveal>

                    <div className="space-y-8">
                        {data.education.map((edu, index) => (
                            <GsapReveal key={index} direction="right" delay={index * 0.1}>
                                <div className="relative pl-8 border-l-2 border-gray-100 dark:border-zinc-800">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600" />
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                                        {edu.institution}
                                    </p>
                                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {edu.year}
                                    </div>
                                </div>
                            </GsapReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
