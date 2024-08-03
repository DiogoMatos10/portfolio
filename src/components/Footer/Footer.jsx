import { ThemeMode } from "../../App";
import React, { useState,useEffect,useContext } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";


function Footer(){
    const { themeMode, setThemeMode } = useContext(ThemeMode);
    let date=new Date()


    return(
        <div className={`footer ${themeMode? 'light-mode' : 'dark-mode'}`}>
            {/* <Link className="arrow-up">
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 24L24 16M24 16L16 24M24 16V32M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z"  strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Link> */}
            <div className="footer-content">
                <p>Designed in Figma and coded in Visual Studio Code. Built with React and CSS.</p>
                <p>&copy; {date.getFullYear()} Diogo Matos</p>
            </div>
        </div>
    );
}

export default Footer