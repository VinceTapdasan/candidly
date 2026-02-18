'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Video, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { JOB_CATEGORIES } from '@/constants/job-categories';

export default function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction === 'left' ? -200 : 200, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-14">
      {/* Sticky Category Tabs — scrollable with arrows */}
      <div className="sticky top-14 z-40 border-b border-border bg-bg">
        <div className="mx-auto max-w-[1400px] px-4 md:px-6">
          <div className="relative flex items-center">
            {/* Left arrow */}
            {canScrollLeft && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 z-10 flex h-full items-center bg-gradient-to-r from-bg from-60% to-transparent pr-4"
              >
                <ChevronLeft size={20} className="text-text-muted" />
              </button>
            )}

            {/* Scrollable tabs */}
            <div
              ref={scrollRef}
              className="flex items-center gap-1 overflow-x-auto scrollbar-none"
            >
              {JOB_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative shrink-0 px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                    activeCategory === cat
                      ? 'text-text'
                      : 'text-text-muted hover:text-text-secondary'
                  }`}
                >
                  {cat}
                  {activeCategory === cat && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                  )}
                </button>
              ))}
            </div>

            {/* Right arrow */}
            {canScrollRight && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 z-10 flex h-full items-center bg-gradient-to-l from-bg from-60% to-transparent pl-4"
              >
                <ChevronRight size={20} className="text-text-muted" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="mx-auto max-w-[1400px] px-4 py-6 md:px-6">
        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 rounded-lg bg-accent/20 blur-2xl" />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-border bg-bg-elevated">
              <Video size={36} className="text-accent" />
            </div>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-text">No vlogs yet</h2>
          <p className="mb-8 max-w-md text-text-secondary">
            Be the first to share your story. Upload a vlog and get discovered
            by recruiters looking for talent like you.
          </p>
          <Link
            href="/upload"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:brightness-110 hover:shadow-[0_0_24px_rgba(209,17,74,0.3)]"
          >
            Upload Your Vlog
            <ArrowRight size={16} />
          </Link>

          {/* Ghost Grid Preview */}
          <div className="mt-20 w-full">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.15em] text-text-muted">
              Vlogs will appear here
            </p>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="group">
                  <div className="mb-3 aspect-video rounded-xl border border-border bg-surface" />
                  <div className="flex gap-3">
                    <div className="h-9 w-9 shrink-0 rounded-lg bg-surface" />
                    <div className="flex-1">
                      <div className="mb-2 h-4 w-3/4 rounded bg-surface" />
                      <div className="mb-1 h-3 w-1/2 rounded bg-surface" />
                      <div className="h-3 w-2/5 rounded bg-surface" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
