import { ImageResponse } from "next/og";

export const alt = "Aidin DNH — Front-End Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "#050505",
          color: "#f5f5f5",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, letterSpacing: "0.16em", color: "#c9b79f" }}>
          <span>PORTFOLIO / 2026</span>
          <span>RASHT</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 28, letterSpacing: "0.22em", color: "#9e9e9e" }}>FRONT-END DEVELOPER</div>
          <div style={{ fontSize: 112, lineHeight: 0.9, fontWeight: 700, letterSpacing: "-0.06em" }}>AIDIN DNH</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#777" }}>
          <span>REACT / NEXT.JS / RESPONSIVE DESIGN</span>
          <span>aidin.dnh@gmail.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
