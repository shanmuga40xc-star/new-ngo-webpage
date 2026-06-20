import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { INDIAN_STATES } from "./data";

const INTERESTS = [
  "Teaching",
  "Healthcare",
  "Field Visits",
  "Fundraising",
  "Content / Social",
  "Tech / Web",
];

export default function VolunteerForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    interest: "Teaching",
    message: "",
  });
  const [done, setDone] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setDone(true);
    setTimeout(() => setDone(false), 6000);
    setForm({ name: "", email: "", phone: "", state: "", interest: "Teaching", message: "" });
  };

  return (
    <section
      id="volunteer"
      className="relative bg-[var(--linen-2)] py-24 md:py-32"
      data-testid="volunteer-section"
    >
      <div className="container-x">
        <div className="grid grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="col-span-12 lg:col-span-5">
            <span className="overline">Become a Volunteer</span>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.04] mt-5 text-[var(--ink)]">
              Be the <em className="italic text-[var(--green)]">change</em>
              <br /> you wish to see.
            </h2>
            <p className="text-[var(--olive)] text-lg leading-relaxed mt-6 max-w-md">
              {"Spare a Saturday. Spare a skill. We'll match you with a community and a mentor near you within 72 hours."}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5 max-w-md">
              <div className="border-t border-[var(--charcoal)]/15 pt-4">
                <div className="font-serif text-4xl text-[var(--ink)]">72h</div>
                <div className="text-xs uppercase tracking-[0.18em] text-[var(--olive)] mt-2">
                  Onboarding
                </div>
              </div>
              <div className="border-t border-[var(--charcoal)]/15 pt-4">
                <div className="font-serif text-4xl text-[var(--ink)]">28</div>
                <div className="text-xs uppercase tracking-[0.18em] text-[var(--olive)] mt-2">
                  States covered
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="col-span-12 lg:col-span-7">
            <form
              onSubmit={submit}
              className="bg-white border border-[var(--line)] rounded-3xl p-7 md:p-10 space-y-7"
              data-testid="volunteer-form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div>
                  <label className="text-[11px] tracking-[0.2em] uppercase text-[var(--olive)]">
                    Full Name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                    className="line-input"
                    data-testid="volunteer-name"
                  />
                </div>
                <div>
                  <label className="text-[11px] tracking-[0.2em] uppercase text-[var(--olive)]">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@email.com"
                    className="line-input"
                    data-testid="volunteer-email"
                  />
                </div>
                <div>
                  <label className="text-[11px] tracking-[0.2em] uppercase text-[var(--olive)]">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+91 …"
                    className="line-input"
                    data-testid="volunteer-phone"
                  />
                </div>
                <div>
                  <label className="text-[11px] tracking-[0.2em] uppercase text-[var(--olive)]">
                    State
                  </label>
                  <select
                    required
                    value={form.state}
                    onChange={update("state")}
                    className="line-input"
                    data-testid="volunteer-state"
                  >
                    <option value="" disabled>
                      Select a state
                    </option>
                    {INDIAN_STATES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] tracking-[0.2em] uppercase text-[var(--olive)]">
                  {"I'd like to help with"}
                </label>
                <div className="flex flex-wrap gap-2 mt-3">
                  {INTERESTS.map((i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, interest: i }))}
                      className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                        form.interest === i
                          ? "bg-[var(--ink)] text-[var(--linen)] border-[var(--ink)]"
                          : "border-[var(--line)] text-[var(--charcoal)] hover:border-[var(--ink)]"
                      }`}
                      data-testid={`volunteer-interest-${i.toLowerCase().replace(/[^a-z]/g, "-")}`}
                    >
                      {i}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[11px] tracking-[0.2em] uppercase text-[var(--olive)]">
                  Why do you want to volunteer? (optional)
                </label>
                <textarea
                  value={form.message}
                  onChange={update("message")}
                  rows={3}
                  placeholder="A line or two is enough."
                  className="line-input"
                  data-testid="volunteer-message"
                />
              </div>

              <div className="flex items-center justify-between gap-5 pt-3">
                <p className="text-xs text-[var(--olive)] max-w-xs">
                  By submitting you consent to be contacted by an InAmigos field lead.
                </p>
                <button type="submit" className="btn btn-primary" data-testid="volunteer-submit-button">
                  {done ? "Application received ✓" : "Apply to volunteer"}
                  {!done && <ArrowRight size={16} />}
                </button>
              </div>

              {done && (
                <div
                  className="text-sm text-[var(--forest)] bg-[var(--green)]/10 border border-[var(--green)]/30 rounded-2xl p-4"
                  data-testid="volunteer-success-msg"
                >
                  Thank you! A coordinator will reach out within 72 hours. (Demo only —
                  no data was stored.)
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
