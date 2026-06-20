import { Quote } from "lucide-react";
import Reveal from "./Reveal";
import { TESTIMONIALS } from "./data";

export default function Testimonials() {
  return (
    <section
      className="relative bg-[var(--linen)] py-24 md:py-32"
      data-testid="testimonials-section"
    >
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <span className="overline">Voices from the field</span>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.04] mt-4 text-[var(--ink)]">
            They wrote this, <em className="italic text-[var(--green)]">not us</em>.
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 100}
              className={`col-span-12 ${i === 1 ? "md:col-span-6 md:col-start-4" : "md:col-span-6"}`}
            >
              <figure
                className={`rounded-3xl p-8 md:p-10 h-full flex flex-col ${
                  i % 2 === 0
                    ? "bg-[var(--ink)] text-[var(--linen)]"
                    : "bg-white border border-[var(--line)] text-[var(--charcoal)]"
                }`}
                data-testid={`testimonial-${i}`}
              >
                <Quote
                  size={28}
                  strokeWidth={1.4}
                  className={i % 2 === 0 ? "text-[var(--green)]" : "text-[var(--green)]"}
                />
                <blockquote className="font-serif text-2xl md:text-3xl leading-snug mt-5 flex-1">
                  {`\u201C${t.quote}\u201D`}
                </blockquote>
                <figcaption
                  className={`mt-8 pt-6 border-t ${
                    i % 2 === 0 ? "border-[var(--line-dark)]" : "border-[var(--line)]"
                  } flex items-center justify-between`}
                >
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className={`text-xs uppercase tracking-[0.2em] mt-1 ${
                      i % 2 === 0 ? "text-[var(--linen)]/60" : "text-[var(--olive)]"
                    }`}>
                      {t.role}
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[var(--green)] flex items-center justify-center font-serif text-white text-lg">
                    {t.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
