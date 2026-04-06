import { useRef, useEffect } from 'react';
import gsap from 'gsap';

/**
 * Wraps a child element to create a magnetic hover effect.
 * The element smoothly pulls toward the cursor when hovering.
 */
const MagneticButton = ({ children, strength = 0.35, className = '' }) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Check for touch devices
        if ('ontouchstart' in window) return;

        const handleMouseMove = (e) => {
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = (e.clientX - centerX) * strength;
            const deltaY = (e.clientY - centerY) * strength;

            gsap.to(el, {
                x: deltaX,
                y: deltaY,
                duration: 0.4,
                ease: 'power2.out',
            });
        };

        const handleMouseLeave = () => {
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: 'elastic.out(1, 0.3)',
            });
        };

        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            el.removeEventListener('mousemove', handleMouseMove);
            el.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [strength]);

    return (
        <div ref={ref} className={`magnetic-btn inline-block ${className}`}>
            {children}
        </div>
    );
};

export default MagneticButton;
