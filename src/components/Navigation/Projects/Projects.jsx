import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import gitHubLogo from "../../../images/github-logo.png";
import linkLogo from "../../../images/globe.svg";
import "./Projects.css";

export const Projects = () => {
  const { t } = useTranslation();
  const projects = [
    {
      id: 1,
      name: `${t("GreetingCardTitle")}`,
      about: `${t("GreetingCardAbout")}`,
      url: "https://greeting-card.pics",
    },
    {
      id: 2,
      name: `${t("LandingChessTitle")}`,
      about: `${t("LandingChessAbout")}`,
      url: "https://polynceva-es.github.io/LandingChess/",
      gitHub: "https://github.com/polynceva-es/LandingChess",
    },
    {
      id: 3,
      name: `${t("LavkaTitle")}`,
      about: `${t("LavkaAbout")}`,
      url: "https://polynceva-es.github.io/lavka/",
      gitHub: "https://github.com/polynceva-es/lavka",
    },
    {
      id: 4,
      name: `${t("TestProjectTitle")}`,
      about: `${t("TestProjectAbout")}`,
      url: "https://polynceva-es.github.io/testProjectTS/",
      gitHub: "https://github.com/polynceva-es/testProjectTS",
    },
    {
      id: 5,
      name: `${t("ShiftersTitle")}`,
      about: `${t("ShiftersAbout")}`,
      url: "https://polynceva-es.github.io/shifters/",
      gitHub: "https://github.com/polynceva-es/shifters",
    },
    {
      id: 6,
      name: `${t("MoviesExplorerTitle")}`,
      about: `${t("MoviesExplorerAbout")}`,
      url: "https://portfolio-polyntseva.duckdns.org/movies-explorer/",
      gitHub: "https://github.com/polynceva-es/movies-explorer-frontend",
    },
  ];

  return (
    <ul>
      {projects.map((project) => {
        return (
          <li key={project.id}>
            <h1>{project.name}</h1>
            <h2>{project.about}</h2>
            <Link to={project.url}>
              <img
                width="16px"
                height="16px"
                src={linkLogo}
                alt="link to website"
              />
            </Link>
            {project.gitHub ? (
              <Link to={project.gitHub}>
                <img
                  width="16px"
                  height="16px"
                  src={gitHubLogo}
                  alt="link to gitHub repository"
                />
              </Link>
            ) : (
              <></>
            )}
          </li>
        );
      })}
    </ul>
  );
};
