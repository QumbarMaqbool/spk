import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getService } from "@/lib/services";
import * as Icons from "lucide-react";
import { ArrowRight, Check } from "lucide-react";

export function generateStaticParams() {
  return services.flatMap(s => [{ locale: "en", slug: s.slug }, { locale: "ar", slug: s.slug }]);
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  return { title: s ? `${s.title} | SPK` : "Service" };
}

export default function ServiceDetail({ params: { slug, locale } }: { params: { slug: string; locale: string } }) {
  const service = getService(slug);
  if (!service) notFound();
  const Icon = (Icons as any)[service.icon] || Icons.Wrench;
  const related = services.filter(s => s.slug !== service.slug).slice(0, 5);

  return (
    <>
      <section className="relative bg-navy text-cream pt-40 pb-28 grain diag-bottom overflow-hidden">
        <div className="absolute inset-0 bg-diagonal-grid bg-diagonal-grid opacity-50"/>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-9">
            <div className="section-label mb-4">SPK / SERVICES</div>
            <h1 className="h-display text-4xl md:text-6xl text-cream leading-tight">{service.title}</h1>
            <p className="font-arabic text-xl text-gold mt-3" dir="rtl">{service.titleAr}</p>
            <p className="text-cream/75 mt-6 max-w-3xl text-lg">{service.subtitle}</p>
          </div>
          <div className="lg:col-span-3 flex lg:justify-end">
            <div className="w-24 h-24 bg-gold text-navy flex items-center justify-center"><Icon size={44}/></div>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          {service.sections.map(sec => (
            <div key={sec.heading}>
              <h2 className="font-display text-2xl md:text-3xl text-navy mb-6 pb-3 border-b-2 border-gold inline-block">{sec.heading}</h2>
              <ul className="space-y-3">
                {sec.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-navy/80 leading-relaxed">
                    <Check size={18} className="text-gold shrink-0 mt-1"/>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <aside className="lg:col-span-4">
          <div className="bg-navy text-cream p-8 sticky top-28">
            <div className="section-label mb-3">RELATED</div>
            <h3 className="font-display text-2xl text-cream mb-5">Related Services</h3>
            <ul className="space-y-3">
              {related.map(r => (
                <li key={r.slug}>
                  <Link href={`/${locale}/services/${r.slug}`}
                    className="flex justify-between items-center group text-cream/80 hover:text-gold border-b border-cream/10 pb-3">
                    <span className="text-sm">{r.title}</span>
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition"/>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href={`/${locale}/contact`} className="btn-gold w-full mt-8 justify-center">Get a Quote <ArrowRight size={16}/></Link>
          </div>
        </aside>
      </section>
    </>
  );
}
