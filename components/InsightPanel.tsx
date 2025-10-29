'use client';

import { aiInsights } from '../lib/mockData';
import { BoltIcon } from '@heroicons/react/24/outline';

export function InsightPanel() {
  return (
    <section className="rounded-3xl bg-card p-6 shadow-card">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">AI intel</p>
          <h2 className="text-2xl font-semibold text-white">What the transcript is telling you</h2>
        </div>
        <div className="flex items-center gap-2 rounded-2xl border border-blue-500/50 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-200">
          <BoltIcon className="h-4 w-4" />
          Real-time
        </div>
      </header>

      <div className="mt-5 space-y-4">
        {aiInsights.map(insight => (
          <article key={insight.id} className="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{insight.headline}</h3>
              <span className="text-xs font-semibold text-emerald-300">
                Confidence {Math.round(insight.confidence * 100)}%
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-300">{insight.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
