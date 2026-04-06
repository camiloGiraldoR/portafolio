import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import GsapReveal from './GsapReveal';
import { SpotlightCard } from './SpotlightCard';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const { language } = useLanguage();
    const data = portfolioData[language];
    const timelineRef = useRef(null);

    // Animate the timeline line and dots
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the vertical line drawing
            gsap.utils.toArray('.timeline-line').forEach((line) => {
                gsap.fromTo(
                    line,
                    { scaleY: 0, transformOrigin: 'top' },
                    {
                        scaleY: 1,
                        duration: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: line,
                            start: 'top 80%',
                            once: true,
                        },
                    }
                );
            });

            // Animate timeline dots with pulse
            gsap.utils.toArray('.timeline-dot').forEach((dot) => {
                gsap.fromTo(
                    dot,
                    { scale: 0, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        ease: 'back.out(3)',
                        scrollTrigger: {
                            trigger: dot,
                            start: 'top 80%',
                            once: true,
                        },
                    }
                );
            });

            // Pulse animation on dots
            gsap.utils.toArray('.timeline-dot').forEach((dot) => {
                gsap.to(dot, {
                    boxShadow: '0 0 0 8px rgba(59, 130, 246, 0.15)',
                    duration: 1.5,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    scrollTrigger: {
                        trigger: dot,
                        start: 'top 80%',
                        once: true,
                    },
                });
            });
        }, timelineRef);

        return () => ctx.revert();
    }, [language]);

    return (
        <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <GsapReveal>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {data.sections.experience}
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
                </div>
            </GsapReveal>

            <div className="space-y-12" ref={timelineRef}>
                {data.experience.map((exp, index) => (
                    <GsapReveal key={exp.id} direction="left" delay={index * 0.1}>
                        <div className="relative pl-8 timeline-line border-l-2 border-gray-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                            <div className="timeline-dot absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-2 border-white dark:border-zinc-950" />

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
                                    <GsapReveal key={pIndex} direction="right" delay={pIndex * 0.08}>
                                        <SpotlightCard className="group bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-100 dark:border-zinc-800 transition-all duration-300">
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
                                    </GsapReveal>
                                ))}
                            </div>
                        </div>
                    </GsapReveal>
                ))}
            </div>
        </section>
    );
};

export default Experience;
