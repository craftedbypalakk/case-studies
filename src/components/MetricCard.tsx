"use client";

import { motion } from "framer-motion";

type MetricCardProps = {
  value: string;
  label: string;
  delay?: number;
};

const MetricCard = ({ value, label, delay = 0 }: MetricCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="flex flex-col items-center rounded-2xl border border-zinc-100 bg-white px-6 py-8 text-center shadow-sm"
    >
      <span className="text-3xl font-bold text-emerald-500 sm:text-4xl">
        {value}
      </span>
      <span className="mt-2 text-sm leading-snug text-zinc-500">{label}</span>
    </motion.div>
  );
};

export default MetricCard;
