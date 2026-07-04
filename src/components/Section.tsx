import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  titleEn: string;
  titleTe: string;
  children?: ReactNode;
  tone?: "cream" | "ink";
}

export default function Section({
  id,
  eyebrow,
  titleEn,
  titleTe,
  children,
  tone = "cream",
}: SectionProps) {
  const isInk = tone === "ink";
  const bg = isInk ? "#17130F" : "#F4EDE1";
  const fg = isInk ? "#F4EDE1" : "#2A231C";
  const sub = isInk ? "rgba(244,237,225,0.65)" : "rgba(42,35,28,0.65)";
  const teluguColor = isInk ? "#DDA24A" : "#C25E3A";

  return (
    <section
      id={id}
      className="relative w-full scroll-mt-24 overflow-hidden px-6 py-28 md:px-10 md:py-40"
      style={{ background: bg, color: fg }}
    >
      {/* subtle grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "var(--grain-url)",
          opacity: isInk ? 0.25 : 0.18,
          mixBlendMode: "overlay",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-3xl"
      >
        {eyebrow && (
          <div className="mb-8 flex items-center gap-4">
            <span
              className="font-sans-ui text-[0.65rem] font-semibold uppercase tracking-[0.32em]"
              style={{ color: "#C25E3A" }}
            >
              {eyebrow}
            </span>
            <span
              className="h-px flex-1"
              style={{
                background: isInk
                  ? "rgba(244,237,225,0.15)"
                  : "rgba(42,35,28,0.15)",
              }}
            />
          </div>
        )}

        <h2 className="font-serif-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
          {titleEn}
        </h2>
        <p
          className="font-telugu mt-4 text-2xl md:text-3xl"
          style={{ color: teluguColor }}
        >
          {titleTe}
        </p>

        <div className="mt-12 max-w-xl">
          {children ?? (
            <p className="font-sans-ui text-base leading-relaxed" style={{ color: sub }}>
              Coming soon — a chapter of their story lives here.
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
}