'use client';

import { useState } from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline';

const presetNotes = [
  'They are struggling with onboarding compliance across US + EU contractors and want automation.',
  'Decision criteria: speed to value, SOC2-ready, minimal engineering lift.',
  'Budget clarity: they have $18k earmarked for Q3 pilot, extendable to $60k annual.'
];

export function NotesComposer() {
  const [notes, setNotes] = useState('');
  const [isAugmenting, setIsAugmenting] = useState(false);

  const handleAutoSummarize = () => {
    setIsAugmenting(true);
    setTimeout(() => {
      setNotes(prev =>
        `${prev}\n\nAction items:\n• Deliver tailored onboarding automation roadmap\n• Share onboarding metrics dashboard\n• Schedule compliance architect intro`.trim()
      );
      setIsAugmenting(false);
    }, 600);
  };

  return (
    <section className="flex flex-col gap-5 rounded-3xl bg-card p-6 shadow-card">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Call capture</p>
          <h2 className="text-2xl font-semibold text-white">Real-time notes</h2>
        </div>
        <button
          onClick={handleAutoSummarize}
          className="inline-flex items-center gap-2 rounded-2xl border border-blue-500/50 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-100 transition hover:bg-blue-500/20"
        >
          <SparklesIcon className="h-4 w-4" />
          {isAugmenting ? 'Synthesizing…' : 'Auto summarize'}
        </button>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3 text-sm text-slate-300">
          {presetNotes.map(note => (
            <p key={note} className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-4">
              {note}
            </p>
          ))}
        </div>
        <div>
          <textarea
            value={notes}
            onChange={event => setNotes(event.target.value)}
            placeholder="Start typing quick bullet notes and commitments…"
            className="h-full min-h-[220px] w-full rounded-2xl border border-slate-700/60 bg-slate-950/80 p-4 text-sm text-slate-200 outline-none ring-blue-500/40 focus:ring-2"
          />
          <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
            <span>⌘ + Enter to mark summary ready</span>
            <span>{notes.length} characters</span>
          </div>
        </div>
      </div>
    </section>
  );
}
