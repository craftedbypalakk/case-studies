"use client";

import { motion } from "framer-motion";

const StockRow = ({
  name,
  price,
  change,
  positive,
}: {
  name: string;
  price: string;
  change: string;
  positive: boolean;
}) => (
  <div className="flex items-center justify-between border-b border-zinc-50 py-2 last:border-0">
    <div className="flex items-center gap-2">
      <div className="h-5 w-5 rounded-full bg-zinc-100" />
      <span className="text-[10px] font-medium text-zinc-700">{name}</span>
    </div>
    <div className="text-right">
      <p className="text-[10px] font-medium text-zinc-700">{price}</p>
      <p
        className={`text-[8px] ${positive ? "text-emerald-500" : "text-red-400"}`}
      >
        {change}
      </p>
    </div>
  </div>
);

const SectionBlock = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-3">
    <p className="mb-2 text-[10px] font-semibold text-zinc-700">{title}</p>
    {children}
  </div>
);

const ExploreBeforeMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto w-full max-w-[360px] rounded-2xl border border-zinc-200 bg-white p-4 shadow-lg"
    >
      {/* Header */}
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500">
          <span className="text-[8px] font-bold text-white">G</span>
        </div>
        <span className="text-xs font-semibold text-zinc-700">Stocks</span>
        <div className="ml-auto text-[8px] text-zinc-400">
          SENSEX 82,897.21 <span className="text-emerald-500">+0.13%</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-4 flex gap-3 border-b border-zinc-100 pb-2 text-[9px] text-zinc-400">
        <span className="border-b-2 border-emerald-500 pb-2 font-semibold text-zinc-800">
          Explore
        </span>
        <span>Holdings</span>
        <span>Positions</span>
        <span>Orders</span>
      </div>

      {/* Most traded */}
      <SectionBlock title="Most traded on Groww">
        <div className="flex gap-1.5 mb-2">
          {["Stocks", "ETFs", "F&O"].map((t) => (
            <span
              key={t}
              className="rounded-full bg-zinc-100 px-2 py-0.5 text-[8px] text-zinc-600"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {["HDFC Bank", "Reliance", "TCS", "Infosys"].map((s) => (
            <div
              key={s}
              className="rounded-lg border border-zinc-100 bg-zinc-50 p-1.5 text-center"
            >
              <div className="mx-auto mb-1 h-5 w-5 rounded-full bg-zinc-200" />
              <p className="text-[7px] font-medium text-zinc-600">{s}</p>
              <p className="text-[6px] text-emerald-500">+1.2%</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* Top market movers */}
      <SectionBlock title="Top market movers">
        <div className="flex gap-1.5 mb-2">
          {["Gainers", "Losers", "52W High", "52W Low", "Volume"].map((t) => (
            <span
              key={t}
              className="whitespace-nowrap rounded-full bg-zinc-100 px-1.5 py-0.5 text-[7px] text-zinc-600"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="rounded-lg border border-zinc-100 bg-zinc-50 p-2">
          <StockRow name="Hindustan Unilever" price="₹1,345.07" change="+1.89 (2.4%)" positive />
          <StockRow name="Tata Steel" price="₹134.55" change="+4.22 (3.2%)" positive />
          <StockRow name="Bajaj Finance" price="₹7,234.10" change="-42.30 (-0.6%)" positive={false} />
        </div>
      </SectionBlock>

      {/* Sectors */}
      <SectionBlock title="Sectors trending today">
        <div className="rounded-lg border border-zinc-100 bg-zinc-50 p-2">
          {[
            { name: "IT", adv: 15, dec: 2, change: "+4.60%" },
            { name: "Banking", adv: 21, dec: 7, change: "+2.43%" },
            { name: "Pharma", adv: 16, dec: 4, change: "+1.16%" },
          ].map((s) => (
            <div
              key={s.name}
              className="flex items-center justify-between border-b border-zinc-100 py-1.5 last:border-0"
            >
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-zinc-200" />
                <span className="text-[9px] font-medium text-zinc-600">
                  {s.name}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-0.5">
                  <div
                    className="h-1.5 rounded-sm bg-red-300"
                    style={{ width: `${(s.dec / (s.adv + s.dec)) * 40}px` }}
                  />
                  <div
                    className="h-1.5 rounded-sm bg-emerald-400"
                    style={{ width: `${(s.adv / (s.adv + s.dec)) * 40}px` }}
                  />
                </div>
                <span className="text-[8px] font-medium text-emerald-500">
                  {s.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>
    </motion.div>
  );
};

export default ExploreBeforeMockup;
