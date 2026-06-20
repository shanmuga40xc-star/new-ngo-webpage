import { useEffect, useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { NAV, SITE } from "./data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50" data-testid="site-header">
      {/* Utility bar */}
      <div className="bg-[var(--forest)] text-[var(--linen)]" data-testid="utility-bar">
        <div className="container-x flex items-center justify-between py-2 text-[11px] tracking-[0.18em] uppercase">
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-2 link-underline"
            data-testid="utility-email"
          >
            <Mail size={13} strokeWidth={1.75} />
            <span className="hidden sm:inline">{SITE.email}</span>
            <span className="sm:hidden">Email Us</span>
          </a>
          <span className="hidden md:inline text-[var(--linen)]/70">
            Helpline · {SITE.helpline}
          </span>
          <a href="#donate" className="link-underline" data-testid="utility-donate-link">
            Donate
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-[var(--linen)]/85 backdrop-blur-xl border-b border-[var(--line)]"
            : "bg-[var(--linen)] border-b border-transparent"
        }`}
      >
        <div className="container-x flex items-center justify-between py-5">
          <a href="#home" className="flex items-center gap-3" data-testid="site-logo">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-[var(--green)] flex items-center justify-center">
                <span className="font-serif text-white text-xl leading-none">iA</span>
              </div>
              <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-[var(--forest)] border-2 border-[var(--linen)]" />
            </div>
            <div className="leading-tight">
              <div className="font-serif text-[22px] text-[var(--ink)]">InAmigos</div>
              <div className="text-[9px] tracking-[0.28em] uppercase text-[var(--olive)]">
                Foundation
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[13px] tracking-wide text-[var(--charcoal)] hover:text-[var(--green)] transition-colors link-underline"
                data-testid={`nav-${n.label.toLowerCase()}`}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#donate"
              className="hidden sm:inline-flex btn btn-primary"
              data-testid="nav-donate-cta"
            >
              Donate
            </a>
            <button
              onClick={() => setOpen((s) => !s)}
              className="lg:hidden w-11 h-11 rounded-full border border-[var(--line)] flex items-center justify-center"
              aria-label="Toggle menu"
              data-testid="nav-menu-toggle"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-[var(--line)] bg-[var(--linen)]">
            <div className="container-x py-4 flex flex-col gap-2">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[15px] text-[var(--charcoal)] border-b border-[var(--line)]"
                  data-testid={`mobile-nav-${n.label.toLowerCase()}`}
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#donate"
                onClick={() => setOpen(false)}
                className="mt-3 btn btn-primary w-full"
                data-testid="mobile-nav-donate"
              >
                Donate
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
