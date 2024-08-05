import React, { FunctionComponent, useRef } from 'react'
import Image from 'next/image';
import styles from './badges-card.module.scss'
import { badgeStateType } from '@app/[lang]/sections/badge-template/badge-template';


export type badgeCardType={
    image:any,
    badgeRef: React.RefObject<HTMLDivElement>,
    height: number | `${number}` | undefined|null,
    width: number | `${number}` | undefined|null,
    alt:string,
    cardType:boolean,
    setChooseTemplateBtn: React.Dispatch<React.SetStateAction<boolean>>,
    setSelectedStep: React.Dispatch<React.SetStateAction<badgeStateType[]>>
    setBadgeSelect:React.Dispatch<React.SetStateAction<any>>
}
export type badgeCardPresentationType={
  image:any,
  badgeRef: React.RefObject<HTMLDivElement>,
  height: number | `${number}` | undefined,
  width: number | `${number}` | undefined,
  alt:string,
  cardType:boolean,
}

export type IconButtonType={
  image:any,
  height: number | `${number}` | undefined,
  width: number | `${number}` | undefined,
  alt:string,
}

export type chooseTemplateButtonType={
  label: string;
  isDisabled: boolean;
  setSelectedStep: () => void;
  className?: string;
}



const BadgeCard:FunctionComponent<badgeCardType> =({ image,badgeRef ,height=108, width=192,alt,cardType,setChooseTemplateBtn ,setSelectedStep,setBadgeSelect})=> {


  const handleClick = () => {
    console.log("onclick BadgeCard");
   

      setChooseTemplateBtn((prev)=>{
        if (prev) {
          if (badgeRef.current) {
          badgeRef.current!.style.borderWidth="3px";
          badgeRef.current!.style.borderStyle = "solid";
          }
          setBadgeSelect(image);
          setSelectedStep([{begin:true,end:false}]);
          
        } else {
          if (badgeRef.current) {
          badgeRef.current!.style.borderWidth="2px";
          badgeRef.current!.style.borderStyle = "";
          }
          setBadgeSelect(null);
          setSelectedStep([]);
        }
        return !prev;
        })
    
    console.dir(badgeRef.current);
  };
  return (
    <div  ref={badgeRef} className={cardType?styles.container:styles.seconde} onClick={handleClick}>
      <Image src={image} width={width!} height={height!} alt={alt} />
    </div>
  )
}

export default BadgeCard


export const BadgeCardPresentation:FunctionComponent<badgeCardPresentationType> =({ image,badgeRef ,height=108, width=192,alt,cardType})=> {


  const handleClick = () => {
    console.log("onclick BadgeCardPresentation");
   
    
    console.dir(badgeRef.current);
  };
  return (
    <div  ref={badgeRef} className={cardType?styles.container:styles.seconde} onClick={handleClick}>
      <Image src={image} width={width} height={height} alt={alt} />
    </div>
  )
}




export const IconButton:FunctionComponent<IconButtonType>=({image, height=24, width=14,alt})=>{
  const iconButtonRef = useRef(null);

  const handleClick = () => {
    console.log("onclick IconButton")
  };
  return (
    <button ref={iconButtonRef} className={styles.button} onClick={handleClick} >{<Image src={image} width={width} height={height} alt={alt} />}</button>
  )
}

export const ChooseTemplateButton: FunctionComponent<chooseTemplateButtonType> = ({ label, isDisabled, setSelectedStep, className }) => {
  const chooseTemplateButtonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    console.log("onclick ChooseTemplateButton");
    console.log(`ChooseTemplateButton : ${isDisabled}`);
    setSelectedStep();
  };

  // Combine default class with custom className if provided
  const buttonClass = `${styles['choose-button']} ${className || ''}`;

  return (
    <button
      ref={chooseTemplateButtonRef}
      className={buttonClass}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};
