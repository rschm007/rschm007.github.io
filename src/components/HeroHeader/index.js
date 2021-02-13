// const styles = {
//   spanStyles: "text-gray-100 font-semibold italic text-4xl mb-4",
//   colorSpan: "text-pink-500 font-semibold italic text-4xl mb-4"
// };

const HeroHeader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="heroheader mx-4 text-center w-1/5">
        <h1>
          <span className="text-gray-100 font-semibold italic text-4xl mb-4 order-1">I am a </span>
          <span className="text-gray-100 font-semibold italic text-4xl mb-4 order-2">full stack developer</span>
          <span className="text-pink-500 font-semibold italic text-4xl mb-4 order-3"> & </span>
          <span className="text-gray-100 font-semibold italic text-4xl mb-4 order-4">designer</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroHeader;
