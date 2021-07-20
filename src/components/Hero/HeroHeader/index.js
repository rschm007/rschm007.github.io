import CTAbutton from "../../CTAbutton";

const HeroHeader = () => {
  return (
    <div
      id="header"
    >
      <div className="heroHeader">
        <h1>
        <span>
            I am{" "}
          </span>
          <span>
            robert<strong>schmahl</strong>{" "}
          </span>
          <span>
            developer
          </span>
          <div className="designer">
            <span>
              {" "}
              &
            </span>
            <span>
              designer
            </span>
          </div>
        </h1>
        <div className="buttons">
          <CTAbutton
            href="#work"
            text="My Work"
          />
          <CTAbutton
            href="#contact"
            text="Get in touch"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
