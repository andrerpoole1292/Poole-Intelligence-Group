import { createServerFn } from "@tanstack/react-start";

// ── Auth ──
const ADMIN_USER = process.env.ADMIN_USER || "admin";
const ADMIN_PASS = process.env.ADMIN_PASS || "poole2024";

export const checkAuth = createServerFn({ method: "GET" })
  .validator((data: { user?: string; pass?: string }) => data)
  .handler(async ({ data }) => {
    return {
      valid: data.user === ADMIN_USER && data.pass === ADMIN_PASS,
      user: data.user === ADMIN_USER ? ADMIN_USER : null,
    };
  });

// ── Utility ──
function uid() {
  return "xxxxxxxxxxxx".replace(/x/g, () =>
    Math.random().toString(36).charAt(2)
  );
}

function runSQL(sql: string) {
  return $`team-db ${sql}`.text();
}

// ── Leads ──
export const getLeads = createServerFn({ method: "GET" }).handler(async () => {
  const out = await runSQL("SELECT * FROM crm_leads ORDER BY created_at DESC");
  return JSON.parse(out);
});

export const createLead = createServerFn({ method: "POST" })
  .validator((d: { name: string; email: string; company?: string; phone?: string; source?: string; notes?: string }) => d)
  .handler(async ({ data }) => {
    const id = uid();
    await runSQL(
      `INSERT INTO crm_leads (id, name, email, company, phone, source, notes) VALUES ('${id}', '${data.name.replace(/'/g, "''")}', '${data.email.replace(/'/g, "''")}', '${(data.company || "").replace(/'/g, "''")}', '${(data.phone || "").replace(/'/g, "''")}', '${(data.source || "manual").replace(/'/g, "''")}', '${(data.notes || "").replace(/'/g, "''")}')`
    );
    return { id };
  });

export const updateLeadStatus = createServerFn({ method: "POST" })
  .validator((d: { id: string; status: string }) => d)
  .handler(async ({ data }) => {
    await runSQL(`UPDATE crm_leads SET status = '${data.status.replace(/'/g, "''")}' WHERE id = '${data.id}'`);
    return { ok: true };
  });

// ── Discovery Calls ──
export const getCalls = createServerFn({ method: "GET" }).handler(async () => {
  const out = await runSQL(
    "SELECT c.*, l.name as lead_name, l.company as lead_company FROM crm_discovery_calls c LEFT JOIN crm_leads l ON c.lead_id = l.id ORDER BY c.scheduled_at DESC"
  );
  return JSON.parse(out);
});

export const createCall = createServerFn({ method: "POST" })
  .validator((d: { lead_id: string; scheduled_at: string }) => d)
  .handler(async ({ data }) => {
    const id = uid();
    await runSQL(
      `INSERT INTO crm_discovery_calls (id, lead_id, scheduled_at) VALUES ('${id}', '${data.lead_id}', '${data.scheduled_at}')`
    );
    return { id };
  });

// ── Proposals ──
export const getProposals = createServerFn({ method: "GET" }).handler(async () => {
  const out = await runSQL(
    "SELECT p.*, l.name as lead_name, l.company as lead_company FROM crm_proposals p LEFT JOIN crm_leads l ON p.lead_id = l.id ORDER BY p.created_at DESC"
  );
  return JSON.parse(out);
});

export const createProposal = createServerFn({ method: "POST" })
  .validator((d: { lead_id: string; title: string; amount_cents: number; content?: string }) => d)
  .handler(async ({ data }) => {
    const id = uid();
    const token = uid() + uid();
    await runSQL(
      `INSERT INTO crm_proposals (id, lead_id, title, amount_cents, content, share_token) VALUES ('${id}', '${data.lead_id}', '${data.title.replace(/'/g, "''")}', ${data.amount_cents}, '${(data.content || "").replace(/'/g, "''")}', '${token}')`
    );
    return { id, share_token: token };
  });

export const getProposalByToken = createServerFn({ method: "GET" })
  .validator((d: { token: string }) => d)
  .handler(async ({ data }) => {
    const out = await runSQL(`SELECT * FROM crm_proposals WHERE share_token = '${data.token}'`);
    const rows = JSON.parse(out);
    return rows[0] || null;
  });

// ── Clients ──
export const getClients = createServerFn({ method: "GET" }).handler(async () => {
  const out = await runSQL("SELECT * FROM crm_clients ORDER BY start_date DESC");
  return JSON.parse(out);
});

// ── Projects ──
export const getProjects = createServerFn({ method: "GET" }).handler(async () => {
  const out = await runSQL(
    "SELECT p.*, c.name as client_name, c.company as client_company FROM crm_projects p LEFT JOIN crm_clients c ON p.client_id = c.id ORDER BY p.start_date DESC"
  );
  return JSON.parse(out);
});

// ── Revenue ──
export const getRevenue = createServerFn({ method: "GET" }).handler(async () => {
  const out = await runSQL("SELECT * FROM crm_revenue ORDER BY date DESC");
  const rows = JSON.parse(out);
  const total = rows.reduce((s: number, r: any) => s + r.amount_cents, 0);
  return { rows, total_cents: total };
});

// ── Dashboard Summary ──
export const getDashboardSummary = createServerFn({ method: "GET" }).handler(async () => {
  const leads = JSON.parse(await runSQL("SELECT COUNT(*) as count FROM crm_leads"));
  const proposals = JSON.parse(await runSQL("SELECT COUNT(*) as count, COALESCE(SUM(amount_cents), 0) as total FROM crm_proposals WHERE status != 'draft'"));
  const clients = JSON.parse(await runSQL("SELECT COUNT(*) as count FROM crm_clients WHERE status = 'active'"));
  const rev = JSON.parse(await runSQL("SELECT COALESCE(SUM(amount_cents), 0) as total FROM crm_revenue"));
  
  // Pipeline counts
  const pipeline = JSON.parse(await runSQL(
    "SELECT status, COUNT(*) as count FROM crm_leads GROUP BY status"
  ));

  return {
    total_leads: leads[0]?.count || 0,
    total_proposals: proposals[0]?.count || 0,
    proposal_value_cents: proposals[0]?.total || 0,
    active_clients: clients[0]?.count || 0,
    revenue_cents: rev[0]?.total || 0,
    pipeline,
  };
});
// ── Email capture (for checklist downloads etc.) ──
export const captureEmail = createServerFn({ method: "POST" })
  .validator((d: { email: string; source?: string }) => d)
  .handler(async ({ data }) => {
    if (!data.email?.trim()) throw new Error("Email required");
    const timestamp = new Date().toISOString();
    const logLine = `${timestamp} | ${data.email} | ${data.source || "unknown"}\n`;
    const fs = await import("fs");
    fs.appendFileSync("/home/team/shared/site/.data/leads.log", logLine);
    const id = Date.now().toString(36) + Math.random().toString(36).substring(2, 6);
    const sql = `INSERT INTO crm_leads (id, name, email, source, status) VALUES ('${id}', '${data.email.split("@")[0]}', '${data.email.replace(/'/g, "''")}', '${(data.source || "website").replace(/'/g, "''")}', 'new')`;
    await $`team-db ${sql}`.text();
    return { ok: true, id };
  });
