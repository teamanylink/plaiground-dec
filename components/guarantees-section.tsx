import RevealSection from "./reveal-section"
import TiltCard from "./tilt-card"
import { ShieldCheck, TrendingUp, Lock, Settings } from "lucide-react"

export default function GuaranteesSection() {
  const guarantees = [
    {
      icon: ShieldCheck,
      title: "30-60 Day Deployment Guarantee",
      description:
        "Your AI system will be fully integrated and operational within our promised timeframe or we work at no additional cost until complete.",
    },
    {
      icon: TrendingUp,
      title: "90-Day ROI Guarantee",
      description:
        "If you don't achieve our projected cost savings or revenue impact within 90 days, we refund your investment and continue working until you profit.",
    },
    {
      icon: Lock,
      title: "100% Ownership Guarantee",
      description:
        "You own all code, infrastructure, and intellectual property. No licensing fees. No vendor lock-in. Ever.",
    },
    {
      icon: Settings,
      title: "Integration Guarantee",
      description:
        "Your AI systems will integrate seamlessly with your existing infrastructure or we rebuild from scratch at our expense.",
    },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6">
      <RevealSection>
        <TiltCard>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-center tracking-tight leading-[1.1] mb-16 max-w-[1000px] mx-auto">
            Your Investment, Protected by <span className="editorial">Ironclad Guarantees</span>
          </h2>

          <div className="grid grid-cols-12 gap-6">
            {guarantees.map((guarantee, i) => (
              <TiltCard key={i} className="col-span-12 lg:col-span-6 premium-border-card">
                <div className="mb-4 text-[var(--neon-lime)]">
                  <guarantee.icon size={32} />
                </div>
                <h4
                  className="font-display text-lg mb-2"
                  style={{ color: "var(--neon-lime)" }}
                >
                  {guarantee.title}
                </h4>
                <p className="text-sm text-[#94a3b8]">{guarantee.description}</p>
              </TiltCard>
            ))}
          </div>
        </TiltCard>
      </RevealSection>
    </section>
  )
}
