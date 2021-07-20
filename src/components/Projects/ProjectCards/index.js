import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = (props) => {
  return (
    <div className="project">
      <a
        className={props.classTitle}
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="projectImage">
          <img src={props.src} alt={props.classTitle} />
        </div>
      </a>
      <div className="projectDesc">
        <div className="projectTitle">
          <h3>{props.title}</h3>
          <h4>{props.tools}</h4>
          <p>{props.summary}</p>
          <div className="buttons">
            <a
              href={props.repoHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source
              <FontAwesomeIcon className={styles.link} icon={faLink} />
            </a>
            <a
              href={props.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Try it Out
              <FontAwesomeIcon icon={faLink} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
