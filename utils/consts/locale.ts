export const LANGUAGES = ['en', 'pl'] as const;
export const DEFAULT_LANGUAGE = 'pl';

export type Language = typeof LANGUAGES[number];