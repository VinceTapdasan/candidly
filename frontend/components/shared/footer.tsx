import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-0.5">
            <span className="text-lg font-bold text-text">candidly</span>
          </div>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-sm text-text-muted transition-colors hover:text-text-secondary"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm text-text-muted transition-colors hover:text-text-secondary"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="text-sm text-text-muted transition-colors hover:text-text-secondary"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-text-muted transition-colors hover:text-text-secondary"
            >
              Privacy
            </Link>
          </div>
          <p className="text-sm text-text-muted">&copy; 2026 candidly</p>
        </div>
      </div>
    </footer>
  );
}
