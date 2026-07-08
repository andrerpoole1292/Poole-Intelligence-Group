import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () => ({
    meta: [
      { title: "Terms of Service — Poole Intelligence Group" },
      { name: "description", content: "Terms of Service for Poole Intelligence Group consulting engagements." },
    ],
  }),
});

function Terms() {
  return (
    <div className="min-h-dvh bg-white pt-32 pb-20 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-6">
        <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
          Legal
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-[#1B2A4A] dark:text-gray-100">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: July 2026</p>

        <div className="mt-12 space-y-8 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="mb-3 text-lg font-bold text-[#1B2A4A] dark:text-gray-100">1. Services</h2>
            <p>Poole Intelligence Group provides AI consulting services including strategy, workflow automation, AI agents, digital strategy, and implementation. Each engagement is governed by a separate Statement of Work (SOW) that defines scope, deliverables, timeline, and fees.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-[#1B2A4A] dark:text-gray-100">2. Payment Terms</h2>
            <p>Fees are as specified in the SOW. Payment is due within 30 days of invoice unless otherwise agreed. Late payments may incur a 1.5% monthly finance charge. All fees are in US dollars.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-[#1B2A4A] dark:text-gray-100">3. Intellectual Property</h2>
            <p>Client retains ownership of all pre-existing intellectual property. Deliverables created specifically for the client during the engagement become the client's property upon full payment. Poole Intelligence Group retains the right to use general methodologies and frameworks developed during the engagement.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-[#1B2A4A] dark:text-gray-100">4. Confidentiality</h2>
            <p>Both parties agree to maintain confidentiality of all proprietary information shared during the engagement. This obligation survives the termination of the agreement. NDAs and BAAs are available on request.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-[#1B2A4A] dark:text-gray-100">5. Limitation of Liability</h2>
            <p>Poole Intelligence Group's liability is limited to the fees paid for the specific engagement giving rise to the claim. We are not liable for indirect, consequential, or incidental damages. Services are provided "as is" without warranties of any kind.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-[#1B2A4A] dark:text-gray-100">6. Termination</h2>
            <p>Either party may terminate an engagement with 30 days written notice. Fees for work completed through the termination date remain payable. In the event of a material breach, the non-breaching party may terminate immediately.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-[#1B2A4A] dark:text-gray-100">7. Governing Law</h2>
            <p>These terms are governed by the laws of the State of North Carolina. Any disputes shall be resolved in Mecklenburg County, NC.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
