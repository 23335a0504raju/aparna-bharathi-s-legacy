import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import TheirWork from "@/components/TheirWork";
import TheirBond from "@/components/TheirBond";
import JourneyTeaser from "@/components/JourneyTeaser";
import Family from "@/components/Family";
import Gallery from "@/components/Gallery";
import LoadingIntro from "@/components/LoadingIntro";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <LoadingIntro />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TheirWork />
        <TheirBond />
        <JourneyTeaser />
        <Family />
        <Gallery />
        <Footer />
      </main>
    </div>
  );
}
