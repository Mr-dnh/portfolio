import { IntroReveal } from "@/components/intro/IntroReveal";
import { ScrollReveal } from "@/components/scroll/ScrollReveal";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Projects } from "@/components/projects/Projects";
import { Experiment } from "@/components/experiment/Experiment";
import { Contact } from "@/components/contact/Contact";
import { End } from "@/components/end/End";

export default function Home() {
  return (
    <>
      <IntroReveal />
      <ScrollReveal />

      <main className="portfolio-shell">
        <Hero />
        <About />
        <Projects />
        <Experiment />
        <Contact />
        <End />
      </main>
    </>
  );
}
