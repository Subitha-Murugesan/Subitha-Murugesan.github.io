
import React from 'react';
import {
    Github,
    Linkedin,
    Mail,
    Phone,
    ArrowLeft,
    Briefcase,
    TrendingUp
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

const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1325]/90 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link to="/#work-experience" className="text-[#e91e63] font-bold text-xl flex items-center gap-2 hover:text-white transition-colors">
                <ArrowLeft size={20} /> Back to Work Experience
            </Link>
            <div className="text-sm font-medium text-gray-400">Professional Experience</div>
        </div>
    </nav>
);

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

interface JobMetric {
    value: string;
    label: string;
}

interface Job {
    id: string;
    company: string;
    location: string;
    role: React.ReactNode;
    period: string;
    image?: string;
    metrics?: JobMetric[];
    highlights: string[];
    icon: React.ReactNode;
}

const MetricBadge: React.FC<JobMetric> = ({ value, label }) => (
    <div className="bg-[#e91e63]/5 p-4 rounded-lg border border-[#e91e63]/20 flex flex-col items-center justify-center min-w-[120px]">
        <div className="flex items-center gap-2 text-[#e91e63] mb-1">
            <TrendingUp size={16} />
            <span className="text-2xl font-bold">{value}</span>
        </div>
        <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold text-center leading-tight">{label}</span>
    </div>
);

const Experience = () => {
    const jobs: Job[] = [
        {
            id: "bmw-working-student",
            company: "BMW Group",
            location: "Munich, Germany",
            role: <>Generative AI Engineer<br /><span className="text-xl opacity-80">Working Student</span></>,
            period: "September 2025 – Present",
            image: "/assets/images/bmw-ag-headquarters-43c8.jpg",
            metrics: [
                { value: "40%", label: "Work Speedup" },
                { value: "67%", label: "Time Saved" },
                { value: "35%", label: "Less Manual Effort" }
            ],
            highlights: [
                "Developed Agentic AI applications using LangGraph, n8n, and CrewAI to integrate multiple AI workflows for automation, multi-step reasoning, and decision-making (40% improved task efficiency and manual intervention time by 35%).",
                "Took ownership of use-case automation using n8n and LangGraph, driving end-to-end workflow automation and advanced decision-making, reducing evaluation cycle time from 6 weeks to 2 weeks (67% faster).",
                "Designed and implemented diffusion model pipelines to generate AI-driven visuals and enhance multimodal AI applications.",
                "Developed and optimized MCP (Model Context Protocol) servers, orchestrating AI workflows and ensuring scalable, reliable integration of AI models.",
                "Leveraged AWS (S3, Lambda, EC2, SageMaker) to deploy, scale, and manage AI workflows and MCP servers efficiently in cloud environments."
            ],
            icon: <div className="p-3 bg-[#e91e63]/10 rounded-full text-[#e91e63]"><Briefcase size={24} /></div>
        },
        {
            id: "siemens-thesis",
            company: "Siemens Healthineers",
            location: "Erlangen, Germany",
            role: <>Master Thesis<br /><span className="text-xl opacity-80">Graph RAG</span></>,
            period: "January 2026 – Present",
            image: "/assets/images/Siemens.jpg",
            metrics: [
                { value: "35%", label: "Better Results" },
                { value: "Deep", label: "Reasoning" }
            ],
            highlights: [
                "Researching and implementing Graph RAG to improve LLM outputs using structured knowledge graphs and enterprise databases (e.g., FHIR (Fast Healthcare Interoperability Resources)) to enhance contextual reasoning and information retrieval; GraphRAG has been shown to improve retrieval accuracy by up to ~35% compared to vector-only RAG in complex query scenarios.",
                "Developing a prototype system with LangChain and LLMs (Qwen2, LLaMA) for multi-hop reasoning and information retrieval.",
                "Evaluating and benchmarking Graph RAG against traditional RAG methods for accuracy, coherence, and scalability.",
                "Solving technical challenges in Graph Schema Design, retrieval mechanisms, and database integration for deployment."
            ],
            icon: <div className="p-3 bg-[#e91e63]/10 rounded-full text-[#e91e63]"><Briefcase size={24} /></div>
        },
        {
            id: "bmw-internship",
            company: "BMW Group",
            location: "Munich, Germany",
            role: <>Generative AI Engineer<br /><span className="text-xl opacity-80">Internship</span></>,
            period: "March 2025 – September 2025",
            image: "/assets/images/bmw-ag-headquarters-43c8.jpg",
            metrics: [
                { value: "70%", label: "Search Accuracy" },
                { value: "2.5x", label: "Response Speed" },
                { value: "63%", label: "Quality Boost" }
            ],
            highlights: [
                "Implemented GraphRAG end to end from scratch using Neo4j and LangChain, delivering ~70% improvement in retrieval accuracy and faster query response compared to PGVector-based RAG systems.",
                "Achieved ~63% higher F1-score (balances precision and recall) and ~29% higher context recall (proportion of relevant information retrieved), while reducing computational cost per query and improving system efficiency.",
                "Developed MCP server prototypes for automated slide generation, AI image creation using diffusion models, orchestrated using LangGraph for efficient MCP workflows.",
                "Designed scalable GraphRAG and MCP architectures, optimized data pipelines for 30% faster processing, and managed LangChain-based AI workflows for integrated and reliable system performance.",
                "Fine-tuned LLM (Large Language Models) prompts to improve query classification accuracy by 25% and contextual answer precision, evaluated using RAGAS (Retrieval-Augmented Generation Assessment) metrics.",
                "Conducted a comparative analysis of RAG in PGVector vs GraphRAG in Neo4j, resulting in 70% improvements in retrieval accuracy and 2.5x faster query execution time"
            ],
            icon: <div className="p-3 bg-[#e91e63]/10 rounded-full text-[#e91e63]"><Briefcase size={24} /></div>
        },
        {
            id: "bosch-ai-engineer",
            company: "Bosch Global Software Technologies",
            location: "Coimbatore, India",
            role: "AI Engineer",
            period: "07/2022 - 09/2024",
            image: "/assets/images/bosch_schillerhoehe_sh_img_w1280-2.jpg",
            metrics: [
                { value: "95%", label: "Happy Users" },
                { value: "60%", label: "Better Performance" },
                { value: "40%", label: "Smoother Operations" }
            ],
            highlights: [
                "Leveraged Transformer-based LLMs including Azure OpenAI (GPT-3.5 Turbo), and LLaMA with RAG to enhance chatbot contextual response quality and user experience by ~30%, developing POCs to validate model integration feasibility.",
                "Prototyped Robotic Process Automation (RPA) solutions, reducing manual operations by 40%, and managed Knowledge Graph (Stellargraph) for seamless integration, improving data retrieval speed by 35%.",
                "Collaborated with hardware teams to develop a Labcar reservation platform with a Knowledge Graph, winning the Innovation award at the 2023 Org-wide Tech event, resulting in 50+ bookings within first month.",
                "Led 50+ chatbot ML projects, delivering customer-focused solutions with cross-functional teams, achieving 95% customer satisfaction rate.",
                "Developed and managed NLP models with MLflow, maintaining an artifact model registry, and optimized container loads by over 60% through Docker and Kubernetes.",
                "Utilized Jenkins for CI/CD pipelines in Project CITI, ensuring vulnerability checks and performance improvements."
            ],
            icon: <div className="p-3 bg-[#e91e63]/10 rounded-full text-[#e91e63]"><Briefcase size={24} /></div>
        },
        {
            id: "bosch-junior-ai-engineer",
            company: "Bosch Global Software Technologies",
            location: "Coimbatore, India",
            role: <>Junior AI Engineer</>,
            period: "03/2021 - 07/2022",
            image: "/assets/images/bosch_schillerhoehe_sh_img_w1280-2.jpg",
            metrics: [
                { value: "35%", label: "Smarter Bots" },
                { value: "45%", label: "Quicker Launch" },
                { value: "50%", label: "Simpler Process" }
            ],
            highlights: [
                "Implemented autosuggestion for AI/ML models using Trie search tree and integrated ticketing systems (JIRA, RTC, Hotline) as a fallback for bots via RESTful APIs, improving bot response accuracy by 35%.",
                "Upgraded and managed Bot Factory (Governance platform designed to create, update, monitor bots all adhering MLOps principles) using VueJS, Spring Boot, Python-Flask, and RESTful services, delivering 10+ POCs for client proposals with 100% on-time deployment rate.",
                "Streamlined production rollouts reducing deployment time by 45% and developed a desktop installer for the chatbot to improve user accessibility by 60%.",
                "Implemented document reading in the Search Engine using TF/IDF and created a Ticket Searcher in the Unified Feedback System, leveraging Transformers for ticket analysis, achieving 40% improvement in recommendation accuracy.",
                "Automated email notifications using Python and Jenkins, reducing manual communication overhead by 50% and improving team notification efficiency."
            ],
            icon: <div className="p-3 bg-[#e91e63]/10 rounded-full text-[#e91e63]"><Briefcase size={24} /></div>
        }
    ];

    return (
        <div className="min-h-screen bg-[#1a1325] text-white flex flex-col">
            <Navbar />
            <main className="flex-grow pt-32 pb-24 px-8">
                <div className="max-w-6xl mx-auto">
                    <SectionTitle>Work Experience</SectionTitle>
                    <div className="space-y-12">
                        {jobs.map((job, idx) => (
                            <div key={idx} id={job.id} className="relative pl-8 md:pl-12 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white/10 scroll-mt-32">
                                <div className="absolute left-[-16px] top-0 bg-[#1a1325] p-1">
                                    {job.icon}
                                </div>
                                <div className="bg-[#2a223a]/50 rounded-xl p-8 border border-white/5 hover:border-[#e91e63]/30 transition-all">
                                    <div className="flex flex-col md:flex-row gap-8">
                                        {job.image && (
                                            <div className="md:w-1/2 shrink-0 bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                                                <img src={job.image} alt={job.company} className="w-full h-full object-contain shadow-lg min-h-[400px]" />
                                            </div>
                                        )}
                                        <div className="flex-1">
                                            <div className="mb-6">
                                                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                                                    <div className="flex-1">
                                                        <h3 className="text-2xl font-bold text-white mb-1">{job.role}</h3>
                                                        <p className="text-[#e91e63] font-semibold text-lg">{job.company}</p>
                                                    </div>
                                                    <div className="lg:text-right">
                                                        <p className="text-white font-bold text-xl">{job.period}</p>
                                                        <p className="text-gray-500 text-sm">{job.location}</p>
                                                    </div>
                                                </div>

                                                {job.metrics && (
                                                    <div className="flex flex-wrap gap-4 mb-8">
                                                        {job.metrics.map((metric, mIdx) => (
                                                            <MetricBadge key={mIdx} value={metric.value} label={metric.label} />
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            <ul className="space-y-3">
                                                {job.highlights.map((highlight, hIdx) => (
                                                    <li key={hIdx} className="flex gap-3 text-gray-400">
                                                        <div className="w-1.5 h-1.5 bg-[#e91e63] rounded-full mt-2 shrink-0" />
                                                        <span className="text-lg leading-relaxed">{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Experience;
