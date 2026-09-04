import styles from "./End.module.css";

export function End() {
  return (
    <section className={styles.endSection} aria-labelledby="end-title">
      <div className="section-label">
        <span>06 / 06</span>
        <span>END / BEGIN</span>
      </div>

      <div className={styles.stage}>
        <p className={styles.index}>THANKS FOR SCROLLING</p>
        <h2 id="end-title">
          Until the next <em>build.</em>
        </h2>
        <div className={styles.mark} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className={styles.footer}>
        <span>AIDIN DNH / FRONTEND DEVELOPER</span>
        <span>© 2026</span>
      </div>
    </section>
  );
}
