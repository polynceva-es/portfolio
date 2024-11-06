import "./Contacts.css";
import { useTranslation } from "react-i18next";

export const Contacts = () => {
    const {t} = useTranslation();
    const contacts =
        {
            email: "ekaterina.polynceva@gmail.com",
            telegram: "@polynceva_ekaterina",
            gitHub: "https://github.com/polynceva-es",
            location: `${t("MyLocation")}`
        }
    return (
        <div>
            <div>{contacts.email}</div>
            <div>{contacts.telegram}</div>
            <div>{contacts.gitHub}</div>
            <div>{contacts.location}</div>

        </div>
    )
}