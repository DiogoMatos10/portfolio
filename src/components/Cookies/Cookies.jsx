import React from "react";
import { useTranslation } from "react-i18next";
import "./Cookies.css"

function Cookies({ setCookie }) {
    const [ t ,i18n ] = useTranslation('global');

    const giveCookieConsent = () => {
        setCookie("cookieConsent", true, { path: "/" });
    };

    return (
        <div className="cookie-consent">
            <p>
            {t("cookies.description")}{" "}
            <a href="{}">{t("cookies.learn")}</a>
            </p>
            <button className="cookie-button" onClick={giveCookieConsent}>{t("cookies.accept")}</button>
        </div>
    );
}

export default Cookies;
