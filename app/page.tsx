import AboutMe from "./components/sections/about-me";
import Contact from "./components/sections/contact";
import Experience from "./components/sections/expierence";
import FeaturedProjects from "./components/sections/featured-projects";
import Footer from "./components/ui/footer";
import Hero from "./components/sections/hero";
import Navbar from "./components/ui/navbar";
import Stack from "./components/sections/stack";

function Home() {
  return (
    <>
      {/* Dot pattern - bottom decorative, pointer-events-none so it never blocks clicks */}
      <div
        className="fixed bottom-0 left-0 right-0 h-96 pointer-events-none z-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, #888 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, black 0%, transparent 100%)",
        }}
      />
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <FeaturedProjects />
      <Stack />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
