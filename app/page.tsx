import { IntroReveal } from "@/components/intro/IntroReveal";

export default function Home() {
  return (
    <>
      <IntroReveal />

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
      </main>
    </>
  );
}
