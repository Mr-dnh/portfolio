import { ThreeField } from "@/components/three/ThreeField";
import styles from "./Experiment.module.css";

export function Experiment() {
  return (
    <section className={styles.experimentSection} aria-labelledby="experiment-title">
      <div className="section-label">
        <span>۰۴ / ۰۶</span>
        <span>آزمایش</span>
      </div>

      <div className={styles.stage}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>مطالعه تعاملی / ۰۰۱</p>
          <h2 id="experiment-title">کد می‌تونه <em>زنده باشه.</em></h2>
          <p>
            همه به وبسایت شما خیره می‌شن. 
            خودتون ببینید، هر جا برید چشم‌ها دنبالتون میان!
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
