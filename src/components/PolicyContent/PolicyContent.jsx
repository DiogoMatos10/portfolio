import "./PolicyContent.css";
import { useTranslation } from "react-i18next";

function PolicyContent() {
    const { t } = useTranslation("global"); 

    return (
        <div className="policy-container">
            <p className="titles">{t('policy.title')}</p>
            <section>
                <p className="subtitles titles">{t('policy.privacyPolicy')}</p>
                <p className="paragraph">
                    {t('policy.privacyPolicyP1')}
                </p>
                <p className="paragraph">
                    {t('policy.privacyPolicyP2')}
                </p>
                <p className="paragraph">
                    {t('policy.privacyPolicyP3')}
                </p>
            </section>

            <section>
                <p className="paragraph suba">{t('policy.whyWeCollect')}</p>
                <p className="paragraph">
                    {t('policy.whyWeCollectP1')}
                </p>
                <p className="paragraph">
                    {t('policy.whyWeCollectP2')}
                </p>
            </section>

            <section>
                <p className="paragraph suba">{t('policy.dataSharing')}</p>
                <p className="paragraph">
                    {t('policy.dataSharingP1')}
                </p>
            </section>

            <section>
                <p className="paragraph suba">{t('policy.dataRetention')}</p>
                <p className="paragraph">
                    {t('policy.dataRetentionP1')}
                </p>
            </section>

            <section>
                <p className="paragraph suba">{t('policy.consentWithdrawal')}</p>
                <p className="paragraph">
                    {t('policy.consentWithdrawalP1')}
                </p>
            </section>

            <section>
                <p className="paragraph suba">{t('policy.dataPortability')}</p>
                <p className="paragraph">
                    {t('policy.dataPortabilityP1')}
                </p>
            </section>

            <section>
                <p className="paragraph suba">{t('policy.useOfData')}</p>
                <p className="paragraph">
                    {t('policy.useOfDataP1')}
                </p>
            </section>

            <section>
                <p className="paragraph suba">{t('policy.changesPolicy')}</p>
                <p className="paragraph">
                    {t('policy.changesPolicyP1')}
                </p>
            </section>

            <section>
                <p className="subtitles titles">{t('policy.cookieInformation')}</p>
                <p className="paragraph">
                    {t('policy.cookieInformationP1')}
                </p>

                <p className="paragraph suba">{t('policy.whatAreCookies')}</p>
                <p className="paragraph">
                    {t('policy.whatAreCookiesP1')}
                </p>
                <p className="paragraph">
                    {t('policy.whatAreCookiesP2')}
                </p>

                <p className="paragraph suba">{t('policy.cookiesUse')}</p>
                <p className="paragraph">
                    {t('policy.cookiesUseP1')}
                </p>

                <p className="paragraph suba">{t('policy.cookiesTypes')}</p>
                <p className="paragraph">
                    {t('policy.cookiesTypesP1')}
                </p>
                <ul>
                    <li>{t('policy.cookiesTypesP2')}</li>
                    <li>{t('policy.cookiesTypesP3')}</li>
                    <li>{t('policy.cookiesTypesP4')}</li>
                </ul>

                <p className="paragraph suba">{t('policy.manageCookies')}</p>
                <p className="paragraph">
                    {t('policy.manageCookiesP1')}
                </p>
            </section>

            <section>
                <p className="subtitles titles">{t('policy.termsOfUse')}</p>
                <p className="paragraph">
                    {t('policy.termsOfUseP1')}
                </p>
                <p className="paragraph">
                    {t('policy.termsOfUseP2')}
                </p>
                <p className="paragraph">
                    {t('policy.termsOfUseP3')}
                </p>
            </section>

            <section>
                <p className="subtitles titles">{t('policy.copyright')}</p>
                <p className="paragraph">
                    {t('policy.copyrightP1')}
                </p>
                <p className="paragraph">
                    {t('policy.copyrightP2')}
                </p>
                <p className="paragraph">
                    {t('policy.copyrightP3')}
                </p>
                <p className="paragraph">
                    {t('policy.copyrightP4')}
                </p>
            </section>
        </div>
    );
}

export default PolicyContent;
