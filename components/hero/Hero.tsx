"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Hero.module.css";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;
    if (!section || !glow) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let started = false;

    const animate = () => {
      if (started) return;
      started = true;
      const elements = section.querySelectorAll<HTMLElement>("[data-hero-reveal]");

      if (reduceMotion) {
        gsap.set(elements, { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.set(elements, { autoAlpha: 0, y: 36 });
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .to(elements[0], { autoAlpha: 1, y: 0, duration: 0.7 })
        .to(elements[1], { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.45")
        .to(elements[2], { autoAlpha: 1, y: 0, duration: 1 }, "-=0.35")
        .to(elements[3], { autoAlpha: 1, y: 0, duration: 0.75 }, "-=0.45")
        .to(section.querySelector(".hero-scroll"), { autoAlpha: 1, duration: 0.65 }, "-=0.2");
    };

    const onIntroComplete = () => animate();
    window.addEventListener("portfolio:intro-complete", onIntroComplete);
    if (!document.querySelector(".intro")) animate();

    let frame = 0;
    const move = (event: PointerEvent) => {
      if (reduceMotion) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 18;
        const y = (event.clientY / window.innerHeight - 0.5) * 18;
        glow.style.setProperty("--hero-x", `${x}px`);
        glow.style.setProperty("--hero-y", `${y}px`);
      });
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.removeEventListener("portfolio:intro-complete", onIntroComplete);
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} className="hero-section" aria-labelledby="hero-title">
      <div ref={glowRef} className={styles.glow} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.meta} aria-hidden="true">
        <span data-hero-reveal>PORTFOLIO / 2026</span>
        <span data-hero-reveal>BASED IN RASHT</span>
      </div>

      <div className={styles.content}>
        <p className={styles.kicker} data-hero-reveal>FRONT-END DEVELOPER</p>
        <h1 id="hero-title" className={styles.title} data-hero-reveal>AIDIN DNH</h1>
        <p className={styles.description}>
          A growing front-end developer focused on clean layouts, modern colors,
          precise design implementation, and learning through real projects.
        </p>
      </div>

      <div className={styles.meta} aria-hidden="true">
        <span>01 / 06</span>
        <span className={`${styles.scroll} hero-scroll`}>
          SCROLL <span className={styles.scrollIcon}>↓</span>
        </span>
      </div>
    </section>
  );
}
