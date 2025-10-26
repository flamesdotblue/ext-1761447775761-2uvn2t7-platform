import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import FooterCTA from './components/FooterCTA.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased selection:bg-cyan-300/30 selection:text-cyan-200">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <FooterCTA />
    </div>
  );
}
