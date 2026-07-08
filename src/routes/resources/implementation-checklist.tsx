import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { captureEmail } from "~/lib/crm";

export const Route = createFileRoute("/resources/implementation-checklist")({
  component: ChecklistPage,
  head: () => ({
    meta: [{ title: "Implementation Checklist — Poole Intelligence Group" }],
  }),
});

function ChecklistPage() {
  const [email, setEmail] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleUnlock(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Save via server function
    captureEmail({ email, source: "checklist-download" }).catch(() => {});
    setSubmitted(true);
    setShowContent(true);
  }

  function handlePrint() {
    window.print();
  }

  return (
    <div className="min-h-dvh bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <div className="mb-8 text-center">
          <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-4 py-1.5 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
            Free Resource
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#1B2A4A] dark:text-gray-100 sm:text-4xl">
            AI Implementation Checklist
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            A proven 4-phase framework for successful AI adoption — from discovery to ongoing evolution.
          </p>
        </div>

        {!showContent && (
          <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <h2 className="mb-2 text-lg font-bold text-[#1B2A4A] dark:text-gray-100">Get Your Free Checklist</h2>
            <p className="mb-4 text-sm text-gray-500">Enter your email to unlock the full implementation checklist.</p>
            <form onSubmit={handleUnlock} className="space-y-3">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" required className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-[#1B2A4A] focus:outline-none dark:border-gray-700 dark:bg-gray-900" />
              <button type="submit" className="w-full rounded-xl bg-[#1B2A4A] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2A3A5A]">
                Unlock Checklist
              </button>
            </form>
          </div>
        )}

        {showContent && (
          <>
            <div className="mb-4 flex justify-end">
              <button onClick={handlePrint} className="rounded-lg bg-[#1B2A4A] px-4 py-2 text-xs font-semibold text-white">📄 Download / Print PDF</button>
            </div>
            <div id="checklist-content" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 sm:p-8">
              <div className="mb-8 border-b border-gray-200 pb-6 text-center">
                <span className="text-2xl font-bold text-[#1B2A4A]">Poole Intelligence Group</span>
                <p className="text-sm text-gray-500">AI Implementation Checklist</p>
              </div>

              {checklistSections.map((section, i) => (
                <div key={i} className="mb-8">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1B2A4A] text-xs font-bold text-white">{section.phase}</span>
                    <div>
                      <h2 className="text-lg font-bold text-[#1B2A4A]">{section.title}</h2>
                      <p className="text-xs text-gray-500">{section.timeline}</p>
                    </div>
                  </div>
                  <div className="space-y-2 pl-11">
                    {section.items.map((item, j) => (
                      <label key={j} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#1B2A4A] focus:ring-[#1B2A4A]" />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mt-8 border-t border-gray-200 pt-6 text-center">
                <p className="text-xs text-gray-400">Poole Intelligence Group — Building Smarter Businesses with AI</p>
                <p className="text-xs text-gray-400">hello@pooleintelligencegroup.com</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link to="/resources/roi-calculator" className="inline-block rounded-xl bg-[#1B2A4A] px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#2A3A5A]">
                Calculate Your AI ROI
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const checklistSections = [
  {
    phase: "1",
    title: "Discover",
    timeline: "Weeks 1–2",
    items: [
      "Schedule kickoff meeting with key stakeholders",
      "Send pre-meeting questionnaire (goals, pain points, tools, budget)",
      "Define success criteria and KPIs with the client",
      "Interview executive sponsor — strategic goals, budget, timeline",
      "Interview department heads — operational pain points, workflows",
      "Interview end users — daily challenges, tool friction",
      "Interview IT/security — data access, compliance, infrastructure",
      "Document current tool stack and integration points",
      "Map decision-making process and approval chains",
      "Inventory available data sources (docs, databases, APIs)",
      "Assess data quality, volume, and accessibility",
      "Review existing AI/automation tools and usage",
      "Evaluate IT infrastructure (cloud vs. on-premise)",
      "Check security & compliance requirements (SOC 2, GDPR, HIPAA)",
      "Identify quick wins (high-impact, low-complexity)",
      "Flag potential blockers (data access, compliance, budget)",
      "Assess organizational readiness for AI adoption",
      "Deliver: Discovery Report with findings and AI Opportunity Map",
    ],
  },
  {
    phase: "2",
    title: "Strategize",
    timeline: "Weeks 2–4",
    items: [
      "Present discovery findings to stakeholders",
      "Facilitate prioritization workshop (impact vs. effort matrix)",
      "Align on top 3–5 initiatives to pursue",
      "Define measurable KPIs for each initiative",
      "Discuss technology options (build vs. buy, open-source vs. managed)",
      "Define phased implementation plan (minimum 3 phases)",
      "Estimate timeline for each phase",
      "Identify dependencies between phases",
      "Map resources needed (internal team time, external specialists)",
      "Build risk mitigation plan",
      "Evaluate LLM options (OpenAI, Anthropic, open-source)",
      "Select vector database (if RAG needed)",
      "Choose orchestration framework (LangChain, LlamaIndex, custom)",
      "Determine deployment model (cloud, on-premise, hybrid)",
      "Build ROI model (cost savings, revenue lift, efficiency gains)",
      "Calculate total cost of ownership (setup + 12-month run)",
      "Deliver: Strategy Roadmap, Technology Recommendations, ROI Business Case",
      "Obtain formal approval (signed SOW or contract)",
    ],
  },
  {
    phase: "3",
    title: "Implement",
    timeline: "Weeks 4–16",
    items: [
      "Set up development environment",
      "Configure cloud infrastructure (or client VPC)",
      "Establish CI/CD pipeline",
      "Connect to data sources (APIs, databases, file storage)",
      "Build data ingestion pipeline (if RAG)",
      "Implement vector embedding and indexing (if RAG)",
      "Set up monitoring and logging infrastructure",
      "Configure authentication and access control",
      "Build core LLM orchestration logic",
      "Implement retrieval pipeline (hybrid search)",
      "Develop prompt templates and system prompts",
      "Build response formatting and citation generation",
      "Implement conversation history management",
      "Integrate with client's existing tools (CRM, helpdesk, CMS)",
      "Build Slack/Teams/email bot (if applicable)",
      "Implement web chat widget or embed",
      "Conduct internal QA testing",
      "Perform load testing and benchmark performance",
      "Run security audit and penetration testing",
      "Optimize for cost (caching, model tiering, prompt compression)",
      "Deploy to staging environment",
      "Conduct user acceptance testing (UAT) with client team",
      "Train client administrators and end users",
      "Create user documentation and FAQ",
      "Deploy to production",
      "Monitor closely for first 48 hours post-launch",
    ],
  },
  {
    phase: "4",
    title: "Evolve",
    timeline: "Ongoing",
    items: [
      "Daily health checks during first 30 days (hyper-care)",
      "Review performance metrics and logs",
      "Collect user feedback",
      "Tune prompts and retrieval parameters",
      "Optimize cost (adjust model tiering, caching)",
      "Monthly: Review analytics dashboard (usage, satisfaction, cost)",
      "Monthly: Update knowledge base / content sources",
      "Monthly: Fine-tune prompt templates",
      "Monthly: Apply model updates and security patches",
      "Monthly: Send performance report to client stakeholders",
      "Quarterly: Deep-dive performance review",
      "Quarterly: ROI analysis (actual vs. projected)",
      "Quarterly: Identify new opportunities for AI expansion",
      "Quarterly: Review and update roadmap",
      "Annual: Full strategic review",
      "Annual: Technology refresh assessment (new models, tools)",
      "Annual: Security audit and compliance review",
      "Annual: Client satisfaction survey",
    ],
  },
];