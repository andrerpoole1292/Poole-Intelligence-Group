/**
 * Knowledge base for the Poole Intelligence Group chatbot demo.
 * This contains curated information about our services, pricing, approach, etc.
 * In production, this would be replaced with a vector database + LLM pipeline.
 */

export interface KnowledgeEntry {
  keywords: string[];
  question: string;
  answer: string;
  category: string;
}

export const knowledgeBase: KnowledgeEntry[] = [
  // ── Company Overview ──
  {
    keywords: ["what", "poole", "intelligence", "group", "company", "about", "who", "are", "you", "consulting"],
    question: "What is Poole Intelligence Group?",
    answer:
      "Poole Intelligence Group helps SMBs (10–250 employees) cut through the AI noise and implement practical, results-driven AI strategies. We focus on AI strategy, workflow automation, AI agents, digital strategy, and AI implementation — delivering real business impact, not just hype. Our team combines deep technical expertise with hands-on consulting to ensure every solution moves the needle.",
    category: "company",
  },
  {
    keywords: ["where", "location", "office", "based", "sf", "san francisco"],
    question: "Where are you located?",
    answer:
      "We're headquartered in Charlotte, NC, but work with clients across North America remotely. Our team is equipped to deliver consulting engagements, training, and managed solutions entirely virtually, with on-site visits available for larger engagements when needed.",
    category: "company",
  },

  // ── Services / Consulting ──
  {
    keywords: ["service", "offer", "do you", "consulting", "engagement"],
    question: "What services do you offer?",
    answer:
      "We offer three core service lines:\n\n**1. Consulting Engagements** — Discovery workshops, strategy roadmaps, and implementation projects. We assess your AI readiness, identify high-impact opportunities, and build a custom roadmap with clear milestones and KPIs. Flat-fee pricing.\n\n**2. Training & Enablement** — Group workshops, ongoing cohorts, and executive briefings that build AI fluency across your organization. Per-seat or per-session pricing.\n\n**3. Managed AI Solutions** — Custom chatbots, automation pipelines, and content workflows. We build, deploy, and maintain them for you. Setup fee + monthly retainer.\n\nWhich area are you most interested in? I can share more details!",
    category: "services",
  },
  {
    keywords: ["consulting", "engagement", "workshop", "strategy", "roadmap", "discovery"],
    question: "Tell me more about your consulting engagements.",
    answer:
      "Our consulting engagements start with a **Discovery Workshop** where we immerse ourselves in your business — understanding your goals, pain points, data landscape, and AI readiness. From there, we build a **Custom Strategy Roadmap** with prioritized initiatives, timelines, resource requirements, and ROI projections. Finally, we help you **Implement** the highest-impact solutions, working side-by-side with your team.\n\nEngagements are flat-fee, typically ranging from $15K–$75K depending on scope and duration. Most clients see a clear path to ROI within the first 4–6 weeks.",
    category: "services",
  },
  {
    keywords: ["train", "training", "workshop", "enablement", "cohort", "learning", "upskill", "team", "education"],
    question: "What does your training & enablement look like?",
    answer:
      "Our training programs are hands-on and practical — no death by slides. We offer:\n\n• **Team Workshops (half-day to 2-day):** Interactive sessions covering AI fundamentals, prompt engineering, workflow automation, and responsible AI use. From $3K per session.\n\n• **Ongoing Cohorts:** Multi-week programs where teams build real AI projects with our guidance. From $1,500/seat.\n\n• **Executive Briefings:** 90-minute sessions for leadership teams covering AI strategy, competitive landscape, and investment priorities. From $2.5K per session.\n\nAll training is customized to your industry and tools. We also provide sandbox environments for hands-on practice.",
    category: "services",
  },
  {
    keywords: ["managed", "solution", "chatbot", "automation", "pipeline", "retainer"],
    question: "Tell me about your managed AI solutions.",
    answer:
      "Our managed solutions are fully built, deployed, and maintained by our team. You get the benefit of AI without needing to hire specialized talent.\n\n**Custom AI Chatbots** — Customer support bots, internal knowledge assistants, lead qualification bots. Setup from $8K, monthly retainer from $1.5K.\n\n**Workflow Automation Pipelines** — Automate repetitive tasks, data processing, document generation, and approval workflows. Setup from $12K, monthly retainer from $2K.\n\n**Content Workflows** — AI-powered content creation, curation, and distribution pipelines for marketing, social media, and internal communications. Setup from $10K, monthly retainer from $1.8K.\n\nAll solutions include ongoing monitoring, optimization, and support.",
    category: "services",
  },

  // ── Chatbot-specific ──
  {
    keywords: ["chatbot", "bot", "chat", "assistant", "support", "customer service", "faq"],
    question: "Can you tell me more about your custom chatbot solutions?",
    answer:
      "Absolutely! Our custom chatbots are designed for a range of use cases:\n\n**Customer Support Bots** — Handle FAQs, triage tickets, provide 24/7 support. Integrates with your knowledge base and can escalate to human agents seamlessly.\n\n**Internal Knowledge Assistants** — Help employees find information, navigate internal tools, and automate HR/IT requests. Connected to your wikis, docs, and databases.\n\n**Lead Qualification Bots** — Engage website visitors, answer product questions, capture leads, and qualify them before routing to sales.\n\n**Architecture:** We use a RAG (Retrieval-Augmented Generation) pattern — your documents are indexed into a vector database, and the LLM answers based on retrieved context. This means accurate, grounded answers that stay up to date with your content.\n\n**Tech stack options:** OpenAI GPT-4 / Claude / open-source LLMs, LangChain/LlamaIndex, Pinecone/Weaviate/ChromaDB, deployed on your infrastructure or ours.\n\nSetup from $8K, monthly retainer from $1.5K including monitoring, updates, and optimization.",
    category: "services",
  },

  // ── Pricing ──
  {
    keywords: ["price", "pricing", "cost", "how much", "fee", "rate", "budget", "investment", "roi"],
    question: "How much does it cost? How do you price your services?",
    answer:
      "Our pricing model is transparent and tailored to each engagement:\n\n**Consulting Engagements:** Flat-fee pricing. Discovery workshops start at $8K, full strategy roadmaps and implementation projects range from $15K–$75K depending on scope.\n\n**Training & Enablement:** Per-seat or per-session pricing. Workshops from $3K, cohort programs from $1,500/seat, executive briefings from $2.5K.\n\n**Managed AI Solutions:** Setup fee + monthly retainer. Chatbots from $8K setup + $1.5K/mo, automation pipelines from $12K setup + $2K/mo, content workflows from $10K setup + $1.8K/mo.\n\nWe always start with a free discovery call to understand your needs and provide a detailed proposal. No pressure, no jargon — just practical advice.",
    category: "pricing",
  },
  {
    keywords: ["free", "trial", "demo", "sample", "pilot"],
    question: "Do you offer free trials or pilots?",
    answer:
      "We don't offer a fully free trial, but we do offer a **complimentary 30-minute discovery call** where we'll discuss your needs and provide actionable advice — no commitment required. For larger engagements, we can structure a **paid pilot phase** (typically 2–4 weeks) at a reduced rate to demonstrate value before committing to a full engagement. This is especially common for our managed AI solutions, where we'll build a prototype chatbot or workflow to show what's possible with your actual data.",
    category: "pricing",
  },

  // ── Approach / Methodology ──
  {
    keywords: ["approach", "methodology", "process", "how", "work", "method", "framework"],
    question: "How does your engagement process work?",
    answer:
      "Our process follows four phases:\n\n**1. Discover** — We immerse ourselves in your business to understand goals, pain points, data landscape, and AI readiness. This includes stakeholder interviews, workflow analysis, and technology audits. (1–2 weeks)\n\n**2. Strategize** — We craft a tailored roadmap with clear milestones, timelines, and measurable KPIs. You get a prioritized action plan with ROI projections. (1–2 weeks)\n\n**3. Implement** — We build, deploy, and integrate AI solutions into your existing workflows. Hands-on, no handoffs. Your team is involved throughout. (4–12 weeks depending on scope)\n\n**4. Evolve** — We monitor, optimize, and scale. Your AI capability grows with your business. For managed solutions, this includes ongoing support and continuous improvement.\n\nThis methodology ensures every engagement delivers measurable value — not just a proof of concept that gathers dust.",
    category: "approach",
  },
  {
    keywords: ["timeline", "how long", "duration", "time", "weeks", "months", "when"],
    question: "How long does a typical engagement take?",
    answer:
      "Timelines vary by scope:\n\n• **Discovery Workshop:** 1–2 weeks from kickoff to report\n• **Strategy Roadmap:** 2–4 weeks including discovery\n• **Full Implementation:** 4–12 weeks depending on complexity\n• **Training Workshop:** Can be scheduled within 2 weeks\n• **Managed Solution Setup:** 3–6 weeks from kickoff to launch\n\nWe pride ourselves on moving fast — most clients see a clear path to ROI within the first 4–6 weeks of engagement.",
    category: "approach",
  },

  // ── Target Market ──
  {
    keywords: ["who", "client", "customer", "industry", "smb", "size", "company size", "employee"],
    question: "Who do you work with?",
    answer:
      "Our sweet spot is **SMBs with 10–250 employees** in three primary verticals:\n\n• **Professional Services** — Law firms, accounting firms, consultancies, architecture/engineering firms\n• **E-Commerce** — Online retailers, DTC brands, marketplace operators\n• **SaaS** — B2B and B2C software companies\n\nThese organizations typically know they should be using AI but lack the in-house expertise to implement it effectively. We bridge that gap — bringing enterprise-grade AI strategies without the enterprise price tag or complexity.\n\nThat said, we've worked with companies outside these verticals too. If you're curious whether you're a good fit, let's talk!",
    category: "company",
  },

  // ── Competitive / Differentiators ──
  {
    keywords: ["different", "unique", "why", "better", "competitor", "vs", "versus", "compare"],
    question: "What makes you different from other AI consultancies?",
    answer:
      "Three things set us apart:\n\n**1. Practical over hype.** We don't sell buzzwords. Every recommendation is tied to a measurable business outcome. If AI isn't the right answer for a problem, we'll tell you.\n\n**2. Hands-on delivery.** Our team builds what we design. No handoffs to junior implementers. The same senior consultants who run your workshop will build your solution.\n\n**3. Ongoing partnership.** For managed solutions, we don't just hand over the keys and walk away. We monitor, optimize, and evolve your AI capabilities over time.\n\nWe also price transparently (flat fees, no hourly billing for consulting) and right-size solutions for SMB budgets — you don't need a Fortune 500 budget to get enterprise-grade AI.",
    category: "company",
  },

  // ── Tech Stack ──
  {
    keywords: ["tech", "technology", "stack", "llm", "model", "openai", "claude", "gpt", "langchain", "vector", "database"],
    question: "What technology stack do you use?",
    answer:
      "We're technology-agnostic and choose the best tools for each client's needs. Our typical stack includes:\n\n**LLMs:** OpenAI GPT-4o, Anthropic Claude 3.5, or open-source models (Llama, Mistral) via self-hosted inference\n\n**Frameworks:** LangChain, LlamaIndex, custom pipelines\n\n**Vector Databases:** Pinecone, Weaviate, ChromaDB, or pgvector\n\n**Integrations:** Slack, Salesforce, HubSpot, Zendesk, Shopify, Notion, Google/Microsoft 365, and custom APIs\n\n**Deployment:** Your cloud (AWS/GCP/Azure) or ours, with full security and compliance controls\n\nWe recommend the stack that best fits your use case, budget, and data sensitivity requirements — not what's trendy.",
    category: "services",
  },

  // ── Security / Compliance ──
  {
    keywords: ["security", "data", "privacy", "compliance", "gdpr", "hipaa", "soc2", "sensitive", "confidential"],
    question: "How do you handle data security and privacy?",
    answer:
      "Data security is paramount in everything we build. Here's our approach:\n\n• All data is encrypted at rest and in transit\n• We deploy solutions in your cloud environment or a dedicated, isolated infrastructure — never in shared tenancy\n• We support SOC 2, GDPR, and HIPAA compliance requirements\n• No client data is used for model training (we sign data processing agreements as standard)\n• We conduct regular security audits and penetration testing\n• For chatbot solutions, we implement PII redaction and access controls\n\nWe'll work with your security team to ensure everything meets your requirements before go-live.",
    category: "company",
  },

  // ── Contact ──
  {
    keywords: ["contact", "reach", "email", "call", "book", "schedule", "meeting", "get started", "talk"],
    question: "How can I get in touch?",
    answer:
      "The best way to start is to **book a free 30-minute discovery call** through our contact page. We'll learn about your needs and provide actionable advice — no pitch, no pressure.\n\nYou can also email us at **hello@pooleintelligencegroup.com** or use the contact form on our website. We typically respond within 24 hours.\n\nWe're based in Charlotte, NC and work with clients across North America.",
    category: "company",
  },

  // ── Fallback / Catch-all Response ──
  {
    keywords: ["help", "capabilities", "can you"],
    question: "What can you help me with?",
    answer:
      "I'm the Poole Intelligence assistant! I can answer questions about:\n\n• **Our services** — Consulting, training, and managed AI solutions\n• **Pricing and engagement models** — How we work and what things cost\n• **Our approach** — The methodology behind our engagements\n• **Our technology stack** — What tools and frameworks we use\n• **Who we work with** — Client profiles and industries\n\nWhat would you like to know more about? You can also try one of the suggested questions below to get started!",
    category: "general",
  },
];

export function findBestAnswer(query: string): { answer: string; question: string } | null {
  const queryLower = query.toLowerCase();
  const words = queryLower.split(/\s+/).filter((w) => w.length > 2);

  let bestMatch: { entry: KnowledgeEntry; score: number } | null = null;

  for (const entry of knowledgeBase) {
    let score = 0;
    for (const keyword of entry.keywords) {
      const keywordParts = keyword.toLowerCase().split(/\s+/);
      // Exact phrase match gives high score
      if (queryLower.includes(keyword)) {
        score += 5;
      }
      // Individual keyword word matches
      for (const word of words) {
        if (keywordParts.some((kp) => kp.includes(word) || word.includes(kp))) {
          score += 2;
        }
      }
    }
    if (score > (bestMatch?.score ?? 0)) {
      bestMatch = { entry, score };
    }
  }

  if (bestMatch && bestMatch.score >= 3) {
    return { answer: bestMatch.entry.answer, question: bestMatch.entry.question };
  }

  return null;
}