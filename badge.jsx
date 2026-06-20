import { useEffect, useRef, useState } from "react";
import { Users, MapPin, Gift, Heart } from "lucide-react";
import { STATS } from "./data";

const ICONS = [Users, MapPin, Heart, Gift];

function useCounter(target, start) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const duration = 1800;
    const t0 = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start]);
  return val;
}

function StatItem({ stat, Icon, start, idx }) {
  const v = useCounter(stat.value, start);
  return (
    <div
      className="border-t border-[var(--line-dark)] pt-8 md:pt-10 group"
      data-testid={`stat-${stat.label.toLowerCase()}`}
    >
      <div className="flex items-center justify-between mb-6">
        <span className="text-[11px] tracking-[0.24em] uppercase text-[var(--green)]">
          {String(idx + 1).padStart(2, "0")}
        </span>
        <Icon size={20} strokeWidth={1.4} className="text-[var(--linen)]/70 group-hover:text-[var(--green)] transition-colors" />
      </div>
      <div className="font-serif text-[64px] md:text-[88px] leading-none text-[var(--linen)] tracking-tight">
        {v.toLocaleString("en-IN")}
        <span className="text-[var(--green)]">{stat.suffix}</span>
      </div>
      <div className="mt-4 text-[var(--linen)]/70 text-sm tracking-[0.18em] uppercase">
        {stat.label}
      </div>
    </div>
  );
}

export default function ImpactStats() {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="impact"
      ref={ref}
      className="relative bg-[var(--ink)] text-[var(--linen)] py-24 md:py-32 overflow-hidden"
      data-testid="impact-section"
    >
      <div className="container-x">
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-5">
            <span className="overline text-[var(--green)]">Impact, in numbers</span>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] mt-5">
              Seven years.
              <br />
              <span className="italic text-[var(--green)]">Many lives.</span>
              <br />
              One promise.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 self-end">
            <p className="text-[var(--linen)]/70 text-lg leading-relaxed max-w-xl">
              {"Every figure below is verified by our field supervisors and audited annually. We don't round up. We don't dramatise. We report — because the people we serve deserve more than a slogan."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((s, i) => (
            <StatItem key={s.label} stat={s} Icon={ICONS[i]} start={start} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
