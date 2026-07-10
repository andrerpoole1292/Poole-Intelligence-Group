import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";

export const Route = createFileRoute("/demo")({
  component: DemoPage,
  head: () => ({
    meta: [
      { title: "AI Chatbot Demo | Poole Intelligence Group" },
      {
        name: "description",
        content:
          "See what an AI-powered chatbot looks like. Demo built by Poole Intelligence Group — AI consulting and automation for SMBs.",
      },
    ],
  }),
});

// ── Scripted conversation flow ──
interface ScriptNode {
  id: string;
  bot: string;
  options?: { label: string; next: string }[];
  inputType?: "text" | "email" | "select" | "submit";
  inputPlaceholder?: string;
  inputNext?: string;
}

const script: Record<string, ScriptNode> = {
  welcome: {
    id: "welcome",
    bot: "👋 Hi there! I'm the **PIG Assistant** — a demo of what Poole Intelligence Group builds for clients.\n\nI'm here to show you how an AI-powered chatbot can help your business. Let's chat a bit — I'll ask a few questions and point you to resources that might help.\n\n> ⚠️ This is a demo AI assistant. Responses are pre-scripted to demonstrate capabilities.",
    options: [
      { label: "👍 Sounds good, let's go!", next: "challenge" },
      { label: "Tell me about PIG first", next: "about_pig" },
    ],
  },
  about_pig: {
    id: "about_pig",
    bot: "**Poole Intelligence Group (PIG)** helps SMBs build smarter operations with AI. We deliver:\n\n• **AI Strategy & Consulting** — Roadmaps, assessments, implementation plans\n• **Workflow Automation** — Automate repetitive tasks and processes\n• **AI Agents & Chatbots** — Custom AI assistants like this one (but powered by your data)\n• **Digital Strategy** — Transform your digital operations\n• **AI Implementation** — We build and deploy, not just advise\n\nWe're vendor-agnostic, practical, and focused on real business outcomes — not hype.\n\nWant to see what we could build for you?",
    options: [
      { label: "Yes! Let's explore", next: "challenge" },
      { label: "I'm just browsing", next: "browsing" },
    ],
  },
  browsing: {
    id: "browsing",
    bot: "No problem at all! Feel free to look around. Here are some pages that might interest you:\n\n• [Our Services](/services)\n• [ROI Calculator](/resources/roi-calculator)\n• [AI Implementation Checklist](/resources/implementation-checklist)\n\nIf you'd like us to reach out, just leave your email below!",
    options: [
      { label: "Actually, let's explore further", next: "challenge" },
    ],
    inputType: "email",
    inputPlaceholder: "your@email.com (optional)",
    inputNext: "thank_you_browsing",
  },
  thank_you_browsing: {
    id: "thank_you_browsing",
    bot: "Thanks for stopping by! If you ever want to chat more, you know where to find us.\n\n👉 **Next step:** Check out our [AI Implementation Checklist](/resources/implementation-checklist) — a practical guide to getting started with AI.",
    options: [
      { label: "Go to Resources", next: "" },
    ],
  },
  challenge: {
    id: "challenge",
    bot: "Great question! **What's the biggest challenge your business is facing right now?**",
    options: [
      { label: "Too much manual work & data entry", next: "automation_fit" },
      { label: "Customer support is overwhelmed", next: "chatbot_fit" },
      { label: "Need an AI strategy but don't know where to start", next: "strategy_fit" },
      { label: "Something else", next: "general_fit" },
    ],
  },
  automation_fit: {
    id: "automation_fit",
    bot: "That's exactly where we help most. **Workflow automation** can handle repetitive tasks like data entry, report generation, email triage, and cross-system workflows.\n\nWe build custom automation pipelines that integrate with your existing tools (Salesforce, HubSpot, Slack, etc.) — saving your team hours every day.\n\n**Typical results:** 70–90% reduction in manual processing time, 95% fewer data entry errors.\n\nWant to see the kind of ROI this could generate for your team?",
    options: [
      { label: "Yes, calculate my ROI", next: "lead_capture" },
      { label: "Tell me more", next: "tell_me_more_automation" },
    ],
  },
  tell_me_more_automation: {
    id: "tell_me_more_automation",
    bot: "Sure! Here's how we approach workflow automation:\n\n1. **Discover** — We map your current workflows and identify bottlenecks\n2. **Design** — We architect an automation solution using the right tools (AI + traditional automation)\n3. **Build & Deploy** — We build, test, and deploy into your environment\n4. **Optimize** — We monitor, tune, and scale over time\n\nCommon automations include: invoice processing, customer onboarding, compliance reporting, lead enrichment, and content distribution.\n\nLet's capture your info so we can follow up with a personalized assessment.",
    options: [
      { label: "Perfect, let's do it!", next: "lead_capture" },
    ],
  },
  chatbot_fit: {
    id: "chatbot_fit",
    bot: "A custom **AI chatbot** could be exactly what you need. We build chatbots that:\n\n• Handle FAQs 24/7 — no wait times\n• Integrate with your knowledge base, docs, and FAQs\n• Escalate to human agents when needed\n• Capture leads and qualify them before routing to sales\n\n**Typical results:** 85% of tier-1 questions answered automatically, response times reduced from hours to seconds.\n\nWant to learn how we'd build one for your business?",
    options: [
      { label: "Yes, tell me how", next: "lead_capture" },
      { label: "Show me the architecture", next: "chatbot_arch" },
    ],
  },
  chatbot_arch: {
    id: "chatbot_arch",
    bot: "We use a **RAG (Retrieval-Augmented Generation)** pattern:\n\n1. Your content (docs, FAQs, wikis) is indexed into a vector database\n2. When a user asks a question, we retrieve the most relevant information\n3. An LLM generates a response grounded in your content\n\nThis means accurate, up-to-date answers with full citations. No hallucination, no stale responses.\n\n**Tech stack options:** OpenAI GPT-4o, Anthropic Claude, LangChain, Pinecone/Weaviate, deployed in your cloud or ours.\n\nSetup from $8K, monthly retainer from $1.5K.",
    options: [
      { label: "I'm interested — capture my info", next: "lead_capture" },
    ],
  },
  strategy_fit: {
    id: "strategy_fit",
    bot: "That's a very common starting point — and a smart one. You don't need to figure it all out alone.\n\nOur **AI Strategy & Consulting** engagement starts with a **Discovery Workshop** where we:\n\n1. Assess your current operations, data, and tools\n2. Identify high-impact AI opportunities\n3. Build a custom roadmap with clear milestones and ROI projections\n4. Recommend the right technology stack (no vendor lock-in)\n\n**Deliverables:** AI Opportunity Assessment, Strategy Roadmap, Tech Recommendations, Implementation Plan.\n\nReady to start your AI journey?",
    options: [
      { label: "Yes! Capture my info", next: "lead_capture" },
      { label: "What does it cost?", next: "pricing_info" },
    ],
  },
  pricing_info: {
    id: "pricing_info",
    bot: "Our pricing is transparent and right-sized for SMBs:\n\n**Consulting:**\n• Discovery Workshop: From $8K\n• Full Strategy + Roadmap: $15K–$30K\n• Implementation: $25K–$75K\n\n**Managed Solutions:**\n• Custom Chatbot: $8K setup + $1.5K/mo\n• Automation Pipeline: $12K setup + $2K/mo\n• Content Workflow: $10K setup + $1.8K/mo\n\n**Training:** Workshops from $3K, cohorts from $1,500/seat.\n\nAll engagements start with a free 30-min discovery call. Ready to take the next step?",
    options: [
      { label: "Yes, let's talk!", next: "lead_capture" },
    ],
  },
  general_fit: {
    id: "general_fit",
    bot: "No problem — we work with a wide range of challenges! Whether it's content creation, digital transformation, data analysis, or something completely unique, we've probably solved something similar.\n\n**The best way to find out if we can help is a quick chat.** Let me capture your info and we'll set up a free discovery call.",
    options: [
      { label: "Sure, capture my info", next: "lead_capture" },
    ],
  },
  lead_capture: {
    id: "lead_capture",
    bot: "Excellent! Let me grab a few details so we can follow up with you. **What's your name?**",
    inputType: "text",
    inputPlaceholder: "Your full name *",
    inputNext: "lead_email",
  },
  lead_email: {
    id: "lead_email",
    bot: "Great, thanks! And **what's your email address?**",
    inputType: "email",
    inputPlaceholder: "you@company.com *",
    inputNext: "lead_company",
  },
  lead_company: {
    id: "lead_company",
    bot: "Thanks! **What company do you work for?**",
    inputType: "text",
    inputPlaceholder: "Company name",
    inputNext: "lead_interest",
  },
  lead_interest: {
    id: "lead_interest",
    bot: "Almost done! **Which area interests you most?**",
    inputType: "select",
    inputPlaceholder: "Select an area...",
    inputNext: "lead_phone",
    options: [
      { label: "AI Strategy & Consulting", next: "lead_phone" },
      { label: "Workflow Automation", next: "lead_phone" },
      { label: "AI Agents & Chatbots", next: "lead_phone" },
      { label: "Digital Strategy", next: "lead_phone" },
      { label: "Other", next: "lead_phone" },
    ],
  },
  lead_phone: {
    id: "lead_phone",
    bot: "One last thing — **what's your phone number?** (optional, for scheduling your discovery call)",
    inputType: "text",
    inputPlaceholder: "Phone number (optional)",
    inputNext: "lead_privacy",
  },
  lead_privacy: {
    id: "lead_privacy",
    bot: `We'll never share your information. By submitting, you agree to our Privacy Policy.`,
    inputType: "submit",
    inputPlaceholder: "Submit your information",
    inputNext: "thank_you",
  },
  thank_you: {
    id: "thank_you",
    bot: "🎉 **Thank you!** Your information has been received.\n\nOne of our team members will reach out within **24 hours** to schedule your free discovery call.\n\nIn the meantime, here's something valuable:\n\n👉 **[Download our AI Implementation Checklist](/resources/implementation-checklist)** — a practical, 4-phase guide to successfully adopting AI in your business.\n\nIt covers everything from discovery to ongoing optimization, with actionable checklists for each phase.",
    options: [
      { label: "📋 Get the Checklist", next: "" },
      { label: "📊 Calculate Your ROI", next: "" },
      { label: "🔙 Back to Home", next: "" },
    ],
  },
};

// ── Lead storage ──
async function saveLead(data: {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
}) {
  const nameSafe = data.name.replace(/'/g, "''");
  const emailSafe = data.email.replace(/'/g, "''");
  const companySafe = (data.company || "").replace(/'/g, "''");
  const phoneSafe = (data.phone || "").replace(/'/g, "''");
  const interestSafe = (data.interest || "").replace(/'/g, "''");
  const sql = `INSERT INTO leads (name, email, company, phone, interest, source) VALUES ('${nameSafe}', '${emailSafe}', '${companySafe}', '${phoneSafe}', '${interestSafe}', 'chatbot')`;
  try {
    // We use a fetch to a team-db endpoint via a simple approach
    const proc = Bun.spawnSync(["team-db", sql]);
    return { ok: true };
  } catch {
    return { ok: false };
  }
}

// Client-side API call
async function saveLeadToDB(data: { name: string; email: string; company?: string; phone?: string; interest?: string }) {
  const res = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, source: "chatbot" }),
  });
  if (!res.ok) throw new Error("Failed to save lead");
  return res.json();
}

// ── Component ──
function DemoPage() {
  const [currentNode, setCurrentNode] = useState("welcome");
  const [messages, setMessages] = useState<{ role: "user" | "bot"; content: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedInterest, setSelectedInterest] = useState("");
  const [leadData, setLeadData] = useState({ name: "", email: "", company: "", phone: "", interest: "" });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Add initial bot message
  useEffect(() => {
    if (messages.length === 0) {
      showBotMessage(currentNode);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  function showBotMessage(nodeId: string, delay = 600) {
    setIsTyping(true);
    setTimeout(() => {
      const node = script[nodeId];
      if (node) {
        setMessages((prev) => [...prev, { role: "bot", content: node.bot }]);
      }
      setIsTyping(false);
      // Focus input after bot message
      setTimeout(() => inputRef.current?.focus(), 100);
    }, delay);
  }

  function handleOptionClick(nextId: string) {
    if (!nextId) return;
    setCurrentNode(nextId);
    showBotMessage(nextId);
  }

  function handleOptionWithLabel(label: string, nextId: string) {
    setMessages((prev) => [...prev, { role: "user", content: label }]);
    handleOptionClick(nextId);
  }

  async function handleInputSubmit(e: React.FormEvent) {
    e.preventDefault();
    const val = inputValue.trim();
    if (!val && currentNode !== "lead_privacy") return;

    const node = script[currentNode];
    if (!node) return;

    // Store user input
    if (node.id === "lead_capture") {
      setLeadData((d) => ({ ...d, name: val }));
      setMessages((prev) => [...prev, { role: "user", content: val }]);
      setInputValue("");
      const next = node.inputNext || "";
      setCurrentNode(next);
      showBotMessage(next);
    } else if (node.id === "lead_email") {
      setLeadData((d) => ({ ...d, email: val }));
      setMessages((prev) => [...prev, { role: "user", content: val }]);
      setInputValue("");
      const next = node.inputNext || "";
      setCurrentNode(next);
      showBotMessage(next);
    } else if (node.id === "lead_company") {
      setLeadData((d) => ({ ...d, company: val }));
      setMessages((prev) => [...prev, { role: "user", content: val }]);
      setInputValue("");
      const next = node.inputNext || "";
      setCurrentNode(next);
      showBotMessage(next);
    } else if (node.id === "lead_phone") {
      setLeadData((d) => ({ ...d, phone: val, interest: selectedInterest }));
      setMessages((prev) => [...prev, { role: "user", content: val || "(skipped)" }]);
      setInputValue("");
      const next = node.inputNext || "";
      setCurrentNode(next);
      showBotMessage(next);
    } else if (node.id === "lead_privacy") {
      setMessages((prev) => [...prev, { role: "user", content: "Submit my information" }]);
      setIsTyping(true);

      // Save to DB
      try {
        await saveLeadToDB(leadData);
      } catch (e) {
        console.error("Failed to save lead:", e);
      }

      setLeadSubmitted(true);
      setIsTyping(false);
      const next = node.inputNext || "";
      setCurrentNode(next);
      showBotMessage(next, 300);
    }
  }

  function handleSelectInterest(interest: string, nextId: string) {
    setSelectedInterest(interest);
    setMessages((prev) => [...prev, { role: "user", content: interest }]);
    setInputValue("");
    const node = script[currentNode];
    const next = node?.inputNext || nextId;
    setCurrentNode(next);
    showBotMessage(next);
  }

  function handleBrowsingEmail() {
    const val = inputValue.trim();
    if (val) {
      saveLeadToDB({ name: val.split("@")[0], email: val, interest: "browsing" }).catch(() => {});
    }
    setMessages((prev) => [...prev, { role: "user", content: val || "(skipped)" }]);
    setInputValue("");
    const next = "thank_you_browsing";
    setCurrentNode(next);
    showBotMessage(next);
  }

  const node = script[currentNode];
  const showOptions = node?.options && node.inputType !== "select" && node.inputType !== "submit";
  const showInput = node?.inputType === "text" || node?.inputType === "email";
  const showSelect = node?.inputType === "select";
  const showSubmit = node?.inputType === "submit";

  function renderMessageContent(content: string) {
    // Convert markdown links and bold to HTML
    const withLinks = content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#1B2A4A] dark:text-[#6B8DBF] underline font-medium hover:text-[#3A5A8C]">$1</a>');
    const withBold = withLinks.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold">$1</strong>');
    const withItalic = withBold.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    const withBlockquote = withItalic.replace(/^> (.+)$/gm, '<span class="block border-l-2 border-amber-400 pl-3 text-amber-700 dark:text-amber-400 text-xs italic">$1</span>');
    const withLineBreaks = withBlockquote.replace(/\n/g, '<br/>');
    return withLineBreaks;
  }

  return (
    <div className="min-h-dvh bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Demo Header */}
      <section className="pt-24 pb-4">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-4 py-1.5 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
            Live Demo
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Try Our{" "}
            <span className="bg-gradient-to-r from-[#1B2A4A] to-[#3A5A8C] bg-clip-text text-transparent dark:from-[#6B8DBF] dark:to-[#3A5A8C]">
              AI Chatbot Demo
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            See what an AI-powered assistant looks like in action. Have a conversation and we'll
            show you how we can build one for your business.
          </p>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-950 overflow-hidden">
            {/* Chat Header */}
            <div className="flex items-center gap-3 border-b border-gray-100 bg-gray-50/80 px-6 py-4 dark:border-gray-800 dark:bg-gray-900/80">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1B2A4A] text-sm font-bold text-white shadow-sm">
                P
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold">PIG Assistant</div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex h-2 w-2 rounded-full bg-green-500" />
                  Demo — Pre-scripted responses
                </div>
              </div>
              <Link
                to="/contact"
                className="rounded-lg bg-[#1B2A4A] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#2A3A5A]"
              >
                Get the Full Solution
              </Link>
            </div>

            {/* Messages */}
            <div className="h-[420px] overflow-y-auto px-6 py-6 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      msg.role === "user"
                        ? "bg-[#1B2A4A] text-white rounded-br-md"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 rounded-bl-md"
                    }`}
                  >
                    <p
                      className="text-sm leading-relaxed [&_br]:leading-6"
                      dangerouslySetInnerHTML={{ __html: renderMessageContent(msg.content) }}
                    />
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md bg-gray-100 px-4 py-3 dark:bg-gray-800">
                    <div className="flex items-center gap-1.5">
                      <span className="flex h-2 w-2 animate-bounce rounded-full bg-gray-400" />
                      <span
                        className="flex h-2 w-2 animate-bounce rounded-full bg-gray-400"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <span
                        className="flex h-2 w-2 animate-bounce rounded-full bg-gray-400"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Action area: options, input, select, submit */}
            <div className="border-t border-gray-100 px-6 py-4 dark:border-gray-800">
              {showOptions && !isTyping && (
                <div className="flex flex-wrap gap-2">
                  {node.options?.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => handleOptionWithLabel(opt.label, opt.next)}
                      className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-700 transition hover:border-[#3A5A8C] hover:bg-[#F0F2F5] hover:text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-[#6B8DBF] dark:hover:bg-[#0A1628]/50 dark:hover:text-[#8BAED4]"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}

              {showSelect && !isTyping && (
                <div className="flex flex-wrap gap-2">
                  {node.options?.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => handleSelectInterest(opt.label, opt.next)}
                      className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-700 transition hover:border-[#3A5A8C] hover:bg-[#F0F2F5] hover:text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-[#6B8DBF] dark:hover:bg-[#0A1628]/50 dark:hover:text-[#8BAED4]"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}

              {showInput && !isTyping && !leadSubmitted && (
                <form onSubmit={handleInputSubmit} className="flex items-center gap-3">
                  <input
                    ref={inputRef}
                    type={node.id === "lead_email" ? "email" : "text"}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={node.inputPlaceholder || "Type your response..."}
                    required={node.id !== "lead_phone"}
                    className="flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#1B2A4A] focus:ring-2 focus:ring-[#1B2A4A]/20 dark:border-gray-700 dark:bg-gray-900 dark:placeholder:text-gray-500 dark:focus:border-[#6B8DBF]"
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim() && node.id !== "lead_phone"}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1B2A4A] text-white transition hover:bg-[#2A3A5A] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                    </svg>
                  </button>
                </form>
              )}

              {showSubmit && !isTyping && !leadSubmitted && (
                <form onSubmit={handleInputSubmit}>
                  <p className="mb-3 text-xs text-gray-500 dark:text-gray-400 italic">
                    We'll never share your information. By submitting, you agree to our Privacy Policy.
                  </p>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#1B2A4A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2A3A5A]"
                  >
                    Submit Your Information
                  </button>
                </form>
              )}

              {node?.id === "thank_you" && (
                <div className="flex flex-wrap gap-2">
                  <Link
                    to="/resources/implementation-checklist"
                    className="rounded-full bg-[#1B2A4A] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#2A3A5A]"
                  >
                    📋 Get the Checklist
                  </Link>
                  <Link
                    to="/resources/roi-calculator"
                    className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-700 transition hover:border-[#3A5A8C] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
                  >
                    📊 Calculate Your ROI
                  </Link>
                  <Link
                    to="/"
                    className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-700 transition hover:border-[#3A5A8C] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
                  >
                    🔙 Back to Home
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-lg">⚠️</span>
              <div className="text-sm text-amber-800 dark:text-amber-200">
                <p className="font-semibold">This is a demo AI assistant.</p>
                <p className="mt-1 text-amber-700 dark:text-amber-300">
                  Responses are pre-scripted to demonstrate capabilities. A real implementation would
                  use your company's data, connected via RAG (Retrieval-Augmented Generation) with an LLM
                  of your choice — providing accurate, grounded answers tailored to your business.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#1B2A4A] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#1B2A4A]/25 transition hover:bg-[#2A3A5A]"
            >
              Build Your Own AI Assistant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}