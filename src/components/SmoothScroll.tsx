import { useEffect } from "react";
import Lenis from "lenis";

// Exposed so navigation can scroll through Lenis. Calling native
// scrollIntoView while Lenis runs makes the two fight for scroll position —
// Lenis overrides it every frame and the page barely moves.
let lenisInstance: Lenis | null = null;

export function scrollToElement(el: HTMLElement) {
  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset: 0, duration: 1.1 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 * Site-wide buttery smooth scrolling via Lenis.
 * Client-only: initialized in an effect, cleaned up on unmount.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisInstance = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return null;
}
