"use client";

import { useRef } from "react";

export function Contact() {
  const ctaRef = useRef<HTMLAnchorElement>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    const cta = ctaRef.current;
    if (!cta || event.pointerType === "touch") return;

    const rect = cta.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.12;

    cta.style.setProperty("--cta-x", `${x}px`);
    cta.style.setProperty("--cta-y", `${y}px`);
  };

  const resetPointer = () => {
    const cta = ctaRef.current;
    if (!cta) return;
    cta.style.setProperty("--cta-x", "0px");
    cta.style.setProperty("--cta-y", "0px");
  };

  return (
    <section className="contact-section" aria-labelledby="contact-title">
      <div className="section-label">
        <span>05 / 06</span>
        <span>CONTACT</span>
      </div>

      <div className="contact-content">
        <p className="contact-eyebrow">HAVE A PROJECT IN MIND?</p>
        <h2 id="contact-title">
          Let&apos;s build something <em>worth remembering.</em>
        </h2>

        <a
          ref={ctaRef}
          className="contact-cta"
          href="mailto:hello@aidindnh.dev"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
        >
          <span>GET IN TOUCH</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="contact-note">
        <span>OPEN TO SELECT PROJECTS</span>
        <span>REMOTE / WORLDWIDE</span>
      </div>
    </section>
  );
}
