import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BackgroundShapes = () => {
    const containerRef = useRef(null);
    const shape1 = useRef(null);
    const shape2 = useRef(null);
    const shape3 = useRef(null);
    const shape4 = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax with GSAP ScrollTrigger for each shape at different speeds
            const shapes = [
                { ref: shape1.current, speed: -200 },
                { ref: shape2.current, speed: -500 },
                { ref: shape3.current, speed: -300 },
                { ref: shape4.current, speed: -150 },
            ];

            shapes.forEach(({ ref, speed }) => {
                if (!ref) return;
                gsap.to(ref, {
                    y: speed,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: document.body,
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1,
                    },
                });
            });

            // Subtle floating animation for each shape
            [shape1, shape2, shape3, shape4].forEach((ref, i) => {
                if (!ref.current) return;
                gsap.to(ref.current, {
                    x: `+=${10 + i * 5}`,
                    y: `+=${5 + i * 3}`,
                    duration: 4 + i * 1.5,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Círculo superior izquierdo */}
            <div
                ref={shape1}
                className="absolute top-20 -left-20 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl"
            />

            {/* Círculo medio derecho */}
            <div
                ref={shape2}
                className="absolute top-[40%] -right-32 w-[30rem] h-[30rem] bg-indigo-400/10 dark:bg-indigo-600/5 rounded-full blur-3xl"
            />

            {/* Círculo inferior izquierdo */}
            <div
                ref={shape3}
                className="absolute bottom-40 -left-40 w-[35rem] h-[35rem] bg-cyan-400/10 dark:bg-cyan-600/5 rounded-full blur-3xl"
            />

            {/* Mancha pequeña dispersa */}
            <div
                ref={shape4}
                className="absolute top-[80%] left-1/2 -translate-x-1/2 w-80 h-80 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl"
            />

            {/* Patrón de puntos sutil */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
                <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]" />
            </div>
        </div>
    );
};

export default BackgroundShapes;
