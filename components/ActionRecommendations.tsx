'use client';

import { recommendations } from '../lib/mockData';
import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeOpenIcon
} from '@heroicons/react/24/outline';

const iconMap = {
  LightningBoltIcon: BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeOpenIcon
};

export function ActionRecommendations() {
  return (
    <section className="rounded-3xl bg-card p-6 shadow-card">
      <header>
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Momentum next</p>
        <h2 className="text-2xl font-semibold text-white">AI suggests these follow-ups</h2>
      </header>
      <div className="mt-5 space-y-4">
        {recommendations.map(rec => {
          const Icon = iconMap[rec.icon as keyof typeof iconMap] ?? BoltIcon;
          return (
            <article
              key={rec.id}
              className="flex items-start gap-4 rounded-2xl border border-slate-700/60 bg-slate-900/50 p-4"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-base font-semibold text-white">{rec.title}</p>
                <p className="mt-1 text-sm text-slate-300">{rec.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
