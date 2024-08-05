'use client';

import { getDictionary } from '@intl/get-dictionary';
import React, { useEffect, useRef, useState } from 'react'
import styles from './badge-template.module.scss';
import cat from 'public/assets/cat.svg';
import fox from 'public/assets/fox.svg';
import flower from 'public/assets/flower.svg';
import { ChooseTemplateButton, badgeCardType } from '@app/[lang]/components/badge-card/badge-card';
import  { BadgeTemplateStep1, BadgeTemplateStep2, BadgeTemplateStep3, BadgeTemplateStep4 } from './badge-template-step';

export type badgeStateType = {
  begin: boolean,
  end: boolean
}
const BadgeTemplate = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['home']['sections']['badgeTemplate'];
}) => {
  const explanationSteps = [
    { id: 0, title: dictionary.steps.step1.title, number: dictionary.steps.step1.number },
    { id: 1, title: dictionary.steps.step2.title, number: dictionary.steps.step2.number },
    { id: 2, title: dictionary.steps.step3.title, number: dictionary.steps.step3.number },
  ];

  useEffect(() => {
    setChooseTemplateBtn(true);
  }, []);

  //{begin:false,end:false}
  const [selectedStep, setSelectedStep] = useState<badgeStateType[]>([]);
  const [chooseTemplateBtn, setChooseTemplateBtn] = useState<boolean>(true);
  const [badgeSelect, setBadgeSelect] = useState<any>({
    image: cat,
    badgeRef:useRef<HTMLDivElement>(null),
    height: undefined,
    width: undefined,
    alt: 'sd',
    cardType: false,
    setChooseTemplateBtn: setChooseTemplateBtn,
    setSelectedStep: setSelectedStep,
  });


const listImageTest:badgeCardType[] = [
    {
      image: cat,
      badgeRef:useRef<HTMLDivElement>(null),
      height: null,
      width: null,
      alt: 'sd',
      cardType: false,
      setChooseTemplateBtn: setChooseTemplateBtn,
      setSelectedStep: setSelectedStep,
      setBadgeSelect:setBadgeSelect
    },    {
      image: cat,
      badgeRef:useRef<HTMLDivElement>(null),
      height: null,
      width: null,
      alt: 'sd',
      cardType: false,
      setChooseTemplateBtn: setChooseTemplateBtn,
      setSelectedStep: setSelectedStep,
      setBadgeSelect:setBadgeSelect
    },    {
      image: fox,
      badgeRef:useRef<HTMLDivElement>(null),
      height: null,
      width: null,
      alt: 'sd',
      cardType: false,
      setChooseTemplateBtn: setChooseTemplateBtn,
      setSelectedStep: setSelectedStep,
      setBadgeSelect:setBadgeSelect
    },    {
      image: cat,
      badgeRef:useRef<HTMLDivElement>(null),
      height: null,
      width: null,
      alt: 'sd',
      cardType: false,
      setChooseTemplateBtn: setChooseTemplateBtn,
      setSelectedStep: setSelectedStep,
      setBadgeSelect:setBadgeSelect
    },    {
      image: cat,
      badgeRef:useRef<HTMLDivElement>(null),
      height: null,
      width: null,
      alt: 'sd',
      cardType: false,
      setChooseTemplateBtn: setChooseTemplateBtn,
      setSelectedStep: setSelectedStep,
      setBadgeSelect:setBadgeSelect
    },    {
      image: flower,
      badgeRef:useRef<HTMLDivElement>(null),
      height: null,
      width: null,
      alt: 'sd',
      cardType: false,
      setChooseTemplateBtn: setChooseTemplateBtn,
      setSelectedStep: setSelectedStep,
      setBadgeSelect:setBadgeSelect
    },    {
      image: cat,
      badgeRef:useRef<HTMLDivElement>(null),
      height: null,
      width: null,
      alt: 'sd',
      cardType: false,
      setChooseTemplateBtn: setChooseTemplateBtn,
      setSelectedStep: setSelectedStep,
      setBadgeSelect:setBadgeSelect
    },    {
      image: cat,
      badgeRef:useRef<HTMLDivElement>(null),
      height: null,
      width: null,
      alt: 'sd',
      cardType: false,
      setChooseTemplateBtn: setChooseTemplateBtn,
      setSelectedStep: setSelectedStep,
      setBadgeSelect:setBadgeSelect
    },
    ];



  const isActiveDescriptionLabel = `${styles['step-desciption']} ${styles.active}`;
  const descriptionLabel1 = (selectedStep.length == 0 || selectedStep.length >= 1) ? isActiveDescriptionLabel : ``;
  const descriptionLabel2 = (selectedStep.length != 0 && selectedStep.length >= 2) ? isActiveDescriptionLabel : ``;
  const descriptionLabel3 = (selectedStep.length != 0 && selectedStep.length >= 3) ? isActiveDescriptionLabel : ``;

  const lineProgress2 = `${styles.progress} ${styles.step2}`;
  const lineProgress = (selectedStep.length != 0 && selectedStep.length > 1) ? ((selectedStep.length <= 2) ? `${styles.progress} ${styles.step1}` : `${styles.progress} ${styles.step2}`) : `${styles['space-line']}`;

  const beginStep1 = (selectedStep.length != 0 && selectedStep.length >= 1) ? ((selectedStep[0].begin == true && selectedStep[0].end == true) ? `${styles.circle} ${styles.done}` : `${styles.circle} ${styles.active}`) : (`${styles.circle} ${styles.active}`);
  const beginStep2 = (selectedStep.length != 0 && selectedStep.length >= 2) ? ((selectedStep[1].begin == true && selectedStep[1].end == true) ? `${styles.circle} ${styles.done}` : `${styles.circle} ${styles.active}`) : (`${styles.circle}  `);
  const beginStep3 = (selectedStep.length != 0 && selectedStep.length >= 3) ? ((selectedStep[2].begin == true && selectedStep[2].end == true) ? (`${styles['circle-last']} ${styles.done}`) : `${styles['circle-last']} ${styles.active}`) : (`${styles['circle-last']} `);

  return (
  <section className={styles.container}>
      <h3 className={styles.title}>{dictionary.title}</h3>
      <div className={styles['progress-container']}>

        <div className={styles['space-line']} >
        </div>
        <div className={lineProgress} ></div>


        <div className={`${styles['step-desciption']} ${styles.active}`}>


          <div className={`${styles['label-text']} ${beginStep1}`}>{dictionary.steps.step1.number}</div>
          <p className={`${descriptionLabel1} ${styles['step-desciption-label']}`}>{dictionary.steps.step1.title}</p>
        </div>

        <div className={styles['step-desciption']}>
          <div className={`${styles['label-text']} ${beginStep2}`}>{dictionary.steps.step2.number}</div>
          <p className={`${descriptionLabel2} ${styles['step-desciption-label']}`}>{dictionary.steps.step2.title}</p>
        </div>
        <div className={styles['step-desciption']}>
          <div className={`${styles['label-text']} ${beginStep3}`}>{dictionary.steps.step3.number}</div>
          <p className={`${descriptionLabel3} ${styles['step-desciption-label']}`}>{dictionary.steps.step3.title}</p>
        </div>

      </div>
      {
        (selectedStep.length == 0 || selectedStep.length == 1 && selectedStep[0].end==false) ? <BadgeTemplateStep1 listIMageTest={listImageTest } setChooseTemplateBtn={setChooseTemplateBtn} setSelectedStep={setSelectedStep} isDisabledChooseTemplateBtn={chooseTemplateBtn} chooseTemplate={dictionary.chooseTemplate} setBadgeSelect={setBadgeSelect} dictionary={dictionary}/>
          : (selectedStep.length == 2 ) ? <BadgeTemplateStep2 setChooseTemplateBtn={setChooseTemplateBtn} setSelectedStep={setSelectedStep} isDisabledChooseTemplateBtn={chooseTemplateBtn} chooseTemplate={dictionary.chooseTemplate} image={badgeSelect} dictionary={dictionary}  />
            : 
            (selectedStep.length == 3 ) ? <BadgeTemplateStep3 setChooseTemplateBtn={setChooseTemplateBtn} setSelectedStep={setSelectedStep} isDisabledChooseTemplateBtn={chooseTemplateBtn} chooseTemplate={dictionary.chooseTemplate} image={badgeSelect} dictionary={dictionary}  />:<BadgeTemplateStep4 setChooseTemplateBtn={setChooseTemplateBtn} setSelectedStep={setSelectedStep} isDisabledChooseTemplateBtn={chooseTemplateBtn} chooseTemplate={dictionary.chooseTemplate} image={badgeSelect} dictionary={dictionary}  />
      }
    </section>
  )
}
export default BadgeTemplate;