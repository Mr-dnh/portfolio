import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    number: "01",
    title: "E-COMMERCE",
    type: "NEXT.JS / ZUSTAND",
    description:
      "A responsive commerce website focused on route handling, themes and languages, and strong call-to-action design.",
    link: "https://dn-commerce.vercel.app/",
    image: "https://image.thum.io/get/width/720/crop/480/noanimate/https://dn-commerce.vercel.app/",
  },
  {
    number: "02",
    title: "WEATHER APP",
    type: "REACT / API",
    description:
      "A one-page React weather app demonstrating API connections and search queries.",
    link: "https://dnh-weather.vercel.app/",
    image: "https://image.thum.io/get/width/720/crop/480/noanimate/https://dnh-weather.vercel.app/",
  },
  {
    number: "03",
    title: "DIGIKALA TEST",
    type: "SASS / DOM",
    description:
      "A recreation of Digikala's first page with a complex menu, carousels, lists, and GIFs.",
    link: "https://dn-digikala.vercel.app/",
    image: "https://image.thum.io/get/width/720/crop/480/noanimate/https://dn-digikala.vercel.app/",
  },
  {
    number: "04",
    title: "VAGARD",
    type: "WEBSITE",
    description: "A website project for Vagard.",
    link: "https://www.vagard.ir/",
    image: "https://image.thum.io/get/width/720/crop/480/noanimate/https://www.vagard.ir/",
  },
] as const;

export function Projects() {
  return (
    <section className={styles.projectsSection} aria-labelledby="projects-title">
      <div className="section-label">
        <span>03 / 06</span>
        <span>SELECTED WORKS</span>
      </div>

      <div className={styles.projectsIntro}>
        <p className={styles.eyebrow}>PROJECTS SO FAR</p>
        <h2 id="projects-title">
          Real <em>lessons.</em>
        </h2>
      </div>

      <div className={styles.projectsList}>
        {projects.map((project) => (
          <ProjectCard key={project.number} {...project} />
        ))}
      </div>
    </section>
  );
}
