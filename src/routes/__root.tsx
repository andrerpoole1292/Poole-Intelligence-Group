import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
  Link,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useState } from "react";

import appCss from "~/styles/app.css?url";
import { StickyCtaBar } from "~/components/shared";

// Structured data for LocalBusiness (Charlotte, NC)
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Poole Intelligence Group",
  description:
    "AI consulting for small and medium-sized businesses. Enterprise-caliber AI strategy, workflow automation, AI agents, and digital transformation.",
  url: "https://pooleintelligencegroup.com",
  email: "hello@pooleintelligencegroup.com",
  areaServed: "US",
  availableLanguage: ["English"],
  founder: {
    "@type": "Person",
    name: "Andre Poole",
    alumniOf: ["MBA Program", "U.S. Army"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Charlotte",
    addressRegion: "NC",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@pooleintelligencegroup.com",
            contactType: "sales",
  },
  sameAs: ["https://linkedin.com/company/pooleintelligence"],
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Poole Intelligence Group — Building Smarter Businesses with AI",
      },
      {
        name: "description",
        content:
          "Poole Intelligence Group helps small and medium-sized businesses build smarter operations with AI. Enterprise-caliber AI strategy, workflow automation, AI agents, and digital transformation — without the enterprise price tag or the hype. Based in Charlotte, NC, serving clients nationwide.",
      },
      {
        name: "keywords",
        content:
          "AI consulting, workflow automation, AI agents, digital transformation, business automation, Charlotte AI consulting, SMB AI solutions, AI strategy, AI implementation",
      },
      // OG tags
      { property: "og:title", content: "Poole Intelligence Group — Building Smarter Businesses with AI" },
      {
        property: "og:description",
        content:
          "Enterprise-caliber AI strategy and implementation for SMBs. Based in Charlotte, NC. Serving clients nationwide.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pooleintelligencegroup.com" },
      { name: "google-analytics", content: "G-7QW6N659QN" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-6xl font-bold text-[#1B2A4A] dark:text-[#6B8DBF]">
        404
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Page not found
      </p>
      <Link
        to="/"
        className="rounded-lg bg-[#1B2A4A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2A3A5A]"
      >
        Back home
      </Link>
    </div>
  ),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <HeadContent />
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7QW6N659QN" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7QW6N659QN');
            `,
          }}
        />
      </head>
      <body className="min-h-dvh bg-white font-sans text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
        <Nav />
        {children}
        <Footer />
        <StickyCtaBar />
        <Scripts />
      </body>
    </html>
  );
}

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/how-it-works", label: "How It Works" },
    { to: "/pricing", label: "Pricing" },
    { to: "/founder", label: "Meet the Founder" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#E8E8E8] bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-3 text-lg font-bold tracking-tight"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src="/logo.png"
            alt="Poole Intelligence Group"
            className="h-8 w-auto"
          />
          <span className="hidden text-[#1B2A4A] sm:inline dark:text-gray-100">Poole Intelligence Group</span>
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 sm:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-[#E8E8E8] bg-white px-6 pb-4 dark:border-gray-800 dark:bg-gray-950 sm:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              activeProps={{
                className:
                  "block py-3 text-[#1B2A4A] dark:text-[#6B8DBF] font-medium text-base transition",
              }}
              inactiveProps={{
                className:
                  "block py-3 text-gray-600 hover:text-[#1B2A4A] dark:text-gray-400 dark:hover:text-gray-100 font-medium text-base transition",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      activeProps={{
        className:
          "text-[#1B2A4A] dark:text-[#6B8DBF] font-medium text-sm transition",
      }}
      inactiveProps={{
        className:
          "text-gray-600 hover:text-[#1B2A4A] dark:text-gray-400 dark:hover:text-gray-100 font-medium text-sm transition",
      }}
    >
      {children}
    </Link>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#E8E8E8] bg-[#F8F9FB] pb-20 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="mb-3 flex items-center gap-3 text-lg font-bold tracking-tight">
              <img
                src="/logo.png"
                alt="Poole Intelligence Group"
                className="h-7 w-auto"
              />
              <span className="text-[#1B2A4A] dark:text-gray-100">Poole Intelligence Group</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Building smarter businesses with AI. Based in Charlotte, NC — serving clients nationwide.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1B2A4A] dark:text-gray-100">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>AI Strategy & Consulting</li>
              <li>Workflow Automation</li>
              <li>AI Agents & Chatbots</li>
              <li>Digital Strategy</li>
              <li>AI Implementation</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1B2A4A] dark:text-gray-100">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link to="/how-it-works" className="hover:text-[#1B2A4A] dark:hover:text-gray-100">How It Works</Link></li>
              <li><Link to="/pricing" className="hover:text-[#1B2A4A] dark:hover:text-gray-100">Pricing</Link></li>
              <li><Link to="/founder" className="hover:text-[#1B2A4A] dark:hover:text-gray-100">Meet the Founder</Link></li>
              <li><Link to="/blog" className="hover:text-[#1B2A4A] dark:hover:text-gray-100">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1B2A4A] dark:text-gray-100">
              Resources
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link to="/assessment" className="hover:text-[#1B2A4A] dark:hover:text-gray-100">AI Readiness Assessment</Link></li>
              <li><Link to="/resources" className="hover:text-[#1B2A4A] dark:hover:text-gray-100">Guides & Tools</Link></li>
              <li><Link to="/services" className="hover:text-[#1B2A4A] dark:hover:text-gray-100">Our Services</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1B2A4A] dark:text-gray-100">
              Trust & Legal
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link to="/security" className="hover:text-[#1B2A4A] dark:hover:text-gray-100">Trust & Security</Link></li>
              <li><Link to="/privacy" className="hover:text-[#1B2A4A] dark:hover:text-gray-100">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#1B2A4A] dark:hover:text-gray-100">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1B2A4A] dark:text-gray-100">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>hello@pooleintelligencegroup.com</li>
              <li>Charlotte, North Carolina</li>
              <li>Serving clients nationwide</li>
              <li>
                <a
                  href="https://linkedin.com/company/pooleintelligence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1B2A4A] dark:hover:text-gray-100"
                >
                  LinkedIn →
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-[#E8E8E8] pt-6 text-center text-xs text-gray-400 dark:border-gray-800 dark:text-gray-600">
          &copy; {new Date().getFullYear()} Poole Intelligence Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}