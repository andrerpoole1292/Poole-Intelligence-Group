import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { getProposalByToken } from "~/lib/crm";

export const Route = createFileRoute("/proposal/")({
  component: ProposalViewPage,
  head: () => ({
    meta: [{ title: "Proposal — Poole Intelligence Group" }],
  }),
});

function ProposalViewPage() {
  const { token } = Route.useParams();
  const [proposal, setProposal] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProposalByToken({ token }).then((p) => {
      setProposal(p);
      setLoading(false);
    });
  }, [token]);

  if (loading) {
    return (
      <div className="flex min-h-dvh items-center justify-center">
        <div className="text-center text-gray-500">Loading proposal...</div>
      </div>
    );
  }

  if (!proposal) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6">
        <h1 className="text-4xl font-bold text-[#1B2A4A]">404</h1>
        <p className="text-gray-600">Proposal not found.</p>
        <Link to="/" className="rounded-lg bg-[#1B2A4A] px-4 py-2 text-sm text-white">Back Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-gray-100">
      <div className="mx-auto max-w-4xl">
        <div className="bg-white p-8 shadow-sm" dangerouslySetInnerHTML={{ __html: proposal.content }} />
      </div>
    </div>
  );
}