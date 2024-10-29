import "./HomeContent.css"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


function HomeContent(){
    const [ t ,i18n ] = useTranslation('global');

    return (
        <div className="home-container">
            <p className="titles">{t("home.hello")}</p>
            <p className="paragraph">{t("home.paragraph")}</p>
            <div className="links-icon">
                <abbr title="GitHub">
                    <Link className="github-icon" to={'https://github.com/DiogoMatos10'} target="_blank">
                        <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_211_51)">
                                <path d="M15 31.6667C6.66671 34.1667 6.66671 27.5 3.33337 26.6667M26.6667 36.6667V30.2167C26.7292 29.4219 26.6219 28.623 26.3517 27.873C26.0816 27.123 25.6549 26.439 25.1 25.8667C30.3334 25.2833 35.8334 23.3 35.8334 14.2C35.8329 11.873 34.9379 9.63533 33.3334 7.95C34.0931 5.91417 34.0394 3.66391 33.1834 1.66666C33.1834 1.66666 31.2167 1.08333 26.6667 4.13333C22.8467 3.09803 18.82 3.09803 15 4.13333C10.45 1.08333 8.48337 1.66666 8.48337 1.66666C7.62733 3.66391 7.57361 5.91417 8.33337 7.95C6.71692 9.64783 5.82091 11.9058 5.83337 14.25C5.83337 23.2833 11.3334 25.2667 16.5667 25.9167C16.0184 26.4833 15.5955 27.159 15.3256 27.8999C15.0556 28.6407 14.9447 29.4301 15 30.2167V36.6667" 
                                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_211_51">
                                    <rect width="40" height="40" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </abbr>
                <abbr title="Linkedin">
                    <Link className="linkdin-icon" to={'https://www.linkedin.com/in/diogo-matos-72b387274/'} target="_blank">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.6667 13.3333C29.3189 13.3333 31.8624 14.3869 33.7378 16.2622C35.6131 18.1376 36.6667 20.6811 36.6667 23.3333V35H30V23.3333C30 22.4493 29.6489 21.6014 29.0237 20.9763C28.3986 20.3512 27.5508 20 26.6667 20C25.7827 20 24.9348 20.3512 24.3097 20.9763C23.6846 21.6014 23.3334 22.4493 23.3334 23.3333V35H16.6667V23.3333C16.6667 20.6811 17.7203 18.1376 19.5956 16.2622C21.471 14.3869 24.0145 13.3333 26.6667 13.3333Z" 
                            strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 15H3.33337V35H10V15Z"  strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6.66671 9.99998C8.50766 9.99998 10 8.5076 10 6.66665C10 4.8257 8.50766 3.33331 6.66671 3.33331C4.82576 3.33331 3.33337 4.8257 3.33337 6.66665C3.33337 8.5076 4.82576 9.99998 6.66671 9.99998Z"  
                            strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </abbr>
                <abbr title="Instagram">
                    <Link className="instagram-icon" to={'https://www.instagram.com/dmatos_dev/'} target="_blank">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M29.1667 10.8333H29.1834M11.6667 3.33331H28.3334C32.9357 3.33331 36.6667 7.06427 36.6667 11.6666V28.3333C36.6667 32.9357 32.9357 36.6666 28.3334 36.6666H11.6667C7.06433 36.6666 3.33337 32.9357 3.33337 28.3333V11.6666C3.33337 7.06427 7.06433 3.33331 11.6667 3.33331ZM26.6667 18.95C26.8724 20.3371 26.6355 21.7537 25.9896 22.9983C25.3438 24.243 24.322 25.2523 23.0694 25.8828C21.8169 26.5132 20.3975 26.7326 19.013 26.5099C17.6286 26.2871 16.3496 25.6335 15.3581 24.6419C14.3666 23.6504 13.7129 22.3714 13.4902 20.987C13.2674 19.6026 13.4868 18.1831 14.1173 16.9306C14.7477 15.6781 15.757 14.6562 17.0017 14.0104C18.2463 13.3646 19.663 13.1276 21.05 13.3333C22.4649 13.5431 23.7748 14.2024 24.7862 15.2138C25.7976 16.2252 26.4569 17.5351 26.6667 18.95Z" 
                            strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </abbr>
                <abbr title={t("contact.email")}>
                    <a href="mailto:diogo.matos.dev@outlook.com" className="email-icon">
                        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 12C44 9.8 42.2 8 40 8H8C5.8 8 4 9.8 4 12M44 12V36C44 38.2 42.2 40 40 40H8C5.8 40 4 38.2 4 36V12M44 12L24 26L4 12" 
                                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </abbr>
            </div>
        </div>
    );
}

export default HomeContent