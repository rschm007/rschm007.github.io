import React from "react";
// import { ReactComponent as CSSIcon } from "../../assets/imgs/skills-icons/css3-brands.svg";
// import { ReactComponent as HTMLIcon } from "../../assets/imgs/skills-icons/html5-brands.svg";
// import { ReactComponent as JSIcon } from "../../assets/imgs/skills-icons/js-brands.svg";
// import { ReactComponent as BootstrapIcon } from "../../assets/imgs/skills-icons/bootstrap-brands.svg";
// import { ReactComponent as TailwindIcon } from "../../assets/imgs/skills-icons/tailwindcss-mark.svg";
// import { ReactComponent as NodeIcon } from "../../assets/imgs/skills-icons/node-js-brands.svg";
// import { ReactComponent as MongoIcon } from "../../assets/imgs/skills-icons/MongoDB_Logo.svg";

import LineBreak from "../LineBreak";

const styles = {
  title: "title justify-center",
  h2: "text-5xl tracking-tight font-bold mt-7",
  h3: "text-3xl tracking-tight font-medium pb-7",
  h4: "text-2xl text-pink-800 tracking-tight font-medium pb-7",
  description:
    "description bg-gray-50 opacity-80 py-7 px-10 text-center rounded-sm",
  column:
    "column bg-gray-50 opacity-80 py-7 px-10 text-center flex-shrink mx-5",
  paragraph: "text-lg pb-6 leading-7 text-black",
  columnP: "text-lg pb-6 leading-7 text-black",
  icon: "w-12 h-12 my-4",
};

const About = () => {
  return (
    <div
      className="about flex bg-gray-50 w-full h-full pt-80 items-center">
      <article className="mx-72 z-10">
        <div className={styles.title}>
          <h2 className={styles.h2}>My name is Robert</h2>
          <LineBreak />
        </div>
        <div className={styles.description}>
          <h3 className={styles.h3}>
            I am a web developer and UI/UX designer in Orange County, CA.
          </h3>
          <p className={styles.paragraph}>
            I love building cool things and designing intuitive user interfaces.
            I am curious about many things and have spent time working in
            politics, non-profits, live theatre, graphic design and the aquarium
            industry. Now I spend my time reading about cookies and Reacting to
            things.
          </p>
        </div>
        <div className={styles.title}>
          <h2 className={styles.h2}>What do I do?</h2>
          <LineBreak />
        </div>
        <div className="skills flex flex-wrap justify-center">
          <div className={styles.column}>
            <h3 className={styles.h3}>I'm a full stack developer</h3>
            <p className={styles.columnP}>
              I am a full stack web developer, able to tackle projects from
              start to finish.
            </p>
            <h3 className={styles.h4}>Dev Tools & Languages</h3>
            <div className={styles.columnP}>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>Bootstrap/TailwindCSS</li>
                <li>Node.js</li>
                <li>mySQL</li>
                <li>MongoDB</li>
                <li>Github & Bash</li>
              </ul>
            </div>
          </div>
          <div className={styles.column}>
            <h3 className={styles.h3}>I'm a designer</h3>
            <p className={styles.columnP}>
              I love to create elegant designs that create meaningful, intuitive
              user interactions.
            </p>
            <h3 className={styles.h4}>Specialties</h3>
            <div className={styles.columnP}>
              <ul>
                <li>Photoshop, Illustrator, Xd</li>
                <li>UI/UX</li>
                <li>Social media</li>
                <li>Web ads & campaigns</li>
                <li>Mobile-first design</li>
                <li>Storefront design</li>
                <li>Shopify</li>
                <li>WordPress & Drupal</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default About;
