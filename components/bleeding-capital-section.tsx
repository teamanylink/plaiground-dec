import RevealSection from "./reveal-section"
import TiltCard from "./tilt-card"
import MegaButton from "./mega-button"
import { Check } from "lucide-react"

export default function BleedingCapitalSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6">
      <RevealSection>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-center tracking-tight leading-[1.1] mb-16 max-w-[1000px] mx-auto">
          If You&apos;re Not Automating Core Operations, <br />
          You&apos;re Already <span className="editorial">Bleeding Capital</span>
        </h2>

        <TiltCard className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-white text-xl mb-6">
                Your competitors aren&apos;t just &quot;trying AI.&quot; They&apos;re re-engineering their entire
                operational backbone — cutting costs by 30-40% while scaling revenue faster than ever.
              </p>
              <p className="text-[#94a3b8] text-lg font-light mb-6">
                The question isn&apos;t whether AI will transform your industry. The question is:{" "}
                <b className="text-white font-semibold">Will you lead the transformation or scramble to catch up?</b>
              </p>
              <div className="mt-8">
                <MegaButton href="#contact">Schedule Your AI Integration Assessment</MegaButton>
              </div>
            </div>
            <div className="p-8 min-h-[auto]">
              <div className="text-sm mb-6 text-[var(--neon-lime)] border-b border-white/10 pb-2.5 tracking-wider">
                COMPETITIVE_REALITY_CHECK
              </div>
              <ul className="anim-list list-none">
                <li className="mb-4 flex gap-4 text-[#ddd] items-center">
                  <Check className="w-5 h-5 text-[var(--neon-lime)] shrink-0" /> Automating entire departments
                </li>
                <li className="mb-4 flex gap-4 text-[#ddd] items-center">
                  <Check className="w-5 h-5 text-[var(--neon-lime)] shrink-0" /> Scaling without proportional hiring
                </li>
                <li className="mb-4 flex gap-4 text-[#ddd] items-center">
                  <Check className="w-5 h-5 text-[var(--neon-lime)] shrink-0" /> Leveraging data you&apos;re ignoring
                </li>
                <li className="mb-4 flex gap-4 text-[#ddd] items-center">
                  <Check className="w-5 h-5 text-[var(--neon-lime)] shrink-0" /> Operating 24/7 with zero burnout
                </li>
              </ul>
            </div>
          </div>
        </TiltCard>
      </RevealSection>
    </section>
  )
}
