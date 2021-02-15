import LineBreak from "../LineBreak";

const styles = {
  title: "title justify-center",
  h2: "text-5xl tracking-tight font-bold mt-7",
  h3: "text-3xl tracking-tight font-medium pb-7",
  description:
    "description bg-gray-100 opacity-80 py-7 px-10 text-center rounded-sm",
};

const Projects = () => {
  return (
    <div className="projects flex bg-gray-300 w-full h-full pt-20 -mt-20 justify-center">
      <article className="mx-72" id="work">
        <div className={styles.title}>
          <h2 className={styles.h2} id="projects">
            My Work
          </h2>
          <LineBreak />
        </div>
      </article>
    </div>
  );
};

export default Projects;
