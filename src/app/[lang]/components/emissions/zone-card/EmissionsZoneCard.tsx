import Image from "next/image";

import doneImg from "@assets/done.svg";
import warningImg from "@assets/warning.svg";
import dangerImg from "@assets/danger.svg";

import styles from "./emissions-zone-card.module.scss";

interface Zone {
  city: string;
  zones: Array<{
    zone: string;
    result: string;
    message?: string;
    prohibition_entry?: string;
  }>;
}

interface ZoneCardProps {
  zone: Zone;
}

const ZoneCard: React.FC<ZoneCardProps> = ({ zone }) => {
  const { city, zones } = zone;
  return (
    <div className={styles.card}>
      <h5 className={styles.title}>{city}</h5>
      <ul className={styles.zoneList}>
        {zones.map(({ zone: zoneName, result }) => (
          <li>
            {result === "done" && <Image width={32} src={doneImg} alt="done" />}
            {result === "warning" && (
              <Image width={32} src={warningImg} alt="warning" />
            )}
            {result === "danger" && (
              <Image width={32} src={dangerImg} alt="danger" />
            )}
            {zoneName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ZoneCard;
