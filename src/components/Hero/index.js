import HeroHeader from "../HeroHeader";
import Starfield from "../Starfield";
import Mountains from "../Mountains";
import Moon from "../Moon";

const Hero = () => {
  return (
    <div class="hero flex" id="welcome">
      <Moon />
      <Mountains />
      <Starfield />
      <header className="heroHeader w-full h-auto bg-gradient-to-b from-gray-900 to-gray-700">
        <HeroHeader />
      </header>
    </div>
  );
};

export default Hero;
