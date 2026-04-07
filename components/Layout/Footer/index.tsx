import FacebookIcon from '@/components/Features/SocialMedia/Facebook';
import InstagramIcon from '@/components/Features/SocialMedia/Instagram';

import FooterCopyrights from './Copyrights';
import { useTranslations } from 'next-intl';
import FooterAuthor from './Author';

export default function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className='px-4 py-8 lg:px-8 lg:py-16 bg-stone-950'>
      <div className="mb-8"> 
        <h3 className="text-white mb-2 text-sm font-semibold">{t('followMe')}</h3>
        <div className="flex gap-3">
          <FacebookIcon size="text-4xl" />
          <InstagramIcon size="text-4xl" />
        </div>
      </div>
      <FooterCopyrights />
      <FooterAuthor />
    </footer>
  );
}
