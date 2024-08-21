import { Suspense, lazy } from "react";

const Navbar = lazy(() => import("./components/Navbar"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Hero = lazy(() => import("./components/hero/Hero"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
