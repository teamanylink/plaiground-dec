import RevealSection from "./reveal-section"
import TiltCard from "./tilt-card"
import MegaButton from "./mega-button"

function WorkflowDashboardSkeleton() {
  return (
    <div
      className="h-[160px] rounded-xl mb-6 overflow-hidden border relative"
      style={{
        background: "rgba(0, 240, 255, 0.02)",
        borderColor: "rgba(0, 240, 255, 0.1)",
      }}
    >
      {/* Minimal header */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b" style={{ borderColor: "rgba(0, 240, 255, 0.08)" }}>
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-cyan)] opacity-60" />
        <div className="h-1.5 w-16 rounded-full skeleton-shimmer opacity-50" />
      </div>

      {/* Clean content */}
      <div className="p-4 flex gap-6">
        {/* Simple node flow */}
        <div className="flex items-center gap-2 flex-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2 flex-1">
              <div
                className="w-10 h-10 rounded-lg skeleton-shimmer opacity-40"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
              {i < 2 && <div className="flex-1 h-px bg-[var(--neon-cyan)] opacity-20" />}
            </div>
          ))}
        </div>
      </div>

      {/* Minimal stats */}
      <div className="absolute bottom-3 left-4 right-4 flex gap-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-1 flex-1 rounded-full skeleton-shimmer opacity-30"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  )
}

function AnalyticsDashboardSkeleton() {
  return (
    <div
      className="h-[160px] rounded-xl mb-6 overflow-hidden border relative"
      style={{
        background: "rgba(0, 255, 136, 0.02)",
        borderColor: "rgba(0, 255, 136, 0.1)",
      }}
    >
      {/* Minimal header */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b" style={{ borderColor: "rgba(0, 255, 136, 0.08)" }}>
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-aqua)] opacity-60" />
        <div className="h-1.5 w-20 rounded-full skeleton-shimmer-aqua opacity-50" />
      </div>

      {/* Clean chart bars */}
      <div className="p-4 flex items-end gap-1.5 h-[100px]">
        {[35, 55, 40, 70, 50, 85, 60, 75].map((height, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm skeleton-shimmer-aqua opacity-40"
            style={{
              height: `${height}%`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Minimal indicator */}
      <div className="absolute bottom-3 right-4 flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-aqua)] opacity-50" />
        <div className="h-1 w-10 rounded-full skeleton-shimmer-aqua opacity-30" />
      </div>
    </div>
  )
}

export default function ScaleRevenueSection() {
  return (
    <section className="py-24">
      <RevealSection>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2.5rem,5vw,4rem)] text-center tracking-tight leading-[1.1] mb-16 max-w-[1000px] mx-auto">
          Scale Revenue, Not{" "}
          <span className="editorial" style={{ color: "var(--neon-cyan)" }}>
            Headcount
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TiltCard style={{ borderTop: "4px solid var(--neon-cyan)" }}>
            <div className="tag-pill">Path 1</div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white mb-2">
              Deploy Your AI Workforce
            </h3>
            <p className="text-[#94a3b8] text-lg font-light mb-6">
              Replace $240K+ in Annual Salary Costs With AI Agents That Never Sleep, Never Quit, and Scale Instantly
            </p>
            <WorkflowDashboardSkeleton />
            <p className="text-sm opacity-80 text-[#94a3b8] mb-6">
              We build specialized AI agents that execute complete job functions: AI sales development reps that qualify
              leads 24/7, AI operations managers that handle order processing and logistics coordination, AI customer
              service agents that resolve 80% of inquiries without human intervention, and AI financial analysts that
              automate compliance and reporting workflows.
            </p>
            <p className="text-sm opacity-80 text-[#94a3b8]">
              <b className="text-white">Perfect for:</b> COOs and Finance leaders who are tired of the hiring treadmill,
              drowning in turnover costs, and watching operational bottlenecks kill growth momentum.
            </p>
          </TiltCard>

          <TiltCard style={{ borderTop: "4px solid var(--neon-aqua)" }}>
            <div
              className="tag-pill"
              style={{
                color: "var(--neon-aqua)",
                borderColor: "var(--neon-aqua)",
                background: "rgba(0, 255, 136, 0.05)",
                boxShadow: "0 0 20px rgba(0, 255, 136, 0.1)",
              }}
            >
              Path 2
            </div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white mb-2">
              Embed Our AI Integration Team
            </h3>
            <p className="text-[#94a3b8] text-lg font-light mb-6">
              Get a Full AI Strategy, Engineering, and Change Management Team for Less Than the Cost of Two Senior Hires
            </p>
            <AnalyticsDashboardSkeleton />
            <p className="text-sm opacity-80 text-[#94a3b8] mb-6">
              We become your embedded AI partner: conducting deep operational analysis to identify your highest-ROI
              opportunities, architecting custom solutions that integrate seamlessly with your legacy systems, managing
              the entire deployment and change management process, and providing ongoing optimization and strategic
              guidance as your needs evolve.
            </p>
            <p className="text-sm opacity-80 text-[#94a3b8]">
              <b className="text-white">Perfect for:</b> CEOs and Operations leaders who know AI is critical but lack
              internal expertise, need strategic guidance beyond basic automation, and want a partner who&apos;s
              accountable for measurable business outcomes.
            </p>
          </TiltCard>
        </div>

        <div className="text-center mt-16">
          <p className="text-[#94a3b8] mb-8">
            Both approaches deliver:{" "}
            <b className="text-white font-semibold">
              Enterprise-grade security, full system integration, change management support, and guaranteed ROI.
            </b>
          </p>
          <MegaButton href="#contact">Schedule Your AI Integration Assessment</MegaButton>
        </div>
      </RevealSection>
    </section>
  )
}
