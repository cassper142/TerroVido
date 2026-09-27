/// <reference path="../.astro/types.d.ts" />

declare namespace App {
  interface Locals {
    locale: import('./i18n/utils').Locale;
    availableLocales: readonly import('./i18n/utils').Locale[];
  }
}
