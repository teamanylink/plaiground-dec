import RevealSection from "./reveal-section"
import MegaButton from "./mega-button"
import { Activity, Zap, Users, Globe, Server, Shield, ArrowUpRight } from "lucide-react"

function HeroDashboard() {
  return (
    <div className="h-full flex flex-col p-6 relative overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[var(--neon-cyan)]/20 flex items-center justify-center border border-[var(--neon-cyan)]/30">
            <Activity size={16} className="text-[var(--neon-cyan)]" />
          </div>
          <div>
            <div className="text-xs font-bold text-white tracking-wider">SYSTEM_OVERVIEW</div>
            <div className="text-[10px] text-[var(--neon-cyan)] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-cyan)] animate-pulse" />
              OPERATIONAL
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="p-1.5 rounded bg-white/5 border border-white/10">
            <Server size={14} className="text-white/40" />
          </div>
          <div className="p-1.5 rounded bg-white/5 border border-white/10">
            <Shield size={14} className="text-white/40" />
          </div>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-2">
            <Zap size={16} className="text-[var(--neon-lime)]" />
            <span className="text-[10px] text-[var(--neon-lime)] bg-[var(--neon-lime)]/10 px-1.5 py-0.5 rounded">+124%</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">24.5k</div>
          <div className="text-[10px] text-white/50 uppercase tracking-wide">Tasks Automating</div>
        </div>
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-2">
            <Users size={16} className="text-[var(--neon-cyan)]" />
            <span className="text-[10px] text-[var(--neon-cyan)] bg-[var(--neon-cyan)]/10 px-1.5 py-0.5 rounded">+8.2x</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">$1.2M</div>
          <div className="text-[10px] text-white/50 uppercase tracking-wide">Revenue Impact</div>
        </div>
      </div>

      {/* Live Activity Feed */}
      <div className="flex-1 bg-black/20 rounded-xl border border-white/5 p-4 relative z-10 flex flex-col overflow-hidden">
        <div className="text-[10px] text-white/40 uppercase tracking-wider mb-3 flex items-center gap-2">
          <Globe size={12} /> Global Activity Map
        </div>

        <div className="flex-1 relative">
          <div className="absolute inset-0 flex items-end gap-1 opacity-50">
            {[40, 70, 50, 85, 60, 75, 45, 65, 55, 80, 70, 90].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-[var(--neon-cyan)] rounded-t-sm animate-pulse"
                style={{
                  height: `${h}%`,
                  opacity: 0.2 + (i * 0.05),
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>

          {/* Floating badges */}
          <div className="absolute top-2 right-2 bg-[var(--neon-lime)]/10 border border-[var(--neon-lime)]/20 px-2 py-1 rounded text-[10px] text-[var(--neon-lime)] flex items-center gap-1">
            <ArrowUpRight size={10} /> Optimization Active
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
        <div className="text-[10px] text-white/30 font-mono">ID: 8492-ACX-29</div>
        <div className="flex gap-1">
          <div className="w-1 h-1 rounded-full bg-white/20" />
          <div className="w-1 h-1 rounded-full bg-white/20" />
          <div className="w-1 h-1 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  const logos = ["FORBES", "FOX BUSINESS", "YAHOO FINANCE", "TEDX", "JOE ROGAN EXPERIENCE", "ESPN", "ABC NEWS"]

  return (
    <section className="pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-12 lg:pb-16 flex items-center px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 lg:gap-16 items-center w-full">
        <RevealSection>
          <div className="flex items-center gap-3 mb-4 md:mb-6 lg:mb-8 opacity-80">
            <span className="text-xs tracking-[2px] uppercase text-[#888]">As Seen In:</span>
            <div className="font-serif font-black text-lg md:text-xl tracking-tight text-white">Forbes</div>
          </div>

          <div className="tag-pill">Plaiground</div>
          <h1 className="font-display text-[clamp(2rem,8vw,5rem)] font-bold tracking-tight leading-[1.1] mb-4 md:mb-6 text-white hero-title">
            <span className="block">AI Revenue Architecture</span>
            <span className="block">
              for the <span className="editorial">Scaling Enterprise</span>
            </span>
          </h1>
          <h2 className="text-base md:text-lg font-light italic text-[var(--neon-cyan)] mb-4 md:mb-6 lg:mb-8 -mt-2 md:-mt-4 block">
            — We don&apos;t bolt on AI — we re-engineer your core workflows to deliver $100K+ in cost savings and
            revenue growth, guaranteed.
          </h2>

          <p className="text-[#94a3b8] text-base md:text-lg leading-relaxed font-light max-w-[65ch] mb-4 md:mb-6">
            The gap between your growth targets and your operational capacity is widening. While you need 200-person
            output, you can&apos;t afford 200-person headcount.
          </p>
          <p className="text-[#94a3b8] text-base md:text-lg leading-relaxed font-light max-w-[65ch] mb-6 md:mb-8 lg:mb-10">
            We build enterprise-grade AI systems that integrate directly into your existing infrastructure — turning
            your 50-100 person team into a{" "}
            <b className="text-white font-semibold">supercharged operation that scales without the overhead.</b>
          </p>

          <MegaButton href="#contact">Book Your Free ROI Assessment</MegaButton>

          <div className="mt-8 md:mt-12 lg:mt-14">
            <p className="text-xs uppercase tracking-wider mb-4 text-[#666] pl-4 md:pl-8">Products & Clients Featured In:</p>
            <div className="logo-marquee-container">
              <div className="logo-marquee-content">
                {[...logos, ...logos].map((logo, i) => (
                  <span key={i} className="logo-marquee-item">
                    {logo}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 text-center">
              <a href="#contact" className="text-sm text-[#aaa] underline underline-offset-4">
                Book Your Free ROI Assessment (Usually $5,000 — Free for Qualified Companies)
              </a>
            </div>
          </div>
        </RevealSection>

        <div style={{ perspective: "1000px" }} className="w-full hidden lg:block">
          <div
            className="tilt-card h-[500px]"
            style={{
              background: "linear-gradient(145deg, rgba(20,20,25,0.9), rgba(5,5,5,0.8))",
              transform: "rotateY(-10deg) rotateX(5deg)",
            }}
          >
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  )
}
