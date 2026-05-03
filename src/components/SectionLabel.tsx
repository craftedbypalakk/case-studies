type SectionLabelProps = {
  label: string;
};

const SectionLabel = ({ label }: SectionLabelProps) => {
  return (
    <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
      {label}
    </span>
  );
};

export default SectionLabel;
