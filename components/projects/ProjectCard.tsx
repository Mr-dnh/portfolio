"use client";

import { useRef, type PointerEvent } from "react";
import styles from "./Projects.module.css";

interface ProjectCardProps {
  number: string;
  title: string;
  type: string;
  description: string;
  link: string;
  image: string;
}

export function ProjectCard({ number, title, type, description, link, image }: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card || event.pointerType === "touch") return;

    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 48;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 20;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const resetPointer = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--mouse-x", "0px");
    card.style.setProperty("--mouse-y", "0px");
  };

  return (
    <a
      ref={cardRef}
      className={styles.projectRow}
      href={link}
      target="_blank"
      rel="noreferrer"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      aria-label={`View ${title}`}
    >
      <span className={styles.projectNumber}>{number}</span>

      <div className={styles.projectMain}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className={styles.projectPreview} aria-hidden="true">
        <img src={image} alt="" loading="lazy" />
      </div>

      <span className={styles.projectType}>{type}</span>
      <span className={styles.projectArrow} aria-hidden="true">↗</span>
    </a>
  );
}
