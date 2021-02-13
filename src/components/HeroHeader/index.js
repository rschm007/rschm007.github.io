const HeroHeader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="heroHeader mx-4 w-1/2 text-left">
        <h1>
          <span className="-mt-5 ml-7 block text-gray-100 font-normal italic text-6xl mb-4">
            I am a{" "}
          </span>
          <span className="-mt-5 block text-gray-100 font-medium italic text-6xl mb-4">
            full stack developer
          </span>
          <div className="-mt-5 block text-center mr-32">
            <span className="text-pink-500 font-medium italic text-6xl mb-4">
              {" "}
              &{" "}
            </span>
            <span className="text-gray-100 font-medium italic text-6xl mb-4">
              designer
            </span>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default HeroHeader;
