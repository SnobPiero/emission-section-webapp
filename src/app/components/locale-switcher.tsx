// @ts-nocheck
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'; // Import useState hook
import { usePathname } from 'next/navigation';
import { i18n, type Locale } from '@intl/i18n-config';
import flagEn from '@assets/flag-en.svg';
import flagIt from '@assets/flag-it.svg';
import arrowBottom from '@assets/arrow-bottom.svg';

export default function LocaleSwitcher({ className = '' }) {
  const pathName = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const redirectedPathName = (locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const flags = {
    en: flagEn,
    it: flagIt,
  };

  const activeLocale = i18n.locales.find((locale) => pathName.startsWith(`/${locale}`));

  const arrowIcon = showDropdown ? 'rotate(180deg)' : 'rotate(0)';

  const activeFlag = activeLocale && (
    <div key={activeLocale} className={className} onClick={toggleDropdown} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
      <Image src={flags[activeLocale]} alt={activeLocale} width={24} height={24} />
      <Image src={arrowBottom} alt="Dropdown Arrow" width={12} height={12} style={{ transform: arrowIcon, marginLeft: '8px' }} />
    </div>
  );

  const dropdownFlags = i18n.locales
    .filter((locale) => locale !== activeLocale)
    .map((locale) => (
      <li key={locale}>
        <Link href={redirectedPathName(locale)} locale={false}>
          <div className={className}>
            <Image src={flags[locale]} alt={locale} width={24} height={24} />
          </div>
        </Link>
      </li>
    ));

  return (
    <div style={{ position: 'relative' }}>
      <ul>
        <li>{activeFlag}</li>
      </ul>
      {showDropdown && (
        <div style={{ position: 'absolute', top: '100%', left: 0 }}>
          <ul>{dropdownFlags}</ul>
        </div>
      )}
    </div>
  );
}
