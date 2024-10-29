import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Header.css";
import { ThemeMode } from "../../App";
import { useTranslation } from "react-i18next";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    const { themeMode, setThemeMode } = useContext(ThemeMode);
    const [t, i18n] = useTranslation('global');
    const [language, setLanguage] = useState(() => localStorage.getItem("language") || i18n.language);
    const navigate = useNavigate(); 

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang).then(() => {
            setLanguage(lang);
            localStorage.setItem("language", lang); 
        });
    };

    const toggleMenu = () => {
        if (menuOpen) {
            setClosing(true);
            setTimeout(() => {
                setClosing(false);
            }, 400);
            setTimeout(() => {
                setMenuOpen(false);
            }, 400);
        } else {
            setMenuOpen(true);
        }
    };

    useEffect(() => {
        if (menuOpen) {
            setClosing(false);
        }
    }, [menuOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 650) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleDarkMode = () => {
        setThemeMode(prevMode => !prevMode);
    };

    const handleNavigation = (targetClass) => {
        navigate(`/#${targetClass}`);        
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            const elements = document.getElementsByClassName(hash);
            if (elements.length > 0) {
                elements[0].scrollIntoView({ behavior: 'smooth' });
            }
        };

        handleHashChange(); 

        window.addEventListener('hashchange', handleHashChange); 

        return () => {
            window.removeEventListener('hashchange', handleHashChange); 
        };
    }, []);

    return (
        <div className={`header ${menuOpen ? 'menu-open' : ''}`}>
            <div className="logo-container">
                <abbr title={t("header.abbrHome")}>
                    <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}><img className="logo-picture" src="src/assets/dm@2.png" alt="Diogo's Logo" /></a>
                </abbr>
            </div>
            <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="hamburger-icon">
                    <line x1="0" y1="50%" x2="100%" y2="50%" className={`hamburger__bar hamburger__bar--top ${menuOpen ? 'active' : ''}`} />
                    <line x1="0" y1="50%" x2="100%" y2="50%" className={`hamburger__bar hamburger__bar--bot ${menuOpen ? 'active' : ''}`} />
                </svg>
            </div>
            <div className={`nav-options-container ${menuOpen ? 'active' : closing ? 'closing' : ''}`}>
                <ul className="nav-options">
                    <li><a href="#" onClick={() => handleNavigation('about')}>{t("header.about")}</a></li>
                    <li><a href="#" onClick={() => handleNavigation('experience')}>{t("header.experience")}</a></li>
                    <li><a href="#" onClick={() => handleNavigation('contact')}>{t("header.contact")}</a></li>
                    
                    <div className="button-container">
                        <li>
                            <abbr title={t("header.abbrLan")}>
                                <a href="#" onClick={() => handleChangeLanguage(language === 'en' ? 'pt' : 'en')} className="language-toggle">
                                    {language === 'en' ? 'PT' : 'EN'}
                                </a>
                            </abbr>
                        </li>
                        <li>
                            <abbr title={t("header.abbrTheme")}>
                                <button className="theme-toggle" onClick={toggleDarkMode}>
                                    {themeMode ? (
                                        <svg width="24" height="24" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.625 18.6521C30.3956 21.1345 29.4639 23.5002 27.9391 25.4724C26.4142 27.4446 24.3592 28.9418 22.0145 29.7887C19.6699 30.6356 17.1325 30.7973 14.6993 30.2547C12.266 29.7122 10.0377 28.4879 8.27489 26.7251C6.5121 24.9623 5.28781 22.7339 4.74526 20.3007C4.20271 17.8675 4.36436 15.3301 5.21127 12.9854C6.05819 10.6407 7.55536 8.58574 9.52758 7.06089C11.4998 5.53604 13.8655 4.6044 16.3479 4.375C14.8945 6.34122 14.1952 8.76378 14.377 11.2021C14.5588 13.6403 15.6098 15.9324 17.3387 17.6613C19.0676 19.3902 21.3596 20.4411 23.7979 20.623C26.2362 20.8048 28.6588 20.1054 30.625 18.6521Z"  
                                            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    ) : (
                                        <svg width="24" height="24" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_230_66)">
                                                <path d="M17.5 1.45834V4.37501M17.5 30.625V33.5417M6.15415 6.15418L8.22498 8.22501M26.775 26.775L28.8458 28.8458M1.45831 17.5H4.37498M30.625 17.5H33.5416M6.15415 28.8458L8.22498 26.775M26.775 8.22501L28.8458 6.15418M24.7916 17.5C24.7916 21.5271 21.5271 24.7917 17.5 24.7917C13.4729 24.7917 10.2083 21.5271 10.2083 17.5C10.2083 13.4729 13.4729 10.2083 17.5 10.2083C21.5271 10.2083 24.7916 13.4729 24.7916 17.5Z"  
                                                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_230_66">
                                                    <rect width="35" height="35" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    )}
                                </button>
                            </abbr>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Header;
