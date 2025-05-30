import Hero from "./sections/hero";
import AnimatedCounter from "./components/AnimatedCounter";
import ProjectShowcase from "./sections/ProjectShowcase";
import NavBar from "./components/NavBar";
import LogoSection from "./components/LogoSection";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AnimatedCounter />
      <ProjectShowcase />
      <LogoSection />
    </>
  );
};

export default App;
