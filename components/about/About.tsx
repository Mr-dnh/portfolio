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
        <span>۰۲ / ۰۶</span>
        <span>درباره من</span>
      </div>

      <div className={styles.aboutGrid}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>توسعه‌دهنده فرانت‌اند</p>
          <h2 id="about-title">
            رابط کاربری تمیز، <em>پروژه‌های چشم‌نواز.</em>
          </h2>
        </div>

        <div className={styles.copy}>
          <p>
            تمرکز کار من روی طراحی واکنش‌گرا، مدیریت پروژه، APIها، تحویل به موقع
            و توسعه مدرن با React و Next.js است.
          </p>
          <p>
            بیشتر دوست دارم بین سادگی و خلاقیت، یه تعادل درست پیدا کنم. همیشه هم
            سعی می‌کنم چیزای جدید یاد بگیرم و با تکنولوژی‌های جدید بازی کنم؛
            مخصوصاً وقتی نتیجه‌ش یه تجربه متفاوت و جذاب برای کاربر باشه.
          </p>

          <div className={styles.stack} aria-label="مهارت‌ها و دانش">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <span>موبایل‌محور / واکنش‌گرا</span>
      </div>
    </section>
  );
}
