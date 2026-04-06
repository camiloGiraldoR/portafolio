import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
import GsapReveal from './GsapReveal';
import { SpotlightCard } from './SpotlightCard';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const { language } = useLanguage();
    const data = portfolioData[language];
    const gridRef = useRef(null);

    const getIconForCategory = (category) => {
        const lowerCat = category.toLowerCase();
        if (lowerCat.includes('leadership') || lowerCat.includes('liderazgo')) return <Users className="w-6 h-6" />;
        if (lowerCat.includes('backend')) return <Server className="w-6 h-6" />;
        if (lowerCat.includes('frontend')) return <Layout className="w-6 h-6" />;
        if (lowerCat.includes('database')) return <Database className="w-6 h-6" />;
        if (lowerCat.includes('cloud')) return <Globe className="w-6 h-6" />;
        return <Terminal className="w-6 h-6" />;
    };

    // Stagger animation for skill tags within each card
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray('.skill-tag').forEach((tag, i) => {
                gsap.fromTo(
                    tag,
                    { scale: 0.8, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.3,
                        delay: i * 0.02,
                        ease: 'back.out(2)',
                        scrollTrigger: {
                            trigger: tag,
                            start: 'top 90%',
                            once: true,
                        },
                    }
                );
            });
        }, gridRef);

        return () => ctx.revert();
    }, [language]);

    return (
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <GsapReveal>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {data.sections.skills}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {data.sections.skillsDesc}
                    </p>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-6" />
                </div>
            </GsapReveal>

            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.skills.map((skillGroup, index) => (
                    <GsapReveal key={index} direction="rotate" delay={index * 0.08}>
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
                                        className="skill-tag px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </SpotlightCard>
                    </GsapReveal>
                ))}
            </div>
        </section>
    );
};

export default Skills;
