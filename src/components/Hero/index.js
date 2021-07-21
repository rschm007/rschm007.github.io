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
      <HeroHeader />
    </div>
  );
};

export default Hero;
