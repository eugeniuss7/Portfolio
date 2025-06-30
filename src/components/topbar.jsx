import "../styles/styles.css";
import SideBar from "./sidebar";
import { useState, useEffect } from 'react';

function Header() {
    
    return (
        <div className="line-separator">
            <header>
                <a href="/">
                    <h1 className="name">⟢Eugenius</h1>
                </a>
                <nav>
                    <a href="/profile">Profle</a>
                    <a href="/projects">Projects</a>
                    <a href="/credentials">Credentials</a>
                    <a href="/documents">Timeline</a>
                </nav>
                <div><SideBar/></div>
            </header>
        </div>
    );
}

export default Header;