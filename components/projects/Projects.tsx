const projects = [
  {
    number: "01",
    title: "AIDIN COMMERCE",
    type: "ECOMMERCE / NEXT.JS",
    description: "A modular storefront focused on performance, structure, and a clean shopping experience.",
  },
  {
    number: "02",
    title: "INTERACTIVE LAB",
    type: "EXPERIMENT / WEBGL",
    description: "An experimental space for motion, interaction, and immersive frontend ideas.",
  },
  {
    number: "03",
    title: "DIGITAL SYSTEM",
    type: "INTERFACE / TYPESCRIPT",
    description: "A precise interface system where typography, hierarchy, and interaction work as one.",
  },
];

export function Projects() {
  return (
    <section className="projects-section" aria-labelledby="projects-title">
      <div className="section-label">
        <span>03 / 06</span>
        <span>SELECTED WORKS</span>
      </div>

      <div className="projects-intro">
        <p className="projects-eyebrow">SELECTED WORKS</p>
        <h2 id="projects-title">
          A few things I&apos;ve <em>built.</em>
        </h2>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-row" key={project.number}>
            <span className="project-number">{project.number}</span>
            <div className="project-main">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <span className="project-type">{project.type}</span>
            <span className="project-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}
