
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
    Layout,
    Clock,
    Shield,
    Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Card = ({ children, className = "" }: { children?: React.ReactNode, className?: string, key?: React.Key }) => (
    <div className={`bg-[#2a223a] rounded-lg p-6 border border-white/5 shadow-xl ${className}`}>
        {children}
    </div>
);

const galleryImages = [
    { src: "/assets/images/park1.png", alt: "Parking System Overview" },
    { src: "/assets/images/park2.png", alt: "Booking Interface" },
    { src: "/assets/images/park3.png", alt: "Space Management" },
    { src: "/assets/images/park4.png", alt: "Mobile Responsive View" },
];

const ParkingReservation = () => {
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
                    <h1 className="text-4xl md:text-6xl font-bold text-[#e91e63] mb-6">Digital Parking Reservation System</h1>
                    <h2 className="text-2xl md:text-3xl text-white font-semibold mb-8">Efficient Parking Management Solution</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                        A modern web application designed to streamline the process of finding and reserving parking spaces. Built with Vite, React, and TypeScript, it features a responsive UI and a robust component system for a seamless user experience.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <a
                            href="https://parksmart-aef30.web.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#e91e63] hover:bg-[#c2185b] text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                        >
                            <Globe size={20} /> Live Site
                        </a>
                        <a
                            href="https://github.com/Subitha-Murugesan/Digital-Parking-Reservation-System"
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-12 mb-24">
                    <section>
                        <h3 className="text-2xl font-bold text-white mb-6">Project Overview</h3>
                        <p className="text-gray-300 leading-relaxed text-lg mb-6">
                            The Digital Parking Reservation System (ParkSmart) simplifies urban parking by allowing users to browse, book, and manage parking spots in real-time. It eliminates the frustration of searching for parking and provides a central hub for all reservation needs.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            The frontend is engineered for speed and accessibility, leveraging Vite for lightning-fast development and React with TypeScript for type-safe, maintainable code.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-white mb-6">Tech Stack</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { name: "Vite", icon: <Code size={20} /> },
                                { name: "React", icon: <Layout size={20} /> },
                                { name: "TypeScript", icon: <Shield size={20} /> },
                                { name: "Tailored UI", icon: <Smartphone size={20} /> },
                                { name: "Firebase", icon: <Globe size={20} /> },
                                { name: "Lucide Icons", icon: <Clock size={20} /> },
                            ].map((tech, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/5">
                                    <div className="text-[#e91e63]">{tech.icon}</div>
                                    <span className="font-semibold">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Key Features */}
                <section className="mb-24">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Key Features</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Real-time Availability",
                                desc: "Browse available parking locations and individual spaces with real-time status updates.",
                                icon: <Clock className="text-[#e91e63]" size={32} />
                            },
                            {
                                title: "Reservation Management",
                                desc: "Make, view, and manage your parking reservations effortlessly from a dedicated dashboard.",
                                icon: <Calendar className="text-[#e91e63]" size={32} />
                            },
                            {
                                title: "Responsive Design",
                                desc: "Mobile-first approach ensuring a seamless experience across all devices and screen sizes.",
                                icon: <Smartphone className="text-[#e91e63]" size={32} />
                            }
                        ].map((feature, idx) => (
                            <Card key={idx} className="flex flex-col items-center text-center p-8">
                                <div className="mb-6 p-4 bg-white/5 rounded-full">{feature.icon}</div>
                                <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                                <p className="text-gray-400">{feature.desc}</p>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Development Details */}
                <section className="bg-white/5 rounded-2xl p-8 md:p-12 mb-24 border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-8">Development & Structure</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-[#e91e63] mb-4 uppercase tracking-wider text-sm">Project Structure</h4>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 bg-[#e91e63] rounded-full mt-2" />
                                    <div>
                                        <span className="font-bold text-white">src/</span>
                                        <p className="text-sm text-gray-400">Core application source code</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 bg-[#e91e63] rounded-full mt-2" />
                                    <div>
                                        <span className="font-bold text-white">components/</span>
                                        <p className="text-sm text-gray-400">Reusable UI elements and page screens</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 bg-[#e91e63] rounded-full mt-2" />
                                    <div>
                                        <span className="font-bold text-white">ui/ design system</span>
                                        <p className="text-sm text-gray-400">Tailored component library under src/components/ui</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 bg-[#e91e63] rounded-full mt-2" />
                                    <div>
                                        <span className="font-bold text-white">Firebase config</span>
                                        <p className="text-sm text-gray-400">firebase.json for hosting/deploy configuration</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-[#e91e63] mb-4 uppercase tracking-wider text-sm">Development</h4>
                            <div className="bg-[#1a1325] p-4 rounded-lg font-mono text-xs border border-white/5 space-y-2">
                                <p className="text-gray-500">// Install dependencies</p>
                                <p className="text-[#e91e63]">npm install</p>
                                <p className="text-gray-500">// Start dev server</p>
                                <p className="text-[#e91e63]">npm run dev</p>
                                <p className="text-gray-500">// Build for production</p>
                                <p className="text-[#e91e63]">npm run build</p>
                                <p className="text-gray-500">// Preview production build</p>
                                <p className="text-[#e91e63]">npm run preview</p>
                            </div>
                        </div>
                    </div>
                </section>
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

export default ParkingReservation;
