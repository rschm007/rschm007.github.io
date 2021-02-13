import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <div className="flex-auto mx-auto">
      <Nav />
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
