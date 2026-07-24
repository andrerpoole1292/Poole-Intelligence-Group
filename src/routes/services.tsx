import { FloatingCta } from "~/components/shared";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AI Strategy, Automation & Implementation | Poole Intelligence Group" },
      { name: "description", content: "Enterprise-caliber AI services for SMBs: AI strategy, workflow automation, AI agents, digital strategy, and implementation." },
      { name: "keywords", content: "AI consulting, workflow automation, AI agents, digital transformation, AI implementation" },
    ],
  }),
  component: Services,
});

const services = [
  {
    id: "consulting",
    title: "AI Strategy & Consulting",
    tagline: "From discovery to roadmap to execution",
    pricing: "From $2,500",
    description: "We immerse ourselves in your business — understanding your goals, data landscape, and AI readiness. You get a tailored roadmap with prioritized initiatives, timelines, and ROI projections. Then we help you implement the highest-impact solutions.",
    outcome: "A clear, actionable AI strategy you can execute with confidence.",
    features: [
      "Identify repetitive tasks that AI can automate",
      "Create a 90-day AI implementation roadmap",
      "Recommend the best AI tools for your budget",
      "Estimate expected ROI and time savings",
      "Hands-on implementation support",
    ],
  },
  {
    id: "training",
    title: "Training & Enablement",
    tagline: "Build AI fluency across your organization",
    pricing: "From $1,500",
    description: "Hands-on workshops, ongoing cohorts, and executive briefings that build real AI skills — not just theory. Your teams learn prompt engineering, workflow automation, and responsible AI use through practical exercises with their own tools.",
    outcome: "Teams that confidently use AI to be more productive every day.",
    features: [
      "Help your team save 15–30 hours per month on routine tasks",
      "Reduce time spent on emails, reports, and data entry",
      "Eliminate hours of manual research and document review",
      "Build internal confidence with AI tools your team will actually use",
      "Custom learning paths by role",
    ],
  },
  {
    id: "managed",
    title: "Managed AI Solutions",
    tagline: "Custom AI agents, deployed and maintained for you",
    pricing: "From $5,000 setup + custom retainer",
    description: "We build, deploy, and maintain custom AI solutions — chatbots, automation pipelines, and content workflows. No need to hire specialized talent. We handle everything from architecture to ongoing optimization.",
    outcome: "24/7 AI-powered support and automation that works accurately based on your content.",
    features: [
      "Automate customer support responses 24/7",
      "Reduce manual data entry and document processing time",
      "Generate reports, proposals, and content in minutes",
      "Route and triage inquiries without human intervention",
      "Ongoing monitoring & optimization included",
    ],
  },
];

function Services() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-white via-[#F5F7FA] to-white dark:from-gray-950 dark:via-[#0A1628]/30 dark:to-gray-950">
      {/* Hero */}
      <section className="pt-28 pb-16 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-4 py-1.5 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
            What We Do
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#1B2A4A] dark:text-gray-100 sm:text-5xl">
            AI Services for{" "}
            <span className="text-[#3A5A8C]">SMBs</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Enterprise-caliber AI strategy, automation, and implementation — without the
            enterprise price tag or the hype.
          </p>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, i) => (
        <ServiceSection key={service.id} service={service} isEven={i % 2 === 0} />
      ))}

      {/* Pricing Summary — enterprise buyers need to see this at a glance */}
      <section className="bg-white py-20 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
              Investment
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#1B2A4A] dark:text-gray-100">
              Transparent Pricing
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Every engagement is scoped to your needs. Here's a starting range so you know where you stand.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {services.map((s) => (
              <div key={s.id} className="rounded-2xl border border-[#E8E8E8] bg-[#F5F7FA] p-8 dark:border-gray-800 dark:bg-gray-900">
                <h3 className="text-lg font-bold text-[#1B2A4A] dark:text-gray-100">{s.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{s.tagline}</p>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-bold text-[#1B2A4A] dark:text-[#6B8DBF]">{s.pricing}</span>
                </div>
                <ul className="space-y-2">
                  {s.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-[#3A5A8C] dark:text-[#6B8DBF]">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Need a custom scope? <a href="https://calendly.com/hello-pooleintelligencegroup/30min" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1B2A4A] underline dark:text-[#6B8DBF]">Book a discovery call</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise FAQ */}
      <section className="bg-[#F5F7FA] py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-white px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300">
              Questions?
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#1B2A4A] dark:text-gray-100">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            <FaqItem
              q="What's your engagement model? Do you work on-site or remotely?"
              a="We're a remote-first firm based in Charlotte, NC, serving clients nationwide. We typically start with a deep-dive discovery phase (on-site or virtual), then execute the work in sprints with weekly check-ins. On-site visits are available for key milestones."
            />
            <FaqItem
              q="How do you handle data security and privacy?"
              a="We treat client data with the highest care. All data is encrypted at rest and in transit. We sign NDAs and BAAs. Your data is never used to train public AI models. Our security controls are aligned with SOC 2 standards."
            />
            <FaqItem
              q="What kind of results can I expect, and how do you measure them?"
              a="Every engagement starts with a measurement framework tied to your KPIs. Typical results include 40-70% reduction in manual processing time, 3-5x ROI within the first year, and measurable improvements in team productivity. We report against these metrics monthly."
            />
            <FaqItem
              q="How long does a typical engagement take?"
              a="Discovery workshops take 1-2 weeks. Strategy roadmaps are delivered in 1-6 weeks. Managed AI solutions are deployed in 4-12 weeks depending on complexity. Most clients see their first results within 60 days."
            />
            <FaqItem
              q="What if I need ongoing support after the engagement?"
              a="We offer monthly retainer packages for ongoing optimization, monitoring, and support. Many clients start with a project engagement and transition to a retainer once they see results. We're flexible."
            />
            <FaqItem
              q="I'm not sure if AI is right for my business. Can you help me figure that out?"
              a="That's exactly what our Discovery Workshop is designed for. We'll assess your operations, data, and goals — and give you an honest answer about where AI can help and where it can't. No pressure, no jargon, just clarity."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#1B2A4A] to-[#3A5A8C] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Build Smarter?
          </h2>
          <p className="mt-4 text-lg text-blue-200">
            Let's talk about where you are, where you want to be, and how AI can get you there.
          </p>
          <div className="mt-10">
            <a
              href="https://calendly.com/hello-pooleintelligencegroup/30min" target="_blank" rel="noopener noreferrer"
              className="inline-block rounded-xl bg-white px-10 py-4 text-sm font-semibold text-[#1B2A4A] shadow-lg transition hover:bg-blue-50"
            >
              Schedule a 30-Minute Discovery Call
            </a>
          </div>
        </div>
      </section>
      <FloatingCta />
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-xl border border-[#E8E8E8] bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
      <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-[#1B2A4A] dark:text-gray-100">
        {q}
        <svg className="h-5 w-5 shrink-0 text-gray-400 transition group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{a}</p>
    </details>
  );
}

function ServiceSection({
  service,
  isEven,
}: {
  service: (typeof services)[0];
  isEven: boolean;
}) {
  return (
    <section
      id={service.id}
      className={`scroll-mt-20 border-b border-[#E8E8E8] py-20 dark:border-gray-800 ${
        isEven
          ? "bg-white dark:bg-gray-950"
          : "bg-[#F5F7FA] dark:bg-gray-900"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full border border-[#C0C0C0] bg-white px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300">
              {service.pricing}
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] dark:text-gray-100">
            {service.title}
          </h2>
          <p className="mt-2 text-lg text-gray-500">{service.tagline}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              {service.description}
            </p>
            <div className="mt-8">
              <h3 className="mb-3 text-sm font-semibold text-[#1B2A4A] dark:text-gray-100">
                What you'll get
              </h3>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-[#1B2A4A]">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-xl border border-[#E8E8E8] bg-[#F5F7FA] p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-2 text-sm font-semibold text-[#1B2A4A] dark:text-gray-100">
              The outcome
            </h3>
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
              {service.outcome}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}