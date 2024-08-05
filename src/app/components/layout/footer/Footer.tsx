import Link from 'next/link';

import { getDictionary } from '@intl/get-dictionary';
import { Locale } from '@intl/i18n-config';

import styles from './Footer.module.scss';

const Footer = async ({ lang }: { lang: Locale }) => {
  const dictionary = await getDictionary(lang);
  const year = new Date().getFullYear();
  const Paths = {
    LUNE: 'https://snobdvevs.com/lune',
    PRIVACY: 'https://snobdvevs.com/privacy',
  };

  return (
    <footer className={styles.footer}>
      <div>
        <div> &copy; {year} SnobDevs </div>
      </div>
      <div className={styles.body}>
        <h3 className={styles['footer-title']}>{dictionary.footer.title}</h3>
        <div className={styles['footer-nav']}>
          <div className={styles['footer-nav-title']}>
            <h5>{dictionary.footer.startConversation}</h5>
            <ul className="list-unstyled p-0">
              <li className="#">
                <Link href="mailto:info@snobdevs.com" target="_blank" data-bypass="">
                  info@snobdevs.com
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles['footer-nav-title']}>
            <h5>{dictionary.footer.portfolioProjects}</h5>
            <ul className="list-unstyled p-0">
              <li className="#">
                {' '}
                <Link href={Paths.LUNE} target="_blank">
                  Lune
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles['footer-nav-title']}>
            <h4>{dictionary.footer.quickLinks}</h4>
            <ul className="list-unstyled p-0">
              <li className="#">
                <Link href={Paths.PRIVACY}>{dictionary.footer.terms}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
