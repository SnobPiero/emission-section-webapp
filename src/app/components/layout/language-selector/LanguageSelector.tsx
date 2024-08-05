'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import accordion from '@assets/accordion.svg';
import italyFlag from '@assets/italy-flag.svg';
import unitedKingdomFlag from '@assets/united-kingdom-flag.svg';

import styles from './language-selector.module.scss';

const Select = () => {
  const getSelectedLanguage = (pathName: string) => pathName.slice(1);

  const pathName = usePathname();

  const [selectedLanguage, setSelectedLanguage] = useState(getSelectedLanguage(pathName));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setSelectedLanguage(getSelectedLanguage(pathName));
  }, [pathName]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const renderLanguageMenu = () => (
    <ul className={`${isMenuOpen ? styles['dropdown-menu'] : styles.hidden}`}>
      {languages.map(
        ({ path, icon }) =>
          path !== selectedLanguage && (
            <li key={path} className={styles['selected-language']}>
              <Link href={`/${path}`}>{icon}</Link>
            </li>
          ),
      )}
    </ul>
  );

  const languages = [
    { path: 'it', icon: <Image alt="Italy flag" src={italyFlag} /> },
    { path: 'en', icon: <Image alt="UK flag" src={unitedKingdomFlag} /> },
  ];

  const icon = languages.find(({ path }) => path === selectedLanguage)?.icon ?? languages[1].icon;

  return (
    <div>
      <div
        className={`${styles['selected-language']} ${isMenuOpen ? styles['open-icon-menu'] : styles['close-icon-menu']}`}
        onClick={toggleMenu}
      >
        {icon}
        <Image alt="accordion" src={accordion} />
      </div>
      {renderLanguageMenu()}
    </div>
  );
};

export default Select;
