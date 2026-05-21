import { useTranslations } from "next-intl";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ServicesGrid from "@/components/ServicesGrid";
import { industries } from "@/lib/industries";
import { reasons } from "@/lib/why-us";
import { ArrowRight } from "lucide-react";

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <>
      <HeroSection locale={locale} />
      <StatsBar />
      <ServicesSection locale={locale} />
      <AboutTeaser locale={locale} />
      <IndustriesSection />
      <WhyUsSection />
      <CTABanner locale={locale} />
    </>
  );
}

function ServicesSection({ locale }: { locale: string }) {
  const t = useTranslations("home");
  return (
    <section className="py-28 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="section-label mb-4">{t("servicesLabel")}</div>
      <h2 className="h-display text-4xl md:text-5xl text-navy mb-14 max-w-3xl">{t("servicesHeading")}</h2>
      <ServicesGrid locale={locale} />
    </section>
  );
}

function AboutTeaser({ locale }: { locale: string }) {
  const t = useTranslations("home");
  return (
    <section className="py-28 bg-cream-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[500px] bg-navy overflow-hidden">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=70"
            alt="SPK Team" className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-cream">
            <div className="text-xs tracking-widest uppercase text-gold mb-2">02 — Established</div>
            <div className="font-display text-2xl">SPK General Contracting & Trading Co.</div>
          </div>
        </div>
        <div>
          <div className="section-label mb-4">03 — ABOUT US</div>
          <h2 className="h-display text-4xl md:text-5xl text-navy mb-6">{t("aboutHeading")}</h2>
          <p className="text-navy/75 leading-relaxed mb-6">{t("aboutBody")}</p>
          <div className="flex gap-6 text-sm font-mono mb-8">
            <div><div className="text-navy/50 uppercase text-xs tracking-widest">CR</div><div className="text-navy font-bold">7054055483</div></div>
            <div><div className="text-navy/50 uppercase text-xs tracking-widest">VAT</div><div className="text-navy font-bold">314730539600003</div></div>
          </div>
          <Link href={`/${locale}/about`} className="btn-gold">More About Us <ArrowRight size={18}/></Link>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const t = useTranslations("home");
  return (
    <section className="py-28 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="section-label mb-4">{t("industriesLabel")}</div>
      <h2 className="h-display text-4xl md:text-5xl text-navy mb-14 max-w-3xl">{t("industriesHeading")}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {industries.map(ind => (
          <div key={ind.key} className="relative h-72 overflow-hidden group cursor-pointer">
            <img src={ind.img} alt={ind.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"/>
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-6 text-cream">
              <h3 className="font-display text-2xl mb-1">{ind.title}</h3>
              <p className="text-xs text-gold mb-3 font-arabic" dir="rtl">{ind.titleAr}</p>
              <p className="text-sm text-cream/80">{ind.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyUsSection() {
  const t = useTranslations("home");
  return (
    <section className="py-28 bg-navy text-cream grain relative diag-top diag-bottom">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="section-label mb-4">10 — WHY US</div>
        <h2 className="h-display text-4xl md:text-5xl text-cream mb-14 max-w-3xl">{t("whyHeading")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="border border-cream/15 p-7 hover:border-gold transition group bg-navy-900/40">
              <div className="w-12 h-12 bg-gold/10 text-gold flex items-center justify-center mb-5 group-hover:bg-gold group-hover:text-navy transition">
                <r.icon size={22}/>
              </div>
              <h3 className="font-display text-xl text-cream mb-3">{r.title}</h3>
              <p className="text-cream/70 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner({ locale }: { locale: string }) {
  const t = useTranslations("home");
  return (
    <section className="bg-gold py-24 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="h-display text-4xl md:text-5xl text-navy mb-3">{t("ctaBannerHeading")}</h2>
        <p className="text-navy/70 text-xl font-arabic mb-10" dir="rtl">{t("ctaBannerSub")}</p>
        <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 bg-navy text-cream px-8 py-4 font-semibold hover:bg-navy-900 transition">
          {t("ctaBannerBtn")} <ArrowRight size={18}/>
        </Link>
      </div>
    </section>
  );
}
