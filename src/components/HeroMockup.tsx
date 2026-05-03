"use client";

import { motion } from "framer-motion";

const TradingCard = ({
  label,
  color,
  delay,
}: {
  label: string;
  color: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="rounded-xl border border-zinc-100 bg-white p-3 shadow-sm"
  >
    <span
      className={`mb-2 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${color}`}
    >
      {label}
    </span>
    <div className="mt-2 flex items-end gap-0.5">
      {[40, 55, 35, 60, 45, 70, 50, 65, 75, 80].map((h, i) => (
        <div
          key={i}
          className={`w-1.5 rounded-sm ${label === "Bearish" ? "bg-red-300" : "bg-emerald-300"}`}
          style={{ height: `${h * 0.3}px` }}
        />
      ))}
    </div>
    <p className="mt-2 text-[10px] leading-tight text-zinc-500">
      {label === "Bullish" ? "MACD above signal line" : label === "Bearish" ? "Overbought with high volume" : "Stocks near breakout"}
    </p>
  </motion.div>
);

const HeroMockup = () => {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      {/* Web mockup - back */}
      <motion.div
        initial={{ opacity: 0, x: 40, rotateY: -5 }}
        animate={{ opacity: 1, x: 0, rotateY: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl"
        style={{ perspective: "1000px" }}
      >
        {/* Nav bar */}
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500">
            <span className="text-[8px] font-bold text-white">G</span>
          </div>
          <span className="text-xs font-semibold text-zinc-700">Stocks</span>
          <div className="ml-auto flex gap-2 text-[9px] text-zinc-400">
            <span>NIFTY 25,284.55</span>
            <span className="text-emerald-500">+0.13%</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-4 flex gap-4 border-b border-zinc-100 pb-2 text-[10px] text-zinc-400">
          <span className="font-semibold text-zinc-900 border-b-2 border-emerald-500 pb-2">Explore</span>
          <span>Holdings</span>
          <span>Positions</span>
          <span>Orders</span>
        </div>

        {/* Section title */}
        <p className="mb-3 text-xs font-semibold italic text-zinc-700">Trading screens</p>

        {/* Trading cards grid */}
        <div className="grid grid-cols-2 gap-2">
          <TradingCard label="Bullish" color="bg-emerald-50 text-emerald-600" delay={0.5} />
          <TradingCard label="Bullish" color="bg-emerald-50 text-emerald-600" delay={0.6} />
          <TradingCard label="Bearish" color="bg-red-50 text-red-500" delay={0.7} />
          <TradingCard label="Bullish" color="bg-emerald-50 text-emerald-600" delay={0.8} />
        </div>
      </motion.div>

      {/* Mobile mockup - front/right */}
      <motion.div
        initial={{ opacity: 0, x: 60, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute -right-4 top-8 z-20 w-[160px] rounded-2xl border border-zinc-200 bg-white p-2.5 shadow-2xl sm:-right-8 sm:w-[180px]"
      >
        <div className="mb-2 flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500" />
          <span className="text-[8px] font-semibold text-zinc-600">Explore</span>
        </div>
        <div className="mb-2 text-[7px] text-zinc-400">
          NIFTY 25,284.55 <span className="text-emerald-500">+0.13%</span>
        </div>
        <p className="mb-1.5 text-[8px] font-semibold italic text-zinc-600">Trading screens</p>
        <div className="space-y-1.5">
          {["Stocks near breakout", "MACD above signal", "Oversold with high vol"].map(
            (item, i) => (
              <div
                key={item}
                className="rounded-lg border border-zinc-100 bg-zinc-50 p-1.5"
              >
                <div className="mb-1 flex items-center gap-1">
                  <span
                    className={`rounded-full px-1 py-px text-[6px] font-semibold ${
                      i === 2
                        ? "bg-red-50 text-red-500"
                        : "bg-emerald-50 text-emerald-500"
                    }`}
                  >
                    {i === 2 ? "Bearish" : "Bullish"}
                  </span>
                </div>
                <div className="flex items-end gap-px">
                  {[30, 45, 25, 50, 35, 55, 40].map((h, j) => (
                    <div
                      key={j}
                      className={`w-1 rounded-[1px] ${i === 2 ? "bg-red-200" : "bg-emerald-200"}`}
                      style={{ height: `${h * 0.15}px` }}
                    />
                  ))}
                </div>
                <p className="mt-0.5 text-[6px] text-zinc-400">{item}</p>
              </div>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroMockup;
