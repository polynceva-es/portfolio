import { useTranslation } from "react-i18next";
import "./Projects.css";
import { Project } from "../../Project/Project";
import cards from "../../../images/cards.png";
import chess from "../../../images/chess.png";
import lavka from "../../../images/lavka.png";
import social from "../../../images/social.png";
import shifters from "../../../images/shifters.png";
import diplom from "../../../images/diplom.png";

export const Projects = () => {
  const { t } = useTranslation();
  const projects = [
    {
      id: 1,
      name: `${t("GreetingCardTitle")}`,
      about: `${t("GreetingCardAbout")}`,
      url: "https://greeting-card.pics",
      img: cards,
    },
    {
      id: 2,
      name: `${t("LandingChessTitle")}`,
      about: `${t("LandingChessAbout")}`,
      url: "https://polynceva-es.github.io/LandingChess/",
      gitHub: "https://github.com/polynceva-es/LandingChess",
      img: chess,
    },
    {
      id: 3,
      name: `${t("LavkaTitle")}`,
      about: `${t("LavkaAbout")}`,
      url: "https://polynceva-es.github.io/lavka/",
      gitHub: "https://github.com/polynceva-es/lavka",
      img: lavka,
    },
    {
      id: 4,
      name: `${t("TestProjectTitle")}`,
      about: `${t("TestProjectAbout")}`,
      url: "https://polynceva-es.github.io/testProjectTS/",
      gitHub: "https://github.com/polynceva-es/testProjectTS",
      img: social,
    },
    {
      id: 5,
      name: `${t("ShiftersTitle")}`,
      about: `${t("ShiftersAbout")}`,
      url: "https://polynceva-es.github.io/shifters/",
      gitHub: "https://github.com/polynceva-es/shifters",
      img: shifters,
    },
    {
      id: 6,
      name: `${t("MoviesExplorerTitle")}`,
      about: `${t("MoviesExplorerAbout")}`,
      url: "https://portfolio-polyntseva.duckdns.org/movies-explorer/",
      gitHub: "https://github.com/polynceva-es/movies-explorer-frontend",
      img: diplom,
    },
  ];

  return (
    <ul className="projects">
      {projects.map((project) => {
        return <Project key={project.id} project={project} />;
      })}
    </ul>
  );
};
