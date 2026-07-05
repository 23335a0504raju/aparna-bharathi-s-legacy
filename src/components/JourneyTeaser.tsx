import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const TERRA = "#C25E3A";
const AMBER = "#DDA24A";
const TEXT = "#2A231C";
const MUTED = "rgba(42,35,28,0.68)";

const MotionLink = motion.create(Link);

export default function JourneyTeaser() {
  return (
    <section
      id="journey-teaser"
      className="relative w-full overflow-hidden px-6 py-28 md:px-10 md:py-40"
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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 85% 30%, rgba(221,162,74,0.18) 0%, transparent 60%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto flex max-w-5xl flex-col items-start"
      >
        <div className="mb-8 flex items-center gap-4">
          <span
            className="font-sans-ui text-[0.65rem] font-semibold uppercase tracking-[0.32em]"
            style={{ color: TERRA }}
          >
            Chapter Three · ప్రయాణం
          </span>
          <span
            className="h-px flex-1 max-w-[120px]"
            style={{ background: "rgba(42,35,28,0.2)" }}
          />
        </div>

        <h2 className="font-serif-display text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
          Their Journey
        </h2>
        <p
          className="font-telugu mt-4 text-2xl md:text-4xl"
          style={{ color: TERRA }}
        >
          వారి ప్రయాణం
        </p>

        <p
          className="font-sans-ui mt-8 max-w-2xl text-base leading-relaxed md:text-[17px]"
          style={{ color: MUTED }}
        >
          From their wedding day to today — walk through every milestone.
        </p>
        <p
          className="font-telugu mt-3 max-w-2xl text-lg leading-relaxed md:text-xl"
          style={{ color: "rgba(194,94,58,0.85)" }}
        >
          వారి వివాహం నుండి నేటి వరకు — ప్రతి ముఖ్యమైన క్షణాన్ని చూడండి.
        </p>

        <div className="relative mt-12 inline-block max-w-full">
          {/* Hand-drawn arrow pointing at the button: draws itself in,
              then keeps nudging toward it. Hidden on very small screens. */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pointer-events-none absolute left-full top-1/2 z-10 ml-1.5 hidden w-[150px] -translate-y-[78%] sm:block"
          >
            <p
              className="font-serif-display mb-0.5 pl-11 text-[17px] italic leading-tight"
              style={{ color: TERRA, transform: "rotate(-5deg)" }}
            >
              Click here
              <span
                className="font-telugu block not-italic text-[12px]"
                style={{ color: "rgba(194,94,58,0.8)" }}
              >
                నొక్కండి
              </span>
            </p>
            <motion.svg
              viewBox="0 0 100 100"
              className="block w-[84px]"
              fill="none"
              animate={{ x: [0, -7, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* curved shaft — dives from the label down to the button edge */}
              <motion.path
                d="M74 4 C 96 30, 86 62, 20 72"
                stroke={TERRA}
                strokeWidth="3.2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
              />
              {/* arrowhead */}
              <motion.path
                d="M38 58 L17 73 L36 86"
                stroke={TERRA}
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.3, delay: 1.3 }}
              />
            </motion.svg>
          </motion.div>
          <MotionLink
            to="/journey"
            // Soft heartbeat ring radiating from the button's own edge —
            // stays perfectly aligned, unlike a separate halo element.
            animate={{
              boxShadow: [
                "0 15px 40px -18px rgba(194,94,58,0.5), 0 0 0 0 rgba(194,94,58,0.35)",
                "0 15px 40px -18px rgba(194,94,58,0.5), 0 0 0 14px rgba(194,94,58,0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              repeatDelay: 0.6,
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex max-w-full flex-wrap items-center gap-x-3 gap-y-1 rounded-2xl px-5 py-3.5 text-sm font-semibold tracking-tight sm:rounded-full sm:px-7 sm:py-4"
            style={{ background: TERRA, color: "#FBF4E6" }}
          >
            <span>Enter Their Journey</span>
            <span
              className="font-telugu text-[12px] opacity-80 sm:text-[13px]"
              style={{ color: AMBER }}
            >
              · ప్రయాణం చూడండి
            </span>
            <span className="inline-flex shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1.5">
              <ArrowRight size={16} />
            </span>
          </MotionLink>
        </div>
      </motion.div>
    </section>
  );
}