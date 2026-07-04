import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import TheirWork from "@/components/TheirWork";
import TheirBond from "@/components/TheirBond";
import JourneyTeaser from "@/components/JourneyTeaser";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TheirWork />
        <TheirBond />
        <JourneyTeaser />
        <Section
          id="family"
          eyebrow="Chapter Four"
          titleEn="Family"
          titleTe="కుటుంబం"
          tone="ink"
        />
        <Section
          id="gallery"
          eyebrow="Chapter Five"
          titleEn="Gallery"
          titleTe="గ్యాలరీ"
          tone="cream"
        />
        <Footer />
      </main>
    </div>
  );
}
