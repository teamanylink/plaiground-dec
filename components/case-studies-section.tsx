import RevealSection from "./reveal-section"
import TiltCard from "./tilt-card"
import MegaButton from "./mega-button"

import { TrendingUp, Users, Activity, BarChart3, ArrowUpRight, FileText, Package, CheckCircle2, ShieldCheck, AlertCircle, Mail } from "lucide-react"

function DocumentProcessingVisual() {
  return (
    <div className="w-full h-full relative p-6 flex items-center justify-center">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 flex gap-4 items-center">
        {/* Document Card */}
        <div className="w-32 bg-[#0a0a0c] border border-white/10 rounded-lg p-3 shadow-xl flex flex-col gap-2 transform -rotate-6 transition-transform hover:rotate-0 duration-500">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center">
              <FileText size={12} className="text-white/40" />
            </div>
            <div className="h-1.5 w-12 bg-white/10 rounded-full" />
          </div>
          <div className="space-y-1.5">
            <div className="h-1 w-full bg-white/5 rounded-full" />
            <div className="h-1 w-3/4 bg-white/5 rounded-full" />
            <div className="h-1 w-5/6 bg-white/5 rounded-full" />
          </div>
          <div className="mt-2 flex justify-end">
            <div className="h-4 w-12 rounded bg-[var(--neon-cyan)]/10 border border-[var(--neon-cyan)]/20 flex items-center justify-center">
              <span className="text-[8px] text-[var(--neon-cyan)]">PO_8492</span>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="text-white/20">
          <ArrowUpRight size={20} className="rotate-45" />
        </div>

        {/* Package Card */}
        <div className="w-32 bg-[#0a0a0c] border border-white/10 rounded-lg p-3 shadow-xl flex flex-col gap-2 transform rotate-6 transition-transform hover:rotate-0 duration-500">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded bg-[var(--neon-lime)]/10 flex items-center justify-center">
              <Package size={12} className="text-[var(--neon-lime)]" />
            </div>
            <div className="h-1.5 w-12 bg-white/10 rounded-full" />
          </div>
          <div className="flex-1 flex items-center justify-center py-2">
            <div className="text-center">
              <div className="text-[10px] text-white/40 mb-1">Status</div>
              <div className="text-xs font-bold text-white flex items-center gap-1">
                Shipped <CheckCircle2 size={10} className="text-[var(--neon-lime)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ClientRetentionVisual() {
  return (
    <div className="w-full h-full relative p-6 flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_70%)]" />

      <div className="relative z-10 w-full max-w-[280px]">
        {/* Main User Card */}
        <div className="bg-[#0a0a0c] border border-white/10 rounded-xl p-4 shadow-2xl relative z-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center">
              <Users size={18} className="text-white/80" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Acme Corp</div>
              <div className="text-[10px] text-white/40">Enterprise Plan</div>
            </div>
            <div className="ml-auto">
              <div className="w-2 h-2 rounded-full bg-[var(--neon-lime)] animate-pulse" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 rounded bg-white/5 border border-white/5">
              <span className="text-[10px] text-white/60">Health Score</span>
              <span className="text-xs font-bold text-[var(--neon-lime)]">98/100</span>
            </div>
            <div className="flex justify-between items-center p-2 rounded bg-white/5 border border-white/5">
              <span className="text-[10px] text-white/60">Usage Trend</span>
              <div className="flex items-center gap-1 text-[var(--neon-cyan)] text-xs">
                <TrendingUp size={12} /> +24%
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Card */}
        <div className="absolute -bottom-6 -right-4 w-48 bg-[#111] border border-white/10 rounded-lg p-3 shadow-xl z-30 animate-bounce" style={{ animationDuration: '3s' }}>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[var(--neon-cyan)]/20 flex items-center justify-center shrink-0">
              <Mail size={12} className="text-[var(--neon-cyan)]" />
            </div>
            <div className="text-[10px] text-white/80">
              <span className="text-[var(--neon-cyan)] font-bold">Auto-Renewal</span> sent to decision maker.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ComplianceVisual() {
  return (
    <div className="w-full h-full relative p-6 flex items-center justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[size:200%_200%] animate-[shimmer_4s_infinite]" />

      <div className="w-full max-w-[300px] bg-[#0a0a0c] border border-white/10 rounded-xl overflow-hidden shadow-2xl relative z-10">
        <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-[var(--neon-lime)]" />
            <span className="text-xs font-bold text-white">Compliance_Guard</span>
          </div>
          <div className="text-[10px] text-white/40 font-mono">v2.4.0</div>
        </div>

        <div className="p-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-lime)]" />
            <span className="text-xs text-white/80 flex-1">HIPAA Audit Logs</span>
            <span className="text-[10px] text-[var(--neon-lime)] border border-[var(--neon-lime)]/20 px-1.5 py-0.5 rounded">VERIFIED</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-lime)]" />
            <span className="text-xs text-white/80 flex-1">Data Encryption</span>
            <span className="text-[10px] text-[var(--neon-lime)] border border-[var(--neon-lime)]/20 px-1.5 py-0.5 rounded">AES-256</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-lime)]" />
            <span className="text-xs text-white/80 flex-1">Access Control</span>
            <span className="text-[10px] text-[var(--neon-lime)] border border-[var(--neon-lime)]/20 px-1.5 py-0.5 rounded">ACTIVE</span>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5">
            <div className="flex items-center gap-2 p-2 rounded bg-[var(--neon-cyan)]/5 border border-[var(--neon-cyan)]/10">
              <Activity size={12} className="text-[var(--neon-cyan)]" />
              <span className="text-[10px] text-white/60">Real-time monitoring active...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      accentColor: "var(--neon-cyan)",
      company: "Manufacturing & Distribution Co.",
      description: "Automated their entire order-to-fulfillment workflow",
      industry: "B2B Manufacturing",
      result: "$340K annual savings, 70% faster processing",
    },
    {
      accentColor: "var(--neon-lime)",
      company: "Professional Services Firm",
      description: "Built predictive client retention system",
      industry: "Professional Services",
      result: "$680K churn prevented, 47 days to ROI",
    },
    {
      accentColor: "var(--neon-aqua)",
      company: "Healthcare Technology",
      description: "Deployed AI-powered compliance automation",
      industry: "Healthcare Tech",
      result: "80% reduction in audit time, zero compliance incidents",
    },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6">
      <RevealSection>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-center tracking-tight leading-[1.1] mb-8 max-w-[1000px] mx-auto">
          We&apos;ve Transformed Operations for <span className="editorial">Growing Enterprises</span>
        </h2>
        <p className="text-[#94a3b8] text-center mb-16 text-lg">
          Our clients don&apos;t experiment with AI — they use it to dominate their markets while competitors drown in
          operational chaos.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <TiltCard key={i} className="!p-0 overflow-hidden flex flex-col h-full">
              {/* Visual Header */}
              <div className="h-[240px] bg-[#050505] border-b border-white/10 relative group overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {i === 0 && <DocumentProcessingVisual />}
                {i === 1 && <ClientRetentionVisual />}
                {i === 2 && <ComplianceVisual />}
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-display text-xl text-white mb-2">
                  {study.company}
                </h3>
                <p className="text-sm text-[#94a3b8] mb-6 flex-1">{study.description}</p>

                <div className="space-y-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[var(--neon-cyan)] font-bold mb-1">
                      Industry
                    </div>
                    <div className="text-sm text-white">{study.industry}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[var(--neon-cyan)] font-bold mb-1">
                      Result
                    </div>
                    <div className="text-sm text-white">{study.result}</div>
                  </div>
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
