import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Resume from './components/Resume';
import Footer from './components/Footer';
import BackgroundShapes from './components/BackgroundShapes';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
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
