import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  checkAuth,
  getDashboardSummary,
  getLeads,
  getCalls,
  getProposals,
  getClients,
  getProjects,
  getRevenue,
  updateLeadStatus,
  createLead,
  createCall,
} from "~/lib/crm";

export const Route = createFileRoute("/crm")({
  component: CRMPage,
  head: () => ({
    meta: [{ title: "CRM — Poole Intelligence Group" }],
  }),
});

function CRMPage() {
  const [authed, setAuthed] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState(false);

  // Data
  const [summary, setSummary] = useState<any>(null);
  const [leads, setLeads] = useState<any[]>([]);
  const [calls, setCalls] = useState<any[]>([]);
  const [proposals, setProposals] = useState<any[]>([]);
  const [clients, setClients] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [revenue, setRevenue] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    if (authed) loadData();
  }, [authed]);

  async function loadData() {
    setSummary(await getDashboardSummary());
    setLeads(await getLeads());
    setCalls(await getCalls());
    setProposals(await getProposals());
    setClients(await getClients());
    setProjects(await getProjects());
    setRevenue(await getRevenue());
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoggingIn(true);
    setLoginError(false);
    const result = await checkAuth({ user, pass });
    if (result.valid) {
      setAuthed(true);
    } else {
      setLoginError(true);
    }
    setLoggingIn(false);
  }

  async function handleStatusChange(id: string, status: string) {
    await updateLeadStatus({ id, status });
    loadData();
  }

  async function handleQuickLead(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    await createLead({
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      company: fd.get("company") as string,
      source: "manual",
    });
    form.reset();
    loadData();
  }

  if (!authed) {
    return (
      <div className="min-h-dvh flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 px-6">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#1B2A4A] text-lg font-bold text-white">P</span>
            <h1 className="mt-4 text-2xl font-bold text-[#1B2A4A] dark:text-gray-100">CRM Login</h1>
            <p className="mt-1 text-sm text-gray-500">Poole Intelligence Group</p>
          </div>
          <form onSubmit={handleLogin} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
                <input name="user" value={user} onChange={(e) => setUser(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#1B2A4A] focus:outline-none focus:ring-2 focus:ring-[#1B2A4A]/20 dark:border-gray-700 dark:bg-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                <input type="password" name="pass" value={pass} onChange={(e) => setPass(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#1B2A4A] focus:outline-none focus:ring-2 focus:ring-[#1B2A4A]/20 dark:border-gray-700 dark:bg-gray-900" />
              </div>
              {loginError && <p className="text-sm text-red-600">Invalid credentials</p>}
              <button type="submit" disabled={loggingIn} className="w-full rounded-lg bg-[#1B2A4A] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2A3A5A] disabled:opacity-50">
                {loggingIn ? "Signing in..." : "Sign In"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  const formatMoney = (cents: number) => "$" + (cents / 100).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  return (
    <div className="min-h-dvh bg-gray-50 dark:bg-gray-950">
      {/* Top bar */}
      <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1B2A4A] text-sm font-bold text-white">P</span>
            <span className="text-sm font-bold text-[#1B2A4A] dark:text-gray-100">CRM</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-xs text-gray-500 hover:text-[#1B2A4A]">Back to Site</Link>
            <button onClick={() => setAuthed(false)} className="text-xs text-gray-500 hover:text-red-600">Sign Out</button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Tabs */}
        <div className="mb-6 flex flex-wrap gap-2">
          {["dashboard", "leads", "calls", "proposals", "clients", "revenue"].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${activeTab === tab ? "bg-[#1B2A4A] text-white" : "bg-white text-gray-600 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-400"}`}>
              {tab === "dashboard" ? "📊 Dashboard" : tab === "leads" ? "👤 Leads" : tab === "calls" ? "📞 Calls" : tab === "proposals" ? "📄 Proposals" : tab === "clients" ? "🤝 Clients" : "💰 Revenue"}
            </button>
          ))}
        </div>

        {activeTab === "dashboard" && (
          <>
            {/* Summary cards */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              <SummaryCard label="Total Leads" value={summary?.total_leads || 0} />
              <SummaryCard label="Open Proposals" value={summary?.total_proposals || 0} sub={formatMoney(summary?.proposal_value_cents || 0)} />
              <SummaryCard label="Active Clients" value={summary?.active_clients || 0} />
              <SummaryCard label="Revenue" value={formatMoney(summary?.revenue_cents || 0)} />
              <SummaryCard label="Pipeline Value" value={formatMoney(summary?.proposal_value_cents || 0)} />
            </div>

            {/* Pipeline visualization */}
            <div className="mb-8 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-4 text-sm font-bold text-[#1B2A4A] dark:text-gray-100">Lead Pipeline</h2>
              <div className="flex flex-wrap gap-2">
                {["new", "contacted", "discovery_scheduled", "proposal_sent", "negotiation", "closed_won", "closed_lost"].map((stage) => {
                  const count = summary?.pipeline?.find((p: any) => p.status === stage)?.count || 0;
                  const labels: Record<string, string> = {
                    new: "New", contacted: "Contacted", discovery_scheduled: "Discovery", proposal_sent: "Proposal", negotiation: "Negotiation", closed_won: "Won", closed_lost: "Lost",
                  };
                  return (
                    <div key={stage} className={`flex-1 min-w-[100px] rounded-lg p-3 text-center ${stage === "closed_won" ? "bg-green-50 text-green-800" : stage === "closed_lost" ? "bg-red-50 text-red-800" : "bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300"}`}>
                      <div className="text-2xl font-bold">{count}</div>
                      <div className="mt-1 text-xs font-medium">{labels[stage]}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recent leads */}
            <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-gray-800">
                <h2 className="text-sm font-bold text-[#1B2A4A] dark:text-gray-100">Recent Leads</h2>
                <button onClick={() => setActiveTab("leads")} className="text-xs text-[#1B2A4A] hover:underline">View All</button>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {leads.slice(0, 5).map((lead) => (
                  <div key={lead.id} className="flex items-center justify-between px-6 py-3">
                    <div>
                      <p className="text-sm font-medium">{lead.name}</p>
                      <p className="text-xs text-gray-500">{lead.company} · {lead.email}</p>
                    </div>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      lead.status === "new" ? "bg-blue-50 text-blue-700" :
                      lead.status === "contacted" ? "bg-yellow-50 text-yellow-700" :
                      lead.status === "closed_won" ? "bg-green-50 text-green-700" :
                      "bg-gray-50 text-gray-600"
                    }`}>{lead.status.replace(/_/g, " ")}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === "leads" && (
          <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-gray-800">
              <h2 className="text-sm font-bold text-[#1B2A4A] dark:text-gray-100">All Leads</h2>
              <button onClick={() => (document.getElementById("quickLeadModal") as any)?.showModal()} className="rounded-lg bg-[#1B2A4A] px-3 py-1.5 text-xs font-semibold text-white">+ Add Lead</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-gray-100 bg-gray-50 text-xs uppercase text-gray-500 dark:border-gray-800 dark:bg-gray-900">
                  <tr><th className="px-6 py-3 font-medium">Name</th><th className="px-6 py-3 font-medium">Company</th><th className="px-6 py-3 font-medium">Status</th><th className="px-6 py-3 font-medium">Actions</th></tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                      <td className="px-6 py-3"><p className="font-medium">{lead.name}</p><p className="text-xs text-gray-500">{lead.email}</p></td>
                      <td className="px-6 py-3 text-gray-600">{lead.company || "—"}</td>
                      <td className="px-6 py-3">
                        <select value={lead.status} onChange={(e) => handleStatusChange(lead.id, e.target.value)} className="rounded border border-gray-200 bg-white px-2 py-1 text-xs dark:border-gray-700 dark:bg-gray-900">
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="discovery_scheduled">Discovery Scheduled</option>
                          <option value="proposal_sent">Proposal Sent</option>
                          <option value="negotiation">Negotiation</option>
                          <option value="closed_won">Closed Won</option>
                          <option value="closed_lost">Closed Lost</option>
                        </select>
                      </td>
                      <td className="px-6 py-3">
                        <button onClick={() => handleStatusChange(lead.id, "contacted")} className="rounded bg-[#1B2A4A]/10 px-2 py-1 text-xs text-[#1B2A4A] hover:bg-[#1B2A4A]/20">Contact</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Quick add lead modal */}
            <dialog id="quickLeadModal" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-800 dark:bg-gray-950 backdrop:bg-black/30">
              <form method="dialog" onSubmit={handleQuickLead} className="w-80 space-y-4">
                <h3 className="text-lg font-bold text-[#1B2A4A]">Quick Add Lead</h3>
                <input name="name" placeholder="Name *" required className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#1B2A4A] focus:outline-none" />
                <input name="email" type="email" placeholder="Email *" required className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#1B2A4A] focus:outline-none" />
                <input name="company" placeholder="Company" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#1B2A4A] focus:outline-none" />
                <div className="flex gap-2">
                  <button type="submit" className="flex-1 rounded-lg bg-[#1B2A4A] px-4 py-2 text-sm font-semibold text-white">Save</button>
                  <button type="button" onClick={() => (document.getElementById("quickLeadModal") as any)?.close()} className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-600">Cancel</button>
                </div>
              </form>
            </dialog>
          </div>
        )}

        {activeTab === "calls" && (
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-4 text-sm font-bold text-[#1B2A4A] dark:text-gray-100">Discovery Calls</h2>
            {calls.length === 0 ? <p className="text-sm text-gray-500">No calls scheduled.</p> : (
              <div className="space-y-3">
                {calls.map((call) => (
                  <div key={call.id} className="flex items-center justify-between rounded-lg border border-gray-100 p-3 dark:border-gray-800">
                    <div><p className="text-sm font-medium">{call.lead_name || "Unknown"}</p><p className="text-xs text-gray-500">{call.lead_company} · {call.scheduled_at ? new Date(call.scheduled_at).toLocaleDateString() : "No date"}</p></div>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      call.status === "completed" ? "bg-green-50 text-green-700" :
                      call.status === "cancelled" ? "bg-red-50 text-red-700" :
                      "bg-blue-50 text-blue-700"
                    }`}>{call.status}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "proposals" && (
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-[#1B2A4A] dark:text-gray-100">Proposals</h2>
              <Link to="/admin/proposals/new" className="rounded-lg bg-[#1B2A4A] px-3 py-1.5 text-xs font-semibold text-white">+ New Proposal</Link>
            </div>
            {proposals.length === 0 ? <p className="text-sm text-gray-500">No proposals yet.</p> : (
              <div className="space-y-3">
                {proposals.map((p) => (
                  <div key={p.id} className="flex items-center justify-between rounded-lg border border-gray-100 p-3 dark:border-gray-800">
                    <div><p className="text-sm font-medium">{p.title}</p><p className="text-xs text-gray-500">{p.lead_name} · {formatMoney(p.amount_cents)}</p></div>
                    <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">{p.status}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "clients" && (
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-4 text-sm font-bold text-[#1B2A4A] dark:text-gray-100">Active Clients</h2>
            {clients.length === 0 ? <p className="text-sm text-gray-500">No clients yet.</p> : (
              <div className="space-y-3">
                {clients.map((c) => (
                  <div key={c.id} className="flex items-center justify-between rounded-lg border border-gray-100 p-3 dark:border-gray-800">
                    <div><p className="text-sm font-medium">{c.name}</p><p className="text-xs text-gray-500">{c.company} · {c.engagement_type || "—"}</p></div>
                    <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">{c.status}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "revenue" && (
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-4 text-sm font-bold text-[#1B2A4A] dark:text-gray-100">Revenue Pipeline</h2>
            <div className="mb-4 rounded-lg bg-[#1B2A4A]/5 p-4 text-center">
              <p className="text-sm text-gray-500">Total Revenue</p>
              <p className="text-3xl font-bold text-[#1B2A4A]">{formatMoney(revenue?.total_cents || 0)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SummaryCard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
      <p className="text-xs font-medium text-gray-500">{label}</p>
      <p className="mt-1 text-2xl font-bold text-[#1B2A4A] dark:text-gray-100">{value}</p>
      {sub && <p className="mt-0.5 text-xs text-gray-400">{sub}</p>}
    </div>
  );
}