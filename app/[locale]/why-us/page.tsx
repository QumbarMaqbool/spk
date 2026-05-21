import { reasons } from "@/lib/why-us";
import { industries } from "@/lib/industries";

export const metadata = { title: "Why Choose Us | لماذا تختارنا" };

export default function WhyUsPage() {
  return (
    <>
      <section className="relative bg-navy text-cream pt-40 pb-28 grain diag-bottom overflow-hidden">
        <div className="absolute inset-0 bg-diagonal-grid bg-diagonal-grid opacity-50"/>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="section-label mb-4">10 — WHY US</div>
          <h1 className="h-display text-5xl md:text-7xl text-cream">Why Choose Us</h1>
          <p className="font-arabic text-2xl text-gold mt-3" dir="rtl">لماذا تختارنا</p>
        </div>
      </section>
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="bg-white border border-navy/10 p-8 card-lift">
              <div className="w-14 h-14 bg-navy text-gold flex items-center justify-center mb-5"><r.icon size={26}/></div>
              <h3 className="font-display text-xl text-navy mb-3">{r.title}</h3>
              <p className="text-sm text-navy/70 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 bg-cream-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="section-label mb-4">09 — INDUSTRIES</div>
          <h2 className="h-display text-4xl md:text-5xl text-navy mb-12">Industries We Serve</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map(ind => (
              <div key={ind.key} className="relative h-72 overflow-hidden group">
                <img src={ind.img} alt={ind.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-transparent"/>
                <div className="absolute bottom-0 inset-x-0 p-6 text-cream">
                  <h3 className="font-display text-2xl mb-1">{ind.title}</h3>
                  <p className="text-xs text-gold mb-3 font-arabic" dir="rtl">{ind.titleAr}</p>
                  <p className="text-sm text-cream/80">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
