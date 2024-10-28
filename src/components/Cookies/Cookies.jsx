import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Cookies.css";
import { Link } from "react-router-dom";

function Cookies({ setCookie }) {
    const [t, i18n] = useTranslation('global');
    const [isVisible, setIsVisible] = useState(true); 

    const giveCookieConsent = (ctrl) => {
        setCookie("cookieConsent", ctrl, { path: "/" });
        setIsVisible(false); 
    };

    if (!isVisible) return null; 

    return (
        <div className="cookie-consent">
            <p>
                {t("cookies.description")}{" "}
                <Link to="/terms-conditions" target="_blank">{t("cookies.learn")}</Link>
            </p>
            <div className="cookies-button-container">
                <button 
                    className="cookie-button-accept" 
                    onClick={() => giveCookieConsent(true)}
                >
                    {t("cookies.accept")}
                </button>
                <button 
                    className="cookie-button-reject" 
                    onClick={() => giveCookieConsent(false)}
                >
                    {t("cookies.reject")}
                </button>
            </div>
        </div>
    );
}

export default Cookies;
