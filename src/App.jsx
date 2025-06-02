import Hero from "./sections/Hero";
import AnimatedCounter from "./components/AnimatedCounter";
import ProjectShowcase from "./sections/ProjectShowcase";
import NavBar from "./components/NavBar";
import LogoSection from "./sections/LogoSection";
import FeatureSection from "./sections/FeatureSection";
import ExperienceSection from "./sections/ExperienceSection";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AnimatedCounter />
      <ProjectShowcase />
      <LogoSection />
      <FeatureSection />
      <ExperienceSection />
    </>
  );
};

export default App;
