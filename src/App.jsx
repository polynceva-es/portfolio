import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import { changelanguage } from "./store/reducers/languageSlice";
import i18n from "./components/i18n/index";
import { useTranslation } from "react-i18next";

import { Projects } from "./components/Projects/Projects";

function App() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.language);

  const chooseLanguage = (evt) => {
    evt.preventDefault();
    i18n.changeLanguage(evt.target.value); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    dispatch(changelanguage(evt.target.value));
  };
  return (
    <>
      <select defaultValue={lang} onChange={chooseLanguage}>
        <option value="en">{t("LanguageEng")}</option>
        <option value="ru">{t("LanguageRu")}</option>
      </select>
      <h1>{t("Title")}</h1>
      <Projects/>
    </>
  );
}

export default App;
