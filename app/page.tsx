import AboutSection from "./components/AboutSection";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SkillSection from "./components/SkillSection";

export default function Home() {
  return (
    <div>
      <main className='space-y-20 px-2 md:px-8 lg:px-20 py-4'>
        <NavBar />
        <HeroSection />
        <AboutSection />
        <Projects />
        <SkillSection />
      </main>
      <Contact />
    </div>
  );
}
