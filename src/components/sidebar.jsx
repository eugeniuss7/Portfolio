import React, { useState, useEffect } from 'react';

const SideBar = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Close sidebar when clicking outside
        const handleClickOutside = (event) => {
            const sidebar = document.getElementById('sidebar');
            const toggleBtn = document.getElementById('sidebarToggle');
            
            if (sidebar && toggleBtn && 
                !sidebar.contains(event.target) && 
                !toggleBtn.contains(event.target)) {
                setIsActive(false);
            }
        };

        // Keyboard support (ESC to close)
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsActive(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        // Cleanup event listeners
        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const toggleSidebar = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="sidebar-container">
            <button
                className={`sidebar-toggle ${isActive ? 'active' : ''}`}
                id="sidebarToggle"
                onClick={toggleSidebar}
            >
                <div className="toggle-icon">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <div className="toggle-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </button>

            <div className={`sidebar-3d${isActive ? ' active' : ''}`} id="sidebar">
    <div className="floating-shapes">
        <div className="shape cube"></div>
        <div className="shape sphere"></div>
        <div className="shape pyramid"></div>
        <div className="shape cylinder"></div>
        <div className="shape torus"></div>
    </div>
    <div className="gradient-overlay"></div>
    <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
    </div>

    {/* Email message input */}
    <div className="sidebar-form">
        <h3>Send me an email</h3>
        <form onSubmit={(e) => {
            e.preventDefault();
            const message = e.target.elements.message.value;
            window.location.href = `mailto:eugenevillegas47@gmail.com?subject=Sidebar Message&body=${encodeURIComponent(message)}`;
        }}>
            <textarea
                name="message"
                rows="4"
                placeholder="Write your message here..."
                className="message-input"
                required
            />
            <button type="submit" className="send-button">Send</button>
        </form>
    </div>

    {/* Social media links */}
                <div className="sidebar-socials">
                    <h4>Follow my socials</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://discord.com/users/yourDiscordID" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                            <i className="fab fa-discord"></i>
                        </a>
                    </div>
                </div>
                <div className="gradient-overlay"></div>
                <div className="particles">
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;