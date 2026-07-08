import { createFileRoute, Link } from "@tanstack/react-router";
import { WhyPigSection, FloatingCta } from "~/components/shared";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-dvh bg-gradient-to-b from-white via-[#F5F7FA] to-white dark:from-gray-950 dark:via-[#0A1628]/30 dark:to-gray-950">
        <div className="mx-auto flex min-h-dvh max-w-6xl flex-col items-center justify-center px-6 pt-20 text-center">
          <span className="mb-6 rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-4 py-1.5 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
            AI for Small & Mid-Sized Businesses
          </span>
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Building{" "}
            <span className="bg-gradient-to-r from-[#1B2A4A] to-[#3A5A8C] bg-clip-text text-transparent dark:from-[#6B8DBF] dark:to-[#3A5A8C]">
              Smarter Businesses
            </span>
            <br />
            with AI
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-xl">
            Poole Intelligence Group helps SMBs build smarter operations with
            AI — enterprise-caliber strategy, workflow automation, AI agents,
            digital strategy, and implementation — without the enterprise price
            tag or the hype.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-xl bg-[#1B2A4A] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#1B2A4A]/25 transition hover:bg-[#2A3A5A] hover:shadow-[#1B2A4A]/40"
            >
              Schedule a Free Discovery Call
            </Link>
            <Link
              to="/how-it-works"
              className="rounded-xl border border-[#C0C0C0] bg-white px-8 py-4 text-sm font-semibold text-[#1B2A4A] transition hover:bg-[#F5F7FA] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
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

      {/* Social Proof — Real metrics with context */}
      <section className="border-y border-[#E8E8E8] bg-white py-16 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            Serving teams in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-gray-300 dark:text-gray-700">
            <span className="text-2xl font-bold tracking-tight">Professional Services</span>
            <span className="text-2xl font-bold tracking-tight">E-Commerce</span>
            <span className="text-2xl font-bold tracking-tight">SaaS</span>
            <span className="text-2xl font-bold tracking-tight">Traditional Industries</span>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-[#F5F7FA] p-6 text-center dark:bg-gray-900">
              <div className="text-3xl font-bold text-[#1B2A4A] dark:text-[#6B8DBF]">
                10–250
              </div>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Employee sweet spot
              </div>
            </div>
            <div className="rounded-xl bg-[#F5F7FA] p-6 text-center dark:bg-gray-900">
              <div className="text-3xl font-bold text-[#1B2A4A] dark:text-[#6B8DBF]">
                2&ndash;12
              </div>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Weeks to first results
              </div>
            </div>
            <div className="rounded-xl bg-[#F5F7FA] p-6 text-center dark:bg-gray-900">
              <div className="text-3xl font-bold text-[#1B2A4A] dark:text-[#6B8DBF]">
                <span className="text-2xl">$</span>5K&ndash;<span className="text-2xl">$</span>50K
              </div>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Typical engagement range
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-[#F5F7FA] py-24 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-white px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300">
              What We Do
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Enterprise-Caliber AI for SMBs
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              We deliver AI strategy, workflow automation, AI agents, digital
              strategy, and implementation — without the enterprise price tag.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <ServiceCard
              title="AI Strategy & Consulting"
              description="Discovery workshops, strategy roadmaps, and implementation projects tailored to your business goals."
              features={[
                "Identify tasks AI can automate in your business",
                "Create a 90-day AI implementation roadmap",
                "Recommend the best AI tools for your budget",
                "Estimate expected ROI and time savings",
              ]}
              link="/services#consulting"
            />
            <ServiceCard
              title="Training & Enablement"
              description="Group workshops, ongoing cohorts, and executive briefings that build real AI skills across your organization."
              features={[
                "Help your team save 5–10 hours per week",
                "Reduce time spent on emails and data entry",
                "Build confidence with AI tools they'll actually use",
                "Custom learning paths by role",
              ]}
              link="/services#training"
            />
            <ServiceCard
              title="Managed AI Solutions"
              description="Custom AI agents, automation pipelines, chatbots, and content workflows — deployed and maintained for you."
              features={[
                "Automate customer support responses 24/7",
                "Reduce manual data entry and document processing",
                "Generate reports and proposals in minutes",
                "Ongoing monitoring & optimization included",
              ]}
              link="/services#managed"
            />
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B2A4A] transition hover:text-[#3A5A8C] dark:text-[#6B8DBF] dark:hover:text-[#8BAED4]"
            >
              Learn more about our services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* The PIG Methodology — named, distinctive approach */}
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

      {/* Who We Help */}
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

      {/* No Pressure Guarantee */}
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
            <Link
              to="/contact"
              className="inline-block rounded-xl bg-[#1B2A4A] px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#2A3A5A]"
            >
              Book Your Free Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* Sample Automation Workflow — honest example, not fabricated results */}
      <section className="bg-[#F5F7FA] py-24 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-white px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300">
              Sample Workflow
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#1B2A4A] dark:text-gray-100">
              Example: AI Document Processing
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              This example demonstrates how an AI workflow can reduce repetitive administrative work. Actual results vary depending on business processes and implementation.
            </p>
          </div>
          <div className="mt-12 mx-auto max-w-4xl">
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-lg font-bold text-[#1B2A4A] dark:text-gray-100 mb-4">The Scenario</h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 mb-6">
                A professional services firm receives hundreds of documents per week — contracts, invoices, and reports — 
                that must be reviewed, categorized, and entered into their CRM. This manual process consumes roughly 
                20-30 hours of staff time per week.
              </p>
              <h3 className="text-lg font-bold text-[#1B2A4A] dark:text-gray-100 mb-4">The AI Workflow</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1B2A4A] text-xs font-bold text-white">1</span>
                  <div>
                    <p className="text-sm font-semibold text-[#1B2A4A] dark:text-gray-100">Ingest</p>
                    <p className="text-xs text-gray-500">Documents are uploaded to a secure cloud bucket. An AI pipeline detects file types and extracts text.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1B2A4A] text-xs font-bold text-white">2</span>
                  <div>
                    <p className="text-sm font-semibold text-[#1B2A4A] dark:text-gray-100">Classify</p>
                    <p className="text-xs text-gray-500">An LLM categorizes each document (contract, invoice, report, etc.) and extracts key fields: date, amount, parties, due dates.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1B2A4A] text-xs font-bold text-white">3</span>
                  <div>
                    <p className="text-sm font-semibold text-[#1B2A4A] dark:text-gray-100">Review</p>
                    <p className="text-xs text-gray-500">Staff review AI-generated summaries and flagged items in a dashboard. Edits are submitted back to the system.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1B2A4A] text-xs font-bold text-white">4</span>
                  <div>
                    <p className="text-sm font-semibold text-[#1B2A4A] dark:text-gray-100">Integrate</p>
                    <p className="text-xs text-gray-500">Approved data syncs to the CRM automatically. Staff are notified of completed items via Slack/email.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-lg bg-amber-50 border border-amber-200 p-4">
                <p className="text-xs text-amber-800">
                  <strong>Note:</strong> This is an illustrative workflow. Actual implementations vary based on data complexity, system integrations, and business requirements.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Want to see how this would apply to your business? <Link to="/contact" className="font-semibold text-[#1B2A4A] underline dark:text-[#6B8DBF]">Let's build a sample together</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Founding Client Program — honest alternative to fake testimonials */}
      <section className="bg-white py-24 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
              Founding Client Program
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#1B2A4A] dark:text-gray-100">
              Be Among the First
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              We're currently accepting a limited number of founding clients who will receive hands-on implementation and discounted pricing in exchange for candid feedback — and, if satisfied, a future testimonial.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#E8E8E8] bg-[#F5F7FA] p-8 dark:border-gray-800 dark:bg-gray-900">
              <div className="text-2xl font-bold text-[#1B2A4A] dark:text-[#6B8DBF] mb-3">Discounted Pricing</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Founding clients receive reduced rates on strategy workshops, implementation projects, and managed solutions.</p>
            </div>
            <div className="rounded-2xl border border-[#E8E8E8] bg-[#F5F7FA] p-8 dark:border-gray-800 dark:bg-gray-900">
              <div className="text-2xl font-bold text-[#1B2A4A] dark:text-[#6B8DBF] mb-3">Hands-On Delivery</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Work directly with the founder. Priority access to new capabilities and features as they're developed.</p>
            </div>
            <div className="rounded-2xl border border-[#E8E8E8] bg-[#F5F7FA] p-8 dark:border-gray-800 dark:bg-gray-900">
              <div className="text-2xl font-bold text-[#1B2A4A] dark:text-[#6B8DBF] mb-3">Shape the Offering</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Your feedback directly influences our service packages, tools, and methodology. Help us build a better consulting firm.</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Limited to 10 founding clients. No commitment required — we'll start with a free discovery call.
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-xl bg-[#1B2A4A] px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#2A3A5A]"
            >
              Apply for the Founding Client Program
            </Link>
          </div>
        </div>
      </section>

      <WhyPigSection />

      {/* Enterprise Trust Signals */}
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

      {/* Final CTA */}
      <section className="bg-[#1B2A4A] py-24 dark:bg-[#0A1628]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Build a Smarter Business?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Let's talk about where you are, where you want to be, and how we can
            get you there — no jargon, no pressure.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-block rounded-xl bg-white px-10 py-4 text-sm font-semibold text-[#1B2A4A] shadow-lg transition hover:bg-gray-100"
            >
              Schedule Your 30-Minute Discovery Call
            </Link>
          </div>
        </div>
      </section>

      <FloatingCta />
    </div>
  );
}

function ServiceCard({
  title,
  description,
  features,
  link,
}: {
  title: string;
  description: string;
  features: string[];
  link: string;
}) {
  return (
    <div className="group rounded-2xl border border-[#E8E8E8] bg-white p-8 shadow-sm transition hover:border-[#C0C0C0] hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
      <h3 className="mb-3 text-lg font-bold text-[#1B2A4A] dark:text-gray-100">
        {title}
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {description}
      </p>
      <ul className="mb-6 space-y-2">
        {features.map((f) => (
          <li
            key={f}
            className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
          >
            <span className="text-[#3A5A8C] dark:text-[#6B8DBF]">&#10003;</span>
            {f}
          </li>
        ))}
      </ul>
      <Link
        to={link as "/services"}
        hash={link.split("#")[1]}
        className="text-sm font-semibold text-[#1B2A4A] transition hover:text-[#3A5A8C] dark:text-[#6B8DBF] dark:hover:text-[#8BAED4]"
      >
        Learn more &rarr;
      </Link>
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