
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CampusHub from './CampusHub';
import AiCofounder from './AiCofounder';
import BlogGenAI from './BlogGenAI';
import AdvancedRAG from './AdvancedRAG';
import MCPHRAssistant from './MCPHRAssistant';
import GraphRAG from './GraphRAG';
import LangChainAgent from './LangChainAgent';
import LangGraphChatbot from './LangGraphChatbot';
import ChatbotGPTLLaMA from './ChatbotGPTLLaMA';
import BedrockRAG from './BedrockRAG';
import MCPChatbotCursor from './MCPChatbotCursor';
import PhidataAgent from './PhidataAgent';
import CrewAIMarketing from './CrewAIMarketing';
import CrewAIFlows from './CrewAIFlows';
import FAUAIHackathon from './FAUAIHackathon';
import EELISAGenAI from './EELISAGenAI';
import SiemensHealthineers from './SiemensHealthineers';
import HealthcareHackathon from './HealthcareHackathon';

import ScrollToHash from './ScrollToHash';

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/campus-hub" element={<CampusHub />} />
        <Route path="/projects/ai-cofounder" element={<AiCofounder />} />
        <Route path="/projects/blog-genai" element={<BlogGenAI />} />
        <Route path="/projects/advanced-rag" element={<AdvancedRAG />} />
        <Route path="/projects/mcp-hr-assistant" element={<MCPHRAssistant />} />
        <Route path="/projects/graph-rag" element={<GraphRAG />} />
        <Route path="/projects/langchain-agent" element={<LangChainAgent />} />
        <Route path="/projects/langgraph-chatbot" element={<LangGraphChatbot />} />
        <Route path="/projects/chatbot-gpt-llama" element={<ChatbotGPTLLaMA />} />
        <Route path="/projects/bedrock-rag" element={<BedrockRAG />} />
        <Route path="/projects/mcp-chatbot-cursor" element={<MCPChatbotCursor />} />
        <Route path="/projects/phidata-agent" element={<PhidataAgent />} />
        <Route path="/projects/crewai-marketing" element={<CrewAIMarketing />} />
        <Route path="/projects/crewai-flows" element={<CrewAIFlows />} />
        <Route path="/hackathons/fau-ai" element={<FAUAIHackathon />} />
        <Route path="/hackathons/eelisa-genai" element={<EELISAGenAI />} />
        <Route path="/hackathons/siemens-healthineers" element={<SiemensHealthineers />} />
        <Route path="/hackathons/healthcare-bayern" element={<HealthcareHackathon />} />
      </Routes>
    </Router>
  );
}

export default App;
