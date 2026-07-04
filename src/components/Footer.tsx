import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative w-full px-5 py-16 text-center md:px-10"
      style={{
        background: "linear-gradient(180deg, #4a0d17 0%, #2B211C 100%)",
        color: "#FBF4E6",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-2xl"
      >
        <div className="gold-divider mb-6" aria-hidden />
        <p className="font-serif-display text-2xl italic md:text-3xl">
          Apparao <span style={{ color: "#D4AF37" }}>❤</span> Bharathi
        </p>
        <p
          className="font-telugu mt-2 text-lg"
          style={{ color: "#D4AF37" }}
        >
          మీ ప్రేమ ఎప్పటికీ మా హృదయాలలో
        </p>
        <p className="mt-4 text-sm italic opacity-80">
          Your love lives on in every heartbeat of this family.
        </p>
        <div className="gold-divider mt-8" aria-hidden />
        <p className="mt-6 text-xs uppercase tracking-[0.35em] opacity-60">
          With love, from your children
        </p>
      </motion.div>
    </footer>
  );
}