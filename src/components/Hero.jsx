import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import {
    Download,
    ChevronRight,
    Linkedin,
    Github,
    Mail,
    Phone,
    MapPin,
    ArrowRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import profilePhoto from '../assets/photo-profile.jpeg';
import AnimatedText from './AnimatedText';
import MagneticButton from './MagneticButton';

const Hero = () => {
    const { language } = useLanguage();
    const data = portfolioData[language];
    const { name, title, summary, location, email, phone } = data.personalInfo;
    const { availability, greeting, rolesTitle, btnExperience, btnContact } = data.hero;

    const sectionRef = useRef(null);
    const badgeRef = useRef(null);
    const summaryRef = useRef(null);
    const buttonsRef = useRef(null);
    const contactRef = useRef(null);
    const photoRef = useRef(null);
    const glowRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            // Badge
            tl.fromTo(
                badgeRef.current,
                { y: 20, opacity: 0, scale: 0.9 },
                { y: 0, opacity: 1, scale: 1, duration: 0.5 },
                0.2
            );

            // Summary text
            tl.fromTo(
                summaryRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6 },
                0.9
            );

            // Buttons stagger
            tl.fromTo(
                buttonsRef.current?.children || [],
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
                1.1
            );

            // Contact details
            tl.fromTo(
                contactRef.current?.children || [],
                { y: 15, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, stagger: 0.08 },
                1.4
            );

            // Photo entrance
            tl.fromTo(
                photoRef.current,
                { scale: 0.85, opacity: 0, rotateY: -15 },
                { scale: 1, opacity: 1, rotateY: 0, duration: 1, ease: 'power2.out' },
                0.4
            );

            // Glow pulse
            tl.fromTo(
                glowRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.2, ease: 'power1.out' },
                0.5
            );

            // Continuous glow animation
            gsap.to(glowRef.current, {
                scale: 1.1,
                opacity: 0.7,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });

            // Photo hover parallax on mouse move
            const handleMouseMove = (e) => {
                if (!photoRef.current) return;
                const rect = sectionRef.current.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
                const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

                gsap.to(photoRef.current, {
                    rotateY: x * 8,
                    rotateX: -y * 5,
                    duration: 0.6,
                    ease: 'power2.out',
                });
            };

            sectionRef.current?.addEventListener('mousemove', handleMouseMove);

            return () => {
                sectionRef.current?.removeEventListener('mousemove', handleMouseMove);
            };
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
        >

            <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                <div className="w-full md:w-2/3">
                    {/* Badge */}
                    <div
                        ref={badgeRef}
                        className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-semibold mb-6"
                        style={{ opacity: 0 }}
                    >
                        {availability}
                    </div>

                    {/* Name - Animated letter by letter */}
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
                        <AnimatedText
                            text={`${greeting} `}
                            splitBy="words"
                            delay={0.4}
                            duration={0.6}
                            stagger={0.08}
                            animationType="fadeUp"
                        />
                        <AnimatedText
                            text={name}
                            splitBy="letters"
                            delay={0.7}
                            duration={0.5}
                            stagger={0.03}
                            animationType="fadeUp"
                            unitClassName="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"
                        />
                    </h1>

                    {/* Title - Animated by words */}
                    <AnimatedText
                        as="h2"
                        text={title}
                        splitBy="words"
                        delay={1.0}
                        duration={0.5}
                        stagger={0.06}
                        animationType="slideLeft"
                        className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-8"
                    />

                    {/* Summary */}
                    <p
                        ref={summaryRef}
                        className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed max-w-2xl"
                        style={{ opacity: 0 }}
                    >
                        {summary}
                    </p>

                    {/* Social & Primary Action Buttons */}
                    <div ref={buttonsRef} className="flex flex-wrap gap-4 mb-10">
                        <MagneticButton>
                            <a
                                href={data.personalInfo.socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-6 py-3 bg-[#0A66C2] text-white rounded-xl font-bold transition-shadow hover:shadow-lg hover:shadow-[#0A66C2]/20 active:scale-95"
                            >
                                <Linkedin className="w-5 h-5 mr-2" />
                                LinkedIn
                            </a>
                        </MagneticButton>
                        <MagneticButton>
                            <a
                                href={data.personalInfo.socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-xl font-bold transition-shadow hover:shadow-lg hover:shadow-zinc-500/20 shadow-md active:scale-95"
                            >
                                <Github className="w-5 h-5 mr-2" />
                                GitHub
                            </a>
                        </MagneticButton>
                        <MagneticButton>
                            <a
                                href="#experience"
                                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-xl font-bold transition-all hover:bg-blue-700 shadow-lg shadow-blue-500/20 active:scale-95"
                            >
                                {btnExperience}
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                        </MagneticButton>
                    </div>

                    {/* Contact Details */}
                    <div ref={contactRef} className="flex flex-wrap gap-6 mb-10">
                        <span className="inline-flex items-center text-gray-600 dark:text-gray-400 font-medium" style={{ opacity: 0 }}>
                            <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                            {location}
                        </span>
                        <a
                            href={`mailto:${email}`}
                            className="inline-flex items-center text-gray-600 dark:text-gray-400 font-medium hover:text-blue-600 transition-colors"
                            style={{ opacity: 0 }}
                        >
                            <Mail className="w-5 h-5 mr-2 text-blue-500" />
                            {email}
                        </a>
                        <span className="inline-flex items-center text-gray-600 dark:text-gray-400 font-medium" style={{ opacity: 0 }}>
                            <Phone className="w-5 h-5 mr-2 text-blue-500" />
                            {phone}
                        </span>
                    </div>
                </div>

                {/* Profile Photo */}
                <div className="w-full md:w-1/3 relative flex justify-center md:justify-end" style={{ perspective: '1000px' }}>
                    <div
                        ref={glowRef}
                        className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl max-w-sm"
                        style={{ opacity: 0 }}
                    />
                    <div
                        ref={photoRef}
                        className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl transition-all duration-300 hover:shadow-blue-500/20 hover:border-blue-200 dark:hover:border-blue-900/50"
                        style={{ opacity: 0, transformStyle: 'preserve-3d' }}
                    >
                        <img
                            src={profilePhoto}
                            alt={`Foto de ${name}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
