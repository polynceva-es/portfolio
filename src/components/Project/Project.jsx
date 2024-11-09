import "./Project.css";
import { Link } from "react-router-dom";
import gitHubLogo from "../../images/github-logo.png";
import linkLogo from "../../images/link.png";

export const Project = (project) => {
  return (
    <li
      className="project"
      style={{ backgroundImage: `url(${project.project.img})` }}
    >
      <section className="project__section">
        <h1 className="project__title">{project.project.name}</h1>
        <p className="project__subtitle">{project.project.about}</p>
        <div>
          <Link to={project.project.url} target="_blank">
            <img
              width="30px"
              height="30px"
              src={linkLogo}
              alt="link to website"
            />
          </Link>
          {project.project.gitHub ? (
            <Link to={project.project.gitHub} target="_blank">
              <img
                width="30px"
                height="30px"
                src={gitHubLogo}
                alt="link to gitHub repository"
              />
            </Link>
          ) : (
            <></>
          )}
        </div>
      </section>
    </li>
  );
};
