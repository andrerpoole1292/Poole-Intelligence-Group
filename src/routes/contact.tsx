import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";

const CALENDLY_LINK = "https://calendly.com/hello-pooleintelligencegroup/30min";

async function submitContact(data: Record<string, string>) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);
  try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, source: "contact_form" }),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || "Submission failed");
    }
    return res.json();
  } catch (err) {
    clearTimeout(timeoutId);
    if (err instanceof DOMException && err.name === "AbortError") {
      throw new Error("Request timed out. Please try again or email us directly at hello@pooleintelligencegroup.com.");
    }
    throw err;
  }
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Poole Intelligence Group | AI Consulting for SMBs" },
      { name: "description", content: "Get in touch with Poole Intelligence Group. Based in Charlotte, NC, serving clients nationwide. Schedule a free discovery call." },
      { name: "keywords", content: "contact AI consultant, Charlotte AI consulting, SMB AI solutions, discovery call, AI strategy consultation" },
    ],
  }),
  component: Contact,
});

const serviceOptions = [
  { value: "", label: "Select a service..." },
  { value: "consulting", label: "AI Strategy & Consulting" },
  { value: "training", label: "Training & Enablement" },
  { value: "managed", label: "Managed AI Solutions" },
  { value: "other", label: "Other / Not sure" },
];

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => { data[key] = value as string; });

    setStatus("submitting");
    try {
      await submitContact(data);
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  const inputClass = "w-full rounded-lg border border-[#C0C0C0] bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:border-[#1B2A4A] focus:outline-none focus:ring-2 focus:ring-[#1B2A4A]/20 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:border-[#6B8DBF]";

  const labelClass = "mb-2 block text-sm font-medium text-[#1B2A4A] dark:text-gray-100";

  if (status === "success") {
    return (
      <div>
        <section className="bg-gradient-to-b from-white via-[#F5F7FA] to-white pt-32 pb-20 dark:from-gray-950 dark:via-[#0A1628]/20 dark:to-gray-950">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">Get in Touch</span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Let's Start a{" "}
              <span className="bg-gradient-to-r from-[#1B2A4A] to-[#3A5A8C] bg-clip-text text-transparent dark:from-[#6B8DBF] dark:to-[#3A5A8C]">Conversation</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Tell us about your AI goals and challenges. We'll respond within one business day with an honest assessment and next steps.</p>
          </div>
        </section>
        <section className="bg-white pb-24 dark:bg-gray-950">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <div className="rounded-2xl border border-[#E8E8E8] bg-[#F5F7FA] p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-12">
                  <div className="flex flex-col items-center py-12 text-center">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl dark:bg-green-900/30">&#10003;</div>
                    <h3 className="text-xl font-bold text-[#1B2A4A] dark:text-gray-100">Thanks for Reaching Out!</h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">We've received your inquiry and will respond within 1 business day.</p>
                    <div className="mt-6 w-full max-w-sm rounded-xl border border-[#C0C0C0] bg-white p-5 dark:border-gray-700 dark:bg-gray-950">
                      <p className="text-sm font-semibold text-[#1B2A4A] dark:text-gray-100">&#9889; Want faster? Book a call directly.</p>
                      <p className="mt-1 text-xs text-gray-500">Free 30-minute Discovery Call — no pressure, just honest advice.</p>
                      <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer"
                        className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-[#1B2A4A] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2A3A5A]">
                        Schedule a Free Discovery Call
                      </a>
                    </div>
                    <button onClick={() => setStatus("idle")}
                      className="mt-6 rounded-lg border border-[#C0C0C0] bg-white px-6 py-3 text-sm font-semibold text-[#1B2A4A] transition hover:bg-[#F5F7FA] dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:hover:bg-gray-800">
                      Send Another Message
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                  <div className="mb-6 rounded-xl bg-gradient-to-br from-[#1B2A4A] to-[#3A5A8C] p-6 text-center">
                    <p className="text-lg font-bold text-white">Skip the Wait</p>
                    <p className="mt-1 text-sm text-gray-300">Book a free 30-minute Discovery Call directly.</p>
                    <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer"
                      className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#1B2A4A] shadow-sm transition hover:bg-gray-100">
                      Schedule a Free Discovery Call
                    </a>
                    <p className="mt-2 text-xs text-gray-400">No pressure. No pitch. Just honest advice.</p>
                  </div>
                  <h3 className="text-lg font-bold text-[#1B2A4A] dark:text-gray-100">Here's what you can expect:</h3>
                  <ol className="mt-6 space-y-6">
                    {[
                      ["We read your message carefully", "Within 1 business day, a member of our team reviews what you've shared."],
                      ["We schedule a 30-minute discovery call", "No pitch, no pressure. Just a conversation to understand your situation."],
                      ["We share a candid assessment", "If we think we can help, we'll tell you how. If we're not the right fit, we'll tell you that too."],
                      ["You decide what's next", "Whether that's a workshop, a proposal, or just walking away with a clearer picture. No commitment, no hard sell."],
                    ].map(([title, desc], i) => (
                      <li key={i} className="flex gap-4">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F0F2F5] text-xs font-bold text-[#1B2A4A] dark:bg-gray-800 dark:text-[#6B8DBF]">{i + 1}</span>
                        <div>
                          <p className="text-sm font-semibold text-[#1B2A4A] dark:text-gray-100">{title}</p>
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="mt-6 rounded-2xl border border-[#E8E8E8] bg-[#F5F7FA] p-8 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#1B2A4A] dark:text-gray-100">Prefer to reach out directly?</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Drop us a line at{" "}
                    <a href="mailto:hello@pooleintelligencegroup.com" className="font-medium text-[#1B2A4A] underline hover:text-[#3A5A8C] dark:text-[#6B8DBF] dark:hover:text-[#8BAED4]">hello@pooleintelligencegroup.com</a>
                  </p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Or follow us on{" "}
                    <a href="https://linkedin.com/company/pooleintelligence" target="_blank" rel="noopener noreferrer" className="font-medium text-[#1B2A4A] underline hover:text-[#3A5A8C] dark:text-[#6B8DBF] dark:hover:text-[#8BAED4]">LinkedIn</a>{" "}
                    for practical AI insights and case studies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-gradient-to-b from-white via-[#F5F7FA] to-white pt-32 pb-20 dark:from-gray-950 dark:via-[#0A1628]/20 dark:to-gray-950">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">Get in Touch</span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Let's Start a{" "}
            <span className="bg-gradient-to-r from-[#1B2A4A] to-[#3A5A8C] bg-clip-text text-transparent dark:from-[#6B8DBF] dark:to-[#3A5A8C]">Conversation</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Tell us about your AI goals and challenges. We'll respond within one business day with an honest assessment and next steps.</p>
        </div>
      </section>

      <section className="bg-white pb-24 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#F5F7FA] p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-12">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>Full name <span className="text-red-500">*</span></label>
                      <input type="text" id="name" name="name" required placeholder="Jane Smith" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Email address <span className="text-red-500">*</span></label>
                      <input type="email" id="email" name="email" required placeholder="jane@company.com" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className={labelClass}>Company</label>
                      <input type="text" id="company" name="company" placeholder="Acme Corp" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="service" className={labelClass}>Service interest</label>
                      <select id="service" name="service" className={inputClass}>
                        {serviceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className={labelClass}>Message <span className="text-red-500">*</span></label>
                    <textarea id="message" name="message" required rows={5} placeholder="Tell us about your AI goals, challenges, or any questions you have..." className={inputClass} />
                  </div>
                  {status === "error" && (
                    <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700 dark:bg-red-950/50 dark:text-red-400">{errorMessage}</div>
                  )}
                  <button type="submit" disabled={status === "submitting"}
                    className="w-full rounded-xl bg-[#1B2A4A] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#1B2A4A]/25 transition hover:bg-[#2A3A5A] disabled:cursor-not-allowed disabled:opacity-60">
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </button>
                  <p className="text-center text-xs text-gray-400 dark:text-gray-600">We respect your privacy. No spam, no sharing your data.</p>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <div className="mb-6 rounded-xl bg-gradient-to-br from-[#1B2A4A] to-[#3A5A8C] p-6 text-center">
                  <p className="text-lg font-bold text-white">Skip the Wait</p>
                  <p className="mt-1 text-sm text-gray-300">Book a free 30-minute Discovery Call directly.</p>
                  <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#1B2A4A] shadow-sm transition hover:bg-gray-100">
                    Schedule a Free Discovery Call
                  </a>
                  <p className="mt-2 text-xs text-gray-400">No pressure. No pitch. Just honest advice.</p>
                </div>

                <h3 className="text-lg font-bold text-[#1B2A4A] dark:text-gray-100">Here's what you can expect:</h3>
                <ol className="mt-6 space-y-6">
                  {[
                    ["We read your message carefully", "Within 1 business day, a member of our team reviews what you've shared."],
                    ["We schedule a 30-minute discovery call", "No pitch, no pressure. Just a conversation to understand your situation."],
                    ["We share a candid assessment", "If we think we can help, we'll tell you how. If we're not the right fit, we'll tell you that too."],
                    ["You decide what's next", "Whether that's a workshop, a proposal, or just walking away with a clearer picture. No commitment, no hard sell."],
                  ].map(([title, desc], i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F0F2F5] text-xs font-bold text-[#1B2A4A] dark:bg-gray-800 dark:text-[#6B8DBF]">{i + 1}</span>
                      <div>
                        <p className="text-sm font-semibold text-[#1B2A4A] dark:text-gray-100">{title}</p>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-6 rounded-2xl border border-[#E8E8E8] bg-[#F5F7FA] p-8 dark:border-gray-800 dark:bg-gray-900">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#1B2A4A] dark:text-gray-100">Prefer to reach out directly?</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Drop us a line at{" "}
                  <a href="mailto:hello@pooleintelligencegroup.com" className="font-medium text-[#1B2A4A] underline hover:text-[#3A5A8C] dark:text-[#6B8DBF] dark:hover:text-[#8BAED4]">hello@pooleintelligencegroup.com</a>
                </p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Or follow us on{" "}
                  <a href="https://linkedin.com/company/pooleintelligence" target="_blank" rel="noopener noreferrer" className="font-medium text-[#1B2A4A] underline hover:text-[#3A5A8C] dark:text-[#6B8DBF] dark:hover:text-[#8BAED4]">LinkedIn</a>{" "}
                  for practical AI insights and case studies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}