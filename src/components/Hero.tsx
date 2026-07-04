import { motion } from "framer-motion";

const MandalaSVG = ({ className = "", style = {} as React.CSSProperties }) => (
  <svg viewBox="0 0 200 200" className={className} style={style} aria-hidden>
    <g fill="none" stroke="currentColor" strokeWidth="0.6">
      <circle cx="100" cy="100" r="90" />
      <circle cx="100" cy="100" r="72" />
      <circle cx="100" cy="100" r="54" />
      <circle cx="100" cy="100" r="36" />
      <circle cx="100" cy="100" r="18" />
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i * Math.PI) / 8;
        return (
          <line
            key={i}
            x1={100 + Math.cos(a) * 18}
            y1={100 + Math.sin(a) * 18}
            x2={100 + Math.cos(a) * 90}
            y2={100 + Math.sin(a) * 90}
          />
        );
      })}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        const cx = 100 + Math.cos(a) * 54;
        const cy = 100 + Math.sin(a) * 54;
        return <circle key={i} cx={cx} cy={cy} r="10" />;
      })}
    </g>
  </svg>
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 py-24"
      style={{ background: "var(--gradient-hero)" }}
    >
      <motion.div
        initial={{ opacity: 0, rotate: -20, scale: 0.9 }}
        animate={{ opacity: 0.25, rotate: 0, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 grid place-items-center"
        style={{ color: "#C79A3B" }}
      >
        <MandalaSVG className="h-[120vmin] w-[120vmin]" />
      </motion.div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-40 -top-40 hidden opacity-20 md:block"
        style={{ color: "#6E1423" }}
      >
        <MandalaSVG className="h-[500px] w-[500px]" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[0.7rem] font-medium uppercase tracking-[0.45em]"
          style={{ color: "#C79A3B" }}
        >
          A Family Tribute · కుటుంబ నివాళి
        </motion.p>

        <div className="gold-divider my-8" aria-hidden />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-serif-display text-5xl leading-[1.05] md:text-7xl lg:text-8xl"
          style={{ color: "#6E1423" }}
        >
          Apparao
          <span
            className="mx-3 inline-block align-middle text-4xl md:text-5xl"
            style={{ color: "#D4AF37" }}
          >
            ❤
          </span>
          Bharathi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-telugu mt-6 text-3xl md:text-4xl"
          style={{ color: "#6E1423" }}
        >
          అప్పారావు ❤ భారతి
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mx-auto mt-8 max-w-xl text-base italic leading-relaxed md:text-lg"
          style={{ color: "#6b5d52" }}
        >
          A lifetime of love, work, and quiet devotion — remembered by the
          children they raised with the whole of their hearts.
        </motion.p>

        <div className="gold-divider mt-10" aria-hidden />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-16 flex flex-col items-center"
        >
          <span
            className="text-[0.65rem] uppercase tracking-[0.4em]"
            style={{ color: "#6E1423", opacity: 0.6 }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-3 h-10 w-px"
            style={{ background: "#C79A3B" }}
          />
        </motion.div>
      </div>
    </section>
  );
}