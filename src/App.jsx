import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section id="home">
        <Hero />
        </section>
        <section id="about">
        <About />
        </section>
        <section id="skills">
        <Skills />
        </section>
        <section id="projects">
        <Projects />
        </section>
        <section id="career">
          <Career />
        </section>
        <section id="tools">
        <Tools />
        </section>
        <section id="contact">
        <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
