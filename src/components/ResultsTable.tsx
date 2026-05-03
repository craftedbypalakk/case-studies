"use client";

import { motion } from "framer-motion";

type Row = {
  metric: string;
  lift: string;
};

const rows: Row[] = [
  { metric: "Turnover per active user", lift: "+5.2%" },
  { metric: "Brokerage revenue", lift: "+3.5%" },
  { metric: "Orders per active user", lift: "+1.5%" },
  { metric: "MTF trading", lift: "+19.6%" },
  { metric: "Explore page visits", lift: "+3.12%" },
  { metric: "Search → Order conversion", lift: "+4.9%" },
  { metric: "Watchlist → Order conversion", lift: "+3.4%" },
];

const ResultsTable = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
      <div className="flex items-center border-b border-zinc-200 bg-zinc-50 px-5 py-3">
        <span className="flex-1 text-sm font-semibold text-zinc-500">
          Metric
        </span>
        <span className="w-20 text-right text-sm font-semibold text-zinc-500">
          Lift
        </span>
      </div>
      {rows.map((row, i) => (
        <motion.div
          key={row.metric}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className={`flex items-center px-5 py-4 ${
            i < rows.length - 1 ? "border-b border-zinc-100" : ""
          }`}
        >
          <span className="flex-1 text-sm text-zinc-700">{row.metric}</span>
          <span className="w-20 text-right text-sm font-semibold text-emerald-500">
            {row.lift}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default ResultsTable;
