import { Link } from "react-router-dom";
import React, { useState,useEffect } from "react";
import "./Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    

    const toggleMenu = () => {
        if (menuOpen) {
            setClosing(true);
            setTimeout(() => {
                setClosing(false);
            }, 400);
            setTimeout(() => {
                setMenuOpen(false);
            })
        } else {
            setMenuOpen(true);
        }
    };

    useEffect(() => {
        if (menuOpen) {
            setClosing(false);
        }
    }, [menuOpen]);

    return (
        <div className={`header ${menuOpen ? 'menu-open' : ''}`}>
            <div className="avatar-container">
                <img className="avatar-picture" src="/avatar2.jpg" alt="Diogo's Picture" />
                <Link to="/home" className="header-title-link">
                    <p className="header-title">DM</p>
                </Link>
            </div>
            <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="hamburger-icon">
                    <line x1="0" y1="50%" x2="100%" y2="50%" className={`hamburger__bar hamburger__bar--top ${menuOpen ? 'active' : ''}`} />
                    <line x1="0" y1="50%" x2="100%" y2="50%" className={`hamburger__bar hamburger__bar--bot ${menuOpen ? 'active' : ''}`} />
                </svg>
            </div>
            <div className={`nav-options-container ${menuOpen ? 'active' : closing ? 'closing' : ''}`}>
                <ul className="nav-options">
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                    <li><Link to="/experience" onClick={() => setMenuOpen(false)}>Experience</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
