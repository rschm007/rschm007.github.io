import CTAbutton from "../CTAbutton";

const HeroHeader = () => {
  return (
    <div
      id="header"
      className="w-full h-full flex justify-center items-center"
    >
      <div className="heroHeader content-center mr-52 mt-80 w-1/2 text-left z-30 relative">
        <h1>
        <span className="-mt-5 ml-36 block text-gray-100 font-light italic text-4xl">
            I am{" "}
          </span>
          <span className="-mt-3 ml-14 block text-yellow-50 font-light italic text-5xl mb-4">
            robert<strong className="font-medium">schmahl</strong>{" "}
          </span>
          <span className="-mt-6 block text-gray-100 font-normal italic text-8xl mb-6 tracking-tight">
            developer
          </span>
          <div className="-mt-20 block text-center designer">
            <span className="text-pink-500 font-light italic text-8xl mb-4">
              {" "}
              &
            </span>
            <span className="text-gray-100 font-normal italic text-8xl mb-4 tracking-tight">
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
