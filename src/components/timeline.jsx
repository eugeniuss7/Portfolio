import { href } from "react-router-dom";
import Header from "./topbar";
import React from 'react';

const roadmapData = [
  {
    month: "Q1 • 2024",
    title: "Programming Fundamentals",
    description: "Certifications for programming acquired.",
  },
  {
    month: "Q2 • 2024",
    title: "Software Design",
    description: "Developed a software called CribConnect.",
    documentation: <a href="https://drive.google.com/file/d/1Zr_joZoE8kuLnlyjTo74RQHgxpvSPazN/view?usp=sharing" style={{ color: "rgba(255, 255, 255, 0.7)" }}>CribConnect Documentation</a>,
  },
  {
    month: "Q3 • 2024",
    title: "Data Science: Machine Learning and Analytics",
    description: "Comprehensive study of analytics and machine learning.",
  },
  {
    month: "Q4 • 2024",
    title: "Data Science: Neural Networks",
    description: "Studied Artificial Intellegence.",
  },
  {
    month: "Q1 • 2025",
    title: "Project NNOAH initiated",
    description: "Neural Network Oracle for Aqueous Height (NNOAH) project started.",
    documentation: "On Going"
  },
  {
    month: "Q2 • 2025",
    title: "PIKOSEN website development",
    description: "Django + React website for coffee beans.",
    documentation: "On Going"
  },
  {
    month: "Current • 2025",
    title: "Books, Seminars, and Workshops",
    description: "Started reading O'Reilly books and attended seminars and workshops.",
    documentation: "GenAI, Time Series Analysis, Cloud Computing, etc.",
  },
];

function Timeline() {
  return (
    <div>
        <Header />
        <div className="roadmap-container">
            <h2 className="roadmap-heading">TIMELINE</h2>
            <div className="timeline">
                {roadmapData.map((item, index) => (
                <div key={index} className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-content">
                    <span className="timeline-month">{item.month}</span>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-description">{item.description}</p>
                    <a className="timeline-description">{item.documentation}</a>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Timeline;