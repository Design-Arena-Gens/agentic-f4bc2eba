'use client';

import { todaysCallLog } from '../lib/mockData';
import { ClockIcon, FaceSmileIcon } from '@heroicons/react/24/outline';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { clsx } from 'clsx';

const sentimentColors: Record<string, string> = {
  positive: 'text-emerald-300 border-emerald-500/40 bg-emerald-500/10',
  neutral: 'text-amber-200 border-amber-500/40 bg-amber-500/10',
  negative: 'text-rose-300 border-rose-500/40 bg-rose-500/10'
};

export function CallLog() {
  return (
    <section className="rounded-3xl bg-card p-6 shadow-card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Today&apos;s call log</p>
          <h2 className="text-2xl font-semibold text-white">Quick recap before you dial</h2>
        </div>
        <button className="flex items-center gap-2 rounded-2xl border border-slate-700/60 px-3 py-2 text-xs font-semibold text-slate-300 transition hover:border-blue-500/60">
          Review analytics
          <ArrowUpRightIcon className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-5 space-y-4">
        {todaysCallLog.map(entry => (
          <article
            key={entry.id}
            className="grid gap-4 rounded-2xl border border-slate-700/60 bg-slate-900/60 p-4 md:grid-cols-5"
          >
            <div className="md:col-span-2">
              <p className="text-sm text-slate-400">Company</p>
              <p className="text-lg font-semibold text-white">{entry.company}</p>
              <p className="text-sm text-slate-400">{entry.contact}</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <ClockIcon className="h-4 w-4 text-slate-500" />
              {entry.time}
            </div>
            <p className="text-sm text-slate-300 md:col-span-2">{entry.outcome}</p>
            <span
              className={clsx(
                'inline-flex items-center gap-1 rounded-2xl border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ',
                sentimentColors[entry.sentiment]
              )}
            >
              <FaceSmileIcon className="h-3.5 w-3.5" />
              {entry.sentiment}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
