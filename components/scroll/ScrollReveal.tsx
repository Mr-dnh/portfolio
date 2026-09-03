"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollReveal() {
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray<HTMLElement>(
      ".portfolio-shell > section:not(.hero-section)"
    );
    const contexts: gsap.Context[] = [];

    sections.forEach((section) => {
      const label = section.querySelector<HTMLElement>(".section-label");
      const content = Array.from(
        section.querySelectorAll<HTMLElement>(
          ".about-heading-wrap, .about-copy, .projects-intro, .project-row, .experiment-copy, .experiment-canvas, .contact-content, .contact-note, .end-stage, .end-footer"
        )
      );
      const targets = [label, ...content].filter(
        (element): element is HTMLElement => Boolean(element)
      );

      if (!targets.length) return;

      const context = gsap.context(() => {
        gsap.set(targets, { autoAlpha: 0, y: 48 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        });

        if (label) {
          timeline.to(label, {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
          });
        }

        if (content.length) {
          timeline.to(
            content,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.08,
              ease: "power3.out",
            },
            "-=0.3"
          );
        }
      }, section);

      contexts.push(context);
    });

    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);

    return () => {
      contexts.forEach((context) => context.revert());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
