"use client";

import { Key, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import doneImg from "@assets/done.svg";
import warningImg from "@assets/warning.svg";
import dangerImg from "@assets/danger.svg";
import accordion from "@assets/accordion.svg";

import Disclaimer from "../disclaimer/Disclaimer";

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
        <>
          <div className={styles.messagesListContainer}>
            {zones.map(
              (
                { zone: zoneName, result, message, prohibition_entry },
                listIndex
              ) => (
                <>
                  <div
                    key={zoneName}
                    className={`${styles.messageContainer} ${listIndex % 2 !== 0 ? styles.odd : ""}`}
                  >
                    {result === "done" && (
                      <Image width={12} src={doneImg} alt="done" />
                    )}
                    {result === "warning" && (
                      <Image width={12} src={warningImg} alt="warning" />
                    )}
                    {result === "danger" && (
                      <Image width={12} src={dangerImg} alt="danger" />
                    )}
                    <div>
                      {zoneName && (
                        <span>
                          <strong>Zona:</strong> {zoneName}
                        </span>
                      )}
                      {prohibition_entry && (
                        <span>
                          <strong>Divieto:</strong> {prohibition_entry}
                        </span>
                      )}
                      {message && (
                        <span>
                          <strong>Note:</strong> {message}
                        </span>
                      )}
                    </div>
                  </div>
                  {listIndex < zones.length - 1 && <hr />}
                </>
              )
            )}
          </div>
          <Disclaimer city={city} />
        </>
      )}
    </div>
  );
};

export default ZoneCard;
