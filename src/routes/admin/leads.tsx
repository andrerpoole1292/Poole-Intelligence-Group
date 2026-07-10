import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";

async function fetchLeads() {
  try {
    const res = await fetch("/api/leads");
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

// ── Auth (simple client-side gate) ──
const ADMIN_USER = "admin";
const ADMIN_PASS = "PIG-admin-2026";

export const Route = createFileRoute("/admin/leads")({
  component: AdminLeadsPage,
  head: () => ({
    meta: [
      { title: "Leads Dashboard — Poole Intelligence Group" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

function AdminLeadsPage() {
  const [authed, setAuthed] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const [chatbotLeads, setChatbotLeads] = useState<any[]>([]);
  const [crmLeads, setCrmLeads] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<"chatbot" | "crm">("chatbot");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (authed) loadData();
  }, [authed]);

  async function loadData() {
    setLoading(true);
    try {
      const [cb, crm] = await Promise.all([getLedgerLeads(), getCrmLeads()]);
      setChatbotLeads(cb);
      setCrmLeads(crm);
    } catch (e) {
      console.error("Failed to load leads", e);
    }
    setLoading(false);
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoggingIn(true);
    setLoginError(false);
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      setAuthed(true);
    } else {
      setLoginError(true);
    }
    setLoggingIn(false);
  }

  // ── Today's leads ──
  const today = new Date().toISOString().slice(0, 10);
  const todayChatbot = chatbotLeads.filter(
    (l: any) => l.created_at && l.created_at.startsWith(today)
  ).length;
  const todayCrm = crmLeads.filter(
    (l: any) => l.created_at && l.created_at.startsWith(today)
  ).length;

  // ── CSV export ──
  function exportCSV() {
    const all = activeTab === "chatbot" ? chatbotLeads : crmLeads;
    if (all.length === 0) return;
    const headers = activeTab === "chatbot"
      ? ["Name", "Email", "Company", "Phone", "Interest", "Source", "Date"]
      : ["Name", "Email", "Company", "Phone", "Source", "Status", "Date"];
    const rows = all.map((l: any) => {
      if (activeTab === "chatbot") {
        return [l.name, l.email, l.company || "", l.phone || "", l.interest || "", l.source || "chatbot", l.created_at || ""];
      }
      return [l.name, l.email, l.company || "", l.phone || "", l.source || "manual", l.status || "New", l.created_at || ""];
    });
    const csv = [headers.join(","), ...rows.map((r: string[]) => r.map((c: string) => `"${c.replace(/"/g, '""')}"`).join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pig-leads-${activeTab}-${today}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (!authed) {
    return (
      <div className="min-h-dvh flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 px-6">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#1B2A4A] text-lg font-bold text-white">P</span>
            <h1 className="mt-4 text-2xl font-bold text-[#1B2A4A] dark:text-gray-100">Leads Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">Poole Intelligence Group — Admin</p>
          </div>
          <form onSubmit={handleLogin} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
                <input
                  type="text"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-[#3A5A8C] focus:outline-none focus:ring-1 focus:ring-[#3A5A8C] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500"
                  placeholder="admin"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                <input
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-[#3A5A8C] focus:outline-none focus:ring-1 focus:ring-[#3A5A8C] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500"
                  placeholder="Enter admin password"
                />
              </div>
              {loginError && (
                <p className="text-sm text-red-600 dark:text-red-400">Invalid credentials</p>
              )}
              <button
                type="submit"
                disabled={loggingIn}
                className="w-full rounded-lg bg-[#1B2A4A] px-4 py-2 text-sm font-medium text-white hover:bg-[#2A3A5A] disabled:opacity-50 transition-colors"
              >
                {loggingIn ? "Signing in..." : "Sign In"}
              </button>
            </div>
            <p className="mt-4 text-center text-xs text-gray-400">
              This is a simple gate — not production security.
            </p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1B2A4A] text-sm font-bold text-white">P</span>
            <div>
              <h1 className="text-lg font-bold text-[#1B2A4A] dark:text-gray-100">Leads Dashboard</h1>
              <p className="text-xs text-gray-500">Poole Intelligence Group</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/crm" className="text-sm text-[#3A5A8C] hover:text-[#1B2A4A] transition-colors">Full CRM</Link>
            <button
              onClick={exportCSV}
              className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
            >
              Export CSV
            </button>
            <button
              onClick={() => { setAuthed(false); setUser(""); setPass(""); }}
              className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Summary Cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <SummaryCard
            title="Chatbot Leads"
            value={chatbotLeads.length}
            subtitle={`${todayChatbot} today`}
          />
          <SummaryCard
            title="CRM Leads"
            value={crmLeads.length}
            subtitle={`${todayCrm} today`}
          />
          <SummaryCard
            title="Total Leads"
            value={chatbotLeads.length + crmLeads.length}
            subtitle={"All sources combined"}
          />
          <SummaryCard
            title="Active Sources"
            value={(() => {
              const sources = new Set<string>();
              chatbotLeads.forEach((l: any) => sources.add(l.source || "chatbot"));
              crmLeads.forEach((l: any) => sources.add(l.source || "manual"));
              return sources.size;
            })()}
            subtitle="Unique source types"
          />
        </div>

        {/* Tab Switcher */}
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab("chatbot")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === "chatbot"
                ? "bg-[#1B2A4A] text-white"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 dark:bg-gray-950 dark:text-gray-300 dark:border-gray-800 dark:hover:bg-gray-900"
            }`}
          >
            Chatbot Leads ({chatbotLeads.length})
          </button>
          <button
            onClick={() => setActiveTab("crm")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === "crm"
                ? "bg-[#1B2A4A] text-white"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 dark:bg-gray-950 dark:text-gray-300 dark:border-gray-800 dark:hover:bg-gray-900"
            }`}
          >
            CRM Leads ({crmLeads.length})
          </button>
          <button
            onClick={loadData}
            disabled={loading}
            className="ml-auto rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 disabled:opacity-50 transition-colors"
          >
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-[#1B2A4A]" />
          </div>
        )}

        {/* Chatbot Leads Table */}
        {!loading && activeTab === "chatbot" && (
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Name</th>
                    <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Email</th>
                    <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Company</th>
                    <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Phone</th>
                    <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Interest</th>
                    <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Source</th>
                    <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {chatbotLeads.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-4 py-12 text-center text-gray-500">
                        No chatbot leads yet. Try the <Link to="/demo" className="text-[#3A5A8C] hover:underline">chatbot demo</Link> to generate some.
                      </td>
                    </tr>
                  ) : (
                    chatbotLeads.map((lead: any) => (
                      <tr key={lead.id} className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                        <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">{lead.name}</td>
                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                          <a href={`mailto:${lead.email}`} className="text-[#3A5A8C] hover:underline">{lead.email}</a>
                        </td>
                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{lead.company || "—"}</td>
                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{lead.phone || "—"}</td>
                        <td className="px-4 py-3">
                          <span className="inline-flex rounded-full bg-[#3A5A8C]/10 px-2.5 py-0.5 text-xs font-medium text-[#3A5A8C]">
                            {lead.interest || "N/A"}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-xs text-gray-500">{lead.source || "chatbot"}</td>
                        <td className="px-4 py-3 text-xs text-gray-500 whitespace-nowrap">
                          {lead.created_at ? new Date(lead.created_at + "Z").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" }) : "—"}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            {chatbotLeads.length > 0 && (
              <div className="border-t border-gray-200 bg-gray-50 px-4 py-2 text-xs text-gray-500 dark:border-gray-800 dark:bg-gray-900">
                Showing {chatbotLeads.length} lead{chatbotLeads.length !== 1 ? "s" : ""}
              </div>
            )}
          </div>
        )}

        {/* CRM Leads Table */}
        {!loading && activeTab === "crm" && (
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Name</th>
                    <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Email</th>
                    <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Company</th>
                    <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Phone</th>
                    <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Source</th>
                    <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Status</th>
                    <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {crmLeads.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-4 py-12 text-center text-gray-500">No CRM leads yet.</td>
                    </tr>
                  ) : (
                    crmLeads.map((lead: any) => (
                      <tr key={lead.id} className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                        <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">{lead.name}</td>
                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                          <a href={`mailto:${lead.email}`} className="text-[#3A5A8C] hover:underline">{lead.email}</a>
                        </td>
                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{lead.company || "—"}</td>
                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{lead.phone || "—"}</td>
                        <td className="px-4 py-3 text-xs text-gray-500">{lead.source || "manual"}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            lead.status === "New" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" :
                            lead.status === "Contacted" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" :
                            lead.status === "Discovery" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" :
                            lead.status === "Proposal" ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" :
                            lead.status === "Won" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                            lead.status === "Lost" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" :
                            "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                          }`}>
                            {lead.status || "New"}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-xs text-gray-500 whitespace-nowrap">
                          {lead.created_at ? new Date(lead.created_at + "Z").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" }) : "—"}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            {crmLeads.length > 0 && (
              <div className="border-t border-gray-200 bg-gray-50 px-4 py-2 text-xs text-gray-500 dark:border-gray-800 dark:bg-gray-900">
                Showing {crmLeads.length} lead{crmLeads.length !== 1 ? "s" : ""}
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-400">
          <p>Leads Dashboard — Poole Intelligence Group &copy; {new Date().getFullYear()}</p>
          <p className="mt-1">
            <Link to="/" className="text-[#3A5A8C] hover:underline">Home</Link>
            {" · "}
            <Link to="/crm" className="text-[#3A5A8C] hover:underline">CRM</Link>
            {" · "}
            <Link to="/demo" className="text-[#3A5A8C] hover:underline">Demo</Link>
            {" · "}
            <Link to="/admin/leads" className="text-[#3A5A8C] hover:underline">Admin</Link>
          </p>
        </div>
      </main>
    </div>
  );
}

function SummaryCard({ title, value, subtitle }: { title: string; value: string | number; subtitle: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <p className="text-xs font-medium uppercase tracking-wider text-gray-500">{title}</p>
      <p className="mt-1 text-2xl font-bold text-[#1B2A4A] dark:text-gray-100">{value}</p>
      <p className="mt-0.5 text-xs text-gray-400">{subtitle}</p>
    </div>
  );
}