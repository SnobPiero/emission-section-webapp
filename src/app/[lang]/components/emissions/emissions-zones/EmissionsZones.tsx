import { getDictionary } from "@intl/get-dictionary";

import emissionData from "@fake-data/emissions.json";
import ZoneCard from "../zone-card/EmissionsZoneCard";

import styles from "./emissions-zones.module.scss";

export default function EmissionsZones({
  dictionary,
}: {
  dictionary: Awaited<
    ReturnType<typeof getDictionary>
  >["home"]["sections"]["emissions"];
}) {
  const { vehicle_low_emission_zones: lowEmissioZones } = emissionData;
  return (
    <>
      <h4 className={styles.title}>{dictionary.zonesTitle}</h4>
      <p className={styles.mainInfoDescription}>
        {dictionary.zonesDescription}
      </p>
      <div className={styles.zoneCardListContainer}>
        {lowEmissioZones.map((zone) => (
          <ZoneCard key={zone.city} zone={zone} />
        ))}
      </div>
    </>
  );
}
