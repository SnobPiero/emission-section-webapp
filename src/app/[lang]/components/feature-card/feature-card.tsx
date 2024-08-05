import Image from 'next/image';

import { getDictionary } from '@intl/get-dictionary';

import styles from './feature-card.module.scss';

export default function FeatureCard({
  dictionary,
  imageUrl,
  imageAlt,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['home']['sections']['features']['csv'];
  imageUrl: string;
  imageAlt: string;
}) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.logo}
        src={imageUrl}
        alt={imageAlt}
        width={40}
        height={40}
        priority
      />
      <div className={styles.body}>
        <h6 className={styles.title}>{dictionary.title}</h6>
        <p className={styles.description}>{dictionary.description}</p>
      </div>
    </div>
  );
}
