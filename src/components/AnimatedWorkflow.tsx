import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";

// ── Keyframes for detail panel fade-in ──
const styleId = "pig-workflow-styles";
if (typeof document !== "undefined" && !document.getElementById(styleId)) {
  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = `@keyframes workflowFadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`;
  document.head.appendChild(style);
}

interface Step {
  icon: string;
  title: string;
  description: string;
  detail: string;
}

const steps: Step[] = [
  {
    icon: "💬",
    title: "Customer Inquiry",
    description: "Customer submits inquiry via website, email, or chat",
    detail: "Your customer sends a message through your website, chatbot, or email — day or night. No forms to fill, no waiting for business hours.",
  },
  {
    icon: "🤖",
    title: "AI Responds Instantly",
    description: "AI analyzes intent and provides a personalized response",
    detail: "Our AI agent reads the inquiry, understands the intent, and drafts a relevant, on-brand response — in seconds, not hours.",
  },
  {
    icon: "📋",
    title: "Lead Added to CRM",
    description: "Contact info and conversation history saved automatically",
    detail: "Every interaction creates or updates a lead record in your CRM. Name, email, company, pain points — all captured without manual entry.",
  },
  {
    icon: "📅",
    title: "Appointment Scheduled",
    description: "Qualified leads are routed to your calendar automatically",
    detail: "Based on the conversation, the AI books a discovery call or demo directly into your calendar. No back-and-forth emails needed.",
  },
  {
    icon: "✉️",
    title: "Follow-Up Email Sent",
    description: "Automated nurture sequence begins immediately",
    detail: "A personalized follow-up email goes out within minutes — with resources, next steps, and a direct link to schedule. Your sales team gets warm, qualified leads.",
  },
];

export default function AnimatedWorkflow() {
  const [activeStep, setActiveStep] = useState(-1);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Start animation when section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setActiveStep(0);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  // Sequence through steps
  useEffect(() => {
    if (activeStep < 0) return;
    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= steps.length - 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return prev;
        }
        return prev + 1;
      });
    }, 2500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeStep]);

  function resetAnimation() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActiveStep(0);
    setHasAnimated(true);
  }

  const isPlaying = activeStep >= 0;

  return (
    <section ref={sectionRef} className="bg-white py-24 dark:bg-gray-950" id="ai-workflow">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-3 py-1 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
            See It In Action
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            AI Automation in{" "}
            <span className="bg-gradient-to-r from-[#1B2A4A] to-[#3A5A8C] bg-clip-text text-transparent dark:from-[#6B8DBF] dark:to-[#3A5A8C]">
              Motion
            </span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Watch how a customer inquiry flows through an automated AI pipeline — from first message to warm lead, without anyone lifting a finger.
          </p>
        </div>

        {/* Controls */}
        <div className="mt-8 flex justify-center gap-3">
          {!isPlaying && (
            <button
              onClick={resetAnimation}
              className="rounded-lg bg-[#1B2A4A] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#2A3A5A]"
            >
              Play Animation
            </button>
          )}
          {isPlaying && activeStep < steps.length - 1 && (
            <span className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Automating...
            </span>
          )}
        </div>

        {/* Workflow Pipeline */}
        <div className="mt-12">
          {/* Desktop: horizontal flow */}
          <div className="hidden md:block">
            <div className="relative flex items-start justify-between">
              {/* Connecting line */}
              <div className="absolute left-0 right-0 top-8 h-0.5 bg-gray-200 dark:bg-gray-800">
                <div
                  className="h-full bg-gradient-to-r from-[#1B2A4A] to-[#3A5A8C] transition-all duration-700"
                  style={{
                    width: activeStep >= 0 ? `${((activeStep + 1) / (steps.length - 1)) * 100}%` : "0%",
                  }}
                />
              </div>

              {steps.map((step, i) => (
                <div key={i} className="relative flex w-48 flex-col items-center text-center">
                  {/* Circle */}
                  <div
                    className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full text-2xl transition-all duration-500 ${
                      i <= activeStep
                        ? "scale-110 bg-[#1B2A4A] shadow-lg shadow-[#1B2A4A]/30"
                        : "bg-gray-100 dark:bg-gray-800"
                    }`}
                  >
                    {i <= activeStep ? (
                      <span className="text-white">{step.icon}</span>
                    ) : (
                      <span className="text-gray-400 dark:text-gray-600">{step.icon}</span>
                    )}
                  </div>
                  {/* Step Number Badge */}
                  <div
                    className={`absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition-all duration-500 ${
                      i <= activeStep
                        ? "bg-[#3A5A8C] text-white"
                        : "bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400"
                    }`}
                  >
                    {i + 1}
                  </div>
                  {/* Title */}
                  <h3
                    className={`mt-3 text-sm font-bold transition-colors duration-500 ${
                      i <= activeStep ? "text-[#1B2A4A] dark:text-gray-100" : "text-gray-400 dark:text-gray-600"
                    }`}
                  >
                    {step.title}
                  </h3>
                  {/* Description */}
                  <p
                    className={`mt-1 text-xs leading-relaxed transition-all duration-500 ${
                      i <= activeStep ? "text-gray-600 dark:text-gray-400" : "text-gray-300 dark:text-gray-700"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical flow */}
          <div className="md:hidden">
            <div className="relative pl-10">
              {/* Vertical line */}
              <div className="absolute left-[19px] top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-800">
                <div
                  className="w-full bg-gradient-to-b from-[#1B2A4A] to-[#3A5A8C] transition-all duration-700"
                  style={{
                    height: activeStep >= 0 ? `${((activeStep + 1) / steps.length) * 100}%` : "0%",
                  }}
                />
              </div>

              {steps.map((step, i) => (
                <div key={i} className="relative mb-8 last:mb-0">
                  <div className="flex items-start gap-4">
                    {/* Circle */}
                    <div
                      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg transition-all duration-500 ${
                        i <= activeStep
                          ? "bg-[#1B2A4A] shadow-md shadow-[#1B2A4A]/30"
                          : "bg-gray-100 dark:bg-gray-800"
                      }`}
                    >
                      <span className={i <= activeStep ? "text-white" : "text-gray-400 dark:text-gray-600"}>
                        {step.icon}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold transition-all ${
                            i <= activeStep
                              ? "bg-[#3A5A8C] text-white"
                              : "bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400"
                          }`}
                        >
                          {i + 1}
                        </span>
                        <h3
                          className={`text-sm font-bold transition-colors ${
                            i <= activeStep ? "text-[#1B2A4A] dark:text-gray-100" : "text-gray-400 dark:text-gray-600"
                          }`}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p
                        className={`mt-1 text-xs leading-relaxed transition-colors ${
                          i <= activeStep ? "text-gray-600 dark:text-gray-400" : "text-gray-300 dark:text-gray-700"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detail Panel — shows detail for current active step */}
        <div
          className={`mx-auto mt-12 max-w-2xl overflow-hidden rounded-2xl border transition-all duration-700 ${
            activeStep >= 0
              ? "max-h-96 border-[#C0C0C0] bg-[#F5F7FA] px-8 py-6 dark:border-gray-700 dark:bg-gray-900"
              : "max-h-0 border-transparent"
          }`}
        >
          {activeStep >= 0 && (
            <div className="animate-[workflowFadeIn_0.5s_ease-out]">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1B2A4A] text-lg text-white">
                  {steps[activeStep].icon}
                </span>
                <div>
                  <p className="text-sm font-bold text-[#1B2A4A] dark:text-gray-100">
                    Step {activeStep + 1}: {steps[activeStep].title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">What happens behind the scenes</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {steps[activeStep].detail}
              </p>
              {/* Progress dots */}
              <div className="mt-4 flex items-center gap-2">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-2 rounded-full transition-all duration-500 ${
                      i === activeStep
                        ? "w-6 bg-[#1B2A4A] dark:bg-[#6B8DBF]"
                        : i < activeStep
                          ? "bg-[#3A5A8C]/50"
                          : "bg-gray-300 dark:bg-gray-700"
                    }`}
                  />
                ))}
              </div>
              {activeStep === steps.length - 1 && (
                <div className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  ✅ Pipeline complete! A lead has been captured, qualified, and nurtured — all automated.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Replay */}
        {activeStep === steps.length - 1 && (
          <div className="mt-6 text-center">
            <button
              onClick={resetAnimation}
              className="rounded-lg border border-[#C0C0C0] bg-white px-6 py-2 text-sm font-medium text-[#1B2A4A] transition hover:bg-[#F5F7FA] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              ↻ Replay Animation
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is the kind of automation we build for clients. Ready to see it with your data?
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-xl bg-[#1B2A4A] px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#2A3A5A]"
            >
              Book a Free Discovery Call
            </Link>
            <Link
              to="/demo"
              className="rounded-xl border border-[#C0C0C0] bg-white px-8 py-3 text-sm font-semibold text-[#1B2A4A] transition hover:bg-[#F5F7FA] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800"
            >
              Try the Chatbot Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}