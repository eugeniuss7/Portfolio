import { Link } from "react-router-dom";

function Profile() {
    
  return (
    
        <div className="container" id="container">
            <div className="page page-1" data-page="1">
                <div className="floating-particles">
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                </div>
                <h2>Computer Engineering Student</h2>
                <h1>Eugene Villegas</h1>
                <p>To use my current knowledge and skills in providing software solutions that addresses the problems that are concurrent in our community, and to further enhance this set of skills and knowledge using systematic approach towards any challenge that is to come.</p>
                <div className="quote">"Bridging engineering principles with data-driven innovation"</div>
                <div className="scroll-hint">
                    <span>Discover my journey</span>
                    <span>↓</span>
                </div>
            </div>

            <div className="page page-2" data-page="2">
                <div className="floating-particles">
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                </div>
                <h1>Education & Certifications</h1>
                <p>Currently pursuing Computer Engineering with Data Science as an elective. Continuously expanding knowledge through professional courses and certifications.</p>
                <div className="education-grid">
                    <div className="edu-item">
                        <h3>Technological Institute of the Philippines</h3>
                        <p>Bachelor of Science in Computer Engineering</p>
                        <span>2022-Present • Manila</span>
                    </div>
                    <div className="cert-item">
                        <h4>Udemy • 2024</h4>
                        <li>C++ Training Crash Course 2022</li>
                        <li>CSS, Bootstrap, JavaScript, PHP Full Stack Crash Course</li>
                        <li>HTML5 and Python3 Complete Course 2023</li>
                    </div>
                    <div className="cert-item">
                        <h4>CISCO Network • 2024-2025</h4>
                        <li>CCNA: Switching, Routing, and Wireless Essentials</li>
                    </div>
                </div>
            </div>

            <div className="page page-3" data-page="3">
                <div className="floating-particles">
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                </div>
                <div class="floating-particles">
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
            </div>
            <h1>My Current Stack</h1>
            <p>Proficient in modern data science tools and programming languages, with expertise in machine learning, automation, and cloud technologies.</p>
            <div class="tech-grid">
                <div class="tech-item">C++</div>
                <div class="tech-item">Python</div>
                <div class="tech-item">JavaScipt</div>
                <div class="tech-item">React</div>
                <div class="tech-item">Django</div>
                <div class="tech-item">Apache Spark</div>
            </div>
                </div>

            <div className="page page-4" data-page="4">
                <div className="floating-particles">
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                </div>
                <h1>Knowledge and Focus Areas</h1>
                <p>Expanding expertise in data science through structured learning and practical application of embedded systems.</p>
                <div className="focus-container">
                    <div className="focus-item">
                        <h3>Data Science & Analytics</h3>
                        <p>Deep diving into comprehensive data science methodologies and best practices through industry-leading publications.</p>
                    </div>
                    <div className="focus-item active">
                        <h3>Embedded Systems</h3>
                        <p>Currently have a project on embedded systems design and implementation, focusing on real-time operating systems and microcontroller programming.</p>
                    </div>
                    <div className="focus-item">
                        <h3>Full-Stack Development</h3>
                        <p>Built scalable web applications using Django backend with React frontend.</p>
                    </div>
                </div>
                <Link to="/credentials" className="cta-button">View Credentials</Link>
            </div>
        </div>
  );
}

export default Profile;