import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const toTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
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
          With gratitude
        </span>
        <h3 className="mt-6 font-serif-display text-4xl leading-[1.05] md:text-6xl">
          Made with <span style={{ color: "#C25E3A" }}>❤</span> for Amma &amp; Nanna.
        </h3>
        <p
          className="font-telugu mt-4 text-xl md:text-2xl"
          style={{ color: "#DDA24A" }}
        >
          అమ్మ &amp; నాన్న కోసం ❤ తో
        </p>
        <div
          className="mt-14 h-px w-full"
          style={{ background: "rgba(244,237,225,0.15)" }}
        />
        <div className="mt-6 grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <div className="min-w-0 font-sans-ui text-[11px] uppercase tracking-[0.28em] opacity-60">
            <span className="truncate">Apparao ❤ Bharathi · Since 1999</span>
          </div>
          <button
            onClick={toTop}
            aria-label="Back to top"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] transition-all hover:scale-[1.03]"
            style={{
              borderColor: "rgba(244,237,225,0.2)",
              color: "#F4EDE1",
              background: "rgba(244,237,225,0.05)",
            }}
          >
            <ArrowUp
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
            <span>Top</span>
          </button>
        </div>
      </motion.div>
    </footer>
  );
}