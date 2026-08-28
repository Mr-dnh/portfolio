"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const COLUMNS = 8;

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  const curtain = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const columns = gsap.utils.toArray<HTMLElement>(".reveal-column");

    gsap.set(columns, { yPercent: 0 });
    gsap.set(".portfolio-image", { scale: 1.06, opacity: 1 });

    gsap.to(columns, {
      yPercent: -100,
      duration: 1.25,
      stagger: 0.1,
      delay: 0.5,
      ease: "power4.inOut",
      onComplete: () => {
        gsap.set(curtain.current, { display: "none" });
      },
    });

    gsap.to(".portfolio-image", {
      scale: 1,
      duration: 1.8,
      delay: 0.55,
      ease: "power3.out",
    });
  }, { scope: root });

  return (
    <main ref={root} className="portfolio-shell">
      <section className="hero">
        <div className="image-wrap">
          <div
            className="portfolio-image"
            role="img"
            aria-label="Portfolio hero placeholder"
          />
        </div>

        <div ref={curtain} className="reveal-curtain" aria-hidden="true">
          {Array.from({ length: COLUMNS }, (_, index) => (
            <div className="reveal-column" key={index} />
          ))}
        </div>

        <div className="hero-content">
          <p className="eyebrow">Frontend Developer</p>
          <h1>Aidin</h1>
          <p className="hero-note">Digital experiences, built with intention.</p>
        </div>
      </section>
    </main>
  );
}
