// Import your About section component
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Portfolio from "@/components/Portfolio";
import ContactInfo from "@/components/ContactInfo";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-white">
        <Hero />
        <About />
        <section id="experience" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
            <ExperienceTimeline />
          </div>
        </section>
        <Portfolio />
        <section id="contact" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
            <ContactInfo />
          </div>
        </section>
      </main>
    </>
  );
}

