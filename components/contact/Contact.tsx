"use client";

import { useRef } from "react";

const contacts = [
  { label: "EMAIL", value: "aidin.dnh@gmail.com", href: "mailto:aidin.dnh@gmail.com" },
  { label: "PHONE", value: "+98 99 666 99 608", href: "tel:+989966699608" },
  { label: "GITHUB", value: "github.com/Mr-dnh", href: "https://github.com/Mr-dnh" },
  { label: "TELEGRAM", value: "@Idndnh", href: "https://t.me/Idndnh" },
];

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
        <p className="contact-eyebrow">LET&apos;S CONNECT</p>
        <h2 id="contact-title">
          Find me <em>here.</em>
        </h2>

        <a
          ref={ctaRef}
          className="contact-cta"
          href="mailto:aidin.dnh@gmail.com"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
        >
          <span>aidin.dnh@gmail.com</span>
          <span aria-hidden="true">↗</span>
        </a>

        <div className="contact-grid" aria-label="Contact details">
          {contacts.map((contact) => (
            <a key={contact.label} href={contact.href} className="contact-link">
              <span>{contact.label}</span>
              <strong>{contact.value}</strong>
            </a>
          ))}
        </div>
      </div>

      <div className="contact-note">
        <span>EMAIL / PHONE / GITHUB / TELEGRAM</span>
        <span>BASED IN AZERBAIJAN</span>
      </div>
    </section>
  );
}
