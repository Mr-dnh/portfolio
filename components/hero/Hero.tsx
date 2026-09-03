"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;
    if (!section || !glow) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animate = () => {
      if (reduceMotion) {
        gsap.set(section.querySelectorAll("[data-hero-reveal]"), { autoAlpha: 1, y: 0 });
        return;
      }

      const elements = section.querySelectorAll<HTMLElement>("[data-hero-reveal]");
      gsap.set(elements, { autoAlpha: 0, y: 36 });
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .to(elements[0], { autoAlpha: 1, y: 0, duration: 0.8 })
        .to(elements[1], { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.35")
        .to(elements[2], { autoAlpha: 1, y: 0, duration: 1.05 }, "-=0.25")
        .to(elements[3], { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.45")
        .fromTo(section.querySelector(".hero-scroll"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.7 }, "-=0.2");
    };

    const onIntroComplete = () => animate();
    window.addEventListener("portfolio:intro-complete", onIntroComplete);

    const introIsGone = document.querySelector(".intro") === null;
    if (introIsGone) animate();

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
      <div ref={glowRef} className="hero-glow" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-meta hero-meta-top" aria-hidden="true">
        <span data-hero-reveal>PORTFOLIO / 2026</span>
        <span data-hero-reveal>BASED IN AZERBAIJAN</span>
      </div>

      <div className="hero-content">
        <p className="hero-kicker" data-hero-reveal>FRONTEND DEVELOPER</p>
        <h1 id="hero-title" data-hero-reveal>AIDIN DNH</h1>
        <p className="hero-description" data-hero-reveal>
          I build thoughtful digital experiences with code, motion, and a sharp eye for detail.
        </p>
      </div>

      <div className="hero-meta hero-meta-bottom" aria-hidden="true">
        <span data-hero-reveal>01 / 06</span>
        <span className="hero-scroll">SCROLL <span>↓</span></span>
      </div>
    </section>
  );
}
