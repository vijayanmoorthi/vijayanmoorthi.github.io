
import Intro from './components/Intro/Intro.jsx';
import AnimatedSection from "./components/Features/AnimatedSection.jsx";
import About from './components/About/About.jsx';
import Experience from './components/Experience/Experience.jsx';
import Skills from './components/Skills/Skills.jsx';
import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Features/Navbar/Navbar.jsx';
import TalkButton from './components/Features/TalkButton/TalkButton.jsx'

import './App.css';

export default function App() {
  return (
    <>

      <Navbar />

      <main>
        <Intro />

        <AnimatedSection id="about">
          <About />
        </AnimatedSection>

        <AnimatedSection id="experience">
          <Experience />
        </AnimatedSection>

        <AnimatedSection id="skills">
          <Skills />
        </AnimatedSection>

        <AnimatedSection id="footer">
          <Footer />
        </AnimatedSection>
      </main>

      <TalkButton />
    </>


  );
}
