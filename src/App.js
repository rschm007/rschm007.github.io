import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Nav from "./components/Nav";
import Spacer from "./components/Spacer";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="hero mx-auto overflow-y-auto">
        <Hero />
      </div>
      <section>
        {/* <Spacer styles="mt-40 h-24" /> */}
        <About />
      </section>
    </div>
  );
}

export default App;
