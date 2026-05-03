"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import Divider from "@/components/Divider";
import MetricCard from "@/components/MetricCard";
import ResultsTable from "@/components/ResultsTable";
import ProgressBar from "@/components/ProgressBar";
import HeroMockup from "@/components/HeroMockup";
import ExploreBeforeMockup from "@/components/ExploreBeforeMockup";
import MobileMockup from "@/components/MobileMockup";
import Link from "next/link";
import { motion } from "framer-motion";

/* ─── Hero ──────────────────────────────────────────────── */

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white px-6 pb-20 pt-16 sm:px-10 lg:px-20">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-md flex-1"
      >
        <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.25rem]">
          Making Stock Discovery Easy on Groww
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-zinc-500">
          Turning Stocks Explore into a place to research and trade.
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
            <span className="mt-1 block text-zinc-600">Web & Mobile</span>
          </div>
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Duration
            </span>
            <span className="mt-1 block text-zinc-600">3 months</span>
          </div>
        </div>
      </motion.div>

      {/* Mockup */}
      <div className="flex-1">
        <HeroMockup />
      </div>
    </div>
  </section>
);

/* ─── Context ───────────────────────────────────────────── */

const Context = () => (
  <section className="px-6 py-20 sm:px-10 lg:px-20">
    <div className="mx-auto max-w-2xl">
      <AnimatedSection>
        <SectionLabel label="Context" />
        <p className="mt-6 text-base leading-relaxed text-zinc-600">
          Groww grows in transacting users every quarter. Users came to Groww
          only to trade. Everything before that — the research, the comparison,
          the decision — happened somewhere else.
        </p>
        <p className="mt-5 text-base leading-relaxed text-zinc-600">
          To find out what was working on Groww for the users, we looked at the
          data and noticed:{" "}
          <strong className="text-zinc-800">
            60% of orders from Stocks Explore came from just two sections
          </strong>
          : Top Market Movers and Most Bought on Stocks Explore.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.15} className="mt-12">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">
          Most used sections on Stocks Explore
        </p>
        <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <ProgressBar label="Top Market Movers" value={38} delay={0} />
          <ProgressBar label="Most Bought on Groww" value={22} delay={0.1} />
          <ProgressBar label="Sectors trending today" value={14} delay={0.2} />
          <ProgressBar
            label="ETFs by Groww"
            value={10}
            color="bg-zinc-300"
            delay={0.3}
          />
          <ProgressBar
            label="Stocks in news"
            value={8}
            color="bg-zinc-300"
            delay={0.4}
          />
          <ProgressBar
            label="Others"
            value={8}
            color="bg-zinc-200"
            delay={0.5}
          />
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Data Insight ──────────────────────────────────────── */

const DataInsight = () => (
  <section className="bg-zinc-50 px-6 py-20 sm:px-10 lg:px-20">
    <div className="mx-auto max-w-2xl">
      <AnimatedSection>
        <SectionLabel label="Data insight" />
        <p className="mt-6 text-base leading-relaxed text-zinc-600">
          This meant that the rest of the page — sections like Sectors, ETFs,
          News — wasn&apos;t giving users enough reasons to scroll down, let alone
          interact.
        </p>
        <p className="mt-5 text-base leading-relaxed text-zinc-600">
          But the traffic was there:{" "}
          <strong className="text-zinc-800">
            2.8M users visit Explore every day — roughly 35% of app DAU.
          </strong>{" "}
          There was a real opportunity: if we could make the rest of the page
          useful, users wouldn&apos;t need to leave Groww for research.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.15} className="mt-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <MetricCard value="2.8M" label="Daily Explore visitors" delay={0} />
          <MetricCard value="35%" label="of total app DAU" delay={0.1} />
          <MetricCard
            value="60%"
            label="Orders from just 2 sections"
            delay={0.2}
          />
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Problem Statement ─────────────────────────────────── */

const ProblemStatement = () => (
  <section className="px-6 py-20 sm:px-10 lg:px-20">
    <div className="mx-auto max-w-2xl">
      <AnimatedSection>
        <SectionLabel label="Problem" />
        <h2 className="mt-4 text-2xl font-bold text-zinc-900">
          Stock Explore was a dead-end — not a starting point
        </h2>
        <div className="mt-6 rounded-2xl border border-red-100 bg-red-50/50 p-6">
          <p className="text-base leading-relaxed text-zinc-700">
            We were missing users at the start of their journey. People
            weren&apos;t spending much time in the app — they were leaving to
            research elsewhere.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-8">
        <ul className="space-y-4 text-base leading-relaxed text-zinc-600">
          <li className="flex gap-3">
            <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-[10px] font-bold text-red-500">
              1
            </span>
            <span>
              <strong className="text-zinc-800">No research layer.</strong>{" "}
              Users couldn&apos;t compare, filter, or deep-dive into stocks
              without leaving the app.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-[10px] font-bold text-red-500">
              2
            </span>
            <span>
              <strong className="text-zinc-800">One-size-fits-all.</strong>{" "}
              Beginners and experienced traders saw the same generic surface.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-[10px] font-bold text-red-500">
              3
            </span>
            <span>
              <strong className="text-zinc-800">Shallow news.</strong> Giving
              just stock tickers when they trend in news was bland — no context
              on what the news was about or why it mattered.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-[10px] font-bold text-red-500">
              4
            </span>
            <span>
              <strong className="text-zinc-800">No trading signals.</strong>{" "}
              Active traders couldn&apos;t find volume spikes, breakout patterns,
              or strategy-based screens.
            </span>
          </li>
        </ul>
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="mt-10">
        <SectionLabel label="Solution" />
        <p className="mt-6 text-base leading-relaxed text-zinc-600">
          We picked Stocks Explore and decided to add more collections because it
          was already the place users came to when they didn&apos;t know what to
          buy — it just wasn&apos;t doing its job. We decided to make a single
          place where users can research, discover, and trade — without leaving
          the app.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Understanding Users ───────────────────────────────── */

const UnderstandingUsers = () => {
  const userTypes = [
    {
      emoji: "🤓",
      title: "Beginners",
      desc: "New to investing. They don't know where to start, what to look for, or how to read the market. They need ideas, not data.",
      category: "beginner",
    },
    {
      emoji: "🥸",
      title: "Experienced traders",
      desc: "They know what they want. They have a strategy and just need quick access to the right information to act on it.",
      category: "experienced",
    },
    {
      emoji: "📊",
      title: "Intraday traders",
      desc: "Buy and sell within the same day. They watch for sudden spikes in volume and price.",
      category: "experienced",
    },
    {
      emoji: "📈",
      title: "Technical traders",
      desc: "Rely on chart patterns and indicators like RSI, MACD, and Breakouts to decide.",
      category: "experienced",
    },
    {
      emoji: "📰",
      title: "News followers",
      desc: "Track how industries and the broader market are moving, and pick stocks based on those trends.",
      category: "experienced",
    },
  ];

  return (
    <section className="bg-zinc-50 px-6 py-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-2xl">
        <AnimatedSection>
          <SectionLabel label="Understanding our users" />
          <h2 className="mt-4 text-2xl font-bold text-zinc-900">
            Understanding our users
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            Groww has a wide mix of users — from someone placing their first
            trade to someone who lives on the charts. We grouped them into two
            broad types, with a few specific styles inside.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2">
            {userTypes.map((user, i) => (
              <motion.div
                key={user.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`rounded-2xl border p-5 ${
                  user.category === "beginner"
                    ? "col-span-1 border-emerald-200 bg-emerald-50/50 sm:col-span-2"
                    : "border-zinc-200 bg-white"
                }`}
              >
                <span className="text-2xl">{user.emoji}</span>
                <h3 className="mt-2 text-sm font-bold text-zinc-800">
                  {user.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">
                  {user.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-12">
          <h3 className="text-lg font-bold text-zinc-900">
            What this meant for design?
          </h3>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            Each group needed something different on the same screen. So instead
            of one generic &quot;explore&quot; feed, we had to build separate
            collections — each one shaped around how that user actually thinks.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

/* ─── Ideal Solution ────────────────────────────────────── */

const IdealSolution = () => (
  <section className="px-6 py-20 sm:px-10 lg:px-20">
    <div className="mx-auto max-w-2xl">
      <AnimatedSection>
        <div className="text-center">
          <span className="text-3xl">💡</span>
          <h2 className="mt-3 text-2xl font-bold text-zinc-900">
            The ideal solution
          </h2>
        </div>
        <p className="mt-6 text-base leading-relaxed text-zinc-600">
          A fully personalised Stocks Explore, different for every user.
        </p>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">
          In theory, we could take existing user data, analyse trading patterns,
          and surface stocks that match each person&apos;s behaviour. For
          existing users, that&apos;s doable. But new users are a different
          problem — some know investing, some don&apos;t. Even if we ask them
          what they want upfront during onboarding, a beginner often doesn&apos;t
          know the answer yet and might feel overwhelmed.
        </p>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">
          And beyond the user problem, personalisation at that scale is expensive
          — in data, engineering, and time.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-8">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6">
          <p className="text-sm font-semibold text-emerald-700">
            So we asked a simpler question first:
          </p>
          <p className="mt-2 text-base font-bold text-zinc-800">
            If we added more, better collections to Stocks Explore — would users
            actually use them?
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            That answer would tell us whether the demand was there before we
            committed to building something much bigger. New collections were our
            way to validate the need, and lay the foundation for personalisation
            later.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Design Philosophies ───────────────────────────────── */

const DesignPhilosophies = () => {
  const principles = [
    {
      text: "Everyone uses our app: We have experienced traders who know exactly what they want, and also beginners who need a lot of help and ideas. Our new features had to work for everyone.",
    },
    {
      text: "Keep it simple: Groww likes to keep things simple, even when the topic is complicated like finance. So, our new features needed to offer deep info without being confusing or overwhelming.",
    },
    {
      text: "Easy to find stocks: We needed to make it super easy for users to find and understand stocks without leaving our app.",
    },
    {
      text: "Don't overload the data: Too much information can scare people away. We had to show enough, but not too much.",
    },
    {
      text: "Make them come back: We wanted users to visit the Explore page every day to stay updated on the market.",
    },
  ];

  return (
    <section className="bg-zinc-50 px-6 py-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-2xl">
        <AnimatedSection>
          <SectionLabel label="Design Principles" />
          <h2 className="mt-4 text-2xl font-bold text-zinc-900">
            Design philosophies to keep in mind
          </h2>
        </AnimatedSection>

        <div className="mt-8 space-y-3">
          {principles.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="rounded-xl border border-zinc-200 bg-white p-5">
                <p className="text-sm leading-relaxed text-zinc-600">
                  {p.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Collection Deep Dives ─────────────────────────────── */

const CollectionDeepDives = () => (
  <section className="px-6 py-20 sm:px-10 lg:px-20">
    <div className="mx-auto max-w-2xl">
      <AnimatedSection>
        <div className="text-center">
          <span className="text-3xl">🥁</span>
          <SectionLabel label="New Stocks Explore Collections" />
        </div>
        <p className="mt-6 text-base leading-relaxed text-zinc-600">
          We wanted each collection to be unique and not look like a copy of
          another. We also made sure to show the right kind of information for
          each section — not just price and price change like we&apos;re doing
          in Most Bought and Top Movers today.
        </p>
      </AnimatedSection>

      {/* Volume Shockers */}
      <AnimatedSection delay={0.1} className="mt-12">
        <h3 className="text-xl font-bold text-zinc-900">Volume shockers</h3>
        <p className="mt-3 text-base leading-relaxed text-zinc-600">
          Instead of just showing stock prices, we focused on how much trading
          volume happened today compared to the average. Intraday users look at
          these stocks to find sudden big spikes — they don&apos;t care about
          just the price.
        </p>
        <div className="mt-6 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-5">
          <div className="space-y-3">
            {[
              { name: "Stock A", vol: "12.4x", price: "+3.2%", bar: 95 },
              { name: "Stock B", vol: "8.7x", price: "-1.1%", bar: 72 },
              { name: "Stock C", vol: "6.2x", price: "+5.8%", bar: 55 },
              { name: "Stock D", vol: "4.1x", price: "+0.4%", bar: 38 },
            ].map((s) => (
              <div key={s.name} className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-white/70 shadow-sm" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-zinc-700">
                      {s.name}
                    </span>
                    <span className="text-xs font-bold text-amber-600">
                      {s.vol} avg vol
                    </span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/50">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.bar}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="h-full rounded-full bg-amber-400"
                    />
                  </div>
                </div>
                <span
                  className={`text-[10px] font-semibold ${
                    s.price.startsWith("+")
                      ? "text-emerald-500"
                      : "text-red-400"
                  }`}
                >
                  {s.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Trading Screens */}
      <AnimatedSection delay={0.15} className="mt-12">
        <h3 className="text-xl font-bold text-zinc-900">Trading screens</h3>
        <p className="mt-3 text-base leading-relaxed text-zinc-600">
          For technical-based collections, we decided to show the names of
          popular strategies (like &quot;RSI&quot; or &quot;Breakouts&quot;)
          first. Users could then click on a strategy to see the stocks related
          to it. This way, users can pick a strategy they understand first,
          instead of being overwhelmed by a list of random stock names.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            { strategy: "Stocks near breakout", tag: "Bullish", color: "emerald" },
            { strategy: "MACD above signal line", tag: "Bullish", color: "emerald" },
            { strategy: "Oversold with high volume", tag: "Bullish", color: "emerald" },
            { strategy: "Overbought with high volume", tag: "Bearish", color: "red" },
            { strategy: "RSI oversold", tag: "Bullish", color: "emerald" },
            { strategy: "Volume shockers", tag: "Bearish", color: "red" },
          ].map((s, i) => (
            <motion.div
              key={s.strategy}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl border border-zinc-200 bg-white p-4"
            >
              <span
                className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                  s.color === "emerald"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-red-50 text-red-500"
                }`}
              >
                {s.tag}
              </span>
              <p className="mt-2 text-sm font-medium text-zinc-700">
                {s.strategy}
              </p>
              <div className="mt-2 flex items-end gap-0.5">
                {[30, 45, 25, 55, 40, 60, 35, 50, 65, 70].map((h, j) => (
                  <div
                    key={j}
                    className={`w-1.5 rounded-sm ${
                      s.color === "emerald" ? "bg-emerald-200" : "bg-red-200"
                    }`}
                    style={{ height: `${h * 0.25}px` }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Intraday Screener */}
      <AnimatedSection delay={0.2} className="mt-12">
        <h3 className="text-xl font-bold text-zinc-900">Intraday screener</h3>
        <p className="mt-3 text-base leading-relaxed text-zinc-600">
          We built a screener specially for intraday traders to give them the
          technicals they use to find stocks.
        </p>
      </AnimatedSection>

      {/* Sectors */}
      <AnimatedSection delay={0.25} className="mt-12">
        <h3 className="text-xl font-bold text-zinc-900">
          Sector performance
        </h3>
        <p className="mt-3 text-base leading-relaxed text-zinc-600">
          On the main page, we only show the top 2 best-performing sectors and
          top 2 worst-performing sectors. This prevents too much information at
          once. We show the percentage change in price for that sector today.
          Users can then click into a sector to see all the stocks within it.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Current State ─────────────────────────────────────── */

const CurrentState = () => (
  <section className="px-6 py-20 sm:px-10 lg:px-20">
    <div className="mx-auto max-w-2xl">
      <AnimatedSection>
        <SectionLabel label="Current state of Explore" />
        <h2 className="mt-4 text-2xl font-bold text-zinc-900">
          What the page looked like before
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">
          The existing Explore page had basic sections — Most Traded, Top Movers,
          Sectors, ETFs, and News. But they were all flat lists with minimal
          context.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.15} className="mt-10">
        <ExploreBeforeMockup />
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Problem ───────────────────────────────────────────── */

/* ─── Approach ──────────────────────────────────────────── */

const Approach = () => (
  <section className="px-6 py-20 sm:px-10 lg:px-20">
    <div className="mx-auto max-w-2xl">
      <AnimatedSection>
        <SectionLabel label="Our Approach" />
        <h2 className="mt-4 text-2xl font-bold text-zinc-900">
          Build layers of depth for every user type
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">
          Instead of redesigning the full page at once, we treated each section
          as an independent &quot;collection&quot; — a mini product on its own. Each
          collection needed to answer three questions:
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              q: "What is this?",
              desc: "Clear section titles and context labels so users know what they're looking at instantly.",
              icon: "👁️",
            },
            {
              q: "Why should I care?",
              desc: "Relevant data, trends, and signals that make each section worth exploring.",
              icon: "💡",
            },
            {
              q: "What can I do?",
              desc: "Direct paths to trade, add to watchlist, or dig deeper — from every card.",
              icon: "🎯",
            },
          ].map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-zinc-200 bg-white p-5"
            >
              <span className="text-2xl">{item.icon}</span>
              <h3 className="mt-3 text-sm font-bold text-zinc-800">
                {item.q}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── New Collections ───────────────────────────────────── */

const NewCollections = () => {
  const collections = [
    {
      title: "Trading Screens",
      desc: "Strategy-based views for active traders — stocks near breakout, MACD signal crosses, volume shockers, overbought/oversold signals.",
      tags: ["Bullish", "Bearish"],
      color: "from-emerald-50 to-teal-50",
      border: "border-emerald-200",
    },
    {
      title: "Sector Performance",
      desc: "Real advance/decline ratios, not just price changes. Users see how many stocks in a sector are up vs down, with visual indicators.",
      tags: ["Advance", "Decline"],
      color: "from-blue-50 to-indigo-50",
      border: "border-blue-200",
    },
    {
      title: "Volume Shockers",
      desc: "Stocks with unusual volume spikes — a key signal for intraday traders who rely on volume for entry/exit decisions.",
      tags: ["High Volume", "Spike"],
      color: "from-amber-50 to-orange-50",
      border: "border-amber-200",
    },
    {
      title: "News with Context",
      desc: "Not just 'Stock X is trending' — show the headline, the impact, and whether the news is positive or negative for the stock.",
      tags: ["Breaking", "Impact"],
      color: "from-rose-50 to-pink-50",
      border: "border-rose-200",
    },
  ];

  return (
    <section className="bg-zinc-50 px-6 py-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-2xl">
        <AnimatedSection>
          <SectionLabel label="New Collections" />
          <h2 className="mt-4 text-2xl font-bold text-zinc-900">
            Building collections that serve different user types
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            We introduced new collections tailored for different trading styles —
            from beginners who need curated sectors to pros who need volume and
            strategy signals.
          </p>
        </AnimatedSection>

        <div className="mt-10 space-y-4">
          {collections.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.08}>
              <div
                className={`rounded-2xl border bg-gradient-to-r p-6 ${c.color} ${c.border}`}
              >
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/80 px-2.5 py-0.5 text-[10px] font-semibold text-zinc-600 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 text-lg font-bold text-zinc-800">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {c.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── News Redesign ─────────────────────────────────────── */

const NewsRedesign = () => (
  <section className="px-6 py-20 sm:px-10 lg:px-20">
    <div className="mx-auto max-w-2xl">
      <AnimatedSection>
        <SectionLabel label="News Revamp" />
        <h2 className="mt-4 text-2xl font-bold text-zinc-900">
          New looks of new collections
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">
          Giving just the stocks when they are trending in news makes it bland —
          news could be about anything. Is it relevant? If yes, what is the news
          about? That&apos;s why we revamped the news section to show stocks with
          news context, impact indicators, and actionable CTAs.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.15} className="mt-10">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          {/* Before */}
          <div className="flex-1">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Before
            </p>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
              <p className="mb-2 text-[10px] font-semibold text-zinc-600">
                Stocks in news today
              </p>
              <div className="space-y-2">
                {["HDFC Bank", "Reliance Ind.", "TCS Ltd"].map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-2 rounded-lg bg-zinc-50 p-2"
                  >
                    <div className="h-6 w-6 rounded-full bg-zinc-200" />
                    <div>
                      <p className="text-[9px] font-medium text-zinc-700">
                        {s}
                      </p>
                      <p className="text-[7px] text-zinc-400">Trending</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center py-4 sm:pt-16" aria-hidden="true">
            <svg
              className="h-8 w-8 rotate-90 text-zinc-300 sm:rotate-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>

          {/* After */}
          <div className="flex-1">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-emerald-500">
              After
            </p>
            <div className="rounded-2xl border border-emerald-200 bg-white p-4 shadow-sm">
              <p className="mb-2 text-[10px] font-semibold text-zinc-600">
                Stocks in news today
              </p>
              <div className="space-y-2">
                {[
                  {
                    stock: "GMR Power",
                    headline: "Subsidiary bags ₹5,123 Cr UP govt contract",
                    impact: "positive",
                  },
                  {
                    stock: "Oil India",
                    headline: "Approves ₹1,738 Cr equity for NE Gas Dist.",
                    impact: "positive",
                  },
                  {
                    stock: "Tata Motors",
                    headline: "JLR sales down 12% in Q4 reports",
                    impact: "negative",
                  },
                ].map((item) => (
                  <div
                    key={item.stock}
                    className="rounded-lg border border-zinc-100 bg-zinc-50 p-2.5"
                  >
                    <div className="mb-1 flex items-center gap-1.5">
                      <span className="text-[7px] text-zinc-400">
                        In the news &bull; 4h
                      </span>
                    </div>
                    <p className="text-[9px] font-medium leading-tight text-zinc-800">
                      {item.headline}
                    </p>
                    <div className="mt-1.5 flex items-center gap-2">
                      <span
                        className={`rounded-full px-1.5 py-px text-[7px] font-semibold ${
                          item.impact === "positive"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-red-50 text-red-500"
                        }`}
                      >
                        {item.impact === "positive" ? "↑ Positive" : "↓ Negative"}
                      </span>
                      <span className="text-[7px] font-medium text-zinc-500">
                        {item.stock}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Final Design ──────────────────────────────────────── */

const FinalDesign = () => (
  <section className="bg-zinc-50 px-6 py-20 sm:px-10 lg:px-20">
    <div className="mx-auto max-w-2xl">
      <AnimatedSection>
        <SectionLabel label="Final Look" />
        <h2 className="mt-4 text-2xl font-bold text-zinc-900">
          The redesigned Explore
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">
          Our aim was to give enough useful information without making it too
          complicated. Each section had its own look and showed specific data.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.15} className="mt-10">
        <MobileMockup />
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Testing ───────────────────────────────────────────── */

const Testing = () => (
  <section className="px-6 py-20 sm:px-10 lg:px-20">
    <div className="mx-auto max-w-2xl">
      <AnimatedSection>
        <SectionLabel label="Testing & Rollout" />
        <p className="mt-6 text-base leading-relaxed text-zinc-600">
          We first tested with an internal roll out, then after the green flag, we
          eventually rolled it out to 100% users.
        </p>
        <div className="mt-8 flex items-center gap-4">
          {["Internal Alpha", "Beta (10%)", "Gradual Rollout", "100% Users"].map(
            (step, i) => (
              <div key={step} className="flex items-center gap-2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                    i === 3
                      ? "bg-emerald-500 text-white"
                      : "bg-zinc-100 text-zinc-500"
                  }`}
                >
                  {i + 1}
                </motion.div>
                <span className="hidden text-xs text-zinc-500 sm:block">
                  {step}
                </span>
                {i < 3 && (
                  <div className="hidden h-px w-4 bg-zinc-200 sm:block" aria-hidden="true" />
                )}
              </div>
            )
          )}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Results ───────────────────────────────────────────── */

const Results = () => (
  <section className="bg-zinc-900 px-6 py-20 text-white sm:px-10 lg:px-20">
    <div className="mx-auto max-w-2xl">
      <AnimatedSection>
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
          The Result
        </span>
        <p className="mt-6 text-base leading-relaxed text-zinc-300">
          The redesign turned a high-traffic surface into a real
          research-to-trade destination — more visits, deeper exploration, and a
          clear lift in revenue.
        </p>
      </AnimatedSection>

      {/* For users */}
      <AnimatedSection delay={0.1} className="mt-12">
        <h3 className="text-lg font-bold text-white">
          <span className="mr-2">👤</span>For users
        </h3>
        <div className="mt-6 space-y-6">
          <div>
            <h4 className="text-sm font-bold text-emerald-400">
              Faster discovery
            </h4>
            <p className="mt-1 text-sm leading-relaxed text-zinc-400">
              2.8M users open Explore every day — roughly 35% of app DAU — and
              now find what they need without leaving the app.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-emerald-400">
              Right depth for every user
            </h4>
            <p className="mt-1 text-sm leading-relaxed text-zinc-400">
              Beginners get curated sectors, pros get strategy-based collections,
              and intraday traders get volume signals — all on the same screen.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-emerald-400">
              From idea to order, in fewer taps
            </h4>
            <p className="mt-1 text-sm leading-relaxed text-zinc-400">
              Search-to-order and watchlist-to-order paths got noticeably
              shorter, removing friction between &quot;interesting&quot; and
              &quot;ordered.&quot;
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* For business */}
      <AnimatedSection delay={0.15} className="mt-12">
        <h3 className="text-lg font-bold text-white">
          <span className="mr-2">📈</span>For the business
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          Higher engagement compounding into revenue — across orders, brokerage,
          and turnover.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="mt-10">
        <ResultsTable />
      </AnimatedSection>

      <AnimatedSection delay={0.25} className="mt-10">
        <div className="rounded-2xl border border-zinc-700 bg-zinc-800 p-6">
          <p className="text-sm font-bold text-emerald-400">The standout</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
            MTF trading jumped{" "}
            <strong className="text-emerald-400">+19.6%</strong> — the biggest
            signal that experienced traders were acting on the new Strategy and
            Volume Shockers collections. Discovery wasn&apos;t just driving more
            orders; it was driving higher-conviction ones.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Future Scope ──────────────────────────────────────── */

const FutureScope = () => (
  <section className="px-6 py-20 sm:px-10 lg:px-20">
    <div className="mx-auto max-w-2xl">
      <AnimatedSection>
        <SectionLabel label="Future Scope" />
        <p className="mt-6 text-base leading-relaxed text-zinc-600">
          Based on the data we&apos;ll get from these collections, we&apos;ll work on
          building profiles for every user and will give them more personalised
          sections on Explore.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "User Profiling",
              desc: "Build trading profiles based on order history, watchlists, and explore behavior to personalize collections.",
            },
            {
              title: "AI-Powered Suggestions",
              desc: "Use ML to surface relevant stocks and sectors based on individual trading patterns.",
            },
            {
              title: "Custom Collections",
              desc: "Let users create and pin their own curated collections for quick access.",
            },
            {
              title: "Social Signals",
              desc: "Integrate community sentiment and trending discussions into stock discovery.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-5"
            >
              <h3 className="text-sm font-bold text-zinc-800">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
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

const Home = () => {
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
            <div className="h-4 w-4 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500" />
            <span className="text-sm font-semibold text-zinc-700">Groww</span>
          </div>
        </div>
      </nav>

      <Hero />
      <Divider />
      <Context />
      <DataInsight />
      <Divider />
      <CurrentState />
      <ProblemStatement />
      <Divider />
      <UnderstandingUsers />
      <IdealSolution />
      <Divider />
      <DesignPhilosophies />
      <Divider />
      <CollectionDeepDives />
      <Divider />
      <Approach />
      <NewCollections />
      <Divider />
      <NewsRedesign />
      <FinalDesign />
      <Divider />
      <Testing />
      <Results />
      <FutureScope />
      <Footer />
    </main>
  );
};

export default Home;
