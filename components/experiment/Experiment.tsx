import { ThreeField } from "@/components/three/ThreeField";
import styles from "./Experiment.module.css";

export function Experiment() {
  return (
    <section className={styles.experimentSection} aria-labelledby="experiment-title">
      <div className="section-label">
        <span>04 / 06</span>
        <span>EXPERIMENT</span>
      </div>

      <div className={styles.stage}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>INTERACTIVE STUDY / 001</p>
          <h2 id="experiment-title">Code can feel <em>alive.</em></h2>
          <p>
            A real-time Three.js study built around attention. Move your cursor
            and the eyes track it directly, turning a small interaction into a
            visible response.
          </p>
        </div>

        <div className={styles.canvas}>
          <div className={styles.grid} aria-hidden="true" />
          <div className={styles.threeField}>
            <ThreeField />
          </div>
          <span className={styles.coordinate} aria-hidden="true">THREE / WEBGL — TRACKING</span>
        </div>
      </div>
    </section>
  );
}
