import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  component: Pricing,
  head: () => ({
    meta: [
      { title: "Pricing & Engagement Models — Poole Intelligence Group" },
      { name: "description", content: "Transparent pricing for AI consulting engagements. From $1,500 workshops to custom-managed solutions. Founding Client Program available." },
    ],
  }),
});

const pricingTiers = [
  {
    name: "AI Strategy & Consulting",
    price: "From $1,500",
    timeline: "1-6 weeks",
    bestFor: "Businesses exploring AI or needing a roadmap",
    includes: [
      "AI Discovery Workshop",
      "Strategy Roadmap with milestones",
      "Implementation project support",
      "ROI measurement framework",
      "Weekly check-ins during active phases",
    ],
  },
  {
    name: "Training & Enablement",
    price: "From $1,000",
    timeline: "1 day - 6 weeks",
    bestFor: "Teams building AI skills",
    includes: [
      "Group workshops (virtual or on-site)",
      "Executive AI briefings",
      "Custom learning paths by role",
      "Hands-on labs with your tools",
      "Ongoing cohort programs available",
    ],
  },
  {
    name: "Managed AI Solutions",
    price: "Custom Quote",
    timeline: "4-12 weeks initial, ongoing",
    bestFor: "Businesses wanting custom AI agents and automation",
    includes: [
      "Custom AI agents & chatbots",
      "Workflow automation pipelines",
      "Content generation workflows",
      "System integrations",
      "Ongoing monitoring & support",
    ],
  },
];

function Pricing() {
  return (
    <div className="min-h-dvh bg-white pt-32 pb-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
            Investment
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-[#1B2A4A] dark:text-gray-100">
            Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Every engagement is scoped to your specific needs. These ranges give you a clear starting point.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div key={tier.name} className="rounded-2xl border border-[#E8E8E8] bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h2 className="text-xl font-bold text-[#1B2A4A] dark:text-gray-100">{tier.name}</h2>
              <div className="mt-4 mb-2">
                <span className="text-3xl font-bold text-[#1B2A4A] dark:text-[#6B8DBF]">{tier.price}</span>
              </div>
              <p className="text-xs text-gray-500">{tier.timeline}</p>
              <p className="mt-4 text-xs font-medium text-[#3A5A8C] dark:text-[#6B8DBF]">{tier.bestFor}</p>
              <ul className="mt-6 space-y-2">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-[#1B2A4A] dark:text-[#6B8DBF]">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-8 block rounded-lg bg-[#1B2A4A] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#2A3A5A]"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* Founding Client Program */}
        <div className="mt-16 rounded-2xl border-2 border-[#C0C0C0] bg-[#F5F7FA] p-10 text-center dark:border-gray-700 dark:bg-gray-900">
          <span className="mb-3 inline-block rounded-full bg-[#1B2A4A] px-4 py-1 text-xs font-semibold text-white">Limited Time</span>
          <h2 className="text-2xl font-bold text-[#1B2A4A] dark:text-gray-100">Founding Client Program</h2>
          <p className="mt-3 mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            We're accepting a limited number of founding clients at reduced rates. You get hands-on delivery from the founder, discounted pricing, and the opportunity to shape our service offerings. Limited to 10 founding clients.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-xl bg-[#1B2A4A] px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#2A3A5A]"
          >
            Apply for Founding Client Pricing
          </Link>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Need a custom scope or have questions about pricing? <Link to="/contact" className="font-semibold text-[#1B2A4A] underline dark:text-[#6B8DBF]">Let's talk</Link>.</p>
          <p className="mt-2">Not sure if AI is right for you? Start with our <Link to="/assessment" className="font-semibold text-[#1B2A4A] underline dark:text-[#6B8DBF]">free AI Readiness Assessment</Link>.</p>
        </div>
      </div>
    </div>
  );
}
