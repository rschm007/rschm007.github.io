import CTAbutton from "../../CTAbutton";

const HeroHeader = () => {
  return (
    <header>
        <h1>
            robert <strong>schmahl</strong>
            <div className="designer">
                developer
            <span>+</span>
                designer
            </div>
        </h1>
          <div className="buttons">
            <CTAbutton
                href="/about"
                text="About Me"
            />
            <CTAbutton
                href="/work"
                text="My Work"
            />
          <CTAbutton
            href="/contact"
            text="Get in Touch"
          />
        </div>
      </header>
  );
};

export default HeroHeader;
