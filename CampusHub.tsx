
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
import { title } from 'process';

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
    { src: "/assets/images/campus hub.png", alt: "Campus Hub Overview" },
    { src: "/assets/images/student.png", alt: "Student Dashboard" },
    { src: "/assets/images/Lecturer.png", alt: "Lecturer Interface" },
    { src: "/assets/images/admin.png", alt: "Admin Panel" },
    { src: "/assets/images/staff.png", alt: "Staff Portal" },
    { src: "/assets/images/chatbot.png", alt: "AI Chatbot Assistant" },
    { src: "/assets/images/system.png", alt: "System Architecture" },
    { src: "/assets/images/clea.png", alt: "Cleaning Schedule" },
    { src: "/assets/images/sya.png", alt: "System Analytics" },
];

const CampusHub = () => {
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
                    <h1 className="text-4xl md:text-6xl font-bold text-[#e91e63] mb-6">Campus Hub</h1>
                    <h2 className="text-2xl md:text-3xl text-white font-semibold mb-8">Your University Companion App</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                        A comprehensive, modern web application for students and staff at Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU). This app provides integrated access to campus life features including library bookings, classroom navigation, course timetables, cafeteria information, facility issue reporting, and an intelligent AI chatbot assistant.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <a
                            href="https://campushub-99096.web.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#e91e63] hover:bg-[#c2185b] text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                        >
                            <Globe size={20} /> Live Site
                        </a>
                        <a
                            href="https://github.com/Subitha-Murugesan/Campus-Hub-Your-University-Companion-App"
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


                {/* Overview & Problem Statement */}
                <div className="max-w-4xl mx-auto mb-24">
                    <div className="space-y-8">
                        <section>
                            <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Campus Hub addresses the fragmentation of university services by providing a unified platform where students can access everything they need for their daily academic life. From checking cafeteria menus to booking study rooms, the application integrates multiple disparate systems into a single, cohesive interface.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                            <ul className="grid md:grid-cols-2 gap-4">
                                {[
                                    { title: "Library Management", desc: "Check hours, book study seats, and access library resources." },
                                    { title: "Classroom Navigation", desc: "GPS-enabled campus navigation with interactive floor plans." },
                                    { title: "Course Timetables", desc: "View and manage your academic schedule." },
                                    { title: "Cafeteria Occupancy", desc: "Real-time occupancy tracking and menu information." },
                                    { title: "Issue Reporting", desc: "Report and track facility maintenance issues." },
                                    { title: "Digital Student ID", desc: "NFC-enabled virtual student identification." },
                                    { title: "Meeting Room Bookings", desc: "Reserve meeting and study spaces" },
                                    { title: "Temperature Voting", desc: "Smart building climate control via user preferences" },
                                    { title: "Cleaning Schedule", desc: "Optimized cleaning schedules for staff" },
                                    { title: "Admin Analytics", desc: "Comprehensive campus analytics and insights" },
                                    {
                                        title: "Lara - AI Assistant",
                                        desc: [
                                            "Intelligent campus assistant powered by Google Gemini AI.",
                                            "Answers academic and campus-related questions.",
                                            "Real-time conversation with natural language understanding.",
                                            "Assists with library, navigation, courses, facilities, and more."
                                        ]
                                    },
                                ].map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className={`flex gap-4 p-4 bg-white/5 rounded-lg border border-white/5 ${feature.title.includes("Lara") ? "md:col-span-2 flex-col items-center text-center py-8" : ""}`}
                                    >
                                        <div className={`w-2 h-2 mt-2 bg-[#e91e63] rounded-full flex-shrink-0 ${feature.title.includes("Lara") ? "hidden" : ""}`} />
                                        <div className={feature.title.includes("Lara") ? "w-full max-w-2xl" : ""}>
                                            <h4 className={`font-bold text-white ${feature.title.includes("Lara") ? "text-xl mb-4 text-[#e91e63] flex items-center justify-center gap-3" : ""}`}>
                                                {feature.title.includes("Lara") && <div className="w-2 h-2 bg-[#e91e63] rounded-full" />}
                                                {feature.title}
                                            </h4>
                                            {Array.isArray(feature.desc) ? (
                                                <ul className={`text-gray-400 text-sm mt-1 space-y-2 ${feature.title.includes("Lara") ? "list-none space-y-3 text-base" : "list-disc list-inside"}`}>
                                                    {feature.desc.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-gray-400 text-sm mt-1">{feature.desc}</p>
                                            )}
                                        </div>
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
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
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

export default CampusHub;
