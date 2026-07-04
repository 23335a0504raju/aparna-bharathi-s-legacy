import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import TheirWork from "@/components/TheirWork";

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
        <Section
          id="bond"
          eyebrow="Chapter Two"
          titleEn="Their Bond"
          titleTe="వారి అనుబంధం"
          tone="ink"
        />
        <Section
          id="journey"
          eyebrow="Chapter Three"
          titleEn="Journey"
          titleTe="ప్రయాణం"
          tone="cream"
        />
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
