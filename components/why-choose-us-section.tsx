import RevealSection from "./reveal-section"
import TiltCard from "./tilt-card"
import MegaButton from "./mega-button"

export default function WhyChooseUsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6">
      <RevealSection>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-center tracking-tight leading-[1.1] mb-16 max-w-[1000px] mx-auto">
          Why Companies Choose Us Over Internal Hires or <span className="editorial">Traditional Consultancies</span>
        </h2>

        <div className="grid grid-cols-12 gap-6 auto-rows-[minmax(250px,auto)]">
          <TiltCard
            className="col-span-12 lg:col-span-4 row-span-2 flex flex-col justify-end"
            style={{ background: "linear-gradient(to top, rgba(0, 240, 255, 0.1), transparent)" }}
          >
            <h3 className="font-display text-6xl leading-none text-[var(--neon-cyan)] mb-2">
              30-60
            </h3>
            <h4 className="font-display text-2xl text-white mb-4">
              Day Measurable ROI
            </h4>
            <p className="text-[#94a3b8] text-sm">
              No 12-month &quot;transformation roadmaps.&quot; We architect for immediate impact with specific cost
              savings or revenue metrics visible in your first month of deployment.
            </p>
          </TiltCard>

          <TiltCard className="col-span-12 lg:col-span-8 premium-border-card-aqua">
            <h3 className="font-display text-xl text-[var(--neon-aqua)] whitespace-nowrap mb-4">
              True Enterprise Integration
            </h3>
            <p className="text-[#94a3b8]">
              We specialize in the hard problems other AI companies avoid — connecting 20-year-old ERP systems, cleaning
              messy data across siloed departments, and building robust two-way integrations that actually work under
              production load.
            </p>
          </TiltCard>

          <TiltCard className="col-span-12 lg:col-span-4">
            <h3 className="font-display text-xl text-white mb-4">
              Full Change Management Included
            </h3>
            <p className="text-[#94a3b8] text-sm">
              We don&apos;t just drop technology and disappear. We handle employee training, process documentation,
              adoption monitoring, and ongoing support so your team actually uses what we build.
            </p>
          </TiltCard>

          <TiltCard className="col-span-12 lg:col-span-4">
            <h3 className="font-display text-xl text-white mb-4">
              Proven Cost Reduction Track Record
            </h3>
            <p className="text-[#94a3b8] text-sm">
              We&apos;ve saved clients $284K-$850K annually by augmenting (not replacing) teams with intelligent
              automation. Your people focus on high-value work; AI handles the repetitive tasks they hate anyway.
            </p>
          </TiltCard>

          <TiltCard className="col-span-12 lg:col-span-8 premium-border-card-lime">
            <h3 className="font-display text-xl text-[var(--neon-lime)] mb-4">
              Financial Accountability Built In
            </h3>
            <p className="text-[#94a3b8]">
              Every engagement includes our proprietary ROI Framework with monthly performance tracking, clear financial
              projections, and guaranteed returns — if we don&apos;t hit our numbers, we refund everything.
            </p>
          </TiltCard>

          <TiltCard className="col-span-12 lg:col-span-4">
            <h3 className="font-display text-xl text-white mb-4">
              Risk-Free Partnership Structure
            </h3>
            <p className="text-[#94a3b8] text-sm">
              90-day ROI guarantee. If we don&apos;t deliver our projected ROI within 90 days, we refund your entire
              investment and continue working at no cost until we do. You literally cannot lose.
            </p>
          </TiltCard>
        </div>

        <div className="text-center mt-16">
          <MegaButton href="#contact">Schedule Your AI Integration Assessment</MegaButton>
        </div>
      </RevealSection>
    </section>
  )
}
