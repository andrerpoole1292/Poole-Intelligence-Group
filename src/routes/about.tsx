import { FloatingCta } from "~/components/shared";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Poole Intelligence Group | AI Consulting for SMBs" },
      { name: "description", content: "Learn about Poole Intelligence Group. We help SMBs build smarter operations with AI. Based in Charlotte, NC, serving clients nationwide." },
      { name: "keywords", content: "AI consulting firm, Charlotte AI consultant, SMB AI solutions, business automation, Poole Intelligence Group" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="bg-gradient-to-b from-white via-[#F5F7FA] to-white pt-32 pb-20 dark:from-gray-950 dark:via-[#0A1628]/20 dark:to-gray-950">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
            About Us
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Making AI{" "}
            <span className="bg-gradient-to-r from-[#1B2A4A] to-[#3A5A8C] bg-clip-text text-transparent dark:from-[#6B8DBF] dark:to-[#3A5A8C]">
              Practical and Accessible
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Every business should be able to harness AI — not just the ones with
            dedicated data science teams. We bridge the gap.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#1B2A4A] dark:text-gray-100">
              Why We Exist
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-600 dark:text-gray-400">
              <p>
                The AI landscape is overwhelming. Every week brings new tools,
                new models, new claims. For small and medium-sized businesses —
                those with 10–250 employees — it's nearly impossible to separate
                genuine opportunity from hype, especially without a dedicated
                data science team.
              </p>
              <p>
                That's why we founded Poole Intelligence Group. We deliver
                enterprise-caliber AI strategy, workflow automation, AI agents,
                digital strategy, and implementation — without the enterprise
                price tag or the hype. We've seen first-hand how the right AI
                implementation can transform a business.
              </p>
              <p>
                We also know that the wrong approach — chasing trends without a
                strategy, deploying tools without training, treating AI as a
                silver bullet — leads to wasted time, budget, and trust.
              </p>
              <p>
                Our mission is simple: help SMBs build smarter operations with
                AI in ways that actually move the needle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#1B2A4A] dark:text-gray-100">
              Who We Serve
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              We specialize in SMBs that are ready to take AI seriously but need
              a partner to show them the way.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <IndustryCard
              title="Professional Services"
              description="Law firms, consultancies, accounting firms, and agencies looking to automate document processing, streamline research, and enhance client delivery with AI."
            />
            <IndustryCard
              title="E-Commerce"
              description="Online retailers and DTC brands using AI for personalized marketing, inventory optimization, customer service automation, and content at scale."
            />
            <IndustryCard
              title="SaaS &amp; Traditional Industries"
              description="B2B and B2C software companies, plus traditional industries like manufacturing and logistics, embedding AI into their operations and products."
            />
          </div>

          <div className="mt-12 rounded-2xl border border-[#C0C0C0] bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-950">
            <p className="text-lg font-semibold text-[#1B2A4A] dark:text-gray-200">
              Typical company size: <strong>10–250 employees</strong>
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Big enough to have complex needs, small enough to move fast with
              the right partner.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#1B2A4A] dark:text-gray-100">
              Our Principles
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              The values that guide every engagement.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ValueCard
              title="Practical First"
              description="We don't recommend AI for the sake of AI. Every solution must solve a real business problem and deliver measurable value."
            />
            <ValueCard
              title="No Hype"
              description="Honest conversations about what AI can and cannot do. No buzzwords, no overpromising, no vaporware."
            />
            <ValueCard
              title="Hands-On Delivery"
              description="We don't just advise and leave. We build, deploy, and iterate alongside your team until the solution is working."
            />
            <ValueCard
              title="Long-Term Partnership"
              description="AI is not a one-time project. We build lasting relationships that evolve as your needs and the technology grow."
            />
          </div>
        </div>
      </section>

      <section className="bg-[#1B2A4A] py-24 dark:bg-[#0A1628]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's Build Something Together
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Whether you know exactly what you need or you're just starting to
            explore, we'd love to hear from you.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-block rounded-xl bg-white px-10 py-4 text-sm font-semibold text-[#1B2A4A] shadow-lg transition hover:bg-gray-100"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
          <FloatingCta />
    </div>
  );
}

function IndustryCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-[#E8E8E8] bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <h3 className="mb-3 text-lg font-bold text-[#1B2A4A] dark:text-gray-100">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}

function ValueCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-[#E8E8E8] bg-[#F5F7FA] p-6 dark:border-gray-800 dark:bg-gray-900">
      <h3 className="mb-2 font-bold text-[#1B2A4A] dark:text-gray-100">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}