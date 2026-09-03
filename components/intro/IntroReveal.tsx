"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./IntroReveal.module.css";

const PANEL_COUNT = 8;
const panels = Array.from({ length: PANEL_COUNT }, (_, index) => index);

export function IntroReveal() {
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      gsap.set(root, { autoAlpha: 0 });
      return;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        delay: 0.5,
        defaults: { ease: "power4.inOut" },
      });

      timeline
        .to(panelRefs.current, {
          yPercent: -105,
          duration: 1.6,
          stagger: 0.11,
        })
        .set(root, { autoAlpha: 0 });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <div ref={rootRef} className={styles.intro} aria-hidden="true">
      <div className={styles.hero} />
      <div className={styles.panels}>
        {panels.map((panel) => (
          <div
            className={styles.panel}
            key={panel}
            ref={(element) => {
              if (element) panelRefs.current[panel] = element;
            }}
          />
        ))}
      </div>
    </div>
  );
}
