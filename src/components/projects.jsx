import Header from "./topbar";

const projects = [
  {
    img: "NNOAH.png",
    title: "Neural Network Oracle for Aqueous Height (NNOAH)",
    desc: "An ongoing project to create a smart alert system for floods using neural networks.",
  },
  {
    img: "PIKOSEN.png",
    title: "PIKOSEN",
    desc: "An Ecommerce platform for coffee beans.",
  },
  {
    img: "Aristortle.png",
    title: "Aristortle",
    desc: "Robot car that navigates a maze through sensor inputs and algorithms.",
  },
  {
    img: "CribConnect.png",
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
                <img src={proj.img} alt={proj.title} className="gallery-img" />
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