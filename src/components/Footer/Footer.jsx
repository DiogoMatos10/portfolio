import { ThemeMode } from "../../App";
import React, { useState, useEffect, useContext } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
    const { themeMode, setThemeMode } = useContext(ThemeMode);
    const [t, i18n] = useTranslation("global");
    let date = new Date();

    return (
        <div className={`footer`}>
            <div className="footer-content">
                <div className="footer-left">
                    <p>&copy; {date.getFullYear()} Diogo Matos</p>
                </div>
                <div className="footer-center">
                    <p>{t("footer.info1")}</p>
                    <p>{t("footer.info2")}</p>
                </div>
                <div className="footer-right">
                    <Link to="/terms-conditions" target="_blank">{t("footer.terms")}</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
