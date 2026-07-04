import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Section
          id="work"
          eyebrow="Chapter One"
          titleEn="Their Work"
          titleTe="వారి పని"
          tone="warm"
        />
        <Section
          id="bond"
          eyebrow="Chapter Two"
          titleEn="Their Bond"
          titleTe="వారి అనుబంధం"
          tone="emerald"
        />
        <Section
          id="journey"
          eyebrow="Chapter Three"
          titleEn="Journey"
          titleTe="ప్రయాణం"
          tone="warm"
        />
        <Section
          id="family"
          eyebrow="Chapter Four"
          titleEn="Family"
          titleTe="కుటుంబం"
          tone="emerald"
        />
        <Section
          id="gallery"
          eyebrow="Chapter Five"
          titleEn="Gallery"
          titleTe="గ్యాలరీ"
          tone="warm"
        />
        <Footer />
      </main>
    </div>
  );
}
