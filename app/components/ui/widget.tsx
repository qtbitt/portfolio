function Widget({
  label,
  children,
}: {
  label: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm p-4 flex flex-col gap-1.5">
      <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
        {label}
      </p>
      <div className="text-white/60 text-sm leading-relaxed">
        {children ?? <span className="text-white/20 italic">Coming soon…</span>}
      </div>
    </div>
  );
}

export default Widget;
