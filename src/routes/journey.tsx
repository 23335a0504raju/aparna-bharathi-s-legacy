import { createFileRoute, Link } from "@tanstack/react-router";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, Cake, Heart, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import SmartImage from "@/components/SmartImage";
import LoadingIntro from "@/components/LoadingIntro";
import {
  IMAGES,
  JOURNEY_CRITICAL_IMAGES,
  JOURNEY_WARM_IMAGES,
} from "@/lib/images";

const INK = "#17130F";
const CREAM = "#F4EDE1";
const TERRA = "#C25E3A";
const AMBER = "#DDA24A";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Their Journey — Apparao ❤ Bharathi" },
      {
        name: "description",
        content:
          "From 1999 to today — a scroll-animated timeline of Apparao and Bharathi's life together.",
      },
      { property: "og:title", content: "Their Journey — Apparao ❤ Bharathi" },
      {
        property: "og:description",
        content:
          "A cinematic, scroll-animated timeline of Apparao and Bharathi's life together.",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: JourneyPage,
});

/* ---------------- Page-scoped scroll progress ---------------- */
function PageProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left"
      style={{ scaleX, background: TERRA }}
    />
  );
}

/* ---------------- Hero ---------------- */
const HERO_WORDS_EN = ["Their", "Journey"];

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden px-6 pt-28 pb-20 md:px-10"
      style={{ background: INK, color: CREAM }}
    >
      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "var(--grain-url)",
          opacity: 0.28,
          mixBlendMode: "overlay",
        }}
      />
      {/* Terracotta glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 25% 30%, rgba(194,94,58,0.18) 0%, transparent 65%), radial-gradient(ellipse 45% 40% at 80% 70%, rgba(221,162,74,0.10) 0%, transparent 65%)",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto w-full max-w-6xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mb-8 flex items-center gap-4"
        >
          <span
            className="font-sans-ui text-[0.65rem] font-semibold uppercase tracking-[0.32em]"
            style={{ color: TERRA }}
          >
            The Journey · ప్రయాణం
          </span>
          <span
            className="h-px flex-1 max-w-[120px]"
            style={{ background: "rgba(244,237,225,0.18)" }}
          />
        </motion.div>

        <h1 className="font-serif-display text-[15vw] leading-[0.95] tracking-tight sm:text-8xl md:text-[8rem] lg:text-[10rem]">
          {HERO_WORDS_EN.map((w, i) => (
            <span key={w} className="mr-4 inline-block overflow-hidden pb-2">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1,
                  delay: 0.15 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-4 overflow-hidden">
          <motion.p
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="font-telugu inline-block text-4xl md:text-6xl"
            style={{ color: AMBER }}
          >
            వారి ప్రయాణం
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="font-sans-ui mt-12 max-w-xl text-base leading-relaxed md:text-lg"
          style={{ color: "rgba(244,237,225,0.78)" }}
        >
          From 1999 to today — a love built one day at a time.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05 }}
          className="font-telugu mt-3 max-w-xl text-lg leading-relaxed md:text-xl"
          style={{ color: "rgba(221,162,74,0.85)" }}
        >
          1999 నుండి నేటి వరకు — రోజురోజుకూ నిర్మించుకున్న ప్రేమ.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-20 flex items-center gap-3"
          style={{ color: "rgba(244,237,225,0.55)" }}
        >
          <span className="font-sans-ui text-[11px] uppercase tracking-[0.35em]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ---------------- Milestones data ---------------- */
type Photo = { src: string; alt: string };

type Milestone = {
  year: string;
  date: string;
  titleEn: string;
  titleTe: string;
  bodyEn: string;
  bodyTe: string;
  photos: Photo[];
  feature?: boolean; // wedding / today
  featureAspect?: string; // override the 21/9 feature crop (e.g. portrait photos)
  tone: "ink" | "cream";
};

const MILESTONES: Milestone[] = [
  {
    year: "1999",
    date: "25 April 1999",
    titleEn: "The Wedding",
    titleTe: "వివాహం",
    bodyEn:
      "Two families united; two strangers began a lifetime together — quietly, without ceremony to their vows, but with everything to give.",
    bodyTe:
      "రెండు కుటుంబాలు ఒకటయ్యాయి; ఇద్దరు అపరిచితులు ఒక జీవితకాల ప్రయాణాన్ని ప్రారంభించారు.",
    photos: [IMAGES.wedding],
    feature: true,
    featureAspect: "3 / 4",
    tone: "cream",
  },
  {
    year: "1999",
    date: "From the family album",
    titleEn: "Wedding Memories",
    titleTe: "వివాహ జ్ఞాపకాలు",
    bodyEn:
      "Tucked away in an old photo album — the mangalsutra tied, the rituals shared with family, moments kept safe for over two decades.",
    bodyTe:
      "పాత ఫోటో ఆల్బమ్‌లో దాచిన క్షణాలు — మంగళసూత్రధారణ, కుటుంబంతో పంచుకున్న ఆచారాలు, రెండు దశాబ్దాలకు పైగా భద్రంగా ఉన్న జ్ఞాపకాలు.",
    photos: [IMAGES.weddingMemory1, IMAGES.weddingMemory2],
    tone: "ink",
  },
  {
    year: "2000",
    date: "14 December 2000",
    titleEn: "Sai Arrives",
    titleTe: "సాయి జననం",
    bodyEn:
      "Their first blessing — a daughter who made them parents, and made a house into a home. Here she is today, framed by a heart.",
    bodyTe:
      "వారి మొదటి ఆశీర్వాదం — వారిని తల్లిదండ్రులుగా మార్చిన కూతురు. నేడు ఆమె, ఒక హృదయం మధ్యలో.",
    photos: [IMAGES.saiBaby],
    tone: "ink",
  },
  {
    year: "2004",
    date: "07 December 2004",
    titleEn: "Raju Arrives",
    titleTe: "రాజు జననం",
    bodyEn:
      "A son; their family felt complete — four hearts under one roof, one love multiplied. Now grown, carrying their smile forward.",
    bodyTe:
      "ఒక కుమారుడు; వారి కుటుంబం పూర్తయినట్లు అనిపించింది. ఇప్పుడు పెరిగి, వారి చిరునవ్వును ముందుకు తీసుకెళ్తున్నాడు.",
    photos: [IMAGES.rajuBaby],
    tone: "cream",
  },
  {
    year: "…",
    date: "The years between",
    titleEn: "The Growing Years",
    titleTe: "పెరిగిన సంవత్సరాలు",
    bodyEn:
      "Festivals in half-sarees, everyday selfies, small joys and quiet sacrifices — the ordinary days that quietly shaped us.",
    bodyTe:
      "పండుగల అలంకారాలు, రోజువారీ క్షణాలు, చిన్న సంతోషాలు, నిశ్శబ్ద త్యాగాలు — మమ్మల్ని రూపొందించిన సాధారణ రోజులు.",
    photos: [IMAGES.childhood1, IMAGES.childhood2],
    tone: "ink",
  },
  {
    year: "…",
    date: "Along the way",
    titleEn: "Milestones & Smiles",
    titleTe: "మధురమైన క్షణాలు",
    bodyEn:
      "Twenty-five years celebrated with cake and balloons, forest outings together — the small triumphs and steady presence that raised us.",
    bodyTe:
      "కేక్, బెలూన్లతో జరుపుకున్న పాతికేళ్ల వేడుక, కలిసి చేసిన విహారాలు — మమ్మల్ని పెంచిన స్థిరమైన ఉనికి.",
    photos: [IMAGES.growing1, IMAGES.growing2],
    tone: "cream",
  },
  {
    year: "2025",
    date: "Today",
    titleEn: "Today",
    titleTe: "నేడు",
    bodyEn:
      "The family they built — still growing in love, still choosing each other, still becoming.",
    bodyTe:
      "వారు నిర్మించిన కుటుంబం — ఇంకా ప్రేమలో పెరుగుతోంది, ఇంకా ఒకరినొకరు ఎంచుకుంటూ.",
    photos: [IMAGES.familyRecent],
    feature: true,
    tone: "ink",
  },
];

/* ---------------- Timeline dot ---------------- */
function TimelineDot() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-8 z-20 left-4 -translate-x-1/2 md:left-1/2"
      aria-hidden
    >
      <motion.span
        className="block h-4 w-4 rounded-full"
        style={{ background: AMBER }}
        animate={{
          boxShadow: [
            `0 0 0 6px rgba(221,162,74,0.15), 0 0 14px rgba(221,162,74,0.55)`,
            `0 0 0 10px rgba(221,162,74,0.05), 0 0 26px rgba(221,162,74,0.85)`,
            `0 0 0 6px rgba(221,162,74,0.15), 0 0 14px rgba(221,162,74,0.55)`,
          ],
        }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

/* ---------------- Photo with reveal + optional parallax ---------------- */
function RevealPhoto({
  photo,
  aspect = "4 / 5",
  parallaxY,
  className = "",
}: {
  photo: Photo;
  aspect?: string;
  parallaxY?: MotionValue<number>;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 1.06 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{
        aspectRatio: aspect,
        boxShadow: "0 40px 80px -30px rgba(0,0,0,0.55)",
        outline: "1px solid rgba(244,237,225,0.08)",
      }}
    >
      {/* slight zoom gives the parallax shift room without exposing edges */}
      <motion.div className="h-full w-full scale-105" style={{ y: parallaxY }}>
        <SmartImage
          src={photo.src}
          alt={photo.alt}
          className="h-full w-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

/* ---------------- Milestone node ---------------- */
function MilestoneNode({
  milestone,
  index,
}: {
  milestone: Milestone;
  index: number;
}) {
  const isRight = index % 2 === 1;
  const isFeature = !!milestone.feature;
  const dark = milestone.tone === "ink";

  const nodeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: nodeRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const bg = dark ? INK : CREAM;
  const textColor = dark ? CREAM : "#2A231C";
  const mutedColor = dark ? "rgba(244,237,225,0.72)" : "rgba(42,35,28,0.7)";
  const teluguColor = dark ? AMBER : TERRA;
  const cardBg = dark ? "rgba(244,237,225,0.04)" : "rgba(255,255,255,0.6)";
  const cardBorder = dark
    ? "rgba(244,237,225,0.1)"
    : "rgba(42,35,28,0.1)";

  return (
    <section
      ref={nodeRef}
      className="relative w-full overflow-hidden"
      style={{ background: bg, color: textColor }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "var(--grain-url)",
          opacity: dark ? 0.22 : 0.15,
          mixBlendMode: "overlay",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 md:min-h-[85svh] md:px-10 md:py-32">
        {/* Timeline dot */}
        <TimelineDot />

        {isFeature ? (
          // Feature layout: full-width photo above card
          <div className="relative pl-12 md:pl-0">
            <RevealPhoto
              photo={milestone.photos[0]}
              aspect={milestone.featureAspect ?? "21 / 9"}
              parallaxY={parallaxY}
              className={
                milestone.featureAspect
                  ? "mx-auto w-full max-w-md md:max-w-lg"
                  : "w-full"
              }
            />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-10 max-w-3xl rounded-2xl border p-6 md:mt-14 md:p-10"
              style={{
                background: cardBg,
                borderColor: cardBorder,
                borderTop: `1px solid ${TERRA}`,
                boxShadow: dark
                  ? "0 40px 80px -40px rgba(0,0,0,0.7)"
                  : "0 40px 80px -40px rgba(23,19,15,0.25)",
              }}
            >
              <MilestoneCardBody
                milestone={milestone}
                textColor={textColor}
                mutedColor={mutedColor}
                teluguColor={teluguColor}
                large
              />
            </motion.div>
          </div>
        ) : (
          // Alternating layout: photo on one side, card on the other
          <div className="relative grid grid-cols-1 items-center gap-10 pl-12 md:grid-cols-12 md:gap-16 md:pl-0">
            <div
              className={`md:col-span-6 ${
                isRight ? "md:order-2" : "md:order-1"
              }`}
            >
              {milestone.photos.length > 1 ? (
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <RevealPhoto photo={milestone.photos[0]} aspect="4 / 5" parallaxY={parallaxY} />
                  <RevealPhoto
                    photo={milestone.photos[1]}
                    aspect="4 / 5"
                    parallaxY={parallaxY}
                    className="mt-8 md:mt-16"
                  />
                </div>
              ) : (
                <RevealPhoto
                  photo={milestone.photos[0]}
                  aspect="4 / 5"
                  parallaxY={parallaxY}
                />
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, x: isRight ? -60 : 60, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className={`md:col-span-6 ${
                isRight ? "md:order-1" : "md:order-2"
              }`}
            >
              <div
                className="rounded-2xl border p-6 md:p-8"
                style={{
                  background: cardBg,
                  borderColor: cardBorder,
                  borderTop: `1px solid ${TERRA}`,
                  boxShadow: dark
                    ? "0 30px 60px -35px rgba(0,0,0,0.7)"
                    : "0 30px 60px -35px rgba(23,19,15,0.25)",
                }}
              >
                <MilestoneCardBody
                  milestone={milestone}
                  textColor={textColor}
                  mutedColor={mutedColor}
                  teluguColor={teluguColor}
                />
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

function MilestoneCardBody({
  milestone,
  textColor,
  mutedColor,
  teluguColor,
  large = false,
}: {
  milestone: Milestone;
  textColor: string;
  mutedColor: string;
  teluguColor: string;
  large?: boolean;
}) {
  return (
    <>
      <div className="flex items-baseline gap-4">
        <motion.span
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`font-serif-display leading-none tracking-tight ${
            large ? "text-6xl md:text-8xl" : "text-5xl md:text-6xl"
          }`}
          style={{ color: TERRA }}
        >
          {milestone.year}
        </motion.span>
        <span
          className="font-sans-ui text-[11px] font-semibold uppercase tracking-[0.28em]"
          style={{ color: mutedColor }}
        >
          {milestone.date}
        </span>
      </div>

      <h2
        className={`font-serif-display mt-4 leading-[1.05] tracking-tight ${
          large ? "text-4xl md:text-6xl" : "text-3xl md:text-5xl"
        }`}
        style={{ color: textColor }}
      >
        {milestone.titleEn}
      </h2>
      <p
        className={`font-telugu mt-2 ${
          large ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
        }`}
        style={{ color: teluguColor }}
      >
        {milestone.titleTe}
      </p>

      <p
        className="font-sans-ui mt-6 text-[15px] leading-relaxed md:text-base"
        style={{ color: mutedColor }}
      >
        {milestone.bodyEn}
      </p>
      <p
        className="font-telugu mt-3 text-lg leading-relaxed md:text-xl"
        style={{ color: teluguColor, opacity: 0.9 }}
      >
        {milestone.bodyTe}
      </p>
    </>
  );
}

/* ---------------- Timeline with drawn line ---------------- */
function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 30%", "end 70%"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });
  const scaleY = useTransform(smooth, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative">
      {/* Base dim track — spans the full timeline height */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 bottom-0 z-10 w-px left-4 md:left-1/2 md:-translate-x-1/2"
        style={{ background: "rgba(120,100,80,0.22)" }}
      />
      {/* Terracotta drawn line — scaleY tied to scroll */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-0 bottom-0 z-10 w-[2px] origin-top left-4 -translate-x-1/2 md:left-1/2"
        style={{
          scaleY,
          background: `linear-gradient(180deg, ${TERRA}, ${AMBER})`,
          boxShadow: `0 0 14px ${TERRA}88`,
        }}
      />

      {MILESTONES.map((m, i) => (
        <MilestoneNode key={m.titleEn} milestone={m} index={i} />
      ))}
    </div>
  );
}

/* ---------------- Special Dates ---------------- */
const SPECIAL_DATES: {
  name: string;
  date: string;
  icon: "cake" | "heart";
}[] = [
  { name: "Apparao", date: "Born 01 Jan 1976", icon: "cake" },
  { name: "Bharathi", date: "Born 04 Apr 1982", icon: "cake" },
  { name: "Married", date: "25 Apr 1999", icon: "heart" },
  { name: "Sai", date: "Born 14 Dec 2000", icon: "cake" },
  { name: "Raju", date: "Born 07 Dec 2004", icon: "cake" },
];

function SpecialDates() {
  return (
    <section
      className="relative w-full overflow-hidden px-6 py-28 md:px-10 md:py-36"
      style={{ background: CREAM, color: "#2A231C" }}
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex items-center gap-4"
        >
          <span
            className="font-sans-ui text-[0.65rem] font-semibold uppercase tracking-[0.32em]"
            style={{ color: TERRA }}
          >
            Special Dates · ప్రత్యేక తేదీలు
          </span>
          <span
            className="h-px flex-1 max-w-[120px]"
            style={{ background: "rgba(42,35,28,0.2)" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SPECIAL_DATES.map((d, i) => {
            const Icon = d.icon === "cake" ? Cake : Heart;
            return (
              <motion.div
                key={d.name + d.date}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex items-center gap-4 rounded-2xl border p-5"
                style={{
                  background: "rgba(255,255,255,0.65)",
                  borderColor: "rgba(42,35,28,0.1)",
                  boxShadow: "0 20px 40px -30px rgba(23,19,15,0.25)",
                }}
              >
                <div
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-transform duration-500 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(194,94,58,0.15), rgba(221,162,74,0.15))",
                    color: TERRA,
                  }}
                >
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <p
                    className="font-serif-display text-lg leading-none tracking-tight"
                    style={{ color: "#2A231C" }}
                  >
                    {d.name}
                  </p>
                  <p
                    className="font-sans-ui mt-1 text-[11px] uppercase tracking-[0.12em]"
                    style={{ color: "rgba(42,35,28,0.68)" }}
                  >
                    {d.date}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Closing ---------------- */
function Closing() {
  return (
    <section
      className="relative w-full overflow-hidden px-6 py-32 md:px-10 md:py-40"
      style={{ background: INK, color: CREAM }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "var(--grain-url)",
          opacity: 0.25,
          mixBlendMode: "overlay",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(221,162,74,0.14) 0%, transparent 65%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <p
          className="font-serif-display text-4xl italic leading-[1.15] tracking-tight md:text-6xl"
          style={{ color: AMBER }}
        >
          And the journey continues…
        </p>
        <p
          className="font-telugu mt-6 text-xl md:text-2xl"
          style={{ color: "rgba(244,237,225,0.78)" }}
        >
          ప్రయాణం ఇంకా కొనసాగుతోంది…
        </p>

        <div className="mt-14">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-semibold tracking-tight transition-all hover:scale-[1.02] hover:shadow-[0_20px_50px_-15px_rgba(194,94,58,0.55)]"
            style={{
              background: TERRA,
              color: "#FBF4E6",
              boxShadow: "0 15px 40px -18px rgba(194,94,58,0.5)",
            }}
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            <span>Back to Home</span>
            <span
              className="font-telugu text-[13px] opacity-80"
              style={{ color: AMBER }}
            >
              · తిరిగి
            </span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- Page ---------------- */
function JourneyPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full overflow-x-hidden"
    >
      {/* First visit to /journey (direct or via navigation): block until
          every journey image is ready, so the timeline appears complete. */}
      <LoadingIntro
        id="journey"
        images={[...JOURNEY_CRITICAL_IMAGES, ...JOURNEY_WARM_IMAGES]}
      />
      <PageProgress />
      {/* Shared navbar so the menu (and mobile hamburger) works here too */}
      <Navbar />
      <main>
        <Hero />
        <Timeline />
        <SpecialDates />
        <Closing />
      </main>
    </motion.div>
  );
}