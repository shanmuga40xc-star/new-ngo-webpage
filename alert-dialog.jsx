import { Calendar, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { EVENTS } from "./data";

export default function Events() {
  return (
    <section
      id="events"
      className="relative bg-[var(--linen)] py-24 md:py-32"
      data-testid="events-section"
    >
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="overline">Events & Field Reports</span>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.04] mt-4 text-[var(--ink)] max-w-2xl">
              What we did <em className="italic text-[var(--green)]">this month</em>.
            </h2>
          </div>
          <a href="#contact" className="text-[var(--ink)] link-underline font-medium" data-testid="events-archive-link">
            Full archive →
          </a>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {EVENTS.map((e, i) => (
            <Reveal
              key={e.id}
              delay={i * 100}
              className={`col-span-12 ${i === 0 ? "lg:col-span-6" : "lg:col-span-3"}`}
            >
              <article
                className="bg-white border border-[var(--line)] rounded-3xl overflow-hidden h-full flex flex-col"
                data-testid={`event-card-${e.id}`}
              >
                <div className={`relative ${i === 0 ? "aspect-[16/10]" : "aspect-[4/3]"} overflow-hidden`}>
                  <img
                    src={e.image}
                    alt={e.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 tag">{e.category}</div>
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-[var(--green)] text-sm">
                    <Calendar size={14} strokeWidth={1.6} />
                    <span className="italic">{e.date}</span>
                  </div>
                  <h3 className={`font-serif text-[var(--ink)] mt-3 leading-tight ${i === 0 ? "text-3xl md:text-4xl" : "text-2xl"}`}>
                    {e.title}
                  </h3>
                  <p className="text-[var(--olive)] text-[15px] leading-relaxed mt-3 flex-1">
                    {e.excerpt}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 self-start btn btn-primary text-sm"
                    data-testid={`event-read-more-${e.id}`}
                  >
                    Read more <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
