import { ImageResponse } from "next/og";

export const alt = "Liftify — Free workout tracker";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0a0a0f 0%, #1a1030 55%, #2a1245 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: "-0.04em",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 96,
              height: 96,
              borderRadius: 24,
              background: "linear-gradient(135deg, #8b5cf6, #d946ef)",
              fontSize: 64,
              fontWeight: 800,
            }}
          >
            L
          </div>
          Liftify
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 48,
            fontWeight: 600,
            lineHeight: 1.15,
            maxWidth: 900,
            background: "linear-gradient(90deg, #a78bfa, #f0abfc)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Lift heavy. Log fast. Watch strength climb.
        </div>
        <div style={{ marginTop: 28, fontSize: 30, color: "#a1a1aa" }}>
          The free workout tracker · liftify.com
        </div>
      </div>
    ),
    { ...size },
  );
}
