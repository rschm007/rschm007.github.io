import CTAbutton from "../CTAbutton";

const HeroHeader = () => {
  return (
    <div
      id="header"
      className="w-full h-screen flex justify-center items-center shadow-xl"
    >
      <div className="heroHeader mr-40 w-1/2 text-left z-30 relative">
        <h1>
          <span className="-mt-5 ml-9 block text-gray-100 font-normal italic text-5xl mb-4">
            I am a{" "}
          </span>
          <span className="-mt-7 block text-gray-100 font-medium italic text-6xl mb-4">
            full stack developer
          </span>
          <div className="-mt-7 block text-center mr-20">
            <span className="text-pink-500 font-medium italic text-6xl mb-4">
              {" "}
              &{" "}
            </span>
            <span className="text-gray-100 font-medium italic text-6xl mb-4">
              designer
            </span>
          </div>
        </h1>
        <div className="buttons block w-full mt-2">
          <CTAbutton
            href="#work"
            text="My Work"
            styles="mt-5 ml-28 text-center bg-transparent py-4 px-8 text-2xl text-white uppercase font-bold border-2 border-gray-100 hover:border-pink-700 transition duration-200 ease-in-out transform hover:-translate-y-1"
          />
          <CTAbutton
            href="#contact"
            text="Get in touch"
            styles="mt-5 ml-5 text-center bg-pink-500 py-4 px-8 text-2xl text-white uppercase font-bold border-2 border-transparent hover:bg-transparent hover:border-pink-700 transition duration-200 ease-in-out transform hover:-translate-y-1"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
