import { motion } from "framer-motion";
import { useMemo } from "react";

const GOLD = "#C9A24B";
const GOLD_BRIGHT = "#D4AF37";
const EMERALD = "#0E5A43";
const CORAL = "#E07856";

/* Optional portrait sources — swap in real images later */
const DAD_SRC: string | null = null;
const MOM_SRC: string | null = null;

const MandalaSVG = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" className={className} aria-hidden>
    <g fill="none" stroke="currentColor" strokeWidth="0.5">
      {[90, 72, 54, 36, 18].map((r) => (
        <circle key={r} cx="100" cy="100" r={r} />
      ))}
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i * Math.PI) / 12;
        return (
          <line
            key={i}
            x1={100 + Math.cos(a) * 18}
            y1={100 + Math.sin(a) * 18}
            x2={100 + Math.cos(a) * 90}
            y2={100 + Math.sin(a) * 90}
          />
        );
      })}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6;
        return (
          <circle
            key={i}
            cx={100 + Math.cos(a) * 54}
            cy={100 + Math.sin(a) * 54}
            r="8"
          />
        );
      })}
    </g>
  </svg>
);

/** Ornate arched portrait frame (temple mehrab shape) */
function PortraitFrame({
  label,
  src,
  fromX,
  delay,
}: {
  label: string;
  src: string | null;
  fromX: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: fromX, scale: 0.92 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Ornate gold decorative frame */}
      <div
        className="relative"
        style={{
          width: "min(38vw, 260px)",
          height: "min(50vw, 340px)",
        }}
      >
        {/* Outer decorative shadow */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            clipPath:
              "path('M 20 160 Q 20 20 130 20 Q 240 20 240 160 L 240 320 Q 240 340 220 340 L 40 340 Q 20 340 20 320 Z')",
            background:
              "linear-gradient(160deg, #f6e2a8 0%, #C9A24B 50%, #8a6a26 100%)",
            filter: "drop-shadow(0 20px 30px rgba(14,90,67,0.25))",
            transform: "scale(1.06)",
            transformOrigin: "center",
          }}
        />
        {/* Inner arched image mask */}
        <div
          className="absolute inset-[10px] overflow-hidden"
          style={{
            borderRadius: "50% 50% 8px 8px / 40% 40% 8px 8px",
            background:
              "linear-gradient(180deg, #FBF4E6 0%, #f0dfa8 100%)",
            boxShadow:
              "inset 0 0 0 3px #D4AF37, inset 0 0 0 6px #FBF4E6, inset 0 0 0 8px #C9A24B",
          }}
        >
          {src ? (
            <motion.img
              src={src}
              alt={label}
              className="h-full w-full object-cover"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-center">
              <div
                className="grid h-16 w-16 place-items-center rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, #f6e2a8, #C9A24B)",
                  color: EMERALD,
                }}
              >
                <span className="font-serif-display text-2xl">
                  {label[0]}
                </span>
              </div>
              <p
                className="font-serif-display text-xl italic"
                style={{ color: EMERALD }}
              >
                {label}
              </p>
              <p
                className="text-[0.6rem] uppercase tracking-[0.3em]"
                style={{ color: "#8a6a26" }}
              >
                Add photo
              </p>
            </div>
          )}
        </div>
        {/* Top ornament */}
        <div
          aria-hidden
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
          style={{ color: GOLD_BRIGHT }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2 L14 9 L21 9 L15.5 13 L17.5 20 L12 16 L6.5 20 L8.5 13 L3 9 L10 9 Z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

/** Floating gold petals */
function Petals() {
  const petals = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 10,
        size: 6 + Math.random() * 10,
        drift: (Math.random() - 0.5) * 80,
        opacity: 0.35 + Math.random() * 0.4,
      })),
    []
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute -top-10 rounded-full"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background:
              "radial-gradient(circle at 30% 30%, #f6e2a8, #C9A24B 70%, transparent 100%)",
            opacity: p.opacity,
            filter: "blur(0.3px)",
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, p.drift, -p.drift, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

const HEADING_WORDS = ["Apparao", "❤", "Bharathi"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 pb-20 pt-28 md:px-8 md:pt-32"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Faint mandala backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid place-items-center opacity-[0.09]"
        style={{ color: GOLD }}
      >
        <MandalaSVG className="h-[130vmin] w-[130vmin]" />
      </div>
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-32 -top-32 hidden opacity-[0.08] md:block"
        style={{ color: EMERALD }}
      >
        <MandalaSVG className="h-[420px] w-[420px]" />
      </motion.div>

      <Petals />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-[0.65rem] font-medium uppercase tracking-[0.45em] md:text-[0.7rem]"
          style={{ color: GOLD }}
        >
          A Family Tribute · కుటుంబ నివాళి
        </motion.p>

        {/* Portraits + heart */}
        <div className="relative flex w-full flex-col items-center justify-center gap-6 md:flex-row md:gap-10">
          <PortraitFrame
            label="Dad"
            src={DAD_SRC}
            fromX={-80}
            delay={0.2}
          />

          {/* Center heart + connecting thread */}
          <div className="relative flex items-center justify-center">
            {/* Horizontal gold thread (desktop) */}
            <motion.svg
              aria-hidden
              className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block"
              width="220"
              height="4"
              viewBox="0 0 220 4"
            >
              <motion.line
                x1="0"
                y1="2"
                x2="220"
                y2="2"
                stroke={GOLD_BRIGHT}
                strokeWidth="1.2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{ duration: 1.4, delay: 1.2, ease: "easeInOut" }}
              />
            </motion.svg>
            {/* Vertical thread (mobile) */}
            <motion.svg
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden"
              width="4"
              height="120"
              viewBox="0 0 4 120"
            >
              <motion.line
                x1="2"
                y1="0"
                x2="2"
                y2="120"
                stroke={GOLD_BRIGHT}
                strokeWidth="1.2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{ duration: 1.2, delay: 1.2, ease: "easeInOut" }}
              />
            </motion.svg>

            {/* Heart */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6, type: "spring", stiffness: 140 }}
              className="relative z-10"
            >
              <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="grid h-14 w-14 place-items-center rounded-full md:h-16 md:w-16"
                style={{
                  background: `radial-gradient(circle at 30% 30%, #ffb8a0, ${CORAL} 60%, #a63f24 100%)`,
                  boxShadow: `0 0 30px ${CORAL}88, 0 0 60px ${CORAL}55, inset 0 0 12px rgba(255,255,255,0.35)`,
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#FBF4E6">
                  <path d="M12 21s-7-4.5-9.5-9C.7 8.5 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.3 4.5 4.5 8-2.5 4.5-9.5 9-9.5 9z" />
                </svg>
              </motion.div>
            </motion.div>
          </div>

          <PortraitFrame
            label="Mom"
            src={MOM_SRC}
            fromX={80}
            delay={0.2}
          />
        </div>

        {/* Divider */}
        <div className="gold-divider mt-12 w-full max-w-md" aria-hidden />

        {/* Heading — word by word */}
        <h1 className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center font-serif-display text-4xl leading-[1.05] sm:text-5xl md:text-7xl lg:text-[5.5rem]">
          {HEADING_WORDS.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.0 + i * 0.2 }}
              style={{
                color: w === "❤" ? CORAL : EMERALD,
                fontSize: w === "❤" ? "0.75em" : undefined,
              }}
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.7 }}
          className="font-telugu mt-3 text-center text-2xl md:text-4xl"
          style={{ color: EMERALD }}
        >
          అప్పారావు <span style={{ color: CORAL }}>❤</span> భారతి
        </motion.p>

        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 3.0 }}
          className="mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.25em] md:text-xs"
          style={{
            borderColor: GOLD,
            background:
              "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(201,162,75,0.08))",
            color: EMERALD,
          }}
        >
          <span style={{ color: CORAL }}>❤</span>
          Married since 25 April 1999 · వివాహం 1999
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 3.2 }}
          className="mx-auto mt-6 max-w-xl px-4 text-center text-sm italic leading-relaxed md:text-base"
          style={{ color: "#6b5d52" }}
        >
          A lifetime of love, work, and quiet devotion — remembered by the
          children they raised with the whole of their hearts.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 3.4 }}
          className="font-telugu mx-auto mt-2 max-w-xl px-4 text-center text-base md:text-lg"
          style={{ color: EMERALD, opacity: 0.85 }}
        >
          ప్రేమతో, శ్రమతో, నిశ్శబ్ద భక్తితో — వారి పిల్లల హృదయాలలో ఎప్పటికీ
        </motion.p>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.8 }}
          className="mt-12 flex flex-col items-center"
        >
          <span
            className="text-[0.6rem] uppercase tracking-[0.4em] md:text-[0.65rem]"
            style={{ color: EMERALD, opacity: 0.7 }}
          >
            Scroll ↓
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-3 h-10 w-px"
            style={{ background: GOLD }}
          />
        </motion.div>
      </div>
    </section>
  );
}