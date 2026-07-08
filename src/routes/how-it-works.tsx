import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorks,
  head: () => ({
    meta: [
      { title: "How It Works — Poole Intelligence Group" },
      { name: "description", content: "Our proven PIG|4 Framework: Diagnose → Blueprint → Build & Deploy → Scale & Optimize. See how we deliver AI results for SMBs." },
    ],
  }),
});

function HowItWorks() {
  return (
    <div className="min-h-dvh bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="bg-gradient-to-b from-white via-[#F5F7FA] to-white pt-32 pb-20 dark:from-gray-950 dark:via-[#0A1628]/20 dark:to-gray-950">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
            Our Process
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            How We{" "}
            <span className="bg-gradient-to-r from-[#1B2A4A] to-[#3A5A8C] bg-clip-text text-transparent dark:from-[#6B8DBF] dark:to-[#3A5A8C]">
              Work
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            The PIG|4 Framework — a proven methodology that takes you from uncertainty to measurable AI results.
          </p>
        </div>
      </section>

      {/* The Framework */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="space-y-12">
            <Phase number="1" title="Diagnose" time="Week 1-2" color="from-[#1B2A4A] to-[#2A3A5A]">
              <p>We start by understanding your business — your goals, challenges, data landscape, and team capabilities. This phase includes:</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-sm">&#8226; Stakeholder interviews to understand business objectives</li>
                <li className="flex items-start gap-2 text-sm">&#8226; Current workflow mapping and pain point identification</li>
                <li className="flex items-start gap-2 text-sm">&#8226; Data readiness assessment</li>
                <li className="flex items-start gap-2 text-sm">&#8226; AI opportunity identification and prioritization</li>
              </ul>
            </Phase>
            <Phase number="2" title="Blueprint" time="Week 2-4" color="from-[#2A3A5A] to-[#3A5A8C]">
              <p>We design a custom roadmap with clear milestones, KPIs, and a business case tied to your budget. Deliverables include:</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-sm">&#8226; Prioritized AI implementation roadmap (90-day / 6-month / 12-month)</li>
                <li className="flex items-start gap-2 text-sm">&#8226; Technology stack recommendations (vendor-neutral)</li>
                <li className="flex items-start gap-2 text-sm">&#8226; ROI projections with conservative and optimistic scenarios</li>
                <li className="flex items-start gap-2 text-sm">&#8226; Risk assessment and mitigation plan</li>
              </ul>
            </Phase>
            <Phase number="3" title="Build & Deploy" time="Week 4-12" color="from-[#3A5A8C] to-[#4A6A9C]">
              <p>We build, test, and integrate your AI solution into your existing workflows. During deployment:</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-sm">&#8226; Development in weekly sprints with visible progress</li>
                <li className="flex items-start gap-2 text-sm">&#8226; Integration with your existing tools (CRM, Slack, email, etc.)</li>
                <li className="flex items-start gap-2 text-sm">&#8226; Parallel run period to validate accuracy and performance</li>
                <li className="flex items-start gap-2 text-sm">&#8226; Team training on the new system</li>
              </ul>
            </Phase>
            <Phase number="4" title="Scale & Optimize" time="Ongoing" color="from-[#4A6A9C] to-[#5A7AAC]">
              <p>AI is not a set-it-and-forget-it solution. We continuously monitor, optimize, and expand. This includes:</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-sm">&#8226; Monthly performance reviews and optimization sprints</li>
                <li className="flex items-start gap-2 text-sm">&#8226; Model retraining and accuracy improvements</li>
                <li className="flex items-start gap-2 text-sm">&#8226; Expansion to additional use cases and departments</li>
                <li className="flex items-start gap-2 text-sm">&#8226; Ongoing support via Slack, email, or phone</li>
              </ul>
            </Phase>
          </div>
        </div>
      </section>

      {/* What to expect from a Discovery Call */}
      <section className="bg-[#F5F7FA] py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#1B2A4A] dark:text-gray-100">
              What to Expect from Your Discovery Call
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              A 30-minute conversation. No pitch, no pressure — just clarity.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-[#E8E8E8] bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1B2A4A] text-lg font-bold text-white">1</div>
              <h3 className="mt-4 font-bold text-[#1B2A4A] dark:text-gray-100">Tell Us About Your Business</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">What do you do? What's working? What's not? We listen first.</p>
            </div>
            <div className="rounded-xl border border-[#E8E8E8] bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1B2A4A] text-lg font-bold text-white">2</div>
              <h3 className="mt-4 font-bold text-[#1B2A4A] dark:text-gray-100">We'll Be Honest</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">If AI isn't the right answer, we'll tell you. If it is, we'll outline the path.</p>
            </div>
            <div className="rounded-xl border border-[#E8E8E8] bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1B2A4A] text-lg font-bold text-white">3</div>
              <h3 className="mt-4 font-bold text-[#1B2A4A] dark:text-gray-100">Next Steps, No Pressure</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">If there's a fit, we'll propose a next step. If not, we'll part as friends. No follow-up spam.</p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-block rounded-xl bg-[#1B2A4A] px-10 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#2A3A5A]"
            >
              Schedule Your Free Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* Communication Style */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-[#1B2A4A] dark:text-gray-100 text-center">How We Communicate</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-[#E8E8E8] bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <h3 className="font-bold text-[#1B2A4A] dark:text-gray-100">Weekly Standups</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">15-minute check-ins every week to review progress, flag issues, and align on priorities.</p>
            </div>
            <div className="rounded-xl border border-[#E8E8E8] bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <h3 className="font-bold text-[#1B2A4A] dark:text-gray-100">Slack / Email</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Real-time communication during active sprints. Response within 4 business hours.</p>
            </div>
            <div className="rounded-xl border border-[#E8E8E8] bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <h3 className="font-bold text-[#1B2A4A] dark:text-gray-100">Monthly Reports</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Metrics dashboard showing progress against KPIs, ROI tracking, and next sprint priorities.</p>
            </div>
            <div className="rounded-xl border border-[#E8E8E8] bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <h3 className="font-bold text-[#1B2A4A] dark:text-gray-100">Executive Summaries</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Quarterly business reviews for leadership — strategic updates, not technical deep dives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B2A4A] py-24 dark:bg-[#0A1628]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Start Your AI Journey?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Book a free 30-minute discovery call. No pitch, no pressure — just clarity on what's possible.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-block rounded-xl bg-white px-10 py-4 text-sm font-semibold text-[#1B2A4A] shadow-lg transition hover:bg-gray-100"
            >
              Schedule Your Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Phase({ number, title, time, color, children }: { number: string; title: string; time: string; color: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-lg font-bold text-white`}>
          {number}
        </div>
        <div className="mt-2 w-px flex-1 bg-[#E8E8E8] dark:bg-gray-700" />
      </div>
      <div className="pb-12">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold text-[#1B2A4A] dark:text-gray-100">{title}</h2>
          <span className="rounded-full bg-[#F0F2F5] px-2.5 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">{time}</span>
        </div>
        <div className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {children}
        </div>
      </div>
    </div>
  );
}
