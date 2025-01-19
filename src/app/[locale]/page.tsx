import ExperienceSection from "../../components/ExperienceSection/ExperienceSection";
import Footer from "../../components/FooterSection/FooterSection";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import StackSection from "../../components/StackSection/StackSection";

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