import styles from "./About.module.css";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Flex & Grid",
  "Tailwind",
  "Responsive Design",
  "MUI",
  "Mobile-First",
  "Git & GitHub",
  "APIs",
  "State Management",
  "SEO",
  "Design Patterns",
  "Design Systems",
];

export function About() {
  return (
    <section className={styles.aboutSection} aria-labelledby="about-title">
      <div className="section-label">
        <span>02 / 06</span>
        <span>درباره من</span>
      </div>

      <div className={styles.aboutGrid}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>توسعه‌دهنده فرانت‌اند</p>
          <h2 id="about-title">
            رابط‌های تمیز، <em>پروژه‌های واقعی.</em>
          </h2>
        </div>

        <div className={styles.copy}>
          <p>
            تمرکز کار من روی رابط‌های واکنش‌گرا، ساختار کامپوننت‌ها، APIها، مدیریت وضعیت
            و توسعه مدرن با React و Next.js است.
          </p>
          <p>
            I also enjoy bringing interfaces to life with interactive code —
            from cursor-driven motion and animated transitions to reactive
            visual experiences that respond to the user.
          </p>

          <div className={styles.stack} aria-label="مهارت‌ها و دانش">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <span>فرانت‌اند / REACT / NEXT.JS</span>
        <span>موبایل‌محور / واکنش‌گرا</span>
      </div>
    </section>
  );
}
