"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { motion } from "framer-motion";

const DarkLabel = ({ label }: { label: string }) => (
  <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
    {label}
  </span>
);

const DarkDivider = () => (
  <hr className="mx-auto my-0 w-full max-w-[400px] border-t border-zinc-800" />
);

/* ─── Hero ──────────────────────────────────────────────── */

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 px-6 pb-20 pt-16 sm:px-10 lg:px-20">
    <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-violet-500/[0.07] blur-3xl" aria-hidden="true" />
    <div className="mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl"
      >
        <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl">
          Designing an Open Interest Trading Tool
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-zinc-400">
          Turning Stocks Explore into a place to research and trade.
        </p>
        <div className="mt-8 flex flex-wrap gap-6 text-sm">
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-600">
              Role
            </span>
            <span className="mt-1 block text-zinc-300">Product Designer</span>
          </div>
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-600">
              Platform
            </span>
            <span className="mt-1 block text-zinc-300">Mobile</span>
          </div>
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-600">
              Company
            </span>
            <span className="mt-1 block text-zinc-300">Groww</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── Context ───────────────────────────────────────────── */

const Context = () => (
  <section className="bg-zinc-950 px-6 py-20 sm:px-10 lg:px-20">
    <div className="mx-auto max-w-2xl">
      <AnimatedSection>
        <DarkLabel label="Context" />
        <p className="mt-6 text-base leading-relaxed text-zinc-400">
          In the stock market, most people react to what already happened. But
          the &quot;Big Players&quot; — the banks and institutions — leave clues
          about where they are moving their money before the price shifts. These
          clues are hidden in Open Interest (OI).
        </p>
        <p className="mt-4 text-base font-medium text-zinc-200">
          OI is a market X-ray. Direction of the market.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── What is OI ────────────────────────────────────────── */

const WhatIsOI = () => (
  <section className="bg-zinc-900 px-6 py-20 sm:px-10 lg:px-20">
    <div className="mx-auto max-w-2xl">
      <AnimatedSection>
        <DarkLabel label="What is Open Interest (OI)?" />
        <div className="mt-6 rounded-2xl border border-violet-500/20 bg-violet-500/[0.08] p-6">
          <p className="text-sm font-semibold text-violet-300">
            Let&apos;s understand with an example
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-8">
        <p className="text-base leading-relaxed text-zinc-400">
          Imagine a stadium full of mini tug-of-war matches happening at the
          same time. Each match has exactly two people: One backing Team Red, One
          backing Team Green.
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-lg" aria-hidden="true">👉</span>
            <p className="text-base text-zinc-400">
              <strong className="text-zinc-200">One match = 1 contract</strong>{" "}
              (1 active bet)
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-lg" aria-hidden="true">👉</span>
            <p className="text-base text-zinc-400">
              <strong className="text-zinc-200">
                Open Interest (OI) = total number of matches
              </strong>{" "}
              currently being played
            </p>
          </div>
        </div>

        <p className="mt-6 text-base leading-relaxed text-zinc-400">
          Only the matches still happening right now count — not the ones
          already finished.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.15} className="mt-10">
        <h3 className="text-lg font-bold text-zinc-100">How OI changes</h3>
        <div className="mt-4 space-y-3">
          {[
            {
              label: "OI ↑",
              text: "Two new people start a fresh match (new money enters the market)",
              color: "bg-emerald-500/20 text-emerald-400",
            },
            {
              label: "OI ↓",
              text: "A pair settles and leaves (positions closed, money exits)",
              color: "bg-red-500/20 text-red-400",
            },
            {
              label: "OI →",
              text: "One player swaps with another (position changes hands, but the bet is still active)",
              color: "bg-zinc-700 text-zinc-300",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-950 p-4"
            >
              <span
                className={`flex-shrink-0 rounded-lg px-2.5 py-1 text-xs font-bold ${item.color}`}
              >
                {item.label}
              </span>
              <p className="text-sm leading-relaxed text-zinc-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="mt-10">
        <h3 className="text-lg font-bold text-zinc-100">
          Why it is important in trading?
        </h3>
        <p className="mt-4 text-base leading-relaxed text-zinc-400">
          A price change alone doesn&apos;t tell you much. OI tells you
          who&apos;s behind it — fresh money entering the market, or existing
          players cashing out — which is what makes the move strong or weak.
        </p>
      </AnimatedSection>

      {/* OI Interpretation Table */}
      <AnimatedSection delay={0.25} className="mt-10">
        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
          <div className="grid grid-cols-[60px_60px_1fr] border-b border-zinc-800 bg-zinc-900">
            <div className="px-4 py-3 text-xs font-semibold text-zinc-500">
              Price
            </div>
            <div className="px-4 py-3 text-xs font-semibold text-zinc-500">
              OI
            </div>
            <div className="px-4 py-3 text-xs font-semibold text-zinc-500">
              What it means
            </div>
          </div>
          {[
            {
              price: "↑", oi: "↑",
              meaning: "New buyers joining → uptrend is strong",
              priceColor: "text-emerald-400", oiColor: "text-emerald-400",
            },
            {
              price: "↑", oi: "↓",
              meaning: "Old sellers leaving → uptrend is weak",
              priceColor: "text-emerald-400", oiColor: "text-red-400",
            },
            {
              price: "↓", oi: "↑",
              meaning: "New sellers joining → downtrend is strong",
              priceColor: "text-red-400", oiColor: "text-emerald-400",
            },
            {
              price: "↓", oi: "↓",
              meaning: "Old buyers leaving → downtrend is weak",
              priceColor: "text-red-400", oiColor: "text-red-400",
            },
          ].map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-[60px_60px_1fr] ${
                i < 3 ? "border-b border-zinc-800/60" : ""
              }`}
            >
              <div className={`flex items-center justify-center px-4 py-3.5 text-lg font-bold ${row.priceColor}`}>
                {row.price}
              </div>
              <div className={`flex items-center justify-center px-4 py-3.5 text-lg font-bold ${row.oiColor}`}>
                {row.oi}
              </div>
              <div className="px-4 py-3.5 text-sm text-zinc-400">
                {row.meaning}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.3} className="mt-8">
        <div className="rounded-xl border border-violet-500/20 bg-violet-500/[0.06] p-5">
          <p className="text-sm leading-relaxed text-zinc-300">
            <strong className="text-white">Price</strong> tells you what is
            happening.{" "}
            <strong className="text-white">OI</strong> tells you whether traders
            actually believe in it.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Problem ───────────────────────────────────────────── */

const Problem = () => (
  <section className="bg-zinc-950 px-6 py-20 sm:px-10 lg:px-20">
    <div className="mx-auto max-w-2xl">
      <AnimatedSection>
        <DarkLabel label="Problem" />
        <h2 className="mt-4 text-2xl font-bold text-zinc-100">
          OI data existed — but it was unusable
        </h2>
        <p className="mt-6 text-base leading-relaxed text-zinc-400">
          Currently on the platform we show OI in option chain/chart — very
          small bars just for indication but no detailed info is given anywhere.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-8">
        <p className="text-base leading-relaxed text-zinc-400">
          Also according to market analysis, standard trading tools show this
          data in massive, boring tables. Pre-market and post-market, that&apos;s
          fine — you have time to analyze. But in the heat of a fast trade,
          trying to read a spreadsheet is a great way to lose money.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.15} className="mt-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.06] p-5">
            <span className="text-xs font-semibold text-red-400">
              Our platform
            </span>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Tiny bars in option chain — no context, no actionable insight
            </p>
          </div>
          <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.06] p-5">
            <span className="text-xs font-semibold text-red-400">
              Competitors
            </span>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Massive spreadsheets — powerful data but impossible to read during
              live trading
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Solution ──────────────────────────────────────────── */

const Solution = () => (
  <section className="bg-zinc-900 px-6 py-20 sm:px-10 lg:px-20">
    <div className="mx-auto max-w-2xl">
      <AnimatedSection>
        <DarkLabel label="Solution" />
        <div className="mt-6 rounded-2xl border border-violet-500/30 bg-violet-500/[0.08] p-6">
          <p className="text-xl font-bold text-zinc-100">
            Create a tool where a trader can understand the market&apos;s
            &quot;mood&quot; in a blink of an eye.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Process ───────────────────────────────────────────── */

const Process = () => (
  <section className="bg-zinc-950 px-6 py-20 sm:px-10 lg:px-20">
    <div className="mx-auto max-w-2xl">
      <AnimatedSection>
        <DarkLabel label="Process" />
        <p className="mt-6 text-base leading-relaxed text-zinc-400">
          Before pixels hit the screen, I conducted a deep dive into how other
          platforms handle Open Interest. I found that the market was split into
          two extremes, leaving a massive gap for a better user experience.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-10">
        <h3 className="text-lg font-bold text-zinc-100">Market analysis</h3>
      </AnimatedSection>

      {/* Feature-Poor */}
      <AnimatedSection delay={0.15} className="mt-8">
        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] p-6">
          <span className="text-xs font-bold text-amber-400">
            The &quot;Feature-Poor&quot; Platforms
          </span>
          <p className="mt-3 text-base leading-relaxed text-zinc-400">
            Some players tried to keep it simple but ended up being useless.
            They lacked critical data Time-Basis tracking, leaving traders with
            an incomplete picture.
          </p>
          <div className="mt-4 rounded-xl border border-amber-500/10 bg-zinc-950/60 p-3">
            <p className="text-[10px] font-semibold text-zinc-500">
              Example: Upstox open interest tool
            </p>
            <div className="mt-2 h-24 rounded-lg bg-amber-500/[0.06]" />
          </div>
        </div>
      </AnimatedSection>

      {/* Data-Dump */}
      <AnimatedSection delay={0.2} className="mt-6">
        <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.06] p-6">
          <span className="text-xs font-bold text-red-400">
            The &quot;Data-Dump&quot; Platforms
          </span>
          <p className="mt-3 text-base leading-relaxed text-zinc-400">
            On the other end, professional tools were &quot;over-doing it.&quot;
            They were cluttered with 50 buttons, confusing jargon, and messy
            layouts. They were powerful, but they required a PhD to navigate.
          </p>
          <div className="mt-4 rounded-xl border border-red-500/10 bg-zinc-950/60 p-3">
            <p className="text-[10px] font-semibold text-zinc-500">
              Example: Sensibull open interest tool
            </p>
            <div className="mt-2 h-24 rounded-lg bg-red-500/[0.06]" />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.25} className="mt-8">
        <div className="rounded-xl border border-violet-500/20 bg-violet-500/[0.06] p-5">
          <p className="text-sm leading-relaxed text-zinc-300">
            <strong className="text-white">The gap:</strong> Nobody was building
            a tool that had the{" "}
            <strong className="text-violet-300">&quot;muscle&quot;</strong> of a
            professional platform but the{" "}
            <strong className="text-violet-300">&quot;cleanliness&quot;</strong>{" "}
            of a consumer app.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Design Solution ───────────────────────────────────── */

const DesignSolution = () => (
  <section className="bg-zinc-900 px-6 py-20 sm:px-10 lg:px-20">
    <div className="mx-auto max-w-2xl">
      <AnimatedSection>
        <DarkLabel label="The Design Solution: Sophisticated Simplicity" />
        <p className="mt-6 text-base leading-relaxed text-zinc-400">
          My goal was to bridge this gap. I wanted to build a tool that had the
          &quot;muscle&quot; of a professional platform but the
          &quot;cleanliness&quot; of a consumer app.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-8">
        <div className="rounded-2xl border border-violet-500/20 bg-violet-500/[0.06] p-6">
          <h3 className="text-lg font-bold text-zinc-100">
            The Philosophy: &quot;Don&apos;t Make Me Think&quot;
          </h3>
          <p className="mt-3 text-base leading-relaxed text-zinc-400">
            In trading, cognitive load is the enemy. By choosing the
            visual-first approach, I stripped away the &quot;noise.&quot; I
            didn&apos;t just give users more data; I gave them better clarity. We
            focused on making the most important numbers impossible to miss.
          </p>
        </div>
      </AnimatedSection>

      {/* Key Distinctions */}
      <AnimatedSection delay={0.15} className="mt-12">
        <h3 className="text-lg font-bold text-zinc-100">Key distinctions</h3>
        <p className="mt-2 text-sm text-zinc-500">
          These were the choices that made the biggest impact.
        </p>
      </AnimatedSection>

      {/* 1. Color & Pattern Language */}
      <AnimatedSection delay={0.2} className="mt-8">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <h4 className="text-base font-bold text-zinc-100">
            1. Color & Pattern Language for Call vs Put OI
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            Calls and Puts are the two sides of every options trade — confusing
            them is a real, costly mistake. We built a clear visual language:
            distinct colors for Call vs Put bars, distinct patterns for OI
            increase vs decrease.
          </p>

          <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900 p-5">
            <div className="flex items-end justify-center gap-3">
              {[
                { call: 65, put: 45 },
                { call: 80, put: 55 },
                { call: 50, put: 70 },
                { call: 90, put: 40 },
                { call: 60, put: 85 },
                { call: 75, put: 50 },
                { call: 45, put: 65 },
                { call: 85, put: 35 },
                { call: 55, put: 75 },
                { call: 70, put: 60 },
              ].map((bar, i) => (
                <div key={i} className="flex items-end gap-0.5">
                  <div
                    className="w-2 rounded-t-sm bg-emerald-500"
                    style={{ height: `${bar.call * 0.8}px` }}
                  />
                  <div
                    className="w-2 rounded-t-sm bg-rose-500"
                    style={{ height: `${bar.put * 0.8}px` }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-sm bg-emerald-500" />
                <span className="text-[10px] text-zinc-500">Call OI</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-sm bg-rose-500" />
                <span className="text-[10px] text-zinc-500">Put OI</span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm italic text-zinc-500">
            A trader can read the entire chart&apos;s story — who&apos;s buying,
            who&apos;s selling, on which side — without reading a single number.
          </p>
        </div>
      </AnimatedSection>

      {/* 2. Smart Labels */}
      <AnimatedSection delay={0.1} className="mt-6">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <h4 className="text-base font-bold text-zinc-100">
            2. Smart Labels — &quot;Strong Support&quot; / &quot;Strong Resistance&quot;
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            Instead of forcing users to scan every strike and figure out which
            ones matter, the tool calls them out directly. Tags like
            &quot;Strong Support&quot; and &quot;Strong Resistance&quot; sit
            right on the most important bars.
          </p>

          <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900 p-5">
            <div className="relative flex items-end justify-center gap-3">
              {[40, 55, 70, 90, 60, 45, 80, 65, 50, 35, 75].map((h, i) => (
                <div key={i} className="relative flex items-end gap-0.5">
                  <div
                    className={`w-2 rounded-t-sm ${i === 3 ? "bg-emerald-500" : "bg-emerald-500/50"}`}
                    style={{ height: `${h * 0.7}px` }}
                  />
                  <div
                    className={`w-2 rounded-t-sm ${i === 6 ? "bg-rose-500" : "bg-rose-500/50"}`}
                    style={{ height: `${(100 - h) * 0.5}px` }}
                  />
                  {i === 3 && (
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-emerald-500 px-1.5 py-0.5 text-[7px] font-bold text-white">
                      Strong Support
                    </span>
                  )}
                  {i === 6 && (
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-rose-500 px-1.5 py-0.5 text-[7px] font-bold text-white">
                      Strong Resistance
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-sm italic text-zinc-500">
            The user doesn&apos;t go looking for the signal — the signal finds them.
          </p>
        </div>
      </AnimatedSection>

      {/* 3. PCR Gauge */}
      <AnimatedSection delay={0.1} className="mt-6">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <h4 className="text-base font-bold text-zinc-100">
            3. The Sentiment Pulse — PCR Gauge
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            I placed the Put-Call Ratio (PCR) in the top-right &quot;Prime Real Estate.&quot;
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            Instead of just a raw number, the gauge includes a clear text badge
            (e.g., &quot;1.22 Bullish&quot;). This gives the trader a
            &quot;Market Pulse&quot; the moment the page loads, setting the
            context for the rest of their analysis.
          </p>

          <div className="mt-6 flex justify-center">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <div className="flex flex-col items-center">
                <div className="relative h-20 w-40 overflow-hidden">
                  <div className="absolute inset-0 rounded-t-full border-[6px] border-b-0 border-zinc-700" />
                  <div
                    className="absolute inset-0 rounded-t-full border-[6px] border-b-0 border-emerald-500"
                    style={{ clipPath: "polygon(0 0, 70% 0, 70% 100%, 0 100%)" }}
                  />
                </div>
                <div className="-mt-2 text-center">
                  <span className="text-2xl font-bold text-zinc-100">1.22</span>
                  <span className="ml-2 rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-bold text-emerald-400">
                    Bullish
                  </span>
                </div>
                <p className="mt-2 text-[10px] text-zinc-500">Put-Call Ratio (PCR)</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 4. Time-Based Views */}
      <AnimatedSection delay={0.1} className="mt-6">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <h4 className="text-base font-bold text-zinc-100">
            4. Time-Based Views — Intraday & Historical
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            OI data changes every minute during live trading. A trader needs two
            lenses: what&apos;s happening <em className="text-zinc-300">right now</em> (intraday) and
            what&apos;s been building over <em className="text-zinc-300">days</em> (historical). We gave
            both in one screen, toggled with a single tap.
          </p>

          <div className="mt-6 flex justify-center">
            <div className="flex rounded-full border border-zinc-700 bg-zinc-800 p-1">
              <span className="rounded-full bg-violet-500/20 px-4 py-1.5 text-xs font-semibold text-violet-300">
                Intraday
              </span>
              <span className="px-4 py-1.5 text-xs text-zinc-500">
                Historical
              </span>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900 p-5">
            <div className="flex items-center justify-between text-[10px] text-zinc-600">
              <span>9:15 AM</span>
              <span>11:00 AM</span>
              <span>1:00 PM</span>
              <span>3:30 PM</span>
            </div>
            <div className="mt-2 flex items-end justify-around gap-1">
              {[30, 45, 55, 40, 65, 50, 70, 60, 75, 55, 80, 65, 70].map(
                (h, i) => (
                  <div key={i} className="flex items-end gap-px">
                    <div
                      className="w-1.5 rounded-t-sm bg-emerald-500/70"
                      style={{ height: `${h * 0.6}px` }}
                    />
                    <div
                      className="w-1.5 rounded-t-sm bg-rose-500/70"
                      style={{ height: `${(100 - h) * 0.4}px` }}
                    />
                  </div>
                )
              )}
            </div>
          </div>

          <p className="mt-4 text-sm italic text-zinc-500">
            One screen, three perspectives — chosen by the trader, not forced by the layout.
          </p>
        </div>
      </AnimatedSection>

      {/* 5. OI Action Cues */}
      <AnimatedSection delay={0.1} className="mt-6">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <h4 className="text-base font-bold text-zinc-100">
            5. OI Action Cues on the Chart
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            This was quietly the most important one. Visual cues directly on the
            chart show what&apos;s happening at each strike — long buildup,
            short covering, fresh shorts, unwinding — without the trader needing
            to compare numbers across rows.
          </p>

          <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900 p-5">
            <div className="relative flex items-end justify-center gap-2">
              {[
                { h: 50, label: "SC" },
                { h: 70, label: null },
                { h: 85, label: "SB" },
                { h: 40, label: null },
                { h: 65, label: "LU" },
                { h: 90, label: "SB" },
                { h: 30, label: "SC" },
                { h: 55, label: null },
                { h: 75, label: "LB" },
                { h: 60, label: null },
              ].map((bar, i) => (
                <div key={i} className="relative flex flex-col items-center">
                  {bar.label && (
                    <span
                      className={`mb-1 rounded px-1 py-px text-[7px] font-bold ${
                        bar.label === "SB" || bar.label === "LB"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-rose-500/20 text-rose-400"
                      }`}
                    >
                      {bar.label}
                    </span>
                  )}
                  <div className="flex items-end gap-0.5">
                    <div
                      className="w-2 rounded-t-sm bg-emerald-500"
                      style={{ height: `${bar.h * 0.6}px` }}
                    />
                    <div
                      className="w-2 rounded-t-sm bg-rose-500"
                      style={{ height: `${(100 - bar.h) * 0.5}px` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-3 text-[10px] text-zinc-500">
              <span><strong className="text-emerald-400">SB</strong> Short Buildup</span>
              <span><strong className="text-emerald-400">LB</strong> Long Buildup</span>
              <span><strong className="text-rose-400">SC</strong> Short Covering</span>
              <span><strong className="text-rose-400">LU</strong> Long Unwinding</span>
            </div>
          </div>

          <p className="mt-4 text-sm italic text-zinc-500">
            You glance. You know the trend at that strike. You move on.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Results ───────────────────────────────────────────── */

const Results = () => {
  const metrics = [
    { metric: "Daily users", result: "1 in 3 use it daily", meaning: "One of the most used tools" },
    { metric: "Traders using it", result: "1 in 3 check before trading", meaning: "Impacts real trades" },
    { metric: "Clicks per user", result: "3.8 (highest)", meaning: "High engagement" },
    { metric: "Retention", result: "30.8% return often", meaning: "People build a habit" },
  ];

  return (
    <section className="bg-zinc-950 px-6 py-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-2xl">
        <AnimatedSection>
          <DarkLabel label="The Result" />
          <p className="mt-6 text-base leading-relaxed text-zinc-400">
            What started as a fix for messy data became a go-to tool for making
            trading decisions.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-12">
          <h3 className="text-lg font-bold text-zinc-100">
            <span className="mr-2">👤</span>For users
          </h3>
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="text-sm font-bold text-violet-400">Faster decisions</h4>
              <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                Users stopped reading rows of numbers and started understanding the market at a glance.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-violet-400">More clarity, less guesswork</h4>
              <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                Seeing high OI zones helped users know where big money is and what matters.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-violet-400">Helps users learn</h4>
              <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                With past data, users could review moves, test ideas, and improve over time.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="mt-12">
          <h3 className="text-lg font-bold text-zinc-100">
            <span className="mr-2">📈</span>For the business
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500">
            The tool wasn&apos;t just explored — people started using it every day while trading.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
            <div className="grid grid-cols-3 border-b border-zinc-800 bg-zinc-900/50">
              <div className="px-4 py-3 text-xs font-semibold text-zinc-500">Metric</div>
              <div className="px-4 py-3 text-xs font-semibold text-zinc-500">Result</div>
              <div className="px-4 py-3 text-xs font-semibold text-zinc-500">Meaning</div>
            </div>
            {metrics.map((row, i) => (
              <motion.div
                key={row.metric}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`grid grid-cols-3 ${i < metrics.length - 1 ? "border-b border-zinc-800/60" : ""}`}
              >
                <div className="px-4 py-3.5 text-sm font-medium text-zinc-300">{row.metric}</div>
                <div className="px-4 py-3.5 text-sm font-semibold text-violet-400">{row.result}</div>
                <div className="px-4 py-3.5 text-sm text-zinc-500">{row.meaning}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

/* ─── Footer ────────────────────────────────────────────── */

const Footer = () => (
  <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-10 text-center">
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-300"
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

const OpenInterestPage = () => {
  return (
    <main className="min-h-screen bg-zinc-950">
      {/* Navigation */}
      <nav
        className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 px-6 py-3 backdrop-blur-md"
        aria-label="Case study navigation"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-zinc-500 transition-colors hover:text-zinc-300"
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
            <div className="h-4 w-4 rounded-full bg-gradient-to-br from-violet-400 to-purple-500" />
            <span className="text-sm font-semibold text-zinc-300">
              Groww OI Tool
            </span>
          </div>
        </div>
      </nav>

      <Hero />
      <DarkDivider />
      <Context />
      <WhatIsOI />
      <DarkDivider />
      <Problem />
      <Solution />
      <DarkDivider />
      <Process />
      <DarkDivider />
      <DesignSolution />
      <DarkDivider />
      <Results />
      <Footer />
    </main>
  );
};

export default OpenInterestPage;
