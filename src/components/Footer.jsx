import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { language } = useLanguage();
    const data = portfolioData[language];

    return (
        <footer className="bg-gray-900 border-t border-gray-800 py-12 text-center text-gray-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center space-x-6 mb-8">
                    <a href={`mailto:${data.personalInfo.email}`} className="text-gray-400 hover:text-white transition-colors">
                        <span className="sr-only">Email</span>
                        <Mail className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <span className="sr-only">GitHub</span>
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin className="w-6 h-6" />
                    </a>
                </div>
                <p className="text-base text-gray-400">
                    &copy; {new Date().getFullYear()} {data.personalInfo.name}. {data.footer.rights}
                </p>
                <p className="mt-2 text-sm text-gray-500 flex items-center justify-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {data.personalInfo.location}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
