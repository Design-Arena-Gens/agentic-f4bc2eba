'use client';

import { Fragment, useMemo, useState } from 'react';
import { Tab } from '@headlessui/react';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { callScriptSections } from '../lib/mockData';
import { clsx } from 'clsx';

export function ScriptNavigator() {
  const [selectedSectionIdx, setSelectedSectionIdx] = useState(0);
  const activeSection = useMemo(() => callScriptSections[selectedSectionIdx], [selectedSectionIdx]);

  return (
    <section className="rounded-3xl bg-card p-6 shadow-card">
      <header className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Call script</p>
          <h2 className="text-2xl font-semibold text-white">Adaptive conversation map</h2>
          <p className="mt-1 text-sm text-slate-400">
            Glide through your proven discovery arc with AI nudges on tone, framing, and next move.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-2xl border border-blue-500/50 bg-blue-500/10 px-3 py-2 text-xs font-medium text-blue-200">
          <SparklesIcon className="h-4 w-4" />
          Real-time suggestions ON
        </div>
      </header>

      <Tab.Group
        selectedIndex={selectedSectionIdx}
        onChange={setSelectedSectionIdx}
        as={Fragment}
      >
        <Tab.List className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {callScriptSections.map(section => (
            <Tab
              key={section.id}
              className={({ selected }) =>
                clsx(
                  'rounded-2xl border px-3 py-3 text-left text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70',
                  selected
                    ? 'border-blue-500/70 bg-blue-500/10 text-blue-100 shadow-lg shadow-blue-950/70'
                    : 'border-slate-700/60 bg-slate-900/60 text-slate-300 hover:border-blue-500/60'
                )
              }
            >
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Stage</span>
              <p className="mt-2 text-sm font-semibold">{section.label}</p>
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-6">
          <Tab.Panel className="rounded-2xl border border-blue-500/40 bg-slate-950/90 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-blue-200">Live guidance</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{activeSection.label}</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              {activeSection.prompts.map(prompt => (
                <div key={prompt} className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-4">
                  <p>{prompt}</p>
                </div>
              ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}
