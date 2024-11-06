import "./Navigation.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Home } from "./Home/Home";
import { About } from "./About/About";
import { Projects } from "./Projects/Projects";
import { Contacts } from "./Contacts/Contacts";

export const Navigation = () => {
  const { t } = useTranslation();
  //Homepage
  const [homePage, setHomePage] = useState(true);
  //About
  const [about, setAbout] = useState(false);
  //Projects
  const [projects, setProjects] = useState(false);
  //Connection
  const [contacts, setContacts] = useState(false);

  const handleHomePageClick = () => {
    setHomePage(true);
    setAbout(false);
    setProjects(false);
    setContacts(false);
  };
  const handleAboutClick = () => {
    setHomePage(false);
    setAbout(true);
    setProjects(false);
    setContacts(false);
  };

  const handleProjectsClick = () => {
    setHomePage(false);
    setAbout(false);
    setProjects(true);
    setContacts(false);
  };

  const handleContactsClick = () => {
    setHomePage(false);
    setAbout(false);
    setProjects(false);
    setContacts(true);
  };

  return (
    <div className="nav">
      <nav>
        <ul className="nav-list">
          <li>
            <button onClick={handleHomePageClick}>
              {t("NavigationHomePage")}
            </button>
          </li>
          <li>
            <button onClick={handleAboutClick}>{t("NavigationAbout")}</button>
          </li>
          <li>
            <button onClick={handleProjectsClick}>
              {t("NavigationProjects")}
            </button>
          </li>
          <li>
            <button onClick={handleContactsClick}>
              {t("NavigationConnection")}
            </button>
          </li>
        </ul>
      </nav>
      {/* content */}
      <section>
        {homePage ? <Home/> : <></>}
        {about ? <About/> : <></>}
        {projects ? <Projects/> : <></>}
        {contacts ? <Contacts/> : <></>}
      </section>
    </div>
  );
};
