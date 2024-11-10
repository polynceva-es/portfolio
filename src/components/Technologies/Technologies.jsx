import "./Technologies.css";
import { useTranslation } from "react-i18next";
import html from "../../images/icons8-html-5.svg";
import css from "../../images/icons8-css3.svg";
import js from "../../images/icons8-javascript.svg";
import ts from "../../images/icons8-typescript.png";
import react from "../../images/icons8-react.svg";
import redux from "../../images/icons8-redux.svg";
import git from "../../images/icons8-git.png";
import translate from "../../images/translate.png";
import websocket from "../../images/websocket.svg";
import vite from "../../images/icons8-vite.svg";
import figma from "../../images/icons8-figma.svg";
import pixel from "../../images/pixel.jpg";

export const Technologies = () => {
  const { t } = useTranslation();
  const technologies = [
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "JavaScript", img: js},
    { name: "TyPeScript", img: ts},
    { name: "React", img: react},
    { name: "Redux Toolkit", img: redux},
    { name: "Git", img: git},
    { name: "Translate", img: translate},
    { name: "WebSocet", img: websocket},
    { name: "Vite", img: vite},
    { name: "Figma", img: figma},
    { name: "PixelPerfect", img: pixel},
  ];
  return (
    <section className="tech">
      <h1>{t("Technologies")}</h1>
      <ul className="tech__list">
        {technologies.map((elem) => {
          return (
            <li className="tech__item" key={elem.name}>
              <img id={elem.name} src={elem.img} alt={elem.name} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
