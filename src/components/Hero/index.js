import HeroHeader from "../HeroHeader";
import Starfield from "../Starfield";
import Mountains from "../Mountains";
import Moon from "../Moon";

const Hero = () => {
  return (
    <div className="hero flex" id="welcome">
      <Moon />
      <Mountains />
      <Starfield />
      <header className="heroHeader w-full h-auto">
        <HeroHeader />
      </header>
    </div>
  );
};

export default Hero;
