import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Poole Intelligence Group" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div>
      <section className="bg-gradient-to-b from-white via-[#F5F7FA] to-white pt-32 pb-20 dark:from-gray-950 dark:via-[#0A1628]/20 dark:to-gray-950">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">Get in Touch</span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Let's Start a{" "}
            <span className="bg-gradient-to-r from-[#1B2A4A] to-[#3A5A8C] bg-clip-text text-transparent dark:from-[#6B8DBF] dark:to-[#3A5A8C]">Conversation</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Tell us about your AI goals and challenges.</p>
        </div>
      </section>

      <section className="bg-white pb-24 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#F5F7FA] p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-12">
                <form>
                  <div className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#1B2A4A] dark:text-gray-100">Full name <span className="text-red-500">*</span></label>
                        <input type="text" id="name" name="name" required placeholder="Jane Smith"
                          className="w-full rounded-lg border border-[#C0C0C0] bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:border-[#1B2A4A] focus:outline-none focus:ring-2 focus:ring-[#1B2A4A]/20 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:border-[#6B8DBF]" />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#1B2A4A] dark:text-gray-100">Email address <span className="text-red-500">*</span></label>
                        <input type="email" id="email" name="email" required placeholder="jane@company.com"
                          className="w-full rounded-lg border border-[#C0C0C0] bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:border-[#1B2A4A] focus:outline-none focus:ring-2 focus:ring-[#1B2A4A]/20 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:border-[#6B8DBF]" />
                      </div>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="company" className="mb-2 block text-sm font-medium text-[#1B2A4A] dark:text-gray-100">Company</label>
                        <input type="text" id="company" name="company" placeholder="Acme Corp"
                          className="w-full rounded-lg border border-[#C0C0C0] bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:border-[#1B2A4A] focus:outline-none focus:ring-2 focus:ring-[#1B2A4A]/20 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:border-[#6B8DBF]" />
                      </div>
                      <div>
                        <label htmlFor="service" className="mb-2 block text-sm font-medium text-[#1B2A4A] dark:text-gray-100">Service interest</label>
                        <select id="service" name="service"
                          className="w-full rounded-lg border border-[#C0C0C0] bg-white px-4 py-3 text-sm transition focus:border-[#1B2A4A] focus:outline-none focus:ring-2 focus:ring-[#1B2A4A]/20 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:focus:border-[#6B8DBF]">
                          <option value="">Select a service...</option>
                          <option value="consulting">AI Strategy & Consulting</option>
                          <option value="training">Training & Enablement</option>
                          <option value="managed">Managed AI Solutions</option>
                          <option value="other">Other / Not sure</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#1B2A4A] dark:text-gray-100">Message <span className="text-red-500">*</span></label>
                      <textarea id="message" name="message" required rows={5} placeholder="Tell us about your AI goals..."
                        className="w-full rounded-lg border border-[#C0C0C0] bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:border-[#1B2A4A] focus:outline-none focus:ring-2 focus:ring-[#1B2A4A]/20 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:border-[#6B8DBF]" />
                    </div>
                    <button type="submit"
                      className="w-full rounded-xl bg-[#1B2A4A] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#1B2A4A]/25 transition hover:bg-[#2A3A5A]">
                      Send Message
                    </button>
                    <p className="text-center text-xs text-gray-400 dark:text-gray-600">We respect your privacy. No spam, no sharing your data.</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}