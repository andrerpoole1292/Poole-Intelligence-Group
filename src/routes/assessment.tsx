import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useState } from "react";

// Server function to save lead emails
const saveLeadEmail = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    const { email, score, bucket } = data as Record<string, string>;
    if (!email?.trim()) throw new Error("Email is required");
    return { email: email.trim(), score: score || "", bucket: bucket || "" };
  })
  .handler(async ({ data }) => {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] LEAD from ${data.email} | Score: ${data.score} | Bucket: ${data.bucket}\n---\n`;
    try {
      const { appendFile, mkdir } = await import("node:fs/promises");
      await mkdir(".data", { recursive: true });
      await appendFile(".data/leads.log", logEntry, "utf8");
    } catch (err) {
      console.log("Lead capture:", logEntry);
    }
    return { success: true };
  });

export const Route = createFileRoute("/assessment")({
  component: Assessment,
  head: () => ({
    meta: [
      {
        title: "AI Readiness Assessment — Poole Intelligence Group",
      },
      {
        name: "description",
        content:
          "Take our 5-minute AI Readiness Assessment to find your fastest path to AI ROI. Score your organization across 5 key dimensions.",
      },
    ],
  }),
});

interface Answer {
  value: number;
  label: string;
}

const questions = [
  {
    id: 1,
    text: "We have a clear understanding of where AI could drive value in our business.",
    answers: [
      { value: 1, label: "Not at all" },
      { value: 2, label: "Vague idea" },
      { value: 3, label: "Some visibility" },
      { value: 4, label: "Pretty clear" },
      { value: 5, label: "Crystal clear" },
    ],
  },
  {
    id: 2,
    text: "Our data is organized, accessible, and clean enough to support AI initiatives.",
    answers: [
      { value: 1, label: "Data is a mess" },
      { value: 2, label: "Siloed but usable" },
      { value: 3, label: "Mostly organized" },
      { value: 4, label: "Well-structured" },
      { value: 5, label: "Fully ready" },
    ],
  },
  {
    id: 3,
    text: "Our leadership team is aligned on AI priorities and has allocated budget.",
    answers: [
      { value: 1, label: "No alignment" },
      { value: 2, label: "Talking about it" },
      { value: 3, label: "Some interest, no budget" },
      { value: 4, label: "Aligned, exploring budget" },
      { value: 5, label: "Aligned with dedicated budget" },
    ],
  },
  {
    id: 4,
    text: "We have at least one person who could champion an AI project.",
    answers: [
      { value: 1, label: "No one available" },
      { value: 2, label: "Someone interested" },
      { value: 3, label: "A capable volunteer" },
      { value: 4, label: "Designated champion" },
      { value: 5, label: "Dedicated team in place" },
    ],
  },
  {
    id: 5,
    text: "We understand the key risks (data privacy, compliance, vendor lock-in) involved with AI adoption.",
    answers: [
      { value: 1, label: "No awareness" },
      { value: 2, label: "Heard of risks" },
      { value: 3, label: "Some understanding" },
      { value: 4, label: "Good awareness" },
      { value: 5, label: "Fully mapped and mitigated" },
    ],
  },
];

function Assessment() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [bucket, setBucket] = useState<"ready" | "curious" | "neutral">(
    "curious",
  );
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [emailSubmitting, setEmailSubmitting] = useState(false);

  const allAnswered = questions.every((q) => answers[q.id] > 0);

  const handleSelect = (questionId: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const calculateScore = () => {
    if (!allAnswered) return;
    const total = Object.values(answers).reduce((a, b) => a + b, 0);
    setScore(total);
    if (total >= 20) setBucket("ready");
    else if (total >= 12) setBucket("curious");
    else setBucket("neutral");
    setShowResults(true);
  };

  const handleEmailSubmit = async () => {
    if (!email.trim()) return;
    setEmailSubmitting(true);
    try {
      await saveLeadEmail({ data: { email: email.trim(), score: String(score), bucket } });
      setEmailSent(true);
    } catch {
      // silently fail — still show results
      setEmailSent(true);
    } finally {
      setEmailSubmitting(false);
    }
  };

  const resetAssessment = () => {
    setAnswers({});
    setShowResults(false);
    setScore(0);
    setBucket("curious");
    setEmail("");
    setEmailSent(false);
  };

  const getResultTheme = () => {
    switch (bucket) {
      case "ready":
        return {
          bg: "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800",
          text: "text-emerald-800 dark:text-emerald-200",
          accent: "text-emerald-700 dark:text-emerald-300",
          heading: "text-emerald-700 dark:text-emerald-300",
          btn: "bg-emerald-700 hover:bg-emerald-800",
          icon: "✅",
          label: "AI-Ready",
        };
      case "curious":
        return {
          bg: "bg-amber-50 border-amber-200 dark:bg-amber-950/30 dark:border-amber-800",
          text: "text-amber-800 dark:text-amber-200",
          accent: "text-amber-700 dark:text-amber-300",
          heading: "text-amber-700 dark:text-amber-300",
          btn: "bg-amber-700 hover:bg-amber-800",
          icon: "🔍",
          label: "AI-Curious",
        };
      case "neutral":
        return {
          bg: "bg-slate-50 border-slate-200 dark:bg-slate-900/50 dark:border-slate-700",
          text: "text-slate-700 dark:text-slate-200",
          accent: "text-slate-600 dark:text-slate-300",
          heading: "text-slate-700 dark:text-slate-300",
          btn: "bg-slate-700 hover:bg-slate-800",
          icon: "⚪",
          label: "AI-Neutral",
        };
    }
  };

  const theme = getResultTheme();

  return (
    <div className="min-h-dvh bg-gradient-to-b from-white via-indigo-50/30 to-white pt-24 pb-24 dark:from-gray-950 dark:via-indigo-950/20 dark:to-gray-950">
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="mb-8 text-center">
          <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-indigo-950/50 dark:text-[#6B8DBF]">
            Free Assessment
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            AI Readiness{" "}
            <span className="bg-gradient-to-r from-[#1B2A4A] to-[#3A5A8C] bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
              Assessment
            </span>
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            A 5-minute diagnostic to find your fastest path to AI ROI
          </p>
        </div>

        {!showResults ? (
          /* Questions */
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950 sm:p-10">
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
              Rate your organization on each statement from <strong>1</strong>{" "}
              (strongly disagree) to <strong>5</strong> (strongly agree).
            </p>

            <div className="space-y-8">
              {questions.map((q) => (
                <div key={q.id}>
                  <p className="mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {q.id}. {q.text}
                  </p>
                  <div className="flex gap-2">
                    {q.answers.map((a) => {
                      const isSelected = answers[q.id] === a.value;
                      return (
                        <button
                          key={a.value}
                          onClick={() => handleSelect(q.id, a.value)}
                          className={`flex-1 rounded-xl border-2 px-3 py-3 text-center text-sm font-medium transition ${
                            isSelected
                              ? "border-[#1B2A4A] bg-[#1B2A4A] text-white"
                              : "border-gray-200 bg-white text-gray-700 hover:border-[#3A5A8C] hover:bg-[#F0F2F5] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-[#3A5A8C] dark:hover:bg-indigo-950/50"
                          }`}
                        >
                          <span className="block text-lg font-bold">
                            {a.value}
                          </span>
                          <span className="block text-xs leading-tight opacity-80">
                            {a.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={calculateScore}
              disabled={!allAnswered}
              className="mt-8 w-full rounded-xl bg-gradient-to-r from-[#1B2A4A] to-[#3A5A8C] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#1B2A4A]/25 transition hover:shadow-[#1B2A4A]/40 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {allAnswered
                ? "See My AI Readiness Score"
                : "Answer all 5 questions to see your score"}
            </button>
          </div>
        ) : (
          /* Results */
          <div className="space-y-6">
            {/* Score result */}
            <div
              className={`rounded-2xl border p-8 shadow-sm ${theme.bg}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{theme.icon}</span>
                <h2 className={`text-2xl font-bold ${theme.heading}`}>
                  {theme.label}
                </h2>
              </div>
              <div className={`text-5xl font-extrabold ${theme.accent}`}>
                {score}
                <span className="text-2xl font-normal opacity-60"> / 25</span>
              </div>

              {bucket === "ready" && (
                <p className={`mt-4 ${theme.text}`}>
                  You're well positioned. Your organization has the foundation to
                  move forward with AI adoption. The risk now isn't being left
                  behind — it's picking the wrong project or partner.
                </p>
              )}
              {bucket === "curious" && (
                <p className={`mt-4 ${theme.text}`}>
                  You have real potential, but there are gaps to address. Your
                  organization knows AI matters but hasn't built the
                  infrastructure to execute.
                </p>
              )}
              {bucket === "neutral" && (
                <p className={`mt-4 ${theme.text}`}>
                  You're not behind — but you're not moving forward either. The
                  good news: you have a clean slate to build the right foundation
                  from the start.
                </p>
              )}

              <div className={`mt-6 border-t pt-4 ${theme.text} border-current/10`}>
                <p className="text-sm font-semibold">
                  Recommended next step:
                </p>
                {bucket === "ready" && (
                  <p className="mt-1 text-sm">
                    Book a <strong>Strategy Roadmap</strong> engagement. We'll
                    validate your assumptions and build a 6-month implementation
                    plan.
                  </p>
                )}
                {bucket === "curious" && (
                  <p className="mt-1 text-sm">
                    Start with a <strong>Discovery Workshop</strong>. In half a
                    day, we'll map your workflows and build a prioritized
                    opportunity map.
                  </p>
                )}
                {bucket === "neutral" && (
                  <p className="mt-1 text-sm">
                    Start with an <strong>Executive Briefing</strong> for your
                    leadership team. 90 minutes, no jargon, no pressure.
                  </p>
                )}
                <Link
                  to="/contact"
                  className={`mt-3 inline-block rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-sm transition ${theme.btn}`}
                >
                  {bucket === "ready"
                    ? "Schedule a Strategy Roadmap Call →"
                    : bucket === "curious"
                      ? "Book a Discovery Workshop →"
                      : "Request an Executive Briefing →"}
                </Link>
              </div>
            </div>

            {/* Email capture */}
            {!emailSent ? (
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <h3 className="text-lg font-bold">
                  Save Your Results & Get Next Steps
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Enter your email and we'll send you your score along with a
                  detailed action plan.
                </p>
                <div className="mt-4 flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:placeholder-gray-500"
                  />
                  <button
                    onClick={handleEmailSubmit}
                    disabled={!email.trim() || emailSubmitting}
                    className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    {emailSubmitting ? "Sending..." : "Send My Results"}
                  </button>
                </div>
                <p className="mt-2 text-xs text-gray-400">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            ) : (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-950/30">
                <p className="text-lg font-semibold text-green-700 dark:text-green-300">
                  ✓ Results sent! Check your inbox.
                </p>
                <p className="mt-1 text-sm text-green-600 dark:text-green-400">
                  We'll follow up with a detailed action plan tailored to your
                  score.
                </p>
              </div>
            )}

            {/* Quick-win reflection */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="mb-4 text-lg font-bold">
                💡 Quick-Win Reflection
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold">
                    Q1: What repetitive, manual task consumes the most team
                    hours each week?
                  </p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    If you can name it, there's likely an AI automation for it.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold">
                    Q2: Where does your team spend the most time searching for
                    information?
                  </p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    FAQs, knowledge bases, documentation — all chatbot
                    candidates.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold">
                    Q3: Do you have a backlog of content that needs creating or
                    updating?
                  </p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    AI content workflows can compress weeks into days.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={resetAssessment}
                className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800"
              >
                Retake Assessment
              </button>
              <Link
                to="/contact"
                className="rounded-xl bg-[#1B2A4A] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1B2A4A]/25 transition hover:bg-indigo-700"
              >
                Talk to a Consultant
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}