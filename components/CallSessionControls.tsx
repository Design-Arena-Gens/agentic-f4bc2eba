'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  MicrophoneIcon,
  PhoneIcon,
  SpeakerWaveIcon,
  VideoCameraIcon
} from '@heroicons/react/24/solid';
import { clsx } from 'clsx';

const statusLabels = {
  idle: 'Ready to connect',
  ringing: 'Dialing prospect…',
  live: 'Call in session',
  muted: 'You are muted',
  ended: 'Call completed'
} as const;

type CallStatus = keyof typeof statusLabels;

type Metric = {
  label: string;
  value: string;
};

const liveMetrics: Metric[] = [
  { label: 'Talk/Listen', value: '58 / 42%' },
  { label: 'Sentiment', value: 'Warm-positive' },
  { label: 'Decision Power', value: 'Primary buyer' }
];

export function CallSessionControls() {
  const [status, setStatus] = useState<CallStatus>('idle');
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [microphoneEnabled, setMicrophoneEnabled] = useState(true);
  const [speakerEnabled, setSpeakerEnabled] = useState(true);
  const [cameraEnabled, setCameraEnabled] = useState(false);

  useEffect(() => {
    if (status === 'live') {
      const timer = setInterval(() => {
        setElapsedSeconds(prev => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [status]);

  const waveform = useMemo(() => {
    const length = 64;
    const base = status === 'live' ? 18 : status === 'ringing' ? 9 : 2;
    return Array.from({ length }, (_, idx) => {
      const modifier = Math.sin((Date.now() / 350 + idx) % Math.PI);
      const noise = Math.random() * (status === 'live' ? 10 : 3);
      const amplitude = Math.round(base + Math.abs(modifier) * 25 + noise);
      return Math.min(amplitude, 48);
    });
  }, [status]);

  const formattedTime = useMemo(() => {
    const minutes = Math.floor(elapsedSeconds / 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor(elapsedSeconds % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  }, [elapsedSeconds]);

  const statusAccent = {
    idle: 'ring-2 ring-slate-800',
    ringing: 'ring-2 ring-amber-500/70 animate-pulse',
    live: 'ring-2 ring-emerald-500/70 animate-[pulse_1.6s_ease-in-out_infinite]',
    muted: 'ring-2 ring-rose-500/70',
    ended: 'ring-2 ring-slate-700'
  } satisfies Record<CallStatus, string>;

  const handlePrimaryAction = () => {
    switch (status) {
      case 'idle':
      case 'ended':
        setStatus('ringing');
        setElapsedSeconds(0);
        setTimeout(() => setStatus('live'), 1800);
        break;
      case 'ringing':
        setStatus('idle');
        break;
      case 'live':
      case 'muted':
        setStatus('ended');
        setElapsedSeconds(0);
        break;
    }
  };

  const toggleMute = () => {
    if (status === 'live') {
      setStatus('muted');
      setMicrophoneEnabled(false);
    } else if (status === 'muted') {
      setStatus('live');
      setMicrophoneEnabled(true);
    }
  };

  return (
    <section className="rounded-3xl bg-card p-6 shadow-card xl:p-7">
      <div className="flex flex-col gap-6">
        <header className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Now routing</p>
              <h2 className="text-2xl font-semibold text-white">Discovery Call • NovaStride Labs</h2>
            </div>
            <div
              className={clsx(
                'flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/70 text-sm font-semibold text-slate-200 transition',
                statusAccent[status]
              )}
            >
              {status === 'live' || status === 'muted' ? formattedTime : '•'}
            </div>
          </div>
          <p className="text-sm text-slate-400">
            Seamlessly orchestrate your sales hour — control the room, surface next questions, and mark commitments without leaving this cockpit.
          </p>
        </header>

        <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col gap-5">
            <div className="min-h-[120px] rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Voice telemetry</p>
              <div className="mt-3 flex h-16 items-end gap-1 overflow-hidden">
                {waveform.map((value, index) => (
                  <span
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    className="w-1 rounded-full bg-gradient-to-t from-blue-500/50 via-blue-400 to-cyan-300/90"
                    style={{ height: `${value * 2}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {liveMetrics.map(metric => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-700/60 bg-slate-900/80 p-4 text-sm text-slate-300"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{metric.label}</p>
                  <p className="mt-3 text-lg font-semibold text-white">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-700/60 bg-slate-900/80 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Session status</p>
            <p className="text-lg font-medium text-white">{statusLabels[status]}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <button
                onClick={toggleMute}
                disabled={status === 'idle' || status === 'ringing' || status === 'ended'}
                className={clsx(
                  'flex items-center gap-2 rounded-2xl border border-slate-700/70 px-4 py-2 transition disabled:cursor-not-allowed disabled:border-slate-700/40 disabled:text-slate-500',
                  status === 'muted' ? 'border-rose-500/70 bg-rose-500/10 text-rose-200' : 'hover:border-blue-500/80'
                )}
              >
                <MicrophoneIcon className="h-5 w-5" />
                {status === 'muted' ? 'Unmute mic' : 'Mute mic'}
              </button>
              <button
                onClick={() => setSpeakerEnabled(prev => !prev)}
                className={clsx(
                  'flex items-center gap-2 rounded-2xl border border-slate-700/70 px-4 py-2 transition hover:border-blue-500/80',
                  speakerEnabled ? 'text-slate-200' : 'opacity-60'
                )}
              >
                <SpeakerWaveIcon className="h-5 w-5" />
                {speakerEnabled ? 'Speaker on' : 'Speaker muted'}
              </button>
              <button
                onClick={() => setCameraEnabled(prev => !prev)}
                className={clsx(
                  'flex items-center gap-2 rounded-2xl border border-slate-700/70 px-4 py-2 transition hover:border-blue-500/80',
                  cameraEnabled ? 'text-slate-200' : 'opacity-60'
                )}
              >
                <VideoCameraIcon className="h-5 w-5" />
                {cameraEnabled ? 'Camera on' : 'Camera off'}
              </button>
            </div>
            <button
              onClick={handlePrimaryAction}
              className={clsx(
                'group flex items-center justify-center gap-3 rounded-2xl px-6 py-3 text-base font-semibold text-white transition',
                status === 'idle' || status === 'ended'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400'
                  : status === 'ringing'
                  ? 'bg-amber-500/80 hover:bg-amber-500'
                  : 'bg-rose-500/90 hover:bg-rose-500'
              )}
            >
              {status === 'idle' && (
                <>
                  <PhoneIcon className="h-5 w-5" />
                  Start discovery call
                </>
              )}
              {status === 'ringing' && (
                <>
                  <PhoneIcon className="h-5 w-5" />
                  Cancel dialing
                </>
              )}
              {(status === 'live' || status === 'muted') && (
                <>
                  <PhoneIcon className="h-5 w-5" />
                  End call for now
                </>
              )}
              {status === 'ended' && (
                <>
                  <PhoneIcon className="h-5 w-5" />
                  Reconnect call
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
