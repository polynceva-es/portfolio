import "./Contacts.css";
import { useTranslation } from "react-i18next";
import location from "../../../images/location.png";
import telegram from "../../../images/telegram.png";
import github from "../../../images/github.png";
import gmail from "../../../images/gmail.png";
import { Link } from "react-router-dom";

export const Contacts = () => {
  const { t } = useTranslation();
  const contacts = {
    email: "ekaterina.polynceva@gmail.com",
    telegram: "@polynceva_ekaterina",
    gitHub: "https://github.com/polynceva-es",
    location: `${t("MyLocation")}`,
  };
  return (
    <ul className="contacts">
      <li className="contacts__item">
        <img src={gmail} alt="email logo" />
        <div>
          <p>{t("Email")}</p>
          <Link
            to="#"
            onClick={() => (window.location = `mailto:${contacts.email}`)}
          >
            {contacts.email}
          </Link>
        </div>
      </li>
      <li className="contacts__item">
        <img src={telegram} alt="telegram logo" />
        <div>
          <p>{t("Telegram")}</p>
          <Link to="https://t.me/polynceva_ekaterina" target="_blanck">{contacts.telegram}</Link>
        </div>
      </li>
      <li className="contacts__item">
        <img src={github} alt="github logo" />
        <div>
          <p>{t("Github")}</p>
          <Link to={contacts.gitHub} target="_blanck">github.com/polynceva-es</Link>  
        </div>
      </li>
      <li className="contacts__item">
        <img src={location} alt="location logo" />
        <div>
          <p>{t("Location")}</p>
          {contacts.location}
        </div>
      </li>
    </ul>
  );
};
