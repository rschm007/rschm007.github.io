import LineBreak from "../LineBreak";
import ProjectCard from "./ProjectCards";

const Projects = () => {
  return (
    <div className="projects">
      <article id="work">
        <div>
          <h2 id="projects">
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
          tools="Built using Node, Express, Tailwindcss, Handlebars, MySQL, and Heroku."
          summary="BABELbox is a collection of fun games that the BABEL team is actively cultivating. This is a full stack application that follows the MVC paradigm in its architectural structure."
          repoHref="https://github.com/https-github-com-steversonTong/BabelBox"
        />
        <ProjectCard
          classTitle="babel-recipe-generator"
          href="https://https-github-com-steversontong.github.io/Recipe-Generatorf/"
          src="https://github.com/rschm007/Portfolio_v3/blob/main/src/assets/imgs/webdevo_gif1.gif?raw=true"
          icons=""
          title="BABEL Recipe Generator"
          tools="Built using TailwindCSS, jQuery, and Node."
          summary="A web app that allows users to choose ingredients to generate recipes. Recipes are called from the Edamame API and prioritized based off of how many user-chosen ingredients they contain."
          repoHref="https://github.com/https-github-com-steversonTong/Recipe-Generatorf"
        />
        <ProjectCard
          classTitle="react-employee-directory"
          href="https://rschm007.github.io/Employee_Directory/"
          src="https://github.com/rschm007/Portfolio_v3/blob/main/src/assets/imgs/react_emp_dir.png?raw=true"
          icons=""
          title="React Employee Directory"
          tools="Built using TailwindCSS, Axios, and React."
          summary="A React application that displays an employee directory. The application renders sortable data tables that respond to user input. The user can search terms in the search form, or they can sort columns by ascending or descending order.."
          repoHref="https://github.com/rschm007/Employee_Directory"
        />
        <ProjectCard
          classTitle="pwa-budget-tracker"
          href="https://fathomless-chamber-46101.herokuapp.com/"
          src="https://github.com/rschm007/PWA_BudgetTracker/raw/main/assets/demo_1.gif"
          icons=""
          title="PWA Budget Tracker"
          tools="Built using Node, Express, MongoDB and indexedDB."
          summary="This is a progressive web application that allows users to track their budgets. Users can add expenses and deposits via the dashboard buttons. This app functions offline and online. When the user enters a transaction while offline the transactions are stored in indexedDB and transferred to the MongoDB database when the user comes back online."
          repoHref="https://github.com/rschm007/PWA_BudgetTracker"
        />
        <ProjectCard
          classTitle="mvc-tech-blog"
          href="https://fathomless-reef-78577.herokuapp.com/"
          src="https://github.com/rschm007/Portfolio_v3/blob/main/src/assets/imgs/MVCTechBlog_gif.gif?raw=true"
          icons=""
          title="MVC Tech Blog"
          tools="Built using Bootstrap, Handlebars, Heroku, MySQL, Express and Node."
          summary="A CMS-style blog site similar to a Wordpress site where developers can publish their blog posts and comment on other developer's blog posts as well. The app follows the MVC paradigm in its architectural structure."
          repoHref="https://github.com/rschm007/Tech_Blog"
        />
        <ProjectCard
          classTitle="team-template-generator"
          href="https://rschm007.github.io/Team_Template_Generator/output/team.html"
          src="https://github.com/rschm007/Portfolio_v3/blob/main/src/assets/imgs/webdevo_gif4.gif?raw=true"
          icons=""
          title="Team Template Generator"
          tools="Built using HTML5, CSS3, JavaScript, TailwindCSS, Node and Jest."
          summary="A CLI application that prompts the user for information about the team manager and then the team members. After going through inquirer prompts (and passing the validation tests), the app will create a HTML file that dynamically inserts each team member's information into cards."
          repoHref="https://github.com/rschm007/Team_Template_Generator"
        />
      </article>
    </div>
  );
};

export default Projects;
