
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
    Mic,
    Activity,
    Webhook,
    MessageSquare,
    CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Card = ({ children, className = "" }: { children?: React.ReactNode, className?: string, key?: React.Key }) => (
    <div className={`bg-[#2a223a] rounded-lg p-6 border border-white/5 shadow-xl ${className}`}>
        {children}
    </div>
);

const galleryImages = [
    { src: "/assets/images/n8nvoice1.png", alt: "n8n Voice Trigger Workflow Overview" },
    { src: "/assets/images/n8nvoice2.png", alt: "Quality Defect Detection Node" },
    { src: "/assets/images/n8nvoice3.png", alt: "Frontend Voice Interface" },
    { src: "/assets/images/n8voice4.png", alt: "Payload Analysis and Response" },
];

const VoiceQualityScanner = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-[#1a1325] text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1325]/90 backdrop-blur-md border-b border-white/10 px-6 py-4">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <Link to="/#projects" className="text-[#e91e63] font-bold text-xl flex items-center gap-2 hover:text-white transition-colors">
                        <ArrowLeft size={20} /> Back to Projects
                    </Link>
                    <div className="text-sm font-medium text-gray-400">Project Details</div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="pt-32 pb-16 px-8 bg-gradient-to-b from-[#1a1325] to-[#2a223a]">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-[#e91e63]/20 text-[#e91e63] px-4 py-2 rounded-full mb-6 font-bold">
                        <Mic size={20} /> n8n Automation
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Voice n8n - Voice Trigger Quality Defect Scanner</h1>
                    <h2 className="text-2xl md:text-3xl text-[#e91e63] font-semibold mb-8">Voice-Enabled Defect Detection Workflow</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                        An innovative system demonstrating n8n automation workflows with a voice-enabled frontend. Detects and analyzes quality defects triggered by natural language voice commands.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <a
                            href="https://github.com/Subitha-Murugesan/N8N-Voice-Trigger-Quality-Defect-Scanner"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                        >
                            <Github size={20} /> GitHub Repository
                        </a>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto px-8 py-16">

                {/* Gallery Section */}
                <section className="mb-24">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Project Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {galleryImages.map((img, idx) => (
                            <div
                                key={idx}
                                className="bg-[#2a223a] rounded-xl p-4 border border-white/10 hover:border-[#e91e63]/50 transition-colors group cursor-pointer"
                                onClick={() => setSelectedImage(img.src)}
                            >
                                <div className="aspect-video w-full overflow-hidden rounded-lg">
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-contain shadow-2xl group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <p className="text-center text-gray-400 mt-4 text-sm font-medium">{img.alt}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* System Overview */}
                <div className="max-w-4xl mx-auto mb-24">
                    <div className="space-y-12">
                        <section>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Activity className="text-[#e91e63]" /> How It Works
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-lg mb-8">
                                The system allows users to speak commands in the browser. The frontend captures voice, converts it to text, and sends data to an n8n webhook for automated quality analysis.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { title: "Voice Capture", desc: "Browser-based microphone interaction and speech-to-text conversion." },
                                    { title: "n8n Processing", desc: "Automation engine validates payloads and analyzes transcription quality." },
                                    { title: "Intelligent Analysis", desc: "Classifies defects and triggers automated alerts or ticket creation." },
                                ].map((item, idx) => (
                                    <Card key={idx} className="border-white/5 hover:border-[#e91e63]/30 transition-all">
                                        <h4 className="font-bold text-white mb-2">{item.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                    </Card>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Webhook className="text-[#e91e63]" /> n8n Workflow Role
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                n8n acts as the central automation brain, handling everything from payload validation to defect classification.
                            </p>
                            <div className="bg-[#e91e63]/5 border border-[#e91e63]/20 p-6 rounded-lg">
                                <ul className="space-y-4">
                                    {[
                                        "Validate the voice payload received from the frontend webhook.",
                                        "Detect quality issues in the trigger and analyze transcription quality.",
                                        "Classify defects and generate automated reports/tickets.",
                                        "Return JSON or Text-to-Speech responses back to the interactive frontend."
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-3 text-gray-300">
                                            <div className="mt-1.5 w-1.5 h-1.5 bg-[#e91e63] rounded-full shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Terminal className="text-[#e91e63]" /> Tech Stack
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    { name: "n8n Automation", icon: <Webhook size={18} /> },
                                    { name: "JavaScript", icon: <Code size={18} /> },
                                    { name: "HTML5 Speech API", icon: <Mic size={18} /> },
                                    { name: "REST Webhooks", icon: <Server size={18} /> },
                                    { name: "JSON Payloads", icon: <Layers size={18} /> },
                                    { name: "Local Dev Server", icon: <Globe size={18} /> },
                                ].map((tech, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/5">
                                        <div className="text-[#e91e63]">{tech.icon}</div>
                                        <span className="font-semibold text-sm">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <MessageSquare className="text-[#e91e63]" /> Sample Interactions
                            </h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-white/5 rounded-lg border-l-4 border-[#e91e63]">
                                    <p className="text-sm text-gray-500 mb-1">Triggering a scan:</p>
                                    <p className="italic">"Scan for quality defects in the last 24 hours"</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-lg border-l-4 border-green-500">
                                    <p className="text-sm text-gray-500 mb-1">System Response:</p>
                                    <p className="italic font-mono text-sm text-green-400">
                                        &#123; "status": "HIGH_SEVERITY_DEFECT", "product": "Widget-X", "message": "High severity quality defect detected." &#125;
                                    </p>
                                </div>
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

export default VoiceQualityScanner;
