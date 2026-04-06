import { useRef, useEffect } from 'react';
import gsap from 'gsap';

/**
 * Splits text into spans and animates each letter/word with GSAP.
 * @param {string} text - The text to animate
 * @param {string} className - CSS classes for the container
 * @param {'letters'|'words'} splitBy - How to split the text
 * @param {number} delay - Delay before animation starts
 * @param {number} duration - Duration per element
 * @param {number} stagger - Stagger between elements
 * @param {string} animationType - 'fadeUp' | 'fadeIn' | 'slideLeft' | 'reveal'
 */
const AnimatedText = ({
    text,
    className = '',
    unitClassName = '',
    as: Tag = 'span',
    splitBy = 'words',
    delay = 0,
    duration = 0.6,
    stagger = 0.04,
    animationType = 'fadeUp',
    children,
}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const elements = containerRef.current.querySelectorAll('.anim-unit');
        if (!elements.length) return;

        const getAnimation = () => {
            switch (animationType) {
                case 'fadeUp':
                    return {
                        from: { y: 40, opacity: 0, rotateX: -30 },
                        to: { y: 0, opacity: 1, rotateX: 0 },
                    };
                case 'fadeIn':
                    return {
                        from: { opacity: 0, scale: 0.8 },
                        to: { opacity: 1, scale: 1 },
                    };
                case 'slideLeft':
                    return {
                        from: { x: 60, opacity: 0 },
                        to: { x: 0, opacity: 1 },
                    };
                case 'reveal':
                    return {
                        from: { y: '100%', opacity: 0 },
                        to: { y: '0%', opacity: 1 },
                    };
                default:
                    return {
                        from: { y: 30, opacity: 0 },
                        to: { y: 0, opacity: 1 },
                    };
            }
        };

        const { from, to } = getAnimation();

        gsap.fromTo(elements, from, {
            ...to,
            duration,
            stagger,
            delay,
            ease: 'power3.out',
        });

        return () => {
            gsap.killTweensOf(elements);
        };
    }, [text, delay, duration, stagger, animationType]);

    // If children are provided, animate the container directly
    if (children) {
        return (
            <Tag ref={containerRef} className={className}>
                <span className="anim-unit inline-block">{children}</span>
            </Tag>
        );
    }

    const units = splitBy === 'letters'
        ? text.split('').map((char, i) => (
            <span
                key={i}
                className={`anim-unit inline-block ${unitClassName}`}
                style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
            >
                {char === ' ' ? '\u00A0' : char}
            </span>
        ))
        : text.split(' ').map((word, i) => (
            <span key={i} className={`anim-unit inline-block mr-[0.3em] ${unitClassName}`}>
                {word}
            </span>
        ));

    return (
        <Tag ref={containerRef} className={`overflow-hidden ${className}`}>
            {units}
        </Tag>
    );
};

export default AnimatedText;
