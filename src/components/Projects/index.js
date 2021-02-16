import LineBreak from "../LineBreak";
import ProjectCard from "../ProjectCards";

const styles = {
  title: "title justify-center",
  h2: "text-5xl tracking-tight font-bold mt-7",
  h3: "text-3xl tracking-tight font-medium pb-7",
  paragraph: "text-lg pb-6 leading-7 text-black",
  description:
    "description bg-gray-100 opacity-80 py-7 px-10 text-center rounded-sm",
};

const Projects = () => {
  return (
    <div className="projects flex bg-gray-300 w-full h-full pt-20 -mt-28 px-80 justify-center">
      <article className="mx-32 w-full" id="work">
        <div className={styles.title}>
          <h2 className={styles.h2} id="projects">
            My Work
          </h2>
          <LineBreak />
        </div>
        <ProjectCard
            classTitle="babelbox"
            href="http://babelbox.herokuapp.com/"
            src="https://github.com/rschm007/Portfolio_v3/blob/main/src/assets/imgs/Babelbox.png?raw=true"
            icons=""
            title="BABELbox"
            // icons={`fab fa-html5`}
            tools="Built using Node, Express, Tailwindcss, Handlebars, MySQL, and Heroku."
            summary="BABELbox is a collection of fun games that the BABEL team is actively cultivating. This is a full stack application that follows the MVC paradigm in its architectural structure."
            repoHref="https://github.com/https-github-com-steversonTong/BabelBox"
         />
      </article>
    </div>
  );
};

export default Projects;
