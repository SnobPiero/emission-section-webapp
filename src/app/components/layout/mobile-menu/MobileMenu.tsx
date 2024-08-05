'use client';

import LanguageSelector from '@app/components/layout/language-selector/LanguageSelector';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { getDictionary } from '@intl/get-dictionary';

import closeIcon from '@assets/close-icon.svg';
import menuIcon from '@assets/menu-icon.svg';

import styles from './mobile-menu.module.scss';

const MobileMenu = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['header'];
}) => {
  const links = [
    { label: dictionary['generate-badge'], path: '/' },
    { label: dictionary.benefits, path: '/' },
    { label: dictionary.tutorial, path: '/' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const toggleOpenMenu = () => {
    setIsOpen(true);
    setIsMounted(true);
  };

  return (
    <>
      <div className={styles['main-icon-container']}>
        <LanguageSelector />
        <Image src={menuIcon} alt="menu icon" priority onClick={toggleOpenMenu} />
      </div>
      {isMounted && (
        <div className={`${styles['overlay-menu']} ${isOpen ? styles['show'] : styles['hide']}`}>
          <div className={styles['close-icon-container']}>
            <Image src={closeIcon} alt="close icon" priority onClick={() => setIsOpen(false)} />
          </div>
          <ul>
            {links.map(({ label, path }, listIndex) => (
              <li key={listIndex} onClick={() => setIsOpen(false)}>
                <Link href={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
