import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * GSAP ScrollTrigger-powered reveal animation, replacement for Framer Motion Reveal.
 * @param {'up'|'down'|'left'|'right'|'scale'|'rotate'} direction
 * @param {number} delay - Additional delay
 * @param {number} duration - Animation duration
 * @param {number} distance - Distance in pixels for directional animations
 * @param {boolean} scrub - Whether to tie animation to scroll progress
 * @param {string} width - Container width
 */
const GsapReveal = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.8,
    distance = 60,
    scrub = false,
    width = '100%',
    className = '',
    stagger = 0,
}) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        const el = ref.current;

        const getFromVars = () => {
            switch (direction) {
                case 'up':
                    return { y: distance, opacity: 0 };
                case 'down':
                    return { y: -distance, opacity: 0 };
                case 'left':
                    return { x: distance, opacity: 0 };
                case 'right':
                    return { x: -distance, opacity: 0 };
                case 'scale':
                    return { scale: 0.8, opacity: 0 };
                case 'rotate':
                    return { rotateX: -15, y: distance * 0.5, opacity: 0, transformPerspective: 800 };
                default:
                    return { y: distance, opacity: 0 };
            }
        };

        const getToVars = () => {
            const base = { opacity: 1, duration, delay, ease: 'power3.out' };
            switch (direction) {
                case 'up':
                case 'down':
                    return { ...base, y: 0 };
                case 'left':
                case 'right':
                    return { ...base, x: 0 };
                case 'scale':
                    return { ...base, scale: 1 };
                case 'rotate':
                    return { ...base, rotateX: 0, y: 0 };
                default:
                    return { ...base, y: 0 };
            }
        };

        const fromVars = getFromVars();
        const toVars = getToVars();

        if (scrub) {
            toVars.ease = 'none';
            delete toVars.duration;
        }

        const ctx = gsap.context(() => {
            const targets = stagger
                ? el.querySelectorAll(':scope > *')
                : el;

            gsap.fromTo(targets, fromVars, {
                ...toVars,
                stagger: stagger || 0,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    end: scrub ? 'top 20%' : undefined,
                    toggleActions: scrub ? undefined : 'play none none none',
                    scrub: scrub ? 1 : false,
                    once: !scrub,
                },
            });
        }, el);

        return () => ctx.revert();
    }, [direction, delay, duration, distance, scrub, stagger]);

    return (
        <div ref={ref} style={{ width }} className={className}>
            {children}
        </div>
    );
};

export default GsapReveal;
