export const LOCALES = {
  en: {
    iso: "en-US",
    name: "English",
  },
  de: {
    iso: "de-DE",
    name: "Deutsch",
  },
  ja: {
    iso: "ja-JP",
    name: "日本語",
  },
} as const satisfies Record<
  string,
  {
    name: string;
    iso: string;
  }
>;

export const LOCALE_DEFAULT: keyof typeof LOCALES = "en";
