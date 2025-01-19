import ExperienceSection from "../../components/ExperienceSection/ExperienceSection.tsx";
import Footer from "../../components/FooterSection/FooterSection.tsx";
import Hero from "../../components/Hero/Hero.tsx";
import Navbar from "../../components/Navbar/Navbar.tsx";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection.tsx";
import StackSection from "../../components/StackSection/StackSection.tsx";

const Home = () => {
  {/** TODO: Check lazy loading components with next/dynamic */ }
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectsSection />
      <ExperienceSection />
      <StackSection />
      <Footer />
    </>
  );
};

export default Home;