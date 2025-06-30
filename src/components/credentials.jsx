import Header from "./topbar";
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

// Mock certificate data - replace with your actual certificates
const certificates = [
  {
    id: 1,
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    image: "CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_eugenevillegas47-gmail-com_a62396ae-76a4-42db-ada4-4fd5b37659fb_page-0001.jpg",
    issuer: "CISCO Network Academy",
    date: "2024"
  },
  {
    id: 2,
    title: "C++ Training Crash Course 2022",
    image: "UC-c1724543-83ad-4f7b-a530-7c3aea50b947_page-0001.jpg",
    issuer: "Udemy",
    date: "2024"
  },
  {
    id: 3,
    title: "CSS, Bootstrap, JavaScript, PHP Full Stack Crash Course",
    image: "UC-d2a6f969-bd40-4c96-bee4-c0d30f840500.jpg",
    issuer: "Udemy",
    date: "2024"
  },
  {
    id: 4,
    title: "HTML5 and Python3 Complete Course 2023",
    image: "UC-d8ae3df3-8c4c-4dde-8ce3-ec8e80af9c28_page-0001.jpg",
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