import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    number: "01",
    title: "AIDIN COMMERCE",
    type: "ECOMMERCE / NEXT.JS",
    description: "A modular storefront focused on performance, structure, and a clean shopping experience.",
    preview: "commerce" as const,
  },
  {
    number: "02",
    title: "INTERACTIVE LAB",
    type: "EXPERIMENT / WEBGL",
    description: "An experimental space for motion, interaction, and immersive frontend ideas.",
    preview: "lab" as const,
  },
  {
    number: "03",
    title: "DIGITAL SYSTEM",
    type: "INTERFACE / TYPESCRIPT",
    description: "A precise interface system where typography, hierarchy, and interaction work as one.",
    preview: "system" as const,
  },
];

export function Projects() {
  return (
    <section className={`projects-section ${styles.projectsSection}`} aria-labelledby="projects-title">
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
          <ProjectCard key={project.number} {...project} />
        ))}
      </div>
    </section>
  );
}
