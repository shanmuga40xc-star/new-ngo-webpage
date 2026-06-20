import { useState } from "react";
import { Heart, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { DONATION_PRESETS } from "./data";

export default function Donate() {
  const [amount, setAmount] = useState(1500);
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState("one-time");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const final = custom ? Number(custom) : amount;
    if (!final || !name || !email) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="donate"
      className="relative bg-[var(--ink)] text-[var(--linen)] py-24 md:py-32 overflow-hidden"
      data-testid="donate-section"
    >
      {/* decorative ring */}
      <div className="absolute -right-40 -top-40 w-[520px] h-[520px] rounded-full border border-[var(--line-dark)] pointer-events-none" />
      <div className="absolute -right-60 -bottom-60 w-[700px] h-[700px] rounded-full border border-[var(--line-dark)] pointer-events-none" />

      <div className="container-x relative">
        <div className="grid grid-cols-12 gap-10 lg:gap-16">
          {/* Left — copy */}
          <Reveal className="col-span-12 lg:col-span-5">
            <span className="overline text-[var(--green)]">Make it count</span>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.04] mt-5">
              Your <em className="italic text-[var(--green)]">₹500</em> buys
              <br /> {"someone else's tomorrow."}
            </h2>
            <p className="text-[var(--linen)]/70 text-lg leading-relaxed mt-6 max-w-md">
              100% of every donation goes to the field. Operations, salaries and
              administration are covered separately by recurring CSR partners.
            </p>

            <ul className="mt-9 space-y-4">
              {[
                { icon: ShieldCheck, t: "80G tax-exemption certificate within 48 hours." },
                { icon: Sparkles, t: "Quarterly impact report on the cause you fund." },
                { icon: Heart, t: "Cancel a recurring gift any time. No questions." },
              ].map((row) => (
                <li key={row.t} className="flex items-start gap-3 text-[var(--linen)]/85">
                  <row.icon size={18} strokeWidth={1.6} className="text-[var(--green)] mt-0.5 shrink-0" />
                  <span>{row.t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={150} className="col-span-12 lg:col-span-7">
            <div className="bg-[var(--linen)] text-[var(--charcoal)] rounded-3xl p-7 md:p-10" data-testid="donate-card">
              {/* Frequency toggle */}
              <div className="flex bg-[var(--linen-2)] rounded-full p-1.5 w-fit mb-7">
                {["one-time", "monthly"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFrequency(f)}
                    className={`px-5 py-2 rounded-full text-sm capitalize transition-colors ${
                      frequency === f
                        ? "bg-[var(--ink)] text-[var(--linen)]"
                        : "text-[var(--charcoal)]"
                    }`}
                    data-testid={`donate-freq-${f}`}
                  >
                    {f === "one-time" ? "One-time" : "Monthly"}
                  </button>
                ))}
              </div>

              {/* Preset amounts */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {DONATION_PRESETS.map((p) => {
                  const active = amount === p.value && !custom;
                  return (
                    <button
                      key={p.value}
                      onClick={() => {
                        setAmount(p.value);
                        setCustom("");
                      }}
                      className={`rounded-2xl p-4 text-left border transition-all ${
                        active
                          ? "border-[var(--green)] bg-[var(--green)]/10"
                          : "border-[var(--line)] hover:border-[var(--ink)]"
                      }`}
                      data-testid={`donate-preset-${p.value}`}
                    >
                      <div className="font-serif text-2xl text-[var(--ink)]">{p.label}</div>
                      <div className="text-[12px] text-[var(--olive)] mt-1">{p.note}</div>
                    </button>
                  );
                })}
              </div>

              {/* Custom + form */}
              <form onSubmit={onSubmit} className="mt-7 space-y-7">
                <div>
                  <label className="text-[11px] tracking-[0.2em] uppercase text-[var(--olive)]">
                    Or enter custom amount (₹)
                  </label>
                  <input
                    type="number"
                    min="1"
                    placeholder="e.g. 10000"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    className="line-input"
                    data-testid="donate-custom-amount"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div>
                    <label className="text-[11px] tracking-[0.2em] uppercase text-[var(--olive)]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="line-input"
                      data-testid="donate-name"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] tracking-[0.2em] uppercase text-[var(--olive)]">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      className="line-input"
                      data-testid="donate-email"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-3">
                  <div className="text-sm text-[var(--olive)]">
                    Giving{" "}
                    <span className="text-[var(--ink)] font-medium">
                      ₹{(custom ? Number(custom) : amount).toLocaleString("en-IN") || 0}
                    </span>{" "}
                    {frequency === "monthly" ? "every month" : "today"}.
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-testid="donate-submit-button"
                  >
                    {submitted ? "Thank you ✓" : "Donate securely"}
                    {!submitted && <ArrowRight size={16} />}
                  </button>
                </div>

                {submitted && (
                  <div
                    className="text-sm text-[var(--forest)] bg-[var(--green)]/10 border border-[var(--green)]/30 rounded-2xl p-4"
                    data-testid="donate-success-msg"
                  >
                    This is a UI demo — no payment was processed. In production this routes
                    to Razorpay / Stripe with 80G receipts auto-emailed.
                  </div>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
