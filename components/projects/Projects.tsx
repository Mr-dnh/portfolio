import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    number: "01",
    title: "VAGARD",
    type: "FRONT-END / BACK-END",
    description: "فروشگاه اینترنتی کاملاً کاربردی؛ خودتان آن را ببینید.",
    link: "https://www.vagard.ir/",
    image:
      "https://image.thum.io/get/width/720/crop/480/noanimate/https://www.vagard.ir/",
  },
  {
    number: "02",
    title: "E-COMMERCE",
    type: "NEXT.JS / ZUSTAND",
    description:
      "یک فروشگاه واکنش‌گرا با تمرکز بر مدیریت مسیرها، تم و زبان و طراحی مؤثر فراخوان به اقدام.",
    link: "https://dn-commerce.vercel.app/",
    image:
      "https://image.thum.io/get/width/720/crop/480/noanimate/https://dn-commerce.vercel.app/",
  },
  {
    number: "03",
    title: "WEATHER APP",
    type: "REACT / API",
    description:
      "یک اپلیکیشن تک‌صفحه‌ای هواشناسی با React برای نمایش اتصال به API و جست‌وجوی داده‌ها.",
    link: "https://dnh-weather.vercel.app/",
    image:
      "https://image.thum.io/get/width/720/crop/480/noanimate/https://dnh-weather.vercel.app/",
  },
  {
    number: "04",
    title: "DIGIKALA TEST",
    type: "SASS / DOM",
    description:
      "بازسازی صفحه اول دیجی‌کالا با منوی پیچیده، اسلایدرها، فهرست‌ها و GIFها.",
    link: "https://dn-digikala.vercel.app/",
    image:
      "https://image.thum.io/get/width/720/crop/480/noanimate/https://dn-digikala.vercel.app/",
  },
] as const;

export function Projects() {
  return (
    <section className={styles.projectsSection} aria-labelledby="projects-title">
      <div className="section-label">
        <span>03 / 06</span>
        <span>کارهای منتخب</span>
      </div>

      <div className={styles.projectsIntro}>
        <p className={styles.eyebrow}>پروژه‌های انجام‌شده</p>
        <h2 id="projects-title">
          تجربه‌های <em>واقعی.</em>
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
