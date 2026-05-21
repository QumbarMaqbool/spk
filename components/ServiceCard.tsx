"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/services";
import { useTranslations } from "next-intl";

export default function ServiceCard({ service, locale, index = 0 }: { service: Service; locale: string; index?: number }) {
  const t = useTranslations("home");
  const Icon = (Icons as any)[service.icon] || Icons.Wrench;
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ delay: index * 0.05, duration: 0.5 }}>
      <Link href={`/${locale}/services/${service.slug}`}
        className="group block bg-cream border border-navy/10 p-7 card-lift h-full relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-gold/5 rounded-full group-hover:bg-gold/15 transition" />
        <div className="relative">
          <div className="w-14 h-14 bg-navy text-gold flex items-center justify-center mb-5 group-hover:bg-gold group-hover:text-navy transition">
            <Icon size={26} />
          </div>
          <h3 className="font-display text-xl font-bold text-navy mb-1 leading-snug">{service.title}</h3>
          <p className="text-xs text-navy/50 mb-3 font-arabic" dir="rtl">{service.titleAr}</p>
          <p className="text-sm text-navy/70 mb-5 leading-relaxed line-clamp-3">{service.shortDesc}</p>
          <span className="inline-flex items-center gap-1 text-gold font-semibold text-sm group-hover:gap-3 transition-all">
            {t("learnMore")} <ArrowUpRight size={16}/>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
