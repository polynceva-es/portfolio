import "./About.css"
import { useTranslation } from "react-i18next";
import { Technologies } from "../../Technologies/Technologies";
import { WhatICanDo } from "../../WhatICanDo/WhatICanDo";

export const About = () => {
    const { t } = useTranslation();

    return (
        <div className="aboutMe">
            <Technologies/>
            <WhatICanDo/>
        </div>
    )
}