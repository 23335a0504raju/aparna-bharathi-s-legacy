import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Play, Pause } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "work", label: "Their Work" },
  { id: "bond", label: "Their Bond" },
  { id: "journey", label: "Journey" },
  { id: "family", label: "Family" },
  { id: "gallery", label: "Gallery" },
];

function smoothScroll(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [audio] = useState(() => {
    if (typeof Audio === "undefined") return null;
    const a = new Audio("/audio/background.mp3");
    a.loop = true;
    a.volume = 0.4;
    return a;
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMusic = () => {
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => {
        // Audio file not present yet — keep toggle state visual only
      });
      setPlaying(true);
    }
  };

  const handleNav = (id: string) => {
    setOpen(false);
    smoothScroll(id);
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md shadow-[0_6px_24px_-12px_rgba(0,0,0,0.4)]"
          : ""
      }`}
      style={{
        background: scrolled
          ? "linear-gradient(135deg, #6E1423 0%, #4a0d17 100%)"
          : "transparent",
        borderBottom: scrolled ? "1px solid #C79A3B" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <button
          onClick={() => handleNav("home")}
          className="group flex items-center gap-2 font-serif-display text-lg md:text-xl"
          style={{ color: scrolled ? "#FBF4E6" : "#6E1423" }}
        >
          <span className="italic tracking-wide">Apparao</span>
          <span style={{ color: "#D4AF37" }} className="text-base">
            ❤
          </span>
          <span className="italic tracking-wide">Bharathi</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNav(l.id)}
              className="relative rounded-full px-3 py-2 text-sm font-medium transition-colors hover:opacity-100"
              style={{
                color: scrolled ? "#FBF4E6" : "#2B211C",
                opacity: scrolled ? 0.9 : 0.85,
              }}
            >
              {l.label}
              <span
                className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 hover:scale-x-100"
                style={{ background: "#D4AF37" }}
              />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleMusic}
            aria-label={playing ? "Pause music" : "Play music"}
            className="grid h-10 w-10 place-items-center rounded-full border transition-all hover:scale-105"
            style={{
              borderColor: "#C79A3B",
              background: scrolled ? "rgba(251,244,230,0.08)" : "rgba(199,154,59,0.12)",
              color: scrolled ? "#FBF4E6" : "#6E1423",
            }}
          >
            {playing ? <Pause size={16} /> : <Play size={16} />}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full border md:hidden"
            style={{
              borderColor: "#C79A3B",
              color: scrolled ? "#FBF4E6" : "#6E1423",
            }}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
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
            className="overflow-hidden md:hidden"
            style={{
              background: "linear-gradient(135deg, #6E1423 0%, #4a0d17 100%)",
              borderTop: "1px solid #C79A3B",
            }}
          >
            <div className="flex flex-col px-6 py-4">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => handleNav(l.id)}
                  className="border-b border-white/10 py-3 text-left text-sm font-medium tracking-wide"
                  style={{ color: "#FBF4E6" }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}