import RevealSection from "./reveal-section"
import TiltCard from "./tilt-card"
import MegaButton from "./mega-button"
import { Bot, Search, Mail, FileText, BarChart3, DollarSign, CheckCircle2, ArrowUpRight } from "lucide-react"

function WorkflowDashboardSkeleton() {
  const activities = [
    { icon: Search, text: "Analyzing market trends...", time: "Now" },
    { icon: Mail, text: "Drafting outreach to 50 leads...", time: "2m ago" },
    { icon: Bot, text: "Qualifying prospect: Acme Corp", time: "5m ago" },
    { icon: FileText, text: "Generating weekly report...", time: "12m ago" },
    { icon: Search, text: "Scraping competitor pricing...", time: "15m ago" },
    { icon: Mail, text: "Follow-up sent: John D.", time: "18m ago" },
    { icon: Bot, text: "Optimizing ad spend...", time: "22m ago" },
  ]

  return (
    <div
      className="h-[240px] rounded-xl mb-6 overflow-hidden border relative flex flex-col"
      style={{
        background: "rgba(0, 240, 255, 0.02)",
        borderColor: "rgba(0, 240, 255, 0.1)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: "rgba(0, 240, 255, 0.08)" }}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[var(--neon-cyan)] animate-pulse" />
          <span className="text-xs font-mono text-[var(--neon-cyan)] tracking-wider">AGENT_ACTIVITY_LOG</span>
        </div>
        <div className="text-[10px] text-[var(--neon-cyan)] opacity-60 font-mono">LIVE</div>
      </div>

      {/* Scrolling Content */}
      <div className="flex-1 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(3,3,4,0.8)] z-10 pointer-events-none" />

        <div className="animate-scroll-up p-4 space-y-3">
          {[...activities, ...activities].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
              <div className="p-1.5 rounded bg-[rgba(0,240,255,0.1)] text-[var(--neon-cyan)]">
                <item.icon size={14} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-white truncate">{item.text}</div>
                <div className="text-[10px] text-white/40">{item.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AnalyticsDashboardSkeleton() {
  const events = [
    { icon: DollarSign, text: "New Deal Closed: $12,500", color: "var(--neon-aqua)" },
    { icon: ArrowUpRight, text: "Efficiency +45% (MoM)", color: "var(--neon-lime)" },
    { icon: CheckCircle2, text: "System Optimization Complete", color: "#fff" },
    { icon: DollarSign, text: "Cost Saving: $4,200", color: "var(--neon-aqua)" },
    { icon: ArrowUpRight, text: "Lead Velocity: +22%", color: "var(--neon-lime)" },
  ]

  return (
    <div
      className="h-[240px] rounded-xl mb-6 overflow-hidden border relative flex flex-col"
      style={{
        background: "rgba(0, 255, 136, 0.02)",
        borderColor: "rgba(0, 255, 136, 0.1)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: "rgba(0, 255, 136, 0.08)" }}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[var(--neon-aqua)] animate-pulse" />
          <span className="text-xs font-mono text-[var(--neon-aqua)] tracking-wider">PERFORMANCE_METRICS</span>
        </div>
        <BarChart3 size={14} className="text-[var(--neon-aqua)] opacity-60" />
      </div>

      {/* Scrolling Content */}
      <div className="flex-1 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(3,3,4,0.8)] z-10 pointer-events-none" />

        <div className="animate-scroll-up p-4 space-y-3">
          {[...events, ...events].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
              <div className="p-1.5 rounded bg-white/10" style={{ color: item.color }}>
                <item.icon size={14} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium truncate" style={{ color: item.color }}>{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ScaleRevenueSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6">
      <RevealSection>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-center tracking-tight leading-[1.1] mb-16 max-w-[1000px] mx-auto">
          Scale Revenue, Not{" "}
          <span className="editorial" style={{ color: "var(--neon-cyan)" }}>
            Headcount
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TiltCard style={{ borderTop: "4px solid var(--neon-cyan)" }}>
            <div className="tag-pill">Path 1</div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
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
            <h3 className="font-display text-2xl font-bold text-white mb-2">
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
