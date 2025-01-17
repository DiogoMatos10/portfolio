import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";  
import "./Cookies.css";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";

const TRACKING_ID="dddd";

function Cookies({ setCookie, onConsent }) {
    const [t, i18n] = useTranslation('global');
    const [isVisible, setIsVisible] = useState(true); 
    const navigate = useNavigate();  

    const giveCookieConsent = (ctrl) => {
        const oneMonthFromNow = new Date();
        oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1);

        setCookie("cookieConsent", ctrl, { path: "/" , expires: oneMonthFromNow});
        setIsVisible(false); 

        if (ctrl) {
            ReactGA.initialize(TRACKING_ID); 
            ReactGA.pageview(window.location.pathname);
        }

        onConsent(ctrl);
    };

    const navigateToPolicy = () => {
        navigate("/terms-conditions");
        window.scrollTo(0, 0); 
    };

    if (!isVisible) return null; 

    return (
        <div className="cookie-consent">
            <p>
                {t("cookies.description")}{" "}
                <Link to="/terms-conditions" onClick={navigateToPolicy}>{t("cookies.learn")}</Link>
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
