import "./Footer.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";  

function Footer() {
    const [t, i18n] = useTranslation("global");
    let date = new Date();
    const navigate = useNavigate();  

    const navigateToPolicy = () => {
        navigate("/terms-conditions");
        window.scrollTo(0, 0); 
    };

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
                    <Link to="/terms-conditions" onClick={navigateToPolicy}>{t("footer.terms")}</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
