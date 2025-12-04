import RevealSection from "./reveal-section"
import TiltCard from "./tilt-card"
import MegaButton from "./mega-button"

function CaseStudySkeleton({ accentColor = "var(--neon-cyan)" }: { accentColor?: string }) {
  return (
    <div className="h-full w-full flex flex-col p-4" style={{ background: "rgba(0, 0, 0, 0.4)" }}>
      {/* Header bar */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full opacity-60" style={{ background: accentColor }} />
        <div className="h-1.5 w-16 rounded-full skeleton-shimmer opacity-40" />
        <div className="ml-auto flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 flex gap-3">
        {/* Left panel */}
        <div className="w-1/3 flex flex-col gap-2">
          <div className="h-2 w-full rounded-full skeleton-shimmer opacity-30" />
          <div className="h-2 w-3/4 rounded-full skeleton-shimmer opacity-30" style={{ animationDelay: "0.1s" }} />
          <div className="flex-1 rounded-lg skeleton-shimmer opacity-20 mt-2" style={{ animationDelay: "0.2s" }} />
        </div>

        {/* Right panel - chart area */}
        <div className="flex-1 flex items-end gap-1 pb-2">
          {[40, 65, 45, 80, 55, 70].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t skeleton-shimmer opacity-30"
              style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }}
            />
          ))}
        </div>
      </div>

      {/* Bottom indicator */}
      <div className="flex items-center gap-2 mt-3 pt-2 border-t border-white/5">
        <div className="w-1.5 h-1.5 rounded-full opacity-50" style={{ background: accentColor }} />
        <div className="h-1 w-12 rounded-full skeleton-shimmer opacity-30" />
      </div>
    </div>
  )
}

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      accentColor: "var(--neon-cyan)",
      title: "Manufacturing & Distribution Co.",
      description: "Automated their entire order-to-fulfillment workflow",
      details: [
        { label: "Industry", value: "B2B Manufacturing" },
        { label: "Result", value: "$340K annual savings, 70% faster processing" },
      ],
    },
    {
      accentColor: "var(--neon-lime)",
      title: "Professional Services Firm",
      description: "Built predictive client retention system",
      details: [
        { label: "Revenue Impact", value: "$680K churn prevented" },
        { label: "Time to ROI", value: "47 days" },
      ],
    },
    {
      accentColor: "var(--neon-aqua)",
      title: "Healthcare Technology",
      description: "Deployed AI-powered compliance automation",
      details: [
        { label: "Build Time", value: "42 days" },
        { label: "Result", value: "80% reduction in audit time, zero compliance incidents" },
      ],
    },
  ]

  return (
    <section className="py-24">
      <RevealSection>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2.5rem,5vw,4rem)] text-center tracking-tight leading-[1.1] mb-8 max-w-[1000px] mx-auto">
          We&apos;ve Transformed Operations for <span className="editorial">Growing Enterprises</span>
        </h2>
        <p className="text-[#94a3b8] text-center mb-16 text-lg">
          Our clients don&apos;t experiment with AI — they use it to dominate their markets while competitors drown in
          operational chaos.
        </p>

        <div className="grid grid-cols-12 gap-6">
          {caseStudies.map((study, i) => (
            <TiltCard key={i} className="col-span-12 lg:col-span-4 !p-0">
              <div className="h-[200px] relative bg-[#0a0a0c] border-b border-white/10 overflow-hidden">
                <CaseStudySkeleton accentColor={study.accentColor} />
              </div>
              <div className="p-8">
                <h4 className="font-[family-name:var(--font-space-grotesk)] text-lg text-white mb-2">{study.title}</h4>
                <p className="text-[#94a3b8] text-sm mb-4">{study.description}</p>
                <div className="text-xs border-t border-white/10 pt-4 mt-4">
                  {study.details.map((detail, j) => (
                    <div key={j}>
                      <b className="text-[var(--neon-cyan)]">{detail.label}:</b> {detail.value}
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="text-center mt-16">
          <MegaButton href="#contact" style={{ fontSize: "0.9rem", padding: "1rem 2rem" }}>
            See If You Qualify For Partnership
          </MegaButton>
        </div>
      </RevealSection>
    </section>
  )
}
