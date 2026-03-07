import { FileDown, FileText, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from './Reveal';
import { SpotlightCard } from './SpotlightCard';

const Resume = () => {
    const { language } = useLanguage();
    const data = portfolioData[language];

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `./${data.personalInfo.cvFile}`;
        link.download = data.personalInfo.cvFile;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <Reveal>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        {data.sections.resume}
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
                </div>
            </Reveal>

            <div className="max-w-3xl mx-auto">
                <Reveal delay={0.2}>
                    <SpotlightCard className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-zinc-800 text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-8">
                            <FileText className="w-10 h-10" />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            {language === 'es' ? 'Currículum Vitae Actualizado' : 'Updated Curriculum Vitae'}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
                            {[
                                language === 'es' ? 'Formato PDF listo para imprimir' : 'PDF format ready to print',
                                language === 'es' ? 'Última actualización: Marzo 2026' : 'Last update: March 2026',
                                language === 'es' ? 'Detalle de stack tecnológico' : 'Detailed tech stack',
                                language === 'es' ? 'Certificaciones verificadas' : 'Verified certifications'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={handleDownload}
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-blue-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:bg-blue-700 active:scale-95 shadow-lg shadow-blue-500/20"
                        >
                            <FileDown className="w-5 h-5 mr-3 group-hover:translate-y-0.5 transition-transform" />
                            {data.sections.resume}
                        </button>

                        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 italic">
                            {language === 'es'
                                ? 'Version en español e inglés disponible automáticamente según tu selección.'
                                : 'Spanish and English versions available automatically based on your selection.'}
                        </p>
                    </SpotlightCard>
                </Reveal>
            </div>
        </section>
    );
};

export default Resume;
