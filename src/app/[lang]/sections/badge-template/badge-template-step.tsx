import BadgeCard, { BadgeCardPresentation, ChooseTemplateButton, IconButton, badgeCardType } from '@app/[lang]/components/badge-card/badge-card'
import React, { FC, useEffect, useRef, useState } from 'react'
import cat from 'public/assets/cat.svg';
import arrowLeft from 'public/assets/arrow-left.svg';
import arrowright from 'public/assets/arrow-right.svg';
import styles from './badge-template.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { badgeStateType } from './badge-template';
import { getDictionary } from '@intl/get-dictionary';
import Button from '@app/components/button/Button';
import ProgressBar from '@app/components/progress-bar/ProgressBar';

type badgeStepType = {
  listIMageTest: badgeCardType[],
  isDisabledChooseTemplateBtn: boolean,
  chooseTemplate: string,
  setChooseTemplateBtn: React.Dispatch<React.SetStateAction<boolean>>,
  setSelectedStep: React.Dispatch<React.SetStateAction<badgeStateType[]>>,
  setBadgeSelect: React.Dispatch<React.SetStateAction<any>>,
  dictionary: Awaited<ReturnType<typeof getDictionary>>['home']['sections']['badgeTemplate'],
}
type badgeStep2Type = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['home']['sections']['badgeTemplate'];
  image: string;
  chooseTemplate: string;
  isDisabledChooseTemplateBtn: boolean;
  setChooseTemplateBtn: (value: boolean) => void;
  setSelectedStep: (steps: Array<{ begin: boolean; end: boolean }>) => void;
};

export const BadgeTemplateStep1: FC<badgeStepType> = ({ dictionary, listIMageTest, isDisabledChooseTemplateBtn, chooseTemplate, setChooseTemplateBtn, setSelectedStep, setBadgeSelect }) => {
  useEffect(() => {
    setChooseTemplateBtn(true);
  }, []);

  const badgeRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className={styles['explanation-info-container']}>
        <BadgeCard image={cat} width={520} height={292} alt='test' cardType={true} setChooseTemplateBtn={setChooseTemplateBtn} setSelectedStep={setSelectedStep} badgeRef={useRef<HTMLDivElement>(null)} setBadgeSelect={setBadgeSelect} />
        <div className={styles['explanation-content']}>
          <div className={styles['explanation-content-list']}>
            {listIMageTest.map((element) => (
              <BadgeCard key={uuidv4()} image={element.image} width={element.width} height={element.height} alt={element.alt} cardType={element.cardType} setChooseTemplateBtn={element.setChooseTemplateBtn} setSelectedStep={setSelectedStep} badgeRef={element.badgeRef} setBadgeSelect={setBadgeSelect} />
            ))}
          </div>
          <div>
            <IconButton image={arrowLeft} height={undefined} width={undefined} alt={''} /> Pagina 1 of 4<IconButton image={arrowright} height={undefined} width={undefined} alt={''} />
          </div>
        </div>
      </div>
      <ChooseTemplateButton label={chooseTemplate} isDisabled={isDisabledChooseTemplateBtn} setSelectedStep={() => {
        setSelectedStep([{ begin: true, end: true }, { begin: false, end: false }]);
      }} />
    </>
  )
}
export const BadgeTemplateStep2: FC<badgeStep2Type> = ({
  dictionary,
  image,
  chooseTemplate,
  isDisabledChooseTemplateBtn,
  setChooseTemplateBtn,
  setSelectedStep,
}) => {
  useEffect(() => {
    setChooseTemplateBtn(true);
  }, [setChooseTemplateBtn]);

  const badgeRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState('');
  const [participants, setParticipants] = useState<string[]>([]);
  const [inputError, setInputError] = useState<boolean>(false);

  const handleAddParticipant = () => {
    if (name.trim().length >= 5) {
      const updatedParticipants = [...participants, name];
      setParticipants(updatedParticipants);
      setName('');
      setInputError(false); // Reset input error state
      if (updatedParticipants.length > 0) {
        setChooseTemplateBtn(false); // Set ChooseTemplateBtn to true if there is at least 1 participant
      }
    } else {
      setInputError(true); // Set input error state to true
    }
  };
  const handleRemoveParticipant = (index: number) => {
    const updatedParticipants = [...participants];
    updatedParticipants.splice(index, 1);
    setParticipants(updatedParticipants);
    if (updatedParticipants.length === 0) {
      setChooseTemplateBtn(true); // Optionally, disable the button if no participants are left
    }
  };

  return (
    <>
      <div className={styles['explanation-info-container']}>
        <BadgeCardPresentation
          image={image}
          width={520}
          height={292}
          alt="test"
          cardType={true}
          badgeRef={badgeRef}
        />
        <div className={styles['explanation-content']}>
          <p className={styles['step-title']}>{dictionary.addParticipants}</p>
          <p className={styles['step-text']}>
            {dictionary.addParticipantsManually} <a>{dictionary.uploadCSVHere}</a>
          </p>
          <div className={styles['add-participants-container']}>
            <p>{dictionary.addNameParticipants}</p>
             <div className={`${styles['add-participant-textfield']} ${inputError ? styles['input-error'] : ''}`}>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setInputError(false);
                }}
                placeholder={dictionary.participantName}
              />
              <button
                type="button"
                className={styles['add-participant-button']}
                onClick={handleAddParticipant}
              >
                {dictionary.add}
              </button>
            </div>
            {inputError && (
              <p className={styles['error-message']}>
               {dictionary.minCharactersError}
              </p>
            )}
             <div className={styles['participants-list']}>
              <ul>
                {participants.map((participant, index) => (
                  <li key={index}>
                    <div className={styles['participant-bubble']}>
                      {participant}
                      <span className={styles['remove-icon']} onClick={() => handleRemoveParticipant(index)}>
                        &#10006;
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ChooseTemplateButton
        label={dictionary.continue}
        isDisabled={isDisabledChooseTemplateBtn}
        setSelectedStep={() => {
          setSelectedStep([
            { begin: true, end: true },
            { begin: true, end: true },
            { begin: false, end: false },
          ]);
        }}
      />
    </>
  );
};

export const BadgeTemplateStep3: FC<badgeStep2Type> = ({ dictionary, image, chooseTemplate, isDisabledChooseTemplateBtn, setChooseTemplateBtn, setSelectedStep }) => {
  const [email, setEmail] = useState<string>(''); // State to store the email input value
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setChooseTemplateBtn(true); // Initialize choose template button state
  }, []);

  // Function to handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
    // Validate email and set choose template button state accordingly
    if (isValidEmail(value)) {
      setChooseTemplateBtn(false); // Enable the choose template button if email is valid
    } else {
      setChooseTemplateBtn(true); // Disable the choose template button if email is not valid
    }
  };

  // Function to validate email format
  const isValidEmail = (email: string): boolean => {
    // Simple email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className={styles['explanation-info-container']}>
      <BadgeCardPresentation image={image} width={520} height={292} alt='test' cardType={true} badgeRef={badgeRef} />
      <div className={`${styles['third-section']}`}>
        <p className={`${styles['label-text-small']} ${styles['margin-bottom-xs']}`}>{dictionary.generatingYourBadge}</p>
        <p className={styles['margin-bottom-sm']}><ProgressBar progress={40} /></p>
        <p className={`${styles['body-text']} ${styles['margin-bottom-medium']}`}>{dictionary.mailInstruction}</p>
        <p className={styles['label-text-strong']}>{dictionary.email}</p>
        <p><input
          className={`${styles['add-participant-textfield']} ${styles['margin-bottom-medium']}`}
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder={dictionary.addMail}
        /></p>
        <ChooseTemplateButton
          className={styles['third-section-button']}
          label={dictionary.send}
          isDisabled={isDisabledChooseTemplateBtn}
          setSelectedStep={() => setSelectedStep([{ begin: true, end: true }, { begin: true, end: true }, { begin: true, end: true },{ begin: false, end: false },])}
          />
        </div>
      </div>
    );
  };
  
  
  export const BadgeTemplateStep4: FC<badgeStep2Type> = ({ dictionary, image, chooseTemplate, isDisabledChooseTemplateBtn, setChooseTemplateBtn, setSelectedStep }) => {
    useEffect(() => {
      setChooseTemplateBtn(true);
    }, []);
    return (
      <>
      <h1>Step4</h1>
        
      </>
    )
  }