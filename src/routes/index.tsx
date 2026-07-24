import { createFileRoute, Link } from "@tanstack/react-router";
import { WhyPigSection, FloatingCta } from "~/components/shared";
import AnimatedWorkflow from "~/components/AnimatedWorkflow";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div>
      {/* ─── Hero Section ─── */}
      <section className="min-h-dvh bg-gradient-to-b from-white via-[#F5F7FA] to-white dark:from-gray-950 dark:via-[#0A1628]/30 dark:to-gray-950">
        <div className="mx-auto flex min-h-dvh max-w-6xl flex-col items-center justify-center px-6 pt-20 text-center">
          <span className="mb-6 rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-4 py-1.5 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
            Practical AI for Growing Businesses — 10 to 250 Employees
          </span>
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-[#1B2A4A] to-[#3A5A8C] bg-clip-text text-transparent dark:from-[#6B8DBF] dark:to-[#3A5A8C]">
              Reclaim 15–30 Hours
            </span>
            <br />
            Per Employee, Every Month
          </h1>
          <p className="mt-4 max-w-2xl text-xl font-semibold text-[#1B2A4A] dark:text-gray-200">
            AI That Actually Works — Without the Overwhelm
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-xl">
            We help you automate repetitive admin work, cut customer response
            times from hours to minutes, and convert more leads — without a
            technical team or a six-figure budget.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://calendly.com/hello-pooleintelligencegroup/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#1B2A4A] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#1B2A4A]/25 transition hover:bg-[#2A3A5A] hover:shadow-[#1B2A4A]/40"
            >
              Book a Free Discovery Call
            </a>
            <Link
              to="/how-it-works"
              className="rounded-xl border border-[#C0C0C0] bg-white px-8 py-4 text-sm font-semibold text-[#1B2A4A] transition hover:bg-[#F5F7FA] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Above-the-Fold Results Bar ─── */}
      <section className="border-y border-[#E8E8E8] bg-white py-12 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            What Our Clients Typically Achieve
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              icon="⏱️"
              metric="15–30 hrs"
              label="Saved per employee per month"
              sub="On repetitive admin & data entry"
            />
            <MetricCard
              icon="📉"
              metric="80% fewer"
              label="Manual errors"
              sub="In data entry & processing"
            />
            <MetricCard
              icon="⚡"
              metric="Response in"
              label="Seconds, not hours"
              sub="AI-powered chat & email automation"
            />
            <MetricCard
              icon="📈"
              metric="3–5×"
              label="Content output"
              sub="With the same team size"
            />
          </div>
          <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            We'll show you exactly what AI could save your team —{" "}
            <a
              href="https://calendly.com/hello-pooleintelligencegroup/30min" target="_blank" rel="noopener noreferrer"
              className="font-semibold text-[#1B2A4A] underline dark:text-[#6B8DBF]"
            >
              book a free discovery call
            </a>
            . No pitch. Just math.
          </p>
        </div>
      </section>

      {/* ─── Lead Magnet ─── */}
      <section className="bg-[#1B2A4A] py-20 dark:bg-[#0A1628]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white">
            Free Resource
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The AI Readiness Assessment
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            A 5-minute diagnostic to find your fastest path to AI ROI. Score
            your organization across 5 key dimensions and get a personalized
            action plan.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/assessment"
              className="rounded-xl bg-white px-8 py-4 text-sm font-semibold text-[#1B2A4A] shadow-lg transition hover:bg-gray-100"
            >
              Take the Assessment
            </Link>
            <p className="text-sm text-gray-400">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Trust Badges ─── */}
      <section className="bg-white py-20 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <TrustBadgeItem
              icon="🪖"
              title="Veteran-Owned Business"
              subtitle="Disciplined mission execution"
            />
            <TrustBadgeItem
              icon="🎓"
              title="MBA — Strategic Management"
              subtitle="Strategy, operations & leadership"
            />
            <TrustBadgeItem
              icon="📖"
              title="Doctoral Candidate (DBA)"
              subtitle="Digital media & strategic content"
            />
            <TrustBadgeItem
              icon="🔒"
              title="Active Secret Security Clearance"
              subtitle="Trusted with sensitive information"
            />
          </div>
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              <strong className="text-[#1B2A4A] dark:text-gray-200">
                Why growing businesses trust Poole Intelligence Group:
              </strong>{" "}
              We bring a rare combination of credentials to every engagement. An
              MBA in strategic management and doctoral candidacy provide academic
              rigor. A U.S. Army National Guard background — including an active
              Secret Security Clearance — provides discipline, precision, and
              trustworthiness. You're not hiring a generalist. You're hiring
              someone who has been entrusted with sensitive information at the
              federal level.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Services Overview — Outcome-Focused ─── */}
      <section className="bg-[#F5F7FA] py-24 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-white px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300">
              What We Do
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What You'll Get —{" "}
              <span className="text-[#3A5A8C]">Not What We'll Do</span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Every engagement is structured around one question:{" "}
              <em>"What does the client actually walk away with?"</em>
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <ServiceCardOutcome
              title="AI Strategy & Consulting"
              tagline="Clarity you can act on. A plan you can execute."
              icon="🎯"
              outcome="A prioritized implementation roadmap with clear milestones, budget estimates, and a 90-day action plan — not a 200-page report you'll never read."
              points={[
                "Which 3–5 AI opportunities drive the greatest ROI",
                "What data, resources, and timeline each requires",
                "Which vendors to trust — and which to avoid",
                "How to measure success in the first 90 days",
              ]}
              link="/services#consulting"
            />
            <ServiceCardOutcome
              title="AI Agents & Workflow Automation"
              tagline="Custom AI systems that do the work — deployed in weeks."
              icon="🤖"
              outcome="AI systems connected to your existing tools that eliminate hours of manual work — deployed, tested, and documented within weeks."
              points={[
                "AI handling support, research, data entry & lead qualification",
                "Automated workflows connecting CRM, email & documents",
                "A documented system your team can operate",
                "Measurable time and cost savings from day one",
              ]}
              link="/services#managed"
            />
            <ServiceCardOutcome
              title="Digital Strategy & Implementation"
              tagline="From strategic clarity to deployed solutions."
              icon="⚡"
              outcome="A comprehensive digital strategy with AI-powered execution — from content workflows to marketing automation to full-stack implementation."
              points={[
                "3–5× faster content production, consistent quality",
                "Marketing automation that actually converts",
                "Systems that work together, not against each other",
                "A partner who builds what they design",
              ]}
              link="/services#managed"
            />
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B2A4A] transition hover:text-[#3A5A8C] dark:text-[#6B8DBF] dark:hover:text-[#8BAED4]"
            >
              Explore all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ROI Section ─── */}
      <section className="bg-white py-24 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
              The Numbers
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The ROI of AI:{" "}
              <span className="text-[#3A5A8C]">Measurable, Predictable, Repeatable</span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Not hypothetical benefits. Real numbers from real engagements.
            </p>
          </div>

          {/* Impact Cards */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ImpactCard
              icon="⏱️"
              metric="15–30 hrs"
              label="Per employee per month"
              sub="Reclaimed from admin & manual data entry"
            />
            <ImpactCard
              icon="⚡"
              metric="Seconds"
              label="Customer response time"
              sub="Down from hours via AI chat & email automation"
            />
            <ImpactCard
              icon="📈"
              metric="2–5×"
              label="More leads converted"
              sub="Through automated follow-up & intelligent qualification"
            />
            <ImpactCard
              icon="💰"
              metric="3–5×"
              label="Content output"
              sub="Same team — AI-powered workflows eliminate bottlenecks"
            />
          </div>

          {/* Cost-Benefit Summary */}
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="rounded-2xl border border-[#E8E8E8] bg-[#F5F7FA] p-8 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-6 text-center text-lg font-bold text-[#1B2A4A] dark:text-gray-100">
                Cost-Benefit Summary
              </h3>
              <p className="mb-6 text-center text-sm text-gray-500">
                Most first engagements range from <strong>$2,500 to $15,000+</strong>
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#E8E8E8] dark:border-gray-700">
                      <th className="pb-3 font-semibold text-[#1B2A4A] dark:text-gray-200">Area</th>
                      <th className="pb-3 font-semibold text-[#1B2A4A] dark:text-gray-200">Typical Improvement</th>
                      <th className="pb-3 font-semibold text-[#1B2A4A] dark:text-gray-200">Annual Value (50-person co.)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8E8E8] dark:divide-gray-700">
                    <tr>
                      <td className="py-3 text-gray-700 dark:text-gray-300">Labor savings</td>
                      <td className="py-3 text-gray-700 dark:text-gray-300">15–30 hrs/emp/mo reclaimed</td>
                      <td className="py-3 font-semibold text-[#1B2A4A] dark:text-[#6B8DBF]">$150K–$300K</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-700 dark:text-gray-300">Support efficiency</td>
                      <td className="py-3 text-gray-700 dark:text-gray-300">50–70% of inquiries automated</td>
                      <td className="py-3 font-semibold text-[#1B2A4A] dark:text-[#6B8DBF]">$30K–$60K</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-700 dark:text-gray-300">Lead conversion</td>
                      <td className="py-3 text-gray-700 dark:text-gray-300">20–40% improvement in follow-up</td>
                      <td className="py-3 font-semibold text-[#1B2A4A] dark:text-[#6B8DBF]">$50K–$200K</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-700 dark:text-gray-300">Content production</td>
                      <td className="py-3 text-gray-700 dark:text-gray-300">3–5× output with same team</td>
                      <td className="py-3 font-semibold text-[#1B2A4A] dark:text-[#6B8DBF]">$40K–$100K</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 rounded-lg bg-green-50 p-4 text-center dark:bg-green-900/20">
                <p className="text-sm font-semibold text-green-800 dark:text-green-300">
                  Typical payback period: <span className="text-lg">2–4 months</span>
                </p>
                <p className="mt-1 text-xs text-green-700 dark:text-green-400">
                  Scenario: 50-person firm invests $15K → 80% reduction in manual reporting → $96K/year savings
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industry Trust / Social Proof ─── */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-10 text-center text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            Trusted by teams in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-gray-300 dark:text-gray-700">
            <span className="text-2xl font-bold tracking-tight">Professional Services</span>
            <span className="text-2xl font-bold tracking-tight">E-Commerce &amp; Retail</span>
            <span className="text-2xl font-bold tracking-tight">SaaS &amp; Technology</span>
            <span className="text-2xl font-bold tracking-tight">Traditional Industries</span>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-[#F5F7FA] p-6 text-center dark:bg-gray-900">
              <div className="text-3xl font-bold text-[#1B2A4A] dark:text-[#6B8DBF]">
                10–250
              </div>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Employees — our focus
              </div>
            </div>
            <div className="rounded-xl bg-[#F5F7FA] p-6 text-center dark:bg-gray-900">
              <div className="text-3xl font-bold text-[#1B2A4A] dark:text-[#6B8DBF]">
                30–60
              </div>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Days to first measurable result
              </div>
            </div>
            <div className="rounded-xl bg-[#F5F7FA] p-6 text-center dark:bg-gray-900">
              <div className="text-3xl font-bold text-[#1B2A4A] dark:text-[#6B8DBF]">
                Flat-fee
              </div>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Transparent pricing from day one
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedWorkflow />

      {/* ─── The PIG|4 Framework ─── */}
      <section className="bg-white py-24 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
              Our Process
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The PIG<span className="text-[#3A5A8C]">|4</span> Framework
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              A proven 4-phase methodology that takes you from uncertainty to measurable AI-powered results.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            <Step number="01" title="Diagnose">
              We audit your operations, data readiness, and team capabilities to identify where AI delivers the highest return — and where it doesn't.
            </Step>
            <Step number="02" title="Blueprint">
              We design a custom roadmap with phased milestones, clear KPIs, risk mitigation, and a business case tied to your budget.
            </Step>
            <Step number="03" title="Build & Deploy">
              We develop, test, and integrate solutions into your workflows. No handoffs — we stay hands-on until it's working.
            </Step>
            <Step number="04" title="Scale & Optimize">
              We monitor performance, retrain models, and iterate. Your AI capability grows as your business grows.
            </Step>
          </div>
        </div>
      </section>

      {/* ─── Industries We Serve ─── */}
      <section className="bg-[#F5F7FA] py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-white px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300">
              Who We Help
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#1B2A4A] dark:text-gray-100">
              Industries We Serve
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              We specialize in helping businesses where AI can make an immediate dent — reducing manual work, improving accuracy, and freeing up your team for higher-value work.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <IndustryCard name="Professional Services" description="Law firms, accounting, consulting — where billable hours matter and document review eats up time." />
            <IndustryCard name="Healthcare Practices" description="Medical offices, dental clinics, therapy practices — reduce paperwork and automate patient communications." />
            <IndustryCard name="Construction & Trades" description="Estimators, project managers, field teams — streamline estimates, schedules, and compliance docs." />
            <IndustryCard name="Logistics & Distribution" description="Warehouses, delivery services, supply chain — automate tracking, routing, and customer updates." />
            <IndustryCard name="E-Commerce & Retail" description="Online stores, product teams — automate product descriptions, customer service, and inventory alerts." />
            <IndustryCard name="Small Businesses (10–250)" description="Any growing business that needs to do more with the same headcount. If you're stretched thin, we can help." />
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <WhyPigSection />

      {/* ─── No-Pressure Guarantee ─── */}
      <section className="bg-white py-20 dark:bg-gray-950">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
            Our Promise
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#1B2A4A] dark:text-gray-100">
            No-Pressure Discovery Call
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            If we don't believe AI will create measurable value for your business, we'll tell you. 
            We only recommend projects where we see a clear return on investment. No pitch, no pressure, 
            no follow-up spam — just an honest conversation about what's possible.
          </p>
          <div className="mt-10">
            <a
              href="https://calendly.com/hello-pooleintelligencegroup/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-[#1B2A4A] px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#2A3A5A]"
            >
              Book Your Free Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* ─── Enterprise Trust Signals ─── */}
      <section className="border-y border-[#E8E8E8] bg-white py-16 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
              Enterprise-Grade
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#1B2A4A] dark:text-gray-100">
              Built for Business Criticality
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              We take security, compliance, and data privacy as seriously as you do.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <TrustBadge title="Data Privacy" description="All client data is encrypted at rest and in transit. We sign NDAs and BAAs. Your data never trains public models." />
            <TrustBadge title="Secure by Default" description="SOC 2 aligned controls. Role-based access, audit logging, and vulnerability scanning on every deployment." />
            <TrustBadge title="Vendor Neutral" description="We recommend the right AI platform for your use case — not a platform we resell. AWS, GCP, Azure, OpenAI, Anthropic, and open-source." />
            <TrustBadge title="US-Based" description="Based in Charlotte, NC. All delivery and data handling occurs within the United States." />
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="bg-[#1B2A4A] py-24 dark:bg-[#0A1628]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What Could 30 Hours Per Employee Per Month Do for Your Business?
          </h2>
          <ul className="mx-auto mt-6 max-w-lg space-y-3 text-left text-gray-300">
            <li className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              More time for revenue-generating work
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              Faster response to customers
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              Fewer manual errors
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              Less team burnout
            </li>
          </ul>
          <p className="mt-6 text-lg text-gray-300">
            A 30-minute conversation will tell you exactly what's possible for
            your business. No pitch. No pressure. Just an honest assessment.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-block rounded-xl bg-white px-10 py-4 text-sm font-semibold text-[#1B2A4A] shadow-lg transition hover:bg-gray-100"
            >
              Calculate Your AI Savings →
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Or{" "}
            <a
              to="/services"
              className="font-semibold text-[#6B8DBF] underline"
            >
              explore our services first
            </a>
          </p>
        </div>
      </section>

      <FloatingCta />
    </div>
  );
}

/* ─── Component Definitions ─── */

function MetricCard({ icon, metric, label, sub }: { icon: string; metric: string; label: string; sub: string }) {
  return (
    <div className="rounded-xl border border-[#E8E8E8] bg-white p-6 text-center dark:border-gray-800 dark:bg-gray-950">
      <div className="text-2xl">{icon}</div>
      <div className="mt-2 text-2xl font-bold text-[#1B2A4A] dark:text-[#6B8DBF]">{metric}</div>
      <div className="mt-1 text-sm font-semibold text-gray-800 dark:text-gray-200">{label}</div>
      <div className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{sub}</div>
    </div>
  );
}

function TrustBadgeItem({ icon, title, subtitle }: { icon: string; title: string; subtitle: string }) {
  return (
    <div className="rounded-xl border border-[#E8E8E8] bg-[#F5F7FA] p-6 text-center dark:border-gray-800 dark:bg-gray-900">
      <div className="text-3xl">{icon}</div>
      <h3 className="mt-3 text-sm font-bold text-[#1B2A4A] dark:text-gray-100">{title}</h3>
      <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{subtitle}</p>
    </div>
  );
}

function ServiceCardOutcome({
  title,
  tagline,
  icon,
  outcome,
  points,
  link,
}: {
  title: string;
  tagline: string;
  icon: string;
  outcome: string;
  points: string[];
  link: string;
}) {
  return (
    <div className="group rounded-2xl border border-[#E8E8E8] bg-white p-8 shadow-sm transition hover:border-[#C0C0C0] hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
      <div className="mb-4 text-3xl">{icon}</div>
      <h3 className="mb-1 text-lg font-bold text-[#1B2A4A] dark:text-gray-100">{title}</h3>
      <p className="mb-4 text-xs font-medium text-[#3A5A8C] dark:text-[#6B8DBF]">{tagline}</p>
      <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{outcome}</p>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-500">
        You'll know:
      </p>
      <ul className="mb-6 space-y-2">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
            <span className="mt-0.5 shrink-0 text-[#3A5A8C] dark:text-[#6B8DBF]">✓</span>
            {p}
          </li>
        ))}
      </ul>
      <Link
        to={link as "/services"}
        hash={link.split("#")[1]}
        className="text-sm font-semibold text-[#1B2A4A] transition hover:text-[#3A5A8C] dark:text-[#6B8DBF] dark:hover:text-[#8BAED4]"
      >
        Learn more →
      </Link>
    </div>
  );
}

function ImpactCard({ icon, metric, label, sub }: { icon: string; metric: string; label: string; sub: string }) {
  return (
    <div className="rounded-xl border border-[#E8E8E8] bg-[#F5F7FA] p-6 text-center dark:border-gray-800 dark:bg-gray-900">
      <div className="text-2xl">{icon}</div>
      <div className="mt-2 text-2xl font-bold text-[#1B2A4A] dark:text-[#6B8DBF]">{metric}</div>
      <div className="mt-1 text-sm font-semibold text-gray-800 dark:text-gray-200">{label}</div>
      <div className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{sub}</div>
    </div>
  );
}

function Step({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F0F2F5] text-lg font-bold text-[#1B2A4A] dark:bg-gray-800 dark:text-[#6B8DBF]">
        {number}
      </div>
      <h3 className="mb-2 text-lg font-bold text-[#1B2A4A] dark:text-gray-100">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {children}
      </p>
    </div>
  );
}

function IndustryCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="rounded-xl border border-[#E8E8E8] bg-white p-5 dark:border-gray-800 dark:bg-gray-950">
      <h3 className="text-sm font-bold text-[#1B2A4A] dark:text-gray-100">{name}</h3>
      <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

function TrustBadge({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-xl border border-[#E8E8E8] bg-[#F5F7FA] p-6 dark:border-gray-800 dark:bg-gray-900">
      <h3 className="mb-2 font-bold text-[#1B2A4A] dark:text-gray-100">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}