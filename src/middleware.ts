import { defineMiddleware } from 'astro:middleware';
import {
  isLocale,
  getLocaleFromPathname,
} from './i18n/utils';

const COOKIE_NAME = 'tv-locale';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = context.url;
  const { pathname } = url;

  if (pathname.startsWith('/images/')) return next();
  if (pathname.startsWith('/scripts/')) return next();
  if (pathname.startsWith('/styles/')) return next();
  if (pathname.startsWith('/_astro/')) return next();
  if (pathname.startsWith('/_vercel/')) return next();
  if (/\.\w+$/.test(pathname)) return next();

  const localeInUrl = getLocaleFromPathname(pathname);

  if (localeInUrl) {
    const existingCookie = context.cookies.get(COOKIE_NAME)?.value;
    if (existingCookie !== localeInUrl) {
      context.cookies.set(COOKIE_NAME, localeInUrl, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
        httpOnly: false,
        sameSite: 'lax',
      });
    }
    context.locals.locale = localeInUrl as string;
  }

  return next();
});
