import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/founder")({
  component: Founder,
  head: () => ({
    meta: [
      { title: "Meet the Founder — Andre Poole | Poole Intelligence Group" },
      {
        name: "description",
        content:
          "Meet Andre Poole, founder of Poole Intelligence Group. MBA graduate, DBA candidate, U.S. Army National Guard Sergeant. Helping SMBs build smarter operations with practical AI.",
      },
      { property: "og:title", content: "Meet the Founder — Andre Poole | Poole Intelligence Group" },
      {
        property: "og:description",
        content:
          "From the boardroom to the barracks — Andre Poole brings mission-focused AI strategy to SMBs. MBA, DBA candidate, and Army Sergeant.",
      },
      {
        name: "keywords",
        content:
          "Andre Poole, AI consultant Charlotte, AI consulting founder, business automation expert, AI strategy consultant",
      },
    ],
  }),
});

function Founder() {
  return (
    <div className="min-h-dvh bg-white dark:bg-gray-950">
      {/* ─── Hero ─── */}
      <section className="bg-gradient-to-b from-white via-[#F5F7FA] to-white pt-32 pb-20 dark:from-gray-950 dark:via-[#0A1628]/20 dark:to-gray-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-5">
            {/* Photo */}
            <div className="md:col-span-2">
              <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-[#E8E8E8] bg-[#F5F7FA] shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <img
                  src="/headshot.png"
                  alt="Andre Poole — Founder & Principal Consultant"
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
            {/* Bio */}
            <div className="md:col-span-3">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
                🪖 Founder & Principal Consultant | U.S. Army Veteran
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Andre Poole —{" "}
                <span className="bg-gradient-to-r from-[#1B2A4A] to-[#3A5A8C] bg-clip-text text-transparent dark:from-[#6B8DBF] dark:to-[#3A5A8C]">
                  Founder & Principal Consultant
                </span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Veteran, MBA, DBA Candidate. Building smarter businesses with AI
                — from the boardroom to the barracks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── The Founder Story ─── */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-[#1B2A4A] dark:text-gray-100">
            Why I Started Poole Intelligence Group
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              I'll be honest: I didn't set out to start an AI consulting firm.
            </p>
            <p>
              I set out to understand a problem.
            </p>
            <p>
              For years, I watched small and medium-sized businesses get sold on
              AI the wrong way. They'd hear about a new tool at a conference, sign
              up for a trial, and try to find a use for it — backwards. Or they'd
              hire a big consulting firm that delivered a 200-page strategy report
              and a bill for six figures, with no actual implementation.
            </p>
            <p>
              The gap was obvious: businesses with 10 to 250 employees needed the
              same strategic rigor that enterprises got — but delivered at their
              speed, their scale, and their budget.
            </p>
            <p>
              So I built that firm.
            </p>
            <p>
              Poole Intelligence Group exists to deliver enterprise-caliber AI
              strategy and implementation to growing businesses. We don't do hype.
              We don't do slide decks and disappear. We do strategy, automation,
              and measurable results — and we do it at a price that makes sense
              for a business that isn't a Fortune 500 company.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Mission & Vision ─── */}
      <section className="bg-[#F5F7FA] py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-10 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <h2 className="text-2xl font-bold text-[#1B2A4A] dark:text-gray-100">
              Mission & Vision
            </h2>
            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-[#3A5A8C] dark:text-[#6B8DBF]">
                  My Mission
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  To make sophisticated AI strategy and implementation accessible
                  to every business — not just those with "Chief AI Officer" on
                  the org chart. Every engagement should leave a client with more
                  clarity, capability, and confidence than they had before.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-[#3A5A8C] dark:text-[#6B8DBF]">
                  My Vision
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  A world where every business — regardless of size, industry, or
                  technical sophistication — can harness AI to build smarter
                  operations, free their teams from repetitive work, and compete
                  effectively in an increasingly digital economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Military Background ─── */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-[#1B2A4A] dark:text-gray-100">
            From the Barracks to the Boardroom
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            I serve as a Sergeant in the U.S. Army National Guard — and that
            experience shapes every aspect of how I run this business.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                step: "1. Assess the situation",
                desc: "Understand the terrain, the resources, and the constraints before making a plan.",
              },
              {
                step: "2. Develop a clear plan",
                desc: "A good plan is simple, communicated to everyone, and accounts for contingencies.",
              },
              {
                step: "3. Execute with precision",
                desc: "Do what you said you'd do, in the order you said you'd do it.",
              },
              {
                step: "4. Adapt when conditions change",
                desc: "No plan survives contact with reality. The ability to adapt is more important than the plan itself.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-[#E8E8E8] bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950"
              >
                <h3 className="font-bold text-[#1B2A4A] dark:text-gray-100">
                  {item.step}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-xl border border-[#E8E8E8] bg-[#F5F7FA] p-6 dark:border-gray-800 dark:bg-gray-900">
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              This isn't just a philosophy I carry into my work — it's the
              literal framework I apply to every client engagement. The{" "}
              <strong className="text-[#1B2A4A] dark:text-gray-100">
                PIG|4 Framework
              </strong>{" "}
              — Diagnose, Blueprint, Build & Deploy, Scale & Optimize — is a
              direct reflection of that military mission-planning discipline.
            </p>
          </div>
          <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-900/20">
            <p className="text-sm text-amber-800 dark:text-amber-300">
              <strong>Active Secret Security Clearance:</strong> I hold an active
              Secret Security Clearance, which means I've been rigorously vetted
              and entrusted with sensitive information at the federal level. For
              my clients, this means absolute confidence in my handling of their
              proprietary data and internal information.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Education ─── */}
      <section className="bg-[#F5F7FA] py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-[#1B2A4A] dark:text-gray-100">
            Business Strategy Foundations
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-[#E8E8E8] bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="font-bold text-[#1B2A4A] dark:text-gray-100">
                MBA — Strategic Management
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                I earned my MBA with a focus on strategic management, building
                expertise in organizational leadership, strategic
                decision-making, and operations management. This isn't theory
                collected in a classroom — it's a framework I apply to every
                client engagement, from assessing their competitive position to
                designing operational improvements.
              </p>
            </div>
            <div className="rounded-xl border border-[#E8E8E8] bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="font-bold text-[#1B2A4A] dark:text-gray-100">
                DBA Candidate — Digital Media & Strategic Content
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                I'm currently pursuing a Doctorate in Business Administration with
                a concentration in Digital Media and Strategic Content. My
                doctoral research sits at the intersection of AI, digital content
                strategy, and business transformation — the exact space where
                Poole Intelligence Group operates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Veteran Advantage ─── */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-[#1B2A4A] dark:text-gray-100">
            The Veteran Advantage in Business Consulting
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Veteran-owned businesses bring a specific set of qualities to every
            engagement:
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#E8E8E8] dark:border-gray-700">
                  <th className="pb-3 pr-4 font-semibold text-[#1B2A4A] dark:text-gray-200">
                    Quality
                  </th>
                  <th className="pb-3 font-semibold text-[#1B2A4A] dark:text-gray-200">
                    What It Means for You
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E8E8] dark:divide-gray-700">
                {[
                  {
                    quality: "Mission focus",
                    meaning:
                      "We define clear objectives, execute against them, and measure success. No scope creep. No mission drift.",
                  },
                  {
                    quality: "Accountability",
                    meaning:
                      "I say what I'll do and do what I said. If things change, I communicate immediately.",
                  },
                  {
                    quality: "Adaptability",
                    meaning:
                      "I've operated in environments where conditions change by the minute. Your business challenges won't rattle me.",
                  },
                  {
                    quality: "Integrity",
                    meaning:
                      "I've been entrusted with sensitive information at the federal level. Your data and privacy are safe with me.",
                  },
                  {
                    quality: "Discipline",
                    meaning:
                      "Every engagement follows a structured methodology. Nothing is improvised.",
                  },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="py-3 pr-4 font-semibold text-gray-800 dark:text-gray-200">
                      {row.quality}
                    </td>
                    <td className="py-3 text-gray-600 dark:text-gray-400">
                      {row.meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Career Timeline ─── */}
      <section className="bg-[#F5F7FA] py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-[#1B2A4A] dark:text-gray-100">
            Career Timeline
          </h2>
          <div className="mt-8 space-y-4">
            {[
              ["Present", "Founder & Principal Consultant", "Poole Intelligence Group — Leading AI strategy, automation, and digital transformation engagements for SMBs"],
              ["Previous", "Corporate Training & Business Leadership", "Designed and delivered training programs, led operational initiatives, built content strategies across multiple organizations"],
              ["Previous", "MBA — Strategic Management", "Graduate business education focused on strategic decision-making, operations, and organizational leadership"],
              ["Current", "DBA Candidate — Digital Media & Strategic Content", "Doctoral research at the intersection of AI, digital content strategy, and business transformation"],
              ["Present", "Sergeant, U.S. Army National Guard", "Leadership, mission planning, and execution under real-world constraints"],
            ].map(([period, role, context], i) => (
              <div key={i} className="rounded-xl border border-[#E8E8E8] bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <div className="flex flex-wrap items-start gap-3">
                  <span className="rounded-full bg-[#F0F2F5] px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:bg-gray-800 dark:text-[#6B8DBF]">
                    {period}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#1B2A4A] dark:text-gray-100">{role}</h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{context}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── The Gap We Fill ─── */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-[#1B2A4A] dark:text-gray-100">
            The Gap We Fill
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            The market for AI consulting was broken for small and medium-sized
            businesses.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-900/20">
              <h3 className="text-sm font-bold text-red-700 dark:text-red-400">
                The Old Way
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-red-600 dark:text-red-300">
                <li>• Boutique freelancers who can build a chatbot but don't understand business strategy</li>
                <li>• Big firms charging $50K+ for strategy with no implementation</li>
                <li>• No single point of accountability from strategy through delivery</li>
              </ul>
            </div>
            <div className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-900/20">
              <h3 className="text-sm font-bold text-green-700 dark:text-green-400">
                What We Built
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-green-600 dark:text-green-300">
                <li>✓ Enterprise-caliber strategic thinking</li>
                <li>✓ Practical, hands-on implementation</li>
                <li>✓ Pricing that makes sense for a 50-person business</li>
                <li>✓ One point of contact from strategy through delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Personal Quote ─── */}
      <section className="bg-[#F5F7FA] py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-10 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <blockquote className="border-l-4 border-[#1B2A4A] pl-6 text-lg italic text-gray-700 dark:border-[#6B8DBF] dark:text-gray-300">
              "If we work together, here's what you can expect: I'll listen more
              than I talk. I'll ask hard questions. I'll tell you when AI is the
              right answer — and when it's not. And I'll build whatever we decide
              to pursue, myself, alongside your team.
              <br />
              <br />
              No handoffs. No surprise bills. No hype.
              <br />
              <br />
              Just a straight-talking veteran with a commitment to delivering
              results that matter."
            </blockquote>
            <p className="mt-6 text-sm font-semibold text-[#1B2A4A] dark:text-gray-100">
              — Andre Poole
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#1B2A4A] py-24 dark:bg-[#0A1628]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Work With a Consultant Who Actually Understands Your Business?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            A 30-minute conversation is all it takes to see if there's a fit.
            Andre will personally take the call — no sales team, no junior
            associate, no runaround.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-block rounded-xl bg-white px-10 py-4 text-sm font-semibold text-[#1B2A4A] shadow-lg transition hover:bg-gray-100"
            >
              Schedule a Call with Andre →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Veteran-Owned Badge ─── */}
      <section className="border-t border-[#E8E8E8] bg-white py-8 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            🇺🇸 <strong>Veteran-Owned Business</strong> — Poole Intelligence
            Group is proudly veteran-owned and operated. Active Secret Security
            Clearance holder. MBA, DBA Candidate.
          </p>
        </div>
      </section>
    </div>
  );
}