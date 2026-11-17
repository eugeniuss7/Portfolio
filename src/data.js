import asinc from "./assets/etchings/asinc.svg";
import connoisseur from "./assets/etchings/connoisseur.svg";
import pikosen from "./assets/etchings/pikosen.svg";
import nnoah from "./assets/etchings/nnoah.svg";
import aristortle from "./assets/etchings/aristortle.svg";
import cribconnect from "./assets/etchings/cribconnect.svg";
import musica from "./assets/etchings/musica.svg";
import mens from "./assets/etchings/mens.svg";
import machina from "./assets/etchings/machina.svg";
import asincPhoto from "./assets/capstone.jpg";
import connoisseurPhoto from "./assets/ibm capstone.jpg";
import pikosenPhoto from "./assets/PIKOSEN.png";
import nnoahPhoto from "./assets/NNOAH.png";
import aristortlePhoto from "./assets/Aristortle.png";
import cribconnectPhoto from "./assets/CribConnect.png";
import CCNA from "./assets/CCNA.jpg";
import CCNA2 from "./assets/CCNA2.jpg";
import CCNA3 from "./assets/CCNA3.jpg";
import IBMRagCert from "./assets/Certificate 1 - Eugene Villegas.pdf";
import Resume from "./assets/Eugene Villegas - Resume.pdf";

export const profile = {
  name: "Eugene D. Villegas",
  initials: "EV",
  tagline: "AI developer · computer engineer",
  // Shown as a status chip in the hero; set to "" to hide it.
  availability: "Open to AI developer roles",
  location: "Parañaque City, Metro Manila",
  email: "villegase.cpe@gmail.com",
  github: "https://github.com/eugeniuss7",
  resume: Resume,
  summary:
    "From circuits and embedded code to models that make sense of what sensors collect. I use what I know to build software that addresses real problems in our community, and keep sharpening those skills one systematic step at a time.",
};

export const NAV = [
  { id: "top", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "credentials", label: "Credentials" },
  { id: "ask", label: "Ask" },
];

export const stats = [
  { value: "72%", label: "Drafting time cut by my AutoCAD automation tool" },
  { value: "Best Project", label: "ASINC at the TIP CpE Symposium 2026" },
  { value: "1.84", label: "Final CGPA, with Dean's List standing" },
  { value: "10", label: "Courses in the IBM RAG and Agentic AI certificate" },
];

export const layers = [
  {
    icon: "ai",
    title: "AI engineering",
    text: "RAG pipelines, LLM agents and prompt design that keep answers grounded in real data.",
    tools: ["LangChain", "LlamaIndex", "LangGraph", "OpenAI API"],
  },
  {
    icon: "code",
    title: "Software engineering",
    text: "Full-stack web applications: REST APIs, relational data models and React front ends.",
    tools: ["Django", "FastAPI", "React", "PostgreSQL"],
  },
  {
    icon: "chip",
    title: "Hardware and embedded",
    text: "ESP32 firmware, sensors and feedback control loops that act on the physical world.",
    tools: ["ESP32", "C++", "Firebase"],
  },
  {
    icon: "graph",
    title: "Data science",
    text: "Cleaning, analysing and modelling data, from pandas to neural networks.",
    tools: ["pandas", "NumPy", "scikit-learn", "SQL"],
  },
];

export const FILTERS = ["All", "AI", "Hardware", "Software"];

// One entry per project, in plate order. `img` is the etching; `photo` is the real
// picture shown in the plate viewer. `brief`, `note` and `made` are the plate's text.
export const projects = [
  {
    id: "asinc",
    img: asinc,
    alt: "Etching-style illustration of salt pans under a sun ringed by a feedback loop",
    photo: asincPhoto,
    tag: "Hardware",
    year: "2026",
    title: "ASINC",
    desc: "A closed-loop feedback control system for open-pan salt production. I wrote the ESP32 firmware in C++. Best Project, TIP CpE Symposium 2026.",
    brief: "A closed-loop feedback control system for open-pan salt production, running on an ESP32.",
    note: "Best Project, TIP CpE Symposium 2026",
    stack: ["ESP32", "C++", "Feedback control"],
    made: "ESP32 · C++ · Sensors and actuators",
    links: {},
  },
  {
    id: "connoisseur",
    img: connoisseur,
    alt: "Etching-style illustration of a dinner plate holding a chat bubble",
    photo: connoisseurPhoto,
    tag: "AI",
    year: "2026",
    title: "Connoisseur Companion",
    desc: "A restaurant and recipe recommendation chatbot built on a multimodal RAG pipeline. Capstone for the IBM RAG and Agentic AI Professional Certificate.",
    brief: "A restaurant and recipe recommendation chatbot built on a multimodal RAG pipeline.",
    note: "Capstone, IBM RAG and Agentic AI Professional Certificate",
    stack: ["Python", "LangChain", "LlamaIndex", "OpenAI API", "Gradio"],
    made: "Python · LangChain · LlamaIndex · OpenAI API · Gradio",
    links: {},
  },
  {
    id: "pikosen",
    img: pikosen,
    alt: "Etching-style illustration of a coffee bean",
    photo: pikosenPhoto,
    tag: "Software",
    year: "2025",
    title: "PIKOSEN",
    desc: "A deployed e-commerce platform for coffee beans, with user login and product browsing on a Django back end and a React front end.",
    brief: "An e-commerce platform for coffee beans, with a Django back end and a React front end.",
    note: "pikosen.vercel.app",
    stack: ["Django", "React", "JavaScript"],
    made: "Django · React · JavaScript",
    links: { "Live site": "https://pikosen.vercel.app" },
  },
  {
    id: "nnoah",
    img: nnoah,
    alt: "Etching-style illustration of a water-level gauge rising from waves",
    photo: nnoahPhoto,
    tag: "Hardware",
    year: "",
    title: "NNOAH",
    desc: "A miniature flood model that streams water-level readings to Firebase and pushes real-time overflow alerts to subscribed devices.",
    brief: "A miniature flood model that streams water-level readings to Firebase and pushes real-time overflow alerts.",
    note: "Water level monitoring and flood alert",
    stack: ["ESP32", "C++", "Firebase"],
    made: "ESP32 · C++ · Firebase",
    links: {},
  },
  {
    id: "aristortle",
    img: aristortle,
    alt: "Etching-style illustration of a robot car entering a circular maze",
    photo: aristortlePhoto,
    tag: "Hardware",
    year: "",
    title: "Aristortle",
    desc: "A maze-solving robot car that finds its way using sensor inputs and path-finding algorithms.",
    brief: "A maze-solving robot car.",
    note: "Finds its way from sensor inputs and path-finding algorithms",
    stack: ["Microcontroller", "Sensors"],
    made: "Microcontroller · Sensors",
    links: {},
  },
  {
    id: "cribconnect",
    img: cribconnect,
    alt: "Etching-style illustration of three houses joined by arcs",
    photo: cribconnectPhoto,
    tag: "Software",
    year: "2023",
    title: "CribConnect",
    desc: "A rental listing and roommate-matching platform with a two-way rating system and a relational data model built on Django's ORM.",
    brief: "A rental listing and roommate-matching platform with a two-way rating system.",
    note: "Connects tenants, roommates and landowners",
    stack: ["Python", "Django", "SQLite"],
    made: "Python · Django · SQLite",
    links: { "Write-up": "https://drive.google.com/file/d/1Zr_joZoE8kuLnlyjTo74RQHgxpvSPazN/view?usp=sharing" },
  },
];

export const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export const experience = [
  {
    role: "Automation Intern",
    org: "PhilTowers MIDC Consortium Inc.",
    period: "Feb – Apr 2026",
    points: [
      "Built an AutoCAD automation tool in Python that removes manual drafting of tower configurations and title blocks, cutting drafting time by about 72%.",
      "Worked with the drafters to scope features and replaced their legacy VBA scripts with a modular, maintainable codebase.",
      "Presented the results and a prioritized roadmap to the Director of Engineering.",
    ],
    stack: ["Python", "AutoCAD", "VBA"],
  },
  {
    role: "Volunteer Full-Stack Developer",
    org: "Kisig Kids Learning Center",
    period: "Sep 2026 – present",
    text: "Building the website for an inclusive early-learning center: a Django REST Framework API on PostgreSQL serving a React front end, with content the center can update without code changes.",
    stack: ["React", "Django REST Framework", "PostgreSQL"],
  },
  {
    role: "Speaker and Organizer",
    org: "National Cybersecurity Alliance",
    period: "Oct – Dec 2025",
    text: "Organized and spoke at cybersecurity sessions, drawing on Cisco CCNA and CyberOps training.",
  },
];

export const education = [
  { title: "B.S. Computer Engineering", sub: "Technological Institute of the Philippines, Manila · 2022 – 2026", lead: true },
  { title: "Elective track: Data Science", sub: "Machine learning, analytics and neural networks." },
  { title: "Capstone project", sub: "ASINC, a closed-loop open-pan salt production system. Best Project, TIP CpE Symposium 2026." },
];

// A cert with `file` (e.g. a PDF) opens in a new tab; one with `image` opens in the viewer.
export const certs = [
  { name: "RAG and Agentic AI Professional Certificate", meta: "IBM · Coursera · 2026", file: IBMRagCert },
  { name: "CyberOps Associate", meta: "Cisco Networking Academy · 2026", image: CCNA3 },
  { name: "CCNA: Enterprise Networking, Security and Automation", meta: "Cisco Networking Academy · 2025", image: CCNA2 },
  { name: "CCNA: Switching, Routing and Wireless Essentials", meta: "Cisco Networking Academy · 2024", image: CCNA },
];

export const about = {
  text: "I came to artificial intelligence through the brain. Psychology made me curious about how people think, and AI lets me test those questions in something I can build. Before any of that there was music: the violin first, and a guitar that is still within reach.",
  figures: [
    { img: musica, alt: "Etching-style illustration of guitar strings over a sound hole", title: "Musica", sub: "Violin, then guitar" },
    { img: mens, alt: "Etching-style illustration of a brain in profile", title: "Mens", sub: "Brain and psychology" },
    { img: machina, alt: "Etching-style illustration of an astrolabe with a neural network dial", title: "Machina", sub: "Artificial intelligence" },
  ],
};

export const faq = [
  {
    q: "What projects have you built?",
    a: "Six across hardware, software and AI: ASINC, Connoisseur Companion, PIKOSEN, NNOAH, Aristortle and CribConnect. ASINC, my capstone, won Best Project at the TIP CpE Symposium 2026.",
  },
  {
    q: "Tell me about your AI work",
    a: "Connoisseur Companion is a multimodal RAG agent built with LangChain, LlamaIndex and the OpenAI API. I indexed the source documents, evaluated responses against real user queries, and iterated on the prompts and retrieval flow. It was the capstone for my IBM RAG and Agentic AI Professional Certificate.",
  },
  {
    q: "What is your tech stack?",
    a: "Python first. Django, Django REST Framework and FastAPI on the back end, React on the front end, PostgreSQL for data. LangChain, LlamaIndex and LangGraph for LLM work, ESP32 and C++ for hardware, with Git, Docker and Linux throughout.",
  },
  {
    q: "How can I contact you?",
    a: "Email is best: villegase.cpe@gmail.com. I am based in Parañaque City, Metro Manila, and my code is on GitHub at github.com/eugeniuss7.",
  },
];

export const contactLinks = [
  { label: "GitHub", href: "https://github.com/eugeniuss7" },
  { label: "Résumé", href: Resume },
  { label: "PIKOSEN live", href: "https://pikosen.vercel.app" },
];
