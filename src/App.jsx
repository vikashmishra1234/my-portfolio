import { Suspense, lazy } from "react";
import Finger from "./components/Finger";
// import ServicesSection from "./components/services/Services";
const ServicesSection = lazy(()=>import('./components/services/Services'))
const Navbar = lazy(() => import("./components/Navbar"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Hero = lazy(() => import("./components/hero/Hero"));
// const Contact = lazy(() => import("./components/Contact"));
const Contact = lazy(() => import("./components/ContactMe"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
      {/* <Finger/> */}
        <Hero />
        <ServicesSection/>
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
