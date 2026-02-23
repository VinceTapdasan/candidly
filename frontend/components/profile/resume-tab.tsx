import { FileText, Upload } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';

export function ResumeTab() {
  return (
    <section>
      <SectionHeader icon={<FileText size={16} />} title="Resume" />
      <div className="max-w-2xl">
        <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border py-12 text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-surface">
            <Upload size={20} className="text-text-muted" />
          </div>
          <p className="mb-1 text-sm font-medium text-text-secondary">
            No resume uploaded yet
          </p>
          <p className="mb-4 text-xs text-text-muted">
            Upload a PDF or DOCX file
          </p>
          <button className="rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:brightness-110">
            Upload Resume
          </button>
        </div>
      </div>
    </section>
  );
}
