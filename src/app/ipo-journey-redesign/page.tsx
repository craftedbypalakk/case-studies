"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/** Figma Case-studies — IPO frame node 143:219327; 400px column, symmetric 340px inset ≥1080 */
const columnShellClass =
  "mx-auto w-full max-w-[1080px] px-6 sm:px-[72px] min-[1080px]:px-[340px]";
const columnInnerClass = "w-full max-w-[400px]";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const cnEyebrow =
  "font-case-inter font-medium uppercase tracking-[2px] text-[10px] leading-[12px] text-[#6B7280]";
const cnInterMeta =
  "font-case-inter text-[12px] font-normal leading-normal text-[#353839]";
const cnBody =
  "font-groww-sans text-[14px] font-normal leading-[20px] text-[#374151]";

const TopBar = () => (
  <header className="sticky top-0 z-50 border-b border-[#e5e7eb] bg-white">
    <div
      className="mx-auto flex h-[60px] max-w-[1080px] items-center justify-between px-6 sm:px-[72px]"
    >
      <Link
        href="/"
        className="font-pp-neue-bit flex items-center gap-[6px] text-[12px] font-normal uppercase tracking-[2.4px] text-black transition-opacity hover:opacity-70"
        aria-label="Back to case studies"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 12L6 8L10 4"
            stroke="#353839"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        CASE STUDY
      </Link>
      <p
        className="font-pp-neue-bit text-[12px] font-normal uppercase tracking-[2.4px] text-black"
        aria-label="Case study year"
      >
        2024
      </p>
    </div>
  </header>
);

const HeroSection = () => (
  <motion.section
    {...fadeUp}
    className="mx-auto max-w-[1080px] px-6 pb-0 pt-[36px] sm:px-[72px]"
    aria-labelledby="ipo-hero-heading"
  >
    <div className="w-full max-w-[936px]">
      <h1
        id="ipo-hero-heading"
        className="font-fragment-glare text-[36px] font-normal leading-tight tracking-normal text-[#1F2937] sm:text-[48px]"
      >
        IPO Journey Redesign
      </h1>
      <p
        className={`font-case-inter mt-2 max-w-[936px] text-[14px] font-normal leading-normal text-[#6B7280]`}
      >
        Making IPO investing simpler, faster, and more transparent
      </p>

      <div className="mt-8 flex flex-wrap items-start justify-between gap-y-[16px]">
        <div className="min-w-[140px] shrink-0">
          <p className="font-case-inter text-[10px] font-medium uppercase leading-[12px] tracking-[2px] text-[#7f8283]">
            Role
          </p>
          <p className={`${cnInterMeta} mt-1 text-[#1F2937]`}>Product designer</p>
        </div>
        <div className="max-w-[300px] shrink-0 text-left sm:ml-auto sm:text-right">
          <p className="font-case-inter text-[10px] font-medium uppercase leading-[12px] tracking-[2px] text-[#7f8283]">
            Team
          </p>
          <p
            className={`${cnInterMeta} mt-1 text-right text-[#1F2937] sm:text-right`}
          >
            1 Product designer, 1 Product Manager, 2 Developers
          </p>
        </div>
      </div>

      {/* Hero media — swap for Next/Image when asset is supplied */}
      <div
        className="relative mt-[40px] w-full overflow-hidden rounded-[12px] bg-[#f0f0f0] ring-1 ring-inset ring-black/[0.06]"
        style={{ height: "360px", maxWidth: "936px" }}
        role="img"
        aria-label="IPO Journey hero visual placeholder"
      />
    </div>
  </motion.section>
);

const ContentColumn = ({ children }: { children: React.ReactNode }) => (
  <div className={columnShellClass}>
    <div className={columnInnerClass}>{children}</div>
  </div>
);

const ContentDivider = () => (
  <hr className="w-full border-t border-[#E5E7EB]" />
);

const SectionDivider = () => (
  <div className={`${columnShellClass} my-14`}>
    <div className={columnInnerClass}>
      <ContentDivider />
    </div>
  </div>
);

type CheckItemProps = {
  text: string;
};

const CheckItem = ({ text }: CheckItemProps) => (
  <div className="flex items-start gap-2">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="mt-[2px] flex-shrink-0"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="8" fill="#00D09C" opacity="0.15" />
      <path
        d="M5 8l2 2 4-4"
        stroke="#00D09C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className={cnBody}>{text}</span>
  </div>
);

type NumberedItemProps = {
  number: number;
  text: string;
};

const NumberedItem = ({ number, text }: NumberedItemProps) => (
  <div className="flex items-start gap-[6px]">
    <div
      className="flex items-center justify-center rounded-sm bg-[#F3F4F6] flex-shrink-0"
      style={{ width: "20px", height: "20px" }}
    >
      <span
        className="text-[#6B7280] font-medium font-groww-sans"
        style={{ fontSize: "12px" }}
      >
        {number}
      </span>
    </div>
    <span className={cnBody}>{text}</span>
  </div>
);

type QuoteCardProps = {
  children: React.ReactNode;
};

/** Problem / emphasis — subtle card per Figma (not strong red tint) */
const QuoteCard = ({ children }: QuoteCardProps) => (
  <div
    className="rounded-tr-lg rounded-br-lg bg-[#F9FAFB] p-4 ring-1 ring-inset ring-[#E5E7EB]"
    style={{ borderLeft: "3px solid #E5E7EB" }}
  >
    {children}
  </div>
);

type NewOldToggleProps = {
  className?: string;
};

const NewOldToggle = ({ className = "" }: NewOldToggleProps) => (
  <div className={`flex items-center justify-center ${className}`}>
    <div
      className="flex rounded-full border border-[#E5E7EB] overflow-hidden"
      style={{ height: "34px" }}
    >
      <div
        className="flex items-center justify-center bg-[#1F2937] text-white rounded-full font-groww-sans"
        style={{
          width: "56px",
          height: "26px",
          margin: "4px",
          fontSize: "14px",
        }}
      >
        New
      </div>
      <div
        className="flex items-center justify-center text-[#6B7280] font-groww-sans"
        style={{
          width: "56px",
          height: "26px",
          margin: "4px",
          fontSize: "14px",
        }}
      >
        Old
      </div>
    </div>
  </div>
);

const SectionHeadingSmall = ({
  label,
  title,
}: {
  label: string;
  title: string;
}) => (
  <>
    <p className={cnEyebrow}>{label}</p>
    <h2 className="font-groww-sans mt-2 text-[18px] font-semibold leading-[24px] text-[#1F2937]">
      {title}
    </h2>
  </>
);

const ContextSection = () => (
  <motion.div {...fadeUp}>
    <p className={cnEyebrow}>Context</p>
    <div className="mt-7">
      <p className={`${cnBody} font-medium`}>
        IPO is a high-intent but confusing journey. Users struggle with:
      </p>
      <div className="mt-4 flex flex-col gap-3">
        <NumberedItem number={1} text="Discovering relevant IPOs" />
        <NumberedItem number={2} text="Applying without friction" />
        <NumberedItem
          number={3}
          text="Aftermath after applying & Waiting for the IPO allotment"
        />
      </div>
    </div>

    <div
      className="mt-[32px] w-full max-w-[576px] rounded-lg bg-[#F9FAFB] p-4 min-[1080px]:-ml-[88px]"
    >
      <p className={`${cnBody} font-medium leading-[18px]`}>
        We redesigned the end to end IPO journey across:
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <div className="w-[144px] rounded-md border border-[#E5E7EB] bg-white p-3">
          <p className={`${cnBody} font-medium leading-[18px]`}>Listing Page</p>
          <p className="mt-1 text-[14px] leading-[18px] text-[#9CA3AF] font-groww-sans">
            Discovery
          </p>
        </div>
        <svg width="24" height="1" aria-hidden="true">
          <line
            x1="0"
            y1="0.5"
            x2="24"
            y2="0.5"
            stroke="#D1D5DB"
            strokeWidth="1"
          />
        </svg>
        <div className="w-[144px] rounded-md border border-[#E5E7EB] bg-white p-3">
          <p className={`${cnBody} font-medium leading-[18px]`}>Order Card</p>
          <p className="mt-1 text-[14px] leading-[18px] text-[#9CA3AF] font-groww-sans">
            Conversion
          </p>
        </div>
        <svg width="24" height="1" aria-hidden="true">
          <line
            x1="0"
            y1="0.5"
            x2="24"
            y2="0.5"
            stroke="#D1D5DB"
            strokeWidth="1"
          />
        </svg>
        <div className="w-[144px] rounded-md border border-[#E5E7EB] bg-white p-3">
          <p className={`${cnBody} font-medium leading-[18px]`}>Status Page</p>
          <p className="mt-1 text-[14px] leading-[18px] text-[#9CA3AF] font-groww-sans">
            Post-application clarity
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

type PartSectionProps = {
  partLabel: string;
  title: string;
  problemContent: React.ReactNode;
  goalText: string;
  solutionContent: React.ReactNode;
  afterSolution?: React.ReactNode;
};

const PartSection = ({
  partLabel,
  title,
  problemContent,
  goalText,
  solutionContent,
  afterSolution,
}: PartSectionProps) => (
  <motion.div {...fadeUp}>
    <SectionHeadingSmall label={partLabel} title={title} />

    <div className="mt-10">{problemContent}</div>

    <div className="mt-10">
      <ContentDivider />
    </div>

    <div className="mt-10">
      <p className="font-groww-sans text-[18px] font-semibold leading-[24px] text-[#1F2937]">
        🎯 Goal
      </p>
      <p className={`${cnBody} mt-2`}>{goalText}</p>
    </div>

    <div className="mt-10">
      <ContentDivider />
    </div>

    <div className="mt-10">
      <p className="font-groww-sans text-[18px] font-semibold leading-[24px] text-[#1F2937]">
        Solution
      </p>
      <div className="mt-2">{solutionContent}</div>
    </div>

    {afterSolution}
  </motion.div>
);

const Part1Discovery = () => (
  <PartSection
    partLabel="PART 1: DISCOVERY"
    title="Listing Page — From clutter to clarity"
    problemContent={
      <QuoteCard>
        <p className={`${cnBody} font-semibold text-[#1F2937]`}>Problem</p>
        <div className="mt-2 space-y-2">
          <p className={cnBody}>
            <span className="font-semibold">
              The earlier experience had everything in one long scroll:
            </span>{" "}
            Open IPOs, Applied, Closed, Upcoming. This created{" "}
            <span className="font-semibold">cognitive overload</span> and{" "}
            <span className="font-semibold">
              poor discoverability of relevant IPOs
            </span>
          </p>
          <p className={cnBody}>
            <span className="font-semibold">
              Users couldn&apos;t revisit past IPO applications:
            </span>{" "}
            This was not handled from the tech side from a very long time.
          </p>
        </div>
      </QuoteCard>
    }
    goalText="Give users intent-based navigation with clear lifecycle visibility."
    solutionContent={
      <>
        <p className={cnBody}>
          We restructured the entire listing into clear tabs: Open, Applied,
          Closed, Upcoming.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <CheckItem text="Removed long scroll → intent-based tab navigation" />
          <CheckItem text="Each tab shows only relevant information" />
          <CheckItem text="Introduced Past Applications section" />
        </div>
        <div className="relative mx-auto mt-8 w-full max-w-[712px] min-[1080px]:-left-[156px] min-[1080px]:mx-0 min-[1080px]:w-[712px] min-[1080px]:max-w-none">
          <NewOldToggle />
          <div
            className="mt-8 h-[413px] w-full rounded-[12px] bg-[#f0f0f0] ring-1 ring-inset ring-black/[0.06]"
            role="presentation"
            aria-hidden="true"
          />
        </div>
      </>
    }
    afterSolution={
      <motion.div {...fadeUp} className="mt-10">
        <p className="font-groww-sans text-[18px] font-semibold leading-[24px] text-[#1F2937]">
          Why it works
        </p>
        <div className="mt-4 flex flex-col gap-4">
          <CheckItem text="Reduces cognitive load" />
          <CheckItem text="Matches user intent directly" />
          <CheckItem text="Creates a clear lifecycle view of IPOs" />
          <CheckItem text="Adds continuity (before → after investing)" />
        </div>
      </motion.div>
    }
  />
);

const Part2Application = () => (
  <PartSection
    partLabel="PART 2: APPLICATION"
    title="Order Card — From multi-step to one-flow"
    problemContent={
      <QuoteCard>
        <p className={`${cnBody} font-semibold text-[#1F2937]`}>Problem</p>
        <div className="mt-2 space-y-2">
          <p className={cnBody}>
            Applying for an IPO was{" "}
            <span className="font-semibold">unnecessarily long</span>. The flow
            was: Enter lots → Confirmation (multiple bids) → Payment selection.
          </p>
          <p className={cnBody}>
            This led to drop-offs between steps, repetitive confirmations and
            too many page transitions.
          </p>
        </div>
      </QuoteCard>
    }
    goalText='Make IPO application feel like a "one-click experience" without overwhelming users.'
    solutionContent={
      <>
        <p className={cnBody}>
          We redesigned the order experience into a single unified interface.
        </p>
        <div className="mt-3 flex flex-col gap-3">
          <CheckItem text="Lots input + bid details → same screen" />
          <CheckItem text="All bids shown in a scrollable structure" />
          <CheckItem text="Payment selection → integrated within the same flow" />
          <CheckItem text="No page transitions" />
          <CheckItem text="Fundamental improvements on the screen" />
        </div>
        <div className="mx-auto mt-10 w-[344px] max-w-full">
          <NewOldToggle />
          <div
            className="mt-8 h-[422px] w-full rounded-[12px] bg-[#f0f0f0] ring-1 ring-inset ring-black/[0.06]"
            role="presentation"
            aria-hidden="true"
          />
        </div>
      </>
    }
    afterSolution={
      <>
        <motion.div {...fadeUp} className="mt-10">
          <QuoteCard>
            <p className={`${cnBody} font-semibold text-[#1F2937]`}>
              Design Principle
            </p>
            <p className={`${cnBody} mt-1 not-italic`}>
              Progressive disclosure (show more only when needed) — like
              payment method selection.
            </p>
          </QuoteCard>
        </motion.div>
        <motion.div {...fadeUp} className="mt-10">
          <p className="font-groww-sans text-[18px] font-medium leading-[24px] text-[#1F2937]">
            ⚡️ Result - Reduces steps → faster completion.
          </p>
        </motion.div>
      </>
    }
  />
);

const Part3PostApplication = () => (
  <PartSection
    partLabel="PART 3: POST-APPLICATION"
    title="IPO Status Page — From ambiguity to transparency"
    problemContent={
      <QuoteCard>
        <p className={`${cnBody} font-semibold text-[#1F2937]`}>Problem</p>
        <div className="mt-2 space-y-6">
          <p className={cnBody}>
            We faced a surge in queries when there were lots of large IPOs in
            the market. IPO application involves multiple steps dependent on
            other parties: Application confirmation (exchange), UPI mandate
            (bank), Allotment status (RTA), Refund (bank).
          </p>
          <p className={`${cnBody} leading-relaxed`}>
            We didn&apos;t have access to all updates<br />
            Users had no visibility into what&apos;s happening<br />
            High support queries
          </p>
        </div>
      </QuoteCard>
    }
    goalText="Make the journey transparent and trustworthy."
    solutionContent={
      <>
        <p className={`${cnBody} font-medium`}>What can be done</p>
        <div className="mt-3 flex flex-col gap-6">
          <CheckItem text="Groww UPI to track mandates, if users applies through Groww UPI, we can get from user&apos;s bank to give exact estimates, of sending mandates, refund statuses, also even if user doesn&apos;t uses Groww UPI, we might not get exact estimates if case of smaller banks, but for biggers banks we can ask them to send us estimates" />
          <CheckItem text="For other steps we&apos;ll provide clear information and highlight timelines at each step" />
        </div>
      </>
    }
  />
);

const StatusPageFeatures = () => (
  <>
    <motion.div {...fadeUp}>
      <p className={cnEyebrow}>Status Page — Key Features</p>
      <h3 className="font-groww-sans mt-2 text-[18px] font-semibold leading-[24px] text-[#1F2937]">
        Transparency at every step
      </h3>
    </motion.div>

    <motion.div {...fadeUp} className="mt-4">
      <p className={cnBody}>
        Application confirmation from exchange → Happens instantly
        <br />
        Mandate approval → Dependent on bank
        <br />
        Application placement - involves RTA and exchange
        <br />
        Allotment announcement
      </p>
    </motion.div>

    <div className="mt-8">
      <ContentDivider />
    </div>

    <motion.div {...fadeUp} className="mt-8">
      <p className="font-groww-sans text-[18px] font-semibold leading-[24px] text-[#1F2937]">
        Mandate tracking
      </p>
      <p className={`${cnBody} mt-3`}>
        Showing where the mandate will be sent — users can see exactly which
        bank will process their payment. For Groww UPI users, we show exact
        updates. For non-Groww UPI, we show estimates from the user&apos;s bank.
        For smaller banks still being integrated, we communicate clearly.
      </p>
      <div
        className="mx-auto mt-6 h-[311px] w-full max-w-[180px] rounded-[12px] bg-[#f0f0f0] ring-1 ring-inset ring-black/[0.06]"
        role="presentation"
        aria-hidden="true"
      />
    </motion.div>

    <motion.div {...fadeUp} className="mt-16">
      <p className={cnBody}>
        Actionable status updates - No need to hunt through the app — actions are
        right on the status screen when needed.
      </p>
      <div className="mx-auto mt-6 flex max-w-full flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-5">
        <div
          className="h-[311px] w-[160px] shrink-0 rounded-[12px] bg-[#f0f0f0] ring-1 ring-inset ring-black/[0.06]"
          aria-hidden="true"
        />
        <div
          className="h-[311px] w-[160px] shrink-0 rounded-[12px] bg-[#f0f0f0] ring-1 ring-inset ring-black/[0.06]"
          aria-hidden="true"
        />
      </div>
    </motion.div>

    <div className="mt-8">
      <ContentDivider />
    </div>

    <motion.div {...fadeUp} className="mt-8">
      <p className="font-groww-sans text-[18px] font-semibold leading-[24px] text-[#1F2937]">
        Allotment expectations &amp; RTA link
      </p>
      <p className={`${cnBody} mt-3`}>
        If allotment is delayed, we provide a direct link to the RTA site so users
        can check status themselves — reducing support queries proactively.
      </p>
      <div className="mx-auto mt-6 flex max-w-full flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-6">
        <div
          className="h-[311px] w-[160px] shrink-0 rounded-[12px] bg-[#f0f0f0] ring-1 ring-inset ring-black/[0.06]"
          aria-hidden="true"
        />
        <div
          className="h-[311px] w-[160px] shrink-0 rounded-[12px] bg-[#f0f0f0] ring-1 ring-inset ring-black/[0.06]"
          aria-hidden="true"
        />
      </div>
    </motion.div>

    <div className="mt-8">
      <ContentDivider />
    </div>

    <motion.div {...fadeUp} className="mt-8">
      <p className="font-groww-sans text-[18px] font-semibold leading-[24px] text-[#1F2937]">
        Mandate tracking
      </p>
      <p className={`${cnBody} mt-3`}>
        With Groww UPI, we show exact refund and allotment updates. Without it,
        we show the best estimates available from the user&apos;s bank.
      </p>
      <div className="mx-auto mt-6 flex max-w-full flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-6">
        <div
          className="h-[311px] w-[160px] shrink-0 rounded-[12px] bg-[#f0f0f0] ring-1 ring-inset ring-black/[0.06]"
          aria-hidden="true"
        />
        <div
          className="h-[311px] w-[160px] shrink-0 rounded-[12px] bg-[#f0f0f0] ring-1 ring-inset ring-black/[0.06]"
          aria-hidden="true"
        />
      </div>
    </motion.div>

    <motion.div {...fadeUp} className="mt-16">
      <QuoteCard>
        <p className={cnBody}>
          🎉 Delightful when allotted - A celebratory experience when users get
          their IPO shares — making the long wait worth it.
        </p>
      </QuoteCard>
      <div className="mt-6 flex justify-center">
        <div
          className="h-[311px] w-[160px] rounded-[12px] bg-[#f0f0f0] ring-1 ring-inset ring-black/[0.06]"
          aria-hidden="true"
        />
      </div>
    </motion.div>
  </>
);

const ImpactSection = () => (
  <motion.div {...fadeUp}>
    <p className={`${cnEyebrow}`}>impact</p>
    <div className="mt-7">
      <p className={cnBody}>
        23.6% reduction in user queries (within 1 month)
        <br />
        Better user confidence post-application.
        <br />
        Users no longer needed to contact support to understand where their IPO
        application stood.
      </p>
    </div>
  </motion.div>
);

const ClosingSection = () => (
  <motion.div {...fadeUp}>
    <p className={cnEyebrow}>closing note</p>
    <div className="mt-7">
      <p className={cnBody}>
        This project wasn&apos;t just about UI changes. It was about aligning the
        product with how users think, act, and wait during an IPO journey.
      </p>
    </div>
  </motion.div>
);

const IPOJourneyPage = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <TopBar />
      <HeroSection />

      <div style={{ paddingTop: "56px" }}>
        <ContentColumn>
          <ContextSection />
        </ContentColumn>

        <SectionDivider />

        <ContentColumn>
          <Part1Discovery />
        </ContentColumn>

        <SectionDivider />

        <ContentColumn>
          <Part2Application />
        </ContentColumn>

        <SectionDivider />

        <ContentColumn>
          <Part3PostApplication />
        </ContentColumn>

        <ContentColumn>
          <div className="mt-14">
            <StatusPageFeatures />
          </div>
        </ContentColumn>

        <SectionDivider />

        <ContentColumn>
          <ImpactSection />
        </ContentColumn>

        <SectionDivider />

        <ContentColumn>
          <div className="pb-20">
            <ClosingSection />
          </div>
        </ContentColumn>
      </div>
    </main>
  );
};

export default IPOJourneyPage;
