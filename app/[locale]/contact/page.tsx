import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail, Building } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact Us | تواصل معنا" };

export default function ContactPage() {
  const t = useTranslations("contact");
  const cards = [
    { icon: MapPin, label: "Address", value: t("address") },
    { icon: Phone,  label: "Phone",   value: t("phone") },
    { icon: Mail,   label: "Email",   value: t("email") },
    { icon: Building, label: "Registration", value: `${t("cr")} · ${t("vat")}` }
  ];
  return (
    <>
      <section className="relative bg-navy text-cream pt-40 pb-28 grain diag-bottom overflow-hidden">
        <div className="absolute inset-0 bg-diagonal-grid bg-diagonal-grid opacity-50"/>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="section-label mb-4">11 — CONTACT</div>
          <h1 className="h-display text-5xl md:text-7xl text-cream">{t("title")}</h1>
          <p className="font-arabic text-2xl text-gold mt-3" dir="rtl">{t("subtitle")}</p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {cards.map(c => (
            <div key={c.label} className="bg-white border border-navy/10 p-6">
              <c.icon className="text-gold mb-3" size={22}/>
              <div className="text-xs uppercase tracking-widest text-navy/50 mb-1">{c.label}</div>
              <div className="text-navy font-medium text-sm leading-snug">{c.value}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <ContactForm />
          <div className="bg-navy text-cream relative overflow-hidden min-h-[450px]">
            <iframe
              title="SPK Location"
              src="https://www.google.com/maps?q=Riyadh+Saudi+Arabia&output=embed"
              className="absolute inset-0 w-full h-full opacity-90"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
