export function SectionHeader({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span className="text-text-muted">{icon}</span>
      <h2 className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted">
        {title}
      </h2>
    </div>
  );
}
