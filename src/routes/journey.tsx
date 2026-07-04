import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Journey from "@/components/Journey";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Their Journey — Apparao ❤ Bharathi" },
      {
        name: "description",
        content:
          "Walk through every milestone — from their wedding day to today. A cinematic timeline of Apparao and Bharathi's life together.",
      },
      { property: "og:title", content: "Their Journey — Apparao ❤ Bharathi" },
      {
        property: "og:description",
        content:
          "A cinematic timeline of Apparao and Bharathi's life together — every milestone, quietly told.",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: JourneyPage,
});

function JourneyPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full overflow-x-hidden"
    >
      <ScrollProgress />
      <Navbar />
      <main>
        <div
          className="w-full px-6 pt-32 md:px-10 md:pt-40"
          style={{ background: "#F4EDE1" }}
        >
          <div className="mx-auto max-w-6xl">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.28em] transition-opacity hover:opacity-70"
              style={{ color: "#C25E3A" }}
            >
              <ArrowLeft
                size={14}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back home · తిరిగి
            </Link>
          </div>
        </div>
        <Journey />
        <Footer />
      </main>
    </motion.div>
  );
}