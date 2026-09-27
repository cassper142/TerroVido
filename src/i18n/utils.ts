import type { Locale, Dictionary } from './dictionaries';
import {
  dictionaries,
  defaultLocale,
  locales,
  localeLabels,
} from './dictionaries';

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && locales.includes(value as Locale);
}

export function isDefaultLocale(value: unknown): value is typeof defaultLocale {
  return value === defaultLocale;
}

export function getLocaleFromPathname(pathname: string): Locale | undefined {
  const first = pathname.split('/').filter(Boolean)[0];
  return isLocale(first) ? first : undefined;
}

export function stripLocaleFromPathname(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (isLocale(parts[0])) parts.shift();
  return '/' + parts.join('/');
}

export function localizePath(pathname: string, locale: Locale): string {
  const stripped = stripLocaleFromPathname(pathname);
  const clean = stripped === '' ? '/' : stripped;
  if (locale === defaultLocale) return clean === '/' ? '/' : clean;
  return `/${locale}${clean === '/' ? '/' : clean}`;
}

export function getTranslator(locale: Locale) {
  const dict: Dictionary = dictionaries[locale] ?? dictionaries[defaultLocale];
  const t = <K extends keyof Dictionary>(key: K): Dictionary[K] => dict[key];
  t.locale = locale;
  t.dict = dict;
  return t;
}

export { dictionaries, defaultLocale, locales, localeLabels };
export type { Locale };
