import { createFileRoute, redirect } from "@tanstack/react-router";

const contactMeta = [{ title: "Contact — Poole Intelligence Group" }];
const contactHead = { meta: contactMeta };

export const Route = createFileRoute("/contact")({
  head: () => contactHead,
  component: ContactRedirect,
});

function ContactRedirect() {
  // Force a full page navigation so Vercel's rewrite serves the static HTML
  if (typeof window !== "undefined") {
    window.location.href = "/contact-static.html";
  }
  return null;
}