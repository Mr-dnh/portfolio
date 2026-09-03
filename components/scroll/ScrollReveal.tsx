"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollReveal() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".portfolio-shell > section:not(.hero-section)");

      sections.forEach((section) => {
        const label = section.querySelector<HTMLElement>(".section-label");
        const content = section.querySelectorAll<HTMLElement>(
          ".about-heading-wrap, .about-copy, .projects-intro, .project-row, .experiment-copy, .experiment-canvas, .contact-content, .contact-note"
        );

        gsap.set([label, ...content].filter(Boolean), {
          autoAlpha: 0,
          y: 40,
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            once: true,
          },
        });

        if (label) {
          timeline.to(label, {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          });
        }

        if (content.length) {
          timeline.to(content, {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.09,
            ease: "power3.out",
          }, "-=0.35");
        }
      });
    }, root);

    return () => context.revert();
  }, []);

  return <div ref={rootRef} aria-hidden="true" />;
}
