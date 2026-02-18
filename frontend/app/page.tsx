'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';
import Link from 'next/link';
import { Facehash } from 'facehash';
import {
  Play,
  Video,
  Zap,
  Sparkles,
  Shield,
  Users,
  MoreVertical,
} from 'lucide-react';

// Hook: triggers once when element enters viewport
function useReveal(threshold = 0.15): [RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

// Base transition classes
const hidden = 'opacity-0 translate-y-6 scale-[0.97]';
const shown = 'opacity-100 translate-y-0 scale-100';
const transition = 'transition-all duration-700 ease-out';

export default function LandingPage() {
  // Hero pop-in on load
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setHeroReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Scroll reveals for each section
  const [taglineRef, taglineVisible] = useReveal(0.2);
  const [whyHeaderRef, whyHeaderVisible] = useReveal(0.2);
  const [card0Ref, card0Visible] = useReveal(0.1);
  const [card1Ref, card1Visible] = useReveal(0.1);
  const [card2Ref, card2Visible] = useReveal(0.1);
  const [card3Ref, card3Visible] = useReveal(0.1);
  const [ctaRef, ctaVisible] = useReveal(0.2);

  return (
    <div className="pt-14">
      {/* Hero — Stealery-inspired centered layout */}
      <section className="relative flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center overflow-hidden px-4 py-20 md:px-6">
        {/* Background glow */}
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-accent/5 blur-[150px]" />

        <div className="relative z-10 w-full max-w-5xl">
          {/* Badge */}
          <div className={`mb-8 text-center ${transition} ${heroReady ? shown : hidden}`}>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-5 py-2 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              <Sparkles size={14} />
              Video-First Hiring
            </span>
          </div>

          {/* Headline */}
          <h1 className={`mb-6 text-center font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-text md:text-7xl ${transition} delay-100 ${heroReady ? shown : hidden}`}>
            Stand out and
            <br />
            <span className="text-accent">get hired!</span>
          </h1>

          {/* Subtitle */}
          <p className={`mx-auto mb-10 max-w-xl text-center text-lg text-text-secondary md:text-xl ${transition} delay-200 ${heroReady ? shown : hidden}`}>
            Skip the resume black hole. Record a short vlog, show who you
            really are, and let recruiters come to you.
          </p>

          {/* CTA Buttons */}
          <div className={`mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row ${transition} delay-300 ${heroReady ? shown : hidden}`}>
            <Link
              href="/signup?role=candidate"
              className="rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:brightness-110 hover:shadow-[0_0_30px_rgba(209,17,74,0.3)]"
            >
              Start Your Vlog
            </Link>
            <Link
              href="/explore"
              className="rounded-lg border border-border px-8 py-3.5 text-sm font-semibold text-text-secondary transition-all duration-300 hover:border-accent/40 hover:text-text"
            >
              Browse Talent
            </Link>
          </div>

          {/* Large Product Thumbnail */}
          <div className={`${transition} delay-[400ms] ${heroReady ? shown : hidden}`}>
            <div className="rounded-2xl border border-border bg-bg-elevated p-3 shadow-xl shadow-black/5 md:p-4">
              {/* Video */}
              <div className="relative mb-4 flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-black">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent/20">
                  <Play size={36} className="ml-1 text-white/80" />
                </div>
                <span className="absolute bottom-3 right-3 rounded-md bg-black/80 px-2 py-0.5 font-mono text-xs font-medium text-white">
                  3:24
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <div className="h-full w-1/3 bg-accent" />
                </div>
              </div>

              {/* Info Row */}
              <div className="flex gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface-hover">
                  <Facehash name="candidly-hero" size={44} interactive={false} showInitial={false} />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="mb-0.5 text-lg font-semibold leading-snug text-text md:text-xl">
                    Why I&apos;m the sales rep your team needs
                  </h2>
                  <p className="text-sm text-text-secondary">Sarah Chen</p>
                  <p className="text-sm text-text-muted">
                    253K views &middot; 2 hours ago
                  </p>
                </div>
                <button className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-surface-hover hover:text-text">
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="flex min-h-screen items-center justify-center border-t border-border bg-bg-secondary px-6">
        <div ref={taglineRef} className={`${transition} duration-1000 ${taglineVisible ? shown : hidden}`}>
          <span className="font-display text-center text-7xl font-extrabold leading-tight tracking-tight text-text md:text-6xl lg:text-7xl block">
            Where talent is watched,
            <br />
            <span className="text-accent">not filtered!</span>
          </span>
        </div>
      </section>

      {/* Why candidly */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div
            ref={whyHeaderRef}
            className={`mb-16 text-center ${transition} ${whyHeaderVisible ? shown : hidden}`}
          >
            <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Why candidly
            </span>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Resumes are broken.{' '}
              <span className="text-accent">Video is the fix.</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div ref={card0Ref} className={`${transition} ${card0Visible ? shown : hidden}`}>
              <Card
                icon={<Zap size={18} />}
                title="AI broke resumes"
                description="Every resume looks the same now. Recruiters can't tell who's real and who's a well-prompted template."
              />
            </div>
            <div ref={card1Ref} className={`${transition} delay-100 ${card1Visible ? shown : hidden}`}>
              <Card
                icon={<Users size={18} />}
                title="Personality can't be filtered"
                description="The best candidates for customer-facing roles get filtered out by keyword-matching systems."
              />
            </div>
            <div ref={card2Ref} className={`${transition} delay-200 ${card2Visible ? shown : hidden}`}>
              <Card
                icon={<Video size={18} />}
                title="Authenticity wins"
                description="A 3-minute vlog tells more about a candidate than a polished PDF ever could."
              />
            </div>
            <div ref={card3Ref} className={`${transition} delay-300 ${card3Visible ? shown : hidden}`}>
              <Card
                icon={<Shield size={18} />}
                title="Reverse discovery"
                description="Stop applying into the void. Post once, get found by recruiters who are actually hiring."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-border bg-bg-secondary">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-xl bg-accent/8 blur-[120px]" />
        <div
          ref={ctaRef}
          className={`relative mx-auto max-w-5xl px-6 py-24 text-center ${transition} ${ctaVisible ? shown : hidden}`}
        >
          <h2 className="font-display mb-6 text-3xl font-bold md:text-5xl">
            Ready to <span className="text-accent">flip the script?</span>
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-text-secondary">
            Whether you&apos;re looking for your next role or your next hire,
            candidly puts people first.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/signup?role=candidate"
              className="rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:brightness-110 hover:shadow-[0_0_30px_rgba(209,17,74,0.3)]"
            >
              I&apos;m Looking for a Job
            </Link>
            <Link
              href="/signup?role=recruiter"
              className="rounded-lg border border-border px-8 py-3 text-sm font-semibold text-text-secondary transition-all duration-300 hover:border-accent/40 hover:text-text"
            >
              I&apos;m Hiring
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group h-full rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(209,17,74,0.08)]">
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
        {icon}
      </div>
      <h3 className="mb-2 font-semibold text-text">{title}</h3>
      <p className="text-sm text-text-secondary">{description}</p>
    </div>
  );
}
