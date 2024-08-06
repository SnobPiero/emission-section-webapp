import { getDictionary } from "@intl/get-dictionary";

import EmissionsMainInfo from "@app/[lang]/components/emissions/emissions-main-info/EmissionsMainInfo";
import EmissionsZones from "@app/[lang]/components/emissions/emissions-zones/EmissionsZones";

import styles from "./emission.module.scss";

const ExplanationSection = ({
  dictionary,
}: {
  dictionary: Awaited<
    ReturnType<typeof getDictionary>
  >["home"]["sections"]["emissions"];
}) => {
  return (
    <section className={styles.container}>
      <EmissionsMainInfo dictionary={dictionary} />
      <EmissionsZones dictionary={dictionary} />
    </section>
  );
};

export default ExplanationSection;
