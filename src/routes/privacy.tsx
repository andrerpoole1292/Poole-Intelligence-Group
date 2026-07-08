import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({
    meta: [
      { title: "Privacy Policy — Poole Intelligence Group" },
      { name: "description", content: "Privacy Policy for Poole Intelligence Group. How we collect, use, and protect your personal information." },
    ],
  }),
});

function Privacy() {
  return (
    <div className="min-h-dvh bg-white pt-32 pb-20 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-6">
        <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
          Privacy
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-[#1B2A4A] dark:text-gray-100">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: July 2026</p>

        <div className="mt-12 space-y-8 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="mb-3 text-lg font-bold text-[#1B2A4A] dark:text-gray-100">1. Information We Collect</h2>
            <p>We collect information you provide directly: name, email address, company name, phone number, and any details you share through our contact form, assessment, or discovery calls. We also collect standard web analytics data (pages visited, time on site, browser type) through our website.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-[#1B2A4A] dark:text-gray-100">2. How We Use Your Information</h2>
            <p>We use your information to: respond to your inquiries, deliver consulting services, improve our offerings, and send relevant communications about your engagement. We do not sell your personal information to third parties. We do not use your data to train public AI models.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-[#1B2A4A] dark:text-gray-100">3. Data Sharing</h2>
            <p>We may share your information with trusted service providers who help us deliver our services (e.g., cloud infrastructure, communication tools), under strict confidentiality agreements. We will disclose information if required by law.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-[#1B2A4A] dark:text-gray-100">4. Data Security</h2>
            <p>We implement industry-standard security measures including encryption, access controls, and regular security audits. However, no method of transmission over the Internet is 100% secure. See our <a href="/security" className="text-[#1B2A4A] underline dark:text-[#6B8DBF]">Trust & Security page</a> for details.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-[#1B2A4A] dark:text-gray-100">5. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data. You may opt out of marketing communications at any time. Contact us at hello@pooleintelligencegroup.com to exercise these rights.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-[#1B2A4A] dark:text-gray-100">6. Contact</h2>
            <p>For privacy-related inquiries: hello@pooleintelligencegroup.com. Based in Charlotte, North Carolina.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
