import RevealSection from "./reveal-section"
import TiltCard from "./tilt-card"
import MegaButton from "./mega-button"

export default function PricingSection() {
  return (
    <section className="py-24">
      <RevealSection>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2.5rem,5vw,4rem)] text-center tracking-tight leading-[1.1] mb-16 max-w-[1000px] mx-auto">
          Choose the AI Partnership Model That <span className="editorial">Fits Your Business</span>
        </h2>

        <TiltCard className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="tag-pill">Option 1</div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white mb-2">
                AI Workforce Deployment
              </h3>
              <p className="text-[#94a3b8] text-lg font-light mb-6">
                Stop Hiring Your Way Out of Growth Problems — Deploy Specialized AI Agents That Scale Instantly and
                Never Burn Out
              </p>
              <ul className="anim-list list-none">
                <li className="mb-4">
                  <b className="text-[var(--neon-cyan)]">✓ Deep Operational Analysis & Agent Design</b>
                  <br />
                  <span className="text-sm text-[#999]">
                    We map your current workflows, identify the roles bleeding the most time and money, and architect AI
                    agents specifically designed to execute those complete job functions.
                  </span>
                </li>
                <li className="mb-4">
                  <b className="text-[var(--neon-cyan)]">✓ Custom AI Agent Development & Training</b>
                  <br />
                  <span className="text-sm text-[#999]">
                    AI Sales Development Reps, AI Operations Coordinators, AI Customer Service Specialists, AI Financial
                    Analysts — each one trained on your processes, voice, and business rules.
                  </span>
                </li>
                <li className="mb-4">
                  <b className="text-[var(--neon-cyan)]">✓ Full System Integration & Deployment</b>
                  <br />
                  <span className="text-sm text-[#999]">
                    Your AI workforce connects directly to your CRM, ERP, support desk, and communication tools —
                    working alongside your human team within your existing infrastructure.
                  </span>
                </li>
                <li className="mb-4">
                  <b className="text-[var(--neon-cyan)]">✓ Performance Monitoring & Continuous Optimization</b>
                  <br />
                  <span className="text-sm text-[#999]">
                    Monthly analytics showing exactly how many hours saved, tickets resolved, leads qualified, and
                    dollars recovered. We optimize and expand based on performance data.
                  </span>
                </li>
              </ul>
              <div className="mt-8 border border-dashed border-[#444] p-6 rounded-xl bg-black/20">
                <div className="font-bold mb-1 text-white">
                  Timeline: First AI employee deployed in 14-21 days | Investment: $7,997-$12,997/month
                </div>
                <div className="text-sm text-[#999]">Avg. Annual Savings: $240K-$480K in avoided hiring costs</div>
              </div>
              <div className="mt-8">
                <MegaButton href="#contact" style={{ fontSize: "0.9rem" }}>
                  Book Free AI Workforce Strategy Call
                </MegaButton>
              </div>
            </div>
            <div
              className="h-[500px] rounded-2xl border border-white/10 flex justify-center items-center"
              style={{ background: "radial-gradient(circle at top right, rgba(0,240,255,0.05), transparent)" }}
            >
              <div className="text-[var(--neon-cyan)] tracking-[2px]">[ ENTERPRISE_AUTOMATION_MOCKUP ]</div>
            </div>
          </div>
        </TiltCard>

        <TiltCard>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className="h-[500px] rounded-2xl border border-white/10 flex justify-center items-center order-2 lg:order-1"
              style={{ background: "radial-gradient(circle at top left, rgba(0,255,136,0.05), transparent)" }}
            >
              <div className="text-[var(--neon-aqua)] tracking-[2px]">[ REVENUE_DASHBOARD_INTERFACE ]</div>
            </div>
            <div className="order-1 lg:order-2">
              <div
                className="tag-pill"
                style={{
                  borderColor: "var(--neon-aqua)",
                  color: "var(--neon-aqua)",
                  background: "rgba(0, 255, 136, 0.05)",
                  boxShadow: "0 0 20px rgba(0, 255, 136, 0.1)",
                }}
              >
                Option 2
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white mb-2">
                Embedded AI Integration Partnership
              </h3>
              <p className="text-[#94a3b8] text-lg font-light mb-6">
                Get the Strategic AI Leadership and Technical Firepower of a Full Internal Team Without the $800K+
                Annual Salary Burden
              </p>
              <ul className="anim-list list-none">
                <li className="mb-4">
                  <b className="text-[var(--neon-aqua)]">
                    ✓ Comprehensive AI Opportunity Assessment & Strategic Roadmap
                  </b>
                  <br />
                  <span className="text-sm text-[#999]">
                    We analyze your entire operation to identify the 3-5 highest-ROI AI implementations, then build a
                    phased deployment plan with clear financial projections for each initiative.
                  </span>
                </li>
                <li className="mb-4">
                  <b className="text-[var(--neon-aqua)]">✓ Custom Enterprise AI Solution Architecture & Development</b>
                  <br />
                  <span className="text-sm text-[#999]">
                    From predictive analytics platforms to intelligent document processing to automated compliance
                    systems — we build exactly what your business needs, integrated with your existing tech stack.
                  </span>
                </li>
                <li className="mb-4">
                  <b className="text-[var(--neon-aqua)]">✓ White-Glove Change Management & Team Enablement</b>
                  <br />
                  <span className="text-sm text-[#999]">
                    We don&apos;t just build technology — we ensure your organization adopts it. Full training programs,
                    documentation, and hands-on support for your team throughout deployment and beyond.
                  </span>
                </li>
                <li className="mb-4">
                  <b className="text-[var(--neon-aqua)]">✓ Ongoing Strategic Partnership & Performance Optimization</b>
                  <br />
                  <span className="text-sm text-[#999]">
                    Monthly strategy sessions, continuous feature development, performance monitoring, and proactive
                    recommendations as your business evolves and new AI opportunities emerge.
                  </span>
                </li>
              </ul>
              <div className="mt-8 border border-dashed border-[#444] p-6 rounded-xl bg-black/20">
                <div className="font-bold mb-1 text-white">
                  Timeline: First solution deployed in 30-60 days | Investment: Starting at $20K per implementation
                </div>
                <div className="text-sm text-[#999]">Avg. ROI: $300K-$1M in cost savings or new revenue annually</div>
              </div>
              <div className="mt-8">
                <MegaButton href="#contact" style={{ fontSize: "0.9rem" }}>
                  Book Free Integration Partnership Call
                </MegaButton>
              </div>
            </div>
          </div>
        </TiltCard>
      </RevealSection>
    </section>
  )
}
