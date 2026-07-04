import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative w-full overflow-hidden px-6 py-24 md:px-10 md:py-32"
      style={{ background: "#17130F", color: "#F4EDE1" }}
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto flex max-w-3xl flex-col items-start"
      >
        <span
          className="font-sans-ui text-[0.65rem] font-semibold uppercase tracking-[0.32em]"
          style={{ color: "#C25E3A" }}
        >
          In loving memory
        </span>
        <h3 className="mt-6 font-serif-display text-4xl leading-[1.05] md:text-6xl">
          Your love lives on in every heartbeat of this family.
        </h3>
        <p
          className="font-telugu mt-4 text-xl md:text-2xl"
          style={{ color: "#DDA24A" }}
        >
          మీ ప్రేమ ఎప్పటికీ మా హృదయాలలో
        </p>
        <div
          className="mt-14 h-px w-full"
          style={{ background: "rgba(244,237,225,0.15)" }}
        />
        <div className="mt-6 flex w-full flex-col items-start justify-between gap-2 font-sans-ui text-xs uppercase tracking-[0.28em] opacity-60 md:flex-row md:items-center">
          <span>Apparao ❤ Bharathi</span>
          <span>With love, from your children</span>
        </div>
      </motion.div>
    </footer>
  );
}