import LineBreak from "../LineBreak";
// import aboutBackground from "../../assets/imgs/about-bg.jpg";

const styles = {
  h2: "text-5xl tracking-tight font-bold",
  h3: "text-3xl tracking-tight font-medium pb-7",
  description: "description pb-2 px-5 text-center",
  column: "column text-center flex-shrink",
  paragraph: "text-lg text-left pb-6 leading-7 text-gray-600",
  columnP: "text-lg text-left pb-6 leading-7 text-gray-600",
};

const About = () => {
  return (
    <div
      className="about flex bg-gray-100 w-full h-full mt-96 pt-80 items-center"
    //   style={{
    //     backgroundImage: `url(${aboutBackground})`,
    //     backgroundRepeat: "no-repeat",
    //   }}
    >
      <article className="mx-96">
        <div className="title">
          <h2 className={styles.h2}>My name is Robert</h2>
          <LineBreak />
        </div>
        <div className={styles.description}>
          <h3 className={styles.h3}>
            I am a web developer and UI/UX designer based in Irvine, CA.
          </h3>
          <p className={styles.paragraph}>
            I love building cool things and designing intuitive user interfaces.
            I am curious about many things and have spent time working in
            politics, non-profits, live theatre, graphic design and the aquarium
            industry. Now I spend my time reading about cookies and Reacting to
            things.
          </p>
        </div>
        <div className="title">
          <h2 className={styles.h2}>What do I do?</h2>
          <LineBreak />
        </div>
        <div className="skills flex flex-wrap">
          <div className={styles.column}>
            <h3 className={styles.h3}>I'm a full stack developer</h3>
            <p className={styles.columnP}>
              I am a full stack web developer, able to tackle projects from
              start to finish.
            </p>
          </div>
          <div className={styles.column}>
            <h3 className={styles.h3}>I'm a designer</h3>
            <p className={styles.columnP}>
              I love to create elegant designs that create meaningful, intuitive
              user interactions.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default About;
