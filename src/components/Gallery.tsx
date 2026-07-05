import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import SmartImage from "./SmartImage";
import { GALLERY_PHOTOS } from "@/lib/images";

const TERRA = "#C25E3A";
const AMBER = "#DDA24A";
const TEXT = "#2A231C";
const MUTED = "rgba(42,35,28,0.68)";

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? i : (i - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
      ),
    []
  );
  const next = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? i : (i + 1) % GALLERY_PHOTOS.length
      ),
    []
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, prev, next]);

  return (
    <section
      id="gallery"
      className="relative w-full scroll-mt-24 overflow-hidden px-6 py-28 md:px-10 md:py-40"
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
              Memories · గ్యాలరీ
            </span>
            <span
              className="h-px flex-1 max-w-[120px]"
              style={{ background: "rgba(42,35,28,0.2)" }}
            />
          </div>
          <h2 className="font-serif-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            Moments
          </h2>
          <p
            className="font-telugu mt-4 text-2xl md:text-3xl"
            style={{ color: TERRA }}
          >
            గ్యాలరీ
          </p>
          <p
            className="font-sans-ui mt-6 max-w-2xl text-[15px] leading-relaxed md:text-base"
            style={{ color: MUTED }}
          >
            A collection of moments — click any photo to open.
          </p>
        </motion.div>

        {/* Masonry via CSS columns */}
        <div className="mt-16 columns-2 gap-3 sm:columns-2 md:columns-3 md:gap-5 lg:columns-4">
          {GALLERY_PHOTOS.map((p, i) => (
            <motion.button
              key={p.src}
              type="button"
              onClick={() => setOpenIndex(i)}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: (i % 6) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group mb-3 block w-full overflow-hidden rounded-2xl md:mb-5"
              style={{
                boxShadow: "0 25px 55px -35px rgba(23,19,15,0.35)",
                outline: "1px solid rgba(42,35,28,0.08)",
              }}
              aria-label={`Open ${p.alt}`}
            >
              <SmartImage
                src={p.src}
                alt={p.alt}
                loading="lazy"
                skeletonTone="light"
                loadingAspect="4 / 5"
                className="block w-full transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-10"
            style={{ background: "rgba(11,9,7,0.94)" }}
            onClick={close}
          >
            {/* Close */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border transition hover:scale-105 md:right-8 md:top-8"
              style={{
                borderColor: "rgba(244,237,225,0.2)",
                color: "#F4EDE1",
                background: "rgba(244,237,225,0.05)",
              }}
            >
              <X size={16} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
              className="absolute left-2 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border transition hover:scale-105 md:left-8"
              style={{
                borderColor: "rgba(244,237,225,0.2)",
                color: "#F4EDE1",
                background: "rgba(244,237,225,0.05)",
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
              className="absolute right-2 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border transition hover:scale-105 md:right-8"
              style={{
                borderColor: "rgba(244,237,225,0.2)",
                color: "#F4EDE1",
                background: "rgba(244,237,225,0.05)",
              }}
            >
              <ChevronRight size={20} />
            </button>

            <motion.div
              key={openIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              // swipe left/right to browse photos
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(_, info) => {
                if (info.offset.x < -70) next();
                else if (info.offset.x > 70) prev();
              }}
              className="relative max-h-[85vh] max-w-[92vw] cursor-grab overflow-hidden rounded-xl active:cursor-grabbing md:max-w-[80vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <SmartImage
                src={GALLERY_PHOTOS[openIndex].src}
                alt={GALLERY_PHOTOS[openIndex].alt}
                className="max-h-[85vh] w-auto object-contain"
                wrapperClassName="max-h-[85vh]"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3 text-[11px] uppercase tracking-[0.28em]"
                style={{
                  color: "#F4EDE1",
                  background:
                    "linear-gradient(180deg, transparent, rgba(0,0,0,0.55))",
                }}
              >
                <span style={{ color: AMBER }}>{GALLERY_PHOTOS[openIndex].alt}</span>
                <span className="opacity-70">
                  {openIndex + 1} / {GALLERY_PHOTOS.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}