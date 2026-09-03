import { IntroReveal } from "@/components/intro/IntroReveal";
import { ScrollReveal } from "@/components/scroll/ScrollReveal";
import { About } from "@/components/about/About";
import { Projects } from "@/components/projects/Projects";
import { Experiment } from "@/components/experiment/Experiment";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <IntroReveal />
      <ScrollReveal />

      <main className="portfolio-shell">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-meta hero-meta-top" aria-hidden="true">
            <span>PORTFOLIO / 2026</span>
            <span>BASED IN AZERBAIJAN</span>
          </div>

          <div className="hero-content">
            <p className="hero-kicker">FRONTEND DEVELOPER</p>
            <h1 id="hero-title">AIDIN DNH</h1>
            <p className="hero-description">
              I build thoughtful digital experiences with code, motion, and a
              sharp eye for detail.
            </p>
          </div>

          <div className="hero-meta hero-meta-bottom" aria-hidden="true">
            <span>01 / 06</span>
            <span className="hero-scroll">SCROLL <span>↓</span></span>
          </div>
        </section>

        <About />
        <Projects />
        <Experiment />
        <Contact />
      </main>
    </>
  );
}
