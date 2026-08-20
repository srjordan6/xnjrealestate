import en from './en.json';
import zh from './zh.json';

export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const htmlLang: Record<Locale, string> = {
  en: 'en',
  zh: 'zh-Hans'
};

const dictionaries = { en, zh } as const;

export function getLocaleFromUrl(url: URL): Locale {
  const [, seg] = url.pathname.split('/');
  return (locales as readonly string[]).includes(seg) ? (seg as Locale) : defaultLocale;
}

export function useTranslations(locale: Locale) {
  return (key: keyof typeof en): string =>
    (dictionaries[locale] as Record<string, string>)[key] ?? en[key];
}

export function localizePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === defaultLocale ? clean : `/${locale}${clean}`;
}

export function alternates(path: string) {
  return locales.map((l) => ({ locale: l, hreflang: htmlLang[l], href: localizePath(path, l) }));
}
