export type ProfileTab = 'overview' | 'resume';

export function ProfileTabs({
  tab,
  onTabChange,
}: {
  tab: ProfileTab;
  onTabChange: (tab: ProfileTab) => void;
}) {
  return (
    <div className="mb-8 flex">
      <div className="inline-flex rounded-lg border border-border bg-surface p-1">
        <button
          onClick={() => onTabChange('overview')}
          className={`rounded-md px-5 py-2 text-sm font-medium transition-all ${
            tab === 'overview'
              ? 'bg-accent text-white shadow-sm'
              : 'text-text-muted hover:text-text'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => onTabChange('resume')}
          className={`rounded-md px-5 py-2 text-sm font-medium transition-all ${
            tab === 'resume'
              ? 'bg-accent text-white shadow-sm'
              : 'text-text-muted hover:text-text'
          }`}
        >
          Resume
        </button>
      </div>
    </div>
  );
}
