import { useTranslation } from "react-i18next";

export const About = () => {
    const { t } = useTranslation();

    return (
        <div>{t('NavigationAbout')}</div>
    )
}