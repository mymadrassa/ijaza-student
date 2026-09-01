"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { value: string; label: string };

/** Splits "3,400+" into { prefix:"", num:3400, suffix:"+" } (commas ignored for parsing). */
function parse(value: string) {
  const match = value.match(/^(\D*)([\d,]+(?:\.\d+)?)(\D*)$/);
  if (!match) return { prefix: "", num: null as number | null, suffix: value };
  return {
    prefix: match[1],
    num: parseFloat(match[2].replace(/,/g, "")),
    suffix: match[3],
  };
}

function CountUp({ value }: { value: string }) {
  const { prefix, num, suffix } = parse(value);
  const [display, setDisplay] = useState(num === null ? value : "0");
  const ref = useRef<HTMLParagraphElement>(null);
  const done = useRef(false);

  useEffect(() => {
    if (num === null) return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || done.current) return;
      done.current = true;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        setDisplay(num.toLocaleString());
        return;
      }

      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        const current = num % 1 === 0
          ? Math.round(num * eased).toLocaleString()
          : (num * eased).toFixed(1);
        setDisplay(current);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.6 });

    io.observe(el);
    return () => io.disconnect();
  }, [num]);

  return (
    <p ref={ref} className="stat-value text-4xl font-bold text-ink">
      {num === null ? value : `${prefix}${display}${suffix}`}
    </p>
  );
}

export default function StatsBar({ stats }: { stats: Stat[] }) {
  return (
    <div className="border-t border-line bg-white">
      <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-line">
        {stats.map((s) => (
          <div key={s.label} className="px-10 first:pl-0 last:pr-0">
            <CountUp value={s.value} />
            <p className="text-muted text-base mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
