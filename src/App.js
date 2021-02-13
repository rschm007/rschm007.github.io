import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Mountains from "./components/Mountains";

function App() {
  return (
    <div className="App">
      <div className="flex-auto mx-auto">
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
