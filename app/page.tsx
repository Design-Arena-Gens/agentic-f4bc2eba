import { CallSessionControls } from '../components/CallSessionControls';
import { CustomerProfileCard } from '../components/CustomerProfileCard';
import { ScriptNavigator } from '../components/ScriptNavigator';
import { PipelineProgress } from '../components/PipelineProgress';
import { InsightPanel } from '../components/InsightPanel';
import { CallLog } from '../components/CallLog';
import { AvailabilityPlanner } from '../components/AvailabilityPlanner';
import { NotesComposer } from '../components/NotesComposer';
import { ActionRecommendations } from '../components/ActionRecommendations';
import { CalendarDaysIcon, Cog8ToothIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen max-w-[1320px] flex-col gap-8 px-5 pb-16 pt-12">
      <header className="flex flex-col gap-6 rounded-3xl bg-card p-6 shadow-card md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-blue-200">CallPilot — Freelance Growth Agent</p>
            <h1 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
              Command center for high-converting client calls
            </h1>
            <p className="mt-3 max-w-3xl text-sm text-slate-300">
              Control discovery calls, guide conversations, capture commitments, and deploy instant follow-up without juggling five apps. Everything aligns so you can close bigger retainers while staying calm, confident, and in command.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="rounded-2xl border border-slate-700/60 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-blue-500/60"
            >
              <Cog8ToothIcon className="mr-2 inline-block h-4 w-4" />
              Configure AI agent
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-900/50 transition hover:from-blue-400 hover:to-indigo-400"
            >
              <CalendarDaysIcon className="h-4 w-4" />
              Schedule new consult
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              label: 'This week pipeline',
              value: '$42.5K',
              caption: '+18% vs. last week'
            },
            {
              label: 'Discovery to close',
              value: '42 hrs',
              caption: 'Avg. time to convert'
            },
            {
              label: 'Follow-ups queued',
              value: '6 prospects',
              caption: '3 urgent before Friday'
            }
          ].map(item => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-4"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
              <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
              <p className="text-xs text-slate-400">{item.caption}</p>
            </div>
          ))}
        </div>
      </header>

      <div className="grid gap-8 xl:grid-cols-[1.4fr_1fr]">
        <div className="space-y-8">
          <CallSessionControls />
          <ScriptNavigator />
          <NotesComposer />
        </div>
        <div className="space-y-8">
          <CustomerProfileCard />
          <PipelineProgress />
          <InsightPanel />
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <CallLog />
        <div className="space-y-8">
          <AvailabilityPlanner />
          <ActionRecommendations />
        </div>
      </div>
    </main>
  );
}
