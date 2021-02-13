const About = () => {
  return (
    <div className="about flex bg-gray-100 w-full h-full">
      <div className="wrapper">
        <article>
          <div className="title">
            <h2>My name is Robert</h2>
            <span className="line-break bg-pink-500 w-50 h-1 m-1"></span>
          </div>
          <div className="description">
            <h3 className="font-bold text-lg">
              I am a web developer and UI/UX designer based in Irvine, CA.
            </h3>
            <p className="">
              I love building cool things and designing intuitive user
              interfaces. I am curious about many things and have spent time
              working in politics, non-profits, live theatre, graphic design and
              the aquarium industry. Now I spend my time reading about cookies
              and Reacting to things.
            </p>
          </div>
          <div className="title">
            <h2>What do I do?</h2>
            <span className="line-break bg-pink-500 w-50 h-1 m-1"></span>
          </div>
          <div className="skills">
            <div className="description">
              <h2>Programming</h2>
              <p>
                I am a full stack web developer, able to tackle projects from
                start to finish.
              </p>
            </div>
            <div className="description">
              <h2>Designing</h2>
              <p>
                I love to create elegant designs that create meaningful,
                intuitive user interactions.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default About;
