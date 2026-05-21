"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();
  const target = locale === "en" ? "ar" : "en";
  const stripped = pathname.replace(/^\/(en|ar)/, "") || "/";
  return (
    <Link href={`/${target}${stripped === "/" ? "" : stripped}`}
      className="text-cream hover:text-gold border border-gold/40 px-3 py-1.5 text-xs tracking-widest uppercase rounded-sm transition">
      {target === "ar" ? "عربي" : "EN"}
    </Link>
  );
}
