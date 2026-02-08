
import React from 'react';
import {
  Github,
  Linkedin,
  FileText,
  Phone,
  Mail,
  ExternalLink,
  ChevronRight,
  Code,
  Layout,
  Lightbulb,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Reusable components to maintain pixel-perfect styling
const Card = ({ children, className = "" }: { children?: React.ReactNode, className?: string, key?: React.Key }) => (
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
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <Link to="/#hero" className="text-[#e91e63] font-bold text-xl cursor-pointer">SM</Link>
      <div className="flex gap-8 text-sm font-medium">
        <Link to="/#hero" className="hover:text-[#e91e63] transition-colors cursor-pointer">Home</Link>
        <Link to="/#about" className="hover:text-[#e91e63] transition-colors cursor-pointer">About</Link>
        <Link to="/#featured-projects" className="hover:text-[#e91e63] transition-colors cursor-pointer">Projects</Link>
        <Link to="/#hackathons" className="hover:text-[#e91e63] transition-colors cursor-pointer">Hackathons</Link>
      </div>
    </div>
  </nav>
);

// Replace with your image file path, e.g., '/assets/images/profile.jpg'
const PROFILE_IMAGE_URL = "/assets/images/Profile.jpeg";

const Hero = () => (
  <section id="hero" className="min-h-screen flex flex-col md:flex-row items-stretch pt-16 scroll-mt-20">
    <div className="md:w-5/12 bg-[#1a1325]">
      <img
        src={PROFILE_IMAGE_URL}
        alt="Subitha Murugesan"
        className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
      />
    </div>
    <div className="md:w-7/12 bg-[#1a1325] p-8 md:p-16 flex flex-col justify-center">
      <h1 className="text-4xl md:text-6xl font-bold text-[#e91e63] mb-2 whitespace-nowrap">Subitha Murugesan</h1>
      <h2 className="text-3xl text-white font-semibold mb-6">AI Engineer</h2>
      <p className="text-xl text-gray-400 mb-12">Generative AI | Agentic AI | MLOPS | Data Science</p>

      <div className="space-y-6 max-w-xl">
        <a href="https://www.linkedin.com/in/subitha-murugesan/" target="_blank" rel="noopener noreferrer" className="block group">
          <Card className="flex items-center gap-4 hover:border-[#e91e63] transition-all">
            <div className="p-3 bg-white/5 rounded-md text-[#e91e63]"><Linkedin size={20} /></div>
            <div className="flex-1">
              <h4 className="font-bold text-lg">Subitha Murugesan LinkedIn</h4>
              <p className="text-xs text-gray-400 line-clamp-2">Generative AI Engineer @ BMW Group | AI Engineer-Bosch | MLOps | AI-ML, NLP, Generative AI, Agentic AI, RAG, Graph RAG, MCP, AWS, LLMs | Data Science | Master’s in International Information Systems@FAU Erlangen-Nürnberg</p>
            </div>
            <ExternalLink size={18} className="text-[#e91e63]" />
          </Card>
        </a>
        <a href="https://github.com/Subitha-Murugesan" target="_blank" rel="noopener noreferrer" className="block group">
          <Card className="flex items-center gap-4 hover:border-[#e91e63] transition-all">
            <div className="p-3 bg-white/5 rounded-md text-[#e91e63]"><Github size={20} /></div>
            <div className="flex-1">
              <h4 className="font-bold text-lg">Subitha Murugesan Github</h4>
              <p className="text-xs text-gray-400 line-clamp-2">Generative AI Engineer @ BMW Group | AI Engineer-Bosch | MLOps | AI-ML, NLP, Generative AI, Agentic AI, RAG, Graph RAG, MCP, AWS, LLMs | Data Science | Master’s in International Information Systems@FAU Erlangen-Nürnberg</p>
            </div>
            <ExternalLink size={18} className="text-[#e91e63]" />
          </Card>
        </a>

      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <div className="border border-[#e91e63] text-[#e91e63] px-6 py-3 rounded-sm font-medium flex items-center gap-2">
          <Phone size={18} /> +49 15510413962
        </div>
        <div className="border border-[#e91e63] text-[#e91e63] px-6 py-3 rounded-sm font-medium flex items-center gap-2">
          <Mail size={18} /> subithaa10@gmail.com
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="bg-[#f8b4b4] py-24 px-8 scroll-mt-20">
    <div className="max-w-6xl mx-auto">
      <SectionTitle light>About Me</SectionTitle>
      <div className="space-y-6">
        {[
          {
            num: "1",
            title: "Generative AI Working Student - BMW Group Munich Germany",
            desc: "Currently at BMW Group, building scalable agentic AI workflows with LangGraph, n8n, CrewAI, MCP servers, and AWS cloud Solutions boosting efficiency by 40%, cutting manual effort by 35%, and speeding evaluation cycles by 67%."
          },
          {
            num: "2",
            title: "Specialization",
            desc: "Expertise in Generative AI, AI Agents, and Agentic AI, MCP, AWS cloud Solutions, MLOPS and Data Science."
          },
          {
            num: "3",
            title: "Bosch Experience",
            desc: "Possesses 3.5 years of experience from Bosch in developing and deploying AI/ML-powered solutions, with strong expertise in MLOps and end-to-end AI/ML pipelines."
          },
          {
            num: "4",
            title: "Master's Program - soon to be graduated",
            desc: <>Master's student in International Information Systems at FAU Erlangen-Nuremberg, specializing in Data Science and AI, with a <b>Master thesis on GraphRAG at Siemens Healthineers</b>.</>
          },
          {
            num: "5",
            title: "Key Achievements",
            desc: "Independently Implemented GraphRAG, automated MCP workflows, and improved retrieval accuracy by ~70% with RAGAS during my internship at BMW Group, also won multiple AI hackathons and contributed to open-source GitHub projects."
          }
        ].map((item, idx) => (
          <div key={idx} className="flex border border-[#1a1325] overflow-hidden rounded-md group hover:bg-white/10 transition-colors">
            <div className="bg-[#2a223a] text-white w-20 flex items-center justify-center text-3xl font-bold">
              {item.num}
            </div>
            <div className="flex-1 p-6 text-[#1a1325]">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-lg opacity-80">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyPortfolio = () => (
  <section className="bg-[#1a1325] py-24 px-8 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#e91e63_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
    </div>
    <div className="max-w-6xl mx-auto relative z-10">
      <SectionTitle>Why This Portfolio?</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            icon: <Layout className="text-[#e91e63]" />,
            title: "Comprehensive Showcase",
            desc: "This is a comprehensive project portfolio showcasing Subitha's work in AI, Generative AI, Agentic AI, MCP, AWS cloud Solutions, MLOPS and Data Science."
          },
          {
            icon: <Lightbulb className="text-[#e91e63]" />,
            title: "Diverse Projects",
            desc: "Features real-world projects, hackathon submissions, and professional implementations."
          },
          {
            icon: <Code className="text-[#e91e63]" />,
            title: "Hands-On Expertise",
            desc: "Demonstrates expertise through hands-on examples and GitHub repositories."
          },
          {
            icon: <Cpu className="text-[#e91e63]" />,
            title: "Innovation Hub",
            desc: "Serves as a central hub for exploring AI/ML innovations and technical capabilities."
          }
        ].map((item, idx) => (
          <Card key={idx} className="p-10 border-white/10">
            <div className="mb-6">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const ProjectHighlight = () => (
  <div id="projects" className="scroll-mt-20">
    <section className="bg-[#f8b4b4] py-24 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-tr-[40px] rounded-bl-[40px] p-12 shadow-2xl flex flex-col h-full">
          <h2 className="text-4xl font-bold text-[#1a1325] mb-6">Projects</h2>
          <p className="text-gray-700 text-xl mb-12 flex-grow">
            Real-world Generative AI, Agentic AI, MCP, AWS cloud Solutions, MLOPS and Data Science projects showcasing production-ready implementations.
          </p>
          <Link to="/#featured-projects" className="bg-[#60126a] text-white px-8 py-4 w-fit rounded-sm font-bold flex items-center gap-2 hover:bg-[#4a0e52] transition-colors">
            Explore Projects
          </Link>
        </div>
        <div className="bg-white rounded-tr-[40px] rounded-bl-[40px] p-12 shadow-2xl flex flex-col h-full">
          <h2 className="text-4xl font-bold text-[#1a1325] mb-6">Hackathons</h2>
          <p className="text-gray-700 text-xl mb-12 flex-grow">
            Award-winning AI/ML solutions built through rapid prototyping and collaboration under tight timelines.
          </p>
          <Link to="/#hackathons" className="bg-[#60126a] text-white px-8 py-4 w-fit rounded-sm font-bold flex items-center gap-2 hover:bg-[#4a0e52] transition-colors">
            View Hackathons
          </Link>
        </div>
      </div>
    </section>

    <section id="featured-projects" className="bg-[#1a1325] py-24 px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Featured Projects</SectionTitle>
        <p className="text-gray-400 text-xl mb-12">Explore a diverse collection of AI, Generative AI, Agentic AI, MCP, AWS cloud Solutions, MLOPS and Data Science projects showcasing real-world implementations and technical expertise.</p>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {/* Project 1 */}
          <div className="bg-white rounded-sm p-8 text-[#1a1325] flex flex-col">
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-[#e91e63] pb-2">Campus Hub - Your University Companion App</h3>
            <div className="aspect-video bg-gray-100 mb-8 rounded-lg overflow-hidden shadow-inner">
              {/* Replace with your image: /assets/images/campus-hub.jpg */}
              <img src="/assets/images/campus hub.png" alt="Campus Hub" className="w-full h-full object-contain" />
            </div>
            <p className="text-lg mb-8 opacity-90">A comprehensive web application for students and staff at Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU) providing integrated access to campus life features.</p>
            <ul className="grid grid-cols-2 gap-4 mb-8">
              {["Library Management", "Classroom Navigation", "Course Timetables", "Cafeteria Occupancy", "Issue Reporting", "Digital Student ID", "Meeting Room Bookings", "AI Chatbot Assistant (Lara)"].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm font-semibold">
                  <div className="w-1.5 h-1.5 bg-[#e91e63] rounded-full" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/projects/campus-hub" className="mt-auto bg-[#e91e63] text-white px-6 py-3 font-bold w-fit rounded-sm hover:bg-[#c2185b]">View Details</Link>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-sm p-8 text-[#1a1325] flex flex-col">
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-[#e91e63] pb-2">AI Co-Founder Agent Web App</h3>
            <div className="aspect-video bg-gray-100 mb-8 rounded-lg overflow-hidden shadow-inner">
              {/* Replace with your image: /assets/images/ai-cofounder.jpg */}
              <img src="/assets/images/AIco1.png" alt="AI Co-Founder" className="w-full h-full object-contain" />
            </div>
            <p className="text-lg mb-8 opacity-90">A comprehensive web application for analyzing and validating business ideas with AI-powered insights. Built with React, TypeScript, and Vite.</p>
            <ul className="grid grid-cols-2 gap-4 mb-8">
              {["Market Analysis", "Competitive Analysis", "Business Model Planning", "Target User Analysis", "MVP Validation", "Idea Summary", "Real-time Chat"].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm font-semibold">
                  <div className="w-1.5 h-1.5 bg-[#e91e63] rounded-full" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/projects/ai-cofounder" className="mt-auto bg-[#e91e63] text-white px-6 py-3 font-bold w-fit rounded-sm hover:bg-[#c2185b]">View Details</Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Blog Creation using GenAI on AWS", img: "/assets/images/Genai_aws.png", description: "Serverless application that generates blogs automatically using AWS Lambda, Bedrock, and Claude AI.", link: "/projects/blog-genai" },
            { title: "Advanced RAG Pipeline using LangChain & Ollama", img: "/assets/images/RAG_Aktiengesellschaft.svg", description: "RAG pipeline that retrieves relevant documents and generates accurate answers using LangChain, Ollama, Chroma, and FAISS.", link: "/projects/advanced-rag" },
            { title: "MCP (Model Context Protocol) HR Leave Management Assistant", img: "/assets/images/MCP.svg", description: "Python-based MCP server that powers an HR assistant chatbot for managing employee leave with natural language queries.", link: "/projects/mcp-hr-assistant" },
            { title: "Graph RAG with Neo4j, LangChain, and Groq LLM", img: "/assets/images/ragbased.webp", description: "Advanced RAG system combining graph databases and LLMs for enhanced context retrieval and response generation.", link: "/projects/graph-rag" },
            { title: "LangChain Agent Combining Wikipedia, ArXiv, and Custom RAG Tools", img: "/assets/images/AIAgents.png", description: "LangChain agents that dynamically choose and use multiple tools (Wikipedia, ArXiv, custom RAG) to answer varied queries.", link: "/projects/langchain-agent" },
            { title: "LangGraph Chatbot with External Tools (Wikipedia & Arxiv)", img: "/assets/images/langgraph.jpeg", description: "Stateful chatbot using LangGraph that integrates Wikipedia and Arxiv APIs for extended knowledge retrieval.", link: "/projects/langgraph-chatbot" },
            { title: "Chatbot with OpenAI GPT and LLaMA Using LangChain", img: "/assets/images/chatbotgpt.jpg", description: "AI chatbot using LangChain that integrates OpenAI GPT and Meta LLaMA models with a Streamlit UI for flexible model switching.", link: "/projects/chatbot-gpt-llama" },
            { title: "Advanced RAG Pipeline using LangChain and Amazon Bedrock", img: "/assets/images/awsrag.png", description: "Cloud-native RAG application that allows users to interactively query PDF documents and receive context-aware answers using AWS Bedrock.", link: "/projects/bedrock-rag" },
            { title: "MCP Chatbot Cursor Integration", img: "/assets/images/mcpchatbot.png", description: "Intelligent chatbot that integrates multiple MCP servers with Groq LLMs for seamless task orchestration in the Cursor IDE.", link: "/projects/mcp-chatbot-cursor" },
            { title: "Agentic AI with Phidata Framework - Multimodal Agents", img: "/assets/images/agenticai.webp", description: "Multimodal agentic AI application that combines specialized agents for stock analysis and news retrieval using Phidata and Groq LLM.", link: "/projects/phidata-agent" },
            { title: "Agentic AI with CrewAI & Gemini - Autonomous Marketing Workflow", img: "/assets/images/crewai.png", description: "Full agentic workflow using CrewAI with specialized marketing agents powered by Google Gemini 2.0 Flash for autonomous content generation.", link: "/projects/crewai-marketing" },
            { title: "CrewAI Flows - Agentic Workflow Collection", img: "/assets/images/crewaiflows.png", description: "Collection of CrewAI workflow examples demonstrating flows, states, routing logic, and multi-agent collaboration for complex automation.", link: "/projects/crewai-flows" }
          ].map((proj, idx) => (
            <div key={idx} className="bg-white p-6 rounded-sm text-[#1a1325] flex flex-col h-full hover:shadow-2xl transition-all border-t-4 border-[#e91e63]">
              <div className="aspect-video bg-gray-100 mb-6 overflow-hidden rounded">
                <img src={proj.img.startsWith('/') ? proj.img : `https://picsum.photos/${idx + 100}/400/250`} alt={proj.title} className="w-full h-full object-contain" />
              </div>
              <h4 className="font-bold text-lg mb-2">{proj.title}</h4>
              {/* @ts-ignore - description is optional */}
              {proj.description && <p className="text-sm text-gray-600 mb-4 flex-grow">{proj.description}</p>}
              {/* @ts-ignore - link is optional */}
              {proj.link ? (
                <Link to={proj.link} className="bg-[#e91e63] text-white px-4 py-2 text-sm font-bold w-fit rounded-sm hover:bg-[#c2185b] mt-auto">View Details</Link>
              ) : (
                <button className="bg-[#e91e63] text-white px-4 py-2 text-sm font-bold w-fit rounded-sm hover:bg-[#c2185b] mt-auto">View Details</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const Hackathons = () => (
  <section id="hackathons" className="bg-[#1a1325] py-24 px-8 border-t border-white/10 scroll-mt-20">
    <div className="max-w-7xl mx-auto">
      <SectionTitle>Hackathons</SectionTitle>
      <p className="text-gray-400 text-xl mb-12">Celebrate the innovative achievements from various hackathons, showcasing award-winning projects and competitive solutions in AI, Generative AI, Agentic AI, MLOPS and Data Science.</p>

      <div className="grid md:grid-cols-2 gap-12">
        {[
          {
            title: "AI Hackathon - Winner Friedrich-Alexander-Universität Erlangen-Nürnberg",
            desc: "AI Co-Founder Agent prototype that validates startup ideas and generates market insights, securing 1st place in the FAU WiSo AI Hackathon.",
            img: "/assets/images/Hack1.jpeg",
            link: "/hackathons/fau-ai"
          },
          {
            title: "EELISA Generative AI Experience Lab - 2nd Place",
            desc: "GenAI Campus Hub prototype with integrated chatbots for smart campus services, earning jury recognition for technical excellence.",
            img: "/assets/images/Hack2.jpg",
            link: "/hackathons/eelisa-genai"
          },
          {
            title: "Siemens Healthineers DNA Hackathon",
            desc: "RAG-based medical assistant chatbot with FHIR-based data integration to support clinical insights for healthcare professionals.",
            img: "/assets/images/Hack3.jpg",
            link: "/hackathons/siemens-healthineers"
          },
          {
            title: "Healthcare Hackathon Bayern 2025",
            desc: "AWS Bedrock + RAG conversational AI prototype developed in a 5-day innovation sprint to make healthcare data accessible.",
            img: "/assets/images/Hack4.png",
            link: "/hackathons/healthcare-bayern"
          }
        ].map((hack, idx) => (
          <div key={idx} className="bg-white p-8 rounded-sm text-[#1a1325] flex flex-col h-full hover:shadow-2xl transition-all border-t-4 border-[#e91e63]">
            <div className="aspect-video bg-gray-100 mb-8 rounded overflow-hidden shadow-lg">
              <img src={hack.img} alt={hack.title} className="w-full h-full object-cover" />
            </div>
            <h4 className="font-bold text-xl mb-4 text-[#e91e63]">{hack.title}</h4>
            <p className="text-lg opacity-90 flex-grow mb-8">{hack.desc}</p>
            <Link to={hack.link} className="bg-[#e91e63] text-white px-6 py-3 font-bold w-fit rounded-sm hover:bg-[#c2185b]">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#1a1325] py-12 px-8 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h3 className="text-2xl font-bold text-[#e91e63] mb-2">Subitha Murugesan</h3>
        <p className="text-gray-500">AI Engineer</p>
        <p className="text-gray-500">Generative AI | Agentic AI | MLOPS | Data Science</p>
      </div>
      <div className="flex flex-col items-center md:items-end gap-3 text-gray-500 text-sm">
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
        <p className="mt-2">© 2026 Subitha Murugesan. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

function Home() {
  return (
    <div className="min-h-screen bg-[#1a1325] text-white">
      <Navbar />
      <Hero />
      <About />
      <WhyPortfolio />
      <ProjectHighlight />
      <Hackathons />
      <Footer />
    </div>
  );
}

export default Home;
