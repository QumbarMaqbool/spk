import { useTranslations } from "next-intl";
import { ShieldCheck, Award, Users, Briefcase, Hammer, FileCheck, Building, Sparkles, GraduationCap, Cpu, Flag, Leaf, MapPin } from "lucide-react";

export const metadata = { title: "About SPK | عن شركة إس بي كيه" };

export default function AboutPage() {
  return (
    <>
      <PageHero label="02 — ABOUT" title="About SPK" subtitle="عن شركة إس بي كيه" />
      <AboutBody />
      <VisionMission />
      <Team />
      <Credentials />
      <Future />
    </>
  );
}

function PageHero({ label, title, subtitle }: { label: string; title: string; subtitle: string }) {
  return (
    <section className="relative bg-navy text-cream pt-40 pb-28 diag-bottom grain overflow-hidden">
      <div className="absolute inset-0 bg-diagonal-grid bg-diagonal-grid opacity-50"/>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="section-label mb-4">{label}</div>
        <h1 className="h-display text-5xl md:text-7xl text-cream">{title}</h1>
        <p className="font-arabic text-2xl text-gold mt-3" dir="rtl">{subtitle}</p>
      </div>
    </section>
  );
}

function AboutBody() {
  return (
    <section className="py-24 max-w-4xl mx-auto px-6 lg:px-10">
      <p className="text-lg leading-relaxed text-navy/80">
        SPK General Contracting and Trading Co. is a Saudi-based professional contracting and trading company delivering reliable, compliant, and cost-effective solutions across the Kingdom of Saudi Arabia. Founded with a commitment to quality and operational excellence, SPK provides integrated engineering, construction, and facility solutions for the hospitality, commercial, residential, industrial, and government sectors. Our approach combines strong technical expertise with practical field experience, supporting clients from planning and execution through long-term maintenance and asset optimization. With deep roots in building contracting and facility operations, we ensure service continuity, safety, and asset protection — maintaining international standards and full compliance with local Saudi regulations. Our focus is not only on completing projects, but on building long-term relationships based on trust, performance, and reliability.
      </p>
    </section>
  );
}

function VisionMission() {
  const vp = ["Industry Leadership","International Standards","Vision 2030 Alignment","Long-Term Partnerships"];
  const mv = ["Quality First","Safety Always","Client Focus","Skilled Workforce"];
  return (
    <section className="py-24 bg-cream-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-6">
        <div className="bg-navy text-cream p-10 lg:p-14 grain relative overflow-hidden">
          <div className="section-label mb-4">04 — VISION</div>
          <h3 className="h-display text-3xl text-gold mb-5">Our Vision</h3>
          <p className="text-cream/80 leading-relaxed mb-8">To be the most trusted and respected contracting partner in Saudi Arabia — delivering exceptional reliability, superior quality, uncompromising safety, and operational excellence that consistently surpasses industry standards and builds lasting client trust.</p>
          <ul className="grid grid-cols-2 gap-3">{vp.map(v => <li key={v} className="text-sm border border-gold/30 px-3 py-2 text-gold">{v}</li>)}</ul>
        </div>
        <div className="bg-gold text-navy p-10 lg:p-14 relative">
          <div className="text-navy/60 text-sm tracking-[0.3em] uppercase mb-4">05 — MISSION</div>
          <h3 className="h-display text-3xl text-navy mb-5">Our Mission</h3>
          <p className="text-navy/85 leading-relaxed mb-8">Elevating Excellence — We are committed to delivering reliable, efficient, and high-quality contracting and trading services that enhance operational performance, ensure safety, and create long-term value for our clients through skilled professionals, innovative practices, and a strong focus on customer satisfaction.</p>
          <ul className="grid grid-cols-2 gap-3">{mv.map(v => <li key={v} className="text-sm border border-navy/40 px-3 py-2 text-navy font-semibold">{v}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

function Team() {
  const items = [
    { icon: Briefcase, title: "Senior Management", desc: "Experienced leaders with multi-decade track records in contracting, operations, and business development across KSA" },
    { icon: Cpu, title: "Engineering Team", desc: "Qualified engineers in MEP, civil, electrical, and ELV disciplines, supported by draftsmen and BIM specialists" },
    { icon: Hammer, title: "Site Supervision", desc: "Dedicated site supervisors, foremen, and HSE officers managing quality, safety, and progress on each project" },
    { icon: Users, title: "Skilled Technicians", desc: "Trained and certified technicians in all disciplines ensuring professional installation and maintenance works" },
    { icon: FileCheck, title: "Administrative Support", desc: "Procurement, finance, HR, and document control professionals supporting seamless project delivery" },
    { icon: ShieldCheck, title: "QA/QC Team", desc: "Dedicated quality assurance and quality control personnel ensuring every deliverable meets our standards" }
  ];
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="section-label mb-4">06 — TEAM</div>
      <h2 className="h-display text-4xl md:text-5xl text-navy mb-12">Our Team</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(i => (
          <div key={i.title} className="bg-white border border-navy/10 p-7 card-lift">
            <i.icon className="text-gold mb-4" size={28}/>
            <h3 className="font-display text-xl text-navy mb-2">{i.title}</h3>
            <p className="text-sm text-navy/70 leading-relaxed">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Credentials() {
  const items = [
    { icon: Award, title: "Commercial Registration", desc: "Issued by the Ministry of Commerce, Kingdom of Saudi Arabia" },
    { icon: FileCheck, title: "VAT Registration", desc: "Registered with ZATCA (Saudi Tax Authority)" },
    { icon: ShieldCheck, title: "GOSI Registration", desc: "Registered with the General Organization for Social Insurance" },
    { icon: Users, title: "Muqeem Registration", desc: "Compliant with Saudi labor and residency regulations" },
    { icon: Building, title: "Municipality License", desc: "Valid municipal business license — Riyadh Region" },
    { icon: ShieldCheck, title: "Safety Compliance", desc: "Civil Defence registration and fire safety system approvals" }
  ];
  return (
    <section className="py-24 bg-cream-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="section-label mb-4">07 — CREDENTIALS</div>
        <h2 className="h-display text-4xl md:text-5xl text-navy mb-12">Certifications & Registrations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(i => (
            <div key={i.title} className="bg-white border-l-4 border-gold p-7 shadow-sm">
              <i.icon className="text-navy mb-3" size={26}/>
              <h3 className="font-display text-lg text-navy mb-2">{i.title}</h3>
              <p className="text-sm text-navy/70">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Future() {
  const items = [
    { icon: Sparkles, title: "Expanding Service Capabilities", desc: "Growing our portfolio of services to meet the evolving infrastructure needs of the Kingdom" },
    { icon: GraduationCap, title: "Workforce Training & Development", desc: "Investing in our people through continuous learning, certifications, and technical upskilling programs" },
    { icon: Cpu, title: "Modern Tools & Technologies", desc: "Adopting the latest construction technologies, BIM modeling, and smart building solutions" },
    { icon: Flag, title: "Supporting Vision 2030", desc: "Actively participating in the Kingdom's transformation through quality engineering and sustainable construction" },
    { icon: Leaf, title: "Sustainable Practices", desc: "Integrating environmentally responsible methods and materials across all our projects" },
    { icon: MapPin, title: "Expanding National Footprint", desc: "Extending our operations across key regions of Saudi Arabia to serve clients throughout the Kingdom" }
  ];
  return (
    <section className="py-24 bg-navy text-cream grain diag-top relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="section-label mb-4">08 — FUTURE</div>
        <h2 className="h-display text-4xl md:text-5xl text-cream mb-12">Future Commitment</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(i => (
            <div key={i.title} className="border border-cream/15 p-7 hover:border-gold transition">
              <i.icon className="text-gold mb-4" size={26}/>
              <h3 className="font-display text-lg text-cream mb-2">{i.title}</h3>
              <p className="text-sm text-cream/70">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
