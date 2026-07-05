import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { preloadImages, warmImages } from "@/lib/preload";

const INK = "#17130F";
const CREAM = "#F4EDE1";
const TERRA = "#C25E3A";

const INTRO_PHOTO = {
  src: "/images/gallery-1.jpg",
  alt: "Apparao and Bharathi on their wedding day, 25 April 1999",
};

// Module-scoped so the intro shows once per full page load, but is skipped
// on client-side navigations (e.g. Home -> Journey and back).
let introAlreadyShown = false;

interface LoadingIntroProps {
  /** Images that must be loaded before the loader exits. */
  images?: string[];
  /** Images to warm quietly in the background once the loader is gone. */
  warmAfter?: string[];
  /** Minimum time the intro stays visible, so the animation can play. */
  minMs?: number;
  /** Hard cap — never keep the visitor waiting longer than this. */
  maxMs?: number;
}

export default function LoadingIntro({
  images = [],
  warmAfter = [],
  minMs = 2200,
  maxMs = 8000,
}: LoadingIntroProps) {
  // Server render + first client render both show the intro on a fresh page
  // load; on client-side navigation the flag is already set and we skip it.
  const [show, setShow] = useState(
    () => typeof window === "undefined" || !introAlreadyShown
  );
  const [progress, setProgress] = useState(images.length === 0 ? 1 : 0);
  const [photoReady, setPhotoReady] = useState(false);
  const warmRef = useRef(warmAfter);
  warmRef.current = warmAfter;
  const ownsIntroRef = useRef(false);

  useEffect(() => {
    // ownsIntroRef keeps dev strict-mode's effect re-run from treating our
    // own first run as "already shown" and hiding the intro instantly.
    if (introAlreadyShown && !ownsIntroRef.current) {
      // Skipped intro (client-side nav) — still warm this page's images.
      setShow(false);
      warmImages([...images, ...warmRef.current]);
      return;
    }
    introAlreadyShown = true;
    ownsIntroRef.current = true;

    let done = false;
    let minElapsed = false;
    let imagesReady = images.length === 0;

    const finish = () => {
      if (done) return;
      done = true;
      setProgress(1);
      setShow(false);
      warmImages(warmRef.current);
    };
    const tryFinish = () => {
      if (minElapsed && imagesReady) finish();
    };

    const minTimer = window.setTimeout(() => {
      minElapsed = true;
      tryFinish();
    }, minMs);
    // Never trap the visitor on a slow connection — skeletons take over.
    const maxTimer = window.setTimeout(finish, maxMs);

    preloadImages(images, (loaded, total) => {
      if (!done) setProgress(loaded / total);
    }).then(() => {
      imagesReady = true;
      tryFinish();
    });

    return () => {
      window.clearTimeout(minTimer);
      window.clearTimeout(maxTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Lock scrolling while the intro is up.
  useEffect(() => {
    if (!show) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [show]);

  const percent = Math.round(progress * 100);

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
          aria-busy="true"
          aria-label="Loading"
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
            {/* Wedding photo — softly framed, fades in as soon as it's ready */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-60 overflow-hidden rounded-2xl sm:w-72 md:w-80"
              style={{
                // matches gallery-1.jpg's real 1312x880 ratio so nothing is cropped
                aspectRatio: "1312 / 880",
                boxShadow:
                  "0 30px 70px -25px rgba(0,0,0,0.7), 0 0 0 1px rgba(244,237,225,0.1)",
                background: "rgba(244,237,225,0.05)",
              }}
            >
              <motion.img
                ref={(el: HTMLImageElement | null) => {
                  // cached images may finish before hydration attaches onLoad
                  if (el && el.complete && el.naturalWidth > 0) {
                    setPhotoReady(true);
                  }
                }}
                src={INTRO_PHOTO.src}
                alt={INTRO_PHOTO.alt}
                onLoad={() => setPhotoReady(true)}
                animate={{ opacity: photoReady ? 1 : 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="h-full w-full object-cover"
              />
              {/* Warm duotone wash to match the hero portraits */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(194,94,58,0.25) 0%, rgba(23,19,15,0.45) 100%)",
                  mixBlendMode: "multiply",
                }}
              />
            </motion.div>

            {/* Heart badge overlapping the photo's bottom edge */}
            <motion.span
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: [0.7, 1.15, 1], opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="-mt-4 grid h-9 w-9 place-items-center rounded-full text-base md:h-10 md:w-10"
              style={{
                color: CREAM,
                background: `radial-gradient(circle at 30% 30%, #ffb090, ${TERRA} 65%, #7a2f18 100%)`,
                boxShadow:
                  "0 0 20px rgba(194,94,58,0.6), 0 0 40px rgba(194,94,58,0.25)",
              }}
            >
              ❤
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="font-sans-ui mt-4 flex items-center gap-3 text-sm font-medium tracking-tight md:text-base"
              style={{ color: CREAM }}
            >
              <span>Apparao</span>
              <span style={{ color: TERRA }}>❤</span>
              <span>Bharathi</span>
            </motion.div>

            {/* Progress track — fills as the photos actually load */}
            <div
              className="mt-6 h-px w-40 overflow-hidden md:w-48"
              style={{ background: "rgba(244,237,225,0.15)" }}
            >
              <motion.div
                className="h-full origin-left"
                style={{ background: TERRA }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: Math.max(progress, 0.06) }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-sans-ui mt-4 text-[10px] font-medium uppercase tracking-[0.35em]"
              style={{ color: "rgba(244,237,225,0.55)" }}
            >
              Gathering memories · {percent}%
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
