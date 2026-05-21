import { useTranslations } from "next-intl";
import ServicesGrid from "@/components/ServicesGrid";

export const metadata = { title: "Our Services | خدماتنا" };

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations("services");
  return (
    <>
      <section className="relative bg-navy text-cream pt-40 pb-28 grain diag-bottom overflow-hidden">
        <div className="absolute inset-0 bg-diagonal-grid bg-diagonal-grid opacity-50"/>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="section-label mb-4">04 — SERVICES</div>
          <h1 className="h-display text-5xl md:text-7xl text-cream">{t("title")}</h1>
          <p className="font-arabic text-2xl text-gold mt-3" dir="rtl">{t("subtitle")}</p>
          <p className="text-cream/70 mt-6 max-w-2xl">{t("tagline")}</p>
        </div>
      </section>
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10">
        <ServicesGrid locale={locale} />
      </section>
    </>
  );
}
