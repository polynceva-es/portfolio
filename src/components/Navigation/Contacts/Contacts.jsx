import { useTranslation } from "react-i18next";

export const Contacts = () => {
    const { t } = useTranslation();

    return (
        <div>{t('NavigationConnection')}</div>
    )
}