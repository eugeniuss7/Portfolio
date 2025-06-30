import "../styles/styles.css";
import SideBar from "./sidebar";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Header() {
    
    return (
        <div className="line-separator">
            <header>
                <a href="/">
                    <h1 className="name">⟢Eugenius</h1>
                </a>
                <nav>
                    <Link to="/profile">Profile</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/credentials">Credentials</Link>
                    <Link to="/documents">Timeline</Link>
                </nav>
                <div><SideBar/></div>
            </header>
        </div>
    );
}

export default Header;