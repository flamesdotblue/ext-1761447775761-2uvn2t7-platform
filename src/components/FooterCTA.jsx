import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer id="cta" className="relative border-t border-white/5 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-900/60 p-6 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Never miss another hackathon</h3>
              <p className="mt-2 text-white/70">Join the early access list for realtime alerts, unified search, and exports.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="you@startup.dev"
                className="h-11 w-full rounded-md border border-white/10 bg-neutral-950/60 px-3 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-cyan-500/50"
              />
              <button type="submit" className="inline-flex h-11 items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-medium hover:brightness-110 transition">
                Request Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/50">
            <div>© {new Date().getFullYear()} HackPulse. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white/80 transition">Privacy</a>
              <a href="#" className="hover:text-white/80 transition">Terms</a>
              <a href="#" className="hover:text-white/80 transition">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
