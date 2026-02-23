export function EmptyHint({ text }: { text: string }) {
  return (
    <button className="w-full rounded-xl border border-dashed border-border py-4 text-center text-sm text-text-muted transition-colors hover:border-accent/30 hover:text-accent">
      + {text}
    </button>
  );
}
