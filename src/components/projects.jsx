import Header from "./topbar";
import NNOAH from "../assets/NNOAH.png";
import PIKOSEN from "../assets/PIKOSEN.png";
import Aristortle from "../assets/Aristortle.png";
import CribConnect from "../assets/CribConnect.png";

const projects = [
  {
    img: NNOAH,
    title: "Neural Network Oracle for Aqueous Height (NNOAH)",
    desc: "An ongoing project to create a smart alert system for floods using neural networks.",
  },
  {
    img: PIKOSEN,
    title: "PIKOSEN",
    desc: "An Ecommerce platform for coffee beans.",
  },
  {
    img: Aristortle,
    title: "Aristortle",
    desc: "Robot car that navigates a maze through sensor inputs and algorithms.",
  },
  {
    img: CribConnect,
    title: "CribConnect",
    desc: "A platform that connects tenant and landowner.",
  },
];

function Projects() {
    return (
        <div>
        <Header />
        <div className="gallery-container">
            <h1 className="gallery-title">My Projects</h1>
            <div className="gallery-grid">
            {projects.map((proj, idx) => (
                <div className="gallery-item" key={idx}>
                <img src={proj.img} className="gallery-img" />
                <div className="gallery-overlay">
                    <h2 className="gallery-item-title">{proj.title}</h2>
                    <p className="gallery-item-desc">{proj.desc}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
}

export default Projects;