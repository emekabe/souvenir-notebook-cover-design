import portraitFront from "@/imports/IMG_2323.JPG.jpeg";
import portraitBack from "@/imports/IMG_2321.JPG.jpeg";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const NAVY = "#1B2B5C";
const GOLD = "#C49328";
const CREAM = "#F7F2E8";
const INK = "#1A1A1A";

// ─── LASU Crest ──────────────────────────────────────────────────────────────
function LasuCrest({ size = 44, onDark = false }: { size?: number; onDark?: boolean }) {
  const c = onDark ? CREAM : NAVY;
  const g = GOLD;
  const h = Math.round(size * 1.22);

  return (
    <svg width={size} height={h} viewBox="0 0 60 73" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Torch flame — sits above shield */}
      <path
        d="M31 13 C28 9 27 5 29 2 C30 5 32 5 33 3 C35 1 36 5 35 8 C34 11 32 13 31 13 Z"
        stroke={g} strokeWidth="0.85" strokeLinejoin="round"
      />
      {/* Torch handle */}
      <rect x="29.5" y="13" width="3" height="5" rx="0.4" stroke={c} strokeWidth="0.75" />

      {/* Shield outline */}
      <path
        d="M6 16 L54 16 L54 50 Q54 68 30 72 Q6 68 6 50 Z"
        stroke={c} strokeWidth="1.5" strokeLinejoin="round"
      />

      {/* Open book — upper quadrant of shield */}
      <g transform="translate(10, 22)">
        {/* Left page */}
        <path
          d="M20 1 C14 2 7 2 0 3 L0 20 C7 20 14 19 20 18 Z"
          stroke={c} strokeWidth="0.95"
        />
        {/* Right page */}
        <path
          d="M20 1 C26 2 33 2 40 3 L40 20 C33 20 26 19 20 18 Z"
          stroke={c} strokeWidth="0.95"
        />
        {/* Spine */}
        <line x1="20" y1="1" x2="20" y2="18" stroke={c} strokeWidth="1.25" />
        {/* Page rules — left */}
        <line x1="3" y1="8"  x2="17" y2="8"  stroke={c} strokeWidth="0.45" strokeOpacity="0.6" />
        <line x1="3" y1="12" x2="17" y2="12" stroke={c} strokeWidth="0.45" strokeOpacity="0.6" />
        <line x1="3" y1="16" x2="17" y2="16" stroke={c} strokeWidth="0.45" strokeOpacity="0.6" />
        {/* Page rules — right */}
        <line x1="23" y1="8"  x2="37" y2="8"  stroke={c} strokeWidth="0.45" strokeOpacity="0.6" />
        <line x1="23" y1="12" x2="37" y2="12" stroke={c} strokeWidth="0.45" strokeOpacity="0.6" />
        <line x1="23" y1="16" x2="37" y2="16" stroke={c} strokeWidth="0.45" strokeOpacity="0.6" />
      </g>

      {/* Water waves — lower quadrant */}
      <g transform="translate(8, 46)">
        <path d="M0 4 Q6 1 12 4 Q18 7 24 4 Q30 1 36 4 Q42 7 44 4" stroke={c} strokeWidth="0.85" />
        <path d="M0 8 Q6 5 12 8 Q18 11 24 8 Q30 5 36 8 Q42 11 44 8" stroke={c} strokeWidth="0.85" />
        <path d="M0 12 Q6 9 12 12 Q18 15 24 12 Q30 9 36 12 Q42 15 44 12" stroke={c} strokeWidth="0.85" />
      </g>
    </svg>
  );
}

// ─── Bottom Laurel Decoration ────────────────────────────────────────────────
function LaurelDecoration() {
  return (
    <svg width={240} height={32} viewBox="0 0 240 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Gold lines */}
      <line x1="0" y1="16" x2="90" y2="16" stroke={GOLD} strokeWidth="0.75" strokeOpacity="0.65" />
      <line x1="150" y1="16" x2="240" y2="16" stroke={GOLD} strokeWidth="0.75" strokeOpacity="0.65" />

      {/* Left laurel sprigs */}
      <g stroke={GOLD} strokeWidth="0.85" strokeOpacity="0.75" fill="none">
        <path d="M90 16 C85 13 82 8 84 5" />
        <ellipse cx="83" cy="4.5" rx="3.5" ry="5.5" transform="rotate(-25 83 4.5)" />
        <path d="M90 16 C86 15 83 18 85 21" />
        <ellipse cx="84.5" cy="22" rx="3.5" ry="5.5" transform="rotate(20 84.5 22)" />
        <path d="M90 16 C84 14 81 15 82 18" />
        <ellipse cx="81" cy="18.5" rx="3" ry="4.5" transform="rotate(10 81 18.5)" />
      </g>

      {/* Right laurel sprigs (mirrored) */}
      <g stroke={GOLD} strokeWidth="0.85" strokeOpacity="0.75" fill="none">
        <path d="M150 16 C155 13 158 8 156 5" />
        <ellipse cx="157" cy="4.5" rx="3.5" ry="5.5" transform="rotate(25 157 4.5)" />
        <path d="M150 16 C154 15 157 18 155 21" />
        <ellipse cx="155.5" cy="22" rx="3.5" ry="5.5" transform="rotate(-20 155.5 22)" />
        <path d="M150 16 C156 14 159 15 158 18" />
        <ellipse cx="159" cy="18.5" rx="3" ry="4.5" transform="rotate(-10 159 18.5)" />
      </g>

      {/* Center: mortarboard */}
      <g transform="translate(110, 4)" stroke={GOLD} strokeWidth="0.9" strokeOpacity="0.85" fill="none">
        {/* Board (diamond top) */}
        <polygon points="10,0 20,6 10,12 0,6" />
        {/* Cap band */}
        <rect x="4" y="12" width="12" height="6" rx="0.8" />
        {/* Tassel string */}
        <line x1="20" y1="6" x2="23" y2="14" />
        {/* Tassel end */}
        <line x1="23" y1="14" x2="23" y2="20" />
        <line x1="21" y1="18" x2="25" y2="18" />
        <line x1="21" y1="20" x2="25" y2="20" />
      </g>
    </svg>
  );
}

// ─── Shared Header Band ──────────────────────────────────────────────────────
function HeaderBand({ showText = true, crestSize = 38 }: { showText?: boolean; crestSize?: number }) {
  return (
    <div
      style={{
        background: NAVY,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        padding: showText ? "10px 24px 11px" : "8px 24px",
        flexShrink: 0,
      }}
    >
      <LasuCrest size={crestSize} onDark />
      {showText && (
        <>
          <div
            style={{
              color: CREAM,
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: 10.5,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              textAlign: "center",
              lineHeight: 1,
            }}
          >
            Lagos State University
          </div>
          <div
            style={{
              color: GOLD,
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: 9,
              letterSpacing: "0.05em",
              lineHeight: 1,
            }}
          >
            For Truth and Service
          </div>
        </>
      )}
    </div>
  );
}

// ─── Gold Rule ───────────────────────────────────────────────────────────────
function GoldRule({ width = "72%" }: { width?: string }) {
  return (
    <div
      style={{
        width,
        height: 1,
        background: `linear-gradient(90deg, transparent, ${GOLD} 20%, ${GOLD} 80%, transparent)`,
        margin: "0 auto",
        opacity: 0.65,
      }}
    />
  );
}

// ─── Front Cover ─────────────────────────────────────────────────────────────
function FrontCover() {
  return (
    <div
      style={{
        width: 510,
        height: 723,
        background: CREAM,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <HeaderBand showText crestSize={38} />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "28px 48px 20px",
          gap: 0,
        }}
      >
        {/* Circular portrait frame */}
        <div
          style={{
            width: 218,
            height: 218,
            borderRadius: "50%",
            border: `2.5px solid ${GOLD}`,
            outline: `1px solid rgba(196,147,40,0.22)`,
            outlineOffset: 4,
            overflow: "hidden",
            flexShrink: 0,
            boxShadow: `0 6px 24px rgba(27,43,92,0.18)`,
          }}
        >
          <ImageWithFallback
            src={portraitFront}
            alt="Dr. Mrs. Iyore Evelyn Chukwulobe in LASU doctoral regalia"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 14%",
              display: "block",
            }}
          />
        </div>

        {/* Name & credentials */}
        <div style={{ textAlign: "center", marginTop: 22, width: "100%" }}>
          <div
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 600,
              fontSize: 25,
              color: NAVY,
              letterSpacing: "0.005em",
              lineHeight: 1.22,
            }}
          >
            Dr. Mrs. Iyore Evelyn Chukwulobe
          </div>

          <div
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 11.5,
              color: INK,
              letterSpacing: "0.1em",
              marginTop: 10,
              opacity: 0.7,
            }}
          >
            BSc.Ed., MEd., TRCN, MSc., PhD
          </div>

          <div style={{ marginTop: 14, marginBottom: 14 }}>
            <GoldRule width="60%" />
          </div>

          <div
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: 22,
              color: NAVY,
              letterSpacing: "0.02em",
              lineHeight: 1.45,
              opacity: 0.88,
            }}
          >
            Doctor of Philosophy in Mathematics Education
          </div>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1, minHeight: 16 }} />

        {/* Event details */}
        <div
          style={{
            textAlign: "center",
            width: "100%",
            borderTop: `1px solid rgba(196,147,40,0.3)`,
            paddingTop: 18,
          }}
        >
          <div
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 11.5,
              color: NAVY,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              lineHeight: 1.5,
            }}
          >
            PhD Convocation &amp; Certificate Conferment Ceremony
          </div>

          <div
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 11.5,
              color: INK,
              marginTop: 9,
              letterSpacing: "0.02em",
              opacity: 0.78,
            }}
          >
            Wednesday, August 19, 2026&ensp;&middot;&ensp;10:00 AM Prompt
          </div>

          <div
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 11,
              color: INK,
              marginTop: 6,
              lineHeight: 1.55,
              opacity: 0.65,
              maxWidth: 370,
              margin: "6px auto 0",
            }}
          >
            Buba Marwa Auditorium, Lagos State University (LASU), Ojo, Lagos
          </div>
        </div>

        {/* Bottom decoration */}
        <div style={{ marginTop: 18 }}>
          <LaurelDecoration />
        </div>
      </div>
    </div>
  );
}

// ─── Back Cover ──────────────────────────────────────────────────────────────
function BackCover() {
  return (
    <div
      style={{
        width: 510,
        height: 723,
        background: CREAM,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <HeaderBand showText={false} crestSize={34} />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "34px 60px 24px",
        }}
      >
        {/* Rectangular portrait frame */}
        <div
          style={{
            width: 262,
            height: 198,
            borderRadius: 6,
            border: `2px solid ${GOLD}`,
            outline: `1px solid rgba(196,147,40,0.2)`,
            outlineOffset: 4,
            overflow: "hidden",
            flexShrink: 0,
            boxShadow: `0 4px 20px rgba(27,43,92,0.14)`,
          }}
        >
          <ImageWithFallback
            src={portraitBack}
            alt="Dr. Mrs. Iyore Evelyn Chukwulobe — doctoral portrait"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 8%",
              display: "block",
            }}
          />
        </div>

        {/* Closing message */}
        <div style={{ textAlign: "center", marginTop: 34, width: "100%" }}>
          <div
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 600,
              fontSize: 21,
              color: NAVY,
              lineHeight: 1.3,
              letterSpacing: "0.01em",
            }}
          >
            Thank You for Celebrating With Us
          </div>

          <div
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 300,
              fontSize: 12.5,
              color: INK,
              marginTop: 14,
              lineHeight: 1.75,
              opacity: 0.72,
              letterSpacing: "0.01em",
            }}
          >
            Your presence made this milestone truly memorable.
          </div>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Signature footer */}
        <div style={{ textAlign: "center", width: "100%" }}>
          <GoldRule width="55%" />

          <div
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 500,
              fontSize: 10.5,
              color: NAVY,
              letterSpacing: "0.13em",
              textTransform: "uppercase",
              marginTop: 14,
              lineHeight: 1.5,
            }}
          >
            Dr. Mrs. Iyore Evelyn Chukwulobe
          </div>

          <div
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 10.5,
              color: INK,
              letterSpacing: "0.07em",
              marginTop: 3,
              opacity: 0.6,
            }}
          >
            PhD Mathematics Education
          </div>

          <div
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: 10.5,
              color: INK,
              letterSpacing: "0.04em",
              marginTop: 8,
              opacity: 0.5,
            }}
          >
            August 19, 2026
          </div>

          <div style={{ height: 28 }} />
        </div>
      </div>
    </div>
  );
}

// ─── Spine ───────────────────────────────────────────────────────────────────
function Spine() {
  return (
    <div
      style={{
        width: 40,
        height: 723,
        background: NAVY,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 0",
        flexShrink: 0,
      }}
    >
      {/* Top accent pip */}
      <div style={{ width: 1, height: 18, background: GOLD, opacity: 0.4 }} />

      {/* Rotated spine text */}
      <div
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
          fontFamily: "'Inter', system-ui, sans-serif",
          fontWeight: 400,
          fontSize: 9,
          color: CREAM,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          opacity: 0.7,
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        PhD Convocation&ensp;·&ensp;August 2026&ensp;·&ensp;LASU
      </div>

      {/* Bottom accent pip */}
      <div style={{ width: 1, height: 18, background: GOLD, opacity: 0.4 }} />
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#8A8480",
        backgroundImage:
          "radial-gradient(ellipse at 30% 40%, #968F88 0%, #7A7470 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "52px 24px",
      }}
    >
      {/* Spread wrapper */}
      <div
        style={{
          display: "flex",
          borderRadius: 1,
          boxShadow:
            "0 2px 4px rgba(0,0,0,0.12), 0 12px 32px rgba(0,0,0,0.28), 0 24px 64px rgba(0,0,0,0.18)",
          overflow: "hidden",
        }}
      >
        <BackCover />
        <Spine />
        <FrontCover />
      </div>
    </div>
  );
}
