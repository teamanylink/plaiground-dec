import RevealSection from "./reveal-section"
import TiltCard from "./tilt-card"
import MegaButton from "./mega-button"
import { Bot, User, Send, BarChart3, TrendingUp, DollarSign, PieChart, Activity } from "lucide-react"

function AgentChatInterface() {
  return (
    <div className="w-full h-full bg-[#0a0a0c] rounded-xl overflow-hidden flex flex-col border border-white/10 relative">
      {/* Chat Header */}
      <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between bg-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[var(--neon-cyan)]/20 flex items-center justify-center border border-[var(--neon-cyan)]/30">
            <Bot size={16} className="text-[var(--neon-cyan)]" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Sales_Agent_01</div>
            <div className="text-[10px] text-[var(--neon-cyan)] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-cyan)] animate-pulse" />
              Active
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 space-y-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-transparent to-[#0a0a0c]/80 z-10 pointer-events-none" />

        <div className="animate-scroll-up space-y-4">
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <User size={12} className="text-white/60" />
            </div>
            <div className="bg-white/5 rounded-lg rounded-tl-none p-3 text-xs text-white/80 max-w-[85%] border border-white/5">
              Find all manufacturing companies in Texas with revenue &gt; $50M.
            </div>
          </div>

          <div className="flex gap-3 flex-row-reverse">
            <div className="w-6 h-6 rounded-full bg-[var(--neon-cyan)]/20 flex items-center justify-center shrink-0 border border-[var(--neon-cyan)]/30">
              <Bot size={12} className="text-[var(--neon-cyan)]" />
            </div>
            <div className="bg-[var(--neon-cyan)]/5 rounded-lg rounded-tr-none p-3 text-xs text-white/90 max-w-[85%] border border-[var(--neon-cyan)]/20">
              <div className="flex items-center gap-2 mb-2 text-[var(--neon-cyan)]">
                <Activity size={10} />
                <span className="font-mono text-[10px] uppercase">Processing Request</span>
              </div>
              I found 427 companies matching your criteria. I am now enriching this data with contact information for CTOs and VPs of Operations.
              <div className="mt-2 p-2 bg-black/40 rounded border border-white/5 font-mono text-[10px] text-white/60">
                &gt; Scraping LinkedIn Sales Nav...<br />
                &gt; Verifying email addresses...<br />
                &gt; 142 verified leads added to CRM.
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <User size={12} className="text-white/60" />
            </div>
            <div className="bg-white/5 rounded-lg rounded-tl-none p-3 text-xs text-white/80 max-w-[85%] border border-white/5">
              Draft personalized outreach emails for the top 50.
            </div>
          </div>

          <div className="flex gap-3 flex-row-reverse">
            <div className="w-6 h-6 rounded-full bg-[var(--neon-cyan)]/20 flex items-center justify-center shrink-0 border border-[var(--neon-cyan)]/30">
              <Bot size={12} className="text-[var(--neon-cyan)]" />
            </div>
            <div className="bg-[var(--neon-cyan)]/5 rounded-lg rounded-tr-none p-3 text-xs text-white/90 max-w-[85%] border border-[var(--neon-cyan)]/20">
              Drafting 50 unique emails based on recent company news and quarterly reports...
              <div className="mt-2 flex gap-2">
                <div className="h-1 w-full bg-[var(--neon-cyan)]/20 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--neon-cyan)] w-[70%] animate-[shimmer_2s_infinite]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-3 border-t border-white/10 bg-white/5">
        <div className="h-8 rounded-lg bg-black/50 border border-white/10 flex items-center px-3 justify-between">
          <span className="text-[10px] text-white/30">Type a command...</span>
          <Send size={12} className="text-white/30" />
        </div>
      </div>
    </div>
  )
}

function RevenueDashboard() {
  return (
    <div className="w-full h-full bg-[#0a0a0c] rounded-xl overflow-hidden flex flex-col border border-white/10 p-5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,136,0.05),transparent_50%)]" />

      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded bg-[var(--neon-aqua)]/10 text-[var(--neon-aqua)]">
            <BarChart3 size={16} />
          </div>
          <span className="text-sm font-bold text-white tracking-wide">REVENUE_OS</span>
        </div>
        <div className="text-xs text-white/50 font-mono">Q3_PERFORMANCE</div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
        <div className="p-3 rounded-lg bg-white/5 border border-white/5">
          <div className="text-[10px] text-white/50 mb-1">TOTAL SAVINGS</div>
          <div className="text-xl font-bold text-white flex items-center gap-2">
            $842,000
            <span className="text-[10px] text-[var(--neon-aqua)] bg-[var(--neon-aqua)]/10 px-1.5 py-0.5 rounded">+24%</span>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-white/5 border border-white/5">
          <div className="text-[10px] text-white/50 mb-1">ROI MULTIPLIER</div>
          <div className="text-xl font-bold text-white flex items-center gap-2">
            12.4x
            <span className="text-[10px] text-[var(--neon-aqua)] bg-[var(--neon-aqua)]/10 px-1.5 py-0.5 rounded">+8%</span>
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="flex-1 bg-white/5 rounded-lg border border-white/5 p-4 relative z-10 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs font-medium text-white/70 flex items-center gap-2">
            <TrendingUp size={12} className="text-[var(--neon-aqua)]" />
            Efficiency Trend
          </div>
        </div>
        <div className="flex-1 flex items-end gap-2">
          {[30, 45, 40, 60, 55, 75, 65, 85, 80, 95].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col gap-1 group">
              <div
                className="w-full rounded-t-sm bg-[var(--neon-aqua)] transition-all duration-500 group-hover:opacity-100 opacity-60"
                style={{ height: `${h}%`, opacity: 0.3 + (i * 0.07) }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function PricingSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6">
      <RevealSection>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-center tracking-tight leading-[1.1] mb-16 max-w-[1000px] mx-auto">
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
              className="h-[500px] rounded-2xl border border-white/10 flex justify-center items-center p-2"
              style={{ background: "radial-gradient(circle at top right, rgba(0,240,255,0.05), transparent)" }}
            >
              <AgentChatInterface />
            </div>
          </div>
        </TiltCard>

        <TiltCard>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className="h-[500px] rounded-2xl border border-white/10 flex justify-center items-center order-2 lg:order-1 p-2"
              style={{ background: "radial-gradient(circle at top left, rgba(0,255,136,0.05), transparent)" }}
            >
              <RevenueDashboard />
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
