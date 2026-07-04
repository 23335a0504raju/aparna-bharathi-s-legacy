import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Play, Pause } from "lucide-react";
import { useNavigate, useRouterState } from "@tanstack/react-router";

type NavLink =
  | { kind: "scroll"; id: string; label: string }
  | { kind: "route"; to: "/journey"; label: string };

const links: NavLink[] = [
  { kind: "scroll", id: "home", label: "Home" },
  { kind: "scroll", id: "their-work", label: "Their Work" },
  { kind: "scroll", id: "their-bond", label: "Their Bond" },
  { kind: "route", to: "/journey", label: "Journey" },
  { kind: "scroll", id: "family", label: "Family" },
  { kind: "scroll", id: "gallery", label: "Gallery" },
];

const INK = "#17130F";
const CREAM = "#F4EDE1";
const TERRA = "#C25E3A";

function smoothScroll(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => {});
      setPlaying(true);
    }
  };

  const handleScrollNav = (id: string) => {
    setOpen(false);
    if (pathname !== "/") {
      // Route home first, then scroll after navigation.
      navigate({ to: "/" }).then(() => {
        // Wait a tick for the home page to mount.
        setTimeout(() => smoothScroll(id), 60);
      });
      return;
    }
    smoothScroll(id);
  };

  const handleRouteNav = (to: "/journey") => {
    setOpen(false);
    navigate({ to });
  };

  // Text stays cream over the ink hero, and stays cream on the translucent ink bar after scroll.
  const textColor = CREAM;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl" : ""
      }`}
      style={{
        background: scrolled ? "rgba(23,19,15,0.72)" : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(244,237,225,0.08)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <button
          onClick={() => handleScrollNav("home")}
          className="font-sans-ui flex items-center gap-2 text-sm font-medium tracking-tight md:text-[15px]"
          style={{ color: textColor }}
        >
          <span>Apparao</span>
          <span style={{ color: TERRA }}>❤</span>
          <span>Bharathi</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const key = l.kind === "route" ? l.to : l.id;
            const onClick = () =>
              l.kind === "route" ? handleRouteNav(l.to) : handleScrollNav(l.id);
            return (
              <button
                key={key}
                onClick={onClick}
                className="group relative px-3 py-2 text-[13px] font-medium tracking-tight transition-opacity"
                style={{ color: textColor, opacity: 0.75 }}
              >
                <span className="transition-opacity group-hover:opacity-100">
                  {l.label}
                </span>
                <span
                  className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-px origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  style={{ background: TERRA }}
                />
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleMusic}
            aria-label={playing ? "Pause music" : "Play music"}
            className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border transition-all hover:scale-105"
            style={{
              borderColor: "rgba(244,237,225,0.2)",
              color: textColor,
              background: "rgba(244,237,225,0.05)",
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={playing ? "pause" : "play"}
                initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.6, rotate: 30 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 grid place-items-center"
              >
                {playing ? <Pause size={14} /> : <Play size={14} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <audio
            ref={audioRef}
            src="/audio/background-music.mp3"
            loop
            preload="none"
            aria-hidden
          />

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center rounded-full border md:hidden"
            style={{
              borderColor: "rgba(244,237,225,0.2)",
              color: textColor,
            }}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden backdrop-blur-xl md:hidden"
            style={{
              background: "rgba(23,19,15,0.92)",
              borderTop: "1px solid rgba(244,237,225,0.08)",
            }}
          >
            <div className="flex flex-col px-6 py-2">
              {links.map((l) => {
                const key = l.kind === "route" ? l.to : l.id;
                const onClick = () =>
                  l.kind === "route"
                    ? handleRouteNav(l.to)
                    : handleScrollNav(l.id);
                return (
                  <button
                    key={key}
                    onClick={onClick}
                    className="border-b py-3 text-left text-sm font-medium tracking-tight"
                    style={{
                      color: CREAM,
                      borderColor: "rgba(244,237,225,0.08)",
                    }}
                  >
                    {l.label}
                  </button>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}