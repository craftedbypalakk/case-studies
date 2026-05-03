"use client";

import { motion } from "framer-motion";

type ProgressBarProps = {
  label: string;
  value: number;
  color?: string;
  delay?: number;
};

const ProgressBar = ({
  label,
  value,
  color = "bg-emerald-500",
  delay = 0,
}: ProgressBarProps) => {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-600">{label}</span>
        <span className="text-sm font-semibold text-zinc-800">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
