import { defineMiddleware } from 'astro:middleware';
import {
  defaultLocale,
  isLocale,
  getLocaleFromPathname,
  stripLocaleFromPathname,
  locales,
} from './i18n/utils';

const COOKIE_NAME = 'tv-locale';

function pickPreferredLocale(acceptHeader: string | null | undefined): string {
  if (!acceptHeader) return defaultLocale;
  const items = acceptHeader
    .split(',')
    .map((raw) => {
      const [tag, q = 'q=1'] = raw.split(';').map((s) => s.trim());
      const quality = parseFloat(q.replace('q=', '')) || 1;
      return { tag, quality };
    })
    .sort((a, b) => b.quality - a.quality);
  for (const { tag } of items) {
    const short = tag.toLowerCase().slice(0, 2);
    if (isLocale(short)) return short;
  }
  return defaultLocale;
}

export const onRequest = defineMiddleware(async (context, next) => {
  const url = context.url;
  const { pathname } = url;

  if (pathname.startsWith('/images/')) return next();
  if (/\.\w+$/.test(pathname)) return next();

  const localeInUrl = getLocaleFromPathname(pathname);
  let locale = localeInUrl;

  if (!locale) {
    const cookieLocale = context.cookies.get(COOKIE_NAME)?.value;
    if (isLocale(cookieLocale)) locale = cookieLocale;
    if (!locale) {
      const accept = context.request.headers.get('accept-language');
      locale = pickPreferredLocale(accept) as typeof defaultLocale;
    }
    const dest = `/${locale}${stripLocaleFromPathname(pathname) || '/'}`;
    const target = new URL(dest, url.origin);
    target.search = url.search;
    return context.redirect(target.toString(), 302);
  }

  const existingCookie = context.cookies.get(COOKIE_NAME)?.value;
  if (existingCookie !== locale) {
    context.cookies.set(COOKIE_NAME, locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      httpOnly: false,
      sameSite: 'lax',
    });
  }

  context.locals.locale = locale as string;
  context.locals.availableLocales = [...locales];
  return next();
});
