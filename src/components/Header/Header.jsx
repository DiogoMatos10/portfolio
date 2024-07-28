import { Link } from "react-router-dom";
import React,{ useState } from "react";
import "./Header.css"

function Header(){
    const [menuOpen, setMenuOpen]=useState(false)

    const toggleMenu=() => {
        setMenuOpen(!menuOpen)
    }

    return(
        <div className="header">
            <div className="avatar-container">
                <img className="avatar-picture" src="/avatar2.jpg" alt="Diogo' Picture"></img>
                <Link to="/home" className="header-title-link">
                    <p className="header-title">DM</p>
                </Link>
            </div>
            <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <img src="hamburguer.svg" alt="Menu Icon"></img>
            </div>
            <div className={`nav-options-container ${menuOpen ? 'active' : ''}`}>
                <ul className="nav-options">
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                    <li><Link to="/experience" onClick={() => setMenuOpen(false)}>Experience</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                </ul>
            </div>
        
        </div>
    );
}

export default Header