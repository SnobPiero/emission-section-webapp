"use client";

import { useState } from "react";

import { getDictionary } from "@intl/get-dictionary";

import EmissionsMainInfo from "@app/[lang]/components/emissions/EmissionsMainInfo";

import styles from "./emission.module.scss";

const ExplanationSection = ({
  dictionary,
}: {
  dictionary: Awaited<
    ReturnType<typeof getDictionary>
  >["home"]["sections"]["emissions"];
}) => {
  const explanationSteps = [
    {
      id: 0,
      title: dictionary.steps.step1.title,
      description: dictionary.steps.step1.description,
    },
    {
      id: 1,
      title: dictionary.steps.step2.title,
      description: dictionary.steps.step2.description,
    },
    {
      id: 2,
      title: dictionary.steps.step3.title,
      description: dictionary.steps.step3.description,
    },
    {
      id: 3,
      title: dictionary.steps.step4.title,
      description: dictionary.steps.step4.description,
    },
  ];

  const [selectedStep, setSelectedStep] = useState(explanationSteps[0]);
  return (
    <section className={styles.container}>
      <EmissionsMainInfo dictionary={dictionary} />
      {/* <h3 className={styles.title}>{dictionary.title}</h3>
      <p>
        {dictionary.class}: <strong>Euro 4</strong>
      </p>
      <p>
        {dictionary.emissionDescription}: <strong>156 g/km</strong>
      </p> */}
      {/* <div className={styles["explanation-info-container"]}>
        <ul className={styles.list}>
          {explanationSteps.map((step) => (
            <li
              key={step.id}
              className={`${selectedStep.id === step.id ? styles.selected : ""}`}
              onClick={() => setSelectedStep(step)}
            >
              {step.title}
            </li>
          ))}
        </ul>
        <div className={styles["explanation-content"]}>
          <h4>{selectedStep.title}</h4>
          <p>{selectedStep.description}</p>
        </div>
      </div> */}
    </section>
  );
};

export default ExplanationSection;
