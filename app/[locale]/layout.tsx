import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Tajawal } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../globals.css";

export const dynamic = 'force-dynamic';

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["400","600","700","900"] });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", weight: ["400","500","600","700"] });
const tajawal = Tajawal({ subsets: ["arabic"], variable: "--font-tajawal", weight: ["400","500","700","900"] });

export const metadata: Metadata = {
  title: { default: "SPK General Contracting & Trading Co. — Riyadh, KSA", template: "%s | SPK General Contracting" },
  description: "Saudi-based MEP, Civil, HVAC, Fire Protection, Solar and Facility Management contractor delivering integrated engineering solutions across the Kingdom.",
  keywords: ["SPK","Saudi contractor","MEP Riyadh","HVAC KSA","facility management Saudi Arabia","civil works","fire protection"],
  authors: [{ name: "SPK General Contracting & Trading Co." }],
  openGraph: { type: "website", siteName: "SPK General Contracting & Trading Co." }
};

export function generateStaticParams() { return locales.map(locale => ({ locale })); }

export default async function LocaleLayout({
  children, params: { locale }
}: { children: React.ReactNode; params: { locale: string } }) {
  if (!locales.includes(locale as any)) notFound();
  unstable_setRequestLocale(locale);
  const messages = await getMessages({ locale });
  const dir = locale === "ar" ? "rtl" : "ltr";
  return (
    <div lang={locale} dir={dir} className={`${playfair.variable} ${dmSans.variable} ${tajawal.variable} font-sans antialiased bg-cream text-navy`}>
      <NextIntlClientProvider messages={messages}>
        <Navbar locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
      </NextIntlClientProvider>
    </div>
  );
}
