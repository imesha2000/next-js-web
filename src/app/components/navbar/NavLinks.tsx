"use client";

import { useTranslations } from 'next-intl';
import { Link } from '../../../navigation';

const NavLinks = () => {
  const t = useTranslations('Navigation');

  return (
    <div className="items-center hidden space-x-10 md:flex text-gray">
      <Link href="/" className="transition-all hover:text-primary">{t('home')}</Link>
      <Link href="/stratum" className="flex items-center transition-all hover:text-primary">{t('stratum')} 
      <span className="px-1 ml-1 text-xs bg-blue-100 rounded text-primary">NEW</span>
      </Link>
      <Link href="/services" className="transition-all hover:text-primary">{t('services')}</Link>
      <Link href="/projects" className="transition-all hover:text-primary">{t('projects')}</Link>
      <Link href="/why-us" className="transition-all hover:text-primary">{t('why Us')}</Link>
    </div>
  );
};

export default NavLinks;
