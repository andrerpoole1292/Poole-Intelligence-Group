// Client-side replacement for @tanstack/react-start's createServerFn
// Makes HTTP fetch calls to the Vercel serverless functions

export async function submitContact(data: { name: string; email: string; company: string; service: string; message: string }) {
  const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
  if (!res.ok) throw new Error("Failed to submit contact");
  return res.json();
}

export async function saveLeadEmail(email: string) {
  const res = await fetch("/api/assessment", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
  if (!res.ok) throw new Error("Failed to save email");
  return res.json();
}

export async function getChatResponse(query: string) {
  const res = await fetch(`/api/chat?q=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error("Chat request failed");
  return res.json();
}

export async function saveLeadToDB(data: any) {
  const res = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
  if (!res.ok) throw new Error("Failed to save lead");
  return res.json();
}

// Mock CRM functions for static SPA (require server-side team-db CLI)
export const crm = {
  checkAuth: async () => ({ authenticated: false }),
  getLeads: async () => [],
  createLead: async () => ({ id: "mock" }),
  updateLeadStatus: async () => ({ ok: true }),
  getCalls: async () => [],
  createCall: async () => ({ id: "mock" }),
  getProposals: async () => [],
  createProposal: async () => ({ id: "mock" }),
  getProposalByToken: async () => null,
  getClients: async () => [],
  getProjects: async () => [],
  getRevenue: async () => ({ total: 0 }),
  getDashboardSummary: async () => ({ leads: 0, calls: 0, proposals: 0, revenue: 0 }),
  captureEmail: async () => ({ ok: true }),
};