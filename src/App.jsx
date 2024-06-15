import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Sociallinks from "./components/Sociallinks";
import Navbar from "./components/navbar";
function App() {
  return (
      <div>
        <Navbar />
        <Home />
        <About />
        <Project />
        <Skills />
        <Contact />
        <Sociallinks />
      </div>
  );
}

export default App
