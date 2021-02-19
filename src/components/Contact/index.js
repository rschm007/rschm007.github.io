import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import ContactForm from "../ContactForm";
import LineBreak from "../LineBreak";

const styles = {
  title: "title text-white justify-center",
  h2: "text-5xl tracking-tight font-bold mt-7",
  h3: "text-3xl tracking-tight font-medium pb-7 mt-5",
  h4: "text-2xl text-pink-800 tracking-tight font-medium pb-7",
  icons:
    "text-6xl -mt-8 mb-6 m-3 outerGlowborder-transparent hover:text-pink-500 hover:border-pink-700 transition duration-200 ease-in-out transform hover:-translate-y-1",
  paragraph: "text-lg pb-6 leading-7 text-black",
};

const Contact = () => {
  return (
    <div className="contact flex w-full h-full pt-20 pb-28 mb-28 mt-0 px-80 justify-center pt-40">
      <div className="wrapper bg-black opacity-90 px-20 py-2">
        <div className={styles.title}>
          <h2 className={styles.h2}>Let's start a conversation</h2>
          <LineBreak />
          <div className="social-icons relative">
            <a
              href="https://github.com/rschm007/Portfolio_v3/raw/main/src/assets/downloads/2020-Resume-RobertSchmahl.pdf"
              download="2020-Resume-RobertSchmahl.pdf"
            >
              <FontAwesomeIcon icon={faFileDownload} className={styles.icons} />
            </a>
            <a
              href="https://github.com/rschm007"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithubSquare} className={styles.icons} />
            </a>
            <a
              href="https://linkedin.com/in/robert-schmahl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className={styles.icons} />
            </a>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
