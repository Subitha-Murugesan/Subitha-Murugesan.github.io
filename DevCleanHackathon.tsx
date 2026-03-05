
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
    Layers,
    Bot,
    HardDrive,
    Bell,
    CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Card = ({ children, className = "" }: { children?: React.ReactNode, className?: string, key?: React.Key }) => (
    <div className={`bg-[#2a223a] rounded-lg p-6 border border-white/5 shadow-xl ${className}`}>
        {children}
    </div>
);

const galleryImages = [
    { src: "/assets/images/1772542150455.jpeg", alt: "DevClean Presentation at ZOLLHOF" },
    { src: "/assets/images/1772542147678.jpeg", alt: "DevClean Telegram Bot Interface" },
    { src: "/assets/images/1772542190793.jpeg", alt: "OpenClaw Global Unhackathon Atmosphere" },
    { src: "/assets/images/1772542147070.jpeg", alt: "Team Collaboration" },
    { src: "/assets/images/1772542147132.jpeg", alt: "Hackathon Pitching Session" },
    { src: "/assets/images/1772542147362.jpeg", alt: "Project Demo" },
    { src: "/assets/images/1772542147585.jpeg", alt: "Live Dashboard View" },
    { src: "/assets/images/1772542147642.jpeg", alt: "System Architecture Discussion" },
    { src: "/assets/images/1772542192921.jpeg", alt: "Networking with Mentors" },
];

const DevCleanHackathon = () => {
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
                        <Code size={20} /> OpenClaw Global Unhackathon
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">DevClean - AI-Powered Disk Optimization</h1>
                    <h2 className="text-2xl md:text-3xl text-[#e91e63] font-semibold mb-8">Multi-Agent AI Disk Cleanup Assistant</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                        Participated in the OpenClaw Global Unhackathon organized by AI Tinkerers in Nuremberg at ZOLLHOF. Together with Vigneshkumar Selvaraj, built 𝐃𝐞𝐯𝐂𝐥𝐞𝐚𝐧, an AI-powered system to handle the dreaded disk space warning using Multi-AI Agents.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <a
                            href="https://github.com/Subitha-Murugesan/DevClean_AI-Powered-Disk-Optimization-System-using-OpenClaw-Principles"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                        >
                            <Github size={20} /> GitHub Repository
                        </a>
                        <a
                            href="https://www.linkedin.com/feed/update/urn:li:activity:7434870047430316035/"
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
                                <HardDrive className="text-[#e91e63]" /> The Problem
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                As developers, our storage fills up silently because of:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Hidden npm cache accumulation",
                                    "Orphaned Docker images",
                                    "Stale Python virtual environments",
                                    "Hidden __pycache__ folders scattered across projects"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/5">
                                        <div className="text-[#e91e63]"><CheckCircle2 size={18} /></div>
                                        <span className="font-semibold text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Bot className="text-[#e91e63]" /> What DevClean Does
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { title: "Automated Checks", desc: "Monitors disk usage every day at 9 AM automatically." },
                                    { title: "Intelligent Identification", desc: "Finds files that can be safely cleaned without breaking projects." },
                                    { title: "Removals Suggestions", desc: "Suggests the most impactful files to remove first." },
                                    { title: "Telegram Notifications", desc: "Sends a comprehensive summary to Telegram for easy tracking." },
                                    { title: "Conversational Interface", desc: "Let's you type 'Analyze disk' anytime to trigger an instant check." },
                                    { title: "React Dashboard", desc: "Shows all storage metrics in a simple, beautiful interface." },
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
                                <Layers className="text-[#e91e63]" /> Core Principles
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-6 bg-[#e91e63]/5 border border-[#e91e63]/20 rounded-lg">
                                    <h4 className="font-bold mb-2">Multi-Agent Automation</h4>
                                    <p className="text-gray-400 text-sm">Specialized AI agents working together to monitor, analyze, and communicate disk health.</p>
                                </div>
                                <div className="p-6 bg-[#e91e63]/5 border border-[#e91e63]/20 rounded-lg">
                                    <h4 className="font-bold mb-2">Human-in-the-Loop</h4>
                                    <p className="text-gray-400 text-sm">AI suggests and analyzes, but the human retains final control via the dashboard or chatbot.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Terminal className="text-[#e91e63]" /> Tech Stack
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    { name: "OpenClaw (Agent System)", icon: <Bot size={18} /> },
                                    { name: "Python Backend", icon: <Server size={18} /> },
                                    { name: "React Frontend", icon: <Layers size={18} /> },
                                    { name: "Docker", icon: <Layers size={18} /> },
                                    { name: "Telegram Bot API", icon: <Bell size={18} /> },
                                    { name: "Scheduled Automation", icon: <Calendar size={18} /> },
                                ].map((tech, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/5">
                                        <div className="text-[#e91e63]">{tech.icon}</div>
                                        <span className="font-semibold text-sm">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-white/5 p-8 rounded-xl border border-white/10">
                            <h4 className="text-xl font-bold mb-4">Event Sponsors</h4>
                            <div className="flex flex-wrap gap-x-8 gap-y-4 text-gray-400 font-medium italic text-lg">
                                <span>CopilotKit</span>
                                <span>ElevenLabs</span>
                                <span>Composio</span>
                                <span>Auth0</span>
                                <span>OpenRouter</span>
                                <span>Vapi</span>
                                <span className="text-[#e91e63]">Red Bull</span>
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

export default DevCleanHackathon;
