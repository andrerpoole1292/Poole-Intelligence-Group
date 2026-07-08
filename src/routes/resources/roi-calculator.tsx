import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/resources/roi-calculator")({
  component: ROICalculatorPage,
  head: () => ({
    meta: [{ title: "ROI Calculator — Poole Intelligence Group" }],
  }),
});

function ROICalculatorPage() {
  const [employees, setEmployees] = useState(50);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(75);
  const [efficiency, setEfficiency] = useState(40);
  const [calculated, setCalculated] = useState(false);

  const weeksPerYear = 48;
  const annualHours = employees * hoursPerWeek * weeksPerYear;
  const annualCost = annualHours * hourlyRate;
  const hoursSaved = annualHours * (efficiency / 100);
  const costSaved = hoursSaved * hourlyRate;
  const implementationCost = Math.round(annualCost * 0.3);
  const netROI = costSaved - implementationCost;
  const roiPercent = Math.round((netROI / implementationCost) * 100);
  const paybackWeeks = Math.round(implementationCost / (costSaved / weeksPerYear));

  function calculate() {
    setCalculated(true);
  }

  return (
    <div className="min-h-dvh bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <div className="mb-8 text-center">
          <span className="mb-4 inline-block rounded-full border border-[#C0C0C0] bg-[#F5F7FA] px-4 py-1.5 text-xs font-semibold text-[#1B2A4A] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
            Free Tool
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#1B2A4A] dark:text-gray-100 sm:text-4xl">
            AI ROI Calculator
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            See how much your business could save by automating repetitive tasks with AI.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-gray-500">Number of employees</label>
              <input type="range" min="5" max="500" value={employees} onChange={(e) => { setCalculated(false); setEmployees(parseInt(e.target.value)); }} className="mt-1 w-full" />
              <p className="text-right text-sm font-bold text-[#1B2A4A]">{employees}</p>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500">Hours per week on repetitive tasks</label>
              <input type="range" min="1" max="80" value={hoursPerWeek} onChange={(e) => { setCalculated(false); setHoursPerWeek(parseInt(e.target.value)); }} className="mt-1 w-full" />
              <p className="text-right text-sm font-bold text-[#1B2A4A]">{hoursPerWeek}h/week</p>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500">Average hourly rate ($)</label>
              <input type="range" min="20" max="250" value={hourlyRate} onChange={(e) => { setCalculated(false); setHourlyRate(parseInt(e.target.value)); }} className="mt-1 w-full" />
              <p className="text-right text-sm font-bold text-[#1B2A4A]">${hourlyRate}/hr</p>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500">Estimated efficiency gain (%)</label>
              <input type="range" min="10" max="90" value={efficiency} onChange={(e) => { setCalculated(false); setEfficiency(parseInt(e.target.value)); }} className="mt-1 w-full" />
              <p className="text-right text-sm font-bold text-[#1B2A4A]">{efficiency}%</p>
            </div>
          </div>

          <button onClick={calculate} className="mt-6 w-full rounded-xl bg-[#1B2A4A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2A3A5A]">
            Calculate Your ROI
          </button>

          {calculated && (
            <div className="mt-8 space-y-4">
              <div className="rounded-xl bg-[#F5F7FA] p-4 dark:bg-gray-900">
                <div className="grid gap-4 sm:grid-cols-3">
                  <ResultBox label="Annual Hours Saved" value={`${(hoursSaved / employees).toFixed(0)} hrs/employee`} sub={`${hoursSaved.toLocaleString()} total hours`} />
                  <ResultBox label="Annual Cost Savings" value={`$${costSaved.toLocaleString()}`} sub={`${efficiency}% efficiency gain`} />
                  <ResultBox label="Est. Implementation Cost" value={`$${implementationCost.toLocaleString()}`} sub="One-time investment" />
                </div>
              </div>

              <div className="rounded-xl border-2 border-[#1B2A4A] bg-white p-6 text-center dark:border-[#3A5A8C] dark:bg-gray-900">
                <p className="text-sm text-gray-500">Projected ROI</p>
                <p className={`text-5xl font-extrabold ${roiPercent > 0 ? "text-green-600" : "text-red-600"}`}>{roiPercent}%</p>
                <p className="mt-2 text-lg text-gray-600">Net savings: <strong>${netROI.toLocaleString()}</strong></p>
                <p className="text-sm text-gray-500">Payback period: ~{paybackWeeks} weeks</p>
              </div>

              {/* Simple bar chart */}
              <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="mb-3 text-xs font-semibold text-gray-500">Annual Cost Comparison</p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1"><span>Without AI</span><span>${annualCost.toLocaleString()}</span></div>
                    <div className="h-3 w-full rounded-full bg-gray-200"><div className="h-3 rounded-full bg-gray-500" style={{ width: "100%" }} /></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1"><span>With AI Implementation</span><span>${(annualCost - costSaved + implementationCost).toLocaleString()}</span></div>
                    <div className="h-3 w-full rounded-full bg-gray-200"><div className="h-3 rounded-full bg-[#1B2A4A]" style={{ width: `${Math.round(((annualCost - costSaved + implementationCost) / annualCost) * 100)}%` }} /></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1"><span>With AI (Year 2+)</span><span>${(annualCost - costSaved).toLocaleString()}</span></div>
                    <div className="h-3 w-full rounded-full bg-gray-200"><div className="h-3 rounded-full bg-green-600" style={{ width: `${Math.round(((annualCost - costSaved) / annualCost) * 100)}%` }} /></div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4">
                <Link to="/contact" className="inline-block rounded-xl bg-[#1B2A4A] px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#2A3A5A]">
                  Schedule a Discovery Call to Validate Your ROI
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ResultBox({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-950">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="mt-1 text-xl font-bold text-[#1B2A4A]">{value}</p>
      <p className="text-xs text-gray-400">{sub}</p>
    </div>
  );
}