import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <TechStack />
      <AboutMe />
      <Footer />
    </>
  );
};

export default Home;
