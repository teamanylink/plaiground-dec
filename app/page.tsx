import HeroSection from "@/components/hero-section"
import BleedingCapitalSection from "@/components/bleeding-capital-section"
import ScaleRevenueSection from "@/components/scale-revenue-section"
import WhyChooseUsSection from "@/components/why-choose-us-section"
import CaseStudiesSection from "@/components/case-studies-section"
import ComparisonSection from "@/components/comparison-section"
import PricingSection from "@/components/pricing-section"
import FoundersSection from "@/components/founders-section"
import GuaranteesSection from "@/components/guarantees-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import LiquidBackground from "@/components/liquid-background"
import StickyCTA from "@/components/sticky-cta"

export default function Home() {
  return (
    <>
      <div className="noise" />
      <LiquidBackground />
      <div className="max-w-[1280px] mx-auto px-8 relative z-[2]">
        <HeroSection />
        <BleedingCapitalSection />
        <ScaleRevenueSection />
        <WhyChooseUsSection />
        <CaseStudiesSection />
        <ComparisonSection />
        <PricingSection />
        <FoundersSection />
        <GuaranteesSection />
        <FAQSection />
        <ContactSection />
      </div>
      <StickyCTA />
    </>
  )
}
