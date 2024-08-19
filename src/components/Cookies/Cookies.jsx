import React from "react";
import { useTranslation } from "react-i18next";
import "./Cookies.css";

function Cookies({ setCookie }) {
    const [t, i18n] = useTranslation('global');

    const giveCookieConsent = (ctrl) => {
        setCookie("cookieConsent", ctrl, { path: "/" });
    };

    return (
        <div className="cookie-consent">
            <p>
                {t("cookies.description")}{" "}
                <a href="{}">{t("cookies.learn")}</a>
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
