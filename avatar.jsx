import { ArrowUpRight, Heart, Users, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[var(--linen)] overflow-hidden"
      data-testid="hero-section"
    >
      <div className="container-x pt-12 md:pt-20 pb-16 md:pb-24">
        {/* Top eyebrow row */}
        <div className="flex items-center justify-between mb-10">
          <span className="overline" data-testid="hero-project-name">
            Bachpansala · Flagship Project
          </span>
          <span className="hidden md:flex items-center gap-2 text-[12px] text-[var(--olive)] tracking-wider uppercase">
            <Sparkles size={14} strokeWidth={1.5} className="text-[var(--green)]" />
            Est. 2018 · Lucknow, India
          </span>
        </div>

        {/* Headline + image grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <Reveal className="col-span-12 lg:col-span-7 xl:col-span-8">
            <h1
              className="font-serif text-[15vw] sm:text-[11vw] lg:text-[7.2vw] xl:text-[6.6vw] leading-[0.95] font-light tracking-tighter text-[var(--ink)]"
              data-testid="hero-headline"
            >
              Nurturing <em className="text-[var(--green)] not-italic font-normal">young minds</em>,
              <br />
              building bright <span className="font-serif italic">futures.</span>
            </h1>
          </Reveal>

          <Reveal delay={150} className="col-span-12 lg:col-span-5 xl:col-span-4">
            <p
              className="text-[var(--olive)] text-lg leading-relaxed max-w-md"
              data-testid="hero-description"
            >
              {"For seven years, InAmigos Foundation has walked into India's most overlooked neighbourhoods — with classrooms, clinics, and the quiet conviction that every child deserves a beginning, not a backup."}
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <a href="#donate" className="btn btn-primary" data-testid="hero-donate-button">
                <Heart size={16} strokeWidth={2} /> Donate now
              </a>
              <a href="#volunteer" className="btn btn-outline" data-testid="hero-volunteer-button">
                <Users size={16} strokeWidth={1.75} /> Become a volunteer
              </a>
            </div>
          </Reveal>
        </div>

        {/* Big imagery row */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 mt-12 md:mt-20">
          <Reveal className="col-span-12 lg:col-span-8 relative overflow-hidden rounded-3xl">
            <div className="relative aspect-[16/10] lg:aspect-[16/9]">
              <img
                src="https://images.pexels.com/photos/3867469/pexels-photo-3867469.jpeg"
                alt="Child smiling — Bachpansala project"
                className="absolute inset-0 w-full h-full object-cover"
                data-testid="hero-primary-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/55 via-transparent to-transparent" />
              <div className="absolute left-6 md:left-10 bottom-6 md:bottom-10 text-white max-w-md">
                <div className="overline text-white/70 mb-2">Field Story · 2025</div>
                <h3 className="font-serif text-2xl md:text-3xl leading-tight">
                  {"\u201CI'm the first in my family who can read a newspaper.\u201D"}
                </h3>
                <p className="text-white/80 text-sm mt-2">
                  — Anjali, 11, Bachpansala student, Bahraich.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="col-span-12 lg:col-span-4 flex flex-col gap-4 md:gap-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Volunteers at work"
                className="absolute inset-0 w-full h-full object-cover"
                data-testid="hero-secondary-image"
              />
            </div>
            <div
              className="rounded-3xl bg-[var(--ink)] text-[var(--linen)] p-7 flex flex-col justify-between flex-1 min-h-[160px]"
              data-testid="hero-callout-card"
            >
              <div>
                <div className="overline text-[var(--green)] mb-3">Live Counter</div>
                <div className="font-serif text-5xl md:text-6xl leading-none">42,000+</div>
                <p className="text-[var(--linen)]/70 mt-2 text-sm">
                  Lives touched across 28 states since 2018.
                </p>
              </div>
              <a
                href="#impact"
                className="mt-6 inline-flex items-center gap-2 text-[var(--green)] text-sm link-underline w-fit"
                data-testid="hero-see-impact"
              >
                See impact report <ArrowUpRight size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Marquee ribbon */}
      <div
        className="bg-[var(--ink)] text-[var(--linen)] py-4 overflow-hidden border-y border-[var(--line-dark)]"
        data-testid="hero-marquee"
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-8">
              {[
                "Education for every child",
                "Healthcare at the last mile",
                "Women-led communities",
                "Clean water · Clean rivers",
                "Skill the next generation",
                "Volunteers across 28 states",
              ].map((t) => (
                <span
                  key={`${i}-${t}`}
                  className="font-serif text-2xl md:text-3xl italic flex items-center gap-12"
                >
                  {t}
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] inline-block" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
