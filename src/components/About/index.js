import React from "react";

import LineBreak from "../LineBreak";

const About = () => {
  return (
    <div id="about">
      <article>
        <div>
          <h2>My name is Robert</h2>
          <LineBreak />
        </div>
        <div>
          <h3>
            I am a web developer and UI/UX designer in Orange County, CA.
          </h3>
          <p>
            I love building cool things and designing intuitive user interfaces.
            I am curious about many things and have spent time working in
            politics, non-profits, live theatre, graphic design and the aquarium
            industry. Now I spend my time reading about cookies and Reacting to
            things.
          </p>
        </div>
        <div>
          <h2>What do I do?</h2>
          <LineBreak />
        </div>
        <div className="skills">
          <div>
            <h3>I'm a full stack developer</h3>
            <p>
              I am a full stack web developer, able to tackle projects from
              start to finish.
            </p>
            <h3>Dev Tools & Languages</h3>
            <div>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>Bootstrap/TailwindCSS</li>
                <li>Node.js</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>React</li>
              </ul>
            </div>
          </div>
          <div>
            <h3>I'm a designer</h3>
            <p>
              I love to create elegant designs that create meaningful, intuitive
              user interactions.
            </p>
            <h3>Specialties</h3>
            <div>
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
