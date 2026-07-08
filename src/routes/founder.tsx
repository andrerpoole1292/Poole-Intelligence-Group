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
      {/* Hero */}
      <section className="bg-gradient-to-b from-white via-[#F5F7FA] to-white pt-32 pb-20 dark:from-gray-950 dark:via-[#0A1628]/20 dark:to-gray-950">
        <div className="mx-auto max-6xl px-6">
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
              <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
                Founder & Principal Consultant
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Meet Andre Poole —{" "}
                <span className="bg-gradient-to-r from-[#1B2A4A] to-[#3A5A8C] bg-clip-text text-transparent dark:from-[#6B8DBF] dark:to-[#3A5A8C]">
                  Founder & Principal Consultant
                </span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Building smarter businesses with AI — from the boardroom to the
                barracks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Bio */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              Andre Poole is the founder and principal consultant of Poole
              Intelligence Group, a consulting firm that helps small and
              medium-sized businesses build smarter operations through practical
              AI implementation, workflow automation, and digital strategy.
            </p>
            <p>
              His path to AI consulting is anything but conventional. With an
              MBA focused on strategic management and currently pursuing a
              Doctorate in Business Administration with a concentration in
              Digital Media and Strategic Content, Andre brings rigorous
              academic grounding to every client engagement. But his education
              is only part of the story.
            </p>
            <p>
              As a Sergeant in the U.S. Army National Guard, Andre learned the
              discipline of mission-focused execution — assess the situation,
              develop a plan, execute with precision, and adapt when conditions
              change. It's a mindset he brings to every consulting engagement:
              understand the business reality, develop a strategy that accounts
              for real-world constraints, deliver results, and iterate based on
              what actually happens.
            </p>
            <p>
              Before founding Poole Intelligence Group, Andre held leadership
              roles across business operations, corporate training, and
              strategic content development. He's worked with organizations
              ranging from early-stage startups to established professional
              services firms, helping them navigate the gap between AI's promise
              and its practical application.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#F5F7FA] py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-10 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <h2 className="text-2xl font-bold text-[#1B2A4A] dark:text-gray-100">His Philosophy</h2>
            <blockquote className="mt-6 border-l-4 border-[#1B2A4A] pl-6 text-lg italic text-gray-600 dark:border-[#6B8DBF] dark:text-gray-400">
              "AI is not a magic wand — it's a tool. The question isn't 'what
              can AI do?' It's 'what should AI do for{' '}
              <em>this</em> business, <em>right now</em>, to deliver measurable
              results?"
            </blockquote>
            <p className="mt-6 text-gray-600 dark:text-gray-400">
              Andre founded Poole Intelligence Group because he saw a persistent
              gap in the market: small and medium-sized businesses were being
              sold AI solutions designed for enterprises with dedicated data
              science teams and six-figure implementation budgets. They needed
              something different — enterprise-caliber strategy delivered with
              the speed, practicality, and accountability that growing
              businesses require.
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              His approach is simple: strategy before technology, outcomes
              before features, and honest counsel before revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-[#1B2A4A] dark:text-gray-100">Career Timeline</h2>
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

      {/* Why Work With Andre */}
      <section className="bg-[#F5F7FA] py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-[#1B2A4A] dark:text-gray-100">Why Work With Andre?</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            You're not getting a generic consultant. You're getting:
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "A strategist who builds",
                desc: "Every engagement includes hands-on implementation. No strategy-only engagements that leave you with a binder and a bill.",
              },
              {
                title: "A skeptic of hype",
                desc: "Andre has seen enough AI buzzwords to last a lifetime. He'll tell you when AI is the right answer — and when it's not.",
              },
              {
                title: "A partner who's done this before",
                desc: "From professional services to e-commerce to SaaS, the firms Andre works with get a practitioner who understands their operational reality.",
              },
              {
                title: "Someone who takes mission execution seriously",
                desc: "Military service instilled a simple principle: say what you'll do, do what you said, and communicate clearly when things change.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-[#E8E8E8] bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
                <h3 className="font-bold text-[#1B2A4A] dark:text-gray-100">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B2A4A] py-24 dark:bg-[#0A1628]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Want to Work With Someone Who Actually Understands Your Business?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            A 30-minute conversation is all it takes to see if there's a fit. No
            pitch, no pressure — just an honest discussion about where you are
            and where you want to be.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-block rounded-xl bg-white px-10 py-4 text-sm font-semibold text-[#1B2A4A] shadow-lg transition hover:bg-gray-100"
            >
              Schedule a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}