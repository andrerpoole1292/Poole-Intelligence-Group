// CRM client — replaced with client-safe HTTP calls
const ADMIN_USER = "admin";
const ADMIN_PASS = "PIG-admin-2026";

export async function checkAuth(creds?: { user: string; pass: string }) {
  if (!creds) return { authenticated: false };
  return { valid: creds.user === ADMIN_USER && creds.pass === ADMIN_PASS };
}

export async function getLeads() { try { const r = await fetch("/api/leads"); return r.ok ? r.json() : []; } catch { return []; } }

export async function createLead(data: any) { const r = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); return r.json(); }

export async function updateLeadStatus(data: any) { const r = await fetch("/api/leads/status", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); return r.json(); }

export async function getCalls() { try { const r = await fetch("/api/calls"); return r.ok ? r.json() : []; } catch { return []; } }

export async function createCall(data: any) { const r = await fetch("/api/calls", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); return r.json(); }

export async function getProposals() { try { const r = await fetch("/api/proposals"); return r.ok ? r.json() : []; } catch { return []; } }

export async function createProposal(data: any) { const r = await fetch("/api/proposals", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); return r.json(); }

export async function getProposalByToken(token: string) { try { const r = await fetch(`/api/proposals/${token}`); return r.ok ? r.json() : null; } catch { return null; } }

export async function getClients() { try { const r = await fetch("/api/clients"); return r.ok ? r.json() : []; } catch { return []; } }

export async function getProjects() { try { const r = await fetch("/api/projects"); return r.ok ? r.json() : []; } catch { return []; } }

export async function getRevenue() { try { const r = await fetch("/api/revenue"); return r.ok ? r.json() : { total: 0 }; } catch { return { total: 0 }; } }

export async function getDashboardSummary() { try { const r = await fetch("/api/dashboard"); return r.ok ? r.json() : { leads: 0, calls: 0, proposals: 0, revenue: 0 }; } catch { return { leads: 0, calls: 0, proposals: 0, revenue: 0 }; } }

export async function captureEmail(data: any) { const r = await fetch("/api/email/capture", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); return r.json(); }