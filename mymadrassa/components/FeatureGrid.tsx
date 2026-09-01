"use client";

import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Feature = {
  icon: string;
  title: string;
  desc: string;
};

const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ICONS: Record<string, ReactNode> = {
  diagnostic: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" {...S} />
      <path d="M9 3h6v3H9z" {...S} />
      <path d="m8.5 13 2.5 2.5L16 10" {...S} />
    </>
  ),
  live: (
    <>
      <circle cx="12" cy="12" r="2.2" {...S} />
      <path d="M6.5 7.5a7 7 0 0 0 0 9M17.5 7.5a7 7 0 0 1 0 9M4 5a11 11 0 0 0 0 14M20 5a11 11 0 0 1 0 14" {...S} />
    </>
  ),
  progression: (
    <>
      <path d="M4 20h16" {...S} />
      <rect x="5" y="12" width="3.5" height="6" rx="1" {...S} />
      <rect x="10.25" y="8" width="3.5" height="10" rx="1" {...S} />
      <rect x="15.5" y="4" width="3.5" height="14" rx="1" {...S} />
    </>
  ),
  recordings: (
    <>
      <circle cx="12" cy="12" r="9" {...S} />
      <path d="M10 8.5v7l6-3.5z" {...S} />
    </>
  ),
  tracking: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v16H6.5A2.5 2.5 0 0 0 4 21.5z" {...S} />
      <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v16h5.5a2.5 2.5 0 0 1 2.5 2.5z" {...S} />
      <path d="m14.5 11 1.5 1.5L19 9.5" {...S} />
    </>
  ),
  global: (
    <>
      <circle cx="12" cy="12" r="9" {...S} />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z" {...S} />
    </>
  ),
  certificate: (
    <>
      <circle cx="12" cy="9" r="5.5" {...S} />
      <path d="M9 13.5 7.5 21l4.5-2.5L16.5 21 15 13.5" {...S} />
    </>
  ),
  support: (
    <>
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-4 3.5V17H6a2 2 0 0 1-2-2z" {...S} />
      <path d="M8.5 9.5h7M8.5 12.5h4" {...S} />
    </>
  ),
};

function Card({ feature, index }: { feature: Feature; index: number }) {
  return (
    <Reveal index={index % 4} className="feat h-full">
      <div className="feat-inner group h-full border-t border-line pt-7">
        <div className="flex items-start justify-between mb-7">
          <span className="feat-chip inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sidebar text-accent">
            <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" aria-hidden="true">
              {ICONS[feature.icon]}
            </svg>
          </span>
          <span className="feat-num text-[13px] font-semibold tabular-nums tracking-widest text-muted/40">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="text-lg font-bold text-ink mb-2.5 tracking-tight">{feature.title}</h3>
        <p className="text-[15px] leading-relaxed text-muted">{feature.desc}</p>
      </div>
    </Reveal>
  );
}

export default function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
      {features.map((f, i) => (
        <Card key={f.title} feature={f} index={i} />
      ))}
    </div>
  );
}
