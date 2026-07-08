import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { getLeads, createProposal, getProposals } from "~/lib/crm";

export const Route = createFileRoute("/admin/proposals/new")({
  component: NewProposalPage,
  head: () => ({
    meta: [{ title: "New Proposal — Poole Intelligence Group" }],
  }),
});

const ENGAGEMENT_TYPES = [
  "AI Strategy & Consulting",
  "Workflow Automation",
  "AI Agents & Chatbots",
  "Digital Strategy",
  "AI Implementation",
  "Custom AI Solution",
  "Training & Enablement",
];

function NewProposalPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [step, setStep] = useState(1);
  const [saved, setSaved] = useState<{ id: string; share_token: string } | null>(null);

  // Form state
  const [leadId, setLeadId] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [engagementType, setEngagementType] = useState(ENGAGEMENT_TYPES[0]);
  const [scopeOfWork, setScopeOfWork] = useState("");
  const [deliverables, setDeliverables] = useState("");
  const [timeline, setTimeline] = useState("4-6 weeks");
  const [price, setPrice] = useState("");
  const [terms, setTerms] = useState("Payment due within 30 days of invoice. 50% deposit required to commence work, 50% due upon completion.");

  useEffect(() => { getLeads().then(setLeads); }, []);

  function generateProposalHTML(): string {
    const amount = parseInt(price) * 100 || 0;
    return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Proposal — Poole Intelligence Group</title>
<style>
  @page { margin: 0.75in; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Inter', -apple-system, sans-serif; color: #1a1a2e; line-height: 1.6; padding: 40px; }
  .header { border-bottom: 3px solid #1B2A4A; padding-bottom: 20px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: flex-start; }
  .header h1 { font-size: 28px; color: #1B2A4A; }
  .header .meta { text-align: right; font-size: 12px; color: #666; }
  .section { margin-bottom: 30px; }
  .section h2 { font-size: 18px; color: #1B2A4A; border-bottom: 1px solid #e0e0e0; padding-bottom: 8px; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; }
  .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px; }
  .info-grid .label { font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 0.5px; }
  .info-grid .value { font-size: 14px; font-weight: 600; }
  .price-table { width: 100%; border-collapse: collapse; margin: 15px 0; }
  .price-table th { background: #1B2A4A; color: white; padding: 10px 15px; text-align: left; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; }
  .price-table td { padding: 10px 15px; border-bottom: 1px solid #e0e0e0; font-size: 14px; }
  .price-table .total td { font-weight: bold; font-size: 16px; border-top: 2px solid #1B2A4A; }
  .signature-area { margin-top: 40px; padding-top: 30px; border-top: 1px solid #e0e0e0; }
  .signature-area .line { border-bottom: 1px solid #333; width: 250px; height: 40px; margin-bottom: 5px; }
  .footer { margin-top: 40px; font-size: 11px; color: #999; text-align: center; border-top: 1px solid #e0e0e0; padding-top: 20px; }
</style></head><body>
<div class="header">
  <div><h1>Statement of Work</h1><p style="color:#666;font-size:14px;margin-top:4px;">Poole Intelligence Group</p></div>
  <div class="meta"><p>Date: ${new Date().toLocaleDateString()}</p><p>Proposal #: P-${Date.now().toString(36).toUpperCase()}</p></div>
</div>

<div class="info-grid">
  <div><div class="label">Prepared For</div><div class="value">${clientName}</div><div style="font-size:13px;color:#666;">${clientCompany}</div><div style="font-size:13px;color:#666;">${clientEmail}</div></div>
  <div><div class="label">Engagement Type</div><div class="value">${engagementType}</div><div class="label" style="margin-top:8px;">Timeline</div><div class="value">${timeline}</div></div>
</div>

<div class="section">
  <h2>Scope of Work</h2>
  <p style="font-size:14px;white-space:pre-wrap;">${scopeOfWork || "To be defined in collaboration with the client during the kickoff phase."}</p>
</div>

<div class="section">
  <h2>Deliverables</h2>
  <ul style="font-size:14px;padding-left:20px;">
    ${deliverables.split("\\n").filter(Boolean).map((d: string) => `<li>${d}</li>`).join("") || "<li>To be defined during kickoff</li>"}
  </ul>
</div>

<div class="section">
  <h2>Investment</h2>
  <table class="price-table">
    <tr><th>Item</th><th>Amount</th></tr>
    <tr><td>${engagementType} — Setup & Implementation</td><td>$${price || "TBD"}</td></tr>
    ${parseInt(price) > 5000 ? `<tr><td>Monthly Retainer (ongoing support)</td><td>$${Math.round(parseInt(price) * 0.15)}</td></tr>` : ""}
    <tr class="total"><td>Total</td><td>$${price || "TBD"}</td></tr>
  </table>
</div>

<div class="section">
  <h2>Terms & Conditions</h2>
  <p style="font-size:13px;white-space:pre-wrap;">${terms}</p>
  <ul style="font-size:13px;margin-top:10px;padding-left:20px;">
    <li>All work performed under this agreement shall be governed by the laws of the State of California.</li>
    <li>Any modifications to the scope of work must be agreed upon in writing by both parties.</li>
    <li>Either party may terminate this agreement with 30 days written notice.</li>
    <li>Intellectual property developed specifically for the client shall be owned by the client upon full payment.</li>
  </ul>
</div>

<div class="signature-area">
  <p style="font-size:13px;font-weight:600;margin-bottom:20px;">Acceptance of Proposal</p>
  <table style="width:100%;font-size:13px;"><tr>
    <td style="width:50%;"><div class="line"></div><p>Signature — Client</p><p style="font-size:11px;color:#888;margin-top:3px;">${clientName}</p></td>
    <td style="width:50%;"><div class="line"></div><p>Signature — Poole Intelligence Group</p><p style="font-size:11px;color:#888;margin-top:3px;">Authorized Representative</p></td>
  </tr></table>
  <div style="margin-top:15px;font-size:12px;color:#666;">Date: ___/___/_______</div>
</div>

<div class="footer">
  <p>Poole Intelligence Group — Building Smarter Businesses with AI</p>
  <p>hello@pooleintelligencegroup.com | Charlotte, NC</p>
</div>
</body></html>`;
  }

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    const amount = parseInt(price) * 100 || 0;
    const html = generateProposalHTML();
    const result = await createProposal({
      lead_id: leadId || "manual",
      title: `${engagementType} — ${clientCompany || clientName}`,
      amount_cents: amount,
      content: html,
    });
    setSaved(result);
    setStep(2);
  }

  if (saved) {
    const shareUrl = `${window.location.origin}/proposal/${saved.share_token}`;
    return (
      <div className="min-h-dvh bg-gray-50 dark:bg-gray-950 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 text-5xl">✅</div>
          <h1 className="mb-2 text-2xl font-bold text-[#1B2A4A] dark:text-gray-100">Proposal Created</h1>
          <p className="mb-8 text-gray-600">Your proposal has been saved and is ready to share.</p>
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
            <p className="mb-2 text-sm font-medium text-gray-500">Shareable Link</p>
            <input readOnly value={shareUrl} className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-center" onClick={(e) => (e.target as HTMLInputElement).select()} />
            <div className="mt-4 flex gap-3 justify-center">
              <button onClick={() => navigator.clipboard.writeText(shareUrl)} className="rounded-lg bg-[#1B2A4A] px-4 py-2 text-sm font-semibold text-white">Copy Link</button>
              <button onClick={() => window.open("", "_blank")?.document.write(generateProposalHTML())} className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700">Preview</button>
            </div>
          </div>
          <Link to="/crm" className="mt-6 inline-block text-sm text-[#1B2A4A] hover:underline">&larr; Back to CRM</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-gray-50 dark:bg-gray-950 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <Link to="/crm" className="text-xs text-gray-500 hover:text-[#1B2A4A]">&larr; Back to CRM</Link>
          <h1 className="mt-2 text-2xl font-bold text-[#1B2A4A] dark:text-gray-100">New Proposal</h1>
          <p className="text-sm text-gray-500">Generate a branded proposal for your client.</p>
        </div>

        <form onSubmit={handleGenerate} className="space-y-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
            <h2 className="mb-4 text-sm font-bold text-[#1B2A4A] dark:text-gray-100">Client Information</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-gray-500">Select Lead (optional)</label>
                <select value={leadId} onChange={(e) => {
                  const led = leads.find((l) => l.id === e.target.value);
                  setLeadId(e.target.value);
                  if (led) { setClientName(led.name); setClientCompany(led.company || ""); setClientEmail(led.email); }
                }} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#1B2A4A] focus:outline-none dark:border-gray-700 dark:bg-gray-900">
                  <option value="">Manual entry</option>
                  {leads.map((l) => <option key={l.id} value={l.id}>{l.name} — {l.company}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500">Engagement Type</label>
                <select value={engagementType} onChange={(e) => setEngagementType(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#1B2A4A] focus:outline-none dark:border-gray-700 dark:bg-gray-900">
                  {ENGAGEMENT_TYPES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500">Client Name</label>
                <input value={clientName} onChange={(e) => setClientName(e.target.value)} required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#1B2A4A] focus:outline-none dark:border-gray-700 dark:bg-gray-900" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500">Company</label>
                <input value={clientCompany} onChange={(e) => setClientCompany(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#1B2A4A] focus:outline-none dark:border-gray-700 dark:bg-gray-900" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500">Email</label>
                <input type="email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#1B2A4A] focus:outline-none dark:border-gray-700 dark:bg-gray-900" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500">Timeline</label>
                <input value={timeline} onChange={(e) => setTimeline(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#1B2A4A] focus:outline-none dark:border-gray-700 dark:bg-gray-900" />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
            <h2 className="mb-4 text-sm font-bold text-[#1B2A4A] dark:text-gray-100">Scope & Deliverables</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-500">Scope of Work</label>
                <textarea rows={4} value={scopeOfWork} onChange={(e) => setScopeOfWork(e.target.value)} placeholder="Describe the work to be performed..." className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#1B2A4A] focus:outline-none dark:border-gray-700 dark:bg-gray-900" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500">Deliverables (one per line)</label>
                <textarea rows={3} value={deliverables} onChange={(e) => setDeliverables(e.target.value)} placeholder="AI readiness assessment&#10;Custom strategy roadmap&#10;Working chatbot prototype" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#1B2A4A] focus:outline-none dark:border-gray-700 dark:bg-gray-900" />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
            <h2 className="mb-4 text-sm font-bold text-[#1B2A4A] dark:text-gray-100">Pricing</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-gray-500">Total Price ($)</label>
                <input type="number" min="0" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="15000" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#1B2A4A] focus:outline-none dark:border-gray-700 dark:bg-gray-900" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500">Terms</label>
                <input value={terms} onChange={(e) => setTerms(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#1B2A4A] focus:outline-none dark:border-gray-700 dark:bg-gray-900" />
              </div>
            </div>
          </div>

          <button type="submit" className="w-full rounded-xl bg-[#1B2A4A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2A3A5A]">
            Generate Proposal
          </button>
        </form>
      </div>
    </div>
  );
}