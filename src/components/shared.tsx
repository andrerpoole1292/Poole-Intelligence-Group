import { Link } from "@tanstack/react-router";

/* ─── Sticky CTA Bar ─── */
export function StickyCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#E8E8E8] bg-white/95 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <p className="hidden text-sm font-medium text-[#1B2A4A] dark:text-gray-200 sm:block">
          Ready to build smarter operations?
        </p>
        <div className="flex w-full gap-3 sm:w-auto">
          <Link
            to="/contact"
            className="flex-1 rounded-lg bg-[#1B2A4A] px-5 py-2.5 text-center text-xs font-semibold text-white transition hover:bg-[#2A3A5A] sm:flex-none"
          >
            Schedule a Free Discovery Call
          </Link>
          <Link
            to="/services"
            className="flex-1 rounded-lg border border-[#C0C0C0] px-5 py-2.5 text-center text-xs font-semibold text-[#1B2A4A] transition hover:bg-[#F5F7FA] dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 sm:flex-none"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── Floating CTA (for services/about pages) ─── */
export function FloatingCta() {
  return (
    <div className="fixed bottom-20 right-6 z-40 hidden lg:block">
      <Link
        to="/contact"
        className="flex items-center gap-2 rounded-full bg-[#1B2A4A] px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-[#1B2A4A]/30 transition hover:bg-[#2A3A5A] hover:shadow-[#1B2A4A]/50"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Free Discovery Call
      </Link>
    </div>
  );
}

/* ─── "Why Poole Intelligence Group" Section ─── */
export function WhyPigSection() {
  return (
    <section className="bg-[#F5F7FA] py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-white px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300">
            Why Choose Us
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#1B2A4A] dark:text-gray-100">
            Why Poole Intelligence Group?
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We're not another AI hype shop. Here's what makes us different.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <WhyCard
            number="01"
            title="Enterprise-Caliber, SMB-Priced"
            description="The same strategic rigor you'd expect from a top-tier consulting firm — delivered at a price that makes sense for growing businesses."
          />
          <WhyCard
            number="02"
            title="Strategy + Execution"
            description="We don't just advise and leave. We build, deploy, and iterate alongside your team until the solution is working."
          />
          <WhyCard
            number="03"
            title="Vendor-Agnostic"
            description="We recommend the right tools for your needs — not a platform we resell. OpenAI, Anthropic, AWS, GCP, Azure, and open-source."
          />
          <WhyCard
            number="04"
            title="Built for Your Reality"
            description="We understand the constraints of growing businesses: limited bandwidth, real budgets, and the need for solutions that work today."
          />
        </div>
      </div>
    </section>
  );
}

function WhyCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="rounded-xl border border-[#E8E8E8] bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
      <span className="text-sm font-bold text-[#3A5A8C] dark:text-[#6B8DBF]">{number}</span>
      <h3 className="mt-2 mb-2 font-bold text-[#1B2A4A] dark:text-gray-100">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}