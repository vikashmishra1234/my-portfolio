
import ServicesSection from "./components/services/Services";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills";
import Hero from "./components/hero/Hero";
import Contact from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSection />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
