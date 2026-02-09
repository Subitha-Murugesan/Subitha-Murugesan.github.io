
import React, { useState } from 'react';
import {
    ArrowLeft,
    Calendar,
    Code,
    Globe,
    Github,
    Linkedin,
    Mail,
    Phone,
    X,
    Trophy
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Card = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
    <div className={`bg-[#2a223a] rounded-lg p-6 border border-white/5 shadow-xl ${className}`}>
        {children}
    </div>
);

const SectionTitle = ({ children, light = false }: { children?: React.ReactNode, light?: boolean }) => (
    <h2 className={`text-4xl font-bold mb-8 ${light ? 'text-[#1a1325]' : 'text-[#e91e63]'}`}>
        {children}
    </h2>
);

const galleryImages = [
    { src: "/assets/images/AIco1.png", alt: "Project Setup" },
    { src: "/assets/images/AICo2.png", alt: "Analysis Dashboard Detail" },
    { src: "/assets/images/AICo3.png", alt: "Market Analysis" },
    { src: "/assets/images/AICof4.png", alt: "Target Audience" },
    { src: "/assets/images/AICo5.png", alt: "Competitive Landscape" },
    { src: "/assets/images/AiCo6.png", alt: "Business Model Canvas" },
    { src: "/assets/images/AiCO7.png", alt: "MVP Validation" },
];

const AiCofounder = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-[#1a1325] text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1325]/90 backdrop-blur-md border-b border-white/10 px-6 py-4">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <Link to="/#featured-projects" className="text-[#e91e63] font-bold text-xl flex items-center gap-2 hover:text-white transition-colors">
                        <ArrowLeft size={20} /> Back to Projects
                    </Link>
                    <div className="text-sm font-medium text-gray-400">Project Details</div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="pt-32 pb-16 px-8 bg-gradient-to-b from-[#1a1325] to-[#2a223a]">
                {/* Live Application Placeholder - Uncomment when link is available */}
                {/* 
                <div className="max-w-6xl mx-auto mb-16">
                     <div className="w-full h-[600px] bg-gray-900 rounded-xl overflow-hidden border border-white/10 shadow-2xl relative">
                        <iframe
                            src="https://your-ai-cofounder-app.web.app/"
                            title="AI Co-Founder Live Demo"
                            className="w-full h-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div> 
                */}

                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#e91e63] mb-6">AI Co-Founder Agent Web App</h1>
                    <h2 className="text-2xl md:text-3xl text-white font-semibold mb-8">Your Intelligent Business Partner</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                        A comprehensive web application for analyzing and validating business ideas with AI-powered insights. Built with React, TypeScript, and Vite, this UI provides detailed market analysis, competitive research, and MVP validation tools.</p>
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <a
                            href="https://no-bs-ai.web.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#e91e63] hover:bg-[#c2185b] text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                        >
                            <Globe size={20} /> Live Site
                        </a>
                        <a
                            href="https://github.com/Subitha-Murugesan/AI-Co-Founder-Web-App"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                        >
                            <Github size={20} /> Github Repository
                        </a>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto px-8 py-16">

                {/* Gallery Section */}
                <section className="mb-24">
                    <h3 className="text-2xl font-bold text-white mb-8">Project Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {galleryImages.map((img, idx) => (
                            <div
                                key={idx}
                                className="bg-[#2a223a] rounded-xl p-4 border border-white/10 hover:border-[#e91e63]/50 transition-colors group cursor-pointer"
                                onClick={() => setSelectedImage(img.src)}
                            >
                                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover shadow-2xl group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <p className="text-center text-gray-400 mt-4 text-sm font-medium">{img.alt}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Overview & Features */}
                <div className="max-w-4xl mx-auto mb-24">
                    <div className="space-y-8">
                        <section>
                            <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Starting a business is challenging. The AI Co-Founder Agent simplifies this process by providing entrepreneurs with instant, data-driven insights. By leveraging large language models, the application analyzes business ideas, identifies potential market gaps, and suggests actionable strategies for growth.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                            <ul className="grid md:grid-cols-2 gap-4">
                                {[
                                    { title: "Market Analysis", desc: "Comprehensive market size estimation, demand gauges, and trend analysis" },
                                    { title: "Competitive Analysis", desc: "Track competitors and market saturation metrics." },
                                    { title: "Business Model Planning", desc: "Structure and validate your business model" },
                                    { title: "Target User Analysis", desc: "Define and segment your target audience." },
                                    { title: "MVP Validation", desc: "Strategies for testing and validating minimum viable products." },
                                    { title: "Idea Summary", desc: "Get AI-powered insights and summaries of your business idea" },
                                    { title: "Real-time Chat", desc: "Interactive chat interface to refine ideas with the AI agent." },
                                ].map((feature, idx) => (
                                    <li key={idx} className="flex gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
                                        <div className="w-2 h-2 mt-2 bg-[#e91e63] rounded-full flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-white">{feature.title}</h4>
                                            <p className="text-gray-400 text-sm mt-1">{feature.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-white mb-4">Key Technologies</h3>
                            <ul className="text-gray-300 space-y-3 list-disc list-inside bg-white/5 p-6 rounded-lg border border-white/5">
                                <li className="font-medium">Built with <span className="text-white">React, TypeScript, and Vite</span></li>
                                <li>AI-powered insights and analysis</li>
                                <li>Real-time interactive features</li>
                                <li>Comprehensive business validation tools</li>
                            </ul>
                        </section>
                    </div>
                </div>

            </main>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full size view"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            <Footer />
        </div>
    );
};

const Footer = () => (
    <footer className="bg-[#1a1325] py-12 px-8 border-t border-white/5 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
                <h3 className="text-2xl font-bold text-[#e91e63] mb-2">Subitha Murugesan</h3>
                <p className="text-gray-500">AI Engineer</p>
                <p className="text-gray-500">Generative AI | Agentic AI | MLOPS | Data Science</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-3 text-gray-400 text-sm">
                <div className="flex gap-4 mb-2">
                    <a href="https://www.linkedin.com/in/subitha-murugesan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#e91e63] transition-colors"><Linkedin size={20} /></a>
                    <a href="https://github.com/Subitha-Murugesan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#e91e63] transition-colors"><Github size={20} /></a>
                </div>
                <div className="flex items-center gap-2">
                    <Mail size={14} className="text-[#e91e63]" />
                    <span>subithaa10@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                    <Phone size={14} className="text-[#e91e63]" />
                    <span>+49 15510413962</span>
                </div>
                <p className="mt-2 text-gray-500">© 2026 Subitha Murugesan. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default AiCofounder;
