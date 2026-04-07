import { LANGUAGES } from "./locale";

type Locale = typeof LANGUAGES[number];
type LocalizedPath = {
  [K in Locale]: string;
};

export const ROUTES = {
    HOME: '/',
    CONTACT: '/contact',
    ABOUT: '/about-me',
    OFFER: '/offer',
    PORTFOLIO: '/portfolio'
} as const;

export const PATHS = {
    HOME: '/',
    
    // English
    CONTACT_EN: '/contact',
    ABOUT_EN: '/about',
    PORTFOLIO_EN: '/portfolio',
    OFFER_EN: '/offer',

    // Polish
    CONTACT_PL: '/kontakt',
    ABOUT_PL: '/o-mnie',
    OFFER_PL: '/oferta',
    PORTFOLIO_PL: '/portfolio'
}

export const LOCALIZED_ROUTES: Record<string, string | Partial<LocalizedPath>> = {
  [ROUTES.HOME]: PATHS.HOME,
  [ROUTES.CONTACT]: {
    en: PATHS.CONTACT_EN,
    pl: PATHS.CONTACT_PL,
  },
  [ROUTES.ABOUT]: {
    en: PATHS.ABOUT_EN,
    pl: PATHS.ABOUT_PL
  },
  [ROUTES.OFFER]: {
    en: PATHS.OFFER_EN,
    pl: PATHS.OFFER_PL
  },
  [ROUTES.PORTFOLIO]: {
    en: PATHS.PORTFOLIO_EN,
    pl: PATHS.PORTFOLIO_PL
  }
}

export const REDIRECT_MAP = {
  // PL to EN
  [`/en${PATHS.CONTACT_PL}`]: `/${PATHS.CONTACT_EN}`,
  [`/en${PATHS.ABOUT_PL}`]: `/${PATHS.ABOUT_EN}`,
  [`/en${PATHS.OFFER_PL}`]: `/${PATHS.OFFER_EN}`,
  [`/en${PATHS.PORTFOLIO_PL}`]: `/${PATHS.PORTFOLIO_EN}`,

  // EN to PL
  [`/pl${PATHS.CONTACT_EN}`]: `/pl${PATHS.CONTACT_PL}`,
  [`/pl${PATHS.ABOUT_EN}`]: `/pl${PATHS.ABOUT_PL}`,
  [`/pl${PATHS.PORTFOLIO_EN}`]: `/pl${PATHS.PORTFOLIO_PL}`,
  [`/pl${PATHS.OFFER_EN}`]: `/pl${PATHS.OFFER_PL}`,
  [`/pl${PATHS.PORTFOLIO_EN}`]: `/pl${PATHS.PORTFOLIO_PL}`
} as const;