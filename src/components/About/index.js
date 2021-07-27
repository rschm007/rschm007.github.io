import React from "react";

import LineBreak from "../LineBreak";

const About = () => {
  return (
    <div>
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
            I love building cool things and making the web a prettier place to be.
          </p>
        </div>
        <div>
          <h2>What do I do?</h2>
          <LineBreak />
        </div>
        <div className="skills">
          <div>
            <h3>I'm a full stack developer</h3>
            <h3>Dev Tools & Languages</h3>
            <div>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>SCSS/SASS</li>
                <li>JavaScript</li>
                <li>C#</li>
                <li>Blazor</li>
                <li>React</li>
              </ul>
            </div>
          </div>
          <div>
            <h3>I'm a designer</h3>
            <h3>Specialties</h3>
            <div>
              <ul>
                <li>Photoshop, Illustrator, Xd</li>
                <li>UI/UX</li>
                <li>Social media</li>
                <li>Wordpress Layout & Design</li>
                <li>Storefront Design</li>
                <li>Shopify</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default About;
