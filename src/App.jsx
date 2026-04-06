import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Resume from './components/Resume';
import Footer from './components/Footer';
import BackgroundShapes from './components/BackgroundShapes';
import CustomCursor from './components/CustomCursor';
import HeroScene3D from './components/HeroScene3D';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
    useEffect(() => {
        // Smooth scroll behavior
        ScrollTrigger.defaults({
            // markers: false, // uncomment for debugging
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <LanguageProvider>
            <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans selection:bg-blue-500/30 overflow-x-hidden relative cursor-none md:cursor-none">
                <CustomCursor />
                <HeroScene3D />
                <BackgroundShapes />
                <Navbar />
                <main className="relative z-10">
                    <Hero />
                    <Skills />
                    <Experience />
                    <Education />
                    {/* <Resume /> */}
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default App;
