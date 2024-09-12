import "./PolicyContent.css";
import { useTranslation } from "react-i18next";

function PolicyContent() {
    const { t } = useTranslation(); // for translations

    return (
        <div className="policy-container">
            <p className="titles">{t('Terms and Conditions')}</p>
            <section>
                <p className="subtitles titles">{t('Privacy Policy')}</p>
                <p className="paragraph">
                    {t(`This Privacy Policy outlines the terms and conditions under which the website diogo.matos.dev@outlook.com
                    manages the personal data of its visitors and users. As of May 25, 2018, the General Data Protection Regulation (GDPR) –
                    Regulation No. 2016/679 of the European Parliament and of the Council of April 27, 2016 – establishes the rules regarding the protection,
                    processing, and free movement of personal data of natural persons. This regulation applies directly to all entities processing such data in 
                    any Member State of the European Union, including Portugal.`)}
                </p>
                <p className="paragraph">
                    {t(`The purpose of this communication is to provide you with a clear understanding of the rules applicable to the processing of your personal data, 
                    the rights you are entitled to, and how you can manage your consents directly and simply. As part of the services provided by this site, Diogo Matos, 
                    as the entity determining the means of processing and the purposes, is responsible for the processing of your personal data and for ensuring the protection of your privacy, 
                    acting in compliance with the law and the GDPR.`)}
                </p>
                <p className="paragraph">
                    {t(`Contact: Email: diogo.matos.dev@outlook.com; Website: https://www.diogomatos.pt`)}
                </p>
            </section>

            <section>
                <p className="paragraph suba">{t('Why We Collect Your Personal Data')}</p>
                <p className="paragraph">
                    {t(`diogomatos.pt collects personal data to communicate with you about potential collaborations, provide you with updates on new projects, and fulfill any legal obligations. 
                    The data collected is processed with a commitment to privacy and security. Your data is obtained through information provided directly or indirectly by you via forms, emails, or interactions on the website.`)}
                </p>
                <p className="paragraph">
                    {t(`You have the right at any time to access your personal data, as well as to modify, restrict, or delete it within the limits of the GDPR. 
                    You may withdraw your consent or exercise other rights provided by law by sending an email to contact@diogomatos.pt.`)}
                </p>
            </section>

            <section>
                <p className="paragraph suba">{t('Will Your Personal Data Be Shared with Third Parties?')}</p>
                <p className="paragraph">
                    {t(`To fulfill the purposes stated in this Privacy Policy, it may be necessary to share your personal data with third parties who support us in the services provided, such as hosting providers or web development tools.`)}
                </p>
            </section>

            <section>
                <p className="paragraph suba">{t('Retention of Personal Data')}</p>
                <p className="paragraph">
                    {t(`diogomatos.pt will retain your personal data for as long as necessary to provide the services and to comply with legal obligations.`)}
                </p>
            </section>

            <section>
                <p className="paragraph suba">{t('Consequences of Withdrawing Consent')}</p>
                <p className="paragraph">
                    {t(`If you withdraw your consent, it does not compromise the legality of the processing carried out up to that date. The existing data will be destroyed.`)}
                </p>
            </section>

            <section>
                <p className="paragraph suba">{t('Right to Data Portability')}</p>
                <p className="paragraph">
                    {t(`If you have given your consent or we are executing a contract, you have the right to request data portability. 
                    This means you have the right to receive the data you provided in a structured, commonly used, and machine-readable format and transmit it directly to another entity without hindrance from us.`)}
                </p>
            </section>

            <section>
                <p className="paragraph suba">{t('Use of Personal Data')}</p>
                <p className="paragraph">
                    {t(`When you provide us with information such as your name, email address, or other contact details for the purposes of collaboration or discussing projects, 
                    this data will be subject to this Privacy Policy, the Terms of Use, and other referenced documents (see “Terms of Use”), applicable at any time and which should be reviewed to ensure they are accepted.`)}
                </p>
            </section>

            <section>
                <p className="paragraph suba">{t('Changes to the Privacy Policy')}</p>
                <p className="paragraph">
                    {t(`diogomatos.pt reserves the right to make changes to its Privacy Policy at any time without prior notice. In such cases, you will be notified of any changes that may affect your privacy.`)}
                </p>
            </section>

            <section>
                <p className="subtitles titles">{t('Cookie Information')}</p>
                <p className="paragraph">
                    {t(`The website diogomatos.pt uses cookies, both first-party and third-party, and similar devices to enhance the user experience, understand how users interact with the site, and, in certain cases, present relevant advertisements based on browsing habits.`)}
                </p>

                <p className="paragraph suba">{t('What are Cookies?')}</p>
                <p className="paragraph">
                    {t(`Cookies are small text files stored on the user’s device via the internet browser. These files only contain information related to user preferences and do not include personal data.`)}
                </p>

                <p className="paragraph suba">{t('What are Cookies Used For?')}</p>
                <p className="paragraph">
                    {t(`Cookies help improve the usability of the website, allowing faster and more efficient navigation, and eliminating the need to repeatedly enter the same information. They also serve to analyze browsing patterns and optimize the site structure.`)}
                </p>

                <p className="paragraph suba">{t('What Types of Cookies Are Used on Our Website?')}</p>
                <p className="paragraph">
                    {t(`Strictly Necessary Cookies: These are essential for navigating the website and using its features, such as accessing secure areas. Without these cookies, the services you requested cannot be provided.`)}
                </p>
                <p className="paragraph">
                    {t(`Analytical Cookies: These cookies are used to collect information about how visitors use the site, such as which pages are most visited or if error messages are encountered on certain pages. These cookies are used for statistical purposes and to improve the website continuously.`)}
                </p>
                <p className="paragraph">
                    {t(`Functionality Cookies: These cookies store user preferences regarding the use of the site, such as language or preferred region, to offer a more personalized experience.`)}
                </p>

                <p className="paragraph suba">{t('How to Manage Cookies?')}</p>
                <p className="paragraph">
                    {t(`You can configure your internet browser settings at any time to be notified about the reception of cookies and decide whether to accept, reject, or delete them. 
                    Please note that refusing to use cookies may result in some website features being unavailable or navigation not being optimized.`)}
                </p>
            </section>

            <section>
                <p className="subtitles titles">{t('Terms of Use')}</p>
                <p className="paragraph">
                    {t(`The information available on diogomatos.pt can be viewed, copied, printed, and distributed exclusively for non-commercial use, provided that all copies include the legal copyright notice below. 
                    This information may also be used to request collaboration or project information. The content of this site may not be modified or reinterpreted to be protected under another copyright, patent, trademark, or intellectual property registration that does not belong to Diogo Matos.`)}
                </p>
                <p className="paragraph">
                    {t(`The information available on diogomatos.pt may contain technical inaccuracies or typographical errors. Consequently, Diogo Matos assumes no responsibility for direct, indirect, incidental, or collateral damages resulting from visiting these pages, 
                    including data loss, loss of revenue or other profits, and business process interruption resulting from the use or inability to use the information on this site.`)}
                </p>
                <p className="paragraph">
                    {t(`Diogo Matos also declines any responsibility for the content of third-party websites that link to or from diogomatos.pt.`)}
                </p>
            </section>

            <section>
                <p className="subtitles titles">{t('Copyright')}</p>
                <p className="paragraph">
                    {t(`All elements contained on the website diogomatos.pt, including texts, photos, illustrations, and others, are protected by law under the Copyright and Related Rights Code.`)}
                </p>
                <p className="paragraph">
                    {t(`The copying, reproduction, and dissemination of texts, photos, illustrations, and other elements contained on this website are expressly prohibited without the express authorization of Diogo Matos, regardless of the means used, except for the legal citation right.`)}
                </p>
                <p className="paragraph">
                    {t(`Commercial use of the elements contained on the website diogomatos.pt, including texts, photos, illustrations, and others, is expressly prohibited.`)}
                </p>
                <p className="paragraph">
                    {t(`Diogo Matos reserves the right to take legal action against the authors of any unauthorized copying, reproduction, dissemination, or commercial exploitation of the elements contained on this website, including texts, photos, illustrations, and others.`)}
                </p>
            </section>
        </div>
    );
}

export default PolicyContent;
