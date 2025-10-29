'use client';

import { pipelineStages } from '../lib/mockData';
import { clsx } from 'clsx';

export function PipelineProgress() {
  return (
    <section className="rounded-3xl bg-card p-6 shadow-card">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Deal pipeline</p>
          <h2 className="text-2xl font-semibold text-white">Where this opportunity sits</h2>
        </div>
        <div className="rounded-2xl border border-emerald-500/50 bg-emerald-500/10 px-4 py-1 text-xs font-medium text-emerald-200">
          Probability: 68%
        </div>
      </header>

      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {pipelineStages.map((stage, index) => (
          <div
            key={stage.title}
            className={clsx(
              'relative flex flex-col gap-3 rounded-2xl border p-4 text-sm transition',
              stage.status === 'complete'
                ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-100'
                : stage.status === 'active'
                ? 'border-blue-500/60 bg-blue-500/10 text-blue-100 shadow-lg shadow-blue-950/60'
                : 'border-slate-700/60 bg-slate-900/60 text-slate-300'
            )}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Stage {index + 1}</span>
            <p className="text-base font-semibold text-white">{stage.title}</p>
            <p>{stage.description}</p>
            {index !== pipelineStages.length - 1 && (
              <div className="absolute right-[-14px] top-1/2 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-slate-700/50 bg-slate-900/80 text-xs text-slate-400 md:flex">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
