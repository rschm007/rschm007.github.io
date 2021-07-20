import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import ContactForm from "./ContactForm";
import LineBreak from "../LineBreak";

const Contact = () => {
  return (
    <div id="contact">
      <div>
        <div>
          <h2>Let's start a conversation</h2>
          <LineBreak />
          <div className="social-icons">
            <a
              href="https://github.com/rschm007/Portfolio_v3/raw/main/src/assets/downloads/2020-Resume-RobertSchmahl.pdf"
              download="2020-Resume-RobertSchmahl.pdf"
            >
              <FontAwesomeIcon icon={faFileDownload} />
            </a>
            <a
              href="https://github.com/rschm007"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a
              href="https://linkedin.com/in/robert-schmahl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
