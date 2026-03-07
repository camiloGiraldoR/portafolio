import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

const BackgroundShapes = () => {
    const { scrollYProgress } = useScroll();

    // Transformaciones para diferentes capas de profundidad
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, -150]);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Círculo superior izquierdo - Movimiento lento */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-20 -left-20 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl"
            />

            {/* Círculo medio derecho - Movimiento rápido */}
            <motion.div
                style={{ y: y2 }}
                className="absolute top-[40%] -right-32 w-[30rem] h-[30rem] bg-indigo-400/10 dark:bg-indigo-600/5 rounded-full blur-3xl"
            />

            {/* Círculo inferior izquierdo - Movimiento medio */}
            <motion.div
                style={{ y: y3 }}
                className="absolute bottom-40 -left-40 w-[35rem] h-[35rem] bg-cyan-400/10 dark:bg-cyan-600/5 rounded-full blur-3xl"
            />

            {/* Mancha pequeña dispersa */}
            <motion.div
                style={{ y: y4 }}
                className="absolute top-[80%] left-1/2 -translate-x-1/2 w-80 h-80 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl"
            />

            {/* Patrón de puntos sutil (estático o parallax lento) */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
                <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]" />
            </div>
        </div>
    );
};

export default BackgroundShapes;
