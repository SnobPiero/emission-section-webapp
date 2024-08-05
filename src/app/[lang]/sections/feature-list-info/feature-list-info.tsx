import FeatureCard from '@app/[lang]/components/feature-card/feature-card';
import { v4 as uuidv4 } from 'uuid';

import { getDictionary } from '@intl/get-dictionary';

import csvImage from '@assets/csv.svg';
import realTime from '@assets/real-time.svg';

import styles from './feature-list-info.module.scss';

export default function FeatureListInfo({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['home']['sections']['features'];
}) {
  const features = [
    {
      id: uuidv4(),
      dictionary: dictionary.csv,
      imageUrl: csvImage,
      imageAlt: 'CSC icon',
    },
    {
      id: uuidv4(),
      dictionary: dictionary['real-time'],
      imageUrl: realTime,
      imageAlt: 'Real time icon',
    },
    {
      id: uuidv4(),
      dictionary: dictionary.templates,
      imageUrl: csvImage,
      imageAlt: 'Templates icon',
    },
    {
      id: uuidv4(),
      dictionary: dictionary.updates,
      imageUrl: realTime,
      imageAlt: 'Updates icon',
    },
    {
      id: uuidv4(),
      dictionary: dictionary.design,
      imageUrl: csvImage,
      imageAlt: 'Design icon',
    },
    {
      id: uuidv4(),
      dictionary: dictionary.download,
      imageUrl: realTime,
      imageAlt: 'Download icon',
    },
  ];

  return (
    <section className={styles.container}>
      {features.map(feature => (
        <FeatureCard
          key={feature.id}
          dictionary={feature.dictionary}
          imageUrl={feature.imageUrl}
          imageAlt={feature.imageAlt}
        />
      ))}
    </section>
  );
}
