import "../styles/styles.css";
import { Link } from "react-router-dom";
import heropic from "../assets/IMG_1799.jpeg";

function Hero() {
    return ( 
        <div className="content">
            <div className="me-img">
                <span>
                    <img src={heropic} />
                    <Link to="/profile" className="name-link">
                        <h3>Eugene D. Villegas</h3>
                        <h2>&#8678;</h2>
                    </Link>
                </span>
            </div>
            <div className="hero-container">
                <div class="hero-content">
                    <div className="tag-box">
                        <div className="tag">Computer Engineer Student</div>
                    </div>
                    
                    <h1>Transforming Data Into Actionable Insights</h1>
                    
                    <span>
                    <p className="description">It is my duty to guide you to the part you don't see.</p>
                    <p className="line-separator"></p>
                    <p className="description">"Faith is taking the first step even when you don't see the whole staircase."</p>
                    <p className="author">- Martin Luther King Jr.</p>
                    </span>
                    
                    <div className="button-container">
                    <Link className="btn-primary">My Certifications</Link>
                    <button className="btn-secondary">CV&#128195;</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Hero;