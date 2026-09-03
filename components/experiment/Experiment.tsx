import { ThreeField } from "@/components/three/ThreeField";

export function Experiment() {
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
            A real-time WebGL field built with Three.js. Move through the space
            and the geometry responds with subtle depth and motion.
          </p>
        </div>

        <div className="experiment-canvas">
          <div className="experiment-grid" aria-hidden="true" />
          <ThreeField />
          <span className="experiment-coordinate" aria-hidden="true">THREE / WEBGL — LIVE</span>
        </div>
      </div>
    </section>
  );
}
