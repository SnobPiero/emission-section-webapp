import Image from "next/image";

import { getDictionary } from "@intl/get-dictionary";
import type { Locale } from "@intl/i18n-config";

import logo from "@assets/logo.svg";
import questionMark from "@assets/question-mark.svg";

import MobileMenu from "../mobile-menu/MobileMenu";
import styles from "./Header.module.scss";
import Button from "@app/components/button/Button";

const Header = async ({ lang }: { lang: Locale }) => {
  const dictionary = await getDictionary(lang);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image
            className={styles.logo}
            src={logo}
            alt="Badge Master Logo"
            priority
          />
          <span className={styles.title}>
            <strong>ID certificazione:</strong> 0745113
          </span>
        </div>
        <Button
          iconLeft={<Image src={questionMark} alt="help-icon" priority />}
          className={styles.headerHelpButton}
        >
          Aiuto
        </Button>
        <div className={styles.mobileNavigation}>
          <MobileMenu dictionary={dictionary.header} />
        </div>
      </div>
    </div>
  );
};

export default Header;
