import Reveal from "./Reveal";
import { Leaf, HandHeart, BookOpen } from "lucide-react";

const PILLARS = [
  {
    icon: BookOpen,
    title: "Learn",
    text: "Free after-school classrooms, libraries and digital labs.",
  },
  {
    icon: HandHeart,
    title: "Heal",
    text: "Mobile health units, mental wellness circles, and medicine drives.",
  },
  {
    icon: Leaf,
    title: "Grow",
    text: "Skill cohorts, livelihood loans and green community drives.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[var(--linen)] py-24 md:py-32"
      data-testid="about-section"
    >
      <div className="container-x">
        <div className="grid grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="col-span-12 lg:col-span-5">
            <div className="sticky top-32">
              <span className="overline">Our Mission</span>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.02] mt-5 text-[var(--ink)]">
                {"We don't run a charity. We run a "}<em className="italic text-[var(--green)]">community</em>.
              </h2>
              <p className="text-[var(--olive)] text-lg leading-relaxed mt-7 max-w-md">
                {"InAmigos Foundation began in a single rented room in Lucknow with twelve children and one teacher. Today, our work spans 28 states — but the rule hasn't changed: show up, listen, and stay."}
              </p>
              <a
                href="#causes"
                className="inline-block mt-8 text-[var(--ink)] link-underline font-medium"
                data-testid="about-explore-causes"
              >
                Explore our causes →
              </a>
            </div>
          </Reveal>

          <div className="col-span-12 lg:col-span-7 space-y-6">
            <Reveal>
              <div
                className="relative aspect-[5/3] rounded-3xl overflow-hidden"
                data-testid="about-image"
              >
                <img
                  src="https://images.pexels.com/photos/8197497/pexels-photo-8197497.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Volunteers and children together"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {PILLARS.map((p, i) => (
                <Reveal key={p.title} delay={i * 100}>
                  <div
                    className="bg-white border border-[var(--line)] rounded-3xl p-7 h-full"
                    data-testid={`pillar-${p.title.toLowerCase()}`}
                  >
                    <div className="w-11 h-11 rounded-full bg-[var(--linen-2)] flex items-center justify-center mb-5">
                      <p.icon size={18} strokeWidth={1.6} className="text-[var(--forest)]" />
                    </div>
                    <h3 className="font-serif text-2xl text-[var(--ink)]">{p.title}</h3>
                    <p className="text-[var(--olive)] text-sm leading-relaxed mt-2">
                      {p.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
