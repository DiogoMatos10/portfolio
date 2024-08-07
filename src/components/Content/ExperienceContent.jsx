import "./ExperienceContent.css";
import { useTranslation } from "react-i18next";

function ExperienceContent() {
    const [t, i18n] = useTranslation("global");

    return (
        <div className="experience-container">
            <p className="titles">{t("experience.title")}</p>
            <div className="timeline">
                <div className="timeline-container left">
                    <div class="timeline-date">{t("experience.timeline1.date")}</div>
                    <div class="timeline-content">
                        <p className="timeline-title">{t("experience.timeline1.title")}</p>
                        <p className="timeline-description">{t("experience.timeline1.description")}</p>
                    </div>
                </div>
                <div className="timeline-container right">
                    <div class="timeline-date">{t("experience.timeline2.date")}</div>
                    <div class="timeline-content">
                        <p className="timeline-title">{t("experience.timeline2.title")}</p>
                        <p className="timeline-description">{t("experience.timeline2.description")}</p>
                    </div>
                </div>
                <div className="timeline-container left">
                    <div class="timeline-date">{t("experience.timeline3.date")}</div>
                    <div class="timeline-content">
                        <p className="timeline-title">{t("experience.timeline3.title")}</p>
                        <p className="timeline-description">{t("experience.timeline3.description")}</p>
                    </div>
                </div>
                <div className="timeline-container right">
                    <div class="timeline-date">{t("experience.timeline4.date")}</div>
                    <div class="timeline-content">
                        <p className="timeline-title">{t("experience.timeline4.title")}</p>
                        <p className="timeline-description">{t("experience.timeline4.description")}</p>
                    </div>
                </div>
                <div className="timeline-container left">
                    <div class="timeline-date">{t("experience.timeline5.date")}</div>
                    <div class="timeline-content">
                        <p className="timeline-title">{t("experience.timeline5.title")}</p>
                        <p className="timeline-description">{t("experience.timeline5.description")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceContent;
