function Widget({
  label,
  children,
  className = "",
  contentClassName = "",
}: {
  label: string;
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <div
      className={`flex flex-col rounded-2xl border border-white/10 bg-white/4 p-4 backdrop-blur-sm ${className}`.trim()}
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
        {label}
      </p>
      <div
        className={`mt-2 flex-1 text-sm leading-relaxed text-white/60 ${contentClassName}`.trim()}
      >
        {children ?? <span className="italic text-white/20">Coming soon...</span>}
      </div>
    </div>
  );
}

export default Widget;
