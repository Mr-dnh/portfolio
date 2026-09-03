"use client";

import { useEffect, useRef } from "react";

export function Experiment() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    const move = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 32;
      const y = (event.clientY / window.innerHeight - 0.5) * 32;
      orb.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <section className="experiment-section" aria-labelledby="experiment-title">
      <div className="section-label">
        <span>04 / 06</span>
        <span>EXPERIMENT</span>
      </div>

      <div className="experiment-stage">
        <div className="experiment-copy">
          <p className="experiment-eyebrow">INTERACTIVE STUDY / 001</p>
          <h2 id="experiment-title">Code can feel <em>alive.</em></h2>
          <p>
            A small playground for interaction, depth, and motion. Move your
            cursor through the space and let the field react.
          </p>
        </div>

        <div className="experiment-canvas" aria-hidden="true">
          <div className="experiment-grid" />
          <div ref={orbRef} className="experiment-orb" />
          <div className="experiment-ring experiment-ring-one" />
          <div className="experiment-ring experiment-ring-two" />
          <span className="experiment-coordinate">X / Y — LIVE</span>
        </div>
      </div>
    </section>
  );
}
