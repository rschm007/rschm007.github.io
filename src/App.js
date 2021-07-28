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
      <section className="hero">
            <Hero />
      </section>
    </div>
  );
}   

export default App;
