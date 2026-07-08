import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/resources")({
  component: Resources,
  head: () => ({
    meta: [
      { title: "Resources — AI Guides, Tools & Templates | Poole Intelligence Group" },
      {
        name: "description",
        content:
          "Free AI resources for SMBs: AI Readiness Assessment, implementation checklist, ROI calculator, case study templates, and downloadable guides from Poole Intelligence Group.",
      },
      {
        name: "keywords",
        content:
          "AI resources, AI implementation checklist, ROI calculator, AI readiness assessment, business automation guides, Charlotte AI consultant",
      },
    ],
  }),
});

// Simple ROI calculator
function RoICalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [numEmployees, setNumEmployees] = useState(5);

  const weeklyCost = hoursPerWeek * hourlyRate * numEmployees;
  const monthlyCost = weeklyCost * 4.33;
  const annualCost = monthlyCost * 12;
  const estimatedSavings = Math.round(annualCost * 0.6); // 60% savings estimate
  const estimatedInvestment = Math.round(annualCost * 0.2); // 20% of current cost

  return (
    <div className="rounded-2xl border border-[#E8E8E8] bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <h3 className="text-xl font-bold text-[#1B2A4A] dark:text-gray-100">
        AI ROI Calculator
      </h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Estimate the potential savings from automating repetitive tasks with AI.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium text-[#1B2A4A] dark:text-gray-200">
            Hours per week on manual tasks
          </label>
          <input
            type="range"
            min={5}
            max={80}
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            className="w-full accent-[#1B2A4A]"
          />
          <span className="text-sm font-semibold text-[#1B2A4A] dark:text-gray-200">{hoursPerWeek} hrs</span>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-[#1B2A4A] dark:text-gray-200">
            Avg hourly rate ($)
          </label>
          <input
            type="range"
            min={20}
            max={200}
            step={5}
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="w-full accent-[#1B2A4A]"
          />
          <span className="text-sm font-semibold text-[#1B2A4A] dark:text-gray-200">${hourlyRate}/hr</span>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-[#1B2A4A] dark:text-gray-200">
            Employees affected
          </label>
          <input
            type="range"
            min={1}
            max={50}
            value={numEmployees}
            onChange={(e) => setNumEmployees(Number(e.target.value))}
            className="w-full accent-[#1B2A4A]"
          />
          <span className="text-sm font-semibold text-[#1B2A4A] dark:text-gray-200">{numEmployees} people</span>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-[#F5F7FA] p-4 text-center dark:bg-gray-900">
          <p className="text-xs text-gray-500 dark:text-gray-400">Current Annual Cost</p>
          <p className="text-2xl font-bold text-[#1B2A4A] dark:text-gray-100">
            ${annualCost.toLocaleString()}
          </p>
        </div>
        <div className="rounded-xl bg-emerald-50 p-4 text-center dark:bg-emerald-950/30">
          <p className="text-xs text-emerald-600 dark:text-emerald-400">Estimated Annual Savings</p>
          <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
            ${estimatedSavings.toLocaleString()}
          </p>
        </div>
        <div className="rounded-xl bg-[#F0F2F5] p-4 text-center dark:bg-gray-800">
          <p className="text-xs text-gray-500 dark:text-gray-400">Typical AI Investment</p>
          <p className="text-2xl font-bold text-[#3A5A8C] dark:text-[#6B8DBF]">
            ${estimatedInvestment.toLocaleString()}
          </p>
        </div>
      </div>

      <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
        * Estimates based on industry averages for SMB AI automation projects. Results vary by engagement.
      </p>
    </div>
  );
}

function Resources() {
  return (
    <div className="min-h-dvh bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="bg-gradient-to-b from-white via-[#F5F7FA] to-white pt-32 pb-20 dark:from-gray-950 dark:via-[#0A1628]/20 dark:to-gray-950">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
            Free Resources
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            AI Tools &{" "}
            <span className="bg-gradient-to-r from-[#1B2A4A] to-[#3A5A8C] bg-clip-text text-transparent dark:from-[#6B8DBF] dark:to-[#3A5A8C]">
              Resources
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Free tools, templates, and guides to help you make smarter AI
            decisions for your business.
          </p>
        </div>
      </section>

      {/* AI Readiness Assessment */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-[#E8E8E8] bg-[#F5F7FA] p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#1B2A4A] dark:text-gray-100">
                  AI Readiness Assessment
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  A 5-minute diagnostic to find your fastest path to AI ROI.
                  Score your organization and get personalized next steps.
                </p>
              </div>
              <Link
                to="/assessment"
                className="shrink-0 rounded-xl bg-[#1B2A4A] px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#2A3A5A]"
              >
                Take the Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Implementation Checklist */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-[#1B2A4A] dark:text-gray-100">
            AI Implementation Checklist
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            A step-by-step guide to planning and executing your first AI project.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                phase: "Phase 1: Discovery",
                items: [
                  "Identify the specific business problem",
                  "Map current workflow and pain points",
                  "Define success criteria and KPIs",
                  "Assess data readiness",
                  "Identify stakeholders and champions",
                ],
              },
              {
                phase: "Phase 2: Planning",
                items: [
                  "Evaluate build vs. buy options",
                  "Estimate budget and timeline",
                  "Define technical requirements",
                  "Assess security and compliance needs",
                  "Create implementation roadmap",
                ],
              },
              {
                phase: "Phase 3: Execution",
                items: [
                  "Set up development environment",
                  "Build or configure the solution",
                  "Integrate with existing systems",
                  "Test with real data and edge cases",
                  "Train the team on the new system",
                ],
              },
              {
                phase: "Phase 4: Launch",
                items: [
                  "Run parallel with existing process",
                  "Monitor performance and errors",
                  "Gather user feedback",
                  "Optimize based on real usage",
                  "Document the new workflow",
                ],
              },
              {
                phase: "Phase 5: Scale",
                items: [
                  "Measure ROI against KPIs",
                  "Identify next automation opportunities",
                  "Expand to additional use cases",
                  "Build internal AI capability",
                  "Establish ongoing optimization cadence",
                ],
              },
            ].map((phase) => (
              <div
                key={phase.phase}
                className="rounded-xl border border-[#E8E8E8] bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950"
              >
                <h3 className="mb-3 font-bold text-[#1B2A4A] dark:text-gray-100">
                  {phase.phase}
                </h3>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className="mt-0.5 shrink-0 text-[#3A5A8C] dark:text-[#6B8DBF]">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <RoICalculator />
        </div>
      </section>

      {/* Case Study Template */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#1B2A4A] dark:text-gray-100">
                  Case Study Template
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  A structured framework for documenting and sharing AI success
                  stories. Includes a sample case study.
                </p>
              </div>
              <Link
                to="/contact"
                className="shrink-0 rounded-xl border border-[#1B2A4A] px-8 py-4 text-sm font-semibold text-[#1B2A4A] transition hover:bg-[#F5F7FA] dark:border-[#6B8DBF] dark:text-[#6B8DBF] dark:hover:bg-gray-900"
              >
                Request the Template
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Guides */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-[#1B2A4A] dark:text-gray-100">
            Downloadable Guides
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Deep-dive guides to help you navigate your AI journey.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "AI Readiness Assessment PDF",
                desc: "Printable version of our assessment for offline use and team discussions.",
                link: "/assessment",
                label: "View Online",
              },
              {
                title: "AI Vendor Evaluation Guide",
                desc: "A framework for evaluating AI tools and vendors. Coming soon.",
                comingSoon: true,
              },
              {
                title: "AI Strategy Roadmap Template",
                desc: "A customizable template for your AI implementation plan. Coming soon.",
                comingSoon: true,
              },
            ].map((guide, i) => (
              <div
                key={i}
                className="rounded-xl border border-[#E8E8E8] bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950"
              >
                <h3 className="font-bold text-[#1B2A4A] dark:text-gray-100">{guide.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{guide.desc}</p>
                <div className="mt-4">
                  {(guide as any).comingSoon ? (
                    <span className="rounded-full bg-[#F0F2F5] px-3 py-1 text-xs font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                      Coming Soon
                    </span>
                  ) : (
                    <Link
                      to={(guide as any).link}
                      className="text-sm font-semibold text-[#1B2A4A] transition hover:text-[#3A5A8C] dark:text-[#6B8DBF]"
                    >
                      {(guide as any).label} &rarr;
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B2A4A] py-24 dark:bg-[#0A1628]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Need Help Putting These Resources to Work?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            We'll help you apply these tools to your specific business context.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-block rounded-xl bg-white px-10 py-4 text-sm font-semibold text-[#1B2A4A] shadow-lg transition hover:bg-gray-100"
            >
              Talk to a Consultant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}