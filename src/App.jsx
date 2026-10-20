import { useState } from "react";
import { MotionConfig } from "framer-motion";
import IntroLoader from "./components/IntroLoader.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Journey from "./components/Journey.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  // The intro plays once per browser tab. After it ends we remove it.
  const [introDone, setIntroDone] = useState(() => {
    try {
      return sessionStorage.getItem("intro-seen") === "yes";
    } catch {
      return false;
    }
  });

  const finishIntro = () => {
    try {
      sessionStorage.setItem("intro-seen", "yes");
    } catch {
      /* storage can be blocked, that is fine */
    }
    setIntroDone(true);
  };

  return (
    // reducedMotion="user" makes Framer Motion respect the system setting
    <MotionConfig reducedMotion="user">
      {!introDone && <IntroLoader onFinish={finishIntro} />}
      <div className="grain" aria-hidden="true"></div>
      <Navbar />
      <main>
        <Hero ready={introDone} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Journey />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
