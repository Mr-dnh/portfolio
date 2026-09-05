import styles from "./End.module.css";

const stack = [
  {
    name: "Next.js / React",
    reason: "A fast, component-based foundation with App Router and server-first rendering."
  },
  {
    name: "TypeScript",
    reason: "Keeps the project predictable, maintainable, and safer to evolve."
  },
  {
    name: "GSAP / CSS",
    reason: "Handles the motion and micro-interactions without turning the UI into a heavy animation layer."
  },
  {
    name: "Vercel / SEO",
    reason: "Simple deployment plus metadata, Open Graph, sitemap, robots, and structured data for discoverability."
  }
];

export function End() {
  return (
    <section className={styles.endSection} aria-labelledby="end-title">
      <div className="section-label">
        <span>06 / 06</span>
        <span>END / BEGIN</span>
      </div>

      <div className={styles.stage}>
        <div className={styles.heading}>
          <p className={styles.index}>THIS PROJECT / THE STACK</p>
          <h2 id="end-title">
            Built with <em>intent.</em>
          </h2>
        </div>

        <div className={styles.stack}>
          {stack.map((item) => (
            <div className={styles.stackItem} key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.reason}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <span>AIDIN DNH / FRONTEND DEVELOPER</span>
        <span>© 2026</span>
      </div>
    </section>
  );
}
