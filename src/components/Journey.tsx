import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";
import SmartImage from "./SmartImage";
import { IMAGES } from "@/lib/images";
import { Cake, Heart } from "lucide-react";

const TERRA = "#C25E3A";
const AMBER = "#DDA24A";
const INK = "#17130F";
const TEXT = "#2A231C";
const MUTED = "rgba(42,35,28,0.68)";

type Milestone = {
  year: string;
  date: string;
  titleEn: string;
  titleTe: string;
  bodyEn: string;
  photos: { src: string; alt: string }[];
};

const MILESTONES: Milestone[] = [
  {
    year: "1999",
    date: "25 April 1999",
    titleEn: "They Marry",
    titleTe: "వివాహం",
    bodyEn: "Two families become one on a warm April morning.",
    photos: [IMAGES.wedding],
  },
  {
    year: "2000",
    date: "14 December 2000",
    titleEn: "Sai is Born",
    titleTe: "సాయి జననం",
    bodyEn: "Their first blessing — a daughter, and a whole new world.",
    photos: [IMAGES.saiBaby],
  },
  {
    year: "2004",
    date: "07 December 2004",
    titleEn: "Raju is Born",
    titleTe: "రాజు జననం",
    bodyEn: "Their family complete — a son, and a fuller kind of joy.",
    photos: [IMAGES.rajuBaby],
  },
  {
    year: "…",
    date: "The years between",
    titleEn: "Growing Up Together",
    titleTe: "పెరుగుతూ…",
    bodyEn: "Years of school runs, festivals, small victories, and quiet laughter.",
    photos: [IMAGES.childhood1, IMAGES.childhood2],
  },
  {
    year: "Today",
    date: "Now",
    titleEn: "Today",
    titleTe: "నేడు",
    bodyEn: "The family they built — still growing, still choosing each other, still in love.",
    photos: [IMAGES.familyRecent],
  },
];

const BIRTHDAYS = [
  { name: "Apparao", date: "01 Jan 1976", icon: "cake" as const },
  { name: "Bharathi", date: "04 Apr 1982", icon: "cake" as const },
  { name: "Sai", date: "14 Dec 2000", icon: "heart" as const },
  { name: "Raju", date: "07 Dec 2004", icon: "heart" as const },
];

function TimelineNode({
  milestone,
  index,
}: {
  milestone: Milestone;
  index: number;
}) {
  const isRight = index % 2 === 1; // desktop side
  return (
    <div className="relative md:grid md:grid-cols-2 md:gap-16">
      {/* Dot on the line */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-6 z-10 left-4 -translate-x-1/2 md:left-1/2"
        aria-hidden
      >
        <span
          className="block h-3.5 w-3.5 rounded-full"
          style={{
            background: AMBER,
            boxShadow: `0 0 0 6px rgba(221,162,74,0.15), 0 0 20px rgba(221,162,74,0.7)`,
          }}
        />
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isRight ? 60 : -60, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`relative pl-12 md:pl-0 ${
          isRight ? "md:col-start-2" : "md:col-start-1"
        } ${isRight ? "md:pl-8" : "md:pr-8 md:text-right"}`}
      >
        <div
          className={`rounded-2xl border p-5 backdrop-blur-sm md:p-6 ${
            isRight ? "" : "md:ml-auto"
          }`}
          style={{
            background: "rgba(255,255,255,0.65)",
            borderColor: "rgba(42,35,28,0.1)",
            boxShadow: "0 20px 50px -30px rgba(23,19,15,0.25)",
            maxWidth: "520px",
          }}
        >
          <span
            className="font-sans-ui text-[0.65rem] font-semibold uppercase tracking-[0.32em]"
            style={{ color: TERRA }}
          >
            {milestone.date}
          </span>
          <h3
            className="font-serif-display mt-2 text-3xl leading-tight tracking-tight md:text-4xl"
            style={{ color: TEXT }}
          >
            {milestone.titleEn}
          </h3>
          <p
            className="font-telugu mt-1 text-xl md:text-2xl"
            style={{ color: TERRA }}
          >
            {milestone.titleTe}
          </p>
          <p
            className="font-sans-ui mt-3 text-[15px] leading-relaxed md:text-base"
            style={{ color: MUTED }}
          >
            {milestone.bodyEn}
          </p>

          {milestone.photos.length > 0 && (
            <div
              className={`mt-5 grid gap-3 ${
                milestone.photos.length > 1 ? "grid-cols-2" : "grid-cols-1"
              }`}
            >
              {milestone.photos.map((p) => (
                <div
                  key={p.src}
                  className="overflow-hidden rounded-xl"
                  style={{
                    aspectRatio: milestone.photos.length > 1 ? "1 / 1" : "16 / 10",
                    boxShadow: "0 20px 40px -25px rgba(23,19,15,0.35)",
                  }}
                >
                  <SmartImage
                    src={p.src}
                    alt={p.alt}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.05]"
                  />
                </div>
              ))}
            </div>
          )}

          <span
            className="font-serif-display mt-4 block text-xs uppercase tracking-[0.35em] opacity-50"
            style={{ color: TEXT }}
          >
            {milestone.year}
          </span>
        </div>
      </motion.div>
    </div>
  );
}

function BirthdayCard({
  name,
  date,
  icon,
  index,
}: {
  name: string;
  date: string;
  icon: "cake" | "heart";
  index: number;
}) {
  const Icon = icon === "cake" ? Cake : Heart;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group flex items-center gap-4 rounded-2xl border p-5"
      style={{
        background: "rgba(255,255,255,0.55)",
        borderColor: "rgba(42,35,28,0.1)",
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
          style={{ color: TEXT }}
        >
          {name}
        </p>
        <p
          className="font-sans-ui mt-1 truncate text-[11px] uppercase tracking-[0.28em]"
          style={{ color: MUTED }}
        >
          {date}
        </p>
      </div>
    </motion.div>
  );
}

function ChildContainer({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export default function Journey() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 60%", "end 40%"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });
  const height = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="journey"
      className="relative w-full scroll-mt-24 overflow-hidden px-6 py-28 md:px-10 md:py-40"
      style={{ background: "#F4EDE1", color: TEXT }}
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
        {/* Header */}
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
              The Journey · ప్రయాణం
            </span>
            <span
              className="h-px flex-1 max-w-[120px]"
              style={{ background: "rgba(42,35,28,0.2)" }}
            />
          </div>
          <h2 className="font-serif-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            From Two, A Family
          </h2>
          <p
            className="font-telugu mt-4 text-2xl md:text-3xl"
            style={{ color: TERRA }}
          >
            ప్రయాణం
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mt-24 md:mt-32">
          {/* Track (dim base line) */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 bottom-0 w-px left-4 md:left-1/2 md:-translate-x-1/2"
            style={{ background: "rgba(42,35,28,0.12)" }}
          />
          {/* Progress line — scroll-linked */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute top-0 w-[2px] left-4 -translate-x-1/2 md:left-1/2"
            style={{
              height,
              background: `linear-gradient(180deg, ${TERRA}, ${AMBER})`,
              boxShadow: `0 0 12px ${TERRA}66`,
            }}
          />

          <div className="flex flex-col gap-20 md:gap-28">
            {MILESTONES.map((m, i) => (
              <ChildContainer key={m.titleEn}>
                <TimelineNode milestone={m} index={i} />
              </ChildContainer>
            ))}
          </div>
        </div>

        {/* Special Dates band */}
        <div className="mt-28 md:mt-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex items-center gap-4"
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BIRTHDAYS.map((b, i) => (
              <BirthdayCard key={b.name} {...b} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}