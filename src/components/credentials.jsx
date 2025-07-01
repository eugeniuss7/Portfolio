import Header from "./topbar";
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Link } from "react-router-dom";
import CCNA from "../assets/CCNA.jpg";
import UC1 from "../assets/UC C++.jpg";
import UC2 from "../assets/UC Full Stack.jpg";
import UC3 from "../assets/UC HTML5PY3.jpg";

// Mock certificate data - replace with your actual certificates
const certificates = [
  {
    id: 1,
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    image: CCNA,
    issuer: "CISCO Network Academy",
    date: "2024"
  },
  {
    id: 2,
    title: "C++ Training Crash Course 2022",
    image: UC1,
    issuer: "Udemy",
    date: "2024"
  },
  {
    id: 3,
    title: "CSS, Bootstrap, JavaScript, PHP Full Stack Crash Course",
    image: UC2,
    issuer: "Udemy",
    date: "2024"
  },
  {
    id: 4,
    title: "HTML5 and Python3 Complete Course 2023",
    image: UC3,
    issuer: "Udemy",
    date: "2024"
  },
];


function Credentials() {
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => setSelectedCert(cert);
  const closeModal = () => setSelectedCert(null);

  return (
    <div>
      <Header />
      <div className="content">
        <div className="content-inner">
          <div className="title-section">
            <h1>Credentials & Certifications</h1>
            <p>Explore my professional certifications and achievements in software development and computer networks.</p>
          </div>

          <div className="card-grid">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="card"
                onClick={() => openModal(cert)}
              >
                <div className="card-image">
                  <img src={cert.image} alt={cert.title} />
                  <div className="zoom-icon">
                    <ZoomIn size={16} color="white" />
                  </div>
                </div>
                <div className="card-content">
                  <h3>{cert.title}</h3>
                  <p className="issuer">{cert.issuer}</p>
                  <p className="date">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedCert && (
        <div className="modal-overlay" onClick={closeModal}>
          <button className="modal-close" onClick={closeModal}>
            <X size={24} color="white" />
          </button>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <img src={selectedCert.image} alt={selectedCert.title} />
            <div className="modal-details">
              <h2>{selectedCert.title}</h2>
              <p className="issuer">Issued by: {selectedCert.issuer}</p>
              <p className="date">Year: {selectedCert.date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Credentials;