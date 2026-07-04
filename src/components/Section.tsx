import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  titleEn: string;
  titleTe: string;
  children?: ReactNode;
  tone?: "ivory" | "emerald" | "warm";
}

export default function Section({
  id,
  eyebrow,
  titleEn,
  titleTe,
  children,
  tone = "ivory",
}: SectionProps) {
  const bg =
    tone === "emerald"
      ? "linear-gradient(180deg, #0E5A43 0%, #0A3D2E 100%)"
      : tone === "warm"
      ? "linear-gradient(180deg, #FBF4E6 0%, #f6ecd4 100%)"
      : "transparent";
  const fg = tone === "emerald" ? "#FBF4E6" : "#2B211C";
  const sub = tone === "emerald" ? "#f0dfa8" : "#6b5d52";

  return (
    <section
      id={id}
      className="relative w-full scroll-mt-20 px-5 py-24 md:px-10 md:py-32"
      style={{ background: bg, color: fg }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        {eyebrow && (
          <p
            className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.35em]"
            style={{ color: "#C9A24B" }}
          >
            {eyebrow}
          </p>
        )}
        <div className="gold-divider mb-6" aria-hidden />
        <h2 className="font-serif-display text-4xl leading-tight md:text-5xl">
          {titleEn}
        </h2>
        <p
          className="font-telugu mt-3 text-2xl md:text-3xl"
          style={{ color: tone === "emerald" ? "#D4AF37" : "#0E5A43" }}
        >
          {titleTe}
        </p>
        <div className="gold-divider mt-6" aria-hidden />

        <div
          className="mx-auto mt-12 max-w-xl rounded-3xl border p-8 md:p-10"
          style={{
            borderColor: "rgba(201,162,75,0.4)",
            background:
              tone === "emerald"
                ? "rgba(251,244,230,0.05)"
                : "rgba(255,255,255,0.6)",
            boxShadow: "0 10px 40px -12px rgba(14, 90, 67, 0.22)",
            backdropFilter: "blur(4px)",
          }}
        >
          {children ?? (
            <p className="italic" style={{ color: sub }}>
              Coming soon — a chapter of their story lives here.
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
}