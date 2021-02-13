import HeroHeader from "../HeroHeader";
import Starfield from "../Starfield";
import Mountains from "../Mountains";

const Hero = () => {
  return (
    <div class="hero">
      <Mountains />
      <Starfield />
      <header className="w-full h-screen bg-gradient-to-b from-gray-900 to-gray-700 bg-center bg-no-repeat bg-cover">
        <HeroHeader />
      </header>
    </div>
  );
};

export default Hero;
