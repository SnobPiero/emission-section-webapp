"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import doneImg from "@assets/done.svg";
import warningImg from "@assets/warning.svg";
import dangerImg from "@assets/danger.svg";
import accordion from "@assets/accordion.svg";

import Disclaimer from "../disclaimer/Disclaimer.";

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

  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.card} ${open ? styles.open : ""}`}>
      <div className={styles.mainInfoContainer}>
        <div className={styles.titleContainer}>
          <h5>{city}</h5>
          <div
            className={styles.accordionWrapper}
            onClick={() => setOpen(!open)}
          >
            <Image
              className={open ? styles.selected : ""}
              tabIndex={0}
              src={accordion}
              alt="accordion"
            />
          </div>
        </div>
        <ul className={styles.zoneList}>
          {zones.map(({ zone: zoneName, result }) => (
            <li key={zoneName}>
              {result === "done" && (
                <Image width={32} src={doneImg} alt="done" />
              )}
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
      {open && (
        <div className={styles.messagesContainer}>
          <hr />
          <Disclaimer city={city} />
        </div>
      )}
    </div>
  );
};

export default ZoneCard;
