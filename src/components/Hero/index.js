import HeroHeader from "./HeroHeader";
import Starfield from "./Starfield";
import Mountains from "./Mountains";
import Moon from "./Moon";

const Hero = () => {
  return (
    <div className="hero" id="welcome">
      <Moon />
      <Mountains />
      <Starfield />
      <header className="heroHeader">
        <HeroHeader />
      </header>
    </div>
  );
};

export default Hero;
