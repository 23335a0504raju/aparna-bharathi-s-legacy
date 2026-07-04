import { motion } from "framer-motion";
import SmartImage from "./SmartImage";
import { IMAGES } from "@/lib/images";

const INK = "#17130F";
const CREAM = "#F4EDE1";
const TERRA = "#C25E3A";
const AMBER = "#DDA24A";

const HEADING_WORDS = ["Apparao", "❤", "Bharathi"];

function Portrait({
  src,
  alt,
  fromX,
  delay,
}: {
  src: string;
  alt: string;
  fromX: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: fromX, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
      style={{
        width: "clamp(140px, 34vw, 300px)",
        aspectRatio: "3 / 4",
      }}
    >
      <div
        className="relative h-full w-full overflow-hidden rounded-2xl"
        style={{
          boxShadow:
            "0 30px 80px -30px rgba(0,0,0,0.7), 0 0 0 1px rgba(244,237,225,0.08)",
        }}
      >
        <motion.div
          className="h-full w-full"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        >
          <SmartImage
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Warm duotone overlay — fades on hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 transition-opacity duration-700 group-hover:opacity-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(194,94,58,0.35) 0%, rgba(23,19,15,0.55) 100%)",
            mixBlendMode: "multiply",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 transition-opacity duration-700 group-hover:opacity-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(221,162,74,0.15) 0%, transparent 60%)",
            mixBlendMode: "screen",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col overflow-hidden px-5 pb-16 pt-24 md:px-10 md:pb-24 md:pt-28"
      style={{ background: INK, color: CREAM }}
    >
      {/* Soft terracotta radial glow, top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 90% 0%, rgba(194,94,58,0.22) 0%, rgba(23,19,15,0) 55%), radial-gradient(ellipse 50% 40% at 10% 100%, rgba(221,162,74,0.10) 0%, rgba(23,19,15,0) 60%)",
        }}
      />
      {/* Warm grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "var(--grain-url)",
          opacity: 0.35,
          mixBlendMode: "overlay",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-sans-ui mb-10 text-[0.65rem] font-semibold uppercase tracking-[0.4em]"
          style={{ color: TERRA }}
        >
          A Family Tribute · కుటుంబ నివాళి
        </motion.p>

        {/* Portraits with connecting thread + heart */}
        <div className="relative flex w-full items-center justify-center gap-3 sm:gap-5 md:gap-10">
          <Portrait
            src={IMAGES.dadPortrait.src}
            alt={IMAGES.dadPortrait.alt}
            fromX={-60}
            delay={0.2}
          />

          <div className="relative flex shrink-0 items-center justify-center">
            {/* Connecting thread — draws horizontally between portraits */}
            <motion.svg
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              width="120"
              height="2"
              viewBox="0 0 120 2"
              preserveAspectRatio="none"
              style={{ width: "clamp(40px, 12vw, 140px)" }}
            >
              <motion.line
                x1="0"
                y1="1"
                x2="120"
                y2="1"
                stroke={TERRA}
                strokeWidth="1"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{ duration: 1.4, delay: 1.2, ease: "easeInOut" }}
              />
            </motion.svg>

            {/* Heart at midpoint */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.7, type: "spring", stiffness: 140 }}
              className="relative z-10"
            >
              <motion.div
                animate={{ scale: [1, 1.14, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="grid h-8 w-8 place-items-center rounded-full md:h-10 md:w-10"
                style={{
                  background: `radial-gradient(circle at 30% 30%, #ffb090, ${TERRA} 65%, #7a2f18 100%)`,
                  boxShadow: `0 0 20px rgba(194,94,58,0.6), 0 0 40px rgba(194,94,58,0.25)`,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill={CREAM}>
                  <path d="M12 21s-7-4.5-9.5-9C.7 8.5 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.3 4.5 4.5 8-2.5 4.5-9.5 9-9.5 9z" />
                </svg>
              </motion.div>
            </motion.div>
          </div>

          <Portrait
            src={IMAGES.momPortrait.src}
            alt={IMAGES.momPortrait.alt}
            fromX={60}
            delay={0.2}
          />
        </div>

        {/* Kinetic headline overlapping portraits from below */}
        <div className="relative z-20 -mt-6 flex w-full flex-col items-center text-center md:-mt-10">
          <h1
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-0 font-serif-display leading-[0.95] tracking-tight"
            style={{
              color: CREAM,
              fontSize: "clamp(2.5rem, 11vw, 8rem)",
            }}
          >
            {HEADING_WORDS.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 1.9 + i * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  color: w === "❤" ? TERRA : CREAM,
                  fontSize: w === "❤" ? "0.65em" : undefined,
                  fontStyle: w === "❤" ? "normal" : "italic",
                  fontWeight: 400,
                }}
              >
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
            className="font-telugu mt-3 text-2xl sm:text-3xl md:text-4xl"
            style={{ color: AMBER }}
          >
            అప్పారావు <span style={{ color: TERRA }}>❤</span> భారతి
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.9 }}
            className="font-sans-ui mx-auto mt-8 max-w-xl text-sm leading-relaxed md:text-base"
            style={{ color: "rgba(244,237,225,0.72)" }}
          >
            A lifetime of love, work, and quiet devotion — remembered by the
            children they raised with all their hearts.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.05 }}
            className="font-telugu mx-auto mt-2 max-w-xl text-base md:text-lg"
            style={{ color: "rgba(221,162,74,0.85)" }}
          >
            ప్రేమతో, శ్రమతో, నిశ్శబ్ద భక్తితో — వారి పిల్లల హృదయాలలో ఎప్పటికీ
          </motion.p>

          {/* Chips */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 3.25 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            <Chip>
              <span style={{ color: TERRA }}>●</span>
              Married · 25 Apr 1999
            </Chip>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.6 }}
        className="relative z-10 mx-auto mt-10 flex flex-col items-center"
      >
        <span
          className="font-sans-ui text-[0.6rem] font-medium uppercase tracking-[0.4em]"
          style={{ color: "rgba(244,237,225,0.5)" }}
        >
          Scroll ↓
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-3 h-8 w-px"
          style={{ background: "rgba(244,237,225,0.35)" }}
        />
      </motion.div>
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="font-sans-ui inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.7rem] font-medium tracking-tight backdrop-blur-md"
      style={{
        borderColor: "rgba(244,237,225,0.15)",
        background: "rgba(244,237,225,0.05)",
        color: "rgba(244,237,225,0.85)",
      }}
    >
      {children}
    </span>
  );
}