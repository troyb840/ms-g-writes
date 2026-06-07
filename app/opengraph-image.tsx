import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MsGwrites — Stories That Point Little Hearts to Jesus";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FDF6EE",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        {/* Warm background panel */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, #FDF6EE 0%, #F5E6D8 50%, #FDF6EE 100%)",
          }}
        />

        {/* Decorative corner accents */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 60,
            width: 80,
            height: 80,
            borderTop: "3px solid #D99985",
            borderLeft: "3px solid #D99985",
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 60,
            width: 80,
            height: 80,
            borderBottom: "3px solid #D99985",
            borderRight: "3px solid #D99985",
            opacity: 0.4,
          }}
        />

        {/* Heart accents */}
        {["top: 60px; right: 120px", "bottom: 80px; left: 100px"].map(
          (pos, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                fontSize: i === 0 ? 36 : 28,
                color: "#D99985",
                opacity: 0.35,
                ...(i === 0
                  ? { top: 60, right: 120 }
                  : { bottom: 80, left: 100 }),
              }}
            >
              ♥
            </div>
          )
        )}

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            position: "relative",
            zIndex: 1,
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: "#6B703C",
              fontSize: 16,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            <span style={{ color: "#D99985" }}>♥</span>
            MsGwrites.com
            <span style={{ color: "#D99985" }}>♥</span>
          </div>

          {/* Script name */}
          <div
            style={{
              fontSize: 96,
              color: "#D99985",
              lineHeight: 1,
              fontStyle: "italic",
            }}
          >
            Ms. G
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              color: "#5A3A33",
              fontWeight: 400,
              maxWidth: 700,
              lineHeight: 1.4,
            }}
          >
            Stories That Point Little Hearts to Jesus
          </div>

          {/* Sub-tagline */}
          <div
            style={{
              fontSize: 18,
              color: "#5A3A33",
              opacity: 0.6,
              marginTop: 4,
            }}
          >
            Author · Speaker · Kingdom Builder
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "#D99985",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
