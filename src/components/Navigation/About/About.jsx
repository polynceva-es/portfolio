import "./About.css"
import { useTranslation } from "react-i18next";
import { Technologies } from "../../Technologies/Technologies";

export const About = () => {
    const { t } = useTranslation();

    return (
        <div className="aboutMe">
            <p>{t('AboutMe1')}</p>
            <p>{t('AboutMe2')}</p>
            <p>{t('AboutMe3')}</p>
            <p>{t('AboutMe4')}</p>
            <p>{t('AboutMe5')}</p>
            <p>{t('AboutMe6')}</p>
            <p>{t('AboutMe7')}</p>
            <p>{t('AboutMe8')}</p>
            <p>{t('AboutMe9')}</p>
            <p>{t('AboutMe10')}</p>
            <Technologies/>
        </div>
    )
}