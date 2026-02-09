
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
    { src: "/assets/images/Hack1.jpeg", alt: "FAU AI Hackathon Winner" },
    { src: "/assets/images/AIco1.png", alt: "AI Co-Founder Dashboard" },
    { src: "/assets/images/AICo2.png", alt: "Market Analysis Agent" },
];

const FAUAIHackathon = () => {
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
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Hackathon - FAU Erlangen-Nürnberg</h1>
                    <h2 className="text-2xl md:text-3xl text-[#e91e63] font-semibold mb-8">AI Co-Founder Agent Prototype</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                        Developed an award-winning AI Co-Founder Agent that validates startup ideas, generates market insights, and provides strategic recommendations. Secured first place in the Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU) WiSo AI Hackathon.
                    </p>

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
                            <Github size={20} /> GitHub Repository
                        </a>
                        <a
                            href="https://www.linkedin.com/feed/update/urn:li:activity:7406966477418876928/"
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {galleryImages.map((img, idx) => (
                            <div
                                key={idx}
                                className="bg-[#211a2f] rounded-2xl p-6 border border-white/10 hover:border-[#e91e63]/50 transition-all duration-300 group cursor-pointer shadow-black/50 shadow-2xl hover:shadow-[#e91e63]/20"
                                onClick={() => setSelectedImage(img.src)}
                            >
                                <div className="w-full overflow-hidden rounded-xl bg-black/30 border border-white/5 relative group-hover:border-white/10 transition-colors">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-auto object-contain max-h-[500px] mx-auto group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                                    />
                                </div>
                                <p className="text-center text-gray-300 mt-6 text-xl font-medium group-hover:text-white transition-colors">{img.alt}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Overview & Achievement */}
                <div className="max-w-4xl mx-auto mb-24">
                    <div className="space-y-8">
                        <section>
                            <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                The FAU WiSo AI Hackathon challenged participants to build innovative AI-driven solutions for real-world business problems within a tight deadline.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-white mb-4">Solution</h3>
                            <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                Built an AI Co-Founder Agent that acts as a strategic partner for aspiring entrepreneurs. By combining multiple specialized AI agents, the system can perform:
                            </p>
                            <ul className="grid md:grid-cols-2 gap-4">
                                {[
                                    { title: "Market Validation", desc: "Real-time analysis of market trends and potential demand." },
                                    { title: "Competitive Analysis", desc: "Automated identification and profiling of competitors." },
                                    { title: "Business Model Planning", desc: "Structured generation of lean canvas and revenue strategies." },
                                    { title: "Interactive Feedback", desc: "Natural language interface for deep diving into specific idea aspects." },
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
                            <h3 className="text-2xl font-bold text-white mb-4">Impact & Results</h3>
                            <div className="bg-[#e91e63]/5 border border-[#e91e63]/20 p-6 rounded-lg">
                                <p className="text-gray-300 italic">
                                    "The prototype stood out for its technical robustness and practical utility, ultimately securing the 1st Place award at the FAU WiSo AI Hackathon."
                                </p>
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

export default FAUAIHackathon;
