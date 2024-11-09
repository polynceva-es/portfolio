import './WhatICanDo.css';
import { useTranslation } from "react-i18next";

export const WhatICanDo = () => {
    const { t } = useTranslation();
    return (
        <section>
            <h1>{t('WhatICanDo')}</h1>
        </section>
    )
}