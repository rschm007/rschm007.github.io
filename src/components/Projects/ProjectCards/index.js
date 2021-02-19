import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const styles = {
  img: "object-cover rounded-full mt-20",
  h3: "text-4xl uppercase text-pink-600 tracking-tight font-bold mt-7 mb-1",
  h4: "text-base tracking-tight font-light mb-1 italic",
  summary: "summary text-lg pb-6 leading-7 font-normal text-black",
  button:
    "mr-4 pb-1 pt-2 px-2 text-lg  text-gray-800 border-b-2 border-pink-600 font-medium hover:bg-transparent hover:bg-pink-600 hover:rounded-sm hover:text-white transition duration-200 ease-in-out transform hover:-translate-y-1",
  link: "ml-2 font-normal",
};

const ProjectCard = (props) => {
  return (
    <div className="project grid grid-cols-2 gap-2 mb-10">
      <a
        className={props.classTitle}
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="projectImage">
          <img className={styles.img} src={props.src} alt={props.classTitle} />
        </div>
      </a>
      <div className="projectDesc text-left ml-0 mt-12">
        <div className="projectTitle">
          {/* <i className={props.icons} /> */}
          <h3 className={styles.h3}>{props.title}</h3>
          <h4 className={styles.h4}>{props.tools}</h4>
          <p className={styles.summary}>{props.summary}</p>
          <div className="buttons flex flex-wrap">
            <a
              className={styles.button}
              href={props.repoHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source
              <FontAwesomeIcon className={styles.link} icon={faLink} />
            </a>
            <a
              className={styles.button}
              href={props.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Try it Out
              <FontAwesomeIcon className={styles.link} icon={faLink} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
