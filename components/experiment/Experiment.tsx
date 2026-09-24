import { ThreeField } from "@/components/three/ThreeField";
import styles from "./Experiment.module.css";

export function Experiment() {
  return (
    <section className={styles.experimentSection} aria-labelledby="experiment-title">
      <div className="section-label">
        <span>04 / 06</span>
        <span>آزمایش</span>
      </div>

      <div className={styles.stage}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>مطالعه تعاملی / ۰۰۱</p>
          <h2 id="experiment-title">کد می‌تواند <em>زنده باشد.</em></h2>
          <p>
            یک مطالعه بلادرنگ با Three.js که بر تعامل تمرکز دارد. نشانگر را حرکت دهید تا چشم‌ها
            مستقیماً آن را دنبال کنند و یک تعامل کوچک به پاسخی قابل مشاهده تبدیل شود.
          </p>
        </div>

        <div className={styles.canvas}>
          <div className={styles.grid} aria-hidden="true" />
          <ThreeField />
          <span className={styles.coordinate} aria-hidden="true">THREE / WEBGL — ردیابی</span>
        </div>
      </div>
    </section>
  );
}
