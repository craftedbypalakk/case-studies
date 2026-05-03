"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import Divider from "@/components/Divider";
import Link from "next/link";
import { motion } from "framer-motion";

/* ─── Hero ──────────────────────────────────────────────── */

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/60 to-white px-6 pb-20 pt-16 sm:px-10 lg:px-20">
    <div className="mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl"
      >
        <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-zinc-900 sm:text-5xl">
          IPO Journey Redesign
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-zinc-500">
          Making IPO investing simpler, faster, and more transparent.
        </p>
        <div className="mt-8 flex flex-wrap gap-6 text-sm text-zinc-400">
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Role
            </span>
            <span className="mt-1 block text-zinc-600">Product Designer</span>
          </div>
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Platform
            </span>
            <span className="mt-1 block text-zinc-600">Mobile</span>
          </div>
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Company
            </span>
            <span className="mt-1 block text-zinc-600">Groww</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── Overview ──────────────────────────────────────────── */

const Overview = () => (
  <section className="px-6 py-20 sm:px-10 lg:px-20">
    <div className="mx-auto max-w-2xl">
      <AnimatedSection>
        <SectionLabel label="Overview" />
        <p className="mt-6 text-base leading-relaxed text-zinc-600">
          IPO is a high-intent but confusing journey. Users struggle with:
        </p>
        <ul className="mt-4 space-y-3">
          {[
            "Discovering relevant IPOs",
            "Applying without friction",
            "Aftermath after applying & waiting for IPO allotment",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-[10px] font-bold text-sky-600">
                {i + 1}
              </span>
              <span className="text-base text-zinc-600">{item}</span>
            </li>
          ))}
        </ul>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-10">
        <div className="rounded-2xl border border-sky-200 bg-sky-50/50 p-6">
          <p className="text-sm font-semibold text-sky-700">
            We redesigned the end-to-end IPO journey across:
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              { label: "Listing Page", desc: "Discovery" },
              { label: "Order Card", desc: "Conversion" },
              { label: "Status Page", desc: "Post-application clarity" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-sky-100 bg-white p-4 text-center"
              >
                <p className="text-sm font-bold text-zinc-800">{item.label}</p>
                <p className="mt-1 text-xs text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Section Component ─────────────────────────────────── */

type JourneySectionProps = {
  title: string;
  subtitle: string;
  problem: string;
  problemDetails?: string[];
  goal?: string;
  solution: string;
  solutionDetails?: string[];
  principles?: string;
  result?: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  bgClass?: string;
};

const JourneySection = ({
  title,
  subtitle,
  problem,
  problemDetails,
  goal,
  solution,
  solutionDetails,
  principles,
  result,
  accentColor,
  accentBg,
  accentBorder,
  bgClass = "",
}: JourneySectionProps) => (
  <section className={`px-6 py-20 sm:px-10 lg:px-20 ${bgClass}`}>
    <div className="mx-auto max-w-2xl">
      <AnimatedSection>
        <SectionLabel label={subtitle} />
        <h2 className="mt-4 text-2xl font-bold text-zinc-900">{title}</h2>
      </AnimatedSection>

      {/* Problem */}
      <AnimatedSection delay={0.1} className="mt-8">
        <div className={`rounded-2xl border ${accentBorder} ${accentBg} p-6`}>
          <span className={`text-xs font-semibold ${accentColor}`}>
            Problem
          </span>
          <p className="mt-2 text-base leading-relaxed text-zinc-700">
            {problem}
          </p>
          {problemDetails && (
            <ul className="mt-4 space-y-2">
              {problemDetails.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-zinc-600">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                  {d}
                </li>
              ))}
            </ul>
          )}
        </div>
      </AnimatedSection>

      {/* Goal */}
      {goal && (
        <AnimatedSection delay={0.15} className="mt-6">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
            <span className="text-xs font-semibold text-zinc-500">Goal</span>
            <p className="mt-2 text-base font-medium text-zinc-800">{goal}</p>
          </div>
        </AnimatedSection>
      )}

      {/* Solution */}
      <AnimatedSection delay={0.2} className="mt-6">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6">
          <span className="text-xs font-semibold text-emerald-600">
            Solution
          </span>
          <p className="mt-2 text-base leading-relaxed text-zinc-700">
            {solution}
          </p>
          {solutionDetails && (
            <ul className="mt-4 space-y-2">
              {solutionDetails.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-zinc-600">
                  <span className="mt-1 text-emerald-500">&#10003;</span>
                  {d}
                </li>
              ))}
            </ul>
          )}
        </div>
      </AnimatedSection>

      {/* Principles */}
      {principles && (
        <AnimatedSection delay={0.25} className="mt-6">
          <div className="rounded-xl border border-violet-200 bg-violet-50/40 p-5">
            <span className="text-xs font-semibold text-violet-600">
              Design Principle
            </span>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              {principles}
            </p>
          </div>
        </AnimatedSection>
      )}

      {/* Result */}
      {result && (
        <AnimatedSection delay={0.3} className="mt-6">
          <div className="rounded-xl bg-zinc-900 p-5">
            <span className="text-xs font-semibold text-emerald-400">
              Result
            </span>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              {result}
            </p>
          </div>
        </AnimatedSection>
      )}
    </div>
  </section>
);

/* ─── Status Page Deep Dive ─────────────────────────────── */

const StatusPageDetails = () => (
  <section className="bg-zinc-50 px-6 py-20 sm:px-10 lg:px-20">
    <div className="mx-auto max-w-2xl">
      <AnimatedSection>
        <SectionLabel label="Status Page — Key Features" />
        <h2 className="mt-4 text-2xl font-bold text-zinc-900">
          Transparency at every step
        </h2>
      </AnimatedSection>

      <div className="mt-10 space-y-6">
        {[
          {
            title: "Mandate tracking",
            desc: "Showing where the mandate will be sent — users can see exactly which bank will process their payment.",
          },
          {
            title: "Actionable status updates",
            desc: "No need to hunt through the app — actions are right on the status screen when needed.",
          },
          {
            title: "Smart messaging by payment method",
            desc: "For Groww UPI users, we show exact updates. For non-Groww UPI, we show estimates from the user's bank. For smaller banks still being integrated, we communicate clearly.",
          },
          {
            title: "Allotment expectations & RTA link",
            desc: "If allotment is delayed, we provide a direct link to the RTA site so users can check status themselves — reducing support queries proactively.",
          },
          {
            title: "Allotment status with Groww UPI",
            desc: "With Groww UPI, we show exact refund and allotment updates. Without it, we show the best estimates available from the user's bank.",
          },
        ].map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.06}>
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-600">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-zinc-800">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Delight */}
      <AnimatedSection delay={0.4} className="mt-10">
        <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6 text-center">
          <span className="text-3xl">🎉</span>
          <h3 className="mt-3 text-lg font-bold text-zinc-900">
            Delightful when allotted
          </h3>
          <p className="mt-2 text-sm text-zinc-500">
            A celebratory experience when users get their IPO shares — making
            the long wait worth it.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Impact ────────────────────────────────────────────── */

const Impact = () => (
  <section className="bg-zinc-900 px-6 py-20 text-white sm:px-10 lg:px-20">
    <div className="mx-auto max-w-2xl">
      <AnimatedSection>
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
          Impact
        </span>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-8">
        <div className="flex items-center gap-6">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-500/20"
          >
            <span className="text-3xl font-bold text-sky-400">23.6%</span>
          </motion.div>
          <div>
            <p className="text-lg font-bold text-white">
              Reduction in user queries
            </p>
            <p className="mt-1 text-sm text-zinc-400">Within 1 month</p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.15} className="mt-8">
        <p className="text-base leading-relaxed text-zinc-400">
          Better user confidence post-application. Users no longer needed to
          contact support to understand where their IPO application stood.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Closing ───────────────────────────────────────────── */

const Closing = () => (
  <section className="px-6 py-20 sm:px-10 lg:px-20">
    <div className="mx-auto max-w-2xl">
      <AnimatedSection>
        <SectionLabel label="Closing Note" />
        <p className="mt-6 text-base leading-relaxed text-zinc-600">
          This project wasn&apos;t just about UI changes. It was about aligning
          the product with how users think, act, and wait during an IPO journey.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Footer ────────────────────────────────────────────── */

const Footer = () => (
  <footer className="border-t border-zinc-100 bg-zinc-50 px-6 py-10 text-center">
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-800"
      aria-label="Back to all case studies"
    >
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      All case studies
    </Link>
  </footer>
);

/* ─── Page ──────────────────────────────────────────────── */

const IPOJourneyPage = () => {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav
        className="sticky top-0 z-50 border-b border-zinc-100 bg-white/90 px-6 py-3 backdrop-blur-md"
        aria-label="Case study navigation"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-zinc-400 transition-colors hover:text-zinc-700"
            aria-label="Back to all case studies"
          >
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="font-semibold uppercase tracking-[0.2em]">
              Case Study
            </span>
          </Link>
          <div className="flex items-center gap-1">
            <div className="h-4 w-4 rounded-full bg-gradient-to-br from-sky-400 to-blue-500" />
            <span className="text-sm font-semibold text-zinc-700">
              Groww IPO
            </span>
          </div>
        </div>
      </nav>

      <Hero />
      <Divider />
      <Overview />
      <Divider />

      {/* Listing Page */}
      <JourneySection
        title="Listing Page — From clutter to clarity"
        subtitle="Part 1: Discovery"
        problem="The earlier experience had everything in one long scroll: Open IPOs, Applied, Closed, Upcoming. This created cognitive overload and poor discoverability."
        problemDetails={[
          "Cognitive overload from a single long scroll",
          "Poor discoverability of relevant IPOs",
          "Users couldn't revisit past IPO applications",
        ]}
        goal="Give users intent-based navigation with clear lifecycle visibility."
        solution="We restructured the entire listing into clear tabs: Open, Applied, Closed, Upcoming."
        solutionDetails={[
          "Removed long scroll → intent-based tab navigation",
          "Each tab shows only relevant information",
          "Introduced Past Applications section",
        ]}
        accentColor="text-red-500"
        accentBg="bg-red-50/50"
        accentBorder="border-red-100"
      />

      <AnimatedSection className="px-6 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
            <span className="text-xs font-semibold text-zinc-500">
              Why it works
            </span>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-500">&#10003;</span>
                Reduces cognitive load
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-500">&#10003;</span>
                Matches user intent directly
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-500">&#10003;</span>
                Creates a clear lifecycle view of IPOs
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-emerald-500">&#10003;</span>
                Adds continuity (before → after investing)
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <Divider />

      {/* Order Card */}
      <JourneySection
        title="Order Card — From multi-step to one-flow"
        subtitle="Part 2: Application"
        problem="Applying for an IPO was unnecessarily long. The flow was: Enter lots → Confirmation (multiple bids) → Payment selection."
        problemDetails={[
          "Drop-offs between steps",
          "Repetitive confirmations",
          "Too many page transitions",
        ]}
        goal='Make IPO application feel like a "one-click experience" without overwhelming users.'
        solution="We redesigned the order experience into a single unified interface."
        solutionDetails={[
          "Lots input + bid details → same screen",
          "All bids shown in a scrollable structure",
          "Payment selection → integrated within the same flow",
          "No page transitions",
        ]}
        principles='Progressive disclosure (show more only when needed) — like payment method selection.'
        result="Reduces steps → faster completion. Significantly lower drop-off during IPO application."
        accentColor="text-amber-600"
        accentBg="bg-amber-50/50"
        accentBorder="border-amber-200"
        bgClass="bg-zinc-50"
      />

      <Divider />

      {/* Status Page */}
      <JourneySection
        title="IPO Status Page — From ambiguity to transparency"
        subtitle="Part 3: Post-Application"
        problem="We faced a surge in queries when there were lots of large IPOs in the market. IPO application involves multiple steps dependent on other parties: Application confirmation (exchange), UPI mandate (bank), Allotment status (RTA), Refund (bank)."
        problemDetails={[
          "We didn't have access to all updates",
          "Users had no visibility into what's happening",
          "High support queries",
        ]}
        goal="Make the journey transparent and trustworthy."
        solution="Groww UPI to track mandates — if users apply through Groww UPI, we can get exact estimates from their bank for sending mandates, refund statuses, and more. For other steps we provide clear information and highlight timelines at each step."
        accentColor="text-sky-600"
        accentBg="bg-sky-50/50"
        accentBorder="border-sky-200"
      />

      <StatusPageDetails />
      <Divider />
      <Impact />
      <Closing />
      <Footer />
    </main>
  );
};

export default IPOJourneyPage;
