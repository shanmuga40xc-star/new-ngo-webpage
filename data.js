import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";
import Reveal from "./Reveal";
import { SITE } from "./data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative bg-[var(--linen)] py-24 md:py-32"
      data-testid="contact-section"
    >
      <div className="container-x">
        <div className="grid grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="col-span-12 lg:col-span-6">
            <span className="overline">Get in Touch</span>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.04] mt-5 text-[var(--ink)]">
              Write to us.
              <br />
              We <em className="italic text-[var(--green)]">always</em> write back.
            </h2>
            <p className="text-[var(--olive)] text-lg leading-relaxed mt-6 max-w-md">
              {"Whether you're a CSR partner, a journalist, a volunteer or a parent — drop a line. We'll respond within one working day."}
            </p>

            <div className="mt-10 space-y-6">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-4 group"
                data-testid="contact-email"
              >
                <span className="w-11 h-11 rounded-full bg-[var(--linen-2)] border border-[var(--line)] flex items-center justify-center group-hover:bg-[var(--green)] group-hover:text-white transition-colors">
                  <Mail size={16} strokeWidth={1.6} />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[var(--olive)]">
                    Email
                  </div>
                  <div className="font-serif text-xl text-[var(--ink)]">{SITE.email}</div>
                </div>
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-4 group"
                data-testid="contact-phone"
              >
                <span className="w-11 h-11 rounded-full bg-[var(--linen-2)] border border-[var(--line)] flex items-center justify-center group-hover:bg-[var(--green)] group-hover:text-white transition-colors">
                  <Phone size={16} strokeWidth={1.6} />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[var(--olive)]">
                    Phone
                  </div>
                  <div className="font-serif text-xl text-[var(--ink)]">{SITE.phone}</div>
                </div>
              </a>
              <div className="flex items-center gap-4" data-testid="contact-address">
                <span className="w-11 h-11 rounded-full bg-[var(--linen-2)] border border-[var(--line)] flex items-center justify-center">
                  <MapPin size={16} strokeWidth={1.6} />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[var(--olive)]">
                    Office
                  </div>
                  <div className="font-serif text-xl text-[var(--ink)]">{SITE.address}</div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-11 h-11 rounded-full border border-[var(--line)] flex items-center justify-center hover:bg-[var(--ink)] hover:text-[var(--linen)] hover:border-[var(--ink)] transition-colors"
                  data-testid={`contact-social-${i}`}
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150} className="col-span-12 lg:col-span-6">
            <form
              onSubmit={submit}
              className="bg-white border border-[var(--line)] rounded-3xl p-7 md:p-10 space-y-7"
              data-testid="contact-form"
            >
              <div>
                <label className="text-[11px] tracking-[0.2em] uppercase text-[var(--olive)]">
                  Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="line-input"
                  data-testid="contact-name-input"
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
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                  className="line-input"
                  data-testid="contact-email-input"
                />
              </div>
              <div>
                <label className="text-[11px] tracking-[0.2em] uppercase text-[var(--olive)]">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can we help?"
                  className="line-input"
                  data-testid="contact-message-input"
                />
              </div>
              <button type="submit" className="btn btn-dark w-full sm:w-auto" data-testid="contact-submit-button">
                {sent ? "Sent · We'll reply soon ✓" : "Send message"}
              </button>
              {sent && (
                <p
                  className="text-sm text-[var(--forest)]"
                  data-testid="contact-success-msg"
                >
                  {"Thanks for reaching out — we'll respond within one working day."}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
