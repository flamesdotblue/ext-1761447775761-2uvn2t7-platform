import React from 'react';
import { Globe, Shield, Rocket, Activity } from 'lucide-react';

const platforms = [
  'Devpost',
  'HackerEarth',
  'MLH',
  'Hackathon.com',
  'Gitcoin',
  'Devfolio',
  'Discord',
  'Reddit',
  'Twitter/X',
  'Luma',
  'Twitch',
  'Eventbrite',
];

const featureData = [
  {
    icon: <Activity className="h-5 w-5 text-cyan-300" />,
    title: 'Real-time aggregation',
    desc: 'Streams new hackathons, updates, and deadline changes as they happen with minute-level freshness.',
  },
  {
    icon: <Globe className="h-5 w-5 text-cyan-300" />,
    title: 'Unified search & filters',
    desc: 'Search by prize pool, location, team size, tech stack, and registration type across all sources.',
  },
  {
    icon: <Shield className="h-5 w-5 text-cyan-300" />,
    title: 'Clean & deduplicated',
    desc: 'Intelligent matching merges duplicates from multiple platforms and cleans noisy data.',
  },
  {
    icon: <Rocket className="h-5 w-5 text-cyan-300" />,
    title: 'Alerts & exports',
    desc: 'Get Slack/Discord alerts, webhook events, and CSV exports for your pipeline and team.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Everything you need to never miss a hackathon</h2>
          <p className="mt-3 text-white/70">
            We monitor the most active hackathon hubs so you can focus on building, not hunting for links.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featureData.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-neutral-900/40 p-4">
              <div className="flex items-center gap-2">{f.icon}<span className="text-sm font-medium">{f.title}</span></div>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>

        <div id="platforms" className="mt-14">
          <div className="text-sm text-white/70">Live from these sources and more</div>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-neutral-900/40">
            <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="animate-[marquee_25s_linear_infinite] flex gap-6 py-4 will-change-transform">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex shrink-0 items-center gap-3">
                    {platforms.map((p) => (
                      <span key={p + i} className="shrink-0 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80">
                        {p}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>
      </div>
    </section>
  );
}
