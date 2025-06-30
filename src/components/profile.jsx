
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
                        <li>CCNA: Enterprise Networking, Security, and Automation</li>
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
                <h1>Technical Skills</h1>
                <p>Combining computer engineering fundamentals with modern web development and data science techniques.</p>
                <div className="skills-container">
                    <div className="skills-section">
                        <h3>Programming Skills</h3>
                        <div className="skill-bar">
                            <span className="skill-name">Programming</span>
                            <div className="progress-bar">
                                <div className="progress" style={{width: "92%"}}></div>
                            </div>
                            <span className="percentage">92%</span>
                        </div>
                        <div className="skill-bar">
                            <span className="skill-name">UI/UX Design</span>
                            <div className="progress-bar">
                                <div className="progress" style={{width: "82%"}}></div>
                            </div>
                            <span className="percentage">82%</span>
                        </div>
                        <div className="skill-bar">
                            <span className="skill-name">Database Design</span>
                            <div className="progress-bar">
                                <div className="progress" style={{width: "75%"}}></div>
                            </div>
                            <span className="percentage">75%</span>
                        </div>
                        <div className="skill-bar">
                            <span className="skill-name">Project Management</span>
                            <div className="progress-bar">
                                <div className="progress" style={{width: "47%"}}></div>
                            </div>
                            <span className="percentage">47%</span>
                        </div>
                    </div>
                    <div className="tech-stack">
                        <h3>Current Tech Stack</h3>
                        <div className="tech-grid">
                            <div className="tech-item">Django</div>
                            <div className="tech-item">React</div>
                            <div className="tech-item">Python</div>
                            <div className="tech-item">JavaScript</div>
                            <div className="tech-item">Cloud Database</div>
                            <div className="tech-item">Data Analysis</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page page-4" data-page="4">
                <div className="floating-particles">
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                </div>
                <h1>Current Focus</h1>
                <p>Expanding expertise in data science through structured learning and practical application of time-series analysis techniques.</p>
                <div className="focus-container">
                    <div className="focus-item">
                        <h3>📚 O'Reilly Data Science</h3>
                        <p>Deep diving into comprehensive data science methodologies and best practices through industry-leading publications.</p>
                    </div>
                    <div className="focus-item active">
                        <h3>📈 Time-Series Analysis</h3>
                        <p>Currently studying advanced time-series forecasting techniques, pattern recognition, and predictive modeling applications.</p>
                    </div>
                    <div className="focus-item">
                        <h3>☁️ Full-Stack Development</h3>
                        <p>Building scalable web applications using Django backend with React frontend, deployed on cloud infrastructure.</p>
                    </div>
                </div>
                <a href="./credentials" className="cta-button">View Credentials</a>
            </div>
        </div>
  );
}

export default Profile;