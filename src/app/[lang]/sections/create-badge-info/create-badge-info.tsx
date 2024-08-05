import Button from '@app/components/button/Button';

import { getDictionary } from '@intl/get-dictionary';

import styles from './create-badge-info.module.scss';

export default function CreateBadgeInfo({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['home']['sections']['info'];
}) {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>{dictionary.title}</h3>
      <p className={styles.description}>{dictionary.description}</p>
      <Button
        style={'filled'}
        size={'large'}
        state={'default'}
        focused={false}
        iconLeft={false}
        iconRight={false}
      >
        <span>{dictionary.button}</span>
      </Button>
    </section>
  );
}
