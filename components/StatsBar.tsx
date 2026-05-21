"use client";
import { useTranslations } from "next-intl";
import AnimatedCounter from "./AnimatedCounter";

export default function StatsBar() {
  const t = useTranslations("home.stats");
  const items = [
    { n: 100, s: "+", l: t("projects") },
    { n: 50,  s: "+", l: t("pros") },
    { n: 6,   s: "+", l: t("disciplines") },
    { n: 5,   s: "+", l: t("years") },
    { n: 24,  s: "/7", l: t("support") }
  ];
  return (
    <section className="bg-gold relative diag-bottom -mt-1">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        {items.map(it => (
          <div key={it.l} className="text-center">
            <AnimatedCounter value={it.n} suffix={it.s} />
            <div className="mt-2 text-navy/80 text-sm font-medium tracking-wide uppercase">{it.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
