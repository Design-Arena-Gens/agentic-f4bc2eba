'use client';

import { availabilitySlots } from '../lib/mockData';
import { CalendarDaysIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

export function AvailabilityPlanner() {
  return (
    <section className="rounded-3xl bg-card p-6 shadow-card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Follow-up booking</p>
          <h2 className="text-2xl font-semibold text-white">Share availability in one click</h2>
        </div>
        <CalendarDaysIcon className="h-8 w-8 text-blue-400" />
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {availabilitySlots.map(slot => (
          <article key={slot.id} className="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-4 text-sm text-slate-300">
            <p className="text-lg font-semibold text-white">{slot.label}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{slot.type}</p>
            <p className="mt-3">Duration • {slot.duration}</p>
            <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-blue-500/50 bg-blue-500/10 px-3 py-2 text-xs font-semibold text-blue-200 transition hover:bg-blue-500/20">
              <PaperAirplaneIcon className="h-4 w-4" />
              Send invite link
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
