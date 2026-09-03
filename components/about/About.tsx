export function About() {
  return (
    <section className="about-section" aria-labelledby="about-title">
      <div className="section-label">
        <span>02 / 06</span>
        <span>ABOUT</span>
      </div>

      <div className="about-grid">
        <div className="about-heading-wrap">
          <p className="about-eyebrow">A LITTLE CONTEXT</p>
          <h2 id="about-title">
            I turn ideas into <em>digital experiences.</em>
          </h2>
        </div>

        <div className="about-copy">
          <p>
            I&apos;m a frontend developer focused on building interfaces that feel
            considered, responsive, and alive.
          </p>
          <p>
            My approach sits between engineering and design: clean architecture,
            strong typography, purposeful motion, and attention to the details
            people usually overlook.
          </p>

          <div className="about-stack" aria-label="Core skills">
            <span>Next.js</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>GSAP</span>
            <span>Three.js</span>
          </div>
        </div>
      </div>

      <div className="about-footer">
        <span>BASED IN AZERBAIJAN</span>
        <span>AVAILABLE FOR SELECT PROJECTS</span>
      </div>
    </section>
  );
}
