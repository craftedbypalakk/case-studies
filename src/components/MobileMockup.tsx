"use client";

import { motion } from "framer-motion";

const MobileMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto w-[240px] rounded-[28px] border-[3px] border-zinc-800 bg-white p-1 shadow-2xl"
    >
      {/* Status bar */}
      <div className="flex items-center justify-between rounded-t-[24px] bg-white px-4 pt-2 pb-1">
        <span className="text-[8px] font-semibold text-zinc-700">12:30</span>
        <div className="flex gap-1">
          <div className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
          <div className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
          <div className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
        </div>
      </div>

      {/* Search bar */}
      <div className="mx-2 mb-2 flex items-center gap-1.5 rounded-full bg-zinc-100 px-2.5 py-1.5">
        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500">
          <span className="text-[5px] font-bold text-white">G</span>
        </div>
        <span className="text-[8px] text-zinc-400">Stocks</span>
        <div className="ml-auto flex gap-1.5">
          <svg className="h-2.5 w-2.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Index strip */}
      <div className="mx-2 mb-2 flex gap-2 text-[7px]">
        <span className="text-zinc-500">NIFTY 25,284</span>
        <span className="text-emerald-500">+0.13%</span>
        <span className="text-zinc-500">SENSEX 82,897</span>
      </div>

      {/* Tabs */}
      <div className="mx-2 mb-3 flex gap-2 border-b border-zinc-100 pb-1.5 text-[8px]">
        <span className="border-b border-emerald-500 pb-1 font-semibold text-zinc-800">
          Explore
        </span>
        <span className="text-zinc-400">Holdings</span>
        <span className="text-zinc-400">Positions</span>
      </div>

      {/* Content sections */}
      <div className="space-y-3 px-2 pb-3">
        {/* Most traded */}
        <div>
          <p className="mb-1.5 text-[8px] font-semibold text-zinc-700">
            Most traded on Groww
          </p>
          <div className="grid grid-cols-4 gap-1">
            {["HDFC", "RIL", "TCS", "INFY"].map((s, i) => (
              <div
                key={s}
                className="rounded-md border border-zinc-100 bg-zinc-50 p-1 text-center"
              >
                <div className="mx-auto mb-0.5 h-3.5 w-3.5 rounded-full bg-zinc-200" />
                <p className="text-[6px] font-medium text-zinc-600">{s}</p>
                <p className={`text-[5px] ${i % 2 === 0 ? "text-emerald-500" : "text-red-400"}`}>
                  {i % 2 === 0 ? "+1.2%" : "-0.8%"}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sectors */}
        <div>
          <p className="mb-1.5 text-[8px] font-semibold text-zinc-700">
            Sectors trending
          </p>
          {["IT +4.60%", "Banking +2.43%", "Pharma +1.16%"].map((s) => (
            <div
              key={s}
              className="flex items-center justify-between border-b border-zinc-50 py-1 text-[7px] last:border-0"
            >
              <span className="text-zinc-600">{s.split(" ")[0]}</span>
              <span className="font-medium text-emerald-500">
                {s.split(" ")[1]}
              </span>
            </div>
          ))}
        </div>

        {/* Trading screens */}
        <div>
          <p className="mb-1.5 text-[8px] font-semibold text-zinc-700">
            Trading screens
          </p>
          <div className="space-y-1">
            {["Stocks near breakout", "MACD signal", "Volume shockers"].map(
              (item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 rounded-md border border-zinc-100 bg-zinc-50 p-1.5"
                >
                  <span
                    className={`rounded-full px-1 py-px text-[5px] font-semibold ${
                      i === 2
                        ? "bg-red-50 text-red-500"
                        : "bg-emerald-50 text-emerald-500"
                    }`}
                  >
                    {i === 2 ? "Bearish" : "Bullish"}
                  </span>
                  <span className="text-[6px] text-zinc-500">{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center justify-around rounded-b-[24px] border-t border-zinc-100 bg-white py-1.5">
        {["Explore", "F&O", "Invest", "Pay", "Profile"].map((tab, i) => (
          <div key={tab} className="flex flex-col items-center gap-0.5">
            <div
              className={`h-2.5 w-2.5 rounded-sm ${
                i === 0 ? "bg-emerald-500" : "bg-zinc-300"
              }`}
            />
            <span
              className={`text-[5px] ${
                i === 0 ? "font-semibold text-emerald-600" : "text-zinc-400"
              }`}
            >
              {tab}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default MobileMockup;
