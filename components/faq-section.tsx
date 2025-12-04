import RevealSection from "./reveal-section"
import TiltCard from "./tilt-card"

export default function FAQSection() {
  const faqs = [
    {
      question: '"Do we need an internal AI team?"',
      answer:
        "No. We function as your fractional AI leadership team. You bring domain expertise; we handle strategy, architecture, development, and deployment.",
    },
    {
      question: '"How long until we see ROI?"',
      answer:
        "Most operational automation projects show measurable cost savings within 30-45 days. Revenue intelligence systems typically demonstrate impact within 60-90 days.",
    },
    {
      question: '"What if our systems are old or complex?"',
      answer:
        "That's our specialty. We've integrated with legacy ERPs, custom databases, and decades-old infrastructure. Complexity is our competitive advantage.",
    },
    {
      question: '"Do we own everything you build?"',
      answer:
        "Yes. 100% code ownership, full IP rights, complete infrastructure control. No recurring licensing fees. You can take it in-house anytime.",
    },
    {
      question: '"What if the ROI projections are wrong?"',
      answer:
        "Our 90-day guarantee means if we miss our financial targets, we refund your investment and continue working at no cost until we deliver.",
    },
    {
      question: '"How secure is our data?"',
      answer:
        "Enterprise-grade security with end-to-end encryption, SOC 2 compliance support, and full NDAs. We can work within your existing security infrastructure.",
    },
    {
      question: '"Can you integrate with [our specific system]?"',
      answer:
        "Almost certainly yes. We've built integrations for SAP, Oracle, Microsoft Dynamics, Salesforce, custom APIs, and legacy on-premise systems.",
    },
    {
      question: '"What makes you different from consultancies?"',
      answer:
        "We don't just strategize — we build, deploy, and guarantee results. You get McKinsey-level strategy with in-house engineering execution, at a fraction of the cost.",
    },
  ]

  return (
    <section className="py-24">
      <RevealSection>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2.5rem,5vw,4rem)] text-center tracking-tight leading-[1.1] mb-16 max-w-[1000px] mx-auto">
          Frequently Asked <span className="editorial">Questions</span>
        </h2>

        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <TiltCard key={i} className="!p-8">
                <h4 className="font-[family-name:var(--font-space-grotesk)] text-base mb-2 text-white">
                  {faq.question}
                </h4>
                <p className="text-sm text-[#aaa]">{faq.answer}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>
  )
}
