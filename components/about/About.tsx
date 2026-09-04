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
        <span>ABOUT</span>
      </div>

      <div className={styles.aboutGrid}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>FRONT-END DEVELOPER</p>
          <h2 id="about-title">
            Clean interfaces, <em>real projects.</em>
          </h2>
        </div>

        <div className={styles.copy}>
          <p>
            My work centers on responsive interfaces, component structure,
            APIs, state management, and modern React and Next.js development.
          </p>
          <p>
            I also enjoy bringing interfaces to life with interactive code —
            from cursor-driven motion and animated transitions to reactive
            visual experiences that respond to the user.
          </p>

          <div className={styles.stack} aria-label="Skills and knowledge">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <span>FRONT-END / REACT / NEXT.JS</span>
        <span>MOBILE-FIRST / RESPONSIVE</span>
      </div>
    </section>
  );
}
