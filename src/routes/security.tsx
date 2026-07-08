import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/security")({
  component: Security,
  head: () => ({
    meta: [
      { title: "Trust & Security — Poole Intelligence Group" },
      { name: "description", content: "Enterprise-grade security for your AI consulting engagement. Data encryption, SOC 2 aligned controls, NDAs/BAAs, and US-based operations." },
    ],
  }),
});

function Security() {
  return (
    <div className="min-h-dvh bg-white pt-32 pb-20 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-6">
        <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
          Trust & Security
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-[#1B2A4A] dark:text-gray-100">
          We Take Security Seriously
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Here's exactly how we protect your data and maintain your trust.
        </p>

        <div className="mt-12 space-y-8">
          <TrustSection title="Data Encryption" body="All client data is encrypted at rest (AES-256) and in transit (TLS 1.3). We enforce strict access controls and never share your data with third parties for training." />
          <TrustSection title="SOC 2 Alignment" body="Our security controls are aligned with SOC 2 principles — including access management, data protection, monitoring, and incident response. We are not currently SOC 2 certified, but we follow the same standards your enterprise expects." />
          <TrustSection title="NDAs & BAAs" body="We sign Non-Disclosure Agreements and Business Associate Agreements on request. Your confidential information remains confidential — always." />
          <TrustSection title="US-Based Operations" body="We are based in Charlotte, North Carolina. All client data is stored and processed within the United States." />
          <TrustSection title="Vendor-Neutral Approach" body="We recommend AI platforms based on what's right for your use case — not what we resell. We work with AWS, GCP, Azure, OpenAI, Anthropic, and open-source models, ensuring you get the best solution without vendor lock-in." />
          <TrustSection title="Data Retention" body="Client data is retained only for the duration of your engagement and for a reasonable period thereafter as needed for quality assurance and legal compliance. You can request deletion at any time." />
        </div>

        <div className="mt-12 rounded-xl border border-[#E8E8E8] bg-[#F5F7FA] p-8 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-xl font-bold text-[#1B2A4A] dark:text-gray-100">Have specific security questions?</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">We're happy to share our full security documentation and answer any questions your legal or security team has.</p>
          <Link to="/contact" className="mt-4 inline-block rounded-lg bg-[#1B2A4A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2A3A5A]">
            Contact Our Security Team
          </Link>
        </div>
      </div>
    </div>
  );
}

function TrustSection({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-[#E8E8E8] bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
      <h2 className="text-lg font-bold text-[#1B2A4A] dark:text-gray-100">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{body}</p>
    </div>
  );
}
