import RevealSection from "./reveal-section"
import TiltCard from "./tilt-card"

export default function FoundersSection() {
  const founders = [
    {
      name: "Denis Estimon",
      role: "Co-Founder & Chief Technology Officer",
      title: "The Integration Architect",
      description:
        "Denis specializes in building enterprise-grade AI infrastructure that connects seamlessly with legacy systems and scales under production load.",
      accentColor: "var(--neon-lime)",
      image: "https://8a3ve9etip.ufs.sh/f/81EbqdfItm9plZwb3urDo6cnmzi7XhCdNq2IJSPVxalFbGyg",
    },
    {
      name: "Lucas Spinella",
      role: "Co-Founder & Strategy Partner",
      title: "The ROI Engineer",
      description:
        "Lucas designs AI implementations with clear financial outcomes — ensuring every dollar invested delivers measurable returns to the P&L.",
      accentColor: "var(--neon-cyan)",
      image: "https://8a3ve9etip.ufs.sh/f/81EbqdfItm9paqqemnMFd8pJKfQmW4ZRMgIj6wtNikT1PVeX",
    },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6">
      <RevealSection>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-center tracking-tight leading-[1.1] mb-16 max-w-[1000px] mx-auto">
          Meet The <span className="editorial">Founders</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {founders.map((founder, i) => (
            <TiltCard key={i} className="text-center">
              <div
                className="w-[120px] h-[120px] rounded-full bg-[#111] mx-auto mb-8 relative overflow-hidden"
                style={{
                  border: `2px solid ${founder.accentColor}`,
                  boxShadow: `0 0 20px ${founder.accentColor}40`
                }}
              >
                <img
                  src={founder.image || "/placeholder.svg"}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-xl text-white">{founder.name}</h3>
              <p className="font-bold mb-2" style={{ color: founder.accentColor }}>
                {founder.role}
              </p>
              <h4 className="font-display text-lg mb-4 text-white">{founder.title}</h4>
              <p className="text-sm text-[#94a3b8]">{founder.description}</p>
            </TiltCard>
          ))}
        </div>
      </RevealSection>
    </section>
  )
}
