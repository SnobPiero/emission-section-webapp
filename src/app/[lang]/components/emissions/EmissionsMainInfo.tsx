import Image from "next/image";
import { getDictionary } from "@intl/get-dictionary";

import styles from "./emissions-main-info.module.scss";

import emissionsImage from "@assets/emissions.png";

const emissionsOptions = [
  "120",
  "120 - 140",
  "140 - 165",
  "165 - 190",
  "190 - 255",
  "255",
];

export default function EmissionsMainInfo({
  dictionary,
}: {
  dictionary: Awaited<
    ReturnType<typeof getDictionary>
  >["home"]["sections"]["emissions"];
}) {
  return (
    <>
      <div className={styles.titleContainer}>
        <Image src={emissionsImage} alt="Emissions" width={64} />
        <h3>{dictionary.title}</h3>
      </div>
      <p className={styles.mainInfoDescription}>
        {dictionary.class}: <strong>EURO 4</strong>
      </p>
      <p className={styles.mainInfoDescription}>
        {dictionary.emissionDescription}: <strong>156 g/km</strong>
      </p>
      <ul className={styles.emissionsOptionsList}>
        {emissionsOptions.map((option, optionIndex) => (
          <li
            key={optionIndex}
            className={optionIndex === 2 ? styles.emissionsOptionSelected : ""}
          >{`${optionIndex === 0 ? "< " : optionIndex === emissionsOptions.length - 1 ? "> " : ""}${option}`}</li>
        ))}
      </ul>
    </>
  );
}
