import NNOAH from "./assets/NNOAH.png";
import PIKOSEN from "./assets/PIKOSEN.png";
import Aristortle from "./assets/Aristortle.png";
import CribConnect from "./assets/CribConnect.png";
import CCNA from "./assets/CCNA.jpg";
import CCNA2 from "./assets/CCNA2.jpg";
import CCNA3 from "./assets/CCNA3.jpg";
import Capstone from "./assets/capstone.jpg";
import IBMCapstone from "./assets/ibm capstone.jpg";
import IBMRagCert from "./assets/Certificate 1 - Eugene Villegas.pdf";
import Resume from "./assets/Eugene Villegas - Resume.pdf";

export const ACCENT = "#4FD1C5";
export const WARM = "#F5B546";
export const BLUE = "#7AA2FF";
export const VIOLET = "#C4A1FF";

export const profile = {
  name: "Eugene D. Villegas",
  initials: "EV",
  role: "AI Developer",
  tagline: "AI developer · computer engineer",
  // Shown as a status chip in the hero; set to "" to hide it.
  availability: "Open to AI developer roles",
  degree: "BS Computer Engineering",
  school: "Technological Institute of the Philippines",
  years: "2022 – 2026",
  location: "Manila",
  email: "villegase.cpe@gmail.com",
  github: "https://github.com/eugeniuss7",
  linkedin: "",
  resume: Resume,
  summary:
    "From circuits and embedded code to models that make sense of what sensors collect. I use what I know to build software that addresses real problems in our community — and keep sharpening those skills one systematic step at a time.",
  stack: ["python", "c++", "javascript", "react", "django", "spark"],
};

export const PAGES = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "creds", label: "Credentials" },
  { id: "chat", label: "Chat" },
];

// Headline numbers on the home page.
export const stats = [
  { value: "72%", label: "Drafting time cut by my AutoCAD automation prototype" },
  { value: "Best Project", label: "ASINC at the TIP CpE Symposium 2026" },
  { value: "1.84", label: "Final CGPA — Dean's List standing" },
  { value: "10", label: "Courses in the IBM RAG & Agentic AI certificate" },
];

export const experience = [
  {
    role: "Automation Intern",
    org: "PhilTowers MIDC Consortium Inc.",
    period: "Feb – Apr 2026",
    points: [
      "Built an AutoCAD automation prototype that removes manual drafting of tower configurations and title blocks, cutting drafting time by about 72%.",
      "Worked with AutoCAD drafters to scope automation features and convert existing VBA scripts to Python.",
      "Presented the results to the Director of Engineering and proposed next steps based on drafter feedback.",
    ],
    stack: ["Python", "AutoCAD", "VBA"],
  },
];

// Project ids shown on the home page, in order.
export const featured = ["asinc", "connoisseur", "pikosen"];

export const tagColors = { AI: VIOLET, Hardware: WARM, Software: BLUE, "Data Science": ACCENT };

// Each project: set img to an imported image (fit: "contain" shows a tall image whole);
// leave links empty to hide them.
export const projects = [
  {
    id: "asinc",
    img: Capstone,
    tag: "Hardware",
    year: "2026",
    title: "ASINC",
    desc: "A controlled closed-loop open-pan salt production system using a feedback control algorithm. Built as our capstone project with team Sustainnovators — it won Best Project at the TIP CpE Symposium 2026.",
    status: "Best Project · TIP CpE Symposium 2026",
    award: "Best Project",
    stack: ["Embedded systems", "Control loop", "Sensors"],
    links: {},
  },
  {
    id: "connoisseur",
    img: IBMCapstone,
    fit: "contain",
    tag: "AI",
    year: "2026",
    title: "Connoisseur Companion",
    desc: "A restaurant and recipe recommendation chatbot built on a multimodal RAG pipeline, giving personalized dining and recipe insights. Capstone for the IBM RAG and Agentic AI Professional Certificate.",
    status: "IBM certificate capstone",
    stack: ["Python", "LangChain", "LlamaIndex", "OpenAI API", "Gradio"],
    links: {},
  },
  {
    id: "pikosen",
    img: PIKOSEN,
    tag: "Software",
    year: "2025",
    title: "PIKOSEN",
    desc: "An e-commerce platform for coffee beans with a Django backend and a React frontend.",
    status: "Deployed",
    stack: ["Django", "React", "JavaScript"],
    links: { demo: "https://pikosen.vercel.app/login/" },
  },
  {
    id: "nnoah",
    img: NNOAH,
    tag: "Data Science",
    year: "2025",
    title: "NNOAH",
    desc: "Neural Network Oracle for Aqueous Height — a smart flood alert system that predicts water levels using neural networks.",
    status: "Cancelled",
    stack: ["Python", "Neural networks", "Time series"],
    links: {},
  },
  {
    id: "aristortle",
    img: Aristortle,
    tag: "Hardware",
    year: "",
    title: "Aristortle",
    desc: "A robot car that navigates a maze using sensor inputs and path-finding algorithms.",
    status: "Completed",
    stack: ["Microcontroller", "Sensors", "C++"],
    links: {},
  },
  {
    id: "cribconnect",
    img: CribConnect,
    tag: "Software",
    year: "2024",
    title: "CribConnect",
    desc: "A web platform that connects tenants with landowners.",
    status: "Completed",
    stack: ["PHP", "JavaScript", "SQL"],
    links: {
      writeup: "https://drive.google.com/file/d/1Zr_joZoE8kuLnlyjTo74RQHgxpvSPazN/view?usp=sharing",
    },
  },
];

export const education = [
  { title: profile.degree, sub: profile.school, meta: `${profile.years} · ${profile.location}`, dot: "fill" },
  {
    title: "Elective track: Data Science",
    sub: "Machine learning, analytics and neural networks.",
    dot: "warm",
  },
  {
    title: "Capstone project",
    sub: "ASINC — a closed-loop open-pan salt production system. Best Project, TIP CpE Symposium 2026.",
    dot: "muted",
  },
];

// A cert with `file` (e.g. a PDF) opens in a new tab; one with `image` opens in the viewer.
export const certs = [
  { name: "IBM RAG and Agentic AI Professional Certificate", issuer: "IBM · Coursera", year: "2026", file: IBMRagCert, color: BLUE },
  { name: "CyberOps Associate", issuer: "Cisco Networking Academy", year: "2026", image: CCNA3, color: ACCENT },
  { name: "CCNA: Enterprise Networking, Security, and Automation", issuer: "Cisco Networking Academy", year: "2025", image: CCNA2, color: ACCENT },
  { name: "CCNA: Switching, Routing, and Wireless Essentials", issuer: "Cisco Networking Academy", year: "2024", image: CCNA, color: ACCENT },
];

export const skills = [
  { group: "AI engineering", items: ["LangChain", "LangGraph", "LlamaIndex", "RAG", "CrewAI", "MCP"] },
  { group: "Programming", items: ["C++", "Python", "JavaScript"] },
  { group: "Web", items: ["React", "Django", "PHP", "HTML/CSS"] },
  { group: "Data science", items: ["Machine learning", "Neural networks", "Apache Spark", "Time series"] },
  { group: "Hardware & networks", items: ["Embedded systems", "Microcontrollers", "Routing & switching", "CyberOps"] },
];

export const suggestions = [
  "What projects have you built?",
  "Tell me about your AI work",
  "What's your tech stack?",
  "How can I contact you?",
];

export function answer(q) {
  const t = q.toLowerCase();
  const has = (...w) => w.some((x) => t.includes(x));
  if (has("hello", "hi ", "hey") || t === "hi")
    return "Hey! What would you like to know — projects, skills, education, or contact details?";
  if (has("project", "built", "work", "portfolio"))
    return "I've worked across hardware, software and data science.\nHighlights: Connoisseur Companion (a multimodal RAG recommendation chatbot), PIKOSEN (Django + React e-commerce), Aristortle (maze-solving robot car), CribConnect (tenant–landowner platform), and ASINC, my capstone, which won Best Project at the TIP CpE Symposium 2026.\nOpen the Projects tab to filter them by area.";
  if (has("ai", "agent", "rag", "llm", "langchain", "generative"))
    return "I build agentic and generative AI applications — RAG pipelines, multi-agent systems with LangGraph and CrewAI, and tools over MCP. I hold the IBM RAG and Agentic AI Professional Certificate — its capstone was Connoisseur Companion, a multimodal RAG chatbot for restaurant and recipe recommendations.";
  if (has("data", "machine", "ml", "model", "analytics", "neural"))
    return "Data science is my elective track. I've studied machine learning, analytics and neural networks, and applied them in NNOAH — a neural-network flood alert system that predicts water levels.";
  if (has("hardware", "embedded", "circuit", "robot", "arduino", "microcontroller"))
    return "On the hardware side I built Aristortle, a robot car that solves mazes from sensor input, and my capstone ASINC — a closed-loop salt production system that won Best Project at the TIP CpE Symposium 2026.";
  if (has("skill", "stack", "language", "tool"))
    return "Core stack: C++, Python, JavaScript.\nWeb: React, Django.\nData: machine learning, neural networks, Apache Spark.\nThe Credentials tab has the full list.";
  if (has("school", "education", "degree", "university", "study", "course"))
    return `${profile.degree} at the ${profile.school} (${profile.years}, ${profile.location}), with an elective track in Data Science. My capstone, ASINC, won Best Project at the TIP CpE Symposium 2026.`;
  if (has("cert", "credential", "license", "cisco", "ccna", "udemy"))
    return "Certifications: the IBM RAG and Agentic AI Professional Certificate (Coursera), plus CyberOps Associate and two CCNA courses from Cisco. You can view each one on the Credentials tab.";
  if (has("experience", "intern", "job", "autocad", "philtowers"))
    return "I interned as an Automation Intern at PhilTowers MIDC Consortium Inc. (Feb – Apr 2026), where I built an AutoCAD automation prototype that cut drafting time by about 72% and presented it to the Director of Engineering.";
  if (has("contact", "email", "hire", "reach", "available"))
    return `Best way to reach me: ${profile.email}.`;
  return "I'm a small assistant with a few prepared answers. Try asking about projects, skills, data science, education, or how to get in touch.";
}
