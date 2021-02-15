import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="hero mx-auto overflow-y-auto">
        <Hero />
      </div>
      <section>
        <About />
      </section>
      <section>
        <Projects />
      </section>
    </div>
  );
}

export default App;
