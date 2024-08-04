import React, { useState,useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { ThemeMode } from "../../App";
import { useTranslation } from "react-i18next";


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    const { themeMode, setThemeMode } = useContext(ThemeMode);
    const [ t ,i18n ] = useTranslation('global');
    const [language, setLanguage] = useState(i18n.language);

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang).then(() => setLanguage(lang));
    };

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'pt' : 'en';
        handleChangeLanguage(newLang);
    };

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

  


    return (
        <div className={`header ${menuOpen ? 'menu-open' : ''}`}>
            <div className="logo-container">
                <Link to="/home"><img className="logo-picture" src="public/images/dm@2.png" alt="Diogo's Logo" /></Link>
            </div>
            <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="hamburger-icon">
                    <line x1="0" y1="50%" x2="100%" y2="50%" className={`hamburger__bar hamburger__bar--top ${menuOpen ? 'active' : ''}`} />
                    <line x1="0" y1="50%" x2="100%" y2="50%" className={`hamburger__bar hamburger__bar--bot ${menuOpen ? 'active' : ''}`} />
                </svg>
            </div>
            <div className={`nav-options-container ${menuOpen ? 'active' : closing ? 'closing' : ''}`}>
                <ul className="nav-options">
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>{t("header.about")}</Link></li>
                    <li><Link to="/experience" onClick={() => setMenuOpen(false)}>{t("header.experience")}</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>{t("header.contact")}</Link></li>
                    
                    <div className="button-container">
                        <li>
                            <button className="globe-button" onClick={toggleLanguage}>
                                <svg width="24" height="24" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32.0834 17.5C32.0834 25.5541 25.5542 32.0833 17.5 32.0833M32.0834 17.5C32.0834 9.44584 25.5542 2.91666 17.5 2.91666M32.0834 17.5H2.91669M17.5 32.0833C9.44587 32.0833 2.91669 25.5541 2.91669 17.5M17.5 32.0833C21.1477 28.0899 23.2207 22.9074 23.3334 17.5C23.2207 12.0925 21.1477 6.91009 17.5 2.91666M17.5 32.0833C13.8523 28.0899 11.7793 22.9074 11.6667 17.5C11.7793 12.0925 13.8523 6.91009 17.5 2.91666M2.91669 17.5C2.91669 9.44584 9.44587 2.91666 17.5 2.91666"  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button className="theme-toggle" onClick={toggleDarkMode}>
                                {themeMode ? (
                                    <svg width="24" height="24" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30.625 18.6521C30.3956 21.1345 29.4639 23.5002 27.9391 25.4724C26.4142 27.4446 24.3592 28.9418 22.0145 29.7887C19.6699 30.6356 17.1325 30.7973 14.6993 30.2547C12.266 29.7122 10.0377 28.4879 8.27489 26.7251C6.5121 24.9623 5.28781 22.7339 4.74526 20.3007C4.20271 17.8675 4.36436 15.3301 5.21127 12.9854C6.05819 10.6407 7.55536 8.58574 9.52758 7.06089C11.4998 5.53604 13.8655 4.6044 16.3479 4.375C14.8945 6.34122 14.1952 8.76378 14.377 11.2021C14.5588 13.6403 15.6098 15.9324 17.3387 17.6613C19.0676 19.3902 21.3596 20.4411 23.7979 20.623C26.2362 20.8048 28.6588 20.1054 30.625 18.6521Z"  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                ) : (
                                    <svg width="24" height="24" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_230_66)">
                                            <path d="M17.5 1.45834V4.37501M17.5 30.625V33.5417M6.15415 6.15418L8.22498 8.22501M26.775 26.775L28.8458 28.8458M1.45831 17.5H4.37498M30.625 17.5H33.5416M6.15415 28.8458L8.22498 26.775M26.775 8.22501L28.8458 6.15418M24.7916 17.5C24.7916 21.5271 21.5271 24.7917 17.5 24.7917C13.4729 24.7917 10.2083 21.5271 10.2083 17.5C10.2083 13.4729 13.4729 10.2083 17.5 10.2083C21.5271 10.2083 24.7916 13.4729 24.7916 17.5Z"  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_230_66">
                                                <rect width="35" height="35" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                )}
                            </button>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Header;
