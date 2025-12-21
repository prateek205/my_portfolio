import "./styles/global.css";
import "./styles/animation.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />

      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      <div className="floating-elements">
        <div className="floating-element element-1">⚛️</div>
        <div className="floating-element element-2">🚀</div>
        <div className="floating-element element-3">💻</div>
        <div className="floating-element element-4">🎨</div>
      </div>
    </div>
  );
};

export default App;
