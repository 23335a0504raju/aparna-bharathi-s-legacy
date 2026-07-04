import { motion } from "framer-motion";
import SmartImage from "./SmartImage";
import { IMAGES } from "@/lib/images";

const TERRA = "#C25E3A";
const AMBER = "#DDA24A";
const CREAM = "#F4EDE1";

const photos = [
  { ...IMAGES.couple1, span: "md:col-span-7 md:row-span-2", ratio: "4 / 5" },
  { ...IMAGES.couple2, span: "md:col-span-5", ratio: "4 / 3" },
  { ...IMAGES.couple3, span: "md:col-span-5", ratio: "1 / 1" },
  { ...IMAGES.couple4, span: "md:col-span-12", ratio: "16 / 9" },
];

export default function TheirBond() {
  return (
    <section
      id="their-bond"
      className="relative w-full scroll-mt-24 overflow-hidden px-6 py-28 md:px-10 md:py-40"
      style={{ background: "#17130F", color: CREAM }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "var(--grain-url)",
          opacity: 0.28,
          mixBlendMode: "overlay",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 15% 20%, rgba(194,94,58,0.14) 0%, transparent 60%)",
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
              Chapter Two · వారి అనుబంధం
            </span>
            <span
              className="h-px flex-1 max-w-[120px]"
              style={{ background: "rgba(244,237,225,0.18)" }}
            />
          </div>
          <h2 className="font-serif-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            Their Bond
          </h2>
          <p
            className="font-telugu mt-4 text-2xl md:text-3xl"
            style={{ color: AMBER }}
          >
            వారి అనుబంధం
          </p>

          <p
            className="font-sans-ui mt-10 max-w-2xl text-base leading-relaxed md:text-[17px]"
            style={{ color: "rgba(244,237,225,0.75)" }}
          >
            Theirs was an arranged marriage — two families joined, two strangers
            who chose each other every single day since. There was no grand love
            story at the start; they built one, quietly, through years of care.
          </p>
          <p
            className="font-telugu mt-4 max-w-2xl text-lg leading-relaxed md:text-xl"
            style={{ color: "rgba(221,162,74,0.85)" }}
          >
            వారిది పెద్దలు కుదిర్చిన వివాహం — రెండు కుటుంబాలు కలిశాయి, రెండు అపరిచితులు
            అప్పటి నుండి ప్రతిరోజూ ఒకరినొకరు ఎంచుకుంటూ వచ్చారు. మొదట గొప్ప ప్రేమకథ ఏమీ లేదు;
            సంవత్సరాల శ్రద్ధతో, నిశ్శబ్దంగా వారే ఒక ప్రేమకథను నిర్మించుకున్నారు.
          </p>
        </motion.div>

        {/* Photo collage */}
        <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
          {photos.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className={`group overflow-hidden rounded-2xl ${p.span}`}
              style={{
                boxShadow: "0 30px 60px -30px rgba(0,0,0,0.6)",
                outline: "1px solid rgba(244,237,225,0.08)",
              }}
            >
              <div
                className="w-full overflow-hidden"
                style={{ aspectRatio: p.ratio }}
              >
                <SmartImage
                  src={p.src}
                  alt={p.alt}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pull quote */}
        <motion.figure
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-28 max-w-3xl text-center md:mt-36"
        >
          <span
            aria-hidden
            className="font-serif-display absolute -top-8 left-1/2 -translate-x-1/2 text-6xl leading-none opacity-30 md:-top-10 md:text-8xl"
            style={{ color: TERRA }}
          >
            “
          </span>
          <blockquote
            className="font-serif-display text-3xl italic leading-[1.15] tracking-tight md:text-5xl"
            style={{ color: AMBER }}
          >
            Not love at first sight — love, chosen every day.
          </blockquote>
          <p
            className="font-telugu mt-6 text-xl md:text-2xl"
            style={{ color: "rgba(244,237,225,0.75)" }}
          >
            మొదటి చూపులో ప్రేమ కాదు — ప్రతిరోజూ ఎంచుకున్న ప్రేమ.
          </p>
        </motion.figure>
      </div>
    </section>
  );
}