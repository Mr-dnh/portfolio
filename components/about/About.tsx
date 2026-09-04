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
    <section className="about-section" aria-labelledby="about-title">
      <div className="section-label">
        <span>02 / 06</span>
        <span>ABOUT</span>
      </div>

      <div className="about-grid">
        <div className="about-heading-wrap">
          <p className="about-eyebrow">FRONT-END DEVELOPER</p>
          <h2 id="about-title">
            Clean interfaces, <em>real projects.</em>
          </h2>
        </div>

        <div className="about-copy">
          <p>
            I&apos;m a growing front-end developer focused on clean layouts,
            modern colors, precise design implementation, and learning through
            real projects.
          </p>
          <p>
            My work centers on responsive interfaces, component structure,
            APIs, state management, and modern React and Next.js development.
          </p>

          <div className="about-stack" aria-label="Skills and knowledge">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="about-footer">
        <span>FRONT-END / REACT / NEXT.JS</span>
        <span>MOBILE-FIRST / RESPONSIVE</span>
      </div>
    </section>
  );
}
