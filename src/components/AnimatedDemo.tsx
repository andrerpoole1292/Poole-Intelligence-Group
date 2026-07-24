import { useState, useEffect, useRef, useCallback } from "react";

// ── Step definitions ──
interface Step {
  icon: string;
  label: string;
  time: string;
}

const beforeSteps: Step[] = [
  { icon: "📥", label: "Employee receives invoice via email", time: "5 min" },
  { icon: "📋", label: "Manually opens accounting software", time: "2 min" },
  { icon: "⌨️", label: "Types invoice details field by field", time: "15 min" },
  { icon: "🔍", label: "Double-checks for data entry errors", time: "5 min" },
  { icon: "📤", label: "Files invoice and routes for approval", time: "3 min" },
];

const afterSteps: Step[] = [
  { icon: "📥", label: "AI captures invoice from email automatically", time: "Instant" },
  { icon: "🤖", label: "Document-processing extracts all fields", time: "15 sec" },
  { icon: "✅", label: "Data pre-populated for human verification", time: "30 sec" },
  { icon: "👤", label: "Employee reviews and approves with one click", time: "1 min" },
  { icon: "📤", label: "Auto-routed and filed in accounting system", time: "Instant" },
];

// ── Styling for the keyframe animation (injected once) ──
const STYLE_ID = "pig-animated-demo-styles";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    @keyframes demo-fade-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes demo-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
    @keyframes demo-slide-right { from { width: 0%; } to { width: 100%; } }
  `;
  document.head.appendChild(style);
}

export default function AnimatedDemo() {
  const [phase, setPhase] = useState<"idle" | "before" | "after" | "done">("idle");
  const [beforeStep, setBeforeStep] = useState(-1);
  const [afterStep, setAfterStep] = useState(-1);
  const [beforeTimer, setBeforeTimer] = useState(0);
  const [afterTimer, setAfterTimer] = useState(0);
  const [afterRevealed, setAfterRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const beforeIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const afterIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalBeforeTime = 30; // 30 min
  const totalAfterTime = 2; // 2 min

  // ── Intersection Observer for scroll trigger ──
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && phase === "idle") {
          startAnimation();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [phase]);

  // ── Cleanup intervals ──
  useEffect(() => {
    return () => {
      if (beforeIntervalRef.current) clearInterval(beforeIntervalRef.current);
      if (afterIntervalRef.current) clearInterval(afterIntervalRef.current);
    };
  }, []);

  // ── Timer counting ──
  useEffect(() => {
    if (phase === "before") {
      beforeIntervalRef.current = setInterval(() => {
        setBeforeTimer((t) => {
          const next = t + 3;
          return next >= totalBeforeTime ? totalBeforeTime : next;
        });
      }, 400);
    }
    if (phase === "after" && afterRevealed) {
      afterIntervalRef.current = setInterval(() => {
        setAfterTimer((t) => {
          const next = t + 0.2;
          return next >= totalAfterTime ? totalAfterTime : next;
        });
      }, 200);
    }
    return () => {
      if (beforeIntervalRef.current) clearInterval(beforeIntervalRef.current);
      if (afterIntervalRef.current) clearInterval(afterIntervalRef.current);
    };
  }, [phase, afterRevealed]);

  function startAnimation() {
    setPhase("before");
    setBeforeStep(0);
  }

  // ── Advance before steps ──
  useEffect(() => {
    if (beforeStep >= 0 && beforeStep < beforeSteps.length) {
      const timer = setTimeout(() => {
        setBeforeStep((s) => s + 1);
      }, 1100);
      return () => clearTimeout(timer);
    }
    if (beforeStep === beforeSteps.length) {
      // Before animation complete → wait a beat, then reveal after
      const timer = setTimeout(() => {
        setPhase("after");
        setAfterRevealed(true);
        setAfterStep(0);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [beforeStep]);

  // ── Advance after steps ──
  useEffect(() => {
    if (afterStep >= 0 && afterStep < afterSteps.length) {
      const timer = setTimeout(() => {
        setAfterStep((s) => s + 1);
      }, 900);
      return () => clearTimeout(timer);
    }
    if (afterStep === afterSteps.length) {
      const timer = setTimeout(() => {
        setPhase("done");
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [afterStep]);

  const isBeforeActive = phase === "before" || phase === "after" || phase === "done";
  const isAfterActive = phase === "after" || phase === "done";

  return (
    <section ref={sectionRef} className="bg-[#F5F7FA] py-24 dark:bg-gray-900" id="before-after-demo">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-white px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300">
            Real-World Example
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] dark:text-gray-100 sm:text-4xl">
            Invoice Processing:{" "}
            <span className="bg-gradient-to-r from-[#1B2A4A] to-[#3A5A8C] bg-clip-text text-transparent dark:from-[#6B8DBF] dark:to-[#3A5A8C]">
              Before vs. After AI
            </span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            See how a single invoice goes from 30 minutes of manual effort to 2 minutes with AI automation — a <strong>93% time reduction</strong>.
          </p>
          {phase === "idle" && (
            <button
              onClick={startAnimation}
              className="mt-6 rounded-lg bg-[#1B2A4A] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2A3A5A]"
            >
              ▶ Watch the Comparison
            </button>
          )}
        </div>

        {/* ──────── Before / After Grid ──────── */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* ── BEFORE AI ── */}
          <div
            className={`rounded-2xl border bg-white p-6 shadow-sm transition-all duration-700 dark:border-gray-800 dark:bg-gray-950 ${
              isBeforeActive
                ? "border-red-200 dark:border-red-900/40"
                : "border-gray-200 opacity-60 dark:border-gray-800"
            }`}
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-sm dark:bg-red-900/30">🐌</span>
              <div>
                <h3 className="text-lg font-bold text-red-600 dark:text-red-400">Before AI</h3>
                <p className="text-xs text-gray-500">Manual invoice processing</p>
              </div>
              <div className="ml-auto text-right">
                <div className="text-xl font-bold tabular-nums text-red-600 dark:text-red-400">
                  {Math.round(beforeTimer)}m
                </div>
                <div className="text-[10px] uppercase tracking-wider text-gray-400">per invoice</div>
              </div>
            </div>
            <div className="space-y-3">
              {beforeSteps.map((step, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 transition-all duration-500 ${
                    i <= beforeStep && isBeforeActive
                      ? "animate-[demo-fade-in_0.5s_ease-out] border-red-100 bg-red-50/50 dark:border-red-900/30 dark:bg-red-900/10"
                      : "border-transparent opacity-30"
                  }`}
                >
                  <span className="text-lg">{step.icon}</span>
                  <span className="flex-1 text-sm text-gray-700 dark:text-gray-300">{step.label}</span>
                  <span className="shrink-0 rounded-full bg-red-100 px-2 py-0.5 text-[11px] font-medium text-red-600 dark:bg-red-900/30 dark:text-red-400">
                    {step.time}
                  </span>
                </div>
              ))}
            </div>
            {beforeStep >= beforeSteps.length && (
              <div className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-center text-sm font-bold text-red-700 dark:bg-red-900/20 dark:text-red-400 animate-[demo-fade-in_0.5s_ease-out]">
                ⏱ Total: ~30 minutes per invoice
              </div>
            )}
          </div>

          {/* ── AFTER AI ── */}
          <div
            className={`relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all duration-700 dark:border-gray-800 dark:bg-gray-950 ${
              isAfterActive
                ? "border-green-200 dark:border-green-900/40"
                : "border-gray-200 opacity-60 dark:border-gray-800"
            }`}
          >
            {/* Animated reveal overlay */}
            {!afterRevealed && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm dark:bg-gray-950/80">
                <div className="animate-[demo-pulse_1.5s_ease-in-out_infinite] text-4xl">🤖</div>
                <p className="mt-2 text-sm font-medium text-gray-500">Preparing AI comparison...</p>
              </div>
            )}

            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-sm dark:bg-green-900/30">⚡</span>
              <div>
                <h3 className="text-lg font-bold text-green-600 dark:text-green-400">After AI</h3>
                <p className="text-xs text-gray-500">Automated with AI</p>
              </div>
              <div className="ml-auto text-right">
                <div className="text-xl font-bold tabular-nums text-green-600 dark:text-green-400">
                  {Math.round(afterTimer * 10) / 10}m
                </div>
                <div className="text-[10px] uppercase tracking-wider text-gray-400">per invoice</div>
              </div>
            </div>
            <div className="space-y-3">
              {afterSteps.map((step, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 transition-all duration-500 ${
                    i <= afterStep && afterRevealed
                      ? "animate-[demo-fade-in_0.5s_ease-out] border-green-100 bg-green-50/50 dark:border-green-900/30 dark:bg-green-900/10"
                      : "border-transparent opacity-30"
                  }`}
                >
                  <span className="text-lg">{step.icon}</span>
                  <span className="flex-1 text-sm text-gray-700 dark:text-gray-300">{step.label}</span>
                  <span className="shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-[11px] font-medium text-green-600 dark:bg-green-900/30 dark:text-green-400">
                    {step.time}
                  </span>
                </div>
              ))}
            </div>
            {afterStep >= afterSteps.length && (
              <div className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-center text-sm font-bold text-green-700 dark:bg-green-900/20 dark:text-green-400 animate-[demo-fade-in_0.5s_ease-out]">
                ⚡ Total: ~2 minutes per invoice
              </div>
            )}
          </div>
        </div>

        {/* ──────── Result Callout ──────── */}
        <div
          className={`mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border transition-all duration-700 ${
            phase === "done"
              ? "max-h-96 border-[#C0C0C0] bg-white dark:border-gray-700 dark:bg-gray-950"
              : "max-h-0 border-transparent"
          }`}
        >
          <div className="px-8 py-8">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
              {/* Time comparison */}
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 line-through">30 min</div>
                  <div className="text-xs text-gray-400">Manual</div>
                </div>
                <div className="text-2xl font-bold text-gray-300">→</div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-500">2 min</div>
                  <div className="text-xs text-gray-400">With AI</div>
                </div>
              </div>
              {/* Savings */}
              <div className="text-center">
                <div className="text-4xl font-extrabold text-[#1B2A4A] dark:text-gray-100">
                  93%
                </div>
                <div className="text-sm text-gray-500">Time Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-[#1B2A4A] dark:text-gray-100">
                  15–30h
                </div>
                <div className="text-sm text-gray-500">Saved per employee / month</div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <a
                href="https://calendly.com/hello-pooleintelligencegroup/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-[#1B2A4A] px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#2A3A5A]"
              >
                See What AI Can Do For Your Business
              </a>
              <p className="mt-3 text-xs text-gray-400">Book a free Discovery Call. No pressure, no pitch.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}