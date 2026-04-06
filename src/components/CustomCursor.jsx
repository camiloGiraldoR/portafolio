import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        // Detect touch devices
        const checkTouch = () => {
            setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };
        checkTouch();

        if (isTouch) return;

        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        const pos = { x: 0, y: 0 };
        const mouse = { x: 0, y: 0 };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            // Dot follows instantly
            gsap.set(dot, { x: mouse.x, y: mouse.y });

            if (!isVisible) setIsVisible(true);
        };

        // Ring follows with smooth delay
        const updateRing = () => {
            pos.x += (mouse.x - pos.x) * 0.15;
            pos.y += (mouse.y - pos.y) * 0.15;
            gsap.set(ring, { x: pos.x, y: pos.y });
            requestAnimationFrame(updateRing);
        };

        const rafId = requestAnimationFrame(updateRing);

        // Scale up on hover over interactive elements
        const handleMouseEnter = () => {
            gsap.to(ring, { scale: 2.5, opacity: 0.5, duration: 0.3, ease: 'power2.out' });
            gsap.to(dot, { scale: 0.5, duration: 0.3, ease: 'power2.out' });
        };

        const handleMouseLeave = () => {
            gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' });
            gsap.to(dot, { scale: 1, duration: 0.3, ease: 'power2.out' });
        };

        // Track interactive elements
        const interactiveSelector = 'a, button, [role="button"], input, textarea, .magnetic-btn';
        const addListeners = () => {
            document.querySelectorAll(interactiveSelector).forEach((el) => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });
        };

        const removeListeners = () => {
            document.querySelectorAll(interactiveSelector).forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };

        // Hide cursor when leaving the window
        const handleMouseOut = (e) => {
            if (!e.relatedTarget && !e.toElement) {
                setIsVisible(false);
            }
        };

        const handleMouseOver = () => {
            setIsVisible(true);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseout', handleMouseOut);
        document.addEventListener('mouseover', handleMouseOver);

        // Initial + mutation observer for dynamic elements
        addListeners();
        const observer = new MutationObserver(() => {
            removeListeners();
            addListeners();
        });
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseout', handleMouseOut);
            document.removeEventListener('mouseover', handleMouseOver);
            cancelAnimationFrame(rafId);
            removeListeners();
            observer.disconnect();
        };
    }, [isTouch, isVisible]);

    if (isTouch) return null;

    return (
        <>
            {/* Dot */}
            <div
                ref={dotRef}
                className="custom-cursor-dot"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#3b82f6',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 99999,
                    transform: 'translate(-50%, -50%)',
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.3s',
                    mixBlendMode: 'difference',
                }}
            />
            {/* Ring */}
            <div
                ref={ringRef}
                className="custom-cursor-ring"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '36px',
                    height: '36px',
                    border: '1.5px solid rgba(59, 130, 246, 0.5)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 99998,
                    transform: 'translate(-50%, -50%)',
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.3s',
                }}
            />
        </>
    );
};

export default CustomCursor;
