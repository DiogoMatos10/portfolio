import "./ExperienceContent.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ExperienceContent() {
    const [t, i18n] = useTranslation("global");

    return (
        <div className="experience-container">
            <p className="titles">{t("experience.title")}</p>
            <div className="timeline">
                
                <Link to={'https://www.uevora.pt/en/study/courses/bachelors-and-integrated-master-degrees?cod=9751'} target="_blank">
                    <div className="timeline-container left">
                        <div className="timeline-date">{t("experience.timeline1.date")}</div>
                        <div className="timeline-content">
                            <p className="timeline-title">{t("experience.timeline1.title")}</p>
                            <p className="timeline-description">{t("experience.timeline1.description")}</p>
                        </div>
                    </div>
                </Link>

                <Link to={'https://www.uevora.pt/en/study/courses/bachelors-and-integrated-master-degrees?curso=2570'} target="_blank">
                    <div className="timeline-container right">
                        <div className="timeline-date">{t("experience.timeline2.date")}</div>
                        <div className="timeline-content">
                            <p className="timeline-title">{t("experience.timeline2.title")}</p>
                            <p className="timeline-description">{t("experience.timeline2.description")}</p>
                        </div>
                    </div>
                </Link>

                <div className="timeline-container left">
                    <div className="timeline-date">{t("experience.timeline3.date")}</div>
                    <div className="timeline-content">
                        <p className="timeline-title">{t("experience.timeline3.title")}</p>
                        <p className="timeline-description">{t("experience.timeline3.description")}</p>
                    </div>
                </div>
                <div className="timeline-container right">
                    <div className="timeline-date">{t("experience.timeline4.date")}</div>
                    <div className="timeline-content">
                        <p className="timeline-title">{t("experience.timeline4.title")}</p>
                        <p className="timeline-description">{t("experience.timeline4.description")}</p>
                    </div>
                </div>
                <div className="timeline-container left">
                    <div className="timeline-date">{t("experience.timeline5.date")}</div>
                    <div className="timeline-content">
                        <p className="timeline-title">{t("experience.timeline5.title")}</p>
                        <p className="timeline-description">{t("experience.timeline5.description")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceContent;
