import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { CAUSES } from "./data";

export default function Causes() {
  return (
    <section
      id="causes"
      className="relative bg-[var(--linen-2)] py-24 md:py-32"
      data-testid="causes-section"
    >
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="overline">Six Causes · One Compass</span>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.04] mt-4 text-[var(--ink)] max-w-2xl">
              Where your support shows up <em className="italic text-[var(--green)]">tomorrow morning</em>.
            </h2>
          </div>
          <a
            href="#donate"
            className="text-[var(--ink)] link-underline font-medium"
            data-testid="causes-donate-link"
          >
            Fund a cause →
          </a>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {CAUSES.map((c, i) => {
            // Bento variations
            const spans = [
              "md:col-span-7", // 0
              "md:col-span-5", // 1
              "md:col-span-5", // 2
              "md:col-span-7", // 3
              "md:col-span-7", // 4
              "md:col-span-5", // 5
            ];
            return (
              <Reveal
                key={c.id}
                delay={i * 80}
                className={`col-span-12 ${spans[i % 6]}`}
              >
                <a
                  href="#donate"
                  className="group relative block bg-white border border-[var(--line)] rounded-3xl overflow-hidden h-full"
                  data-testid={`cause-card-${c.id}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 tag" data-testid={`cause-tag-${c.id}`}>
                      {c.tag}
                    </div>
                  </div>
                  <div className="p-7 md:p-9 flex flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-2xl md:text-3xl text-[var(--ink)] leading-tight">
                        {c.title}
                      </h3>
                      <span className="w-10 h-10 rounded-full bg-[var(--linen)] flex items-center justify-center shrink-0 group-hover:bg-[var(--green)] group-hover:text-white transition-colors text-[var(--forest)]">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                    <p className="text-[var(--olive)] mt-3 leading-relaxed text-[15px]">
                      {c.description}
                    </p>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
