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
    const completeIntro = () => {
      root.dataset.introComplete = "true";
      window.dispatchEvent(new CustomEvent("portfolio:intro-complete"));
    };

    if (reduceMotion) {
      gsap.set(root, { autoAlpha: 0 });
      completeIntro();
      return;
    }

    const context = gsap.context(() => {
      gsap.set(panelRefs.current, { yPercent: 0 });

      gsap.timeline({ delay: 0.35, defaults: { ease: "power3.inOut" } })
        .to(panelRefs.current, {
          yPercent: -105,
          duration: 1.45,
          stagger: 0.1,
        })
        .call(completeIntro)
        .set(root, { autoAlpha: 0 });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <div ref={rootRef} className={styles.intro} data-intro-reveal aria-hidden="true">
      <div className={styles.panels}>
        {panels.map((panel) => (
          <div
            className={styles.panel}
            key={panel}
            ref={(element) => {
              if (element) panelRefs.current[panel] = element;
            }}
          >
            <span />
          </div>
        ))}
      </div>
    </div>
  );
}
