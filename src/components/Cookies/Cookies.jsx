import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Cookies.css";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";

const TRACKING_ID="dddd";

function Cookies({ setCookie }) {
    const [t, i18n] = useTranslation('global');
    const [isVisible, setIsVisible] = useState(true); 

    const giveCookieConsent = (ctrl) => {
        const oneMonthFromNow = new Date();
        oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1);

        setCookie("cookieConsent", ctrl, { path: "/" , expires: oneMonthFromNow});
        setIsVisible(false); 

        if (ctrl) {
            ReactGA.initialize(TRACKING_ID); 
            ReactGA.pageview(window.location.pathname);
        }
    };

    if (!isVisible) return null; 

    return (
        <div className="cookie-consent">
            <p>
                {t("cookies.description")}{" "}
                <Link to="/terms-conditions">{t("cookies.learn")}</Link>
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
