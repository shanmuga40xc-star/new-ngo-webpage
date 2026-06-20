import { useState } from "react";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { NAV, SITE } from "./data";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="relative bg-[var(--ink)] text-[var(--linen)] pt-20 md:pt-28" data-testid="site-footer">
      <div className="container-x">
        {/* Newsletter */}
        <div className="grid grid-cols-12 gap-10 pb-16 border-b border-[var(--line-dark)]">
          <div className="col-span-12 lg:col-span-7">
            <span className="overline text-[var(--green)]">Newsletter</span>
            <h3 className="font-serif text-4xl md:text-5xl mt-4 leading-[1.05]">
              Field notes,
              <br />
              once a month — <em className="italic text-[var(--green)]">never noise</em>.
            </h3>
          </div>
          <div className="col-span-12 lg:col-span-5 self-end">
            <form onSubmit={subscribe} className="flex items-end gap-3" data-testid="newsletter-form">
              <div className="flex-1">
                <label className="text-[11px] tracking-[0.2em] uppercase text-[var(--linen)]/60">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="line-input on-dark"
                  data-testid="newsletter-email"
                />
              </div>
              <button type="submit" className="btn btn-primary" data-testid="newsletter-submit">
                {subscribed ? "Subscribed ✓" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-12 gap-10 py-16">
          <div className="col-span-12 md:col-span-5">
            <a href="#home" className="flex items-center gap-3" data-testid="footer-logo">
              <div className="w-10 h-10 rounded-full bg-[var(--green)] flex items-center justify-center">
                <span className="font-serif text-white text-xl leading-none">iA</span>
              </div>
              <div className="leading-tight">
                <div className="font-serif text-[22px]">InAmigos</div>
                <div className="text-[9px] tracking-[0.28em] uppercase text-[var(--linen)]/60">
                  Foundation
                </div>
              </div>
            </a>
            <p className="text-[var(--linen)]/65 mt-6 max-w-sm leading-relaxed">
              A registered non-profit working across 28 Indian states since 2018.
              80G & 12A certified. CSR-eligible.
            </p>
            <div className="mt-6 text-sm text-[var(--linen)]/70">
              <div>{SITE.address}</div>
              <a href={`mailto:${SITE.email}`} className="link-underline">{SITE.email}</a>
            </div>
          </div>

          <div className="col-span-6 md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.22em] text-[var(--green)] mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-[var(--linen)]/85 hover:text-[var(--green)] transition-colors link-underline text-[15px]"
                    data-testid={`footer-nav-${n.label.toLowerCase()}`}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.22em] text-[var(--green)] mb-5">
              Get involved
            </h4>
            <ul className="space-y-3">
              {[
                ["Donate", "#donate"],
                ["Volunteer", "#volunteer"],
                ["CSR Partnerships", "#contact"],
                ["Annual Report 2024", "#impact"],
                ["Media Kit", "#contact"],
              ].map(([t, h]) => (
                <li key={t}>
                  <a
                    href={h}
                    className="inline-flex items-center gap-2 text-[var(--linen)]/85 hover:text-[var(--green)] transition-colors text-[15px]"
                    data-testid={`footer-link-${t.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {t} <ArrowUpRight size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Massive wordmark */}
        <div
          className="relative border-t border-[var(--line-dark)] pt-12 pb-10 overflow-hidden"
          data-testid="footer-wordmark"
        >
          <div className="font-serif italic text-[18vw] md:text-[14vw] leading-none tracking-tighter text-[var(--linen)]/[0.07] select-none whitespace-nowrap text-center">
            inamigos.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-7 border-t border-[var(--line-dark)] text-xs text-[var(--linen)]/55">
          <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="link-underline">Privacy</a>
            <a href="#" className="link-underline">Terms</a>
            <a href="#home" className="inline-flex items-center gap-2 link-underline" data-testid="footer-back-top">
              Back to top <ArrowUp size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
