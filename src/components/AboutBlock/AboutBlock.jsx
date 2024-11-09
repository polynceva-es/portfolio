import "./AboutBlock.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Contacts } from "./Contacts/Contacts";
import myPhoto from "../../images/photo.jpg";

export const AboutBlock = () => {
  const { t } = useTranslation();
  const [isAboutBlockOpen, setIsAboutBlockOpen] = useState(true);
  // const handleAboutBlockOpen = () => {
  //   setIsAboutBlockOpen(!isAboutBlockOpen);
  // };
  const aboutBlockClassName = `about ${
    isAboutBlockOpen ? "about_visible" : "about_hidden"
  }`;

  return (
    <div className="about__conteiner">
    {/* <button onClick={handleAboutBlockOpen}>
      <span className={`line ${isAboutBlockOpen ? "line_open" : ""}`}></span>
    </button> */}
    <div className={aboutBlockClassName}>
      <img src={myPhoto} alt="my photo" />
      <h1>{t("MyName")}</h1>
      <p>{t("MyProfession")}</p>
      <Contacts />
    </div>
  </div>

  );
};
