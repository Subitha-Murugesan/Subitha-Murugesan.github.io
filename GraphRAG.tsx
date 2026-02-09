
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
    X
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
    { src: "/assets/images/ragbased.webp", alt: "GraphRAG Architecture" },
];

const GraphRAG = () => {
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
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#e91e63] mb-6">Graph RAG with Neo4j, LangChain & Groq LLM</h1>
                    <h2 className="text-2xl md:text-3xl text-white font-semibold mb-8">Knowledge Graph Powered RAG</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                        Advanced RAG system combining graph databases and LLMs for enhanced context retrieval and response generation.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <a
                            href="https://github.com/Subitha-Murugesan/Graph-RAG-with-Neo4j-LangChain-and-Groq-LLM"
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
                    <h3 className="text-2xl font-bold text-white mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Project Gallery</h3>
                    <div className="flex flex-col gap-12 max-w-3xl mx-auto">
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
                                        className="w-full h-auto object-contain max-h-[400px] mx-auto group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                                    />
                                </div>
                                <p className="text-center text-gray-300 mt-6 text-xl font-medium group-hover:text-white transition-colors">{img.alt}</p>
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
                                This project implements GraphRAG, a technique that enhances traditional Retrieval-Augmented Generation by using a knowledge graph (Neo4j). By capturing entities and their relationships, the system can reason about connected data, leading to more comprehensive and accurate answers from the LLM (Groq).
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                            <ul className="grid md:grid-cols-2 gap-4">
                                {[
                                    { title: "Graph Database Integration", desc: "Integrated Neo4j graph database with LangChain to store and query rich relational data for improved retrieval accuracy" },
                                    { title: "LLM Processing", desc: "Utilized Groq's LLM for generating precise answers based on graph-augmented context" },
                                    { title: "End-to-End Pipeline", desc: "Demonstrated the end-to-end flow: data ingestion → graph embedding → contextual retrieval → language model response generation" },
                                    { title: "Advanced RAG System", desc: "Built an advanced Retrieval-Augmented Generation (RAG) system combining graph databases and LLMs for enhanced context retrieval and response generation" },
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
                            <h3 className="text-2xl font-bold text-white mb-4">Key Skills</h3>
                            <ul className="text-gray-300 grid grid-cols-2 md:grid-cols-3 gap-3 bg-white/5 p-6 rounded-lg border border-white/5">
                                {[
                                    "Neo4j",
                                    "LangChain",
                                    "Groq LLM",
                                    "Python",
                                    "Graph Databases",
                                    "Retrieval-Augmented Generation",
                                    "AI Pipelines",
                                    "Prompt Engineering"
                                ].map((skill, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-[#e91e63] rounded-full" />
                                        {skill}
                                    </li>
                                ))}
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

export default GraphRAG;
