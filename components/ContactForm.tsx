"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { services } from "@/lib/services";
import { Send, Check } from "lucide-react";

type FormState = { name: string; company: string; phone: string; email: string; service: string; message: string };

export default function ContactForm() {
  const t = useTranslations("contact");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", service: "", message: "" });
  const upd = (k: keyof FormState, v: string) => setForm(s => ({ ...s, [k]: v }));

  if (sent) return (
    <div className="bg-navy text-cream p-12 text-center">
      <div className="w-16 h-16 mx-auto bg-gold text-navy rounded-full flex items-center justify-center mb-5"><Check size={28}/></div>
      <h3 className="font-display text-2xl mb-3 text-gold">Message Sent</h3>
      <p className="text-cream/80 max-w-md mx-auto">{t("success")}</p>
    </div>
  );

  return (
    <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="bg-white border border-navy/10 p-8 lg:p-10 space-y-5 shadow-xl">
      <div className="grid md:grid-cols-2 gap-5">
        <Field label={t("formName")} value={form.name} onChange={v => upd("name", v)} required />
        <Field label={t("formCompany")} value={form.company} onChange={v => upd("company", v)} />
        <Field label={t("formPhone")} value={form.phone} onChange={v => upd("phone", v)} required />
        <Field label={t("formEmail")} value={form.email} onChange={v => upd("email", v)} type="email" required />
      </div>
      <div>
        <label className="text-xs uppercase tracking-widest text-navy/60 font-semibold">{t("formService")}</label>
        <select required value={form.service} onChange={e => upd("service", e.target.value)}
          className="mt-1 w-full border-b-2 border-navy/20 focus:border-gold py-3 bg-transparent outline-none">
          <option value="">—</option>
          {services.map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}
        </select>
      </div>
      <div>
        <label className="text-xs uppercase tracking-widest text-navy/60 font-semibold">{t("formMessage")}</label>
        <textarea required rows={5} value={form.message} onChange={e => upd("message", e.target.value)}
          className="mt-1 w-full border-b-2 border-navy/20 focus:border-gold py-3 bg-transparent outline-none resize-none" />
      </div>
      <button type="submit" className="btn-gold w-full md:w-auto">{t("formSubmit")} <Send size={16}/></button>
    </form>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
};

function Field({ label, value, onChange, type = "text", required = false }: FieldProps) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-navy/60 font-semibold">{label}{required && " *"}</label>
      <input type={type} required={required} value={value} onChange={e => onChange(e.target.value)}
        className="mt-1 w-full border-b-2 border-navy/20 focus:border-gold py-3 bg-transparent outline-none" />
    </div>
  );
}
