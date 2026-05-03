"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  accent: string;
  accentBg: string;
  accentBorder: string;
  brandGradient: string;
  brandLetter: string;
  role: string;
  platform: string;
};

const caseStudies: CaseStudy[] = [
  {
    slug: "/groww-stocks-explore",
    title: "Making Stock Discovery Easy",
    subtitle:
      "Redesigning Groww's Stocks Explore to help users research, discover, and trade — all in one place.",
    tags: ["Product Design", "Mobile + Web", "Groww"],
    accent: "text-emerald-500",
    accentBg: "bg-emerald-50",
    accentBorder: "border-emerald-200",
    brandGradient: "from-emerald-400 to-teal-500",
    brandLetter: "G",
    role: "Product Designer",
    platform: "Web & Mobile",
  },
  {
    slug: "/open-interest-tool",
    title: "Designing an Open Interest Trading Tool",
    subtitle:
      "Building a tool where traders can understand the market's mood in a blink — sophisticated data, consumer-grade simplicity.",
    tags: ["Trading Tool", "Data Visualization", "Groww"],
    accent: "text-violet-500",
    accentBg: "bg-violet-50",
    accentBorder: "border-violet-200",
    brandGradient: "from-violet-400 to-purple-500",
    brandLetter: "OI",
    role: "Product Designer",
    platform: "Mobile",
  },
  {
    slug: "/ipo-journey-redesign",
    title: "IPO Journey Redesign",
    subtitle:
      "Making IPO investing simpler, faster, and more transparent — redesigning the end-to-end journey from discovery to allotment.",
    tags: ["Product Design", "Mobile", "Groww"],
    accent: "text-sky-500",
    accentBg: "bg-sky-50",
    accentBorder: "border-sky-200",
    brandGradient: "from-sky-400 to-blue-500",
    brandLetter: "IPO",
    role: "Product Designer",
    platform: "Mobile",
  },
];

const CaseStudyCard = ({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
  >
    <Link
      href={study.slug}
      className="group block"
      aria-label={`Read case study: ${study.title}`}
    >
      <div
        className={`relative overflow-hidden rounded-3xl border ${study.accentBorder} bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 sm:p-10`}
      >
        {/* Brand icon */}
        <div
          className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${study.brandGradient} shadow-lg`}
        >
          <span className="text-lg font-bold text-white">
            {study.brandLetter}
          </span>
        </div>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full ${study.accentBg} px-3 py-1 text-xs font-medium ${study.accent}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
          {study.title}
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-lg text-base leading-relaxed text-zinc-500">
          {study.subtitle}
        </p>

        {/* Meta */}
        <div className="mt-6 flex gap-6 text-sm text-zinc-400">
          <div>
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-300">
              Role
            </span>
            <span className="mt-0.5 block text-zinc-600">{study.role}</span>
          </div>
          <div>
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-300">
              Platform
            </span>
            <span className="mt-0.5 block text-zinc-600">
              {study.platform}
            </span>
          </div>
        </div>

        {/* Arrow */}
        <div
          className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${study.accent} transition-transform duration-200 group-hover:translate-x-1`}
        >
          Read case study
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
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>

        {/* Decorative gradient blob */}
        <div
          className={`pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br ${study.brandGradient} opacity-[0.04] blur-3xl transition-opacity duration-300 group-hover:opacity-[0.08]`}
          aria-hidden="true"
        />
      </div>
    </Link>
  </motion.div>
);

const LandingPage = () => {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-zinc-100 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="text-sm font-bold tracking-tight text-zinc-800">
            Design Portfolio
          </span>
          <span className="text-xs text-zinc-400">Case Studies</span>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pb-8 pt-16 sm:px-10 sm:pt-24 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              Case Studies
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-500">
              Deep dives into real product problems — from research and ideation
              through design and measurable outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-6 pb-24 pt-4 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-5xl space-y-8">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 bg-zinc-50 px-6 py-8 text-center">
        <p className="text-xs text-zinc-400">
          More case studies coming soon.
        </p>
      </footer>
    </main>
  );
};

export default LandingPage;
