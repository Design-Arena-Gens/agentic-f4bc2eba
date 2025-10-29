import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CallPilot | Freelance Call Control Agent',
  description: 'Manage freelance customer discovery calls, scripts, and follow-ups with an AI-ready control center.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-surface text-slate-100">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
