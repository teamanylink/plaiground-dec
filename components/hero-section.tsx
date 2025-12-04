import RevealSection from "./reveal-section"
import MegaButton from "./mega-button"

function HeroCardSkeleton() {
  return (
    <div className="h-full flex flex-col p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 rounded-full bg-[var(--neon-cyan)] opacity-60" />
        <div className="h-2 w-24 rounded-full skeleton-shimmer opacity-40" />
        <div className="ml-auto flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white/15" />
          <div className="w-2 h-2 rounded-full bg-white/15" />
          <div className="w-2 h-2 rounded-full bg-white/15" />
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Stats row */}
        <div className="flex gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex-1 h-16 rounded-lg bg-[#0a0a0c] p-3 flex flex-col justify-between">
              <div
                className="h-1.5 w-1/2 rounded-full skeleton-shimmer opacity-30"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
              <div
                className="h-3 w-3/4 rounded-full skeleton-shimmer opacity-40"
                style={{ animationDelay: `${i * 0.1 + 0.05}s` }}
              />
            </div>
          ))}
        </div>

        {/* Chart area */}
        <div className="flex-1 rounded-lg bg-[#0a0a0c] p-4 flex items-end gap-1.5">
          {[30, 50, 35, 70, 45, 80, 55, 65, 40, 75].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t skeleton-shimmer opacity-35"
              style={{ height: `${h}%`, animationDelay: `${i * 0.06}s` }}
            />
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex gap-3">
          <div className="flex-1 h-10 rounded-lg bg-[#0a0a0c] flex items-center px-3 gap-2">
            <div className="w-4 h-4 rounded skeleton-shimmer opacity-30" />
            <div className="h-1.5 flex-1 rounded-full skeleton-shimmer opacity-30" style={{ animationDelay: "0.1s" }} />
          </div>
          <div className="w-10 h-10 rounded-lg skeleton-shimmer opacity-40" style={{ animationDelay: "0.2s" }} />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-cyan)] opacity-50" />
        <div className="h-1 w-16 rounded-full skeleton-shimmer opacity-25" />
        <div
          className="ml-auto h-1 w-10 rounded-full skeleton-shimmer opacity-25"
          style={{ animationDelay: "0.15s" }}
        />
      </div>
    </div>
  )
}

export default function HeroSection() {
  const logos = ["FORBES", "FOX BUSINESS", "YAHOO FINANCE", "TEDX", "JOE ROGAN EXPERIENCE", "ESPN", "ABC NEWS"]

  return (
    <section className="pt-32 pb-16 flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center w-full">
        <RevealSection>
          <div className="flex items-center gap-3 mb-8 opacity-80">
            <span className="text-xs tracking-[2px] uppercase text-[#888]">As Seen In:</span>
            <div className="font-serif font-black text-xl tracking-tight text-white">Forbes</div>
          </div>

          <div className="tag-pill">Plaiground</div>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(3rem,6vw,5rem)] font-bold tracking-tight leading-[1.1] mb-6 text-white hero-title">
            <span className="block">AI Revenue Architecture</span>
            <span className="block">
              for the <span className="editorial">Scaling Enterprise</span>
            </span>
          </h1>
          <h2 className="text-lg font-light italic text-[var(--neon-cyan)] mb-8 -mt-4 block">
            — We don&apos;t bolt on AI — we re-engineer your core workflows to deliver $100K+ in cost savings and
            revenue growth, guaranteed.
          </h2>

          <p className="text-[#94a3b8] text-lg leading-relaxed font-light max-w-[65ch] mb-6">
            The gap between your growth targets and your operational capacity is widening. While you need 200-person
            output, you can&apos;t afford 200-person headcount.
          </p>
          <p className="text-[#94a3b8] text-lg leading-relaxed font-light max-w-[65ch] mb-10">
            We build enterprise-grade AI systems that integrate directly into your existing infrastructure — turning
            your 50-100 person team into a{" "}
            <b className="text-white font-semibold">supercharged operation that scales without the overhead.</b>
          </p>

          <MegaButton href="#contact">Book Your Free ROI Assessment</MegaButton>

          <div className="mt-14">
            <p className="text-xs uppercase tracking-wider mb-4 text-[#666] pl-8">Products & Clients Featured In:</p>
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
            <HeroCardSkeleton />
          </div>
        </div>
      </div>
    </section>
  )
}
