export type NavigationItem = {
  key: string;
  href: string;
  ariaLabel: string;
  icon?: string;
  children?: NavigationItem[];
  requiresAuth?: boolean;
  roles?: string[];
}

export const getNavigationItems = (): NavigationItem[] => {
  return [
    {
      key: 'home',
      href: `/`,
      ariaLabel: 'Strona główna',
    },
    {
      key: 'aboutMe',
      href: `/o-mnie`,
      ariaLabel: 'O mnie',
    },
    {
      key: 'offer',
      href: `/oferta`,
      ariaLabel: 'Oferta',
    },
        {
      key: 'prices',
      href: `/cennik`,
      ariaLabel: 'Cennik',
    },
    {
      key: 'contact',
      href: `/kontakt`,
      ariaLabel: 'Kontakt',
    }
  ];
};