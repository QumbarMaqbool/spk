import Link from "next/link";
import { useTranslations } from "next-intl";
import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { services } from "@/lib/services";

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const contact = useTranslations("contact");
  const main = services.slice(0, 6);
  return (
    <footer className="bg-navy text-cream/80 mt-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="font-display text-3xl font-black text-gold mb-2">SPK</div>
          <p className="text-sm leading-relaxed mb-6">{t("tagline")}</p>
          <div className="flex gap-3">
            <a aria-label="Facebook" href="#" className="p-2 border border-gold/30 hover:bg-gold hover:text-navy rounded-sm transition"><Facebook size={16}/></a>
            <a aria-label="LinkedIn" href="#" className="p-2 border border-gold/30 hover:bg-gold hover:text-navy rounded-sm transition"><Linkedin size={16}/></a>
            <a aria-label="Instagram" href="#" className="p-2 border border-gold/30 hover:bg-gold hover:text-navy rounded-sm transition"><Instagram size={16}/></a>
          </div>
        </div>
        <div>
          <h4 className="font-display text-gold text-lg mb-5">{t("quickLinks")}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href={`/${locale}`} className="hover:text-gold">{nav("home")}</Link></li>
            <li><Link href={`/${locale}/about`} className="hover:text-gold">{nav("about")}</Link></li>
            <li><Link href={`/${locale}/services`} className="hover:text-gold">{nav("services")}</Link></li>
            <li><Link href={`/${locale}/why-us`} className="hover:text-gold">{nav("whyUs")}</Link></li>
            <li><Link href={`/${locale}/contact`} className="hover:text-gold">{nav("contact")}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-gold text-lg mb-5">{t("servicesCol")}</h4>
          <ul className="space-y-2 text-sm">
            {main.map(s => (
              <li key={s.slug}><Link href={`/${locale}/services/${s.slug}`} className="hover:text-gold">{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-gold text-lg mb-5">{t("contactCol")}</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 text-gold shrink-0"/>{contact("address")}</li>
            <li className="flex gap-2"><Phone size={16} className="text-gold shrink-0"/>{contact("phone")}</li>
            <li className="flex gap-2"><Mail size={16} className="text-gold shrink-0"/>{contact("email")}</li>
            <li className="text-xs text-cream/60 pt-2">{contact("cr")} · {contact("vat")}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 text-xs text-cream/60 flex flex-wrap justify-between gap-2">
          <span>© 2025 SPK General Contracting & Trading Co. {t("rights")}</span>
          <span>CR: 7054055483 · VAT: 314730539600003</span>
        </div>
      </div>
    </footer>
  );
}
