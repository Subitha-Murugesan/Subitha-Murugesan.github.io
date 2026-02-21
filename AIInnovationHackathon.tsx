
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
    Trophy,
    Terminal,
    Cpu,
    Server,
    Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Card = ({ children, className = "" }: { children?: React.ReactNode, className?: string, key?: React.Key }) => (
    <div className={`bg-[#2a223a] rounded-lg p-6 border border-white/5 shadow-xl ${className}`}>
        {children}
    </div>
);

const galleryImages = [
    { src: "/assets/images/aihack1.png", alt: "AI Innovation Hackathon Winner announcement" },
    { src: "/assets/images/aihack2.png", alt: "AI Co-Founder Project Showcase" },
    { src: "/assets/images/aihack3.png", alt: "Pitching the AI Co-Founder" },
    { src: "/assets/images/aihack4.png", alt: "Team work and collaboration" },
    { src: "/assets/images/aihack5.png", alt: "Certificate ceremony" },
    { src: "/assets/images/aihack6.png", alt: "Hackathon environment" },
    { src: "/assets/images/aihack7.png", alt: "The winning moment" },
];

const AIInnovationHackathon = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-[#1a1325] text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1325]/90 backdrop-blur-md border-b border-white/10 px-6 py-4">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <Link to="/#hackathons" className="text-[#e91e63] font-bold text-xl flex items-center gap-2 hover:text-white transition-colors">
                        <ArrowLeft size={20} /> Back to Hackathons
                    </Link>
                    <div className="text-sm font-medium text-gray-400">Hackathon Details</div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="pt-32 pb-16 px-8 bg-gradient-to-b from-[#1a1325] to-[#2a223a]">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-[#e91e63]/20 text-[#e91e63] px-4 py-2 rounded-full mb-6 font-bold">
                        <Trophy size={20} /> Winner - 1st Place
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Innovation Hackathon - ZOLLHOF</h1>
                    <h2 className="text-2xl md:text-3xl text-[#e91e63] font-semibold mb-8">AI Co-Founder Agentic Workflow</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                        Participated in the AI Innovation Hackathon at ZOLLHOF – Tech Incubator, organized by FAU WiSo and FAU Wi1. Developed "AI Co Founder", a smart tool that helps founders validate startup ideas using a multi-agent AI workflow powered by CrewAI and Gemini Flash.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <a
                            href="https://aicofounder-c1cea.web.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#e91e63] hover:bg-[#c2185b] text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                        >
                            <Globe size={20} /> Live Site
                        </a>
                        <a
                            href="https://github.com/Subitha-Murugesan/AI_Cofounder_Agentic_AI_Hackathon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                        >
                            <Github size={20} /> GitHub Repository
                        </a>
                        <a
                            href="https://www.linkedin.com/feed/update/urn:li:activity:7419665208748687360/?originTrackingId=26CEeRZDHq5PeDKVLy0Aog%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#0077b5] hover:bg-[#006097] text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                        >
                            <Linkedin size={20} /> LinkedIn Post
                        </a>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto px-8 py-16">

                {/* Gallery Section */}
                <section className="mb-24">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Hackathon Gallery</h3>
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

                {/* Project Highlights */}
                <div className="max-w-4xl mx-auto mb-24">
                    <div className="space-y-12">
                        <section>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Cpu className="text-[#e91e63]" /> Project Highlight
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { title: "Idea Summarization", desc: "Summarizes the idea and core value proposition." },
                                    { title: "Market Trends", desc: "Analyzes current market trends and potential competitors." },
                                    { title: "User Personas", desc: "Identifies potential target users and their profiles." },
                                    { title: "Business Strategy", desc: "Suggests business models and MVP execution plans." },
                                    { title: "Strategic Recommendation", desc: "Provides a clear Go / No-Go recommendation based on data." },
                                ].map((item, idx) => (
                                    <Card key={idx} className="border-white/5 hover:border-[#e91e63]/30 transition-all">
                                        <div className="w-2 h-2 bg-[#e91e63] rounded-full mb-3" />
                                        <h4 className="font-bold text-white mb-2">{item.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                    </Card>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Layers className="text-[#e91e63]" /> Multi-Agent Workflow
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                The system is powered by a CrewAI multi-agent workflow, where specialized agents collaborate to analyze the startup idea from multiple angles simultaneously.
                            </p>
                            <div className="bg-[#e91e63]/5 border border-[#e91e63]/20 p-6 rounded-lg italic">
                                "Combining different specialized agents allows for fast, useful, and professional insights that would take days for a human to compile."
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Terminal className="text-[#e91e63]" /> Tech Stack
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    { name: "React + TypeScript", icon: <Layers size={18} /> },
                                    { name: "FastAPI", icon: <Server size={18} /> },
                                    { name: "Firebase", icon: <Globe size={18} /> },
                                    { name: "Gemini 2.0 Flash", icon: <Cpu size={18} /> },
                                    { name: "CrewAI", icon: <Layers size={18} /> },
                                ].map((tech, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/5">
                                        <div className="text-[#e91e63]">{tech.icon}</div>
                                        <span className="font-semibold text-sm">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
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

export default AIInnovationHackathon;
