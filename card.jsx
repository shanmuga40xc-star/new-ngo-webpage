import { MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { VOLUNTEERS } from "./data";

export default function Volunteers() {
  return (
    <section
      id="volunteers"
      className="relative bg-[var(--linen-2)] py-24 md:py-32"
      data-testid="volunteers-section"
    >
      <div className="container-x">
        <div className="grid grid-cols-12 gap-6 mb-14">
          <div className="col-span-12 md:col-span-7">
            <span className="overline">The People Behind the Work</span>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.04] mt-4 text-[var(--ink)]">
              Our <em className="italic text-[var(--green)]">volunteers</em>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:self-end">
            <p className="text-[var(--olive)] text-lg leading-relaxed max-w-md">
              68 names. 28 states. Zero salaried fundraisers. Every rupee on the ground
              moves because someone here chose a Saturday over a stadium.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
          {VOLUNTEERS.map((v, i) => (
            <Reveal key={v.name} delay={i * 90}>
              <div
                className="bg-white border border-[var(--line)] rounded-3xl overflow-hidden text-center"
                data-testid={`volunteer-card-${v.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="px-5 py-6">
                  <h3 className="font-serif text-2xl text-[var(--ink)] leading-tight">
                    {v.name}
                  </h3>
                  <div className="text-[13px] text-[var(--olive)] mt-1.5">{v.role}</div>
                  <div className="flex items-center justify-center gap-1.5 text-[12px] text-[var(--green)] mt-3 uppercase tracking-wider">
                    <MapPin size={12} strokeWidth={1.6} />
                    {v.location}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <a href="#volunteer" className="btn btn-outline" data-testid="volunteers-join-cta">
            Join as a volunteer →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
