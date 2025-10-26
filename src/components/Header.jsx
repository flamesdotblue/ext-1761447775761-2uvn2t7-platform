import React from 'react';
import { Rocket } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 grid place-items-center">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold tracking-tight">HackPulse</span>
          <span className="ml-3 text-xs text-white/50 border border-white/10 px-1.5 py-0.5 rounded">Live</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-white/70 hover:text-white transition">Features</a>
          <a href="#platforms" className="text-white/70 hover:text-white transition">Platforms</a>
          <a href="#cta" className="text-white/70 hover:text-white transition">Get Access</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex h-9 items-center rounded-md border border-white/10 bg-white/5 px-3 text-sm hover:bg-white/10 transition">Log in</button>
          <button className="inline-flex h-9 items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-3 text-sm font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] hover:brightness-110 transition">Get Started</button>
        </div>
      </div>
    </header>
  );
}
