import RevealSection from "./reveal-section"
import MegaButton from "./mega-button"

export default function ComparisonSection() {
  const features = [
    "Strategy & Integration",
    "Enterprise Architecture",
    "Full Code Ownership",
    "30-60 Day Deployment",
    "Change Management",
    "ROI Guarantee",
  ]

  const consultancy = ["✓ ($500K+ projects)", "Sometimes", "✗ (Licensing fees)", "✗ (6-18 months)", "Sometimes", "✗"]

  const startup = ["✗", "✗", "✓", "✗ (Never ships)", "✗", "✗"]

  return (
    <section className="py-24">
      <RevealSection>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2.5rem,5vw,4rem)] text-center tracking-tight leading-[1.1] mb-8 max-w-[1000px] mx-auto">
          Plaiground Is Your <span className="editorial">Fractional AI Leadership Team</span>
        </h2>
        <p className="text-[#94a3b8] text-center mb-8 text-lg">
          Most agencies build pilots that never integrate. We build production-grade systems that become the backbone of
          your operations.
        </p>

        <div className="comp-wrapper">
          <div className="comp-grid">
            <div className="text-left flex flex-col gap-0">
              <div className="h-[50px] font-bold text-[#666] flex items-center">THE DIFFERENCE</div>
              {features.map((feature, i) => (
                <div key={i} className="comp-cell !justify-start">
                  {feature}
                </div>
              ))}
            </div>

            <div className="comp-highlight">
              <div className="text-center font-extrabold text-xl mb-4 tracking-wider text-white">PLAIGROUND</div>
              <div>
                {features.map((_, i) => (
                  <div key={i} className="comp-cell">
                    <span className="check">✓</span>Included
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="h-[50px] font-bold text-[#666] flex items-center justify-center">
                ENTERPRISE CONSULTANCIES
              </div>
              {consultancy.map((item, i) => (
                <div key={i} className="comp-cell text-white/70">
                  {item}
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="h-[50px] font-bold text-[#666] flex items-center justify-center">AI STARTUPS</div>
              {startup.map((item, i) => (
                <div key={i} className="comp-cell text-white/70">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <MegaButton href="#contact">Schedule Your AI Integration Assessment</MegaButton>
        </div>
      </RevealSection>
    </section>
  )
}
