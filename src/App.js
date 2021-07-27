import "./App.scss";
import Hero from "./components/Hero";
import About from "./components/About";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App flex-col">
      {/*<Nav />*/}
      <section className="hero">
        <Hero />
        </section>
        <section className="about">
        <About />
      </section>
      {/*<section id="projects">*/}
      {/*  <Projects />*/}
      {/*</section>*/}
      {/*<section id="contact">*/}
      {/*  <Contact />*/}
      {/*</section>*/}
    {/*  <Footer />*/}
    </div>
  );
}

export default App;
