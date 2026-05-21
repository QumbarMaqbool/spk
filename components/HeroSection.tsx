"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

export default function HeroSection({ locale }: { locale: string }) {
  const t = useTranslations("home");
  const title = t("heroTitle");
  const words = title.split(" ");
  const tickerItems = ["HVAC Systems","MEP Engineering","Civil Works","Fire Protection","Solar Energy","Facility Management"];
  return (
    <section className="relative min-h-screen bg-navy text-cream overflow-hidden grain pt-28 pb-32 diag-bottom">
      <div className="absolute inset-0 bg-diagonal-grid bg-diagonal-grid opacity-60" />
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="section-label mb-6">01 — SPK General Contracting & Trading Co.</motion.div>
          <h1 className="h-display text-5xl md:text-6xl lg:text-7xl text-cream mb-8">
            {words.map((wd, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.05, duration: 0.6 }} className="inline-block mr-3">
                {wd.includes("Future") || wd.includes("مستقبل") ? <span className="text-gold italic">{wd}</span> : wd}
              </motion.span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-cream/75 max-w-2xl mb-10 leading-relaxed">
            {t("heroSub")}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
            className="flex flex-wrap gap-4">
            <Link href={`/${locale}/services`} className="btn-gold">{t("ctaExplore")} <ArrowRight size={18}/></Link>
            <Link href={`/${locale}/contact`} className="btn-outline">{t("ctaQuote")}</Link>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.8 }}
          className="hidden lg:flex lg:col-span-4 justify-center">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 border-2 border-gold rotate-45 animate-pulse" />
            <div className="absolute inset-6 border border-gold/40 rotate-45" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="font-display text-7xl font-black text-gold">SPK</div>
                <div className="text-xs tracking-[0.3em] text-cream/60 mt-2">EST. KSA</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-12 inset-x-0 overflow-hidden border-y border-gold/20 bg-navy-900/50 py-4">
        <div className="ticker text-gold/80 font-mono text-sm tracking-widest uppercase">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((it, i) => (
            <span key={i} className="flex items-center gap-12"><span>{it}</span><span className="text-gold">•</span></span>
          ))}
        </div>
      </div>
    </section>
  );
}
