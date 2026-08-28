"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "./IntroReveal.module.css";

const PANEL_COUNT = 8;
const panels = Array.from({ length: PANEL_COUNT }, (_, index) => index);

export function IntroReveal() {
  const rootRef = useRef<HTMLElement>(null);
  const panelRefs = useRef<HTMLDivElement[]>([]);
  const [isRevealed, setIsRevealed] = useState(false);

  useLayoutEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      setIsRevealed(true);
      return;
    }

    const context = gsap.context(() => {
      gsap.set(panelRefs.current, { yPercent: 0 });

      const timeline = gsap.timeline({
        delay: 0.5,
        defaults: {
          ease: "power4.inOut",
        },
        onComplete: () => setIsRevealed(true),
      });

      timeline.to(panelRefs.current, {
        yPercent: -105,
        duration: 1.65,
        stagger: 0.12,
      });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <main ref={rootRef} className={styles.intro}>
      <div className={styles.hero} aria-hidden="true" />
      <div
        className={styles.panels}
        aria-hidden="true"
        inert={isRevealed ? true : undefined}
      >
        {panels.map((panel) => (
          <div
            className={styles.panel}
            key={panel}
            ref={(element) => {
              if (element) {
                panelRefs.current[panel] = element;
              }
            }}
          />
        ))}
      </div>
    </main>
  );
}
