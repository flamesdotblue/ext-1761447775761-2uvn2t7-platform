import React, { useEffect, useMemo, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Activity, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [eventsPerMin, setEventsPerMin] = useState(320);
  const [platforms, setPlatforms] = useState(12);

  useEffect(() => {
    const id = setInterval(() => {
      setEventsPerMin((v) => v + Math.floor(1 + Math.random() * 3));
    }, 1500);
    return () => clearInterval(id);
  }, []);

  const statItems = useMemo(
    () => [
      { label: 'Live sources', value: platforms },
      { label: 'Scrape events/min', value: eventsPerMin },
      { label: 'Avg. freshness', value: '< 30s' },
    ],
    [eventsPerMin, platforms]
  );

  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(0,170,255,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/10 via-neutral-950/20 to-neutral-950" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 md:pt-36">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Activity className="h-3.5 w-3.5 text-cyan-300" />
            Live hackathons, scraped in real time from 10+ platforms
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Find hackathons the moment they go live
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            HackPulse continuously scrapes top communities and platforms to surface fresh hackathons, deadlines, prizes, and team formation threads — all in one unified feed.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-medium hover:brightness-110 transition shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset]">
              Start tracking now
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium hover:bg-white/10 transition">
              See features
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 max-w-md">
            {statItems.map((s) => (
              <div key={s.label} className="rounded-lg border border-white/10 bg-neutral-900/40 px-3 py-3">
                <div className="text-xl font-semibold tracking-tight">
                  {typeof s.value === 'number' ? s.value.toLocaleString() : s.value}
                </div>
                <div className="text-xs text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
