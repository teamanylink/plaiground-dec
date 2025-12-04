import RevealSection from "./reveal-section"
import TiltCard from "./tilt-card"
import MegaButton from "./mega-button"

export default function ContactSection() {
  const benefits = [
    "Complete operational analysis with high-ROI automation opportunities identified",
    "Custom integration roadmap with timeline and financial projections",
    "Honest assessment of technical feasibility and organizational readiness",
    "Zero-pressure consultation — we'll tell you if we're not the right fit",
  ]

  return (
    <section id="contact" className="py-24">
      <RevealSection>
        <TiltCard className="text-center !py-24 !px-8 overflow-hidden">
          <div className="relative z-[2]">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2.5rem,5vw,4.5rem)] leading-none mb-8">
              The AI Integration Window <br />
              <span className="editorial">Is Closing</span>
            </h2>
            <p className="max-w-[800px] mx-auto mb-12 text-lg text-[#94a3b8]">
              Your competitors are re-architecting their operations right now. The cost of waiting isn&apos;t just
              opportunity — it&apos;s market share you&apos;ll never recover.
            </p>
            <div className="inline-block bg-black/50 border border-[#ff5555] py-4 px-8 rounded-xl mb-12">
              <div className="mb-2 text-sm">⚠️ Limited Capacity: We only partner with 3-4 companies per quarter.</div>
              <div className="text-[#ff5555] font-bold text-base">
                🚨 Current Availability: 2 partnership slots remaining this quarter
              </div>
            </div>
            <br />
            <MegaButton href="#contact" style={{ fontSize: "1.2rem", padding: "1.5rem 3rem" }}>
              Book Your Free AI Integration Assessment
            </MegaButton>
            <p className="mt-4 text-sm opacity-70">(Usually $5,000 — Complimentary for Qualified Companies)</p>

            <div className="mt-16 text-left max-w-[600px] mx-auto bg-white/[0.03] p-8 rounded-2xl">
              <h4 className="font-[family-name:var(--font-space-grotesk)] mb-4 text-white">
                What you&apos;ll receive:
              </h4>
              <ul className="list-none">
                {benefits.map((benefit, i) => (
                  <li key={i} className="mb-2 flex gap-2.5 text-[#94a3b8]">
                    <span className="text-[var(--neon-cyan)]">✓</span> {benefit}
                  </li>
                ))}
              </ul>
              <div className="text-center mt-4 font-bold text-white">No sales theater. Just strategic clarity.</div>
            </div>
          </div>
        </TiltCard>

        <footer className="mt-24 py-12 border-t border-white/10 text-[#666]">
          <div className="flex justify-between items-center flex-wrap gap-8">
            <div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-white mb-2">Plaiground</h3>
              <div className="text-xs mt-2">© 2025 Plaiground. All Rights Reserved.</div>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-[#888] no-underline hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#888] no-underline hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-[#888] no-underline hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="text-center mt-16 text-white font-[family-name:var(--font-space-grotesk)] text-xl opacity-90">
            The AI gold rush is happening. <span className="text-[var(--neon-cyan)]">Will you lead or follow?</span>
          </div>
        </footer>
      </RevealSection>
    </section>
  )
}
