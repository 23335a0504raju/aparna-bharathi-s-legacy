import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import SmartImage from "./SmartImage";
import { IMAGES } from "@/lib/images";

const TERRA = "#C25E3A";
const AMBER = "#DDA24A";
const CREAM_TEXT = "#2A231C";
const MUTED = "rgba(42,35,28,0.68)";

interface StoryRowProps {
  reverse?: boolean;
  primary: { src: string; alt: string };
  secondary: { src: string; alt: string };
  eyebrow: string;
  titleEn: string;
  titleTe: string;
  bodyEn: string;
  bodyTe: string;
  chips: string[];
}

function StoryRow({
  reverse = false,
  primary,
  secondary,
  eyebrow,
  titleEn,
  titleTe,
  bodyEn,
  bodyTe,
  chips,
}: StoryRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yPrimary = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const ySecondary = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image stack */}
      <div className="relative md:col-span-6">
        <motion.div
          style={{ y: yPrimary }}
          className="group relative overflow-hidden rounded-2xl"
          // 3:4 primary
        >
          <div
            className="w-full overflow-hidden rounded-2xl"
            style={{
              boxShadow: "0 30px 60px -30px rgba(23,19,15,0.35)",
              aspectRatio: "4 / 5",
            }}
          >
            <div className="h-full w-full overflow-hidden">
              <SmartImage
                src={primary.src}
                alt={primary.alt}
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
              />
            </div>
          </div>
        </motion.div>

        {/* Smaller stacked secondary — offset bottom corner */}
        <motion.div
          style={{ y: ySecondary }}
          className={`group absolute -bottom-8 w-[46%] max-w-[220px] overflow-hidden rounded-2xl sm:-bottom-10 md:-bottom-12 ${
            reverse ? "-left-4 md:-left-10" : "-right-4 md:-right-10"
          }`}
        >
          <div
            className="w-full overflow-hidden rounded-2xl"
            style={{
              boxShadow: "0 25px 50px -20px rgba(23,19,15,0.45)",
              aspectRatio: "3 / 4",
              outline: "6px solid #F4EDE1",
            }}
          >
            <SmartImage
              src={secondary.src}
              alt={secondary.alt}
              className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
            />
          </div>
        </motion.div>
      </div>

      {/* Text */}
      <div className="md:col-span-6">
        <div className="mb-6 flex items-center gap-3">
          <span
            className="font-sans-ui text-[0.65rem] font-semibold uppercase tracking-[0.32em]"
            style={{ color: TERRA }}
          >
            {eyebrow}
          </span>
          <span
            className="h-px flex-1 max-w-[80px]"
            style={{ background: "rgba(42,35,28,0.2)" }}
          />
        </div>

        <h3
          className="font-serif-display text-4xl leading-[1.08] tracking-tight md:text-5xl"
          style={{ color: CREAM_TEXT }}
        >
          {titleEn}
        </h3>
        <p
          className="font-telugu mt-3 text-xl md:text-2xl"
          style={{ color: TERRA }}
        >
          {titleTe}
        </p>

        <p
          className="font-sans-ui mt-6 text-base leading-relaxed md:text-[17px]"
          style={{ color: MUTED }}
        >
          {bodyEn}
        </p>
        <p
          className="font-telugu mt-4 text-lg leading-relaxed md:text-xl"
          style={{ color: "rgba(42,35,28,0.78)" }}
        >
          {bodyTe}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c}>{c}</Chip>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span
      className="font-sans-ui inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.7rem] font-medium tracking-tight"
      style={{
        borderColor: "rgba(42,35,28,0.18)",
        background: "rgba(255,255,255,0.5)",
        color: CREAM_TEXT,
      }}
    >
      <span
        className="inline-block h-1.5 w-1.5 rounded-full"
        style={{ background: AMBER }}
      />
      {children}
    </span>
  );
}

export default function TheirWork() {
  return (
    <section
      id="their-work"
      className="relative w-full scroll-mt-24 overflow-hidden px-6 py-28 md:px-10 md:py-40"
      style={{ background: "#F4EDE1", color: CREAM_TEXT }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "var(--grain-url)",
          opacity: 0.18,
          mixBlendMode: "overlay",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-8 flex items-center gap-4">
            <span
              className="font-sans-ui text-[0.65rem] font-semibold uppercase tracking-[0.32em]"
              style={{ color: TERRA }}
            >
              Chapter One · వారి పని
            </span>
            <span
              className="h-px flex-1 max-w-[120px]"
              style={{ background: "rgba(42,35,28,0.2)" }}
            />
          </div>
          <h2 className="font-serif-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            Their Work
          </h2>
          <p
            className="font-telugu mt-4 text-2xl md:text-3xl"
            style={{ color: TERRA }}
          >
            వారి పని
          </p>
        </motion.div>

        {/* Rows */}
        <div className="mt-24 flex flex-col gap-32 md:mt-32 md:gap-40">
          <StoryRow
            primary={IMAGES.momWork1}
            secondary={IMAGES.momWork2}
            eyebrow="Bharathi · భారతి"
            titleEn="Bharathi — The Heart of the Home"
            titleTe="భారతి — ఇంటికి ఆధారం"
            bodyEn="She is a homemaker who also runs a laundry and ironing service from home for the neighbourhood — turning careful, honest work into the warmth that holds our family together."
            bodyTe="ఆమె ఇంటిని చూసుకుంటూనే, ఇంటి నుండే పొరుగువారికి బట్టల ఇస్త్రీ, లాండ్రీ సేవలు అందిస్తారు — నిజాయితీగా, శ్రద్ధగా చేసే ఆ చిన్న పనులే మా కుటుంబాన్ని ఒక్కటిగా నిలబెట్టిన వెచ్చదనం."
            chips={["Homemaker", "Ironing & Laundry", "Neighbourhood-loved"]}
          />
          <StoryRow
            reverse
            primary={IMAGES.dadWork1}
            secondary={IMAGES.dadWork2}
            eyebrow="Apparao · అప్పారావు"
            titleEn="Apparao — Steady Hands, Steady Heart"
            titleTe="అప్పారావు — స్థిరమైన శ్రమ"
            bodyEn="He works a private job at Coromandel, giving his days to steady, dependable work so his children could dream bigger."
            bodyTe="ఆయన కోరమాండల్‌లో ప్రైవేటు ఉద్యోగం చేస్తారు — తన పిల్లలు పెద్ద కలలు కనగలిగేలా, ప్రతిరోజూ నిబద్ధతతో, స్థిరంగా శ్రమించే జీవితం."
            chips={["Coromandel", "Private Job", "Provider"]}
          />
        </div>
      </div>
    </section>
  );
}