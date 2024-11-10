import "./Home.css";
import { useTranslation } from "react-i18next";

export const Home = ({handleAboutClick}) => {
  const { t } = useTranslation();

  return (
    <section className="home">
        <h1 className="home__title">{t("HomeTitle")}</h1>
        <h2 className="home__subtitle">{t("HomeSubtitle")}</h2>
        <p className="home__text">{t("HomeText")}</p>
        <button className="home__btn" onClick={handleAboutClick}>{t("HomeButton")}</button>
    </section>
  );
};
