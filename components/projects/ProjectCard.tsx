"use client";

import { useRef, type PointerEvent } from "react";

interface ProjectCardProps {
  number: string;
  title: string;
  type: string;
  description: string;
  preview: "commerce" | "lab" | "system";
}

export function ProjectCard({ number, title, type, description, preview }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
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
    <article
      ref={cardRef}
      className="project-row"
      data-preview={preview}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <span className="project-number">{number}</span>

      <div className="project-main">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="project-preview" aria-hidden="true">
        <div className="preview-frame">
          {preview === "commerce" && (
            <>
              <div className="preview-nav"><span>AIDIN</span><i /></div>
              <div className="preview-commerce-title">NEW<br />ARRIVALS</div>
              <div className="preview-products"><b /><b /><b /></div>
            </>
          )}
          {preview === "lab" && (
            <>
              <div className="preview-grid" />
              <div className="preview-orb" />
              <div className="preview-ring" />
            </>
          )}
          {preview === "system" && (
            <>
              <div className="preview-system-label">SYSTEM / 03</div>
              <div className="preview-system-title">TYPE<br /><em>01</em></div>
              <div className="preview-lines"><i /><i /><i /><i /></div>
            </>
          )}
        </div>
      </div>

      <span className="project-type">{type}</span>
      <span className="project-arrow" aria-hidden="true">↗</span>
    </article>
  );
}
