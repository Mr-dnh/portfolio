"use client";

import { useRef, type PointerEvent } from "react";

interface ProjectCardProps {
  number: string;
  title: string;
  type: string;
  description: string;
}

export function ProjectCard({ number, title, type, description }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card || event.pointerType === "touch") return;

    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    card.style.setProperty("--mouse-x", `${x}`);
    card.style.setProperty("--mouse-y", `${y}`);
  };

  const resetPointer = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--mouse-x", "0");
    card.style.setProperty("--mouse-y", "0");
  };

  return (
    <article
      ref={cardRef}
      className="project-row"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <span className="project-number">{number}</span>
      <div className="project-main">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <span className="project-type">{type}</span>
      <span className="project-arrow" aria-hidden="true">↗</span>
    </article>
  );
}
