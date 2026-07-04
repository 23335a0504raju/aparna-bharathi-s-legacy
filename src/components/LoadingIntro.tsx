import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const INK = "#17130F";
const CREAM = "#F4EDE1";
const TERRA = "#C25E3A";

export default function LoadingIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setShow(false), 2200);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[90] grid place-items-center"
          style={{ background: INK }}
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
                "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(194,94,58,0.18) 0%, transparent 60%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center"
          >
            <motion.span
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: [0.7, 1.15, 1], opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl"
              style={{ color: TERRA }}
            >
              ❤
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="font-sans-ui mt-5 flex items-center gap-3 text-sm font-medium tracking-tight md:text-base"
              style={{ color: CREAM }}
            >
              <span>Apparao</span>
              <span style={{ color: TERRA }}>❤</span>
              <span>Bharathi</span>
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 h-px w-24 origin-left"
              style={{ background: TERRA }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}