import { motion } from "framer-motion";
import SmartImage from "./SmartImage";
import { FAMILY_PHOTOS } from "@/lib/images";

const TERRA = "#C25E3A";
const AMBER = "#DDA24A";
const CREAM = "#F4EDE1";

export default function Family() {
  const [featured, ...grid] = FAMILY_PHOTOS;

  return (
    <section
      id="family"
      className="relative w-full scroll-mt-24 overflow-hidden px-6 py-28 md:px-10 md:py-40"
      style={{ background: "#17130F", color: CREAM }}
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
            "radial-gradient(ellipse 55% 45% at 85% 20%, rgba(194,94,58,0.15) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
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
              Our Family · కుటుంబం
            </span>
            <span
              className="h-px flex-1 max-w-[120px]"
              style={{ background: "rgba(244,237,225,0.18)" }}
            />
          </div>
          <h2 className="font-serif-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            The Life They Built
          </h2>
          <p
            className="font-telugu mt-4 text-2xl md:text-3xl"
            style={{ color: AMBER }}
          >
            కుటుంబం
          </p>

          <p
            className="font-sans-ui mt-10 max-w-2xl text-base leading-relaxed md:text-[17px]"
            style={{ color: "rgba(244,237,225,0.78)" }}
          >
            Amma, Nanna — everything we are, you gave us. Thank you for a
            lifetime of quiet sacrifice and endless love.
            <span className="mt-2 block opacity-70">— Sai &amp; Raju</span>
          </p>
          <p
            className="font-telugu mt-6 max-w-2xl text-lg leading-relaxed md:text-xl"
            style={{ color: "rgba(221,162,74,0.85)" }}
          >
            అమ్మా, నాన్నా — మేము ఏమైనా, అది మీ వల్లే. మీ ప్రేమకు, త్యాగానికి కృతజ్ఞతలు.
            <span className="mt-2 block opacity-80">— సాయి &amp; రాజు</span>
          </p>
        </motion.div>

        {/* Featured photo */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6 }}
          className="group mt-16 overflow-hidden rounded-2xl md:mt-20"
          style={{
            aspectRatio: "21 / 9",
            boxShadow: "0 40px 80px -30px rgba(0,0,0,0.6)",
            outline: "1px solid rgba(244,237,225,0.08)",
          }}
        >
          <SmartImage
            src={featured.src}
            alt={featured.alt}
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
          />
        </motion.div>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-2 gap-3 md:mt-8 md:grid-cols-3 md:gap-6">
          {grid.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -5 }}
              className="group overflow-hidden rounded-2xl"
              style={{
                aspectRatio: "4 / 5",
                boxShadow: "0 30px 60px -35px rgba(0,0,0,0.6)",
                outline: "1px solid rgba(244,237,225,0.08)",
              }}
            >
              <SmartImage
                src={p.src}
                alt={p.alt}
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}