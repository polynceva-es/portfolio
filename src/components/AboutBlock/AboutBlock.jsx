import "./AboutBlock.css";
import { useTranslation } from "react-i18next";
import { Contacts } from "./Contacts/Contacts";

export const AboutBlock = () => {
  const { t } = useTranslation();
  return (
    <div className="about">
      <img src="" />
      <h1>{t("MyName")}</h1>
      <p>{t("MyProfession")}</p>
      <Contacts/>
    </div>
  );
};
