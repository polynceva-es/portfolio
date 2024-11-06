import './Header.css';
import { changelanguage } from "../../store/reducers/languageSlice";
import i18n from "../../components/i18n/index";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const lang = useSelector((state) => state.lang.language);
  
    const chooseLanguage = (evt) => {
      evt.preventDefault();
      i18n.changeLanguage(evt.target.value); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
      dispatch(changelanguage(evt.target.value));
    };

    return (
        <header className='header'>
          <select defaultValue={lang} onChange={chooseLanguage}>
            <option value="en">{t("LanguageEng")}</option>
            <option value="ru">{t("LanguageRu")}</option>
          </select>
        </header>
      );
}