import Link from "next/link";

import styles from "./disclaimer.module.scss";

const Disclaimer = ({ city }: { city: string }) => {
  return (
    <>
      {city === "Milano" && (
        <p className={styles.disclaimer}>
          La città di Milano ha normative vigenti in base alle sue aree di
          delimitazione. Scopri di più sul sito ufficiale{" "}
          <Link
            href="https://www.comune.milano.it/aree-tematiche/mobilita/area-b/area-b-veicoli-che-non-possono-entrare"
            target="_blank"
          >
            AREA B
          </Link>{" "}
          e sul sito ufficiale{" "}
          <Link
            href="https://www.comune.milano.it//aree-tematiche/mobilita/area-c/area-c-calendario-divieti"
            target="_blank"
          >
            AREA C
          </Link>{" "}
          a seconda della tua zona di interesse.
        </p>
      )}
      {city === "Roma" && (
        <p className={styles.disclaimer}>
          La città di Roma ha normative vigenti sull'area delimitata dalla
          Fascia Verde. Scopri di più sul{" "}
          <Link
            href="https://romamobilita.it/it/servizi/ztl/fascia-verde"
            target="_blank"
          >
            sito ufficiale
          </Link>
        </p>
      )}
      {city === "Torino" && (
        <p className={styles.disclaimer}>
          La città di Torino ha normative vigenti su tutta la città. Scopri di
          più sul{" "}
          <Link
            href="https://www.comune.milano.it/aree-tematiche/mobilita/area-b/area-b-veicoli-che-non-possono-entrare" //watch out it's incorrect link -> need the Torino one
            target="_blank"
          >
            sito ufficiale
          </Link>
        </p>
      )}
      {city === "Genova" && (
        <p className={styles.disclaimer}>
          La città di Genova ha normative vigenti sulle aree denominate Area 1 e
          Area 2. Scopri di più sul{" "}
          <Link
            href="https://smart.comune.genova.it/sites/default/files/archivio/documenti/2023_POS_0000063_ORD_DISPOSITIVO_ATTO.pdf"
            target="_blank"
          >
            documento ufficiale
          </Link>
        </p>
      )}
    </>
  );
};

export default Disclaimer;
