import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { translations } from './lib/translations';

export const locales = ['en', 'ar'] as const;
export const defaultLocale = 'en' as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) notFound();
  return { messages: translations[locale as Locale] };
});
