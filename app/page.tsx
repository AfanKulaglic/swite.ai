import Hero from "@/components/hero/Hero";
import FeaturesShowcase from "@/components/home/FeaturesShowcase";
import WorkflowSection from "@/components/home/WorkflowSection";
import UseCasesGrid from "@/components/home/UseCasesGrid";
import SocialProof from "@/components/home/SocialProof";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section - Enterprise Positioning */}
      <section className="h-screen flex items-center justify-center">
        <Hero />
      </section>
      
      {/* Social Proof - Build Trust Immediately */}
      <section className="py-24 bg-gradient-to-b from-black via-black/95 to-black">
        <SocialProof />
      </section>
      
      {/* Features Showcase - Demonstrate Technical Excellence */}
      <section className="py-24 bg-black">
        <FeaturesShowcase />
      </section>
      
      {/* Use Cases - Show Industry Versatility */}
      <section className="py-24 bg-gradient-to-b from-black via-black/95 to-black">
        <UseCasesGrid />
      </section>
      
      {/* Workflow - Prove Efficiency & ROI */}
      <section className="py-24 bg-black">
        <WorkflowSection />
      </section>
      
      {/* Final CTA - Convert */}
      <section className="py-32 bg-gradient-to-b from-black to-black/90">
        <CTASection />
      </section>
    </main>
  );
}
