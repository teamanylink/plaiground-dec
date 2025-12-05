import RevealSection from "./reveal-section"
import TiltCard from "./tilt-card"
import MegaButton from "./mega-button"
import { AlertTriangle, Check } from "lucide-react"
import BookingWidget from "./booking-widget"

export default function ContactSection() {
  const benefits = [
    "Complete operational analysis with high-ROI automation opportunities identified",
    "Custom integration roadmap with timeline and financial projections",
    "Honest assessment of technical feasibility and organizational readiness",
    "Zero-pressure consultation — we'll tell you if we're not the right fit",
  ]

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-24 px-4 md:px-6">
      <RevealSection>
        <TiltCard className="text-center !py-24 !px-8 overflow-hidden">
          <div className="relative z-[2]">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none mb-8">
              The AI Integration Window <br />
              <span className="editorial">Is Closing</span>
            </h2>
            <p className="max-w-[800px] mx-auto mb-12 text-lg text-[#94a3b8]">
              Your competitors are re-architecting their operations right now. The cost of waiting isn&apos;t just
              opportunity — it&apos;s market share you&apos;ll never recover.
            </p>
            <div className="inline-block bg-black/50 border border-[#ff5555] py-4 px-8 rounded-xl mb-12">
              <div className="mb-2 text-sm flex items-center justify-center gap-2">
                <AlertTriangle className="text-[#ff5555]" size={16} />
                Limited Capacity: We only partner with 3-4 companies per quarter.
              </div>
              <div className="text-[#ff5555] font-bold text-base flex items-center justify-center gap-2">
                <AlertTriangle size={16} />
                Current Availability: 2 partnership slots remaining this quarter
              </div>
            </div>
            <br />
            <div className="mt-8 mb-12">
              <BookingWidget />
            </div>

            <div className="mt-16 text-left max-w-[600px] mx-auto bg-white/[0.03] p-8 rounded-2xl">
              <h4 className="font-display mb-4 text-white">
                What you&apos;ll receive:
              </h4>
              <ul className="list-none">
                {benefits.map((benefit, i) => (
                  <li key={i} className="mb-2 flex gap-2.5 text-[#94a3b8] items-center">
                    <Check className="text-[var(--neon-cyan)] shrink-0" size={16} /> {benefit}
                  </li>
                ))}
              </ul>
              <div className="text-center mt-4 font-bold text-white">No sales theater. Just strategic clarity.</div>
            </div>
          </div>
        </TiltCard>

        <footer className="mt-12 md:mt-16 lg:mt-24 py-8 md:py-12 border-t border-white/10 text-[#666]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
            <div>
              <h3 className="font-display text-white mb-2">Plaiground</h3>
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
          <div className="text-center mt-16 text-white font-display text-xl opacity-90">
            The AI gold rush is happening. <span className="text-[var(--neon-cyan)]">Will you lead or follow?</span>
          </div>
        </footer>
      </RevealSection>
    </section>
  )
}
