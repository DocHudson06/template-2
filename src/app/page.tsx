// Import your About section component
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-white">
        <Hero />
        <About />
        <ExperienceTimeline />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

