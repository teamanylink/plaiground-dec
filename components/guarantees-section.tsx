import RevealSection from "./reveal-section"
import TiltCard from "./tilt-card"

export default function GuaranteesSection() {
  const guarantees = [
    {
      icon: "🛡️",
      title: "30-60 Day Deployment Guarantee",
      description:
        "Your AI system will be fully integrated and operational within our promised timeframe or we work at no additional cost until complete.",
    },
    {
      icon: "💰",
      title: "90-Day ROI Guarantee",
      description:
        "If you don't achieve our projected cost savings or revenue impact within 90 days, we refund your investment and continue working until you profit.",
    },
    {
      icon: "🤝",
      title: "100% Ownership Guarantee",
      description:
        "You own all code, infrastructure, and intellectual property. No licensing fees. No vendor lock-in. Ever.",
    },
    {
      icon: "⚙️",
      title: "Integration Guarantee",
      description:
        "Your AI systems will integrate seamlessly with your existing infrastructure or we rebuild from scratch at our expense.",
    },
  ]

  return (
    <section className="py-24">
      <RevealSection>
        <TiltCard>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2.5rem,5vw,4rem)] text-center tracking-tight leading-[1.1] mb-16 max-w-[1000px] mx-auto">
            Your Investment, Protected by <span className="editorial">Ironclad Guarantees</span>
          </h2>

          <div className="grid grid-cols-12 gap-6">
            {guarantees.map((guarantee, i) => (
              <TiltCard key={i} className="col-span-12 lg:col-span-6" style={{ border: "1px solid var(--neon-lime)" }}>
                <div className="text-3xl mb-4">{guarantee.icon}</div>
                <h4
                  className="font-[family-name:var(--font-space-grotesk)] text-lg mb-2"
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
