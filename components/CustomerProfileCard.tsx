'use client';

import { BuildingOffice2Icon, EnvelopeIcon, GlobeAltIcon, MapPinIcon } from '@heroicons/react/24/outline';

export function CustomerProfileCard() {
  return (
    <section className="flex flex-col gap-5 rounded-3xl bg-card p-6 shadow-card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Prospect dossier</p>
          <h2 className="text-2xl font-semibold text-white">NovaStride Labs</h2>
          <p className="mt-1 text-sm text-slate-400">AI-driven onboarding automation for distributed product teams.</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
          <BuildingOffice2Icon className="h-7 w-7" />
        </div>
      </div>

      <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Primary contact</p>
        <div className="mt-2 flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 p-[2px]">
            <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-slate-950 text-lg font-semibold text-white">
              CR
            </div>
          </div>
          <div>
            <p className="text-base font-semibold text-white">Chloe Ramirez</p>
            <p className="text-sm text-slate-400">Head of Product Operations • Decision maker</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-3 text-sm text-slate-300">
          <span className="flex items-center gap-2">
            <EnvelopeIcon className="h-4 w-4 text-slate-500" />
            chloe.ramirez@novastride.io
          </span>
          <span className="flex items-center gap-2">
            <GlobeAltIcon className="h-4 w-4 text-slate-500" />
            www.novastride.io
          </span>
          <span className="flex items-center gap-2">
            <MapPinIcon className="h-4 w-4 text-slate-500" />
            Austin, TX • Hybrid team (38 ppl)
          </span>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-4 text-sm text-slate-300">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Urgency signals</p>
        <ul className="mt-3 space-y-2">
          <li className="flex items-start gap-2">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Planning to onboard 18 new contractors next quarter; current process causes 12-day delays.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Migrating from manual doc collection to API-first workflow; need strategy + build partner.
          </li>
        </ul>
      </div>
    </section>
  );
}
