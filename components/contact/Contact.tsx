"use client";

import { useRef } from "react";
import styles from "./Contact.module.css";

const contacts = [
  { label: "EMAIL", value: "aidin.dnh@gmail.com", href: "mailto:aidin.dnh@gmail.com" },
  { label: "PHONE", value: "+98 99 666 99 608", href: "tel:+989966699608" },
  { label: "GITHUB", value: "github.com/Mr-dnh", href: "https://github.com/Mr-dnh" },
  { label: "TELEGRAM", value: "@Idndnh", href: "https://t.me/Idndnh" },
];

export function Contact() {
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const handlePointerMove = (index: number, event: React.PointerEvent<HTMLAnchorElement>) => {
    const link = linkRefs.current[index];
    if (!link) return;

    const rect = link.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    const distance = Math.hypot(x, y);
    const proximity = Math.max(0, 1 - distance / Math.max(rect.width, rect.height));
    const rotateX = (-y / (rect.height / 2)) * 7 * proximity;
    const rotateY = (x / (rect.width / 2)) * 7 * proximity;
    const angle = (Math.atan2(y, x) * 180) / Math.PI;
    const rotateZ = angle * 0.045 * proximity;

    link.style.setProperty("--contact-x", `${x * 0.08 * proximity}px`);
    link.style.setProperty("--contact-y", `${y * 0.08 * proximity}px`);
    link.style.setProperty("--contact-rx", `${rotateX}deg`);
    link.style.setProperty("--contact-ry", `${rotateY}deg`);
    link.style.setProperty("--contact-rz", `${rotateZ}deg`);
  };

  const resetLink = (index: number) => {
    const link = linkRefs.current[index];
    if (!link) return;
    link.style.setProperty("--contact-x", "0px");
    link.style.setProperty("--contact-y", "0px");
    link.style.setProperty("--contact-rx", "0deg");
    link.style.setProperty("--contact-ry", "0deg");
    link.style.setProperty("--contact-rz", "0deg");
  };

  return (
    <section className={styles.contactSection} aria-labelledby="contact-title">
      <div className="section-label">
        <span>05 / 06</span>
        <span>CONTACT</span>
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>LET&apos;S CONNECT</p>
        <h2 id="contact-title">
          Find me <em>here.</em>
        </h2>
      </div>

      <div className={styles.grid} aria-label="Contact details">
        {contacts.map((contact, index) => (
          <a
            key={contact.label}
            ref={(element) => {
              linkRefs.current[index] = element;
            }}
            href={contact.href}
            className={styles.link}
            onPointerMove={(event) => handlePointerMove(index, event)}
            onPointerLeave={() => resetLink(index)}
          >
            <span>{contact.label}</span>
            <strong>{contact.value}</strong>
            <span className={styles.arrow} aria-hidden="true">↗</span>
          </a>
        ))}
      </div>

      <div className={styles.note}>
        <span>EMAIL / PHONE / GITHUB / TELEGRAM</span>
        <span>BASED IN RASHT</span>
      </div>
    </section>
  );
}
