"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import clsx from "clsx";

export default function Navbar({ locale }: { locale: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("nav");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/services`, label: t("services") },
    { href: `/${locale}/why-us`, label: t("whyUs") },
    { href: `/${locale}/contact`, label: t("contact") }
  ];

  return (
    <header className={clsx(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300",
      scrolled ? "bg-navy/95 backdrop-blur-md shadow-xl" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-baseline gap-2">
          <span className="font-display text-3xl font-black text-gold">SPK</span>
          <span className="hidden sm:inline text-cream text-xs tracking-widest uppercase">General Contracting</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={clsx("nav-link text-cream/90 hover:text-gold text-sm font-medium tracking-wide", pathname === l.href && "active text-gold")}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-5">
          <LanguageSwitcher locale={locale} />
          <Link href={`/${locale}/contact`} className="btn-gold !py-2.5 !px-5 text-sm">{t("quote")}</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-cream p-2">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-navy border-t border-gold/20">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-cream hover:text-gold py-2">{l.label}</Link>
            ))}
            <LanguageSwitcher locale={locale} />
            <Link href={`/${locale}/contact`} onClick={() => setOpen(false)} className="btn-gold">{t("quote")}</Link>
          </div>
        </div>
      )}
    </header>
  );
}
